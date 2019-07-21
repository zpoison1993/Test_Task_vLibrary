<template>
  <div class="add container p-3">
    <h1 class="page-header p-3">Читатели нашей библиотеки</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Рейтинг</th>  
          <th>Имя</th>
          <th>Прочитано книг</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in usersSorted" v-bind:key="user.id">
          <th scope="row">{{index+1}}</th>  
          <td>{{user.name}}</td>
          <td>{{readBooksAmount[user.id-1]}}</td>
          <td>
            <router-link class="btn btn-success" v-bind:to="'/Test_Task_vLibrary/user/'+user.id">Подробнее</router-link>
          </td>
        </tr>
      </tbody>
    </table>
   
  </div>
</template>

<script>
import UsersJSON from '../Users.JSON'

export default {
  name: 'users',
  data() {
      return {
          customer: {},
          users: UsersJSON,
          readBooksAmount: [],
          usersSorted: []
      }
  },
  methods: {
     getAmountOfBooks(users) {
         users.forEach(user => {
             this.readBooksAmount.push(user.readBooksIDs.length);
         });
         
     },
     sortUsers(users) {
        let uSorted = users.slice(0);
         uSorted = (uSorted.sort((a,b) => {return b.readBooksIDs.length - a.readBooksIDs.length}));
         return this.usersSorted = uSorted;
     }
  },
  props: {
    
  },
  created() {
      this.getAmountOfBooks(this.users);
      this.sortUsers(this.users);

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
