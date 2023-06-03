<template>
    <div>
        <div class="authincation mt-5">
            <div class="container-fluid h-100">
                <div class="row justify-content-center h-100 align-items-center">
                    <div class="col-md-6">
                        <div class="authincation-content">
                            <div class="row no-gutters">
                                <div class="col-xl-12">
                                    <div class="auth-form">
                                        <h4 class="text-center bg-dark text-white mb-4 p-2">Sign in your Dashboard</h4>

                                        <p v-if="errors.message !='' " class="text-danger">{{errors.message}}</p>
                                       
                                        <form @submit.prevent="loginUser">
                                            <div class="form-group">
                                                <p v-if="errors.email !='' " class="text-danger">{{errors.email}}</p>
                                                <label><strong>Email</strong></label>
                                                <input v-model="user.email" type="email" class="form-control"
                                                    placeholder="hello@example.com" >
                                            </div>
                                            <div class="form-group">
                                                <p v-if="errors.password !='' " class="text-danger">{{errors.password}}</p>
                                                <label><strong>Password</strong></label>
                                                <input v-model="user.password" type="password" class="form-control"
                                                    placeholder="Password" >
                                            </div>
                                            <div class="form-row d-flex justify-content-between mt-4 mb-2">
                                                <div class="form-group">
                                                    <a href="page-forgot-password.html">Forgot Password?</a>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <button type="submit" class="btn btn-primary btn-block">Sign me in</button>
                                            </div>
                                        </form>
                                        <div class="new-account mt-3">
                                            <p>Don't have an account? <RouterLink to="/register" class="text-primary"
                                                    >Sign up</RouterLink></p>
                                        </div>
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
import {useRouter} from 'vue-router'
import router from '../router';





const user = reactive({
    email: "",
    password: "",
});

let errors = ref({
    email: "",
    password: "",
    message:"",
});


const loginUser = () => {
  errors.value.email="",
  errors.value.password="",
  errors.value.message="",

    axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/login',
        data: {
            email: user.email,
            password: user.password,
        }
    }).then((res) => 
      {
        if (res.data.success) {
            localStorage.setItem('token',res.data.token);
            localStorage.setItem('userType',res.data.user_data.user_type);
            if (res.data.user_data.user_type == 0) {
                router.push('/studentdashboard');
            }
            if (res.data.user_data.user_type == 1) {
                router.push('/admindashboard');
            }
            
        }else{
            errors.value.message = res.data.message; 
        }
      
      }
    ).catch((error) => {
    console.warn('Not good man :(');
    errors.value.email = error.response.data.errors.email[0];
    errors.value.password = error.response.data.errors.password[0];

})

}




</script>

<style lang="scss" scoped></style>