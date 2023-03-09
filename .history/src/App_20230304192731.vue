<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div>
        <header class="bg-primary p-5 shadow">
            <div class="container_header">
                <div class="d-flex">
                    <RouterLink to="/" style="text-decoration: none;"><h6 class="text-white m-2 btn btn-primary">Register</h6></RouterLink>
                    <RouterLink to="/login" style="text-decoration: none;"><h6 class="text-white m-2 btn btn-primary">Login</h6></RouterLink>
                </div>
            </div>
        </header>
    </div>

  <RouterView />
</template>

<style>
.container_header{  
  display: grid;
  place-content: center;
}
</style>

