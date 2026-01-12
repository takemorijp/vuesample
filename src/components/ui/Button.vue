<template>
  <button
    :class="classes"
    :disabled="disabled || loading"
    :type="type"
    @click="handleClick"
    :aria-busy="loading ? 'true' : undefined"
  >
    <span v-if="loading" class="inline-block mr-2 animate-spin">
      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2v4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 18v4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  type?: 'button' | 'submit' | 'reset'
}>()
const emit = defineEmits<{
  (e: 'click', ev?: MouseEvent): void
}>()

const classes = computed(() => {
  const base = 'inline-flex items-center justify-center font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'
  const size = props.size === 'sm' ? 'px-2 py-1 text-sm' : props.size === 'lg' ? 'px-4 py-2 text-lg' : 'px-3 py-1.5 text-base'
  const variant = props.variant === 'primary'
    ? 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500'
    : props.variant === 'danger'
    ? 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500'
    : props.variant === 'ghost'
    ? 'bg-transparent text-slate-700 hover:bg-slate-100 focus:ring-slate-300'
    : 'bg-slate-100 text-slate-800 hover:bg-slate-200 focus:ring-slate-300'
  const disabled = (props.disabled || props.loading) ? 'opacity-60 cursor-not-allowed' : ''
  return [base, size, variant, disabled].join(' ')
})

function handleClick(e: MouseEvent){ if (!(props.disabled || props.loading)) emit('click', e) }
</script>

<style scoped></style>
