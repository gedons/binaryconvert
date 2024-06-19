<template>
  <div id="app">
    <BinaryDecimalConverter />
  </div>
</template>

<script>
import BinaryDecimalConverter from '../components/BinaryDecimalConverter.vue';

export default {
  name: 'App',
  components: {
    BinaryDecimalConverter,
  },
};
</script>

<style>
/* No need to add styles here if using Tailwind CSS classes */
</style>
