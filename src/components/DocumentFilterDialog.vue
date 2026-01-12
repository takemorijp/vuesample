<template>
  <div v-if="isOpen" class="fixed inset-0 bg-black/40 flex items-center justify-center z-50" @click.self="close" @keydown.esc="close" tabindex="-1">
    <div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4" @click.stop>
      <div class="border-b border-slate-200 px-6 py-4 flex items-center justify-between">
        <h3 class="text-lg font-semibold text-slate-800">ドキュメントフィルター</h3>
        <button @click="close" class="text-slate-400 hover:text-slate-600 transition-colors">
          <X class="w-5 h-5" />
        </button>
      </div>

      <div class="p-6 space-y-4">
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">ファイル種類</label>
          <div class="space-y-2">
            <label v-for="type in fileTypes" :key="type" class="flex items-center gap-2">
              <input type="checkbox" :value="type" v-model="localFilters.types" class="rounded border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-500" />
              <span class="text-sm text-slate-700">{{ type }}</span>
            </label>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">更新日</label>
          <select v-model="localFilters.dateRange" class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="all">すべて</option>
            <option value="today">今日</option>
            <option value="week">1週間以内</option>
            <option value="month">1ヶ月以内</option>
            <option value="year">1年以内</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">サイズ</label>
          <select v-model="localFilters.sizeRange" class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="all">すべて</option>
            <option value="small">1MB未満</option>
            <option value="medium">1MB-10MB</option>
            <option value="large">10MB以上</option>
          </select>
        </div>
      </div>

      <div class="border-t border-slate-200 px-6 py-4 flex items-center justify-end gap-3">
        <button @click="reset" class="px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
          リセット
        </button>
        <button @click="cancel" class="px-4 py-2 border border-slate-300 hover:bg-slate-50 rounded-lg transition-colors">
          キャンセル
        </button>
        <button @click="apply" class="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-lg transition-colors">
          適用
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { X } from 'lucide-vue-next'

interface DocumentFilters {
  types: string[]
  dateRange: string
  sizeRange: string
}

interface Props {
  isOpen: boolean
  filters: DocumentFilters
}

const props = defineProps<Props>()
const emit = defineEmits<{
  close: []
  apply: [filters: DocumentFilters]
}>()

const fileTypes = ['PDF', 'Word', 'Excel', 'PowerPoint', 'Text', 'CSV']

const localFilters = ref<DocumentFilters>({
  types: [],
  dateRange: 'all',
  sizeRange: 'all'
})

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    localFilters.value = { ...props.filters }
  }
})

function close() {
  emit('close')
}

function cancel() {
  emit('close')
}

function apply() {
  emit('apply', localFilters.value)
  emit('close')
}

function reset() {
  localFilters.value = {
    types: [],
    dateRange: 'all',
    sizeRange: 'all'
  }
}
</script>

<style scoped>
</style>
