<template>
	<div class="relative inline-block">
		<button @click="open = !open" class="px-3 py-1 bg-gray-100 rounded">{{ label }}</button>
		<div v-if="open" class="absolute mt-2 right-0 bg-white border rounded shadow">
			<ul>
				<li v-for="(item,i) in items" :key="i"><button @click="choose(item)" class="block px-4 py-2 hover:bg-slate-50 w-full text-left">{{ item.label }}</button></li>
			</ul>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{ items?: Array<{ label: string; value?: any }>; label?: string }>()
const emit = defineEmits(['select'])
const open = ref(false)
const items = props.items ?? []
const label = props.label ?? 'Menu'
function choose(item:any){ emit('select', item); open.value = false }
</script>

<style scoped></style>
