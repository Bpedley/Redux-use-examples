(this["webpackJsonpredux-use-examples"]=this["webpackJsonpredux-use-examples"]||[]).push([[0],{17:function(e,t,n){e.exports=n(34)},22:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(7),o=n.n(r),l=(n(22),n(5)),u=(n(27),n(6)),s=(n(28),Object(l.b)((function(e){return{count:e.counter.count}}),{increment:function(e){return{type:"INCREMENT_COUNTER",payload:e}},decrement:function(e){return{type:"DECREMENT_COUNTER",payload:e}},reset:function(){return{type:"RESET_COUNTER"}}})((function(e){var t=e.increment,n=e.decrement,r=e.reset,o=e.count,l=Object(a.useState)(1),s=Object(u.a)(l,2),i=s[0],m=s[1];return c.a.createElement("div",{className:"counter"},c.a.createElement("h1",{className:"counter-title"},"Counter example"),c.a.createElement("span",null,o),c.a.createElement("h3",null,"Change counter by ",i),c.a.createElement("input",{className:"counter-input",value:i,onChange:function(e){var t=e.target.value.replace(/\D/,"");m(t)}}),c.a.createElement("br",null),c.a.createElement("button",{className:"counter-btn",onClick:function(){return t(i)}},"+"),c.a.createElement("button",{className:"counter-btn",onClick:function(){return n(i)}},"-"),c.a.createElement("button",{className:"counter-btn",onClick:function(){m(1),r()}},"Reset"))}))),i=(n(29),function(e){var t=e.createPost,n=Object(a.useState)(""),r=Object(u.a)(n,2),o=r[0],l=r[1],s=Object(a.useState)(""),i=Object(u.a)(s,2),m=i[0],p=i[1];return c.a.createElement("div",{className:"post-form"},c.a.createElement("h2",{className:"post-form-title"},"Add Post"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({title:o,body:m}),l(""),p("")}},c.a.createElement("div",null,c.a.createElement("label",null,"Title",c.a.createElement("input",{type:"text",name:"title",onChange:function(e){return l(e.target.value)},value:o})),c.a.createElement("br",null)),c.a.createElement("br",null),c.a.createElement("div",null,c.a.createElement("label",null,"Text",c.a.createElement("textarea",{name:"body",onChange:function(e){return p(e.target.value)},value:m})),c.a.createElement("br",null)),c.a.createElement("br",null),c.a.createElement("button",{type:"submit",className:"submit-btn"},"Submit")))}),m=(n(30),function(e){var t=e.data;return c.a.createElement("div",{className:"post"},c.a.createElement("h4",{className:"post-title"},t.title),c.a.createElement("p",{className:"post-body"},t.body))}),p=(n(31),n(32)),E=Object(l.b)((function(e){return{posts:e.posts.items,isFetching:e.posts.isFetching}}),{fetchPosts:function(){return function(e){fetch("https://cors-anywhere.herokuapp.com/http://jsonplaceholder.typicode.com/posts?_limit=20").then((function(e){return e.json()})).then((function(t){return e({type:"FETCH_POSTS",payload:t})}))}},requestPosts:function(){return{type:"REQUEST_POSTS"}},createPost:function(e){return function(t){fetch("https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){t({type:"NEW_POST",payload:e})}))}}})((function(e){var t=e.fetchPosts,n=e.requestPosts,r=e.createPost,o=e.posts,l=e.isFetching;return Object(a.useEffect)((function(){n(),t()}),[t,n]),c.a.createElement("div",null,c.a.createElement("hr",null),c.a.createElement("h1",{className:"posts-title"},"Posts example"),c.a.createElement(i,{createPost:r}),l?c.a.createElement("h3",null,"Loading posts..."):c.a.createElement("div",null,c.a.createElement("h3",null,"Posts"),c.a.createElement("div",{className:"posts"},o.map((function(e){return c.a.createElement(m,{data:e,key:p()})})))))})),d=n(2),h=n(14),f=n(15),b=n(3),y={count:0},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT_COUNTER":return Object(b.a)({},e,{count:e.count+ +t.payload});case"DECREMENT_COUNTER":return Object(b.a)({},e,{count:e.count-+t.payload});case"RESET_COUNTER":return Object(b.a)({},e,{count:0});default:return e}},v=n(16),N={items:[],item:{},isFetching:!1},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_POSTS":return Object(b.a)({},e,{isFetching:!0});case"FETCH_POSTS":return Object(b.a)({},e,{items:t.payload,isFetching:!1});case"NEW_POST":return Object(b.a)({},e,{items:[t.payload].concat(Object(v.a)(e.items)),item:t.payload});default:return e}},j=Object(d.combineReducers)({counter:O,posts:T}),g=Object(d.createStore)(j,Object(h.composeWithDevTools)(Object(d.applyMiddleware)(f.a))),S=function(){return c.a.createElement(l.a,{store:g},c.a.createElement("div",{className:"content"},c.a.createElement(s,null),c.a.createElement(E,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.21a11b4b.chunk.js.map