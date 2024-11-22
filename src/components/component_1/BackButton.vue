<script setup>
  import router from '@/router';
</script>

<template>
  <button @click="router.back" class="goBack">Go Back</button>
</template>

<style lang="css" scoped>
  .goBack{
    position: absolute;
    top: 0;
    left: 0;
  }
</style>