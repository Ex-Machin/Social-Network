(this.webpackJsonpsocial_credit_system=this.webpackJsonpsocial_credit_system||[]).push([[1],{146:function(e,t,n){},172:function(e,t,n){},233:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(44),c=n.n(s),i=n(16),o=n(10),u=n(27),l=n(28),f=n(30),d=n(29),p=n(4),j=n(18),b=(n(146),n(3)),g=n(55),h=n.n(g),O=n(1),m=function(e){return Object(O.jsxs)("header",{className:h.a.header,children:[Object(O.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png",alt:""}),e.isAuth?Object(O.jsxs)("div",{children:[e.login," ",Object(O.jsx)("button",{onClick:e.logout,children:"Logout"})]}):Object(O.jsx)(o.b,{to:"/login",className:h.a.loginBlock,children:"Login"})]})},v=n(31),x=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(O.jsx)(m,Object(b.a)({},this.props))}}]),n}(a.a.Component),w=Object(i.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,profile:e.profilePage.profile}}),{logout:v.d})(x),P=function(){return Object(O.jsx)("div",{children:"Music"})},_=n(9),C=n.n(_),y=function(e){var t=e.friendsData;return Object(O.jsxs)("nav",{className:C.a.nav,children:[Object(O.jsx)("div",{children:Object(O.jsx)(o.c,{to:"/profile",className:function(e){return e?C.a.active:C.a.item},children:"Profile"})}),Object(O.jsx)("div",{children:Object(O.jsx)(o.c,{to:"/dialogs",className:function(e){return e?C.a.active:C.a.item},children:"Messages"})}),Object(O.jsx)("div",{children:Object(O.jsx)(o.c,{to:"/news",className:function(e){return e?C.a.active:C.a.item},children:"News"})}),Object(O.jsx)("div",{children:Object(O.jsx)(o.c,{to:"/users",className:function(e){return e?C.a.active:C.a.item},children:"Users"})}),Object(O.jsx)("div",{children:Object(O.jsx)(o.c,{to:"/music",className:function(e){return e?C.a.active:C.a.item},children:"Music"})}),Object(O.jsx)("div",{children:Object(O.jsx)(o.c,{to:"/settings",className:function(e){return e?C.a.active:C.a.item},children:"Settings"})}),Object(O.jsxs)("div",{children:["Friends",Object(O.jsx)("div",{className:C.a.friendsBlock,children:t.map((function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)("img",{src:e.src,alt:"",className:C.a.friendsImage}),Object(O.jsx)("div",{children:e.name})]},e.id)}))})]})]})},S=Object(i.b)((function(e){return{friendsData:e.sidebar}}))(y),k=function(){return Object(O.jsx)("div",{children:"News"})},U=n(45),E=function(){return Object(O.jsx)("div",{children:"Settings"})},I=n(89),N=Object(I.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),T=function(e){return e.usersPage.pageSize},L=function(e){return e.usersPage.totalUsersCount},z=function(e){return e.usersPage.currentPage},F=function(e){return e.usersPage.isFetching},A=function(e){return e.usersPage.followingInProgress},R=n(6),D=n.n(R),M=n(11),B=n(20),G=n(8),q=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(b.a)(Object(b.a)({},e),r):e}))},V="users/FOLLOW",W="users/UNFOLLOW",H="users/SET-USERS",J="users/SET_CURRENT_PAGE",K="users/SET_TOTAL_USERS_COUNT",X="users/TOGGLE_IS_FETCHING",Y="users/TOGGLE_IS_FOLLOWING_PROGRESS",Q={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},Z=function(e){return{type:V,userId:e}},$=function(e){return{type:W,userId:e}},ee=function(e){return{type:J,currentPage:e}},te=function(e){return{type:K,totalUsersCount:e}},ne=function(e){return{type:X,isFetching:e}},re=function(e,t){return{type:Y,isFetching:e,userId:t}},ae=function(){var e=Object(M.a)(D.a.mark((function e(t,n,r,a){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(re(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(a(n)),t(re(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return Object(b.a)(Object(b.a)({},e),{},{users:q(e.users,t.userId,"id",{followed:!0})});case W:return Object(b.a)(Object(b.a)({},e),{},{users:q(e.users,t.userId,"id",{followed:!1})});case H:return Object(b.a)(Object(b.a)({},e),{},{users:t.users});case J:return Object(b.a)(Object(b.a)({},e),{},{currentPage:t.currentPage});case K:return Object(b.a)(Object(b.a)({},e),{},{totalUsersCount:t.totalUsersCount});case X:return Object(b.a)(Object(b.a)({},e),{},{isFetching:t.isFetching});case Y:return Object(b.a)(Object(b.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(B.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},ce=n(22),ie=n(14),oe=n(46),ue=n.n(oe),le=n(85),fe=n.n(le),de=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,s=e.onPageChanged,c=e.portionSize,i=void 0===c?10:c,o=Math.ceil(t/n),u=[],l=1;l<=o;l++)u.push(l);var f=Math.ceil(o/i),d=Object(r.useState)(1),p=Object(ie.a)(d,2),j=p[0],b=p[1],g=(j-1)*i+1,h=j*i;return Object(O.jsxs)("div",{className:ue.a.paginator,children:[j>1&&Object(O.jsx)("button",{onClick:function(){b(j-1)},children:"PREV"}),u.filter((function(e){return e>=g&&e<=h})).map((function(e){return Object(O.jsx)("span",{className:fe()(Object(ce.a)({},ue.a.selectedPage,a===e),ue.a.pageNumber),onClick:function(t){s(e)},children:e},e)})),f>j&&Object(O.jsx)("button",{onClick:function(){b(j+1)},children:"NEXT"})]})},pe=n(73),je=n(86),be=n.n(je),ge=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,a=e.follow;return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{children:[Object(O.jsxs)("span",{children:[Object(O.jsx)("div",{children:Object(O.jsx)(o.c,{to:"/profile/"+t.id,children:Object(O.jsx)("img",{src:t.photos.small||pe.a,alt:"",className:be.a.userPhoto})})}),Object(O.jsx)("div",{children:t.followed?Object(O.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unfollow"}):Object(O.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Follow"})})]}),Object(O.jsxs)("span",{children:[Object(O.jsxs)("span",{children:[Object(O.jsxs)("div",{children:[t.name," "]}),Object(O.jsx)("div",{children:t.status})]}),Object(O.jsx)("span",{})]})]},t.id)})},he=function(e){var t=e.currentPage,n=e.onPageChanged,r=e.totalUsersCount,a=e.pageSize,s=e.users,c=e.followingInProgress,i=e.unfollow,o=e.follow;return Object(O.jsxs)("div",{children:[Object(O.jsx)(de,{currentPage:t,onPageChanged:n,totalItemsCount:r,pageSize:a}),s.map((function(e){return Object(O.jsx)(ge,{user:e,followingInProgress:c,unfollow:i,follow:o},e.id)}))]})},Oe=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{children:this.props.isFetching?Object(O.jsx)(U.a,{}):Object(O.jsx)(he,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,toggleFollowingProgress:this.props.toggleFollowingProgress,followingInProgress:this.props.followingInProgress})})}}]),n}(a.a.Component),me=Object(j.d)(Object(i.b)((function(e){return{users:N(e),pageSize:T(e),totalUsersCount:L(e),currentPage:z(e),isFetching:F(e),followingInProgress:A(e)}}),{follow:function(e){return function(){var t=Object(M.a)(D.a.mark((function t(n){return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ae(n,e,G.d.follow.bind(G.d),Z);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(M.a)(D.a.mark((function t(n){return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ae(n,e,G.d.unfollow.bind(G.d),$);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:ee,setTotalUsersCount:te,toggleFollowingProgress:re,getUsers:function(e,t){return function(){var n=Object(M.a)(D.a.mark((function n(r){var a;return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(ne(!0)),r(ee(e)),n.next=4,G.d.getUsers(e,t);case 4:a=n.sent,r(ne(!1)),r((s=a.items,{type:H,users:s})),r(te(a.totalCount));case 8:case"end":return n.stop()}var s}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(Oe),ve=n(74),xe="app/SET_INIT",we={initialized:!1},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;return t.type===xe?Object(b.a)(Object(b.a)({},e),{},{initialized:!0}):e},_e=a.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,310))})),Ce=a.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,309))})),ye=a.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,308))})),Se=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.initialize()}},{key:"render",value:function(){return this.props.init?Object(O.jsxs)("div",{className:"app-wrapper",children:[Object(O.jsx)(w,{}),Object(O.jsx)(S,{}),Object(O.jsx)("div",{className:"app-wrapper-content",children:Object(O.jsx)(r.Suspense,{fallback:Object(O.jsx)("div",{children:"Loading..."}),children:Object(O.jsxs)(p.d,{children:[Object(O.jsx)(p.b,{path:"/dialogs",element:Object(O.jsx)(_e,{})}),Object(O.jsx)(p.b,{path:"/profile/:id",element:Object(O.jsx)(Ce,{})}),Object(O.jsx)(p.b,{path:"/profile",element:Object(O.jsx)(Ce,{})}),Object(O.jsx)(p.b,{path:"/news",element:Object(O.jsx)(k,{})}),Object(O.jsx)(p.b,{path:"/music",element:Object(O.jsx)(P,{})}),Object(O.jsx)(p.b,{path:"/settings",element:Object(O.jsx)(E,{})}),Object(O.jsx)(p.b,{path:"/users",element:Object(O.jsx)(me,{})}),Object(O.jsx)(p.b,{path:"/login",element:Object(O.jsx)(ye,{})})]})})})]}):Object(O.jsx)(U.a,{})}}]),n}(a.a.Component),ke=Object(j.d)(ve.a,Object(i.b)((function(e){return{init:e.app.initialized}}),{initialize:function(){return function(e){var t=e(Object(v.b)());Promise.all([t]).then((function(){e({type:xe})}))}}}))(Se),Ue=(n(172),n(58)),Ee=n(75),Ie=[{id:1,name:"Lika",src:"https://i.quotev.com/img/q/u/20/8/16/hzedqa72l2_l.jpg"},{id:2,name:"Kair",src:"https://i.quotev.com/img/q/u/20/8/16/hzedqa72l2_l.jpg"},{id:3,name:"Yulia",src:"https://i.quotev.com/img/q/u/20/8/16/hzedqa72l2_l.jpg"}],Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie;return e},Te=n(88),Le=n(81),ze=Object(j.c)({profilePage:Ue.b,dialogsPage:Ee.a,sidebar:Ne,usersPage:se,auth:v.a,form:Le.a,app:Pe}),Fe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||j.d,Ae=Object(j.e)(ze,Fe(Object(j.a)(Te.a)));window.store=Ae;var Re=Ae;c.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(o.a,{children:Object(O.jsx)(i.a,{store:Re,children:Object(O.jsx)(ke,{})})})}),document.getElementById("root"))},31:function(e,t,n){"use strict";n.d(t,"b",(function(){return j})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return h}));var r=n(6),a=n.n(r),s=n(11),c=n(3),i=n(24),o=n(8),u="auth/SET_USER_DATA",l="auth/GET_CAPTCHA_URL_SUCCEESS",f={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},d=function(e,t,n,r){return{type:u,payload:{email:e,userId:t,login:n,isAuth:r}}},p=function(e){return{type:l,payload:{captchaUrl:e}}},j=function(){return function(){var e=Object(s.a)(a.a.mark((function e(t){var n,r,s,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.getCurrentUser();case 2:0===(n=e.sent).resultCode&&(r=n.data,s=r.email,c=r.id,i=r.login,t(d(s,c,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},b=function(e,t,n,r){return function(){var c=Object(s.a)(a.a.mark((function s(c){var u,l;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.a.login(e,t,n,r);case 2:0===(u=a.sent).resultCode?c(j()):(10===u.resultCode&&c(g()),l=u.messages.length>0?u.messages[0]:"Unhandled error",c(Object(i.a)("login",{_error:l})));case 4:case"end":return a.stop()}}),s)})));return function(e){return c.apply(this,arguments)}}()},g=function(){return function(){var e=Object(s.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.c.getCaptchaUrl();case 2:n=e.sent,r=n.url,t(p(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},h=function(){return function(){var e=Object(s.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.logout();case 2:0===e.sent.resultCode&&t(d(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:case u:return Object(c.a)(Object(c.a)({},e),t.payload);default:return e}}},45:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/loading.b767aab4.svg",a=n(1);t.a=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:r,alt:""})})}},46:function(e,t,n){e.exports={paginator:"Paginator_paginator__3w-2P",pageNumber:"Paginator_pageNumber__1RptP",selectedPage:"Paginator_selectedPage__3LxJC"}},55:function(e,t,n){e.exports={header:"Header_header__1VCKf",loginBlock:"Header_loginBlock__6mma5"}},58:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"d",(function(){return v})),n.d(t,"c",(function(){return x})),n.d(t,"g",(function(){return w})),n.d(t,"e",(function(){return P})),n.d(t,"f",(function(){return _}));var r=n(22),a=n(6),s=n.n(a),c=n(11),i=n(20),o=n(3),u=n(24),l=n(8),f="profile/ADD-POST",d="profile/SET_USER_PROFILE",p="profile/SET_STATUS",j="profile/DELETE_POST",b="profile/SAVE_PHOTO_SUCCESS",g={posts:[{id:1,message:"Bye World",likeCount:"12"},{id:2,message:"Abrakadabra",likeCount:"11"}],profile:null,status:""},h=function(e){return{type:f,post:e}};function O(e){return e.charAt(0).toLowerCase()+e.slice(1)}var m=function(e){return{type:p,status:e}},v=function(e){return function(t){l.d.getUser(e).then((function(e){t({type:d,profile:e})}))}},x=function(e){return function(){var t=Object(c.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.b.getStatus(e);case 2:r=t.sent,n(m(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(c.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:0===l.b.updateStatus(e).result_code&&n(m(e));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},P=function(e){return function(){var t=Object(c.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:0===(r=l.b.savePhoto(e)).result_code&&n((a=r.photos,{type:b,photos:a}));case 2:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(c.a)(s.a.mark((function t(n,a){var c,i,o,f,d;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.userId,t.next=3,l.b.saveProfile(e);case 3:if(0!==(i=t.sent).resultCode){t.next=8;break}n(v(c)),t.next=13;break;case 8:return o=/\(([^\)]+)/,f=i.messages[0].split(o),(d=f[1].split("->"))[1]?n(Object(u.a)("editProfile",Object(r.a)({},O(d[0]),Object(r.a)({},O(d[1]),i.messages[0])))):n(Object(u.a)("editProfile",Object(r.a)({},O(d[0]),i.messages[0]))),t.abrupt("return",Promise.reject(i.messages[0]));case 13:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:var n={id:e.posts.length+1,message:t.post,likeCoint:0};return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(i.a)(e.posts),[n])});case d:return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case p:return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case j:return Object(o.a)(Object(o.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.id}))});case b:return Object(o.a)(Object(o.a)({},e),{},{profile:Object(o.a)(Object(o.a)({},e.profile),{},{photos:t.photos})});default:return e}}},73:function(e,t,n){"use strict";t.a=n.p+"static/media/avatar.d76e1693.png"},74:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(3),a=n(4),s=n(1);function c(e){return function(t){var n=Object(a.f)(),c=Object(a.g)(),i=Object(a.h)();return Object(s.jsx)(e,Object(r.a)(Object(r.a)({},t),{},{location:n,navigate:c,params:i}))}}},75:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(20),a=n(3),s="dialogs/SEND-MESSAGE",c={messages:[{id:1,message:"hi"},{id:2,message:"What da fuck!"},{id:3,message:"Esketit"}],dialogs:[{id:1,name:"Lisa"},{id:2,name:"Vika"},{id:3,name:"Lilia"},{id:4,name:"Vlad"},{id:5,name:"Dima"}]},i=function(e){return{type:s,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;return t.type===s?Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:e.messages.length+1,message:t.newMessageBody}])}):e}},8:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return o}));var r=n(84),a=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"5d8a7eff-a740-483e-8ca3-78892103be5c"}}),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},getUser:function(e){return console.warn("Obsolete method. Please profileAPI object"),c.getUser(e)},follow:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))}},c={getUser:function(e){return a.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return a.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return a.put("profile/status",{status:e}).then((function(e){return e.data}))},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},saveProfile:function(e){return a.put("profile",e).then((function(e){return e.data}))}},i={getCurrentUser:function(){return a.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},logout:function(){return a.delete("auth/login").then((function(e){return e.data}))}},o={getCaptchaUrl:function(){return a.get("security/get-captcha-url").then((function(e){return e.data}))}}},86:function(e,t,n){e.exports={userPhoto:"users_userPhoto__1_En6"}},9:function(e,t,n){e.exports={nav:"NavBar_nav__1FWUI",friendsBlock:"NavBar_friendsBlock__2UJrf",friendsImage:"NavBar_friendsImage__1Qaxa"}}},[[233,2,3]]]);
//# sourceMappingURL=main.0ac424e2.chunk.js.map