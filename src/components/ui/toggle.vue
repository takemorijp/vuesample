<template><button @click="$emit('toggle')"><slot/></button></template>
<script setup lang="ts">
defineEmits(['toggle'])
</script>
