<template>
  <div class="relative">
    <input
      v-bind="attrs"
      :type="type"
      :value="modelValue"
      @input="onInput"
      @change="$emit('change', $event)
      "
      :placeholder="placeholder"
      :disabled="disabled"
      class="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    <button v-if="clearable && modelValue" @click="clear" class="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">✕</button>
  </div>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue'
const props = defineProps<{
  modelValue?: string | number
  type?: string
  placeholder?: string
  clearable?: boolean
  disabled?: boolean
}>()
const emit = defineEmits<{
  (e: 'update:modelValue', v: string | number): void
  (e: 'change', ev: Event): void
}>()
const attrs = useAttrs()
const type = props.type ?? 'text'
const placeholder = props.placeholder ?? ''
const clearable = props.clearable ?? false
const disabled = props.disabled ?? false

function onInput(e: Event){ const v = (e.target as HTMLInputElement).value; emit('update:modelValue', v) }
function clear(){ emit('update:modelValue', '') }
</script>

<style scoped></style>
