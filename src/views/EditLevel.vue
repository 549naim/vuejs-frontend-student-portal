<template>
    <div class="content-body container">
        <RouterLink to="/admindashboard/addlevel" class="btn btn-primary my-2 alllevelbtn">All Level</RouterLink>
        <div class="container">
            <h4 class="text-success" >{{success}}</h4>
            <form @submit.prevent="">
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
import { ref ,onMounted } from "vue"
import axios from "axios"
import { useRoute, RouterLink } from 'vue-router'
import router from '../router';


const route = useRoute();


let levelName = ref("");
let success = ref("");
// onMounted(() => {
//     console.log(route.params.id,"fjkkhdsjfsdf");

// }),

onMounted(() => {


  
    axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/show_level/'+route.params.id,
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },

    }).then((res) => {
        if (res.data.success) {
            console.log(res.data);
          
        
    }
    }
    ).catch((error) => {
        console.warn('Not good man :(', error);
        // errors.value.email = error.response.data.errors.email[0];
        // errors.value.password = error.response.data.errors.password[0];

    })

})
</script>

<style lang="css" scoped>
#name {
    width: 60%;
}
.alllevelbtn {
    float: right;
   
}
</style>