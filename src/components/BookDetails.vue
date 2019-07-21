<template>
  <div class="details container p-3">
    <router-link class="btn btn-secondary m-3" to="/topbooks">Назад к списку книг</router-link>
    <ul class="list-group">
      <li class="list-group-item">
        Название книги:
        <h3 class="display-4">{{book.title}}</h3>
      </li>
        
        <h5 class="text-muted p-3">Средняя оценка книги: <strong>{{averageRating}} из 5</strong></h5>
        <div class="container lead" id="read-books"> Отзывы читателей
          <div v-for="(comment,index) in comments" v-bind:key="comment.id" class="card d-flex flex-wrap">
            <div class="card-body">
              <h5 class="card-title">Автор отзыва: {{user[index].name}}</h5>
              <h6 class="card-subtitle mt-1 mb-1 disabled">Отзыв о книге</h6>
              <p
                class="card-text"
              >
              {{comment}}</p>
              <h6 class="card-subtitle m-3 text-muted" style="text-align:right">Рейтинг книги: {{ratings[index]}} из 5</h6>
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
  name: "book",
  data() {
    return {
      books: BooksJSON,
      users: UsersJSON,
      book: "",
      user: "",
      comments: "",
      ratings: ""

    };
  },
  computed: {
    averageRating: function() {
      let avRating = 0, counter = 0;
      this.ratings.map(rating => {
        avRating += rating;
        counter++;
        })
        return avRating/counter;
    }
   
  },
  methods: {

    fetchBook(ind) {
      let bk = this.books.find(item => item.id == ind);
      // console.log(bk);
      return (this.book = bk);
    },
    getBookIndex(ind) {
      let indexesArray = [];
      this.users.forEach(user => {
      let initialArray = Array.from(user.readBooksIDs);
      // console.log(initialArray);
      
      let index = initialArray.findIndex(el => el == ind);
          // indexesArray.push(Array.from(user.readBooksIDs.indexOf(ind)));
          // console.log('yes');
      indexesArray.push(index);  
        
      });
      // console.log(indexesArray);
      return indexesArray;
    },
    // averageRating(ind) {
    //   let rating = 0, counter = 0;
    //   const indexArr = this.getBookIndex(ind);
    //   this.users.forEach((user,index) => { 
    //     if( user.ratings[indexArr[index]] !== undefined ) 
    //       {
    //         rating +=user.ratings[indexArr[index]];
    //         counter++;
    //       }  
    //   }
    //   )
    //   rating = rating/counter;
    //   // console.log(rating);
    //   return rating;
    // },
    getUsers(ind) {
      const indexArr = this.getBookIndex(ind);
      let usersRead = [];
      this.users.forEach((user,index) => {
        if( user.comments[indexArr[index]] !== undefined ) 
          {
            usersRead.push((user));  
          }  
      }
      );
      console.log(usersRead);
      return this.user = usersRead;
    },
    getComments(ind) {
      const indexArr = this.getBookIndex(ind);
      let comments = [];
      this.users.forEach((user,index) => { 
        if( user.comments[indexArr[index]] !== undefined ) 
          {
            comments.push((user.comments[indexArr[index]]));  
          }  
      }
      );
      // console.log(comments);
      return this.comments = comments;
    },
    getRating(ind) {
      const indexArr = this.getBookIndex(ind);
      let ratings = [];
      this.users.forEach((user,index) => { 
        if( user.ratings[indexArr[index]] !== undefined ) 
          {
             ratings.push((user.ratings[indexArr[index]]));  
          }  
      }
      )
      // rating = rating/counter;
      console.log(ratings);
      return this.ratings = ratings;
    }
    
  },
  created() {

    let g = this.$route.params.id;
    this.fetchBook(g);
    this.getBookIndex(g);
    // this.averageRating(g);
    this.getComments(g);
    this.getUsers(g);
    this.getRating(g);

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
