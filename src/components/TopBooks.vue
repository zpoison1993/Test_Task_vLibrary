<template>
  <div class="about container p-3">
   <h1 class="page-header p-3">Пятёрка самых популярных книг</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Рейтинг</th>  
          <th>Название</th>
          <th>Автор</th>
          <th>Прочитана</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(book, index) in booksFilteredAndSorted" v-bind:key="book.id">
          <th scope="row">{{index+1}}</th>  
          <td>{{book.title}}</td>
          <td>{{book.author}}</td>
          <td>{{book.readAmount}} раз(а)</td>
          <td>
            <router-link class="btn btn-success" v-bind:to="'/Test_Task_vLibrary/book/'+book.id">Подробнее
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import BooksJSON from '../Books2.JSON';
import UsersJSON from "../Users.JSON";


export default {
  name: 'topbooks',
  data() {
      return {
        books: BooksJSON,
        users: UsersJSON,
        booksFiltered: [],
        
      }
  },
  props: {
    
  },
    computed: {
        booksFilteredAndSorted: function() {
        // This computed function sorts from max to min filtered read books
        // and limits the array length up to 5 elements 
         return this.booksFiltered.slice(0).sort((a,b) => {return b.readAmount - a.readAmount}).slice(0,5);
        }
    },
    methods: {
        getReadBooksAmount(users){
            let readBooksArr = [];
            users.forEach((user) => {
                readBooksArr.push(...Array.from(user.readBooksIDs));
                // console.log(Array.from(user.readBooksIDs));
            });
            
            // console.log(Array.from(readBooksArr));

            let result = {};
            readBooksArr.forEach(function(a){
            result[a] = result[a] + 1 || 1;
            });
            // console.log(Object.keys(result));
            // console.log(Object.values(result));

            return result   
        },
        filterReadBooks(users,books) {
            const readBooksObj = this.getReadBooksAmount(users);
            let readBooksObjKeys = Object.keys(readBooksObj).map(string => parseInt(string));
            let readBooksObjValues = Object.values(readBooksObj).map(string => parseInt(string));
            
            console.log(readBooksObjKeys);
            console.log(readBooksObjValues); 
            let booksFiltered = [];
            for(let i = 0 ; i<=readBooksObjKeys.length; i++) {
                books.forEach(book => {
                    if (book.id == readBooksObjKeys[i]) {
                        booksFiltered.push(book);
                    } 
                }
                )   
            }
            // booksFiltered.readAmount = readBooksObjValues[2];

            
                booksFiltered.forEach((item,index) => {
                item.readAmount = readBooksObjValues[index];
                });
            
            
            console.log(booksFiltered);

            return this.booksFiltered = booksFiltered;   
        }

  },
  created() {
      this.getReadBooksAmount(this.users)
        // this.sortReadBooks(this.users);
        this.filterReadBooks(this.users,this.books)
  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
