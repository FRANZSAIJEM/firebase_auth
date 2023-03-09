<template>
    <div class="card">
        <div class="card-header p-3">
            <h1>Register</h1>
        </div>
        <div class="card-body float-left">
            <div class="form-group m-2">
                <label for="" class="form-label float-start">Email</label>
                <input type="text" name="" id="" class="form-control" v-model="email">
            </div>

            <div class="form-group m-2">
                <label for="" class="form-label float-start">Password</label>
                <input type="password" name="" id="" class="form-control" v-model="password">
            </div>

        </div>
        <div class="card-footer p-3">
            <div class="form-group float-end">
                <button class="btn btn-success" @click="register">Register</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { auth } from '../firebase/index.js'




</script>
<style>
.card{
    width: 400px;
}
</style>