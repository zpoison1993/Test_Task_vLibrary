(function(t){function e(e){for(var a,r,o=e[0],u=e[1],l=e[2],d=0,m=[];d<o.length;d++)r=o[d],i[r]&&m.push(i[r][0]),i[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);c&&c(e);while(m.length)m.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,o=1;o<s.length;o++){var u=s[o];0!==i[u]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},i={app:0},n=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/Test_Task_vLibrary/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var c=u;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0517":function(t){t.exports=[{id:1,title:"Преступление и Наказание",author:"Ф.Достоевский",busy:!0,userId:2,taken:"2019-06-01",given:"2019-06-15"},{id:2,title:"Собачье Сердце",author:"М.Булгаков",busy:!1,userId:null,taken:null,given:null},{id:3,title:"Мертвые Души",author:"Н.Гоголь",busy:!0,userId:5,taken:"2019-05-12",given:"2019-05-26"},{id:4,title:"Три Товарища",author:"Э.М.Ремарк",busy:!0,userId:1,taken:"2019-06-07",given:"2019-06-21"},{id:5,title:"Отцы и Дети",author:"И.Тургенев",busy:!1,userId:null,taken:null,given:null},{id:6,title:"Палата №6",author:"А.Чехов",busy:!1,userId:null,taken:null,given:null},{id:7,title:"Горе от Ума",author:"А.Грибоедов",busy:!0,userId:3,taken:"2019-07-15",given:"2019-07-29"},{id:8,title:"Отверженные",author:"В.Гюго",busy:!1,userId:null,taken:null,given:null},{id:9,title:"Робинзон Крузо",author:"Д.Дефо",busy:!1,userId:null,taken:null,given:null},{id:10,title:"1984",author:"Д.Оруэлл",busy:!1,userId:null,taken:null,given:null},{id:11,title:"Доктор Живаго",author:"Б.Пастернак",busy:!1,userId:null,taken:null,given:null},{id:12,title:"Приключения Тома Сойера",author:"М.Твен",busy:!1,userId:null,taken:null,given:null},{id:13,title:"На Дне",author:"М.Горький",busy:!0,userId:4,taken:"2019-07-02",given:"2019-07-16"},{id:14,title:"Пиковая Дама",author:"А.Пушкин",busy:!1,userId:null,taken:null,given:null},{id:15,title:"Белый Клык",author:"Д.Лондон",busy:!1,userId:null,taken:null,given:null}]},"0cbf":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"customers container p-3"},[s("h1",{staticClass:"page-header p-3"},[t._v("Книги нашей библиотеки")]),t._m(0),s("table",{staticClass:"table table-striped"},[t._m(1),s("tbody",t._l(t.books,function(e){return s("tr",{key:e.id},[s("td",[t._v(t._s(e.title))]),s("td",[t._v(t._s(e.author))]),e.busy?s("td",{staticStyle:{color:"red"}},[t._v("Недоступна")]):s("td",{staticStyle:{color:"green"}},[t._v("Доступна")]),s("td",[s("router-link",{staticClass:"btn btn-success",attrs:{to:"/Test_Task_vLibrary/customer/"+e.id}},[t._v("Подробнее")])],1)])}),0)])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("h2",{staticClass:"card-title"},[t._v("Сортировать по")]),s("div",{staticClass:"sort-container"},[s("button",{staticClass:"btn btn-light"},[t._v("Названию")]),s("button",{staticClass:"btn btn-light"},[t._v("Автору")]),s("button",{staticClass:"btn btn-light"},[t._v("Доступности")]),s("button",{staticClass:"btn btn-light"},[t._v("Статусу")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("Название")]),s("th",[t._v("Автор")]),s("th",[t._v("Доступность")]),s("th")])])}],n=s("0517"),r={name:"allbooks",data:function(){return{customers:[],books:n}},methods:{},props:{},components:{}},o=r,u=(s("5b87"),s("2877")),l=Object(u["a"])(o,a,i,!1,null,"117654f4",null);e["a"]=l.exports},1:function(t,e){},"2ec6":function(t){t.exports=[{id:1,name:"John Doe",readBooksIDs:[2,8,14],ratings:[2,3,3],comments:["Laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium","Est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et","Quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"]},{id:2,name:"Will Smith",readBooksIDs:[2,14,15],ratings:[4,5,3],comments:["Non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati","Harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et","Doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"]},{id:3,name:"Antony Chief",readBooksIDs:[1,5,6,11,12,13,14],ratings:[1,4,3,2,5,5,4],comments:["Maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor","Ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque","Sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus","Voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis","Ut dolorum nostrum id quia aut est\nfuga est inventore vel eligendi explicabo quis consectetur\naut occaecati repellat id natus quo est\nut blanditiis quia ut vel ut maiores ea","Expedita maiores dignissimos facilis\nipsum est rem est fugit velit sequi\neum odio dolores dolor totam\noccaecati ratione eius rem velit","Fuga eos qui dolor rerum\ninventore corporis exercitationem\ncorporis cupiditate et deserunt recusandae est sed quis culpa\neum maiores corporis et"]},{id:4,name:"Greg Peterson",readBooksIDs:[2,4,9,15],ratings:[3,3,4,2],comments:["Vel quae voluptas qui exercitationem\nvoluptatibus unde sed\nminima et qui ipsam aspernatur\nexpedita magnam laudantium et et quaerat ut qui dolorum","Nihil ut voluptates blanditiis autem odio dicta rerum\nquisquam saepe et est\nsunt quasi nemo laudantium deserunt\nmolestias tempora quo quia","Iste ut laborum aliquid velit facere itaque\nquo ut soluta dicta voluptate\nerror tempore aut et\nsequi reiciendis dignissimos expedita consequuntur libero sed fugiat facilis","Consequatur necessitatibus totam sed sit dolorum\nrecusandae quae odio excepturi voluptatum harum voluptas\nquisquam sit ad eveniet delectus\ndoloribus odio qui non labore"]},{id:5,name:"Rudolf Gruenwald",readBooksIDs:[4,5,6,9,11],ratings:[2,5,4,4,3],comments:["Veritatis voluptates necessitatibus maiores corrupti\nneque et exercitationem amet sit et\nullam velit sit magnam laborum\nmagni ut molestias","Doloribus est illo sed minima aperiam\nut dignissimos accusantium tempore atque et aut molestiae\nmagni ut accusamus voluptatem quos ut voluptates\nquisquam porro sed architecto ut","Qui harum consequatur fugiat\net eligendi perferendis at molestiae commodi ducimus\ndoloremque asperiores numquam qui\nut sit dignissimos reprehenderit tempore","sed illum quis\nut aut culpa labore aspernatur illo\ndolorem quia vitae ut aut quo repellendus est omnis\nesse at est debitis","officiis dolorem voluptas aliquid eveniet tempora qui\nea temporibus labore accusamus sint\nut sunt necessitatibus voluptatum animi cumque\nat reiciendis voluptatem iure aliquid et qui dolores et"]}]},3313:function(t,e,s){},"3dfd":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("nav",{staticClass:"navbar navbar-expand-md navbar-dark bg-dark "},[s("router-link",{staticClass:"navbar-brand",attrs:{to:"/Test_Task_vLibrary/"}},[t._v("vLibrary")]),t._m(0),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarsExampleDefault"}},[s("ul",{staticClass:"navbar-nav mr-auto"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/Test_Task_vLibrary/"}},[t._v("\n            Все книги\n            "),s("span",{staticClass:"sr-only"},[t._v("(current)")])])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/Test_Task_vLibrary/topbooks"}},[t._v("Топ Книг")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/Test_Task_vLibrary/users"}},[t._v("Топ Читателей")])],1)])])],1),s("router-view")],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarsExampleDefault","aria-controls":"navbarsExampleDefault","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],n={name:"app",components:{}},r=n,o=s("2877"),u=Object(o["a"])(r,a,i,!1,null,null,null);e["a"]=u.exports},4407:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e),function(t){s("cadf"),s("551c"),s("f751"),s("097d");var e=s("2b0e"),a=s("3dfd"),i=s("8c4f"),n=s("28dd"),r=s("0cbf"),o=s("9257"),u=s("dbef"),l=s("c0d8"),c=s("7426"),d=s("f12d");e["a"].use(n["a"]),e["a"].use(i["a"]);var m=new i["a"]({mode:"history",base:t,routes:[{path:"/Test_Task_vLibrary/",component:r["a"]},{path:"/Test_Task_vLibrary/topbooks",component:o["a"]},{path:"/Test_Task_vLibrary/users",component:u["a"]},{path:"/Test_Task_vLibrary/customer/:id",component:l["a"]},{path:"/Test_Task_vLibrary/user/:id",component:c["a"]},{path:"/Test_Task_vLibrary/book/:id",component:d["a"]}]});e["a"].config.productionTip=!1,new e["a"]({router:m,render:function(t){return t(a["a"])}}).$mount("#app")}.call(this,"/")},"5b87":function(t,e,s){"use strict";var a=s("4407"),i=s.n(a);i.a},7426:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"details container p-3"},[s("router-link",{staticClass:"btn btn-secondary m-3",attrs:{to:"/Test_Task_vLibrary/users"}},[t._v("Назад к списку читателей")]),s("ul",{staticClass:"list-group"},[s("li",{staticClass:"list-group-item"},[t._v("\n      Имя читателя:\n      "),s("h3",{staticClass:"display-4"},[t._v(t._s(t.user.name))])]),s("h5",{staticClass:"text-muted p-3",staticStyle:{color:"red"}},[t._v("Прочитанные книги: ")]),s("div",{staticClass:"container",attrs:{id:"read-books"}},t._l(t.book,function(e,a){return s("div",{key:e.id,staticClass:"card d-flex flex-wrap"},[s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v(t._s(e.title))]),s("h6",{staticClass:"card-subtitle mt-2 mb-2 text-muted font-italic"},[t._v("Автор: "+t._s(e.author))]),s("h6",{staticClass:"card-subtitle mt-1 mb-1 disabled"},[t._v("Отзыв о книге")]),s("p",{staticClass:"card-text"},[t._v("\n          "+t._s(t.user.comments[a]))]),s("h6",{staticClass:"card-subtitle m-3 text-muted",staticStyle:{"text-align":"right"}},[t._v("Рейтинг книги: "+t._s(t.user.ratings[a])+" из 5")])])])}),0)])],1)},i=[],n=(s("ac6a"),s("7514"),s("0517")),r=s("2ec6"),o={name:"userdetails",data:function(){return{customer:"",books:n,book:"",users:r,user:""}},props:{},methods:{fetchCustomer:function(t){this.$http.get("http://jsonplaceholder.typicode.com/users/".concat(t)).then(function(t){this.customer=t.body})},fetchUser:function(t){var e=this.users.find(function(e){return e.id==t});return this.user=e},fetchBook:function(t){var e=this,s=[];return t.forEach(function(t){s.push(e.books.find(function(e){return e.id==t}))}),this.book=s}},created:function(){var t=this.$route.params.id;console.log(t),this.fetchUser(t),this.fetchBook(this.user.readBooksIDs)}},u=o,l=(s("b5c3"),s("2877")),c=Object(l["a"])(u,a,i,!1,null,"86313b20",null);e["a"]=c.exports},9257:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about container p-3"},[s("h1",{staticClass:"page-header p-3"},[t._v("Пятёрка самых популярных книг")]),s("table",{staticClass:"table table-striped"},[t._m(0),s("tbody",t._l(t.booksFilteredAndSorted,function(e,a){return s("tr",{key:e.id},[s("th",{attrs:{scope:"row"}},[t._v(t._s(a+1))]),s("td",[t._v(t._s(e.title))]),s("td",[t._v(t._s(e.author))]),s("td",[t._v(t._s(e.readAmount)+" раз(а)")]),s("td",[s("router-link",{staticClass:"btn btn-success",attrs:{to:"/Test_Task_vLibrary/book/"+e.id}},[t._v("Подробнее\n          ")])],1)])}),0)])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("Рейтинг")]),s("th",[t._v("Название")]),s("th",[t._v("Автор")]),s("th",[t._v("Прочитана")]),s("th")])])}],n=(s("8615"),s("456d"),s("5df3"),s("1c4c"),s("75fc")),r=(s("ac6a"),s("55dd"),s("0517")),o=s("2ec6"),u={name:"topbooks",data:function(){return{books:r,users:o,booksFiltered:[]}},props:{},computed:{booksFilteredAndSorted:function(){return this.booksFiltered.slice(0).sort(function(t,e){return e.readAmount-t.readAmount}).slice(0,5)}},methods:{getReadBooksAmount:function(t){var e=[];t.forEach(function(t){e.push.apply(e,Object(n["a"])(Array.from(t.readBooksIDs)))});var s={};return e.forEach(function(t){s[t]=s[t]+1||1}),s},filterReadBooks:function(t,e){var s=this.getReadBooksAmount(t),a=Object.keys(s).map(function(t){return parseInt(t)}),i=Object.values(s).map(function(t){return parseInt(t)});console.log(a),console.log(i);for(var n=[],r=function(t){e.forEach(function(e){e.id==a[t]&&n.push(e)})},o=0;o<=a.length;o++)r(o);return n.forEach(function(t,e){t.readAmount=i[e]}),console.log(n),this.booksFiltered=n}},created:function(){this.getReadBooksAmount(this.users),this.filterReadBooks(this.users,this.books)}},l=u,c=s("2877"),d=Object(c["a"])(l,a,i,!1,null,"0144b8d4",null);e["a"]=d.exports},b5c3:function(t,e,s){"use strict";var a=s("3313"),i=s.n(a);i.a},c0d8:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"details container p-3"},[s("router-link",{staticClass:"btn btn-secondary m-3",attrs:{to:"/Test_Task_vLibrary/"}},[t._v("Назад к списку книг")]),s("h1",{staticClass:"display-3"},[t._v(t._s(t.book.title))]),s("ul",{staticClass:"list-group"},[s("li",{staticClass:"list-group-item"},[t._v("Автор: \n        "),s("h3",{staticClass:"display-4"},[t._v("\n          "+t._s(t.book.author)+"\n        ")])]),s("li",{staticClass:"list-group-item"},[t._v("\n      Доступность:\n      "),t.book.busy?s("span",{staticClass:"lead",staticStyle:{color:"red"}},[t._v("Недоступна")]):s("span",{staticClass:"lead",staticStyle:{color:"green"}},[t._v("Доступна")])]),t.book.busy?s("li",{staticClass:"list-group-item"},[t._v("\n      Сведения о статусе\n      "),s("div",[t._v("\n        Сейчас читает:\n        "),s("span",{staticClass:"lead"},[s("b",[t._v(t._s(t.user.name))])])]),s("div",[t._v("\n        Взята читателем:\n        "),s("span",{staticClass:"lead"},[t._v(t._s(t.book.taken))])]),s("div",[t._v("\n        Будет доступна:\n        "),s("span",{staticClass:"lead"},[t._v(t._s(t.book.given))])])]):t._e()])],1)},i=[],n=(s("7514"),s("0517")),r=s("2ec6"),o={name:"customerdetails",data:function(){return{customer:"",books:n,book:"",users:r,user:""}},props:{},methods:{fetchBook:function(t){var e=this.books.find(function(e){return e.id==t});return this.book=e},fetchUser:function(t){var e=this.books.find(function(e){return e.id==t}),s=e.userId,a=this.users.find(function(t){return t.id==s});return this.user=a}},created:function(){var t=this.$route.params.id;this.fetchBook(t),this.fetchUser(t)}},u=o,l=s("2877"),c=Object(l["a"])(u,a,i,!1,null,"d45aa05e",null);e["a"]=c.exports},dbef:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"add container p-3"},[s("h1",{staticClass:"page-header p-3"},[t._v("Читатели нашей библиотеки")]),s("table",{staticClass:"table table-striped"},[t._m(0),s("tbody",t._l(t.usersSorted,function(e,a){return s("tr",{key:e.id},[s("th",{attrs:{scope:"row"}},[t._v(t._s(a+1))]),s("td",[t._v(t._s(e.name))]),s("td",[t._v(t._s(t.readBooksAmount[e.id-1]))]),s("td",[s("router-link",{staticClass:"btn btn-success",attrs:{to:"/Test_Task_vLibrary/user/"+e.id}},[t._v("Подробнее")])],1)])}),0)])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("Рейтинг")]),s("th",[t._v("Имя")]),s("th",[t._v("Прочитано книг")]),s("th")])])}],n=(s("55dd"),s("ac6a"),s("2ec6")),r={name:"users",data:function(){return{customer:{},users:n,readBooksAmount:[],usersSorted:[]}},methods:{getAmountOfBooks:function(t){var e=this;t.forEach(function(t){e.readBooksAmount.push(t.readBooksIDs.length)})},sortUsers:function(t){var e=t.slice(0);return e=e.sort(function(t,e){return e.readBooksIDs.length-t.readBooksIDs.length}),this.usersSorted=e}},props:{},created:function(){this.getAmountOfBooks(this.users),this.sortUsers(this.users)}},o=r,u=s("2877"),l=Object(u["a"])(o,a,i,!1,null,"8adb787a",null);e["a"]=l.exports},f12d:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"details container p-3"},[s("router-link",{staticClass:"btn btn-secondary m-3",attrs:{to:"/Test_Task_vLibrary/topbooks"}},[t._v("Назад к списку книг")]),s("ul",{staticClass:"list-group"},[s("li",{staticClass:"list-group-item"},[t._v("\n      Название книги:\n      "),s("h3",{staticClass:"display-4"},[t._v(t._s(t.book.title))])]),s("h5",{staticClass:"text-muted p-3"},[t._v("Средняя оценка книги: "),s("strong",[t._v(t._s(t.averageRating)+" из 5")])]),s("div",{staticClass:"container lead",attrs:{id:"read-books"}},[t._v(" Отзывы читателей\n        "),t._l(t.comments,function(e,a){return s("div",{key:e.id,staticClass:"card d-flex flex-wrap"},[s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("Автор отзыва: "+t._s(t.user[a].name))]),s("h6",{staticClass:"card-subtitle mt-1 mb-1 disabled"},[t._v("Отзыв о книге")]),s("p",{staticClass:"card-text"},[t._v("\n            "+t._s(e))]),s("h6",{staticClass:"card-subtitle m-3 text-muted",staticStyle:{"text-align":"right"}},[t._v("Рейтинг книги: "+t._s(t.ratings[a])+" из 5")])])])})],2)])],1)},i=[],n=(s("20d6"),s("5df3"),s("1c4c"),s("ac6a"),s("7514"),s("0517")),r=s("2ec6"),o={name:"book",data:function(){return{books:n,users:r,book:"",user:"",comments:"",ratings:""}},computed:{averageRating:function(){var t=0,e=0;return this.ratings.map(function(s){t+=s,e++}),t/e}},methods:{fetchBook:function(t){var e=this.books.find(function(e){return e.id==t});return this.book=e},getBookIndex:function(t){var e=[];return this.users.forEach(function(s){var a=Array.from(s.readBooksIDs),i=a.findIndex(function(e){return e==t});e.push(i)}),e},getUsers:function(t){var e=this.getBookIndex(t),s=[];return this.users.forEach(function(t,a){void 0!==t.comments[e[a]]&&s.push(t)}),console.log(s),this.user=s},getComments:function(t){var e=this.getBookIndex(t),s=[];return this.users.forEach(function(t,a){void 0!==t.comments[e[a]]&&s.push(t.comments[e[a]])}),this.comments=s},getRating:function(t){var e=this.getBookIndex(t),s=[];return this.users.forEach(function(t,a){void 0!==t.ratings[e[a]]&&s.push(t.ratings[e[a]])}),console.log(s),this.ratings=s}},created:function(){var t=this.$route.params.id;this.fetchBook(t),this.getBookIndex(t),this.getComments(t),this.getUsers(t),this.getRating(t)}},u=o,l=s("2877"),c=Object(l["a"])(u,a,i,!1,null,"5dd8383e",null);e["a"]=c.exports}});
//# sourceMappingURL=app.874b7034.js.map