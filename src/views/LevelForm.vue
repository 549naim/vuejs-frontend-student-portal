<template>
    <div class="content-body container">
        <RouterLink to="/admindashboard/addlevel" class="btn btn-primary my-2 alllevelbtn">All Level</RouterLink>
        <div class="container">
            <h4 class="text-success" >{{success}}</h4>
            <form @submit.prevent="add_level">
                <div class="form-group">
                    <label for="name"> Level Name</label>
                   
                    <input type="text" id="name" class="form-control" v-model="levelName">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>

    </div>
</template>

<script setup >
import { ref } from "vue"
import axios from "axios"
import { useRoute, RouterLink } from 'vue-router'
import router from '../router';

let levelName = ref("");
let success = ref("");

const add_level = () => {
   
    success.value = "";
    axios({
        method: 'post',
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        url: 'http://127.0.0.1:8000/api/post_level',

        data: {
            name: levelName.value,
        }
    }).then((res) => {
        if (res.data.success) {
            levelName.value ="";
            success.value=res.data.message;

        }

    }
    ).catch((error) => {
        console.warn('Not good man :(', error);


    })

}


</script>

<style lang="css" scoped>
#name {
    width: 60%;
}
.alllevelbtn {
    float: right;
   
}
</style>