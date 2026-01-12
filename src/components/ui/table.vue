<template>
	<table class="min-w-full border-collapse">
		<thead>
			<tr>
				<th v-for="(col, i) in columns" :key="i" class="text-left border-b p-2">
					<button v-if="col.sortable" @click="toggleSort(col.key)" class="flex items-center gap-2">
						<span>{{ col.label }}</span>
						<span class="text-sm text-slate-500">{{ sortKey===col.key ? (sortDir==='asc' ? '↑' : '↓') : '' }}</span>
					</button>
					<span v-else>{{ col.label }}</span>
				</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(row, ridx) in sortedRows" :key="ridx" class="hover:bg-slate-50">
				<td v-for="(col, cidx) in columns" :key="cidx" class="p-2 border-b">{{ cellValue(row, col) }}</td>
			</tr>
		</tbody>
	</table>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
type Col = { key: string; label: string; sortable?: boolean; formatter?: (v:any,row:any)=>any }
const props = defineProps<{ columns?: Col[]; rows?: Record<string, any>[] }>()
const emit = defineEmits<{
	(e: 'sort', payload: { key: string; dir: 'asc'|'desc' }): void
}>()
const columns = props.columns ?? []
const rows = props.rows ?? []

const sortKey = ref<string | null>(null)
const sortDir = ref<'asc'|'desc'>('asc')

function toggleSort(key: string){
	if (sortKey.value === key) sortDir.value = sortDir.value === 'asc' ? 'desc' : 'asc'
	else { sortKey.value = key; sortDir.value = 'asc' }
	emit('sort', { key, dir: sortDir.value })
}

const sortedRows = computed(() => {
	if (!sortKey.value) return rows
	const copy = [...rows]
	copy.sort((a,b)=>{
		const av = a[sortKey.value as string]
		const bv = b[sortKey.value as string]
		if (av == null) return 1
		if (bv == null) return -1
		if (av === bv) return 0
		return (av > bv ? 1 : -1) * (sortDir.value === 'asc' ? 1 : -1)
	})
	return copy
})

function cellValue(row:any, col: Col){
	if (col.formatter) return col.formatter(row[col.key], row)
	return row[col.key]
}
</script>

<style scoped></style>
