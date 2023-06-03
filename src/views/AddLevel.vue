<template>
    <div class="content-body">
        <div class="table-responsive container ">

            <RouterLink to="/admindashboard/levelform" class="btn btn-primary my-2 addlevelbtn">Add Level</RouterLink>

            <table class="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Level Name</th>
                        <th class="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in level.data " :key="item.id">
                        <td class="nametext" > {{item.name}} </td>
                        <td class="text-center">
                            <RouterLink :to="`/admindashboard/editlevel/${item.id}`" class="btn btn-info mx-2">Edit</RouterLink>
                            <button class="btn btn-danger  mx-2">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
//@ts-ignore

import { ref, onBeforeMount } from "vue"
import axios from "axios";
import {useRoute ,RouterLink} from 'vue-router'

let level = ref({
    data:null,
});


onBeforeMount(() => {

    level.value.data = null,
      
        axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/api/all_level',
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },

        }).then((res) => {
            if (res.data.success) {
                console.log(res.data.level);
                level.value.data = res.data.level;
                console.log(level,"fjhsdhjfgsdhfgsdhjfghsdj");
        
            
        }
        }
        ).catch((error) => {
            console.warn('Not good man :(', error);
            // errors.value.email = error.response.data.errors.email[0];
            // errors.value.password = error.response.data.errors.password[0];

        })

})

// @ts-ignore
</script>

<style lang="css" scoped>
.addlevelbtn {
    float: right;
   
}
.nametext{
    color: black
}
</style>