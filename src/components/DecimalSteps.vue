<template>
  <div class="mt-4">
    <h3 class="text-lg font-bold mb-2">Decimal Calculation Steps: {{binary}}</h3>
    <div class="bg-gray-100 p-4 rounded-md shadow-md">
      <p v-for="(step, index) in steps" :key="index" class="mb-2">
        {{ step }}
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'DecimalSteps',
  props: {
    number: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      steps: [],
      binary: '',
      error: null,
    };
  },
  watch: {
    number: 'fetchSteps',
    type: 'fetchSteps',
  },
  methods: {
    async fetchSteps() {
      if (this.type !== 'binary-to-decimal') {
        this.steps = [];
        return;
      }

      try {
        const response = await axios.post('http://localhost:5000/convert/binary-to-decimal-steps', {
          binary: this.number,
        });
        this.steps = response.data.steps;
        this.binary = response.data.binary;
      } catch (error) {
        this.error = error.response?.data?.error || 'Error fetching steps';
        console.error('Error fetching steps:', error);
      }
    },
  },
  mounted() {
    this.fetchSteps();
  },
};
</script>

<style>
/* No need to add styles here if using Tailwind CSS classes */
</style>
