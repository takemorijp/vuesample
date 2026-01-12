<template>
	<transition name="fade">
		<div v-if="modelValue" class="fixed inset-0 bg-black/40 flex items-center justify-center z-50" @keydown.esc="close" tabindex="-1">
			<div class="bg-white p-6 rounded max-w-lg w-full shadow-lg" role="dialog" aria-modal="true">
				<header class="mb-4 flex items-center justify-between">
					<h3 class="text-lg font-semibold"><slot name="title">ダイアログ</slot></h3>
					<button @click="close" aria-label="閉じる" class="text-slate-600 hover:text-slate-800">✕</button>
				</header>
				<div>
					<slot />
				</div>
				<footer class="mt-4 text-right">
					<slot name="footer">
						<button @click="close" class="px-3 py-1 bg-gray-200 rounded">閉じる</button>
					</slot>
				</footer>
			</div>
		</div>
	</transition>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
const props = defineProps<{ modelValue: boolean }>()
const emit = defineEmits(['update:modelValue'])
function close() { emit('update:modelValue', false) }
</script>

<style scoped>
.fade-enter-active,.fade-leave-active{transition:opacity .2s}
.fade-enter-from,.fade-leave-to{opacity:0}
</style>
