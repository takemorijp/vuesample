<template>
	<textarea
		:value="modelValue"
		@input="onInput"
		:placeholder="placeholder"
		:rows="rows"
		class="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
	/>
</template>

<script setup lang="ts">
const props = defineProps<{ modelValue?: string; rows?: number; placeholder?: string }>()
const emit = defineEmits<{
	(e: 'update:modelValue', v: string): void
}>()
const rows = props.rows ?? 4
const placeholder = props.placeholder ?? ''
function onInput(e: Event){ emit('update:modelValue', (e.target as HTMLTextAreaElement).value) }
</script>

<style scoped></style>
