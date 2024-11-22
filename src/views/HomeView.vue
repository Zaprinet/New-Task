<script setup>
  import {RouterLink,} from 'vue-router'
  import { ref } from 'vue';

  const title = ref('List Of Completed Components')
</script>
  
<template>
  <h1 class="topic">{{ title }}</h1>
  <ul>
    <li><RouterLink to="/1">First Component</RouterLink></li>
    <li><RouterLink to="/2">Second Component</RouterLink></li>
    <li><RouterLink to="/3">Third Component</RouterLink></li>
    <li><RouterLink to="/4">Fourth Component</RouterLink></li>
    <li><RouterLink to="/5">Fifth Component</RouterLink></li>
    <li><RouterLink to="/6">Sixth Component</RouterLink></li>
    <li><RouterLink to="/7">Seventh Component</RouterLink></li>
    <li><RouterLink to="/8">Eight Component</RouterLink></li>
    <li><RouterLink to="/abaainput">Input Component</RouterLink></li>
  </ul>
</template>

<style lang="css" scoped>

</style>


