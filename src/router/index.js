import { createRouter, createWebHistory } from 'vue-router';
const Login = () => import('../views/Login.vue');
const Register = () => import('../views/Register.vue');
const StudentDashboard = () => import('../views/StudentDashboard.vue');
const AdminDashboard = () => import('../views/AdminDashboard.vue');
const HomeView = () => import('../views/HomeView.vue');
const AddStudent = () => import('../views/AddStudent.vue');
const AddCourse = () => import('../views/AddCourse.vue');
const AdminHome = () => import('../views/AdminHome.vue');
const AddLevel = () => import('../views/AddLevel.vue');
const LevelForm = () => import('../views/LevelForm.vue');
const EditLevel = () => import('../views/EditLevel.vue');


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta:{
        requiresAuth: false,
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta:{
        requiresAuth: false,
      }
    },
    {
      path: '/studentdashboard',
      name: 'studentdashboard',
      component: StudentDashboard,
      meta:{
        requiresAuth: true,
      }
    },
   
    {
      path: '/admindashboard',
      
      component: AdminDashboard,
      meta:{
        requiresAuth: true,
      },
      children: [
        {
          path: '',
          name: 'admindashboard',
          component: AdminHome
        },
        {
          path: '/admindashboard/addstudent',
        
          component: AddStudent
        },
        {
          path: '/admindashboard/addlevel',
        
          component: AddLevel
        },
        {
          path: '/admindashboard/levelform',
        
          component: LevelForm
        },
        {
          path: '/admindashboard/addcourse',
          
          component: AddCourse
        },
        {
          path: '/admindashboard/editlevel/:id',
          component: EditLevel
        },

      ]
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    }
  ]
})

router.beforeEach((to, from) => {
if(to.meta.requiresAuth && !localStorage.getItem('token')) {
   return {name: 'Login'}
}
if (to.meta.requiresAuth==false && localStorage.token && localStorage.userType == 1) {
   return {name:'admindashboard'}
}
if (to.meta.requiresAuth==false && localStorage.token && localStorage.userType == 0) {
   return {name:'studentdashboard'}
}
})

export default router
