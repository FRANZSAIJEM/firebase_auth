<template>
    <div class="container">
        <div class="card mt-5 shadow">
            <div class="card-header">
                <h1 class="text-center">Register</h1>
            </div>
            <div class="card-body">

                <label for="email">Email</label>
                <input class="form-control" type="text" name="" id="email" v-model="email">
                <br>

                <label for="password">Password</label>
                <input class="form-control" type="password" name="" id="password" v-model="password">
                <br>
               
                <RouterLink to="/login">Already have an account</RouterLink>
            </div>
            <div class="card-footer">
               
                </div>
          
        </div>
    </div>
   
</template>
<script>


</script>

<style>
.container{
    display: grid;
    place-content: center;
}
</style>