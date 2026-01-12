<template>
  <div v-if="isOpen" class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center" @click="handleClose">
    <div class="bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 transform transition-all" @click.stop>
      <div class="flex items-start justify-between p-6 pb-4">
        <div class="flex items-start gap-4">
          <div :class="['w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0', colors.icon]">
            <AlertTriangle class="w-6 h-6" />
          </div>
          <div>
            <h3 class="text-xl font-semibold text-slate-800 mb-2">{{ title }}</h3>
            <p class="text-slate-600 text-sm leading-relaxed">{{ message }}</p>
          </div>
        </div>
        <button @click="handleClose" class="p-1 rounded-lg hover:bg-slate-100 transition-colors flex-shrink-0" aria-label="閉じる">
          <X class="w-5 h-5 text-slate-400" />
        </button>
      </div>

      <div class="flex gap-3 justify-end px-6 pb-6 pt-2">
        <button @click="handleClose" class="px-5 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors font-medium">{{ cancelText }}</button>
        <button @click="handleConfirm" :class="['px-5 py-2 text-white rounded-lg transition-colors font-medium', colors.button]">{{ confirmText }}</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { AlertTriangle, X } from 'lucide-vue-next'

const props = defineProps<{
  isOpen: boolean
  title: string
  message: string
  confirmText?: string
  cancelText?: string
  type?: 'danger'|'warning'|'info'
}>()
const emit = defineEmits<{
  (e: 'close'): void
  (e: 'confirm'): void
}>()

const confirmText = props.confirmText ?? '確認'
const cancelText = props.cancelText ?? 'キャンセル'
const type = props.type ?? 'warning'

const colors = computed(() => {
  switch (type) {
    case 'danger': return { icon: 'bg-red-100 text-red-600', button: 'bg-red-500 hover:bg-red-600' }
    case 'info': return { icon: 'bg-blue-100 text-blue-600', button: 'bg-blue-500 hover:bg-blue-600' }
    default: return { icon: 'bg-yellow-100 text-yellow-600', button: 'bg-yellow-500 hover:bg-yellow-600' }
  }
})

function handleClose(){ emit('close') }
function handleConfirm(){ emit('confirm'); emit('close') }
</script>

<style scoped></style>
