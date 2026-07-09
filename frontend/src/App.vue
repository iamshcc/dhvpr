<script setup>
  import { ref } from 'vue';

  const data = ref(null);
  async function getMessageFromApi() {
    const response = await fetch("/api/health");
    const response_data = await response.json();
    data.value = response_data;
  }

  getMessageFromApi()
</script>

<template>
  <p>Message: {{ data }}</p>
</template>
