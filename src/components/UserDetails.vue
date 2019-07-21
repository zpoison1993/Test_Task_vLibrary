<template>
  <div class="details container p-3">
    <router-link class="btn btn-secondary m-3" to="/users">Назад к списку читателей</router-link>
    <ul class="list-group">
      <li class="list-group-item">
        Имя читателя:
        <h3 class="display-4">{{user.name}}</h3>
      </li>
        
        <h5 class="text-muted p-3" style="color:red">Прочитанные книги: </h5>
        <div class="container" id="read-books">
          <div v-for="(bk,index) in book" v-bind:key="bk.id" class="card d-flex flex-wrap" >
          <div class="card-body">
            <h5 class="card-title">{{bk.title}}</h5>
            <h6 class="card-subtitle mt-2 mb-2 text-muted font-italic">Автор: {{bk.author}}</h6>
            <h6 class="card-subtitle mt-1 mb-1 disabled">Отзыв о книге</h6>
            <p
              class="card-text"
            >
            {{user.comments[index]}}</p>
            <h6 class="card-subtitle m-3 text-muted" style="text-align:right">Рейтинг книги: {{user.ratings[index]}} из 5</h6>
          </div>
        </div>
        </div>
        
        <!-- <div v-for="bk in book" v-bind:key="bk.id" class="card">
          {{bk.title}}
          {{bk.author}}
        </div> -->

    </ul>
  </div>
</template>

<script>
import BooksJSON from "../Books2.JSON";
import UsersJSON from "../Users.JSON";

export default {
  name: "userdetails",
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
    fetchCustomer(id) {
      this.$http
        .get(`http://jsonplaceholder.typicode.com/users/${id}`)
        .then(function(response) {
          // console.log(response.body);
          this.customer = response.body;
        });
    },

    fetchUser(ind) {
      let usr = this.users.find(user => user.id == ind);
      return (this.user = usr);
    },
    fetchBook(booksIDS) {
      let bk = [];
      booksIDS.forEach(ID => {
        bk.push(this.books.find(book => book.id == ID));
      });
      return (this.book = bk);
    }
  },
  created() {
    //   this.fetchCustomer(this.$route.params.id);
    //   this.fetchBook(this.$route.params.id);
    let g = this.$route.params.id;
    console.log(g);

    this.fetchUser(g);
    this.fetchBook(this.user.readBooksIDs);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #read-books {
    /* display: flex; */
    /* justify-content: space-between; */
  }
</style>
