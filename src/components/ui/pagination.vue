<template>
	<nav class="flex items-center gap-2" aria-label="Pagination">
		<button :disabled="current<=1" @click="go(current-1)" class="px-2 py-1 bg-gray-100 rounded">Prev</button>
		<template v-for="p in windowPages" :key="p.key">
			<button v-if="p.type==='page'" @click="go(p.page)" :class="['px-2 py-1 rounded', p.page===current ? 'bg-blue-600 text-white' : 'hover:bg-gray-100']">{{ p.page }}</button>
			<span v-else class="px-2">…</span>
		</template>
		<button :disabled="current>=pageCount" @click="go(current+1)" class="px-2 py-1 bg-gray-100 rounded">Next</button>
	</nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{ modelValue?: number; pageCount?: number; window?: number }>()
const emit = defineEmits(['update:modelValue'])
const current = props.modelValue ?? 1
const pageCount = props.pageCount ?? 1
const windowSize = props.window ?? 5

const windowPages = computed(() => {
	const pages: Array<any> = []
	if (pageCount <= windowSize) {
		for (let i=1;i<=pageCount;i++) pages.push({ type: 'page', page: i, key: i })
		return pages
	}
	const left = Math.max(1, current - Math.floor(windowSize/2))
	const right = Math.min(pageCount, left + windowSize -1)
	if (left > 1) { pages.push({ type: 'page', page: 1, key: 1 }); if (left>2) pages.push({ type: 'ellipsis', key: 'l' }) }
	for (let p = left; p<=right; p++) pages.push({ type: 'page', page: p, key: p })
	if (right < pageCount) { if (right < pageCount-1) pages.push({ type: 'ellipsis', key: 'r' }); pages.push({ type: 'page', page: pageCount, key: pageCount }) }
	return pages
})

function go(p:number){ const to = Math.max(1, Math.min(pageCount, p)); emit('update:modelValue', to) }
</script>

<style scoped></style>
