<template>
  <div class="details container p-3">
    <router-link class="btn btn-secondary m-3" to="/">Назад к списку книг</router-link>
    <h1 class="display-3">{{book.title}}</h1>
    <ul class="list-group">
      <li class="list-group-item">Автор: 
          <h3 class="display-4">
            {{book.author}}
          </h3>
      </li>
      <li class="list-group-item">
        Доступность:
        <span v-if="book.busy" class="lead" style="color:red">Недоступна</span>
        <span v-else class="lead" style="color:green">Доступна</span>
      </li>
      <li v-if="book.busy" class="list-group-item">
        Сведения о статусе
        <div>
          Сейчас читает:
          <span class="lead"><b>{{user.name}}</b></span>
        </div>
        <div>
          Взята читателем:
          <span class="lead">{{book.taken}}</span>
        </div>
        <div>
          Будет доступна:
          <span class="lead">{{book.given}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import BooksJSON from "../Books2.JSON";
import UsersJSON from "../Users.JSON";

export default {
  name: "customerdetails",
  data() {
    return {
      customer: "",
      books: BooksJSON,
      book: "",
      users: UsersJSON,
      user: ""
    };
  },
  props: {},
  methods: {
    fetchBook(ind) {
      let bk = this.books.find(item => item.id == ind);
      return (this.book = bk);
    },
    fetchUser(ind) {
      let bk = this.books.find(item => item.id == ind);
      let userID = bk.userId;
      let usr = this.users.find(item => item.id == userID);
      return this.user = usr;
    }
  },
  created() {
    let g = this.$route.params.id;
    this.fetchBook(g);
    this.fetchUser(g);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
