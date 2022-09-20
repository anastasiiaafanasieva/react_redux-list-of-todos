(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(7),r=n.n(c),o=n(3),a=n(4),s=n(14),u=n(15),i=n(2),l={loading:!1},d=function(){return{type:"START_LOADING"}},j=function(){return{type:"FINISH_LOADING"}},b=n(16);function O(e){for(var t=Object(b.a)(e),n=t.length-1;n>0;n-=1){var c=Math.floor(Math.random()*(n+1)),r=[t[c],t[n]];t[n]=r[0],t[c]=r[1]}return t}var p={todos:[],todoStatus:null,selectedUser:null,userInfo:null},f=function(e){return{type:"GET_TODOS",payload:e}},h=function(e){return{type:"SET_TODO_STATUS",payload:e}},_=function(e){return{type:"SELECT_USER",payload:e}},v=function(e){return{type:"GET_USER_INFO",payload:e}},m=function(){return{type:"RANDOMIZE"}},x=Object(a.combineReducers)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_LOADING":return Object(i.a)(Object(i.a)({},e),{},{loading:!0});case"FINISH_LOADING":return Object(i.a)(Object(i.a)({},e),{},{loading:!1});default:return e}},currentTodo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TODOS":return Object(i.a)(Object(i.a)({},e),{},{todos:t.payload});case"SET_TODO_STATUS":return Object(i.a)(Object(i.a)({},e),{},{todoStatus:t.payload});case"SELECT_USER":return Object(i.a)(Object(i.a)({},e),{},{selectedUser:t.payload});case"GET_USER_INFO":return Object(i.a)(Object(i.a)({},e),{},{userInfo:t.payload});case"RANDOMIZE":return Object(i.a)(Object(i.a)({},e),{},{todos:O(e.todos)});default:return e}}}),T=Object(a.createStore)(x,Object(s.composeWithDevTools)(Object(a.applyMiddleware)(u.a))),y=o.c,N=(n(25),n(26),n(17)),S=n(11),I=n.n(S),L=n(1),g=(n(27),n(12)),E=n(6),C=n.n(E),U=function(e){return fetch("".concat("https://mate.academy/students-api").concat(e)).then((function(e){return e.json()}))},A=function(){var e=Object(g.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U("/todos");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(g.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U("/users/".concat(t));case 3:return n=e.sent,e.abrupt("return",n);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),w=(n(29),n(0)),D=function(){return Object(w.jsx)("div",{className:"loader-container",children:Object(w.jsx)("div",{className:"loader"})})},R=function(){var e=Object(o.b)(),t=Object(L.useState)(""),n=Object(N.a)(t,2),c=n[0],r=n[1],a=y((function(e){return e.loading.loading})),s=y((function(e){return e.currentTodo.todos})),u=y((function(e){return e.currentTodo.todoStatus})),i=y((function(e){return e.currentTodo.selectedUser}));Object(L.useEffect)((function(){e(d()),A().then((function(t){return e(f(t))})).then((function(){return e(j())}))}),[]);var l,b=Object(L.useCallback)(function(e,t){var n;return function(){clearTimeout(n);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];n=setTimeout.apply(void 0,[e,t].concat(r))}}(r,500),[]),O=s.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase().trim())}));null!==u&&(O=null===(l=O)||void 0===l?void 0:l.filter((function(e){return e.completed===u})));return Object(w.jsxs)("div",{className:"TodoList",children:[Object(w.jsx)("h2",{children:"Todos:"}),Object(w.jsxs)("div",{className:"TodoList__filters",children:[Object(w.jsx)("label",{children:Object(w.jsx)("input",{"data-cy":"filterByTitle",className:"TodoList__input input",type:"text",placeholder:"Filter by title",onChange:function(e){b(e.target.value)}})}),Object(w.jsx)("label",{children:Object(w.jsxs)("select",{name:"select",className:"TodoList__input select",onChange:function(t){return function(t){switch(t){case"all":e(h(null));break;case"completed":e(h(!0));break;case"active":e(h(!1))}}(t.target.value)},children:[Object(w.jsx)("option",{value:"all",children:"All"}),Object(w.jsx)("option",{value:"active",children:"Active"}),Object(w.jsx)("option",{value:"completed",children:"Completed"})]})}),Object(w.jsx)("button",{type:"button",className:"button TodoList__input",onClick:function(){return e(m())},children:"Randomize"})]}),a?Object(w.jsx)(D,{}):Object(w.jsx)("div",{className:"TodoList__list-container",children:Object(w.jsx)("ul",{className:"TodoList__list","data-cy":"listOfTodos",children:O.map((function(t){return Object(w.jsx)("div",{children:Object(w.jsxs)("li",{className:I()("TodoList__item",{"TodoList__item--unchecked":!t.completed},{"TodoList__item--checked":t.completed}),children:[Object(w.jsxs)("label",{children:[Object(w.jsx)("input",{type:"checkbox",readOnly:!0}),Object(w.jsx)("p",{children:t.title})]}),t.userId&&Object(w.jsx)("button",{"data-cy":"userButton",className:I()("TodoList__user-button button",{"TodoList__user-button--selected button":t.userId===i}),type:"button",onClick:function(){var n;n=t.userId,e(_(n))},children:"User ".concat(t.userId)})]})},t.id)}))})})]})},G=(n(31),function(){var e=Object(o.b)(),t=y((function(e){return e.currentTodo.selectedUser})),n=y((function(e){return e.currentTodo.userInfo}));Object(L.useEffect)((function(){t&&k(t).then((function(t){return e(v(t))}))}),[t]);return Object(w.jsx)(w.Fragment,{children:n?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("div",{className:"CurrentUser",children:[Object(w.jsx)("h2",{className:"CurrentUser__title",children:Object(w.jsx)("span",{children:"Selected user: ".concat(t)})}),Object(w.jsx)("h3",{className:"CurrentUser__name","data-cy":"userName",children:null===n||void 0===n?void 0:n.name}),Object(w.jsx)("p",{className:"CurrentUser__email",children:null===n||void 0===n?void 0:n.email}),Object(w.jsx)("p",{className:"CurrentUser__phone",children:null===n||void 0===n?void 0:n.phone})]}),Object(w.jsx)("button",{type:"button",onClick:function(){e(_(0))},className:"CurrentUser__clear button",children:"Clear"})]}):Object(w.jsx)("h3",{children:"No user data"})})}),F=function(){var e=y((function(e){return e.currentTodo.selectedUser}));return Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)("div",{className:"App__sidebar",children:Object(w.jsx)(R,{})}),Object(w.jsx)("div",{className:"App__content",children:Object(w.jsx)("div",{className:"App__content-container",children:e?Object(w.jsx)(G,{}):Object(w.jsx)("h3",{children:"No user selected"})})})]})},M=function(){return Object(w.jsx)(o.a,{store:T,children:Object(w.jsx)(F,{})})};r.a.render(Object(w.jsx)(M,{}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.d13c655c.chunk.js.map