(this.webpackJsonpsocial_credit_system=this.webpackJsonpsocial_credit_system||[]).push([[5],{234:function(e,t,n){e.exports={"form-control":"FormControls_form-control__2LeGj",error:"FormControls_error__1Z7Z-","form-summary-error":"FormControls_form-summary-error__2KQQc"}},235:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return m}));var s=n(3),a=n(245),r=(n(0),n(111)),c=n(234),i=n.n(c),o=n(1),u=["input","meta"],d=["input","meta"],j=function(e){var t=e.meta,n=t.touched,s=t.error,a=e.children,r=n&&s;return Object(o.jsxs)("div",{className:i.a["form-control"]+" "+(r&&i.a.error),children:[Object(o.jsx)("div",{children:a}),Object(o.jsx)("div",{children:r&&Object(o.jsxs)("span",{children:[" ",s]})})]})},l=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,u));return Object(o.jsx)(j,Object(s.a)(Object(s.a)({},e),{},{children:Object(o.jsx)("textarea",Object(s.a)(Object(s.a)({},t),n))}))},b=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,d));return Object(o.jsx)(j,Object(s.a)(Object(s.a)({},e),{},{children:Object(o.jsx)("input",Object(s.a)(Object(s.a)({},t),n))}))};function m(e,t,n,a){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return Object(o.jsx)("div",{children:Object(o.jsx)(r.a,Object(s.a)({placeholder:e,name:t,validate:n,component:a},c))})}},237:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return a}));var s=function(e){if(!e)return"Field is required"},a=function(e){return function(t){return t.length>e?"Max length is ".concat(e," symbols"):void 0}}},241:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__3Kl76",dialogsItems:"Dialogs_dialogsItems__1HS3-",dialog:"Dialogs_dialog__1N8yx",active:"Dialogs_active__3OS0v",messages:"Dialogs_messages__sj4kZ",message:"Dialogs_message__2MqTs"}},310:function(e,t,n){"use strict";n.r(t);var s=n(16),a=n(18),r=n(3),c=n(27),i=n(28),o=n(30),u=n(29),d=n(0),j=n.n(d),l=n(4),b=n(1),m=function(e){return{isAuth:e.auth.isAuth}},O=n(75),g=n(111),f=n(112),h=n(237),v=n(235),x=n(241),_=n.n(x),p=n(11),y=function(e){var t=e.name,n=e.path;return Object(b.jsx)("div",{className:_.a.dialog+" "+_.a.active,children:Object(b.jsx)(p.c,{to:"/dialogs/".concat(n),children:t})})},M=function(e){var t=e.messageContent;return Object(b.jsx)("div",{className:_.a.message,children:t})},C=Object(h.a)(50),N=Object(f.a)({form:"dialogAddMessageForm"})((function(e){return Object(b.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(b.jsx)("div",{children:Object(b.jsx)(g.a,{component:v.b,validate:[h.b,C],name:"newMessageBody",placeholder:"Enter your message"})}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{children:"Add Post"})})]})})),D=function(e){var t=e.dialogsPage,n=e.sendMessage;return Object(b.jsxs)("div",{className:_.a.dialogs,children:[Object(b.jsx)("div",{className:_.a.dialogsItems,children:t.dialogs.map((function(e){return Object(b.jsx)(y,{name:e.name,path:e.id},e.id)}))}),Object(b.jsx)("div",{className:_.a.messages,children:t.messages.map((function(e){return Object(b.jsx)(M,{messageContent:e.message},e.id)}))}),Object(b.jsx)(N,{onSubmit:function(e){n(e.newMessageBody)}})]})};t.default=Object(a.d)((function(e){var t=function(t){Object(o.a)(s,t);var n=Object(u.a)(s);function s(){return Object(c.a)(this,s),n.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){return this.props.isAuth?Object(b.jsx)(e,Object(r.a)({},this.props)):Object(b.jsx)(l.a,{to:"/login"})}}]),s}(j.a.Component);return Object(s.b)(m)(t)}),Object(s.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(t){e(O.a.sendMessageCreator(t))}}})))(D)}}]);
//# sourceMappingURL=5.fb9a23a2.chunk.js.map