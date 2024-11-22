<script setup>

const props = defineProps({
  label: {
    type: String,
  },
  value: {
    type: String,
  },
});

</script>

<template>
  <div class="wholeInput">
    <label>
      {{ label }}
      <input type="text" :name="name" :value="fullName" @input="$emit('changeValue',event.target.value)" >  
    </label>
  </div>
</template>

<style lang="css" scoped>
  .wholeInput{
    padding: 30px;
  }
</style>