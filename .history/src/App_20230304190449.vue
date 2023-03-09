<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <nav class="navbar navbar-expand-lg p-5 bg-primary">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">

      <li class="nav-item">
        <RouterLink to="/" class="nav-link">Register</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/login" class="nav-link">Login</RouterLink>
      </li>
   
    </ul>
  </div>
</nav>


  <RouterView />
</template>
