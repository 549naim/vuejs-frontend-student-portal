<template>
    <div>

        <div class="nav-header">
            <a class="brand-logo">
                <h2 class="text-white">Admin dashboard</h2>
            </a>

            <div class="nav-control">
                <div class="hamburger">
                    <span class="line"></span><span class="line"></span><span class="line"></span>
                </div>
            </div>
        </div>
        <div class="header">
            <div class="header-content">
                <nav class="navbar navbar-expand">
                    <div class="collapse navbar-collapse justify-content-between">
                        <div class="header-left">
                            <div class="search_bar dropdown">
                                <span class="search_icon p-3 c-pointer" data-toggle="dropdown">
                                    <i class="mdi mdi-magnify"></i>
                                </span>
                                <div class="dropdown-menu p-0 m-0">
                                    <form>
                                        <input class="form-control" type="search" placeholder="Search" aria-label="Search">
                                    </form>
                                </div>
                            </div>
                        </div>

                        <ul class="navbar-nav header-right">
                            <li class="nav-item dropdown notification_dropdown">
                                <a class="nav-link" href="#" role="button" data-toggle="dropdown">
                                    <i class="mdi mdi-bell"></i>
                                    <div class="pulse-css"></div>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <ul class="list-unstyled">
                                        <li class="media dropdown-item">
                                            <span class="success"><i class="ti-user"></i></span>
                                            <div class="media-body">
                                                <a href="#">
                                                    <p><strong>Martin</strong> has added a <strong>customer</strong>
                                                        Successfully
                                                    </p>
                                                </a>
                                            </div>
                                            <span class="notify-time">3:20 am</span>
                                        </li>
                                        <li class="media dropdown-item">
                                            <span class="primary"><i class="ti-shopping-cart"></i></span>
                                            <div class="media-body">
                                                <a href="#">
                                                    <p><strong>Jennifer</strong> purchased Light Dashboard 2.0.</p>
                                                </a>
                                            </div>
                                            <span class="notify-time">3:20 am</span>
                                        </li>
                                        <li class="media dropdown-item">
                                            <span class="danger"><i class="ti-bookmark"></i></span>
                                            <div class="media-body">
                                                <a href="#">
                                                    <p><strong>Robin</strong> marked a <strong>ticket</strong> as unsolved.
                                                    </p>
                                                </a>
                                            </div>
                                            <span class="notify-time">3:20 am</span>
                                        </li>
                                        <li class="media dropdown-item">
                                            <span class="primary"><i class="ti-heart"></i></span>
                                            <div class="media-body">
                                                <a href="#">
                                                    <p><strong>David</strong> purchased Light Dashboard 1.0.</p>
                                                </a>
                                            </div>
                                            <span class="notify-time">3:20 am</span>
                                        </li>
                                        <li class="media dropdown-item">
                                            <span class="success"><i class="ti-image"></i></span>
                                            <div class="media-body">
                                                <a href="#">
                                                    <p><strong> James.</strong> has added a<strong>customer</strong>
                                                        Successfully
                                                    </p>
                                                </a>
                                            </div>
                                            <span class="notify-time">3:20 am</span>
                                        </li>
                                    </ul>
                                    <a class="all-notification" href="#">See all notifications <i
                                            class="ti-arrow-right"></i></a>
                                </div>
                            </li>
                            <li class="nav-item dropdown header-profile">
                                <a class="nav-link" href="#" role="button" data-toggle="dropdown">
                                    <i class="mdi mdi-account"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <a href="./app-profile.html" class="dropdown-item">
                                        <i class="icon-user"></i>
                                        <span class="ml-2">Profile </span>
                                    </a>
                                    <a href="./email-inbox.html" class="dropdown-item">
                                        <i class="icon-envelope-open"></i>
                                        <span class="ml-2">Inbox </span>
                                    </a>
                                    <button @click="logout()" class="dropdown-item"> <i class="icon-key"></i>Logout</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        <div class="quixnav">
            <div class="quixnav-scroll">
                <ul class="metismenu" id="menu">

                    <li><a class="has-arrow" href="javascript:void()" aria-expanded="false"><i
                                class="icon icon-single-04"></i><span class="nav-text">Main Menu</span></a>
                        <ul aria-expanded="false">

                            <li>
                                <RouterLink to="/admindashboard">Dashboard</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/admindashboard/addstudent">Add Student</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/admindashboard/addcourse">Add Course</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/admindashboard/addlevel">Add Level</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="">Chartist</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="">Sparkline</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="">Peity</RouterLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>


        <RouterView />

    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import AdminHome from '../views/AdminHome.vue';
import { useRouter, RouterLink, RouterView } from 'vue-router';
import router from '../router';
import axios from 'axios'


const errors = ref({
    message: '',
});

const logout = () => {
   
    axios({
        method: 'post',
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        url: 'http://127.0.0.1:8000/api/logout',
    }).then((res) => {
        if (res.data.success) {
            localStorage.removeItem('token');
            localStorage.removeItem('userType');
            router.push('/');
        } else {
            errors.value.message = res.data.message;
        }

    }
    )


}





</script>

<style lang="scss" scoped></style>