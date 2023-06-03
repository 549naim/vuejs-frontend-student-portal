<template>
    <div class="authincation mt-5">
        <div class="container-fluid h-100">
            <div class="row justify-content-center h-100 align-items-center">
                <div class="col-md-6">
                    <div class="authincation-content">
                        <div class="row no-gutters">
                            <div class="col-xl-12">
                                <div class="auth-form">
                                    <h4 class="text-center mb-4">Sign up your account</h4>
                                    
                                    <form  @submit.prevent="registerUser">
                                        <div class="form-group">
                                            <p  class="text-danger">{{err_name }}</p>
                                            <label><strong>Name</strong></label>
                                            <input v-model="user.name" type="text" class="form-control" placeholder="Fullname" >
                                        </div>
                                        <div class="form-group">
                                            <p  class="text-danger">{{err_email }}</p>
                                            <label><strong>Email</strong></label>
                                            <input v-model="user.email" type="email" class="form-control" placeholder="hello@example.com" >
                                        </div>
                                        <div class="form-group">
                                            <p  class="text-danger">{{err_password }}</p>
                                            <label><strong>Password</strong></label>
                                            <input v-model="user.password" type="password" class="form-control" placeholder="Password" >
                                        </div>
                                        <div class="form-group">
                                            
                                            <label><strong>Confirm Password</strong></label>
                                            <input v-model="user.password_confirmation" type="password" class="form-control" placeholder="Confirm Password" >
                                        </div>
                                        
                                        <div class="form-group">
                                            <p  class="text-danger">{{err_tc }}</p>
                                            <label><strong>Aggree with terms and condition</strong></label> <br>
                                            <input v-model="user.tc" type="checkbox">
                                        </div>
                                        <div class="text-center mt-4">
                                            <button type="submit" class="btn btn-primary btn-block">Sign me up</button>
                                        </div>
                                    </form>
                                    <div class="new-account mt-3">
                                        <p>Already have an account? <RouterLink to="/" class="text-primary" >Sign in</RouterLink></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios'
import {useRouter , RouterLink} from 'vue-router'
import router from '../router';

const user = reactive({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    tc: "",
});

let err_email= ref("");
let err_name= ref("");
let err_password= ref("");
let err_tc= ref("");

const registerUser = () => {

    err_email.value="",
    err_name.value="",
    err_password.value="",
    err_tc.value="",

axios({
    method: 'post',
    url: 'http://127.0.0.1:8000/api/register',
    data: {
        name:user.name,
        email: user.email,
        password: user.password,
        password_confirmation: user.password_confirmation,
        tc: user.tc,
    }
}).then((res) => 
  {
    if (res.data.success) { 
        router.push('/');
       
    }
  }
).catch((error) => {
    console.warn('Not good man :(');
    err_email.value = error.response.data.errors.email[0];
    err_name.value = error.response.data.errors.name[0];
    err_password.value = error.response.data.errors.password[0];
    err_tc.value = error.response.data.errors.tc[0];

})

}

// onMounted(() => {
//     if (localStorage.token && localStorage.userType == 1) {
//         router.push('/admindashboard');
//     }
//     if (localStorage.token && localStorage.userType == 0) {
//         router.push('/studentdashboard');
//     } 
// })

</script>

<style lang="scss" scoped>

</style>