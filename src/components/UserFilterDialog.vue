<template>
  <div v-if="isOpen">
    <div class="fixed inset-0 bg-black/50 z-40" @click="handleClose"></div>
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-hidden flex flex-col" @click.stop>
        <div class="px-6 py-4 border-b flex items-center justify-between">
          <h3 class="text-lg font-semibold text-slate-800">詳細検索</h3>
          <button @click="handleClose" class="p-2 hover:bg-slate-100 rounded-lg"><CloseIcon class="w-5 h-5 text-slate-600" /></button>
        </div>

        <div class="flex-1 overflow-y-auto px-6 py-4">
          <div class="space-y-5">
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-2">名前</label>
              <input v-model="filters.name" type="text" placeholder="ユーザー名を入力" class="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
              <label class="block text-sm font-medium text-slate-700 mb-2">メールアドレス</label>
              <input v-model="filters.email" type="email" placeholder="メールアドレスを入力" class="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
              <label class="block text-sm font-medium text-slate-700 mb-2">役割</label>
              <select v-model="filters.role" class="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                <option value="">すべての役割</option>
                <option value="管理者">管理者</option>
                <option value="編集者">編集者</option>
                <option value="閲覧者">閲覧者</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-slate-700 mb-2">ステータス</label>
              <select v-model="filters.status" class="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                <option value="">すべてのステータス</option>
                <option value="アクティブ">アクティブ</option>
                <option value="休止中">休止中</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-slate-700 mb-2">登録日（開始）</label>
              <input v-model="filters.dateFrom" type="date" class="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
              <label class="block text-sm font-medium text-slate-700 mb-2">登録日（終了）</label>
              <input v-model="filters.dateTo" type="date" class="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div class="bg-blue-50 p-4 rounded-lg">
              <p class="text-sm text-blue-800"><strong>検索のヒント:</strong> 複数の条件を組み合わせて絞り込むことができます。</p>
            </div>
          </div>
        </div>

        <div class="px-6 py-4 border-t flex items-center justify-between gap-3">
          <button @click="handleReset" class="px-4 py-2.5 text-slate-700 hover:bg-slate-100 rounded-lg font-medium">リセット</button>
          <div class="flex gap-3">
            <button @click="handleClose" class="px-4 py-2.5 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 font-medium">キャンセル</button>
            <button @click="handleApply" class="px-4 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center gap-2 font-medium"><SearchIcon class="w-4 h-4"/> 検索</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'
import { X as CloseIcon, Search as SearchIcon } from 'lucide-vue-next'

const props = defineProps<{ isOpen?: boolean }>()
const emit = defineEmits<{
  (e: 'close'): void
  (e: 'apply-filters', filters: Record<string,string>): void
}>()

const isOpen = computed(() => props.isOpen ?? false)

const filters = reactive({ name: '', email: '', role: '', status: '', dateFrom: '', dateTo: '' })

function handleClose(){ emit('close') }
function handleApply(){ emit('apply-filters', { ...filters }); emit('close') }
function handleReset(){ Object.assign(filters, { name: '', email: '', role: '', status: '', dateFrom: '', dateTo: '' }); emit('apply-filters', { ...filters }) }
</script>

<style scoped></style>
