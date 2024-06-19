<template>
    <div class="flex justify-center items-center h-screen bg-gray-100">
      <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 class="text-2xl font-bold mb-4">{{ formTitle }}</h2>
  
        <form @submit.prevent="convertNumber">
          <div class="mb-4">
            <label for="conversionType" class="block text-gray-700 mb-2">Conversion Type:</label>
            <select
              id="conversionType"
              v-model="conversionType"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-300"
            >
              <option value="binary-to-decimal">Binary to Decimal</option>
              <option value="decimal-to-binary">Decimal to Binary</option>
              <option value="signed-binary-to-decimal">Signed Binary to Decimal</option>
              <option value="decimal-to-hex">Decimal to Hexadecimal</option>
              <option value="binary-to-hex">Binary to Hexadecimal</option>
            </select>
          </div>
  
          <div class="mb-4">
            <label for="numberInput" class="block text-gray-700 mb-2">Enter Number:</label>
            <input
              type="text"
              id="numberInput"
              v-model="numberInput"
              placeholder="Enter binary or decimal number"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-300"
            />
          </div>
  
          <button type="submit" class="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
            Convert
          </button>
        </form>
  
        <div v-if="result !== null" class="mt-4">
          <p class="font-bold">Result:</p>
          <p>{{ result }}</p>
        </div>
  
        <div v-if="error" class="mt-4 text-red-500">
          <p>{{ error }}</p>
        </div>
  
        <decimal-steps v-if="conversionType === 'binary-to-decimal'" :number="numberInput" :type="conversionType" />
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import DecimalSteps from './DecimalSteps.vue';
  
  export default {
    name: 'BinaryDecimalConverter',
    components: {
      DecimalSteps,
    },
    data() {
      return {
        numberInput: '',
        conversionType: 'binary-to-decimal',
        result: null,
        error: null,
        showSteps: false,
      };
    },
    computed: {
      formTitle() {
        switch (this.conversionType) {
          case 'binary-to-decimal':
            return 'Binary to Decimal Converter';
          case 'decimal-to-binary':
            return 'Decimal to Binary Converter';
          case 'signed-binary-to-decimal':
            return 'Signed Binary to Decimal Converter';
          case 'decimal-to-hex':
            return 'Decimal to Hexadecimal Converter';
          case 'binary-to-hex':
            return 'Binary to Hexadecimal Converter';
          default:
            return 'Binary and Decimal Converter';
        }
      },
    },
    methods: {
      async convertNumber() {
        this.result = null;
        this.error = null;
        console.log(`Converting number: ${this.numberInput}`);
        try {
          let endpoint = '';
          let requestData = {};
  
          switch (this.conversionType) {
            case 'binary-to-decimal':
              endpoint = 'http://localhost:5000/convert/binary-to-decimal';
              requestData = { binary: this.numberInput };
              break;
            case 'decimal-to-binary':
              endpoint = 'http://localhost:5000/convert/decimal-to-binary';
              requestData = { decimal: this.numberInput };
              break;
            case 'signed-binary-to-decimal':
              endpoint = 'http://localhost:5000/convert/signed-binary-to-decimal';
              requestData = { binary: this.numberInput };
              break;
            case 'decimal-to-hex':
              endpoint = 'http://localhost:5000/convert/decimal-to-hex';
              requestData = { decimal: this.numberInput };
              break;
            case 'binary-to-hex':
              endpoint = 'http://localhost:5000/convert/binary-to-hex';
              requestData = { binary: this.numberInput };
              break;
            default:
              throw new Error('Invalid conversion type');
          }
  
        //   console.log(`Sending request to ${endpoint} with data:`, requestData);
  
          const response = await axios.post(endpoint, requestData);
          this.$toast.success('Successful Conversion!!!', {
                    timeout: 6000, 
            });
          this.result = response.data.result;          
          this.showSteps = true;  
        } catch (error) {
          this.error = error.response?.data?.error || 'Error converting number';
          console.error('Error converting number:', error);
        }
      },
    },
  };
  </script>
  
  <style>
  /* No need to add styles here if using Tailwind CSS classes */
  </style>
  