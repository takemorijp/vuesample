<template>
	<div>
		<div class="flex gap-2 mb-2">
			<button v-for="(t,i) in tabs" :key="i" @click="select(i)" :class="['px-3 py-1 rounded', { 'bg-blue-600 text-white': i===selectedIndex }]">{{ t.label }}</button>
		</div>
		<div>
			<slot :name="selectedSlot" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
const props = defineProps<{ tabs: Array<{ label: string; name?: string }>; modelValue?: number }>()
const emit = defineEmits(['update:modelValue'])
const selectedIndex = ref(props.modelValue ?? 0)
watch(() => props.modelValue, v => { if (v!==undefined) selectedIndex.value = v })
function select(i:number){ selectedIndex.value = i; emit('update:modelValue', i) }
const selectedSlot = () => props.tabs[selectedIndex.value]?.name || 'default'
</script>

<style scoped></style>
