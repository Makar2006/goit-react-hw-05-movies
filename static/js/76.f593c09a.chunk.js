"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{76:function(e,a,t){t.r(a),t.d(a,{default:function(){return m}});var c=t(439),r={},s=t(243),n=t(791),o=t(689),i=t(184);var m=function(){var e=(0,o.UO)().movieId,a=(0,n.useState)([]),t=(0,c.Z)(a,2),m=t[0],l=t[1];return(0,n.useEffect)((function(){s.Z.get("".concat("https://api.themoviedb.org/3/search/movie","/").concat(e,"/credits"),{params:{api_key:"1adabd4496cd17ddf47ee307481418a1"}}).then((function(e){l(e.data.cast)})).catch((function(e){console.error("Ups, something went wrong:",e)}))}),[e]),(0,i.jsxs)("div",{className:r.castContainer,children:[(0,i.jsx)("h2",{className:r.castHeader,children:"Cast"}),(0,i.jsx)("ul",{className:r.actorList,children:m.map((function(e){return(0,i.jsxs)("li",{className:r.actorItem,children:[(0,i.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(e.profile_path),alt:e.name+" portret",className:r.actorPortret}),(0,i.jsx)("p",{className:r.actorName,children:e.name}),(0,i.jsx)("p",{className:r.actorChar,children:e.character})]},e.id)}))})]})}}}]);
//# sourceMappingURL=76.f593c09a.chunk.js.map