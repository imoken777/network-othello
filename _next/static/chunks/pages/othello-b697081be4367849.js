(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[463],{5627:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/othello",function(){return a(1702)}])},1292:function(e,t,a){"use strict";a.d(t,{v:function(){return c}});var s=a(5893);let n=e=>(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:e.size,height:e.size,fill:e.fill,children:(0,s.jsx)("path",{d:"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"})});var o=a(1733),l=a(7251),i=a(2038),r=a.n(i);let c=e=>{let{user:t}=e,a=async()=>{confirm("Logout?")&&await (0,l.k)()};return(0,s.jsx)("div",{className:r().container,children:(0,s.jsxs)("div",{className:r().main,children:[(0,s.jsx)("img",{src:o.D.frourio_svg,height:36,alt:"frourio logo"}),(0,s.jsxs)("div",{className:r().userBtn,onClick:a,children:[t.photoURL?(0,s.jsx)("img",{className:r().userIcon,src:t.photoURL,height:24,alt:t.displayName}):(0,s.jsx)(n,{size:18,fill:"#555"}),(0,s.jsx)("span",{className:r().userName,children:t.displayName})]})]})})}},1702:function(e,t,a){"use strict";a.r(t);var s=a(5893),n=a(24),o=a(7294),l=a(8239),i=a(1292),r=a(1290),c=a(3377),_=a(5371),d=a(2108),u=a.n(d);let h=()=>{let[e]=(0,n.KO)(_.L),[t,a]=(0,o.useState)(),d=async()=>{let e=await r.x.board.$get().catch(c.F);null!==e&&a(e.board)},h=async(e,t)=>{await r.x.board.$post({body:{x:e,y:t}}),await d()};return((0,o.useEffect)(()=>{let e=setInterval(d,500);return()=>{clearInterval(e)}},[]),t&&e)?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.v,{user:e}),(0,s.jsx)("div",{className:u().container,children:(0,s.jsx)("div",{className:u().board,children:t.map((e,t)=>e.map((e,a)=>(0,s.jsx)("div",{className:u().cell,onClick:()=>h(a,t),children:0!==e&&(0,s.jsx)("div",{className:u().stone,style:{background:1===e?"#000":2===e?"#fff":"#ff0"}})},"".concat(a,"-").concat(t))))})})]}):(0,s.jsx)(l.g,{visible:!0})};t.default=h},7251:function(e,t,a){"use strict";a.d(t,{_:function(){return l},k:function(){return i}});var s=a(7908),n=a(328),o=a(3377);let l=async()=>{let e=new s.GH;e.addScope("read:user"),await (0,s.rh)((0,n.l)(),e).catch(o.F)},i=async()=>{await (0,n.l)().signOut()}},2038:function(e){e.exports={container:"BasicHeader_container__5rTZS",main:"BasicHeader_main__yd6De",userBtn:"BasicHeader_userBtn__B7CLf",userIcon:"BasicHeader_userIcon__fjiOn",userName:"BasicHeader_userName__vjAjN"}},2108:function(e){e.exports={container:"othello_container__f2XDH",main:"othello_main__zF5jw",footer:"othello_footer__0WJ2N",title:"othello_title__P_LWE",description:"othello_description__m97ud",code:"othello_code__OTpYz",grid:"othello_grid__8wRBL",card:"othello_card__kS0YF",logo:"othello_logo__KuYnA",board:"othello_board__w_zl9",cell:"othello_cell__IHagl",stone:"othello_stone__Cq1qK"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5627)}),_N_E=e.O()}]);