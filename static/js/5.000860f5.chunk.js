(this.webpackJsonpsocial_credit_system=this.webpackJsonpsocial_credit_system||[]).push([[5],{233:function(e,t,n){e.exports={"form-control":"FormControls_form-control__pj4lY",error:"FormControls_error__18c5z","form-summary-error":"FormControls_form-summary-error__2S4wK"}},235:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return a}));var s=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},236:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return j}));var s=n(4),a=n(244),r=n(233),c=n.n(r),i=n(1),o=["input","meta","child"],u=["input","meta","child"],d=function(e){e.input;var t=e.meta,n=t.touched,s=t.error,a=e.children,r=n&&s;return Object(i.jsxs)("div",{className:c.a["form-control"]+" "+(r&&c.a.error),children:[Object(i.jsx)("div",{children:a}),Object(i.jsx)("div",{children:r&&Object(i.jsxs)("span",{children:[" ",s]})})]})},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,o));return Object(i.jsx)(d,Object(s.a)(Object(s.a)({},e),{},{children:Object(i.jsx)("textarea",Object(s.a)(Object(s.a)({},t),n))}))},j=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,u));return Object(i.jsx)(d,Object(s.a)(Object(s.a)({},e),{},{children:Object(i.jsx)("input",Object(s.a)(Object(s.a)({},t),n))}))}},239:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__2xRSA",dialogsItems:"Dialogs_dialogsItems__2sNe2",dialog:"Dialogs_dialog__lk_cw",active:"Dialogs_active__2sQhs",messages:"Dialogs_messages__1w_Up",message:"Dialogs_message__1xIDh"}},309:function(e,t,n){"use strict";n.r(t);var s=n(16),a=n(18),r=n(4),c=n(25),i=n(26),o=n(28),u=n(27),d=n(0),l=n.n(d),j=n(3),b=n(1),m=function(e){return{isAuth:e.auth.isAuth}},O=n(74),g=n(110),h=n(111),f=n(235),_=n(236),x=n(239),p=n.n(x),v=n(9),y=function(e){var t=e.name,n=e.path;return Object(b.jsx)("div",{className:p.a.dialog+" "+p.a.active,children:Object(b.jsx)(v.c,{to:"/dialogs/".concat(n),children:t})})},w=function(e){var t=e.messageContent;return Object(b.jsx)("div",{className:p.a.message,children:t})},D=Object(f.a)(50),N=Object(h.a)({form:"dialogAddMessageForm"})((function(e){return Object(b.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(b.jsx)("div",{children:Object(b.jsx)(g.a,{component:_.b,validate:[f.b,D],name:"newMessageBody",placeholder:"Enter your message"})}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{children:"Add Post"})})]})})),A=function(e){var t=e.dialogsPage,n=e.sendMessage;return Object(b.jsxs)("div",{className:p.a.dialogs,children:[Object(b.jsx)("div",{className:p.a.dialogsItems,children:t.dialogs.map((function(e){return Object(b.jsx)(y,{name:e.name,path:e.id},e.id)}))}),Object(b.jsx)("div",{className:p.a.messages,children:t.messages.map((function(e){return Object(b.jsx)(w,{messageContent:e.message},e.id)}))}),Object(b.jsx)(N,{onSubmit:function(e){n(e.newMessageBody)}})]})};t.default=Object(a.d)((function(e){var t=function(t){Object(o.a)(s,t);var n=Object(u.a)(s);function s(){return Object(c.a)(this,s),n.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){return this.props.isAuth?Object(b.jsx)(e,Object(r.a)({},this.props)):Object(b.jsx)(j.a,{to:"/login"})}}]),s}(l.a.Component);return Object(s.b)(m)(t)}),Object(s.b)((function(e){return{dialogsPage:e.dialogsPage}}),{sendMessage:O.b}))(A)}}]);
//# sourceMappingURL=5.000860f5.chunk.js.map