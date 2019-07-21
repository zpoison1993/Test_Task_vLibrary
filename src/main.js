import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import AllBooks from './components/AllBooks'
import TopBooks from './components/TopBooks'
import Users from './components/Users'
import CustomerDetails from './components/CustomerDetails'
import UserDetails from './components/UserDetails'
import BookDetails from './components/BookDetails'


Vue.use(vueResource);
Vue.use(VueRouter);


const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/Test_Task_vLibrary/', component: AllBooks},
    {path: '/Test_Task_vLibrary/topbooks', component: TopBooks},
    {path: '/Test_Task_vLibrary/users', component: Users},
    {path: '/Test_Task_vLibrary/customer/:id', component: CustomerDetails},
    {path: '/Test_Task_vLibrary/user/:id', component: UserDetails},
    {path: '/Test_Task_vLibrary/book/:id', component: BookDetails}
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')



// new Vue({
//   router,
//   template: `
//     <div id="app">
//       <router-view></router-view>
//     </div>
//   `
// }).$mount('#app')

