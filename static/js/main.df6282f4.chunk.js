(this["webpackJsonpredux-use-examples"]=this["webpackJsonpredux-use-examples"]||[]).push([[0],{22:function(e,t,n){e.exports=n(39)},27:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(6),o=n.n(r),l=(n(27),n(3)),s=(n(32),n(14)),u=n(15),i=n(20),m=n(16),p=n(21),h=(n(33),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={input:1},n.handleChange=function(e){n.setState({input:e.target.value.replace(/\D/,"")})},n.handleIncrement=function(){n.props.increment(n.state.input)},n.handleDecrement=function(){n.props.decrement(n.state.input)},n.handleReset=function(){n.setState({input:1}),n.props.reset()},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"counter"},c.a.createElement("h1",{className:"counter-title"},"Counter example"),c.a.createElement("span",null,this.props.count),c.a.createElement("h3",null,"Change counter by ",this.state.input),c.a.createElement("input",{value:this.state.input,onChange:this.handleChange,className:"counter-input"}),c.a.createElement("br",null),c.a.createElement("button",{className:"counter-btn",onClick:this.handleIncrement},"+"),c.a.createElement("button",{className:"counter-btn",onClick:this.handleDecrement},"-"),c.a.createElement("button",{className:"counter-btn",onClick:this.handleReset},"Reset"))}}]),t}(a.Component)),E=Object(l.b)((function(e){return{count:e.counter.count}}),{increment:function(e){return{type:"INCREMENT_COUNTER",payload:e}},decrement:function(e){return{type:"DECREMENT_COUNTER",payload:e}},reset:function(){return{type:"RESET_COUNTER"}}})(h),d=n(10),b=(n(34),Object(l.b)(null,{createPost:function(e){return function(t){fetch("https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){t({type:"NEW_POST",payload:e})}))}}})((function(e){var t=e.createPost,n=Object(a.useState)(""),r=Object(d.a)(n,2),o=r[0],l=r[1],s=Object(a.useState)(""),u=Object(d.a)(s,2),i=u[0],m=u[1];return c.a.createElement("div",{className:"post-form"},c.a.createElement("h2",{className:"post-form-title"},"Add Post"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({title:o,body:i}),l(""),m("")}},c.a.createElement("div",null,c.a.createElement("label",null,"Title",c.a.createElement("input",{type:"text",name:"title",onChange:function(e){return l(e.target.value)},value:o})),c.a.createElement("br",null)),c.a.createElement("br",null),c.a.createElement("div",null,c.a.createElement("label",null,"Text",c.a.createElement("textarea",{name:"body",onChange:function(e){return m(e.target.value)},value:i})),c.a.createElement("br",null)),c.a.createElement("br",null),c.a.createElement("button",{type:"submit",className:"submit-btn"},"Submit")))}))),f=(n(35),function(e){var t=e.data;return c.a.createElement("div",{className:"post"},c.a.createElement("h4",{className:"post-title"},t.title),c.a.createElement("p",{className:"post-body"},t.body))}),y=(n(36),n(37)),O=Object(l.b)((function(e){return{posts:e.posts.items,isFetching:e.posts.isFetching}}),{fetchPosts:function(){return function(e){fetch("https://cors-anywhere.herokuapp.com/http://jsonplaceholder.typicode.com/posts?_limit=20").then((function(e){return e.json()})).then((function(t){return e({type:"FETCH_POSTS",payload:t})}))}},requestPosts:function(){return{type:"REQUEST_POSTS"}}})((function(e){var t=e.fetchPosts,n=e.requestPosts,r=e.posts,o=e.isFetching;return Object(a.useEffect)((function(){n(),t()}),[t,n]),c.a.createElement("div",null,c.a.createElement("hr",null),c.a.createElement("h1",{className:"posts-title"},"Posts example"),c.a.createElement(b,null),o?c.a.createElement("h3",null,"Loading posts..."):c.a.createElement("div",null,c.a.createElement("h3",null,"Posts"),c.a.createElement("div",{className:"posts"},r.map((function(e){return c.a.createElement(f,{data:e,key:y()})})))))})),v=n(2),N=n(17),j=n(18),T=n(4),g={count:0},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT_COUNTER":return Object(T.a)({},e,{count:e.count+ +t.payload});case"DECREMENT_COUNTER":return Object(T.a)({},e,{count:e.count-+t.payload});case"RESET_COUNTER":return Object(T.a)({},e,{count:0});default:return e}},S=n(19),R={items:[],item:{},isFetching:!1},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_POSTS":return Object(T.a)({},e,{isFetching:!0});case"FETCH_POSTS":return Object(T.a)({},e,{items:t.payload,isFetching:!1});case"NEW_POST":return Object(T.a)({},e,{items:[t.payload].concat(Object(S.a)(e.items)),item:t.payload});default:return e}},w=Object(v.combineReducers)({counter:C,posts:P}),_=Object(v.createStore)(w,Object(N.composeWithDevTools)(Object(v.applyMiddleware)(j.a))),k=function(){return c.a.createElement(l.a,{store:_},c.a.createElement("div",{className:"content"},c.a.createElement(E,null),c.a.createElement(O,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.df6282f4.chunk.js.map