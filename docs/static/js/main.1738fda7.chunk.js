(this["webpackJsonpgift-expert"]=this["webpackJsonpgift-expert"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(7),a=n.n(r),i=n(2),u=n(9),s=n(0),o=function(t){var e=t.setCategories,n=Object(c.useState)(""),r=Object(i.a)(n,2),a=r[0],o=r[1];return Object(s.jsx)("form",{onSubmit:function(t){t.preventDefault(),e((function(t){return[a].concat(Object(u.a)(t))})),o("")},children:Object(s.jsx)("input",{type:"text",value:a,onChange:function(t){!function(t){o(t.target.value)}(t)}})})},j=n(10),d=n(6),b=n.n(d),l=n(8),f=function(){var t=Object(l.a)(b.a.mark((function t(e){var n,c,r,a,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=3fkkP7v7B9wbrRHk7XFmQJL5uZsuch5F&q=".concat(encodeURI(e),"&limit=10"),t.next=3,fetch(n);case 3:return c=t.sent,t.next=6,c.json();case 6:return r=t.sent,a=r.data,i=a.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(t){t.id;var e=t.title,n=t.url;return Object(s.jsxs)("div",{className:"card animate__animated animate__bounce",children:[Object(s.jsx)("img",{src:n,alt:e}),Object(s.jsx)("p",{children:e})]})},h=function(t){var e=t.category,n=function(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){f(t).then((function(t){a({data:t,loading:!1})}))}),[t]),r}(e),r=n.data,a=n.loading;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{children:e}),a&&Object(s.jsx)("p",{children:"Cargando"}),Object(s.jsx)("div",{className:"card-grid",children:r.map((function(t){return Object(s.jsx)(O,Object(j.a)({},t),t.id)}))})]})},p=function(t){var e=Object(c.useState)(["Pokemon"]),n=Object(i.a)(e,2),r=n[0],a=n[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{children:"GIFT EXPERT APP"}),Object(s.jsx)("hr",{}),Object(s.jsx)(o,{setCategories:a}),Object(s.jsx)("ol",{children:r.map((function(t){return Object(s.jsx)(h,{category:t},t)}))})]})};n(17);a.a.render(Object(s.jsx)(p,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.1738fda7.chunk.js.map