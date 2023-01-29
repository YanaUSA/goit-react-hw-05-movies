"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[212],{5212:function(e,r,n){n.r(r),n.d(r,{default:function(){return b}});var t,a,c,o,u,i,s=n(9439),p=n(2791),f=n(7689),d=n(2652),h=n(168),l=n(6444),v=l.ZP.div(t||(t=(0,h.Z)(["\n  font-size: 14px;\n  font-weight: 400;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),g=l.ZP.ul(a||(a=(0,h.Z)(["\n  font-size: 14px;\n  font-weight: 400;\n  padding: 20px 0 0 20px;\n"]))),m=l.ZP.li(c||(c=(0,h.Z)(["\n  margin-bottom: 20px;\n"]))),x=l.ZP.h3(o||(o=(0,h.Z)(["\n  font-size: 14px;\n  font-weight: 700;\n"]))),w=l.ZP.p(u||(u=(0,h.Z)(["\n  padding: 10px 0 10px 0;\n"]))),Z=l.ZP.p(i||(i=(0,h.Z)(["\n  padding: 10px 0 10px 20px;\n"]))),k=n(184),b=function(){var e=(0,p.useState)([]),r=(0,s.Z)(e,2),n=r[0],t=r[1],a=(0,f.UO)().movieId;return(0,p.useEffect)((function(){(0,d.Jh)(Number(a)).then((function(e){if(e){var r=e.map((function(e){return{id:e.id,content:e.content,author:e.author}}));t(r)}}))}),[a]),n?(0,k.jsx)(v,{children:n.length?(0,k.jsx)(g,{children:n.map((function(e){var r=e.id,n=e.content,t=e.author;return(0,k.jsxs)(m,{children:[(0,k.jsxs)(x,{children:["Author: ",t]}),(0,k.jsx)(w,{children:n})]},r)}))}):(0,k.jsx)(Z,{children:"We don't have any reviews for this movie."})}):null}},2652:function(e,r,n){n.d(r,{JS:function(){return s},Jh:function(){return h},M1:function(){return d},Nn:function(){return p},TP:function(){return f}});var t=n(5861),a=n(7757),c=n.n(a),o=n(7596),u=n(3263),i="https://api.themoviedb.org/3",s=function(){var e=(0,t.Z)(c().mark((function e(){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new URLSearchParams({api_key:"f473c515ad1de0efd576d9ff7cafa2d6",page:1}),e.prev=1,e.next=4,u.Z.get("".concat(i,"/trending/movie/week?").concat(r));case 4:return n=e.sent,e.abrupt("return",n.data.results);case 8:e.prev=8,e.t0=e.catch(1),o.Am.error("Something went wrong! An error occurred!",{position:"top-right",autoClose:3e3,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"colored"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(c().mark((function e(r){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({api_key:"f473c515ad1de0efd576d9ff7cafa2d6",query:"".concat(r)}),e.prev=1,e.next=4,u.Z.get("".concat(i,"/search/movie?").concat(n));case 4:if(0!==(t=e.sent).data.results.length){e.next=8;break}return o.Am.warn("Please enter right query!"),e.abrupt("return");case 8:return e.abrupt("return",t.data.results);case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(c().mark((function e(r){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({api_key:"f473c515ad1de0efd576d9ff7cafa2d6"}),e.prev=1,e.next=4,u.Z.get("".concat(i,"/movie/").concat(r,"?").concat(n));case 4:return t=e.sent,e.abrupt("return",t.data);case 8:e.prev=8,e.t0=e.catch(1),o.Am.error("Something went wrong! An error occurred!",{position:"top-right",autoClose:3e3,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"colored"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(c().mark((function e(r){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({api_key:"f473c515ad1de0efd576d9ff7cafa2d6"}),e.prev=1,e.next=4,u.Z.get("".concat(i,"/movie/").concat(r,"/credits?").concat(n));case 4:return t=e.sent,e.abrupt("return",t.data.cast);case 8:e.prev=8,e.t0=e.catch(1),o.Am.error("Something went wrong! An error occurred!",{position:"top-right",autoClose:3e3,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"colored"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,t.Z)(c().mark((function e(r){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({api_key:"f473c515ad1de0efd576d9ff7cafa2d6"}),e.prev=1,e.next=4,u.Z.get("".concat(i,"/movie/").concat(r,"/reviews?").concat(n));case 4:return t=e.sent,e.abrupt("return",t.data.results);case 8:e.prev=8,e.t0=e.catch(1),o.Am.error("Something went wrong! An error occurred!",{position:"top-right",autoClose:3e3,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"colored"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=212.ddfb83e3.chunk.js.map