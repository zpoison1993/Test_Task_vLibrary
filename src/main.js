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
    {path: '/', component: AllBooks},
    {path: '/topbooks', component: TopBooks},
    {path: '/users', component: Users},
    {path: '/customer/:id', component: CustomerDetails},
    {path: '/user/:id', component: UserDetails},
    {path: '/book/:id', component: BookDetails}
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Test_Task_vLibrary/'
    : '/'
}

// new Vue({
//   router,
//   template: `
//     <div id="app">
//       <router-view></router-view>
//     </div>
//   `
// }).$mount('#app')

