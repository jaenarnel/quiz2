<template>
  <div class="list-product-container container mt-4 shadow p-3 mb-5 bg-white rounded">
    <h2 class="text-center">PRODUCT LIST</h2>
    <p v-if="successMessage" class="list-product-message alert alert-success mt-3 text-center">{{ successMessage }}</p>
    <div class="table-responsive">
      <table class="table align-middle table-hover" v-if="products.length">
        <thead>
          <tr class="table-info">
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>
              <span>{{ product.name }}</span>
            </td>
            <td>
              <span>{{ product.description }}</span>
            </td>
            <td>
              <span>₱{{ product.price }}</span>
            </td>
            <td>
              <div class="btn-group-vertical" role="group">
                <button @click="editProduct(product)" class="btn btn-primary btn-block">
                  <span v-if="product.isSaving" class="spinner-border spinner-border-sm" role="status"
                    aria-hidden="true"></span>
                  Edit
                </button>
                <button @click="deleteProduct(product)" class="btn btn-danger btn-block">
                  <span v-if="product.isDeleting" class="spinner-border spinner-border-sm" role="status"
                    aria-hidden="true"></span>
                  Delete
                </button>
              </div>
              <router-link to="/addproduct">
                <button
                  class="btn btn-dark rounded-circle position-fixed d-flex align-items-center justify-content-center y-"
                  style="bottom: 20px; right: 20px; width: 60px; height: 60px; font-size: 2rem; padding-top: 1px;">
                  {{ text }}
                </button>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else>
        <p class="alert alert-warning mt-3 text-center">No product available!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      successMessage: '',
      text: '+'
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    editProduct(product) {
      this.$router.push({ name: 'EditProduct', params: { id: product.id } });
    },
    deleteProduct(product) {
      this.$router.push({ name: 'DeleteProduct', params: { id: product.id } });
    }
  },
};
</script>

<style scoped>
.container {
  max-width: 70%;
}

.shadow {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.rounded {
  border-radius: 5px;
}

.list-product-message {
  max-width: 100%;
}
</style>
