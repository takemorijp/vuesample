<template>
  <img :src="src" @error="onError" :alt="alt" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{ src: string; alt?: string; fallback?: string }>()
const imgSrc = ref(props.src)
function onError() { imgSrc.value = props.fallback || '' }
</script>

<style scoped></style>
