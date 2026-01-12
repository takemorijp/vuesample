<template>
  <main class="p-6">
    <div class="max-w-7xl mx-auto">
      <div class="mb-8">
        <div class="flex items-center justify-between mb-4">
          <div>
            <h2 class="text-3xl font-semibold text-slate-800 mb-2">ドキュメント</h2>
            <p class="text-slate-600">ファイルとドキュメントの管理</p>
          </div>
          <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2">
            <Plus class="w-5 h-5" />
            新規作成
          </button>
        </div>

        <div class="flex gap-4">
          <div class="flex-1 relative">
            <Search class="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input v-model="query" type="text" placeholder="ドキュメントを検索..." class="w-full pl-11 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <button @click="filterDialogOpen = true" class="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2">
            <Filter class="w-5 h-5" />
            フィルター
            <span v-if="activeFiltersCount > 0" class="ml-1 px-2 py-0.5 bg-blue-500 text-white text-xs rounded-full">{{ activeFiltersCount }}</span>
          </button>
        </div>
      </div>

      <div class="bg-white rounded-lg border border-slate-200 overflow-hidden">
        <table class="w-full">
          <thead class="bg-slate-50 border-b border-slate-200">
            <tr>
              <th class="text-left px-6 py-3 text-sm font-medium text-slate-700">名前</th>
              <th class="text-left px-6 py-3 text-sm font-medium text-slate-700">種類</th>
              <th class="text-left px-6 py-3 text-sm font-medium text-slate-700">更新日</th>
              <th class="text-left px-6 py-3 text-sm font-medium text-slate-700">サイズ</th>
              <th class="text-right px-6 py-3 text-sm font-medium text-slate-700">操作</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200">
            <tr v-for="(doc, index) in pagedDocuments" :key="startIndex + index" class="hover:bg-slate-50 transition-colors">
              <td class="px-6 py-4">
                <div class="flex items-center gap-3">
                  <FileText class="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span class="font-medium text-slate-800">{{ doc.name }}</span>
                </div>
              </td>
              <td class="px-6 py-4"><span class="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">{{ doc.type }}</span></td>
              <td class="px-6 py-4 text-slate-600">{{ doc.date }}</td>
              <td class="px-6 py-4 text-slate-600">{{ doc.size }}</td>
              <td class="px-6 py-4 text-right">
                <div class="flex items-center justify-end gap-2">
                  <button class="p-2 hover:bg-slate-100 rounded transition-colors"><Download class="w-4 h-4 text-slate-600" /></button>
                  <button @click="showDeleteAlert(doc.name)" class="p-2 hover:bg-red-50 rounded transition-colors"><Trash2 class="w-4 h-4 text-red-600" /></button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="flex items-center justify-between mt-6">
        <p class="text-sm text-slate-600">{{ startIndex+1 }}-{{ Math.min(endIndex, allDocuments.length) }} / {{ allDocuments.length }}件のドキュメント</p>
        <div class="flex gap-2">
          <button @click="prevPage" :disabled="currentPage===1" class="px-3 py-1 border border-slate-300 rounded hover:bg-slate-50 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed">前へ</button>
          <button v-for="p in totalPages" :key="p" @click="gotoPage(p)" :class="['px-3 py-1 rounded text-sm', currentPage===p ? 'bg-blue-500 text-white hover:bg-blue-600' : 'border border-slate-300 hover:bg-slate-50']">{{ p }}</button>
          <button @click="nextPage" :disabled="currentPage===totalPages" class="px-3 py-1 border border-slate-300 rounded hover:bg-slate-50 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed">次へ</button>
        </div>
      </div>

      <ConfirmDialog v-if="dialogOpen" @close="dialogOpen=false">
        <h3 class="font-semibold text-lg">ファイルを削除しますか？</h3>
        <p class="mt-2">「{{ selectedDoc }}」を削除してもよろしいですか？この操作は取り消せません。</p>
        <div class="mt-4 text-right">
          <button @click="dialogOpen=false" class="px-3 py-1 border rounded mr-2">キャンセル</button>
          <button @click="confirmDeleteOk" class="px-3 py-1 bg-red-600 text-white rounded">削除</button>
        </div>
      </ConfirmDialog>

      <DocumentFilterDialog 
        :isOpen="filterDialogOpen" 
        :filters="documentFilters" 
        @close="filterDialogOpen = false"
        @apply="applyFilters" 
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { FileText, Search, Plus, Filter, Download, Trash2 } from 'lucide-vue-next'
import ConfirmDialog from '../ConfirmDialog.vue'
import DocumentFilterDialog from '../DocumentFilterDialog.vue'

interface DocumentFilters {
  types: string[]
  dateRange: string
  sizeRange: string
}

// sample data (ported)
const allDocuments = [
  { name: 'プロジェクト企画書.pdf', type: 'PDF', date: '2026/01/10', size: '2.4 MB' },
  { name: '年次報告書.docx', type: 'Word', date: '2026/01/09', size: '1.8 MB' },
  { name: '売上データ.xlsx', type: 'Excel', date: '2026/01/08', size: '856 KB' },
  { name: 'プレゼン資料.pptx', type: 'PowerPoint', date: '2026/01/07', size: '3.2 MB' },
  { name: '議事録_2026_01.txt', type: 'Text', date: '2026/01/06', size: '24 KB' },
  { name: 'マーケティング戦略.pdf', type: 'PDF', date: '2026/01/05', size: '1.5 MB' },
  { name: '予算計画.xlsx', type: 'Excel', date: '2026/01/04', size: '678 KB' },
  { name: '顧客リスト.csv', type: 'CSV', date: '2026/01/03', size: '145 KB' },
  { name: '製品カタログ.pdf', type: 'PDF', date: '2026/01/02', size: '4.1 MB' },
  { name: '営業報告書.docx', type: 'Word', date: '2026/01/01', size: '1.2 MB' },
  { name: '在庫管理表.xlsx', type: 'Excel', date: '2025/12/30', size: '542 KB' },
  { name: '研修資料.pptx', type: 'PowerPoint', date: '2025/12/29', size: '2.8 MB' },
  { name: '契約書テンプレート.docx', type: 'Word', date: '2025/12/28', size: '156 KB' },
  { name: '経費精算書.xlsx', type: 'Excel', date: '2025/12/27', size: '234 KB' },
  { name: '組織図.pdf', type: 'PDF', date: '2025/12/26', size: '987 KB' },
  { name: '採用計画.docx', type: 'Word', date: '2025/12/25', size: '678 KB' },
  { name: '月次レポート.xlsx', type: 'Excel', date: '2025/12/24', size: '1.1 MB' },
  { name: 'FAQ資料.pdf', type: 'PDF', date: '2025/12/23', size: '2.3 MB' },
  { name: '業務マニュアル.docx', type: 'Word', date: '2025/12/22', size: '3.5 MB' },
  { name: '取引先リスト.csv', type: 'CSV', date: '2025/12/21', size: '89 KB' },
]

const query = ref('')
const currentPage = ref(1)
const itemsPerPage = 8
const dialogOpen = ref(false)
const selectedDoc = ref('')
const filterDialogOpen = ref(false)
const documentFilters = ref<DocumentFilters>({
  types: [],
  dateRange: 'all',
  sizeRange: 'all'
})

const activeFiltersCount = computed(() => {
  let count = 0
  if (documentFilters.value.types.length > 0) count++
  if (documentFilters.value.dateRange !== 'all') count++
  if (documentFilters.value.sizeRange !== 'all') count++
  return count
})

const totalPages = computed(() => Math.ceil(allDocuments.length / itemsPerPage))
const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage)
const endIndex = computed(() => startIndex.value + itemsPerPage)
const pagedDocuments = computed(() => allDocuments.slice(startIndex.value, endIndex.value))

function prevPage(){ if (currentPage.value>1) currentPage.value-- }
function nextPage(){ if (currentPage.value<totalPages.value) currentPage.value++ }
function gotoPage(p:number){ currentPage.value = p }

function confirmDelete(name:string){ selectedDoc.value = name; dialogOpen.value = true }
function confirmDeleteOk(){ console.log('削除:', selectedDoc.value); dialogOpen.value = false }

function showDeleteAlert(name:string){
  alert(`${name} を削除します`)
}

function applyFilters(filters: DocumentFilters) {
  documentFilters.value = filters
  currentPage.value = 1
  console.log('適用されたフィルター:', filters)
}
</script>

<style scoped></style>
