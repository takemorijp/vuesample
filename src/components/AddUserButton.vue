<template>
  <button
    type="button"
    :disabled="disabled"
    @click="$emit('click')"
    class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2 disabled:bg-slate-400 disabled:cursor-not-allowed"
  >
    <Plus class="w-5 h-5" />
    <span>{{ label }}</span>
  </button>
</template>

<script setup lang="ts">
import { Plus } from 'lucide-vue-next'

defineProps<{ label?: string; disabled?: boolean }>()
defineEmits<{ (e: 'click'): void }>()
</script>

<style scoped></style>
