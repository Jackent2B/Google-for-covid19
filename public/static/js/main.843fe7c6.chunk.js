(this["webpackJsonpcovid-search"]=this["webpackJsonpcovid-search"]||[]).push([[0],{32:function(e,t,a){e.exports=a(57)},37:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(24),o=a.n(i),c=(a(37),a(20)),s=a.n(c),l=a(9),m=a(18),u=a(25),p=a(12),h=a.n(p),g=a(80),d=a(17),f=a(87),v=a(88),E=a(86),b=a(89),w=a(27),y=a.n(w),k=a(82),N=a(84),O=a(85),j=a(83),x="https://4b68844d3546.ngrok.io";function R(){return S.apply(this,arguments)}function S(){return(S=Object(u.a)(s.a.mark((function e(){var t,a,n,r=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",a=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,fetch(t,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(a)});case 4:return n=e.sent,e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I=function(e,t,a){return null==t&&(t=100),null==a&&(a="..."),e.length>t?e.substring(0,t-a.length)+a:e},B=Object(g.a)((function(e){return{root:{flexGrow:1},container:{marginTop:e.spacing(1),marginLeft:e.spacing(2),marginRight:e.spacing(2)},highlights:{marginTop:e.spacing(1),marginBottom:e.spacing(1),marginLeft:e.spacing(2),marginRight:e.spacing(2)},progress:{display:"block",marginLeft:"auto",marginRight:"auto",marginTop:e.spacing(2)},highlight:{marginTop:e.spacing(2)}}}));var L=Object(g.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(l.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(l.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(d.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(d.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(l.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(l.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(l.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));function P(e){var t=e.setArticles,a=e.setHighlights,n=e.setProgress,i=L();return r.a.useEffect((function(){var e=document.getElementById("myInput"),r=h.a.parse(window.location.search);r.search&&(e.value=r.search),e.addEventListener("keyup",(function(r){if(13===r.keyCode){r.preventDefault(),n(!0);var i=e.value,o=h.a.parse(window.location.search);o.search=i;var c=h.a.stringify(o);if(window.history.pushState){var s=window.location.protocol+"//"+window.location.host+window.location.pathname+c;window.history.pushState({path:s},"",s)}R(x,JSON.stringify(i)).then((function(e){n(!1),console.log(e),t(e.results.results.Articles),a(e.results.results.Highlights)}))}}))}),[]),r.a.createElement("div",{className:i.grow},r.a.createElement(f.a,{position:"static"},r.a.createElement(v.a,null,r.a.createElement(E.a,{className:i.title,variant:"h6",noWrap:!0},"Google for COVID-19"),r.a.createElement("div",{className:i.search},r.a.createElement("div",{className:i.searchIcon},r.a.createElement(y.a,null)),r.a.createElement(b.a,{id:"myInput",placeholder:"Search\u2026",classes:{root:i.inputRoot,input:i.inputInput},inputProps:{"aria-label":"search"}})),r.a.createElement("div",{className:i.grow}))))}var T=Object(g.a)({root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}});function C(e){var t=e.article,a=T();return r.a.createElement(N.a,{className:a.root,variant:"outlined"},r.a.createElement(O.a,null,r.a.createElement(E.a,{className:a.title,color:"textSecondary",gutterBottom:!0},I(t.Authors,60)),r.a.createElement("a",{href:t.Reference},r.a.createElement(E.a,{variant:"h6",component:"h2"},I(t.Title))),r.a.createElement(E.a,{className:a.title,color:"textSecondary",gutterBottom:!0},t.Published),r.a.createElement(E.a,{variant:"body2",component:"p"},t.Publication),t.Relevant&&t.Relevant.length>0&&r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(E.a,{variant:"subtitle1",gutterBottom:!0},"Relevant"),r.a.createElement("ul",null,t.Relevant.map((function(e){return r.a.createElement("li",null,e)}))))))}var A=function(){var e=B(),t=r.a.useState(!1),a=Object(m.a)(t,2),n=a[0],i=a[1],o=r.a.useState([]),c=Object(m.a)(o,2),s=c[0],l=c[1],u=r.a.useState([]),p=Object(m.a)(u,2),g=p[0],d=p[1];return r.a.useEffect((function(){var e=h.a.parse(window.location.search);e.search&&(i(!0),R(x,JSON.stringify(e.search)).then((function(e){i(!1),console.log(e),l(e.results.results.Articles),d(e.results.results.Highlights)})))}),[]),r.a.createElement("div",null,r.a.createElement(P,{setArticles:l,setHighlights:d,setProgress:i}),n?r.a.createElement(k.a,{className:e.progress}):r.a.createElement(r.a.Fragment,null,g&&g.length>0&&r.a.createElement(j.a,{container:!0,className:e.root,spacing:2},r.a.createElement(j.a,{item:!0,xs:12,md:8},r.a.createElement("div",{className:e.container},r.a.createElement(N.a,{className:e.root,variant:"outlined"},r.a.createElement(O.a,null,r.a.createElement("div",{className:e.highlights},r.a.createElement(E.a,{variant:"h6",component:"h2"},"Highlights"),r.a.createElement("ul",null,g&&g.map((function(t){return r.a.createElement("li",null,r.a.createElement(E.a,{className:e.highlight,variant:"body2",component:"p"},t))}))))))))),r.a.createElement(j.a,{container:!0,className:e.root,spacing:2},r.a.createElement(j.a,{item:!0,xs:12,md:8},s&&s.map((function(t){return r.a.createElement("div",{key:t.Id,className:e.container},r.a.createElement(C,{className:e.card,article:t}))}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.843fe7c6.chunk.js.map