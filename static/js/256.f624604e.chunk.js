"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[256],{6256:function(e,n,r){r.r(n),r.d(n,{default:function(){return q}});var t,a,c,o,i,s,p,u,d,f,l,x,h=r(9439),g=r(1087),v=r(7689),m=r(2791),w=r(8185),Z=r(2329),b=r(168),j=r(6444),k=j.ZP.div(t||(t=(0,b.Z)(["\n  padding-left: 38px;\n"]))),P=(0,j.ZP)(g.rU)(a||(a=(0,b.Z)(["\n  font-size: 14px;\n  font-weight: 700;\n  text-decoration: none;\n"]))),y=j.ZP.div(c||(c=(0,b.Z)(["\n  width: 80px;\n  font-size: 14px;\n  font-weight: 700;\n  margin: 10px 0 10px 38px;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),S=j.ZP.div(o||(o=(0,b.Z)(["\n  display: flex;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),A=j.ZP.div(i||(i=(0,b.Z)(["\n  padding-left: 20px;\n"]))),C=j.ZP.img(s||(s=(0,b.Z)(["\n  width: 200px;\n  object-fit: contain;\n"]))),_=j.ZP.h2(p||(p=(0,b.Z)(["\n  font-size: 20px;\n  font-weight: 700;\n  padding-top: 20px;\n"]))),O=j.ZP.p(u||(u=(0,b.Z)(["\n  font-size: 14px;\n  font-weight: 400;\n  padding-top: 20px;\n  padding-top: 20px;\n"]))),U=j.ZP.h3(d||(d=(0,b.Z)(["\n  font-size: 14px;\n  font-weight: 700;\n  padding-top: 20px;\n"]))),R=j.ZP.ul(f||(f=(0,b.Z)(["\n  display: flex;\n  font-size: 14px;\n  font-weight: 400;\n  padding-top: 20px;\n"]))),z=j.ZP.div(l||(l=(0,b.Z)(["\n  font-size: 14px;\n  font-weight: 400;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),H=j.ZP.div(x||(x=(0,b.Z)(["\n  padding-left: 20px;\n"]))),L=r(2652),N=r(4585),T=r(184),q=function(){var e,n,r=(0,m.useState)(null),t=(0,h.Z)(r,2),a=t[0],c=t[1],o=(0,v.UO)().movieId,i=(0,v.TH)();if((0,m.useEffect)((function(){(0,L.TP)(Number(o)).then(c)}),[o]),!a)return null;var s=a.poster_path,p=a.title,u=a.vote_average,d=a.overview,f=a.genres,l=null!==(e=null===(n=i.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies";return(0,T.jsxs)("main",{children:[" ",(0,T.jsx)(y,{children:(0,T.jsxs)(P,{to:l,children:[(0,T.jsx)(w.And,{style:{marginRight:4}}),"Go back"]})}),(0,T.jsxs)(k,{children:[(0,T.jsxs)(S,{children:[s?(0,T.jsx)(C,{src:"https://image.tmdb.org/t/p/original".concat(s),alt:p}):(0,T.jsx)(C,{src:Z,alt:"No image available"}),(0,T.jsxs)(A,{children:[(0,T.jsx)(_,{children:p}),(0,T.jsxs)(O,{children:["User score: ",Math.round(10*u),"%"]}),(0,T.jsx)(U,{children:"Overview"}),(0,T.jsx)(O,{children:d}),(0,T.jsx)(U,{children:"Genres"}),(0,T.jsx)(R,{children:f.map((function(e){var n=e.id,r=e.name;return(0,T.jsx)("li",{style:{paddingRight:14},children:r},n)}))})]})]}),(0,T.jsx)(z,{children:(0,T.jsxs)(H,{children:[(0,T.jsx)(O,{children:"Additional information:"}),(0,T.jsx)("ul",{children:[{href:"cast",name:"Cast"},{href:"reviews",name:"Reviews"}].map((function(e){var n=e.href,r=e.name;return(0,T.jsx)("li",{style:{padding:10},children:(0,T.jsx)(g.rU,{to:n,state:{from:l},children:r})},n)}))})]})}),(0,T.jsx)(m.Suspense,{fallback:(0,T.jsx)(N.Z,{}),children:(0,T.jsx)(v.j3,{})})]})]})}},2652:function(e,n,r){r.d(n,{JS:function(){return p},Jh:function(){return l},M1:function(){return f},Nn:function(){return u},TP:function(){return d}});var t=r(5861),a=r(7757),c=r.n(a),o=r(7596),i=r(3263),s="https://api.themoviedb.org/3",p=function(){var e=(0,t.Z)(c().mark((function e(){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({api_key:"f473c515ad1de0efd576d9ff7cafa2d6",page:1}),e.prev=1,e.next=4,i.Z.get("".concat(s,"/trending/movie/week?").concat(n));case 4:return r=e.sent,e.abrupt("return",r.data.results);case 8:e.prev=8,e.t0=e.catch(1),o.Am.error("Something went wrong! An error occurred!",{position:"top-right",autoClose:3e3,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"colored"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new URLSearchParams({api_key:"f473c515ad1de0efd576d9ff7cafa2d6",query:"".concat(n)}),e.prev=1,e.next=4,i.Z.get("".concat(s,"/search/movie?").concat(r));case 4:if(0!==(t=e.sent).data.results.length){e.next=8;break}return o.Am.warn("Please enter right query!"),e.abrupt("return");case 8:return e.abrupt("return",t.data.results);case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new URLSearchParams({api_key:"f473c515ad1de0efd576d9ff7cafa2d6"}),e.prev=1,e.next=4,i.Z.get("".concat(s,"/movie/").concat(n,"?").concat(r));case 4:return t=e.sent,e.abrupt("return",t.data);case 8:e.prev=8,e.t0=e.catch(1),o.Am.error("Something went wrong! An error occurred!",{position:"top-right",autoClose:3e3,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"colored"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new URLSearchParams({api_key:"f473c515ad1de0efd576d9ff7cafa2d6"}),e.prev=1,e.next=4,i.Z.get("".concat(s,"/movie/").concat(n,"/credits?").concat(r));case 4:return t=e.sent,e.abrupt("return",t.data.cast);case 8:e.prev=8,e.t0=e.catch(1),o.Am.error("Something went wrong! An error occurred!",{position:"top-right",autoClose:3e3,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"colored"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new URLSearchParams({api_key:"f473c515ad1de0efd576d9ff7cafa2d6"}),e.prev=1,e.next=4,i.Z.get("".concat(s,"/movie/").concat(n,"/reviews?").concat(r));case 4:return t=e.sent,e.abrupt("return",t.data.results);case 8:e.prev=8,e.t0=e.catch(1),o.Am.error("Something went wrong! An error occurred!",{position:"top-right",autoClose:3e3,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"colored"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}()},2329:function(e,n,r){e.exports=r.p+"static/media/no-img.22e32427cc4d2cf142af.jpg"}}]);
//# sourceMappingURL=256.f624604e.chunk.js.map