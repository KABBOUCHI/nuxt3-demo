<template>
  <div>
    {{ data.message }}
  </div>
</template>

<script setup>
const data = await $fetch('/api/v1/hello')
</script>

