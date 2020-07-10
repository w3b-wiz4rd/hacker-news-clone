(this["webpackJsonphacker-news-clone"]=this["webpackJsonphacker-news-clone"]||[]).push([[0],{24:function(n,e,t){n.exports=t(47)},46:function(n,e,t){},47:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(19),c=t.n(o),i=t(5),l=t(20),u=t.n(l).a.create({baseURL:"https://hacker-news.firebaseio.com/v0",headers:{"Content-Type":"application/json"}});var f=t(1),s=t(2);function m(){var n=Object(f.a)(["\n  /* Display & Box Model */\n  width: 4rem;\n  margin-right: 2rem;\n  /* Styling */\n  border: 2px solid #fff;\n"]);return m=function(){return n},n}function d(){var n=Object(f.a)(["\n  /* Display & Box Model */\n  display: flex;\n  margin: 0 auto;\n  align-items: center;\n  min-width: 1280px;\n  max-width: 1280px;\n  padding: 2rem;\n  /* Text */\n  font-size: 2.5rem;\n"]);return d=function(){return n},n}function b(){var n=Object(f.a)(["\n  /* Display & Box Model */\n  display: flex;\n  /* Styling */\n  color: #fff;\n  background: #ff6600;\n"]);return b=function(){return n},n}var p=s.a.div(b()),x=s.a.div(d()),v=s.a.img(m()),y=function(){return a.a.createElement(p,null,a.a.createElement(x,null,a.a.createElement(v,{src:"https://news.ycombinator.com/favicon.ico",alt:"Hacker News Clone"}),"Hacker News Clone"))},g=t(3);function j(){var n=Object(f.a)(["\n  /* Styling*/\n  color: grey;\n  /* Text */\n  font-size: 1.4rem;\n"]);return j=function(){return n},n}function h(){var n=Object(f.a)(["\n  /* Styling*/\n  color: grey;\n  /* Text */\n  font-size: 1.5rem;\n"]);return h=function(){return n},n}function O(){var n=Object(f.a)(["\n  /* Display & Box Model */\n  font-size: 1.5rem;\n  margin-right: 1rem;\n  /* Styling */\n  color: grey;\n"]);return O=function(){return n},n}function E(){var n=Object(f.a)(["\n  /* Display & Box Model */\n  display: flex;\n  margin-right: 1.5rem;\n"]);return E=function(){return n},n}function w(){var n=Object(f.a)(["\n  /* Display & Box Model */\n  display: flex;\n  margin-bottom: 1rem;\n"]);return w=function(){return n},n}function M(){var n=Object(f.a)(["\n  /* Display & Box Model */\n  display: flex;\n  flex-flow: column;\n"]);return M=function(){return n},n}function k(){var n=Object(f.a)(["\n  /* Display & Box Model */\n  padding: 1.5rem;\n"]);return k=function(){return n},n}var B=Object(s.a)(g.b.div)(k()),D=Object(s.a)(g.b.div)(M()),S=Object(s.a)(g.b.div)(w()),z=Object(s.a)(g.b.div)(E()),T=Object(s.a)(g.b.i)(O()),C=Object(s.a)(g.b.p)(h()),N=Object(s.a)(g.b.p)(j()),H=function(n){var e=Math.floor(((new Date).getTime()-1e3*n)/1e3),t=Math.floor(e/31536e3);return t>1?"".concat(t," years"):(t=Math.floor(e/2592e3))>1?"".concat(t," months"):(t=Math.floor(e/86400))>1?"".concat(t," days"):(t=Math.floor(e/3600))>1?"".concat(t," hours"):(t=Math.floor(e/60))>1?"".concat(t," minutes"):"".concat(Math.floor(e)," seconds")},L={by:"",id:0,kids:[],parent:0,text:"",time:0,type:""},J=function(n){var e=n.id,t=Object(r.useState)(L),o=Object(i.a)(t,2),c=o[0],l=o[1];return Object(r.useEffect)((function(){var n;(n=e,u({method:"get",url:"/item/".concat(n,".json"),params:{print:"pretty"}})).then((function(n){var e=n.data;return l(e)})).catch((function(n){return console.log(n)}))}),[e]),a.a.createElement(B,null,a.a.createElement(D,null,a.a.createElement(S,null,a.a.createElement(z,null,a.a.createElement(T,{className:"fas fa-user"}),a.a.createElement(C,null,c.by||"Anonymous")),a.a.createElement(z,null,a.a.createElement(T,{className:"fas fa-clock"}),a.a.createElement(C,null,H(c.time))))),a.a.createElement(N,null,c.text),c.kids&&a.a.createElement(I,{comments:c.kids}))};function W(){var n=Object(f.a)(["\n  /* Display & Box Model */\n"]);return W=function(){return n},n}var A=Object(s.a)(g.b.div)(W()),I=function(n){var e=n.comments;return a.a.createElement(A,null,e.map((function(n){return a.a.createElement(J,{key:n,id:n})})))};function P(){var n=Object(f.a)(["\n  /* Display & Box Model */\n  max-height: 50rem;\n  overflow: scroll;\n"]);return P=function(){return n},n}function R(){var n=Object(f.a)(["\n  /* Style */\n  color: #504f4f;\n  text-decoration: none;\n  /* Text */\n  font-size: 2.5rem;\n  font-weight: bold;\n"]);return R=function(){return n},n}function U(){var n=Object(f.a)(["\n  /* Style */\n  color: #504f4f;\n  /* Text */\n  font-size: 1.5rem;\n  text-transform: uppercase;\n"]);return U=function(){return n},n}function $(){var n=Object(f.a)(["\n  /* Style */\n  color: #fb651c;\n  /* Text */\n  font-size: 2.5rem;\n"]);return $=function(){return n},n}function _(){var n=Object(f.a)(["\n  /* Display & Box Model */\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n  margin-right: 1.5rem;\n"]);return _=function(){return n},n}function q(){var n=Object(f.a)(["\n  /* Display & Box Model */\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n  margin-right: 1.5rem;\n"]);return q=function(){return n},n}function F(){var n=Object(f.a)(["\n  /* Styling*/\n  color: grey;\n  /* Text */\n  font-size: 1.5rem;\n"]);return F=function(){return n},n}function G(){var n=Object(f.a)(["\n  /* Display & Box Model */\n  font-size: 1.5rem;\n  margin-right: 1rem;\n  /* Styling */\n  color: grey;\n"]);return G=function(){return n},n}function K(){var n=Object(f.a)(["\n  /* Display & Box Model */\n  display: flex;\n  margin-right: 1.5rem;\n"]);return K=function(){return n},n}function Q(){var n=Object(f.a)(["\n  /* Display & Box Model */\n  display: flex;\n  margin-top: 1.5rem;\n  margin-bottom: 1rem;\n"]);return Q=function(){return n},n}function V(){var n=Object(f.a)(["\n  /* Display & Box Model */\n  display: flex;\n  flex-flow: column;\n"]);return V=function(){return n},n}function X(){var n=Object(f.a)(["\n  /* Display & Box Model */\n  display: flex;\n  margin-right: 2rem;\n  /* Styling */\n  border-right: 2px solid grey;\n"]);return X=function(){return n},n}function Y(){var n=Object(f.a)(["\n  /* Display & Box Model */\n  width: 100%;\n  display: flex;\n"]);return Y=function(){return n},n}function Z(){var n=Object(f.a)(["\n  /* Display & Box Model */\n  width: 100%;\n  display: flex;\n  flex-flow: column;\n  padding: 1rem;\n  margin-bottom: 1rem;\n  /* Styling */\n  background: #fff;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);\n  /* Other */\n  cursor: pointer;\n  &:hover {\n    box-shadow: 0 7px 14px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);\n    transform: scale(1.01);\n  }\n"]);return Z=function(){return n},n}var nn=Object(s.a)(g.b.div)(Z()),en=Object(s.a)(g.b.div)(Y()),tn=Object(s.a)(g.b.div)(X()),rn=Object(s.a)(g.b.div)(V()),an=Object(s.a)(g.b.div)(Q()),on=Object(s.a)(g.b.div)(K()),cn=Object(s.a)(g.b.i)(G()),ln=Object(s.a)(g.b.p)(F()),un=Object(s.a)(g.b.div)(q()),fn=Object(s.a)(g.b.div)(_()),sn=Object(s.a)(g.b.h1)($()),mn=Object(s.a)(g.b.h2)(U()),dn=Object(s.a)(g.b.a)(R()),bn=Object(s.a)(g.b.div)(P()),pn={by:"",descendants:0,id:0,kids:[],score:0,time:0,title:"",type:"",url:""},xn={open:{opacity:1,height:"auto"},collapsed:{opacity:0,height:0,when:"afterChildren"}},vn=function(n){var e=n.id,t=n.expanded,o=n.setExpanded,c=Object(r.useState)(pn),l=Object(i.a)(c,2),f=l[0],s=l[1],m=e===t;return Object(r.useEffect)((function(){var n;(n=e,u({method:"get",url:"/item/".concat(n,".json"),params:{print:"pretty"}})).then((function(n){var e=n.data;return s(e)})).catch((function(n){return console.log(n)}))}),[e]),a.a.createElement(nn,{initial:!1,onClick:function(){return o(!m&&e)}},a.a.createElement(en,null,a.a.createElement(tn,null,a.a.createElement(un,null,a.a.createElement(sn,null,f.score),a.a.createElement(mn,null,"Points")),a.a.createElement(fn,null,a.a.createElement(sn,null,f.descendants),a.a.createElement(mn,null,"Comments"))),a.a.createElement(rn,null,a.a.createElement(dn,{href:f.url,target:"_blank"},f.title),a.a.createElement(an,null,a.a.createElement(on,null,a.a.createElement(cn,{className:"fas fa-user"}),a.a.createElement(ln,null,f.by)),a.a.createElement(on,null,a.a.createElement(cn,{className:"fas fa-clock"}),a.a.createElement(ln,null,H(f.time)))))),a.a.createElement(g.a,{initial:!1},m&&a.a.createElement(bn,{key:"content",initial:"collapsed",animate:"open",exit:"collapsed",variants:xn},f.kids&&a.a.createElement(I,{comments:f.kids}))))};function yn(){var n=Object(f.a)(["\n  /* Display & Box Model */\n  display: flex;\n  flex-flow: column;\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 2rem;\n  /* Text */\n  font-size: 2.5rem;\n"]);return yn=function(){return n},n}function gn(){var n=Object(f.a)(["\n  /* Display & Box Model */\n  min-height: 100vh;\n  display: flex;\n  flex-flow: column;\n  /* Styling */\n  background: #f8fafb;\n"]);return gn=function(){return n},n}var jn=s.a.div(gn()),hn=s.a.div(yn()),On=function(){var n=function(){var n=Object(r.useState)(!1),e=Object(i.a)(n,2),t=e[0],a=e[1],o=Object(r.useState)(30),c=Object(i.a)(o,2),l=c[0],u=c[1],f=function(){if(window.innerHeight+document.documentElement.scrollTop<document.documentElement.offsetHeight-100||t)return!1;a(!0)};return Object(r.useEffect)((function(){t&&(u(l+30>=500?500:l+30),a(!1))}),[t]),Object(r.useEffect)((function(){return window.addEventListener("scroll",f),function(){return window.removeEventListener("scroll",f)}}),[]),{count:l}}().count,e=Object(r.useState)([]),t=Object(i.a)(e,2),o=t[0],c=t[1],l=Object(r.useState)(0),f=Object(i.a)(l,2),s=f[0],m=f[1];return Object(r.useEffect)((function(){(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"top";return u({method:"get",url:"/".concat(n,"stories.json"),params:{print:"pretty"}})})().then((function(n){var e=n.data;return c(e)})).catch((function(n){return console.log(n)}))}),[]),a.a.createElement(jn,null,a.a.createElement(y,null),a.a.createElement(hn,null,o.slice(0,n).map((function(n){return a.a.createElement(vn,{key:n,id:n,expanded:s,setExpanded:m})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(46);c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(On,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.2e0cbd0f.chunk.js.map