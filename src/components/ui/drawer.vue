<template>
	<div>
		<div v-if="open" class="fixed inset-0 bg-black/40 z-40" @click="close"></div>
		<aside :class="['fixed top-0 right-0 h-full bg-white shadow-lg transition-transform z-50', open ? 'translate-x-0' : 'translate-x-full']" style="width:20rem">
			<div class="p-4 flex items-center justify-between border-b">
				<slot name="header"><h4 class="font-medium">メニュー</h4></slot>
				<button @click="close" aria-label="閉じる" class="text-slate-600 hover:text-slate-800">✕</button>
			</div>
			<div class="p-4 overflow-auto">
				<slot />
			</div>
		</aside>
	</div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, watch, computed } from 'vue'
const props = defineProps<{ modelValue?: boolean }>()
const emit = defineEmits(['update:modelValue'])
const open = computed(() => !!props.modelValue)
function close(){ emit('update:modelValue', false) }
watch(() => props.modelValue, v => {/* keep reactive */})
</script>

<style scoped></style>
