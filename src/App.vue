<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">
        <img src="@/assets/logo.png" width="35" height="35" class="d-inline-block align-top" alt="">
        BetaMart
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav ms-auto align-items-center">
          <li class="nav-item">
            <router-link to="/" class="nav-link mx-2">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/ViewProduct" class="nav-link mx-2">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link mx-2">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/account" class="nav-link mx-2">Account</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
