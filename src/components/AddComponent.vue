<!-- AddComponent.vue -->

<template>
    <div class="add-component">
      <h2>Add New Product</h2>
      <form @submit.prevent="addProduct">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="productName" required>
        <label for="price">Price:</label>
        <input type="number" id="price" v-model="productPrice" required>
        <button type="submit">Add Product</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AddComponent',
    data() {
      return {
        productName: '',
        productPrice: null,
      };
    },
    methods: {
      addProduct() {
        // Implement logic to add product using API
        console.log('Adding product:', this.productName, this.productPrice);
        // Reset form fields after adding product
        this.productName = '';
        this.productPrice = null;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add component-specific styles here */
  .add-component {
    margin-top: 20px;
  }
  </style>
  