(this["webpackJsonpcomments-system"]=this["webpackJsonpcomments-system"]||[]).push([[0],{33:function(e,t,a){e.exports=a.p+"static/media/avatar.511718fc.svg"},34:function(e,t,a){e.exports=a.p+"static/media/comments.d68b6143.svg"},37:function(e,t,a){e.exports=a(56)},55:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(17),c=a(9),o=a(8),u=a(25),l=a(30),m=a.n(l),i=a(31),d=a(36),p={user:null,username:null},f=Object(c.b)({authUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_AUTH_USER":return{user:t.payload,username:null};case"SET_AUTH_USER_USERNAME":return Object(d.a)({},e,{username:t.payload});default:return e}}}),_=a(4),b=a(12),h=a(32),v=a(19),E=a.n(v),g=(a(48),a(50),{apiKey:"AIzaSyDpt6WXqe7-GrSdSZxe1w1jD_h9XQIQWYA",authDomain:"comments-system-6e56a.firebaseapp.com",databaseURL:"https://comments-system-6e56a.firebaseio.com",projectId:"comments-system-6e56a",storageBucket:"comments-system-6e56a.appspot.com",messagingSenderId:"463788584226",appId:"1:463788584226:web:d0787997fe53b69d8d497b",measurementId:"G-LMGZ5VEP27"}),O=new function e(){var t=this;Object(h.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,a){return t.auth.createUserWithEmailAndPassword(e,a)},this.doSignInWithEmailAndPassword=function(e,a){return t.auth.signInWithEmailAndPassword(e,a)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},this.userDB=function(e){return t.db.ref("users/".concat(e))},this.usersDB=function(){return t.db.ref("users")},E.a.initializeApp(g),this.auth=E.a.auth(),this.db=E.a.database()},j=r.a.createContext(O);var N,S="/comments",w=a(33),y=a.n(w),C=a(34),U=a.n(C),A=function(){var e=Object(o.c)((function(e){return e.authUser.user})),t=Object(b.g)().pathname===S,a=t?"navbar__button navbar__button_pressed":"navbar__button",n=t?"navbar__button":"navbar__button navbar__button_pressed",s=Object(o.c)((function(e){return e.authUser.username}));return s||(s="Loading..."),r.a.createElement("nav",{className:"navbar"},r.a.createElement(_.b,{to:S,className:a},r.a.createElement("img",{className:"navbar__img",src:U.a,alt:"Comments"})),e?r.a.createElement(_.b,{to:"/account",className:n},s):r.a.createElement(_.b,{to:"/signin",className:n},r.a.createElement("img",{className:"navbar__img",src:y.a,alt:"Sign In"})))},P=function(){return r.a.createElement("h2",null,"CommentsPage")},x=a(3),k=a(11),I=a.n(k),R=function(){var e=Object(b.f)(),t=Object(n.useContext)(j),a=Object(n.useState)(""),s=Object(x.a)(a,2),c=s[0],o=s[1],u=Object(n.useState)(""),l=Object(x.a)(u,2),m=l[0],i=l[1],d=Object(n.useState)(null),p=Object(x.a)(d,2),f=p[0],h=p[1];var v="form__input",E="form__input";v+=c&&!I.a.validate(c)?" form__input_invalid":"",E+=m&&m.length<6?" form__input_invalid":"";var g=m.length<6||!I.a.validate(c);return r.a.createElement("div",{className:"form-background"},r.a.createElement("div",{className:"form"},r.a.createElement("h2",{className:"form__title"},"Sign In"),r.a.createElement("form",{onSubmit:function(a){a.preventDefault(),t.doSignInWithEmailAndPassword(c,m).then((function(){o(""),i(""),h(null),e.push(S)})).catch(h)}},r.a.createElement("input",{name:"email",className:v,value:c,onChange:function(e){return o(e.target.value)},type:"text",placeholder:"Email Address"}),r.a.createElement("input",{name:"password",className:E,value:m,onChange:function(e){return i(e.target.value)},type:"password",placeholder:"Password"}),r.a.createElement("button",{disabled:g,type:"submit",className:"form__input form__button"},"Sign In"),f&&r.a.createElement("p",{className:"form__error"},f.message)),r.a.createElement("p",{className:"form__link"},"Don't have an account? ",r.a.createElement(_.b,{to:"/signup"},"Sign up")),r.a.createElement("p",{className:"form__link"},"Forgot password? ",r.a.createElement(_.b,{to:"/password-reset"},"Reset"))))},D=function(){var e=Object(b.f)(),t=Object(n.useContext)(j),a=Object(n.useState)(""),s=Object(x.a)(a,2),c=s[0],o=s[1],u=Object(n.useState)(""),l=Object(x.a)(u,2),m=l[0],i=l[1],d=Object(n.useState)(""),p=Object(x.a)(d,2),f=p[0],h=p[1],v=Object(n.useState)(""),E=Object(x.a)(v,2),g=E[0],O=E[1],N=Object(n.useState)(null),w=Object(x.a)(N,2),y=w[0],C=w[1];var U="form__input",A="form__input",P="form__input",k="form__input";U+=c&&c.length<3?" form__input_invalid":"",A+=m&&!I.a.validate(m)?" form__input_invalid":"",P+=f&&f.length<6?" form__input_invalid":"",k+=g&&g!==f?" form__input_invalid":"";var R=f!==g||f.length<6||!I.a.validate(m)||""===c;return r.a.createElement("div",{className:"form-background"},r.a.createElement("div",{className:"form"},r.a.createElement("h2",{className:"form__title"},"Sign Up"),r.a.createElement("form",{onSubmit:function(a){a.preventDefault(),t.doCreateUserWithEmailAndPassword(m,f).then((function(e){var a;t.userDB(null===(a=e.user)||void 0===a?void 0:a.uid).set({username:c,email:m})})).then((function(){o(""),i(""),h(""),O(""),C(null),e.push(S)})).catch(C)}},r.a.createElement("input",{name:"username",className:U,value:c,onChange:function(e){return o(e.target.value)},type:"text",placeholder:"Username"}),r.a.createElement("input",{name:"email",className:A,value:m,onChange:function(e){return i(e.target.value)},type:"text",placeholder:"Email Address"}),r.a.createElement("input",{name:"passwordOne",className:P,value:f,onChange:function(e){return h(e.target.value)},type:"password",placeholder:"Password"}),r.a.createElement("input",{name:"passwordTwo",className:k,value:g,onChange:function(e){return O(e.target.value)},type:"password",placeholder:"Confirm Password"}),r.a.createElement("button",{disabled:R,type:"submit",className:"form__input form__button"},"Sign Up"),y&&r.a.createElement("p",{className:"form__error"},y.message)),r.a.createElement("p",{className:"form__link"},"Already have an account? ",r.a.createElement(_.b,{to:"/signin"},"Sign in"))))},T=function(){var e=Object(b.f)(),t=Object(n.useContext)(j),a=Object(n.useState)(""),s=Object(x.a)(a,2),c=s[0],o=s[1],u=Object(n.useState)(null),l=Object(x.a)(u,2),m=l[0],i=l[1];var d="form__input";d+=c&&!I.a.validate(c)?" form__input_invalid":"";var p=!I.a.validate(c);return r.a.createElement("div",{className:"form-background"},r.a.createElement("div",{className:"form"},r.a.createElement("h2",{className:"form__title"},"Reset Password"),r.a.createElement("form",{onSubmit:function(){t.doPasswordReset(c).then((function(){o(""),i(null),e.push("/signin")})).catch(i)}},r.a.createElement("input",{name:"email",className:d,value:c,onChange:function(e){return o(e.target.value)},type:"text",placeholder:"Email Address"}),r.a.createElement("button",{disabled:p,type:"submit",className:"form__input form__button"},"Send reset email"),m&&r.a.createElement("p",{className:"form__error"},m.message)),r.a.createElement("p",{className:"form__link"},"Recall password? ",r.a.createElement(_.b,{to:"/signin"},"Sign in"))))},W=function(){var e=Object(n.useContext)(j),t=Object(b.f)();return r.a.createElement("button",{onClick:function(){e.doSignOut(),t.push(S)},className:"form__input form__button"},"Sign Out")},B=function(){var e=Object(n.useContext)(j),t=Object(n.useState)(""),a=Object(x.a)(t,2),s=a[0],c=a[1],o=Object(n.useState)(""),u=Object(x.a)(o,2),l=u[0],m=u[1],i=Object(n.useState)(null),d=Object(x.a)(i,2),p=d[0],f=d[1];var _="form__input",b="form__input";_+=s&&s.length<6?" form__input_invalid":"",b+=l&&l!==s?" form__input_invalid":"";var h=s!==l||s.length<6;return r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.doPasswordUpdate(s).then((function(){c(""),m(""),f(null)})).catch(f)}},r.a.createElement("input",{name:"passwordOne",className:_,value:s,onChange:function(e){return c(e.target.value)},type:"password",placeholder:"New Password"}),r.a.createElement("input",{name:"passwordTwo",className:b,value:l,onChange:function(e){return m(e.target.value)},type:"password",placeholder:"Confirm Password"}),r.a.createElement("button",{disabled:h,type:"submit",className:"form__input form__button"},"Update password"),p&&r.a.createElement("p",{className:"form__error"},p.message))},H=(N=function(e){return!!e},function(e){return function(t){var a=Object(b.f)(),n=Object(o.c)((function(e){return e.authUser.user})),s=N(n);return s||a.push("/signin"),s?r.a.createElement(e,t):null}})((function(){var e=Object(o.c)((function(e){return e.authUser})),t=e.user,a=e.username;a||(a="Loading ...");var n=null===t||void 0===t?void 0:t.email;return r.a.createElement("div",{className:"form-background"},r.a.createElement("div",{className:"form"},r.a.createElement("h2",{className:"form__title form__username"},a),r.a.createElement("h2",{className:"form__title form__email"},n),r.a.createElement(B,null),r.a.createElement("hr",null),r.a.createElement(W,null)))})),G=(a(54),a(55),function(){return function(){var e=Object(o.b)(),t=Object(n.useContext)(j);Object(n.useEffect)((function(){return t.auth.onAuthStateChanged((function(a){e({type:"CHANGE_AUTH_USER",payload:a}),t.userDB(null===a||void 0===a?void 0:a.uid).once("value").then((function(t){if(t.val()){var a=t.val().username;e(function(e){return{type:"SET_AUTH_USER_USERNAME",payload:e}}(a))}}))}))}),[])}(),r.a.createElement(_.a,null,r.a.createElement(A,null),r.a.createElement(b.b,{exact:!0,path:"/"}," ",r.a.createElement(b.a,{to:S})," "),r.a.createElement(b.b,{path:"/comments-system"}," ",r.a.createElement(b.a,{to:S})," "),r.a.createElement(b.b,{path:S,component:P}),r.a.createElement(b.b,{path:"/signin",component:R}),r.a.createElement(b.b,{path:"/signup",component:D}),r.a.createElement(b.b,{path:"/password-reset",component:T}),r.a.createElement(b.b,{path:"/account",component:H}))}),L={key:"root",storage:m.a},M=Object(u.a)(L,f),z=Object(c.c)(M),J=Object(u.b)(z);Object(s.render)(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:z},r.a.createElement(i.a,{loading:null,persistor:J},r.a.createElement(j.Provider,{value:O},r.a.createElement(G,null))))),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.391a9a55.chunk.js.map