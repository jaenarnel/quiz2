<!-- HomeComponent.vue -->

<template>
  <div class="home">
    <div class="features">
      <div class="feature">
        <h2>Products</h2>
        <p>Manage your products easily</p>
        <router-link to="/products" class="btn btn-primary">View Products</router-link>
      </div>
      <div class="feature">
        <h2>Users</h2>
        <p>Manage your users</p>
        <router-link to="/users" class="btn btn-primary">Manage Users</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent', // Update component name to HomeComponent
};
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
}

.features {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.feature {
  margin: 0 20px;
}

.feature h2 {
  font-size: 24px;
}

.feature p {
  margin-top: 10px;
  font-size: 16px;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  font-size: 16px;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
