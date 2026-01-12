<template>
	<div class="relative">
		<button @click="toggle" class="w-full text-left border px-3 py-2 rounded flex items-center justify-between">
			<span>{{ selectedLabel }}</span>
			<span class="ml-2">▾</span>
		</button>
		<ul v-if="open" class="absolute z-50 mt-1 w-full bg-white border rounded shadow max-h-60 overflow-auto">
			<li v-for="(opt,i) in options" :key="i" @click="select(opt.value)" class="px-3 py-2 hover:bg-slate-100 cursor-pointer">{{ opt.label }}</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
const props = defineProps<{ options?: Array<{ label: string; value: any }>; modelValue?: any; placeholder?: string }>()
const emit = defineEmits<{
	(e: 'update:modelValue', v: any): void
}>()
const options = props.options ?? []
const open = ref(false)
function toggle(){ open.value = !open.value }
function select(v:any){ emit('update:modelValue', v); open.value = false }
const selectedLabel = computed(()=>{
	const found = options.find(o => o.value === props.modelValue)
	return found ? found.label : (props.placeholder ?? '選択してください')
})
</script>

<style scoped></style>
