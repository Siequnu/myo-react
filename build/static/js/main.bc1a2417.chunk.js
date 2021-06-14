(this["webpackJsonpmyo-react"]=this["webpackJsonpmyo-react"]||[]).push([[0],{106:function(e,t,a){},164:function(e,t,a){},199:function(e,t,a){},200:function(e,t,a){},201:function(e,t,a){},203:function(e,t,a){},204:function(e,t,a){},205:function(e,t,a){},206:function(e,t,a){},207:function(e,t,a){},208:function(e,t,a){},209:function(e,t,a){},210:function(e,t,a){},211:function(e,t,a){},213:function(e,t,a){},214:function(e,t,a){},215:function(e,t,a){},216:function(e,t,a){},217:function(e,t,a){},218:function(e,t,a){},224:function(e,t,a){},225:function(e,t,a){},226:function(e,t,a){},227:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(16),c=a.n(s),r=(a(164),a(12)),o=a(15),l=a(26),u=a(57),d=a(147),j=a(22),b=a.n(j),h=a(41),p=a(313);function m(){var e=g.currentUserValue;return e&&e.access_token?{Authorization:"Bearer ".concat(e.access_token)}:{}}function v(){var e=g.currentUserValue;return e&&e.access_token?e.access_token:{}}function O(){var e=g.currentUserValue;return!(!e||!e.refresh_token)&&e.refresh_token}function x(e){return e.text().then((function(t){var a=t&&JSON.parse(t);if(!e.ok){-1!==[401,403].indexOf(e.status)&&g.logout();var n=a&&a.message||e.statusText;return Promise.reject(n)}return a}))}var f={authLogin:"https://myo-app.com/auth/login",authRefresh:"https://myo-app.com/auth/refresh",afterLogout:"/",resetWithToken:"https://myo-app.com/auth/reset/token",authSignUp:"https://myo-app.com/auth/register",authValidate:"https://myo-app.com/auth/validate",confirmEmail:"https://myo-app.com/auth/confirm",activitiesListUrl:"https://myo-app.com/activities/api/list",activityGetUrl:"https://myo-app.com/activities/api/get/",onboardingStatusUrl:"https://myo-app.com/onboarding/status",onboardingSteps:["About yourself","You and art","Final details"],onboardingQuestions:[{question:"What kind of creative activity are you most interested in?",answers:["Drawing","Writing","Painting","Crafts","Photography"]},{question:"What would you like to use Myo for?",answers:["To relax","To learn new skills","To use my imagination","To better express myself","To discover new arts"]},{question:"What would you like Myo to offer?",answers:["Breadth of activities","In depth skill building","Global perspectives","Interaction with artists & users"]},{question:"What skills are you most interested in developing?",answers:["Imagination","Persistence","Discipline","Inquisitiveness","Collaboration"]},{question:"Generally, how often do you engage in creative activities?",answers:["Everyday","Two or three times a week","Once every now and again","Never!"]},{question:"How often would you like to engage in creative activities?",answers:["Everyday","Two or three times a week","Once every now and again","Never!"]},{question:"For how long?",answers:["No more than 5mins at a time","5mins to 10mins","10mins to 20mins","20mins to 40mins","Sky\u2019s the limit!"]},{question:"How \u2018experienced\u2019 do you think you are?",answers:["Complete beginner","Want to take it easy","I like a challenge!","Experience grrrr!!"]},{question:"What materials do you have access to?",answers:["Pens and paper only","Own some pencils","Watercolour paints","Acrylic paints","General arts & crafts stuff","Camera (phone will do)"]}]},y=new p.a(JSON.parse(localStorage.getItem("currentUser"))),g={login:function(e,t){return w.apply(this,arguments)},logout:function(){localStorage.removeItem("currentUser"),y.next(null)},signUp:function(e,t,a){return k.apply(this,arguments)},updateUser:function(e){localStorage.setItem("currentUser",JSON.stringify(e)),y.next(e)},validateRegistration:function(e,t){return S.apply(this,arguments)},confirmEmail:function(e){return N.apply(this,arguments)},currentUser:y.asObservable(),get currentUserValue(){return y.value}};function w(){return(w=Object(h.a)(b.a.mark((function e(t,a){var n,i,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:a})},e.next=3,fetch(f.authLogin,n);case 3:return i=e.sent,e.next=6,x(i);case 6:return s=e.sent,localStorage.setItem("currentUser",JSON.stringify(s)),y.next(s),e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=Object(h.a)(b.a.mark((function e(t,a,n){var i,s,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:n,email:a})},e.next=3,fetch(f.authSignUp,i);case 3:return s=e.sent,e.next=6,x(s);case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return(S=Object(h.a)(b.a.mark((function e(t,a){var n,i,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,email:a})},e.next=3,fetch(f.authValidate,n);case 3:return i=e.sent,e.next=6,x(i);case 6:return s=e.sent,e.abrupt("return",s);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(h.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:t})},e.next=3,fetch(f.confirmEmail,a);case 3:return n=e.sent,e.next=6,x(n);case 6:if(!e.sent.hasOwnProperty("success")){e.next=11;break}return e.abrupt("return",!0);case 11:return e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var C=a(76),I=a.n(C);function _(e,t){return T.apply(this,arguments)}function T(){return(T=Object(h.a)(b.a.mark((function e(t,a){var n,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.post(t,a,{headers:m()});case 3:return n=e.sent,i=n.data,e.abrupt("return",i);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var U=a(1),A=function(e){var t=e.component,a=Object(d.a)(e,["component"]);return Object(U.jsx)(l.b,Object(u.a)(Object(u.a)({},a),{},{render:function(e){return g.currentUserValue?Object(U.jsx)(t,Object(u.a)({},e)):Object(U.jsx)(l.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},B=(a(106),a(62)),W=a(312),P=a(229);var F=Object(l.h)((function(e){var t=i.a.useContext(Et).setSnackbar;g.currentUserValue&&e.history.push("/");var a=Object(B.a)({initialValues:{username:"",password:""},onSubmit:function(a){g.login(a.username,a.password).then((function(n){var i=(e.location.state||{from:{pathname:"/"}}).from;e.history.push(i),t({text:"Welcome, ".concat(a.username),open:!0,severity:"success"})}))}});return Object(U.jsx)("div",{className:"AuthForm",children:Object(U.jsxs)("form",{onSubmit:a.handleSubmit,children:[Object(U.jsx)(W.a,{fullWidth:!0,id:"username",name:"username",label:"Username",value:a.values.username,onChange:a.handleChange,error:a.touched.username&&Boolean(a.errors.username)}),Object(U.jsx)(W.a,{fullWidth:!0,id:"password",name:"password",label:"Password",type:"password",value:a.values.password,onChange:a.handleChange,error:a.touched.password&&Boolean(a.errors.password),helperText:a.touched.password&&a.errors.password}),Object(U.jsx)(P.a,{className:"SubmitButton",color:"primary",variant:"contained",fullWidth:!0,type:"submit",children:"Submit"}),Object(U.jsx)(P.a,{component:o.b,to:"/reset",className:"ResetPasswordButton",children:"Forgot password"}),Object(U.jsx)(P.a,{component:o.b,to:"/register",children:"New account"})]})})}));var L=Object(l.h)((function(e){var t=i.a.useContext(Et).setSnackbar;return Object(U.jsx)(P.a,{variant:"contained",onClick:function(){return t({text:"You have logged out.",open:!0,severity:"success"}),g.logout(),void e.history.push(f.afterLogout)},children:"Logout"})}));var H=Object(l.h)((function(e){var t=i.a.useContext(Et).setSnackbar,a=Object(l.g)().token,n=Object(B.a)({initialValues:{password:""},onSubmit:function(n){n.token=a,fetch(f.resetWithToken,{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(a){if(a.hasOwnProperty("error"))throw a.error;t({text:a.success,open:!0,severity:"success"}),e.history.push("/login")})).catch((function(e){t({text:e,open:!0,severity:"error"})}))}});return Object(U.jsx)("div",{className:"AuthForm",children:Object(U.jsxs)("form",{onSubmit:n.handleSubmit,children:[Object(U.jsx)(W.a,{fullWidth:!0,id:"password",name:"password",label:"New password",type:"password",value:n.values.password,onChange:n.handleChange,error:n.touched.password&&Boolean(n.errors.password),helperText:n.touched.password&&n.errors.password}),Object(U.jsx)(P.a,{variant:"contained",fullWidth:!0,type:"submit",children:"Set new password"})]})})}));var M=Object(l.h)((function(e){var t=i.a.useContext(Et).setSnackbar,a=Object(B.a)({initialValues:{email:""},onSubmit:function(a){fetch("/auth/reset",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(a){if(a.hasOwnProperty("error"))throw a.error;t({text:a.success,open:!0,severity:"success"}),e.history.push("login")})).catch((function(e){t({text:e,open:!0,severity:"error"})}))}});return Object(U.jsx)("div",{className:"AuthForm",children:Object(U.jsxs)("form",{onSubmit:a.handleSubmit,children:[Object(U.jsx)(W.a,{fullWidth:!0,id:"email",name:"email",label:"Email",type:"email",value:a.values.email,onChange:a.handleChange,error:a.touched.email&&Boolean(a.errors.email),helperText:a.touched.email&&a.errors.email}),Object(U.jsx)(P.a,{color:"primary",variant:"contained",fullWidth:!0,type:"submit",children:"Send password reset email"}),Object(U.jsx)(P.a,{component:o.b,to:"/login",children:"Back to Login"})]})})}));var E,V=Object(l.h)((function(e){var t=i.a.useContext(Et).setSnackbar;g.currentUserValue&&e.history.push("/");var a=function(){var e=Object(h.a)(b.a.mark((function e(a,n){var i,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.validateRegistration(a.username,a.email);case 2:return i=e.sent,s={},["admin","null","god"].includes(a.username)&&(s.username="Please choose a different username"),i.username_exists&&(s.username="This username is already taken"),i.email_exists&&(s.email="This email is already registered"),Object.entries(s).map((function(e){return t({text:e.pop(),open:!0,severity:"warning"}),!0})),e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),n=Object(B.a)({initialValues:{username:"",email:"",password:""},onSubmit:function(a){g.signUp(a.username,a.email,a.password).then((function(n){e.history.push("/login"),t({text:"An email has been sent to ".concat(a.email,". Please open it to continue."),open:!0,severity:"success"})}))},validate:a});return Object(U.jsx)("div",{className:"AuthForm",children:Object(U.jsxs)("form",{onSubmit:n.handleSubmit,children:[Object(U.jsx)(W.a,{fullWidth:!0,id:"username",name:"username",label:"Username",value:n.values.username,onChange:n.handleChange,error:n.touched.username&&Boolean(n.errors.username)}),Object(U.jsx)(W.a,{fullWidth:!0,id:"email",name:"email",label:"Email",value:n.values.email,onChange:n.handleChange,error:n.touched.email&&Boolean(n.errors.email)}),Object(U.jsx)(W.a,{fullWidth:!0,id:"password",name:"password",label:"Password",type:"password",value:n.values.password,onChange:n.handleChange,error:n.touched.password&&Boolean(n.errors.password),helperText:n.touched.password&&n.errors.password}),Object(U.jsx)(P.a,{className:"SubmitButton",color:"primary",variant:"contained",fullWidth:!0,type:"submit",children:"Submit"}),Object(U.jsx)(P.a,{component:o.b,to:"/login",className:"ResetPasswordButton",children:"Back to log-in"})]})})})),z=a(36),q=a(33),J=a(34),R=a.n(J);var D=Object(l.h)((function(e){var t=i.a.useContext(Et).setSnackbar,a=Object(l.g)().token;g.confirmEmail(a).then((function(a){t({text:a?"Your email has been confirmed. You can now log-in.":"We could not confirm your email.",open:!0,severity:a?"success":"error"}),e.history.push("/login")}));var n=Object(q.css)(E||(E=Object(z.a)(["display: block; margin: 0 auto;"])));return Object(U.jsx)(R.a,{color:"#F19820",loading:!0,css:n,size:100})})),Y=a(28),G=(a(199),a(108),a(35)),Q=a(284),$=a(286),Z=a(287),K=a(320),X=a(288),ee=a(317),te=(a(200),a(137)),ae=a(285);var ne,ie=Object(l.h)((function(e){var t=i.a.useState(!1),a=Object(r.a)(t,2),n=a[0],s=a[1],c=i.a.useState(0),o=Object(r.a)(c,2),l=o[0],u=o[1],d=i.a.useState(""),j=Object(r.a)(d,2),b=j[0],h=j[1],p=["Myo is AI creativity in your pocket","Right now, we're analysing the experience of 35,892 users","To make sure your plan fits you perfectly","Your personalised creativity plan is almost ready. Are you?"];return i.a.useEffect((function(){var e=setInterval((function(){u((function(e){100===e&&s(!0);var t=6*Math.random(),a=Math.min(e+t,100);return a>95&&s(!0),h(function(e){var t=Math.floor(e*p.length/100);return p[t]}(a)),a}))}),500);return function(){clearInterval(e)}}),[]),n?Object(U.jsxs)("div",{children:[Object(U.jsx)("h2",{className:"animate__animated animate__backInDown",children:"Your custom training plan is ready"}),Object(U.jsx)(P.a,{style:{animation:"pulse 3s ease infinite",margin:"20px 0"},className:"StartButton animate__animated animate__fadeIn animate__delay-1s",variant:"contained",size:"large",color:"primary",onClick:function(){return e.onComplete()},children:"Let's go"})]}):Object(U.jsxs)("div",{style:{margin:"0 20px"},children:[Object(U.jsx)("h3",{className:"animate__animated animate__backInDown animate__delay-1s",children:b}),Object(U.jsx)(ae.a,{className:"animate__animated animate__fadeIn",variant:"determinate",value:l}),Object(U.jsx)(te.a,{className:"animate__animated animate__fadeIn goo",intensity:"strong",children:Object(U.jsxs)("svg",{width:"500",height:"500",children:[Object(U.jsx)("circle",{cx:"29%",cy:"50%",fill:"#FFB339",r:"49",style:{animation:"right 3s ease infinite"}}),Object(U.jsx)("circle",{cx:"44%",cy:"34%",fill:"#C6302C",r:"23",style:{animation:"left 7s linear infinite"}}),Object(U.jsx)("circle",{cx:"34%",cy:"74%",fill:"#F19821",r:"59",style:{animation:"left 4s linear infinite"}}),Object(U.jsx)("circle",{cx:"56%",cy:"59%",fill:"mediumorchid",r:"46",style:{animation:"right 5s ease infinite"}})]})})]})})),se=(a(201),a(96)),ce=a.n(se);function re(e){return Object(U.jsx)("div",{className:"OnboardingHero",style:{backgroundImage:'url("/activities/20/Thumbnail.jpeg"'},children:Object(U.jsxs)("div",{className:"UserHeroContent",style:{background:"linear-gradient(90deg, rgba(241,152,32,1) 40%, rgba(255,255,255,0) 90%)"},children:[Object(U.jsx)("h2",{children:"Spark is a totally custom creativity journey, designed for you."}),Object(U.jsxs)("p",{children:[Object(U.jsx)(ce.a,{className:"Icon"})," To get started, we need to know a little bit more about you."]}),Object(U.jsx)(P.a,{className:"OnboardingHeroButton",onClick:e.onClick,children:"Next"})]})})}var oe=Object(l.h)((function(e){var t=i.a.useContext(Et).setSnackbar,a=i.a.useState(!0),n=Object(r.a)(a,2),s=n[0],c=n[1],o=i.a.useState(!1),l=Object(r.a)(o,2),u=l[0],d=l[1],j=i.a.useState(0),b=Object(r.a)(j,2),h=b[0],p=b[1],m=f.onboardingSteps,v=f.onboardingQuestions,O=i.a.useState(0),x=Object(r.a)(O,2),y=x[0],g=x[1],w=i.a.useState([]),k=Object(r.a)(w,2),S=k[0],N=k[1],C=i.a.useState([]),I=Object(r.a)(C,2),T=I[0],A=I[1];i.a.useEffect((function(){if(S.length){var e={questionIndex:y,question:v[y].question,answer:S};A([].concat(Object(Y.a)(T),[e])),N([]),"multiple"!==v[y].type&&B()}}),[S]);var B=function(){var e=y+1,t=100*e/v.length,a=Math.ceil(t*m.length/100);y<v.length-1?(g(e),N([]),p(a)):(W(JSON.stringify(T)),d(!0))},W=function(e){_("/onboarding/save",{onboarding_json:e}).then((function(e){return t({text:e.success||e.error,open:e.error,severity:e.success?"success":"error"})}))},F=Object(q.css)(ne||(ne=Object(z.a)(["display: block; margin: 0 auto;"]))),L=Object(G.b)(f.onboardingStatusUrl).data;return L?(L.hasOwnProperty("success")&&e.onComplete(),s?Object(U.jsx)(re,{onClick:function(){return c(!1)}}):u?Object(U.jsx)(ie,{onComplete:e.onComplete}):Object(U.jsxs)("div",{className:"UserOnboarding",children:[Object(U.jsx)(K.a,{activeStep:h,alternativeLabel:!0,style:{backgroundColor:"transparent"},children:m.map((function(e){return Object(U.jsx)(X.a,{children:Object(U.jsx)(ee.a,{children:e})},e)}))}),Object(U.jsx)("h2",{children:v[y].question}),(v[y],Object(U.jsxs)(Q.a,{component:"nav","aria-label":"Onboarding answers",children:[v[y].answers.map((function(e,t){return Object(U.jsx)($.a,{selected:S.includes(t),onClick:function(){return e=t,void N([].concat(Object(Y.a)(S),[e]));var e},button:!0,children:Object(U.jsx)(Z.a,{align:"center",primary:e})},t)})),"multiple"===v[y].type?Object(U.jsx)(P.a,{variant:"contained",color:"primary",onClick:B,disabled:!S.length,children:"Next"}):null]}))]})):Object(U.jsx)(R.a,{color:"#F19820",loading:!0,css:F,size:100})})),le=(a(203),a(204),a(145)),ue=a(309),de=a(310),je=a(308),be=(a(205),a(289)),he=a(290),pe=a(138),me=a.n(pe);function ve(){var e=i.a.useState(0),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(U.jsxs)(be.a,{value:a,onChange:function(e,t){n(t)},showLabels:!0,className:"navbar",children:[Object(U.jsx)(he.a,{component:o.b,to:"/",id:"HomeNavbarIcon",label:"Home",icon:Object(U.jsx)(me.a,{})}),Object(U.jsx)(he.a,{component:o.b,to:"/spark",id:"SparkNavbarIcon",label:"Spark",icon:Object(U.jsx)(ce.a,{})})]})}var Oe=a(21),xe=a(30),fe=a(31),ye=a(32),ge=a(291),we=(a(206),a(99)),ke=a.n(we),Se=function(e){Object(fe.a)(a,e);var t=Object(ye.a)(a);function a(){return Object(Oe.a)(this,a),t.apply(this,arguments)}return Object(xe.a)(a,[{key:"render",value:function(){return Object(U.jsxs)("div",{className:"TopBar",children:[Object(U.jsx)(ge.a,{component:o.b,to:"/",className:"AccountLink",children:Object(U.jsx)("img",{className:"MyoLogo",src:"/assets/logo.png",alt:"Myo app logo"})}),Object(U.jsx)("img",{className:"MyoText",src:"/assets/myo-text.png",alt:"Myo app logo"}),Object(U.jsx)(ge.a,{component:o.b,to:"/user",className:"AccountLink",children:Object(U.jsx)(ke.a,{fontSize:"large",className:"AccountCircle"})})]})}}]),a}(i.a.Component);a(207);function Ne(){return Object(U.jsx)("div",{className:"SplashScreen",children:Object(U.jsx)("div",{className:"SplashScreenWrapper",children:Object(U.jsxs)(n.Suspense,{children:[Object(U.jsx)("img",{src:"/assets/myo-text-icon.png",alt:"Myo icon"}),Object(U.jsx)("p",{className:"animate__animated animate__bounceIn",children:"Spark wonder"})]})})})}a(208),a(209);var Ce,Ie,_e=a(139),Te=a.n(_e);function Ue(e){var t=Object(G.b)("/auth/profile").data,a=Object(q.css)(Ce||(Ce=Object(z.a)(["display: block; margin: 0 auto;"])));if(!e.activities)return null;if(!t)return Object(U.jsx)(R.a,{color:"#F19820",loading:!0,css:a,size:100});var n=e.activities.pop(),i="/activities/".concat(n.activityId,"/").concat(n.thumbnail);return Object(U.jsx)("div",{className:"UserHero",style:{backgroundImage:'url("'.concat(i,'"')},children:Object(U.jsxs)("div",{className:"UserHeroContent",style:{background:"linear-gradient(90deg, rgba(241,152,32,1) 40%, rgba(255,255,255,0) 90%)"},children:[Object(U.jsx)(L,{className:"UserHeroLink"}),Object(U.jsx)("h1",{children:t.username}),Object(U.jsxs)("p",{children:[Object(U.jsx)(ke.a,{className:"Icon"})," Member since:"]}),Object(U.jsx)("p",{className:"caption",children:t.registered}),Object(U.jsxs)("p",{children:[Object(U.jsx)(Te.a,{className:"Icon"})," Total activities:"]}),Object(U.jsx)("p",{className:"caption",children:"52"}),Object(U.jsx)("span",{className:"stamp is-nope",children:"Super member"})]})})}function Ae(){var e=Object(q.css)(Ie||(Ie=Object(z.a)(["display: block; margin: 0 auto;"]))),t=Object(G.b)(f.activitiesListUrl).data;if(!t)return Object(U.jsx)(R.a,{color:"#F19820",loading:!0,css:e,size:100});var a=Object(Y.a)(t.activities);return a.map((function(e,t){return a[t].activityId=t+1})),Object(U.jsx)("div",{className:"UserMenu",children:Object(U.jsx)(Ue,{activities:a})})}a(210),a(211);var Be=a(140),We=a.n(Be);var Pe=function(e){return Object(U.jsx)("div",{className:"cardComponent",children:e.activities.map((function(t,a){return Object(U.jsxs)("div",{className:"card",style:{margin:e.margin},children:[Object(U.jsx)("div",{className:"card-image",children:Object(U.jsx)("img",{src:"/activities/".concat(t.activityId,"/").concat(t.thumbnail),alt:"Header decoration"})}),Object(U.jsxs)("div",{className:"content",children:[Object(U.jsx)("h4",{children:t.title}),Object(U.jsx)("p",{children:t.description})]}),Object(U.jsx)(ge.a,{component:o.b,to:{pathname:(n=t.activityId,e.skipIntro?"/activity/".concat(n,"/go"):"/activity/".concat(n))},className:"read-more",style:{textDecoration:"none"},children:Object(U.jsxs)("span",{children:["Start activity ",Object(U.jsx)(We.a,{className:"chevron-right"})]})})]},a);var n}))})},Fe=a(141),Le=(a(212),function(e){Object(fe.a)(a,e);var t=Object(ye.a)(a);function a(e){var n;return Object(Oe.a)(this,a),(n=t.call(this,e)).handleClose=function(){localStorage.setItem("onboardingComplete",!0),n.setState({isVisible:!1})},n.state={isVisible:null===localStorage.getItem("onboardingComplete")},n.story=[{component:"modal",intro:!0,children:Object(U.jsx)("p",{children:"Hey there! Welcome to Myo. As this is your first time, could we show you around?"}),className:"introModal"},{component:"speech-bubble",attachToId:"HomeNavbarIcon",children:Object(U.jsx)("p",{children:"This is the Home tab, where you can view all our activities, or you can click Spark, to start your custom creative journey."})},{component:"modal",intro:!1,children:Object(U.jsx)("p",{children:"The main feature of Myo is a custom curated journey of creativity exercises, that adapts and matches what you need."})},{component:"modal",intro:!1,children:Object(U.jsx)("p",{children:"We regularly add more exercises. Good luck with your creativity journey!"})}],n}return Object(xe.a)(a,[{key:"render",value:function(){return Object(U.jsx)(Fe.a,{story:this.story,isVisible:this.state.isVisible,onClose:this.handleClose})}}]),a}(i.a.Component));a(213);function He(e){var t=e.activities.pop(),a="/activities/".concat(t.activityId,"/").concat(t.thumbnail),n="/activity/".concat(t.activityId);return Object(U.jsx)("div",{className:"Hero",style:{backgroundImage:'url("'.concat(a,'"')},children:Object(U.jsxs)("div",{className:"HeroContent",style:{background:"linear-gradient(90deg, rgba(241,152,32,1) 35%, rgba(255,255,255,0) 64%)"},children:[Object(U.jsx)("h1",{children:t.title}),Object(U.jsx)("p",{children:t.description}),Object(U.jsx)(ge.a,{component:o.b,to:{pathname:n,state:{activityId:t.activityId}},className:"HeroLink",style:{textDecoration:"none"},children:Object(U.jsx)("button",{className:"HeroButton",children:"Start now"})})]})})}a(214);var Me,Ee=a(293),Ve=a(294),ze=a(321),qe=a(295),Je=a(292),Re=a(296),De=a(142),Ye=a.n(De);a(215);function Ge(e){return Object(U.jsx)(Je.a,{item:!0,children:Object(U.jsx)(Q.a,{dense:!1,children:e.activities.map((function(e,t){return Object(U.jsxs)(ge.a,{component:o.b,to:{pathname:"/activity/".concat(e.activityId)},style:{textDecoration:"none",color:"#333"},children:[Object(U.jsxs)($.a,{className:"ListItem",children:[Object(U.jsx)(Ee.a,{children:Object(U.jsx)(ze.a,{children:Object(U.jsx)("img",{src:(a=e.thumbnail,n=e.activityId,"/activities/".concat(n,"/").concat(a)),alt:"Activity illustration"})})}),Object(U.jsx)(Z.a,{primary:e.title,secondary:e.description}),Object(U.jsx)(Ve.a,{children:Object(U.jsx)(qe.a,{edge:"end",children:Object(U.jsx)(Ye.a,{})})})]}),Object(U.jsx)(Re.a,{variant:"inset",component:"li"})]},t);var a,n}))})})}function Qe(e){var t=Math.ceil(e.activities.length/2),a=e.activities.splice(0,t),n=e.activities.splice(-t);return Object(U.jsxs)("div",{className:"HeroList",children:[Object(U.jsx)("h1",{children:e.title}),Object(U.jsxs)("div",{className:"HeroListContent",children:[Object(U.jsx)(Ge,{className:"ActivityAvatarList",activities:a}),Object(U.jsx)(Ge,{className:"ActivityAvatarList",activities:n})]})]})}function $e(){var e,t=Object(q.css)(Me||(Me=Object(z.a)(["display: block; margin: 0 auto;"]))),a=Object(G.b)(f.activitiesListUrl).data;if(!a)return Object(U.jsx)(R.a,{color:"#F19820",loading:!0,css:t,size:100});var n=function(){(e=Object(Y.a)(a.activities)).map((function(t,a){return e[a].activityId=a+1}))};n();var i=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e.length<1&&n(),t||(t=e.length),Object(Y.a)(Array(t)).map((function(){return e.splice(Math.floor(Math.random()*e.length),1)[0]}))};return Object(U.jsxs)("div",{className:"ViewActivitiesComponent",children:[Object(U.jsx)(Le,{}),Object(U.jsx)(He,{activities:i(1)}),Object(U.jsx)(Qe,{activities:i(4),title:"Activities we love right now"}),Object(U.jsx)(Pe,{activities:i(3)}),Object(U.jsx)(He,{activities:i(1)}),Object(U.jsx)(Qe,{activities:i(4),title:"Trending this week"}),Object(U.jsx)(Pe,{activities:i(6)}),Object(U.jsx)(He,{activities:i(1)}),Object(U.jsx)(Pe,{activities:i(3)})]})}a(216),a(217);function Ze(e){return Object(U.jsxs)("div",{className:"ActivityIntroduction",children:["mp4"===e.activity.thumbnail.split(".").pop()?Object(U.jsx)("video",{className:"ActivityVideo",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,controls:!0,children:Object(U.jsx)("source",{src:"/activities/".concat(e.activityId,"/").concat(e.activity.thumbnail),type:"video/mp4"})}):Object(U.jsx)("img",{src:"/activities/"+e.activityId+"/"+e.activity.thumbnail,alt:"Header decoration"}),Object(U.jsx)("h1",{children:e.activity.title}),Object(U.jsx)("p",{dangerouslySetInnerHTML:{__html:e.activity.description}}),Object(U.jsx)(P.a,{variant:"contained",color:"primary",onClick:e.handleStartActivity,children:"I'm ready"})]})}a(218);var Ke=a(314),Xe=a(305),et=a(311),tt=a(302),at=a(303),nt=a(304),it=(a(219),a(220),a(221),a(222),a(298)),st=a(319),ct=a(301),rt=a(299),ot=a(300),lt=a(146),ut=(a(223),a(297)),dt=a(6),jt=a(322),bt=Object(ut.a)((function(e){return{root:{width:150+2*e.spacing(3)},margin:{height:e.spacing(3)}}})),ht="0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)",pt=[{value:0,label:"\ud83d\ude1f"},{value:50,label:"\ud83d\ude0c"},{value:100,label:"\ud83e\uddd1\u200d\ud83c\udfa8"}],mt=Object(dt.a)({root:{color:"#F19820",height:2,padding:"15px 0"},thumb:{height:28,width:28,backgroundColor:"#fff",boxShadow:ht,marginTop:-14,marginLeft:-14,"&:focus, &:hover, &$active":{boxShadow:"0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)","@media (hover: none)":{boxShadow:ht}}},active:{},valueLabel:{left:"calc(-50% + 12px)",top:-22,"& *":{background:"transparent",color:"#000"}},track:{height:2},rail:{height:2,opacity:.5,backgroundColor:"#bfbfbf"},mark:{backgroundColor:"#bfbfbf",height:8,width:1,marginTop:-3},markActive:{opacity:1,backgroundColor:"#F19820"}})(jt.a);function vt(){var e=bt();return Object(U.jsx)("div",{className:e.root,children:Object(U.jsx)(mt,{"aria-label":"ios slider",defaultValue:75,marks:pt,valueLabelDisplay:"off"})})}var Ot;a(224);function xt(e){var t=i.a.useState(""),a=Object(r.a)(t,2),n=a[0],s=a[1];return Object(U.jsxs)(st.a,{onClose:e.onClose,open:e.open,disableEnforceFocus:!0,children:[Object(U.jsx)(it.a,{align:"center",id:"dialog-title",children:"Congratulations! \ud83c\udf89"}),Object(U.jsxs)(rt.a,{align:"center",className:"ReviewDialogContent",children:[Object(U.jsxs)(ot.a,{children:["How did you feel?",Object(U.jsx)(vt,{})]}),Object(U.jsxs)(ot.a,{children:["How would you rate this activity?",Object(U.jsx)("br",{}),Object(U.jsx)(lt.a,{})]}),Object(U.jsx)(ot.a,{children:Object(U.jsx)(W.a,{fullWidth:!0,align:"center",id:"feedbackText",multiline:!0,name:"feedbackText",label:"Any notes to yourself?",value:n,onChange:function(e){return s(e.target.value)}})})]}),Object(U.jsxs)(ct.a,{children:[Object(U.jsx)(ge.a,{component:o.b,to:{pathname:"/"},style:{textDecoration:"none"},children:Object(U.jsx)(P.a,{onClick:e.onClose,children:"Skip"})}),Object(U.jsx)(ge.a,{component:o.b,to:{pathname:"/"},style:{textDecoration:"none"},children:Object(U.jsx)(P.a,{variant:"contained",onClick:function(){e.onSubmit()},color:"primary",type:"submit",children:"Done"})})]})]})}function ft(e){var t=i.a.useState(!1),a=Object(r.a)(t,2),s=a[0],c=a[1],o=Object(n.useState)(!1),l=Object(r.a)(o,2),u=l[0],d=l[1];return Object(U.jsxs)("div",{className:"ActivityCarousel",children:[Object(U.jsx)(Ke.a,{spaceBetween:50,slidesPerView:1,navigation:!0,pagination:{clickable:!0,type:"progressbar"},onReachEnd:function(){return d(!0)},children:e.activity.pages.map((function(t,a){return Object(U.jsxs)(Xe.a,{children:["mp4"===t.thumbnail.split(".").pop()?Object(U.jsx)("video",{className:"ActivityVideo",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,controls:!0,children:Object(U.jsx)("source",{src:"/activities/".concat(e.activityId,"/").concat(t.thumbnail),type:"video/mp4"})}):Object(U.jsx)("img",{src:encodeURI("/activities/"+e.activityId+"/"+t.thumbnail),alt:"Header decoration"}),Object(U.jsxs)("div",{className:"text",children:[Object(U.jsx)("h1",{children:t.title}),Object(U.jsx)("p",{dangerouslySetInnerHTML:{__html:t.description}})]})]},a)}))}),u?Object(U.jsx)(P.a,{variant:"contained",onClick:function(){return c(!0)},color:"primary",children:"Finish"}):null,s?Object(U.jsx)(xt,{open:s,onSubmit:function(e){c(!1),_("/api/orders/delete",{feedback:e})},onClose:function(){return c(!1)}}):null]})}function yt(e){var t=Object(l.g)().activityId,a=Object(n.useState)(!0),i=Object(r.a)(a,2),s=i[0],c=i[1],o=Object(G.b)("".concat(f.activityGetUrl).concat(t-1)).data,u=Object(q.css)(Ot||(Ot=Object(z.a)(["display: block; margin: 0 auto;"])));return o?Object(U.jsx)("div",{className:"Activity",children:s&&!e.skipIntro?Object(U.jsx)(Ze,{activityId:t,activity:o.activity,handleStartActivity:function(){return c(!1)}}):Object(U.jsx)(ft,{activityId:t,activity:o.activity})}):Object(U.jsx)(R.a,{color:"#F19820",loading:!0,css:u,size:100})}et.a.use([tt.a,at.a,nt.a]);a(225);var gt=a(38),wt=a(56),kt=a.n(wt),St=a(306),Nt=i.a.forwardRef((function(e,t){return Object(U.jsx)(St.a,Object(u.a)({direction:"up",ref:t},e))}));function Ct(e){var t=e.onClose,a=e.activity,n=e.open;return Object(U.jsx)(st.a,{onClose:t,open:n,TransitionComponent:Nt,children:Object(U.jsx)(Pe,{activities:[a],skipIntro:!0,margin:0})})}var It=function(e,t){return"".concat(t?"url(":"","https://awv3node-homepage.surge.sh/build/assets/").concat(e,".svg").concat(t?")":"")},_t=window.innerWidth>600?150:window.innerWidth/6,Tt=["30vh","40vh","50vh","60vh","65vh","60vh","50vh","45vh","40vh","35vh","40vh","50vh","60vh","65vh","60vh","50vh","40vh","35vh","40vh","45vh"],Ut=function(e){var t=e.activities,a=e.offset,n=e.gradient,i=e.handleClick;return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(gt.b,{offset:a,speed:.2,children:Object(U.jsx)("div",{className:kt.a.slopeBegin})}),Object(U.jsx)(gt.b,{offset:0,speed:0,factor:3,style:{backgroundImage:It("stars",!0),backgroundSize:"cover"}}),Object(U.jsx)(gt.b,{offset:a,speed:.6,children:Object(U.jsx)("div",{className:"".concat(kt.a.slopeEnd," ").concat(kt.a[n])})}),Object(U.jsx)(gt.b,{className:"".concat(kt.a.text," ").concat(kt.a.number),offset:0,speed:.3,children:Object(U.jsx)("span",{children:"Spark"})}),Object(U.jsx)(gt.b,{className:"".concat(kt.a.text," ").concat(kt.a.description),offset:0,speed:.3,children:Object(U.jsx)("p",{children:"Your personalised creative journey"})}),Object(U.jsx)(gt.b,{offset:.1,speed:.8,style:{opacity:.1},children:Object(U.jsx)("img",{src:It("cloud"),style:{display:"block",width:"20%",marginBottom:"30%"}})}),Object(U.jsxs)(gt.b,{offset:.5,speed:.2,style:{opacity:.2},children:[Object(U.jsx)("img",{src:It("cloud"),style:{display:"block",width:"10%",marginBottom:"34%"}}),Object(U.jsx)("img",{src:It("cloud"),style:{display:"block",width:"20%",marginBottom:"50%"}})]}),Object(U.jsxs)(gt.b,{offset:.7,speed:-.1,style:{opacity:.4},children:[Object(U.jsx)("img",{src:It("cloud"),style:{display:"block",width:"20%",marginBottom:"26%"}}),Object(U.jsx)("img",{src:It("cloud"),style:{display:"block",width:"10%",marginBottom:"16%"}})]}),Object(U.jsxs)(gt.b,{offset:1.2,speed:.5,style:{opacity:.1},children:[Object(U.jsx)("img",{src:It("cloud"),style:{display:"block",width:"20%",marginBottom:"26%"}}),Object(U.jsx)("img",{src:It("cloud"),style:{display:"block",width:"20%",marginBottom:"40%"}})]}),Object(U.jsxs)(gt.b,{offset:1.5,speed:.4,style:{opacity:.6},children:[Object(U.jsx)("img",{src:It("cloud"),style:{display:"block",width:"20%",marginBottom:"30%"}}),Object(U.jsx)("img",{src:It("cloud"),style:{display:"block",width:"15%",marginBottom:"35%"}})]}),Object(U.jsx)(gt.b,{offset:2,speed:.4,style:{opacity:1},children:Object(U.jsx)("h1",{children:"\u201cEvery child is an artist. The problem is how to remain an artist once he grows up.\u201d "})}),Object(U.jsx)(gt.b,{offset:2,speed:.4,style:{opacity:.6},children:Object(U.jsx)("p",{children:"- Pablo Picasso"})}),t.map((function(e,t){return 0===a?Object(U.jsx)(gt.b,{className:"".concat(kt.a.activityIcon),style:{marginTop:Tt[t],marginLeft:_t+=window.innerWidth>600?250:window.innerWidth/4,backgroundImage:'url("/activities/'.concat(t+1,"/").concat(e.thumbnail,'"')},offset:0,speed:1,onClick:function(){return i(t)},children:Object(U.jsx)("span",{})},t):null}))]})};var At,Bt=Object(l.h)((function(e){var t=e.activities,a=i.a.useState(!1),s=Object(r.a)(a,2),c=s[0],o=s[1],l=i.a.useState([]),u=Object(r.a)(l,2),d=u[0],j=u[1],b=function(e){var a=t[e];a.activityId=e+1,j(a),o(!0)};_t=window.innerWidth>600?150:window.innerWidth/6;var h=Object(n.useRef)(null);return Object(U.jsxs)("div",{style:{background:"#dfdfdf"},children:[Object(U.jsx)(Ct,{activity:d,open:c,onClose:function(){return o(!1)}}),Object(U.jsxs)(gt.a,{className:kt.a.container,ref:h,pages:3,horizontal:!0,children:[Object(U.jsx)(Ut,{handleClick:b,activities:t,offset:0,gradient:"pink"}),Object(U.jsx)(Ut,{handleClick:b,activities:t,offset:1,gradient:"teal"}),Object(U.jsx)(Ut,{handleClick:b,activities:t,offset:2,gradient:"tomato"})]})]})}));var Wt,Pt=Object(l.h)((function(){var e=Object(q.css)(At||(At=Object(z.a)(["display: block; margin: 0 auto;"]))),t=Object(G.b)(f.onboardingStatusUrl),a=t.data,n=t.mutate,i=Object(G.b)(f.activitiesListUrl).data;return a&&i?a.hasOwnProperty("error")?Object(U.jsx)(oe,{onComplete:n}):Object(U.jsx)("div",{className:"Spark",children:Object(U.jsx)(Bt,{activities:i.activities})}):Object(U.jsx)(R.a,{color:"#F19820",loading:!0,css:e,size:100})})),Ft=(a(226),a(307));function Lt(){var e,t=Object(q.css)(Wt||(Wt=Object(z.a)(["display: block; margin: 0 auto;"]))),a=Object(G.b)(f.activitiesListUrl).data;if(!a)return Object(U.jsx)(R.a,{color:"#F19820",loading:!0,css:t,size:100});return(e=Object(Y.a)(a.activities)).map((function(t,a){return e[a].activityId=a+1})),Object(U.jsxs)("div",{className:"Create",children:[Object(U.jsx)("h1",{children:"Create"}),Object(U.jsxs)(Ft.a,{variant:"contained",size:"large",color:"primary",children:[Object(U.jsx)(P.a,{children:"Draw"}),Object(U.jsx)(P.a,{children:"Write"})]})]})}var Ht=a(318),Mt=a(315),Et=i.a.createContext();function Vt(){var e=i.a.useState(!0),t=Object(r.a)(e,2),a=t[0],s=t[1];Object(n.useEffect)((function(){setTimeout((function(){s(!1)}),1500)}),[]);var c=Object(le.a)({palette:{type:Object(je.a)("(prefers-color-scheme: dark)")?"dark":"light",primary:{main:"#F19820"},secondary:{main:"#CAE8FF"}},typography:{fontFamily:["F37 Ginger","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")},overrides:{MuiTouchRipple:{child:{backgroundColor:"#F19820"}}}}),u=i.a.useState({text:"",severity:"",open:!1}),d=Object(r.a)(u,2),j=d[0],b=d[1],h=function(){b({open:!1})};return Object(U.jsxs)(ue.a,{theme:c,children:[Object(U.jsx)(de.a,{}),Object(U.jsxs)("div",{className:"App",children:[Object(U.jsx)("link",{rel:"shortcut icon",href:"./favicon.ico"}),Object(U.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"}),Object(U.jsx)("header",{className:"App-header",children:Object(U.jsxs)(Et.Provider,{value:{snackbar:j,setSnackbar:b},children:[Object(U.jsx)(Ht.a,{open:j.open,autoHideDuration:6e3,onClose:h,children:Object(U.jsx)(Mt.a,{onClose:h,severity:j.severity,children:j.text})}),a?Object(U.jsx)(Ne,{}):Object(U.jsxs)(o.a,{children:[Object(U.jsx)(Se,{}),Object(U.jsx)("div",{className:"AppWrapper",children:Object(U.jsxs)(l.d,{children:[Object(U.jsxs)(l.b,{exact:!0,path:"/",children:[" ",Object(U.jsx)($e,{})," "]}),Object(U.jsxs)(l.b,{exact:!0,path:"/activity/:activityId",children:[" ",Object(U.jsx)(yt,{})," "]}),Object(U.jsxs)(l.b,{exact:!0,path:"/activity/:activityId/go",children:[" ",Object(U.jsx)(yt,{skipIntro:!0})," "]}),Object(U.jsx)(A,{exact:!0,path:"/spark",component:Pt}),Object(U.jsx)(A,{exact:!0,path:"/create",component:Lt}),Object(U.jsx)(A,{exact:!0,path:"/user",component:Ae}),Object(U.jsx)(A,{exact:!0,path:"/onboarding",component:oe}),Object(U.jsx)(l.b,{exact:!0,path:"/login",component:F}),Object(U.jsx)(l.b,{exact:!0,path:"/logout",component:L}),Object(U.jsx)(l.b,{exact:!0,path:"/reset",component:M}),Object(U.jsx)(l.b,{exact:!0,path:"/register",component:V}),Object(U.jsx)(l.b,{exact:!0,path:"/confirm/:token",component:D}),Object(U.jsx)(l.b,{exact:!0,path:"/reset/:token",component:H})]})}),Object(U.jsx)(ve,{})]})]})})]})]})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));I.a.interceptors.response.use((function(e){return e}),(function(e){return new Promise((function(t){var a=e.config,n=O();e.response&&401===e.response.status&&e.config&&!e.config.__isRetryRequest&&n&&(a._retry=!0,t(fetch(f.authRefresh,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify({refresh:O})}).then((function(e){return e.json()})).then((function(e){var t=JSON.parse(localStorage.getItem("currentUser"));t.access_token=e.access_token,g.updateUser(t),window.location.reload()}))));return Promise.reject(e)}))})),c.a.render(Object(U.jsx)(G.a,{value:{fetcher:function(e){return I.a.get(e,{headers:{Authorization:"Bearer "+v()}}).then((function(e){return e.data}))}},children:Object(U.jsx)(Vt,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},56:function(e,t,a){e.exports={container:"styles_container__GYYmZ",text:"styles_text__2nqlF",number:"styles_number__Uxrv2",description:"styles_description__1M0dc",activityIcon:"styles_activityIcon__2PYIz",slopeBegin:"styles_slopeBegin__C_PD3",slopeEnd:"styles_slopeEnd__3hgvL",pink:"styles_pink__23YfJ",teal:"styles_teal__1Wtgr",tomato:"styles_tomato__1VsmE"}}},[[227,1,2]]]);
//# sourceMappingURL=main.bc1a2417.chunk.js.map