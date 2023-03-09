<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div>
        <header class="bg-primary p-5 shadow">
            <div class="container_header">
                <div class="d-flex">
                    <RouterLink to="/" style="text-decoration: none;"><text class="text-white m-2 btn btn-primary">Register</text></RouterLink>
                    <RouterLink to="/login" style="text-decoration: none;"><text class="text-white m-2 btn btn-primary">Login</text></RouterLink>
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
text-white{
  font-size:500px;
}
</style>

