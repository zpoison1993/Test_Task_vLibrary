(function(t){function e(e){for(var a,o,r=e[0],u=e[1],l=e[2],d=0,m=[];d<r.length;d++)o=r[d],n[o]&&m.push(n[o][0]),n[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);c&&c(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,r=1;r<s.length;r++){var u=s[r];0!==n[u]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},n={app:0},i=[];function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var c=u;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0517":function(t){t.exports=[{id:1,title:"Преступление и Наказание",author:"Ф.Достоевский",busy:!0,userId:2,taken:"2019-06-01",given:"2019-06-15"},{id:2,title:"Собачье Сердце",author:"М.Булгаков",busy:!1,userId:null,taken:null,given:null},{id:3,title:"Мертвые Души",author:"Н.Гоголь",busy:!0,userId:5,taken:"2019-05-12",given:"2019-05-26"},{id:4,title:"Три Товарища",author:"Э.М.Ремарк",busy:!0,userId:1,taken:"2019-06-07",given:"2019-06-21"},{id:5,title:"Отцы и Дети",author:"И.Тургенев",busy:!1,userId:null,taken:null,given:null},{id:6,title:"Палата №6",author:"А.Чехов",busy:!1,userId:null,taken:null,given:null},{id:7,title:"Горе от Ума",author:"А.Грибоедов",busy:!0,userId:3,taken:"2019-07-15",given:"2019-07-29"},{id:8,title:"Отверженные",author:"В.Гюго",busy:!1,userId:null,taken:null,given:null},{id:9,title:"Робинзон Крузо",author:"Д.Дефо",busy:!1,userId:null,taken:null,given:null},{id:10,title:"1984",author:"Д.Оруэлл",busy:!1,userId:null,taken:null,given:null},{id:11,title:"Доктор Живаго",author:"Б.Пастернак",busy:!1,userId:null,taken:null,given:null},{id:12,title:"Приключения Тома Сойера",author:"М.Твен",busy:!1,userId:null,taken:null,given:null},{id:13,title:"На Дне",author:"М.Горький",busy:!0,userId:4,taken:"2019-07-02",given:"2019-07-16"},{id:14,title:"Пиковая Дама",author:"А.Пушкин",busy:!1,userId:null,taken:null,given:null},{id:15,title:"Белый Клык",author:"Д.Лондон",busy:!1,userId:null,taken:null,given:null}]},"0cbf":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"customers container p-3"},[s("h1",{staticClass:"page-header p-3"},[t._v("Книги нашей библиотеки")]),t._m(0),s("table",{staticClass:"table table-striped"},[t._m(1),s("tbody",t._l(t.books,function(e){return s("tr",{key:e.id},[s("td",[t._v(t._s(e.title))]),s("td",[t._v(t._s(e.author))]),e.busy?s("td",{staticStyle:{color:"red"}},[t._v("Недоступна")]):s("td",{staticStyle:{color:"green"}},[t._v("Доступна")]),s("td",[s("router-link",{staticClass:"btn btn-success",attrs:{to:"/customer/"+e.id}},[t._v("Подробнее")])],1)])}),0)])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("h2",{staticClass:"card-title"},[t._v("Сортировать по")]),s("div",{staticClass:"sort-container"},[s("button",{staticClass:"btn btn-light"},[t._v("Названию")]),s("button",{staticClass:"btn btn-light"},[t._v("Автору")]),s("button",{staticClass:"btn btn-light"},[t._v("Доступности")]),s("button",{staticClass:"btn btn-light"},[t._v("Статусу")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("Название")]),s("th",[t._v("Автор")]),s("th",[t._v("Доступность")]),s("th")])])}],i=s("0517"),o={name:"allbooks",data:function(){return{customers:[],books:i}},methods:{},props:{},components:{}},r=o,u=(s("3e89"),s("2877")),l=Object(u["a"])(r,a,n,!1,null,"1c92177b",null);e["a"]=l.exports},1:function(t,e){},"2ec6":function(t){t.exports=[{id:1,name:"John Doe",readBooksIDs:[2,8,14],ratings:[2,3,3],comments:["Laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium","Est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et","Quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"]},{id:2,name:"Will Smith",readBooksIDs:[2,14,15],ratings:[4,5,3],comments:["Non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati","Harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et","Doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"]},{id:3,name:"Antony Chief",readBooksIDs:[1,5,6,11,12,13,14],ratings:[1,4,3,2,5,5,4],comments:["Maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor","Ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque","Sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus","Voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis","Ut dolorum nostrum id quia aut est\nfuga est inventore vel eligendi explicabo quis consectetur\naut occaecati repellat id natus quo est\nut blanditiis quia ut vel ut maiores ea","Expedita maiores dignissimos facilis\nipsum est rem est fugit velit sequi\neum odio dolores dolor totam\noccaecati ratione eius rem velit","Fuga eos qui dolor rerum\ninventore corporis exercitationem\ncorporis cupiditate et deserunt recusandae est sed quis culpa\neum maiores corporis et"]},{id:4,name:"Greg Peterson",readBooksIDs:[2,4,9,15],ratings:[3,3,4,2],comments:["Vel quae voluptas qui exercitationem\nvoluptatibus unde sed\nminima et qui ipsam aspernatur\nexpedita magnam laudantium et et quaerat ut qui dolorum","Nihil ut voluptates blanditiis autem odio dicta rerum\nquisquam saepe et est\nsunt quasi nemo laudantium deserunt\nmolestias tempora quo quia","Iste ut laborum aliquid velit facere itaque\nquo ut soluta dicta voluptate\nerror tempore aut et\nsequi reiciendis dignissimos expedita consequuntur libero sed fugiat facilis","Consequatur necessitatibus totam sed sit dolorum\nrecusandae quae odio excepturi voluptatum harum voluptas\nquisquam sit ad eveniet delectus\ndoloribus odio qui non labore"]},{id:5,name:"Rudolf Gruenwald",readBooksIDs:[4,5,6,9,11],ratings:[2,5,4,4,3],comments:["Veritatis voluptates necessitatibus maiores corrupti\nneque et exercitationem amet sit et\nullam velit sit magnam laborum\nmagni ut molestias","Doloribus est illo sed minima aperiam\nut dignissimos accusantium tempore atque et aut molestiae\nmagni ut accusamus voluptatem quos ut voluptates\nquisquam porro sed architecto ut","Qui harum consequatur fugiat\net eligendi perferendis at molestiae commodi ducimus\ndoloremque asperiores numquam qui\nut sit dignissimos reprehenderit tempore","sed illum quis\nut aut culpa labore aspernatur illo\ndolorem quia vitae ut aut quo repellendus est omnis\nesse at est debitis","officiis dolorem voluptas aliquid eveniet tempora qui\nea temporibus labore accusamus sint\nut sunt necessitatibus voluptatum animi cumque\nat reiciendis voluptatem iure aliquid et qui dolores et"]}]},"3dfd":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("nav",{staticClass:"navbar navbar-expand-md navbar-dark bg-dark "},[s("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("vLibrary")]),t._m(0),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarsExampleDefault"}},[s("ul",{staticClass:"navbar-nav mr-auto"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("\n            Все книги\n            "),s("span",{staticClass:"sr-only"},[t._v("(current)")])])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/topbooks"}},[t._v("Топ Книг")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/users"}},[t._v("Топ Читателей")])],1)])])],1),s("router-view")],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarsExampleDefault","aria-controls":"navbarsExampleDefault","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],i={name:"app",components:{}},o=i,r=s("2877"),u=Object(r["a"])(o,a,n,!1,null,null,null);e["a"]=u.exports},"3e89":function(t,e,s){"use strict";var a=s("743a"),n=s.n(a);n.a},"56d7":function(t,e,s){"use strict";s.r(e),function(t,e){s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),n=s("3dfd"),i=s("8c4f"),o=s("28dd"),r=s("0cbf"),u=s("9257"),l=s("dbef"),c=s("c0d8"),d=s("7426"),m=s("f12d");a["a"].use(o["a"]),a["a"].use(i["a"]);var p=new i["a"]({mode:"history",base:t,routes:[{path:"/",component:r["a"]},{path:"/topbooks",component:u["a"]},{path:"/users",component:l["a"]},{path:"/customer/:id",component:c["a"]},{path:"/user/:id",component:d["a"]},{path:"/book/:id",component:m["a"]}]});a["a"].config.productionTip=!1,new a["a"]({router:p,render:function(t){return t(n["a"])}}).$mount("#app"),e.exports={publicPath:"/Test_Task_vLibrary/"}}.call(this,"/",s("dd40")(t))},"6c41":function(t,e,s){},7426:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"details container p-3"},[s("router-link",{staticClass:"btn btn-secondary m-3",attrs:{to:"/users"}},[t._v("Назад к списку читателей")]),s("ul",{staticClass:"list-group"},[s("li",{staticClass:"list-group-item"},[t._v("\n      Имя читателя:\n      "),s("h3",{staticClass:"display-4"},[t._v(t._s(t.user.name))])]),s("h5",{staticClass:"text-muted p-3",staticStyle:{color:"red"}},[t._v("Прочитанные книги: ")]),s("div",{staticClass:"container",attrs:{id:"read-books"}},t._l(t.book,function(e,a){return s("div",{key:e.id,staticClass:"card d-flex flex-wrap"},[s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v(t._s(e.title))]),s("h6",{staticClass:"card-subtitle mt-2 mb-2 text-muted font-italic"},[t._v("Автор: "+t._s(e.author))]),s("h6",{staticClass:"card-subtitle mt-1 mb-1 disabled"},[t._v("Отзыв о книге")]),s("p",{staticClass:"card-text"},[t._v("\n          "+t._s(t.user.comments[a]))]),s("h6",{staticClass:"card-subtitle m-3 text-muted",staticStyle:{"text-align":"right"}},[t._v("Рейтинг книги: "+t._s(t.user.ratings[a])+" из 5")])])])}),0)])],1)},n=[],i=(s("ac6a"),s("7514"),s("0517")),o=s("2ec6"),r={name:"userdetails",data:function(){return{customer:"",books:i,book:"",users:o,user:""}},props:{},methods:{fetchCustomer:function(t){this.$http.get("http://jsonplaceholder.typicode.com/users/".concat(t)).then(function(t){this.customer=t.body})},fetchUser:function(t){var e=this.users.find(function(e){return e.id==t});return this.user=e},fetchBook:function(t){var e=this,s=[];return t.forEach(function(t){s.push(e.books.find(function(e){return e.id==t}))}),this.book=s}},created:function(){var t=this.$route.params.id;console.log(t),this.fetchUser(t),this.fetchBook(this.user.readBooksIDs)}},u=r,l=(s("a6b1"),s("2877")),c=Object(l["a"])(u,a,n,!1,null,"86eb73fe",null);e["a"]=c.exports},"743a":function(t,e,s){},9257:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about container p-3"},[s("h1",{staticClass:"page-header p-3"},[t._v("Пятёрка самых популярных книг")]),s("table",{staticClass:"table table-striped"},[t._m(0),s("tbody",t._l(t.booksFilteredAndSorted,function(e,a){return s("tr",{key:e.id},[s("th",{attrs:{scope:"row"}},[t._v(t._s(a+1))]),s("td",[t._v(t._s(e.title))]),s("td",[t._v(t._s(e.author))]),s("td",[t._v(t._s(e.readAmount)+" раз(а)")]),s("td",[s("router-link",{staticClass:"btn btn-success",attrs:{to:"/book/"+e.id}},[t._v("Подробнее\n          ")])],1)])}),0)])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("Рейтинг")]),s("th",[t._v("Название")]),s("th",[t._v("Автор")]),s("th",[t._v("Прочитана")]),s("th")])])}],i=(s("8615"),s("456d"),s("5df3"),s("1c4c"),s("75fc")),o=(s("ac6a"),s("55dd"),s("0517")),r=s("2ec6"),u={name:"topbooks",data:function(){return{books:o,users:r,booksFiltered:[]}},props:{},computed:{booksFilteredAndSorted:function(){return this.booksFiltered.slice(0).sort(function(t,e){return e.readAmount-t.readAmount}).slice(0,5)}},methods:{getReadBooksAmount:function(t){var e=[];t.forEach(function(t){e.push.apply(e,Object(i["a"])(Array.from(t.readBooksIDs)))});var s={};return e.forEach(function(t){s[t]=s[t]+1||1}),s},filterReadBooks:function(t,e){var s=this.getReadBooksAmount(t),a=Object.keys(s).map(function(t){return parseInt(t)}),n=Object.values(s).map(function(t){return parseInt(t)});console.log(a),console.log(n);for(var i=[],o=function(t){e.forEach(function(e){e.id==a[t]&&i.push(e)})},r=0;r<=a.length;r++)o(r);return i.forEach(function(t,e){t.readAmount=n[e]}),console.log(i),this.booksFiltered=i}},created:function(){this.getReadBooksAmount(this.users),this.filterReadBooks(this.users,this.books)}},l=u,c=s("2877"),d=Object(c["a"])(l,a,n,!1,null,"2a7585b9",null);e["a"]=d.exports},a6b1:function(t,e,s){"use strict";var a=s("6c41"),n=s.n(a);n.a},c0d8:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"details container p-3"},[s("router-link",{staticClass:"btn btn-secondary m-3",attrs:{to:"/"}},[t._v("Назад к списку книг")]),s("h1",{staticClass:"display-3"},[t._v(t._s(t.book.title))]),s("ul",{staticClass:"list-group"},[s("li",{staticClass:"list-group-item"},[t._v("Автор: \n        "),s("h3",{staticClass:"display-4"},[t._v("\n          "+t._s(t.book.author)+"\n        ")])]),s("li",{staticClass:"list-group-item"},[t._v("\n      Доступность:\n      "),t.book.busy?s("span",{staticClass:"lead",staticStyle:{color:"red"}},[t._v("Недоступна")]):s("span",{staticClass:"lead",staticStyle:{color:"green"}},[t._v("Доступна")])]),t.book.busy?s("li",{staticClass:"list-group-item"},[t._v("\n      Сведения о статусе\n      "),s("div",[t._v("\n        Сейчас читает:\n        "),s("span",{staticClass:"lead"},[s("b",[t._v(t._s(t.user.name))])])]),s("div",[t._v("\n        Взята читателем:\n        "),s("span",{staticClass:"lead"},[t._v(t._s(t.book.taken))])]),s("div",[t._v("\n        Будет доступна:\n        "),s("span",{staticClass:"lead"},[t._v(t._s(t.book.given))])])]):t._e()])],1)},n=[],i=(s("7514"),s("0517")),o=s("2ec6"),r={name:"customerdetails",data:function(){return{customer:"",books:i,book:"",users:o,user:""}},props:{},methods:{fetchBook:function(t){var e=this.books.find(function(e){return e.id==t});return this.book=e},fetchUser:function(t){var e=this.books.find(function(e){return e.id==t}),s=e.userId,a=this.users.find(function(t){return t.id==s});return this.user=a}},created:function(){var t=this.$route.params.id;this.fetchBook(t),this.fetchUser(t)}},u=r,l=s("2877"),c=Object(l["a"])(u,a,n,!1,null,"de164530",null);e["a"]=c.exports},dbef:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"add container p-3"},[s("h1",{staticClass:"page-header p-3"},[t._v("Читатели нашей библиотеки")]),s("table",{staticClass:"table table-striped"},[t._m(0),s("tbody",t._l(t.usersSorted,function(e,a){return s("tr",{key:e.id},[s("th",{attrs:{scope:"row"}},[t._v(t._s(a+1))]),s("td",[t._v(t._s(e.name))]),s("td",[t._v(t._s(t.readBooksAmount[e.id-1]))]),s("td",[s("router-link",{staticClass:"btn btn-success",attrs:{to:"/user/"+e.id}},[t._v("Подробнее")])],1)])}),0)])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("Рейтинг")]),s("th",[t._v("Имя")]),s("th",[t._v("Прочитано книг")]),s("th")])])}],i=(s("55dd"),s("ac6a"),s("2ec6")),o={name:"users",data:function(){return{customer:{},users:i,readBooksAmount:[],usersSorted:[]}},methods:{getAmountOfBooks:function(t){var e=this;t.forEach(function(t){e.readBooksAmount.push(t.readBooksIDs.length)})},sortUsers:function(t){var e=t.slice(0);return e=e.sort(function(t,e){return e.readBooksIDs.length-t.readBooksIDs.length}),this.usersSorted=e}},props:{},created:function(){this.getAmountOfBooks(this.users),this.sortUsers(this.users)}},r=o,u=s("2877"),l=Object(u["a"])(r,a,n,!1,null,"29de3f7e",null);e["a"]=l.exports},f12d:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"details container p-3"},[s("router-link",{staticClass:"btn btn-secondary m-3",attrs:{to:"/topbooks"}},[t._v("Назад к списку книг")]),s("ul",{staticClass:"list-group"},[s("li",{staticClass:"list-group-item"},[t._v("\n      Название книги:\n      "),s("h3",{staticClass:"display-4"},[t._v(t._s(t.book.title))])]),s("h5",{staticClass:"text-muted p-3"},[t._v("Средняя оценка книги: "),s("strong",[t._v(t._s(t.averageRating)+" из 5")])]),s("div",{staticClass:"container lead",attrs:{id:"read-books"}},[t._v(" Отзывы читателей\n        "),t._l(t.comments,function(e,a){return s("div",{key:e.id,staticClass:"card d-flex flex-wrap"},[s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("Автор отзыва: "+t._s(t.user[a].name))]),s("h6",{staticClass:"card-subtitle mt-1 mb-1 disabled"},[t._v("Отзыв о книге")]),s("p",{staticClass:"card-text"},[t._v("\n            "+t._s(e))]),s("h6",{staticClass:"card-subtitle m-3 text-muted",staticStyle:{"text-align":"right"}},[t._v("Рейтинг книги: "+t._s(t.ratings[a])+" из 5")])])])})],2)])],1)},n=[],i=(s("20d6"),s("5df3"),s("1c4c"),s("ac6a"),s("7514"),s("0517")),o=s("2ec6"),r={name:"book",data:function(){return{books:i,users:o,book:"",user:"",comments:"",ratings:""}},computed:{averageRating:function(){var t=0,e=0;return this.ratings.map(function(s){t+=s,e++}),t/e}},methods:{fetchBook:function(t){var e=this.books.find(function(e){return e.id==t});return this.book=e},getBookIndex:function(t){var e=[];return this.users.forEach(function(s){var a=Array.from(s.readBooksIDs),n=a.findIndex(function(e){return e==t});e.push(n)}),e},getUsers:function(t){var e=this.getBookIndex(t),s=[];return this.users.forEach(function(t,a){void 0!==t.comments[e[a]]&&s.push(t)}),console.log(s),this.user=s},getComments:function(t){var e=this.getBookIndex(t),s=[];return this.users.forEach(function(t,a){void 0!==t.comments[e[a]]&&s.push(t.comments[e[a]])}),this.comments=s},getRating:function(t){var e=this.getBookIndex(t),s=[];return this.users.forEach(function(t,a){void 0!==t.ratings[e[a]]&&s.push(t.ratings[e[a]])}),console.log(s),this.ratings=s}},created:function(){var t=this.$route.params.id;this.fetchBook(t),this.getBookIndex(t),this.getComments(t),this.getUsers(t),this.getRating(t)}},u=r,l=s("2877"),c=Object(l["a"])(u,a,n,!1,null,"3ce9054b",null);e["a"]=c.exports}});
//# sourceMappingURL=app.0016b8e2.js.map