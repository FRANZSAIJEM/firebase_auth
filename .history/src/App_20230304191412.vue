<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div>
        <header class="bg-primary p-5 shadow">
            <div class="container-header">
                <div class="d-flex">
                    <RouterLink to="/"><h1 class="text-white m-2" style="">Register</h1></RouterLink>
                    <RouterLink to="/login"><h1 class="text-white m-2">Login</h1></RouterLink>
                </div>
            </div>
        </header>
    </div>

  <RouterView />
</template>

