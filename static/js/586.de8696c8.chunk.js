"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[586],{586:function(e,t,r){r.r(t),r.d(t,{default:function(){return l}});var a=r(439),n={},s=r(791),i=r(511),c=r(87),o=r(243),u=r(184);var l=function(){var e=(0,s.useState)(""),t=(0,a.Z)(e,2),r=t[0],l=t[1],m=(0,s.useState)([]),h=(0,a.Z)(m,2),d=h[0],f=h[1],p=(0,c.lr)(),v=(0,a.Z)(p,2),x=v[0],j=v[1];return(0,s.useEffect)((function(){var e=x.get("query");e&&function(e){return o.Z.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:"1adabd4496cd17ddf47ee307481418a1",query:e}})}(e).then((function(e){var t=e.data.results;f(t)})).catch((function(e){console.error("Ups. Error while searching for videos:",e)}))}),[x]),(0,u.jsxs)("div",{className:n.moiveContainer,children:[(0,u.jsx)("h1",{className:n.mainHeader,children:"\u041f\u043e\u0448\u0443\u043a \u0444\u0456\u043b\u044c\u043c\u0456\u0432"}),(0,u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r?j({query:r}):alert("Please fill the field")},className:n.moviesForm,children:[(0,u.jsx)("input",{className:n.searchInput,type:"text",id:"searchInput",name:"searchInput",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043a\u043b\u044e\u0447\u043e\u0432\u0435 \u0441\u043b\u043e\u0432\u043e",value:r,onChange:function(e){return l(e.target.value)}}),(0,u.jsx)("button",{type:"submit",className:n.searchButton,children:"\u041f\u043e\u0448\u0443\u043a"})]}),(0,u.jsx)(i.e,{movies:d})]})}},511:function(e,t,r){r.d(t,{e:function(){return c}});var a=r(689),n=r(87),s={},i=r(184),c=function(e){var t=e.movies,r=(0,a.TH)();return(0,i.jsx)("ul",{className:s.filmslist,children:t.map((function(e){return(0,i.jsx)("li",{className:"FilmsItem",children:(0,i.jsxs)(n.rU,{to:"/movies/".concat(e.id),state:{from:r},children:[(0,i.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),width:300,alt:"Movie preview"}),e.title]})},e.id)}))})}}}]);
//# sourceMappingURL=586.de8696c8.chunk.js.map