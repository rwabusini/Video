(this["webpackJsonpmy-video"]=this["webpackJsonpmy-video"]||[]).push([[0],{15:function(e,t,a){e.exports=a(38)},20:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),o=a.n(c),i=(a(20),a(2)),s=a(3);var l=function(e){var t=e.handelTextInput,a=e.searching;return r.a.createElement("div",{className:"searchbar"},r.a.createElement("input",{type:"text",placeholder:"Search for a Video...",className:"search-bar",onChange:t,onKeyPress:a}))},u=a(14),m=a.n(u);var h=function(e){var t=e.results,a=Object(n.useState)(0),c=Object(s.a)(a,2);return c[0],c[1],t.map((function(e){})),r.a.createElement("div",{className:"results"},t.map((function(e){var t="".concat("https://image.tmdb.org/t/p/w600_and_h900_bestv2/",e.poster_path);return r.a.createElement("div",{className:"result",onClick:function(){var t="https://www.themoviedb.org/movie/"+e.id;window.location.href=t,console.log(t)}},r.a.createElement("img",{src:t}),r.a.createElement("h3",null,e.title))})))};var v=function(){var e=Object(n.useState)({input:"",results:[]}),t=Object(s.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null,"Movie Application")),r.a.createElement("div",{className:"searching"},r.a.createElement(l,{handelTextInput:function(e){var t=e.target.value;c((function(e){return Object(i.a)(Object(i.a)({},e),{},{input:t})}))},searching:function(e){"Enter"===e.key&&m()("https://api.themoviedb.org/3/search/movie?api_key=468a3e5868a2156306ec2772e6c28f9e&query="+a.input).then((function(e){var t=e.data.results;c((function(e){return Object(i.a)(Object(i.a)({},e),{},{results:t})}))}))}}),r.a.createElement(h,{results:a.results})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.244cadcc.chunk.js.map