<script setup>
import BackButton from '../component_1/BackButton.vue';
import TextInput from './TextInput.vue';
import { ref } from 'vue';

const value = ref('buewk')

</script>

<template>
  <BackButton/>
  <div class="wholePage">
   <TextInput :label="'Name'" :value="value"/>
  </div>
</template>

<style lang="css" scoped>
  .wholePage{
    padding: 20px;
  }
</style>