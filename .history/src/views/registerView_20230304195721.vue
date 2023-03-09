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
import { createUserWithEmailAndPassword } from 'firebase/auth'

const email = ref('')
const password = ref('')
const error = ref('')
const errorMsg = ref('')
const success = ref('')
const successMsg = ref('')

const register = () => {
    if(email.value!='' || password.value!=''){
        createUserWithEmailAndPassword(auth, email.value, password.value)
            .then((cred) => {
                email.value = ""
                password.value = ""
                error.value = false
                success.value = true
                successMsg.value = "Registered Successfully"
            })
            .catch(($err)=>{
                error.value = true
                errorMsg.value = err.message
            })
        }
        else{
            error.value =tr
        }

}





</script>
<style>
.card{
    width: 400px;
}
</style>