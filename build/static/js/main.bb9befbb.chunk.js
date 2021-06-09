(this["webpackJsonpmyo-react"]=this["webpackJsonpmyo-react"]||[]).push([[0],{148:function(e,t,a){},183:function(e,t,a){},184:function(e,t,a){},185:function(e,t,a){},187:function(e,t,a){},188:function(e,t,a){},189:function(e,t,a){},190:function(e,t,a){},191:function(e,t,a){},192:function(e,t,a){},193:function(e,t,a){},194:function(e,t,a){},195:function(e,t,a){},197:function(e,t,a){},198:function(e,t,a){},199:function(e,t,a){},200:function(e,t,a){},201:function(e,t,a){},202:function(e,t,a){},208:function(e,t,a){},210:function(e,t,a){},211:function(e,t,a){},212:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(15),s=a.n(r),c=(a(148),a(19)),o=a(13),l=a(22),u=a(58),d=a(132),j=a(29),b=a.n(j),h=a(44),m=a(295);function p(){var e=g.currentUserValue;return e&&e.access_token?{Authorization:"Bearer ".concat(e.access_token)}:{}}function v(){var e=g.currentUserValue;return e&&e.access_token?e.access_token:{}}function O(){var e=g.currentUserValue;return!(!e||!e.refresh_token)&&e.refresh_token}function x(e){return e.text().then((function(t){var a=t&&JSON.parse(t);if(!e.ok){-1!==[401,403].indexOf(e.status)&&g.logout();var n=a&&a.message||e.statusText;return Promise.reject(n)}return a}))}var f={authLogin:"/auth/login",authRefresh:"/auth/refresh",afterLogout:"/",resetWithToken:"/auth/reset/token",authSignUp:"/auth/register",authValidate:"/auth/validate",confirmEmail:"/auth/confirm",activitiesListUrl:"/activities/api/list",onboardingStatusUrl:"/onboarding/status",onboardingSteps:["About yourself","You and art","Final details"],onboardingQuestions:[{question:"What kind of creative activity are you most interested in?",answers:["Drawing","Writing","Painting","Crafts","Photography"]},{question:"What would you like to use Myo for?",answers:["To relax","To learn new skills","To use my imagination","To better express myself","To discover new arts"]},{question:"What would you like Myo to offer?",answers:["Breadth of activities","In depth skill building","Global perspectives","Interaction with artists & users"]},{question:"What skills are you most interested in developing?",answers:["Imagination","Persistence","Discipline","Inquisitiveness","Collaboration"]},{question:"Generally, how often do you engage in creative activities?",answers:["Everyday","Two or three times a week","Once every now and again","Never!"]},{question:"How often would you like to engage in creative activities?",answers:["Everyday","Two or three times a week","Once every now and again","Never!"]},{question:"For how long?",answers:["No more than 5mins at a time","5mins to 10mins","10mins to 20mins","20mins to 40mins","Sky\u2019s the limit!"]},{question:"How \u2018experienced\u2019 do you think you are?",answers:["Complete beginner","Want to take it easy","I like a challenge!","Experience grrrr!!"]},{question:"What materials do you have access to?",answers:["Pens and paper only","Own some pencils","Watercolour paints","Acrylic paints","General arts & crafts stuff","Camera (phone will do)"]}]},y=new m.a(JSON.parse(localStorage.getItem("currentUser"))),g={login:function(e,t){return w.apply(this,arguments)},logout:function(){localStorage.removeItem("currentUser"),y.next(null)},signUp:function(e,t,a){return k.apply(this,arguments)},updateUser:function(e){localStorage.setItem("currentUser",JSON.stringify(e)),y.next(e)},validateRegistration:function(e,t){return S.apply(this,arguments)},confirmEmail:function(e){return N.apply(this,arguments)},currentUser:y.asObservable(),get currentUserValue(){return y.value}};function w(){return(w=Object(h.a)(b.a.mark((function e(t,a){var n,i,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:a})},e.next=3,fetch(f.authLogin,n);case 3:return i=e.sent,e.next=6,x(i);case 6:return r=e.sent,localStorage.setItem("currentUser",JSON.stringify(r)),y.next(r),e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=Object(h.a)(b.a.mark((function e(t,a,n){var i,r,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:n,email:a})},e.next=3,fetch(f.authSignUp,i);case 3:return r=e.sent,e.next=6,x(r);case 6:return s=e.sent,e.abrupt("return",s);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return(S=Object(h.a)(b.a.mark((function e(t,a){var n,i,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,email:a})},e.next=3,fetch(f.authValidate,n);case 3:return i=e.sent,e.next=6,x(i);case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(h.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:t})},e.next=3,fetch(f.confirmEmail,a);case 3:return n=e.sent,e.next=6,x(n);case 6:if(!e.sent.hasOwnProperty("success")){e.next=11;break}return e.abrupt("return",!0);case 11:return e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var C=a(63),I=a.n(C);function T(e,t){return _.apply(this,arguments)}function _(){return(_=Object(h.a)(b.a.mark((function e(t,a){var n,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.post(t,a,{headers:p()});case 3:return n=e.sent,i=n.data,e.abrupt("return",i);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var A=a(2),U=function(e){var t=e.component,a=Object(d.a)(e,["component"]);return Object(A.jsx)(l.b,Object(u.a)(Object(u.a)({},a),{},{render:function(e){return g.currentUserValue?Object(A.jsx)(t,Object(u.a)({},e)):Object(A.jsx)(l.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},W=(a(91),a(48)),P=a(294),H=a(268);var L=Object(l.h)((function(e){var t=i.a.useContext(_t).setSnackbar;g.currentUserValue&&e.history.push("/");var a=Object(W.a)({initialValues:{username:"",password:""},onSubmit:function(a){g.login(a.username,a.password).then((function(n){var i=(e.location.state||{from:{pathname:"/"}}).from;e.history.push(i),t({text:"Welcome, ".concat(a.username),open:!0,severity:"success"})}))}});return Object(A.jsx)("div",{className:"AuthForm",children:Object(A.jsxs)("form",{onSubmit:a.handleSubmit,children:[Object(A.jsx)(P.a,{fullWidth:!0,id:"username",name:"username",label:"Username",value:a.values.username,onChange:a.handleChange,error:a.touched.username&&Boolean(a.errors.username)}),Object(A.jsx)(P.a,{fullWidth:!0,id:"password",name:"password",label:"Password",type:"password",value:a.values.password,onChange:a.handleChange,error:a.touched.password&&Boolean(a.errors.password),helperText:a.touched.password&&a.errors.password}),Object(A.jsx)(H.a,{className:"SubmitButton",color:"primary",variant:"contained",fullWidth:!0,type:"submit",children:"Submit"}),Object(A.jsx)(H.a,{component:o.b,to:"/reset",className:"ResetPasswordButton",children:"Forgot password"}),Object(A.jsx)(H.a,{component:o.b,to:"/register",children:"New account"})]})})}));var B=Object(l.h)((function(e){var t=i.a.useContext(_t).setSnackbar,a=Object(l.g)().token,n=Object(W.a)({initialValues:{password:""},onSubmit:function(n){n.token=a,fetch(f.resetWithToken,{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(a){if(a.hasOwnProperty("error"))throw a.error;t({text:a.success,open:!0,severity:"success"}),e.history.push("/login")})).catch((function(e){t({text:e,open:!0,severity:"error"})}))}});return Object(A.jsx)("div",{className:"AuthForm",children:Object(A.jsxs)("form",{onSubmit:n.handleSubmit,children:[Object(A.jsx)(P.a,{fullWidth:!0,id:"password",name:"password",label:"New password",type:"password",value:n.values.password,onChange:n.handleChange,error:n.touched.password&&Boolean(n.errors.password),helperText:n.touched.password&&n.errors.password}),Object(A.jsx)(H.a,{variant:"contained",fullWidth:!0,type:"submit",children:"Set new password"})]})})}));var F=Object(l.h)((function(e){var t=i.a.useContext(_t).setSnackbar,a=Object(W.a)({initialValues:{email:""},onSubmit:function(a){fetch("/auth/reset",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(a){if(a.hasOwnProperty("error"))throw a.error;t({text:a.success,open:!0,severity:"success"}),e.history.push("login")})).catch((function(e){t({text:e,open:!0,severity:"error"})}))}});return Object(A.jsx)("div",{className:"AuthForm",children:Object(A.jsxs)("form",{onSubmit:a.handleSubmit,children:[Object(A.jsx)(P.a,{fullWidth:!0,id:"email",name:"email",label:"Email",type:"email",value:a.values.email,onChange:a.handleChange,error:a.touched.email&&Boolean(a.errors.email),helperText:a.touched.email&&a.errors.email}),Object(A.jsx)(H.a,{color:"primary",variant:"contained",fullWidth:!0,type:"submit",children:"Send password reset email"}),Object(A.jsx)(H.a,{component:o.b,to:"/login",children:"Back to Login"})]})})}));var M,V=Object(l.h)((function(e){var t=i.a.useContext(_t).setSnackbar;g.currentUserValue&&e.history.push("/");var a=function(){var e=Object(h.a)(b.a.mark((function e(a,n){var i,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.validateRegistration(a.username,a.email);case 2:return i=e.sent,r={},["admin","null","god"].includes(a.username)&&(r.username="Please choose a different username"),i.username_exists&&(r.username="This username is already taken"),i.email_exists&&(r.email="This email is already registered"),Object.entries(r).map((function(e){return t({text:e.pop(),open:!0,severity:"warning"}),!0})),e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),n=Object(W.a)({initialValues:{username:"",email:"",password:""},onSubmit:function(a){g.signUp(a.username,a.email,a.password).then((function(n){e.history.push("/login"),t({text:"An email has been sent to ".concat(a.email,". Please open it to continue."),open:!0,severity:"success"})}))},validate:a});return Object(A.jsx)("div",{className:"AuthForm",children:Object(A.jsxs)("form",{onSubmit:n.handleSubmit,children:[Object(A.jsx)(P.a,{fullWidth:!0,id:"username",name:"username",label:"Username",value:n.values.username,onChange:n.handleChange,error:n.touched.username&&Boolean(n.errors.username)}),Object(A.jsx)(P.a,{fullWidth:!0,id:"email",name:"email",label:"Email",value:n.values.email,onChange:n.handleChange,error:n.touched.email&&Boolean(n.errors.email)}),Object(A.jsx)(P.a,{fullWidth:!0,id:"password",name:"password",label:"Password",type:"password",value:n.values.password,onChange:n.handleChange,error:n.touched.password&&Boolean(n.errors.password),helperText:n.touched.password&&n.errors.password}),Object(A.jsx)(H.a,{className:"SubmitButton",color:"primary",variant:"contained",fullWidth:!0,type:"submit",children:"Submit"}),Object(A.jsx)(H.a,{component:o.b,to:"/login",className:"ResetPasswordButton",children:"Back to log-in"})]})})})),E=a(30),R=a(25),q=a(26),z=a.n(q);var D=Object(l.h)((function(e){var t=i.a.useContext(_t).setSnackbar,a=Object(l.g)().token;g.confirmEmail(a).then((function(a){t({text:a?"Your email has been confirmed. You can now log-in.":"We could not confirm your email.",open:!0,severity:a?"success":"error"}),e.history.push("/login")}));var n=Object(R.css)(M||(M=Object(E.a)(["display: block; margin: 0 auto;"])));return Object(A.jsx)(z.a,{color:"#F19820",loading:!0,css:n,size:100})})),J=a(49),G=(a(183),a(93),a(27)),Y=a(267),Q=a(270),$=a(271),K=a(302),X=a(272),Z=a(299),ee=(a(184),a(119)),te=a(269);var ae,ne=Object(l.h)((function(e){var t=i.a.useState(!1),a=Object(c.a)(t,2),n=a[0],r=a[1],s=i.a.useState(0),o=Object(c.a)(s,2),l=o[0],u=o[1],d=i.a.useState(""),j=Object(c.a)(d,2),b=j[0],h=j[1],m=["Myo is AI creativity in your pocket","Right now, we're analysing the experience of 35,892 users","To make sure your plan fits you perfectly","Your personalised creativity plan is almost ready. Are you?"];return i.a.useEffect((function(){var e=setInterval((function(){u((function(e){100===e&&r(!0);var t=6*Math.random(),a=Math.min(e+t,100);return a>95&&r(!0),h(function(e){var t=Math.floor(e*m.length/100);return m[t]}(a)),a}))}),500);return function(){clearInterval(e)}}),[]),n?Object(A.jsxs)("div",{children:[Object(A.jsx)("h2",{className:"animate__animated animate__backInDown",children:"Your custom training plan is ready"}),Object(A.jsx)(H.a,{style:{animation:"pulse 3s ease infinite",margin:"20px 0"},className:"StartButton animate__animated animate__fadeIn animate__delay-1s",variant:"contained",size:"large",color:"primary",onClick:function(){return e.onComplete()},children:"Let's go"})]}):Object(A.jsxs)("div",{style:{margin:"0 20px"},children:[Object(A.jsx)("h3",{className:"animate__animated animate__backInDown animate__delay-1s",children:b}),Object(A.jsx)(te.a,{className:"animate__animated animate__fadeIn",variant:"determinate",value:l}),Object(A.jsx)(ee.a,{className:"animate__animated animate__fadeIn goo",intensity:"strong",children:Object(A.jsxs)("svg",{width:"500",height:"500",children:[Object(A.jsx)("circle",{cx:"29%",cy:"50%",fill:"sandybrown",r:"49",style:{animation:"right 3s ease infinite"}}),Object(A.jsx)("circle",{cx:"44%",cy:"34%",fill:"palevioletred",r:"23",style:{animation:"left 7s linear infinite"}}),Object(A.jsx)("circle",{cx:"34%",cy:"74%",fill:"orchid",r:"59",style:{animation:"left 4s linear infinite"}}),Object(A.jsx)("circle",{cx:"56%",cy:"59%",fill:"mediumorchid",r:"46",style:{animation:"right 5s ease infinite"}})]})})]})})),ie=(a(185),a(120)),re=a.n(ie);function se(e){return Object(A.jsx)("div",{className:"OnboardingHero",style:{backgroundImage:'url("/activities/20/Thumbnail.jpeg"'},children:Object(A.jsxs)("div",{className:"UserHeroContent",style:{background:"linear-gradient(90deg, rgba(241,152,32,1) 40%, rgba(255,255,255,0) 90%)"},children:[Object(A.jsx)("h2",{children:"Spark is a totally custom creativity journey, designed for you."}),Object(A.jsxs)("p",{children:[Object(A.jsx)(re.a,{className:"Icon"})," To get started, we need to know a little bit more about you."]}),Object(A.jsx)(H.a,{className:"OnboardingHeroButton",onClick:e.onClick,children:"Next"})]})})}var ce=Object(l.h)((function(e){var t=i.a.useContext(_t).setSnackbar,a=i.a.useState(!0),n=Object(c.a)(a,2),r=n[0],s=n[1],o=i.a.useState(!1),l=Object(c.a)(o,2),u=l[0],d=l[1],j=i.a.useState(0),b=Object(c.a)(j,2),h=b[0],m=b[1],p=f.onboardingSteps,v=f.onboardingQuestions,O=i.a.useState(0),x=Object(c.a)(O,2),y=x[0],g=x[1],w=i.a.useState([]),k=Object(c.a)(w,2),S=k[0],N=k[1],C=i.a.useState([]),I=Object(c.a)(C,2),_=I[0],U=I[1];i.a.useEffect((function(){if(S.length){var e={questionIndex:y,question:v[y].question,answer:S};U([].concat(Object(J.a)(_),[e])),N([]),"multiple"!==v[y].type&&W()}}),[S]);var W=function(){var e=y+1,t=100*e/v.length,a=Math.ceil(t*p.length/100);y<v.length-1?(g(e),N([]),m(a)):(P(JSON.stringify(_)),d(!0))},P=function(e){T("/onboarding/save",{onboarding_json:e}).then((function(e){return t({text:e.success||e.error,open:e.error,severity:e.success?"success":"error"})}))},L=Object(R.css)(ae||(ae=Object(E.a)(["display: block; margin: 0 auto;"]))),B=Object(G.b)(f.onboardingStatusUrl).data;return B?(B.hasOwnProperty("success")&&e.onComplete(),r?Object(A.jsx)(se,{onClick:function(){return s(!1)}}):u?Object(A.jsx)(ne,{onComplete:e.onComplete}):Object(A.jsxs)("div",{className:"UserOnboarding",children:[Object(A.jsx)(K.a,{activeStep:h,alternativeLabel:!0,style:{backgroundColor:"transparent"},children:p.map((function(e){return Object(A.jsx)(X.a,{children:Object(A.jsx)(Z.a,{children:e})},e)}))}),Object(A.jsx)("h2",{children:v[y].question}),(v[y],Object(A.jsxs)(Y.a,{component:"nav","aria-label":"Onboarding answers",children:[v[y].answers.map((function(e,t){return Object(A.jsx)(Q.a,{selected:S.includes(t),onClick:function(){return e=t,void N([].concat(Object(J.a)(S),[e]));var e},button:!0,children:Object(A.jsx)($.a,{align:"center",primary:e})},t)})),"multiple"===v[y].type?Object(A.jsx)(H.a,{variant:"contained",color:"primary",onClick:W,disabled:!S.length,children:"Next"}):null]}))]})):Object(A.jsx)(z.a,{color:"#F19820",loading:!0,css:L,size:100})})),oe=(a(187),a(188),a(130)),le=a(291),ue=a(292),de=a(290),je=(a(189),a(273)),be=a(274),he=a(121),me=a.n(he),pe=a(122),ve=a.n(pe);function Oe(){var e=i.a.useState(0),t=Object(c.a)(e,2),a=t[0],n=t[1];return Object(A.jsxs)(je.a,{value:a,onChange:function(e,t){n(t)},showLabels:!0,className:"navbar",children:[Object(A.jsx)(be.a,{component:o.b,to:"/",id:"HomeNavbarIcon",label:"Home",icon:Object(A.jsx)(me.a,{})}),Object(A.jsx)(be.a,{component:o.b,to:"/spark",id:"SparkNavbarIcon",label:"Spark",icon:Object(A.jsx)(ve.a,{})})]})}var xe=a(82),fe=a(83),ye=a(86),ge=a(85),we=a(275),ke=(a(190),a(84)),Se=a.n(ke),Ne=function(e){Object(ye.a)(a,e);var t=Object(ge.a)(a);function a(){return Object(xe.a)(this,a),t.apply(this,arguments)}return Object(fe.a)(a,[{key:"render",value:function(){return Object(A.jsxs)("div",{className:"TopBar",children:[Object(A.jsx)(we.a,{component:o.b,to:"/",className:"AccountLink",children:Object(A.jsx)("img",{className:"MyoLogo",src:"/assets/logo.png",alt:"Myo app logo"})}),Object(A.jsx)("img",{className:"MyoText",src:"/assets/myo-text.png",alt:"Myo app logo"}),Object(A.jsx)(we.a,{component:o.b,to:"/user",className:"AccountLink",children:Object(A.jsx)(Se.a,{fontSize:"large",className:"AccountCircle"})})]})}}]),a}(i.a.Component);a(191);function Ce(){return Object(A.jsx)("div",{className:"SplashScreen",children:Object(A.jsx)("div",{className:"SplashScreenWrapper",children:Object(A.jsxs)(n.Suspense,{children:[Object(A.jsx)("img",{src:"/assets/myo-text-icon.png",alt:"Myo icon"}),Object(A.jsx)("p",{className:"animate__animated animate__bounceIn",children:"Spark wonder"})]})})})}a(192),a(193);var Ie=a(123),Te=a.n(Ie);var _e,Ae,Ue=Object(l.h)((function(e){var t=i.a.useContext(_t).setSnackbar;return Object(A.jsx)(H.a,{variant:"contained",onClick:function(){return t({text:"You have logged out.",open:!0,severity:"success"}),g.logout(),void e.history.push(f.afterLogout)},children:"Logout"})}));function We(e){var t=Object(G.b)("/auth/profile").data,a=Object(R.css)(_e||(_e=Object(E.a)(["display: block; margin: 0 auto;"])));if(!e.activities)return null;if(!t)return Object(A.jsx)(z.a,{color:"#F19820",loading:!0,css:a,size:100});var n=e.activities.pop(),i="/activities/".concat(n.activityId,"/").concat(n.thumbnail);return Object(A.jsx)("div",{className:"UserHero",style:{backgroundImage:'url("'.concat(i,'"')},children:Object(A.jsxs)("div",{className:"UserHeroContent",style:{background:"linear-gradient(90deg, rgba(241,152,32,1) 40%, rgba(255,255,255,0) 90%)"},children:[Object(A.jsx)(Ue,{className:"UserHeroLink"}),Object(A.jsx)("h1",{children:t.username}),Object(A.jsxs)("p",{children:[Object(A.jsx)(Se.a,{className:"Icon"})," Member since:"]}),Object(A.jsx)("p",{className:"caption",children:t.registered}),Object(A.jsxs)("p",{children:[Object(A.jsx)(Te.a,{className:"Icon"})," Total activities:"]}),Object(A.jsx)("p",{className:"caption",children:"52"}),Object(A.jsx)("span",{className:"stamp is-nope",children:"Super member"})]})})}function Pe(){var e=Object(R.css)(Ae||(Ae=Object(E.a)(["display: block; margin: 0 auto;"]))),t=Object(G.b)(f.activitiesListUrl).data;if(!t)return Object(A.jsx)(z.a,{color:"#F19820",loading:!0,css:e,size:100});var a=Object(J.a)(t.activities);return a.map((function(e,t){return a[t].activityId=t+1})),Object(A.jsx)("div",{className:"UserMenu",children:Object(A.jsx)(We,{activities:a})})}a(194),a(195);var He=a(124),Le=a.n(He);var Be=function(e){return Object(A.jsx)("div",{className:"cardComponent",children:e.activities.map((function(e,t){return Object(A.jsxs)("div",{className:"card",children:[Object(A.jsx)("div",{className:"card-image",children:Object(A.jsx)("img",{src:"/activities/".concat(e.activityId,"/").concat(e.thumbnail),alt:"Header decoration"})}),Object(A.jsxs)("div",{className:"content",children:[Object(A.jsx)("h4",{children:e.title}),Object(A.jsx)("p",{children:e.description})]}),Object(A.jsx)(we.a,{component:o.b,to:{pathname:"/activity/".concat(e.activityId)},className:"read-more",style:{textDecoration:"none"},children:Object(A.jsxs)("span",{children:["Start activity ",Object(A.jsx)(Le.a,{className:"chevron-right"})]})})]},t)}))})},Fe=a(125),Me=(a(196),function(e){Object(ye.a)(a,e);var t=Object(ge.a)(a);function a(e){var n;return Object(xe.a)(this,a),(n=t.call(this,e)).handleClose=function(){localStorage.setItem("onboardingComplete",!0),n.setState({isVisible:!1})},n.state={isVisible:null===localStorage.getItem("onboardingComplete")},n.story=[{component:"modal",intro:!0,children:Object(A.jsx)("p",{children:"Hey there! Welcome to Myo. As this is your first time, could we show you around?"}),className:"introModal"},{component:"speech-bubble",attachToId:"HomeNavbarIcon",children:Object(A.jsx)("p",{children:"This is the Home tab, where you can view all our activities, or you can click Spark, to start your custom creative journey."})},{component:"modal",intro:!1,children:Object(A.jsx)("p",{children:"The main feature of Myo is a custom curated journey of creativity exercises, that adapts and matches what you need."})},{component:"modal",intro:!1,children:Object(A.jsx)("p",{children:"We regularly add more exercises. Good luck with your creativity journey!"})}],n}return Object(fe.a)(a,[{key:"render",value:function(){return Object(A.jsx)(Fe.a,{story:this.story,isVisible:this.state.isVisible,onClose:this.handleClose})}}]),a}(i.a.Component));a(197);function Ve(e){var t=e.activities.pop(),a="/activities/".concat(t.activityId,"/").concat(t.thumbnail),n="/activity/".concat(t.activityId);return Object(A.jsx)("div",{className:"Hero",style:{backgroundImage:'url("'.concat(a,'"')},children:Object(A.jsxs)("div",{className:"HeroContent",style:{background:"linear-gradient(90deg, rgba(241,152,32,1) 35%, rgba(255,255,255,0) 64%)"},children:[Object(A.jsx)("h1",{children:t.title}),Object(A.jsx)("p",{children:t.description}),Object(A.jsx)(we.a,{component:o.b,to:{pathname:n,state:{activityId:t.activityId}},className:"HeroLink",style:{textDecoration:"none"},children:Object(A.jsx)("button",{className:"HeroButton",children:"Start now"})})]})})}a(198);var Ee,Re=a(277),qe=a(278),ze=a(303),De=a(279),Je=a(276),Ge=a(280),Ye=a(126),Qe=a.n(Ye);a(199);function $e(e){return Object(A.jsx)(Je.a,{item:!0,children:Object(A.jsx)(Y.a,{dense:!1,children:e.activities.map((function(e,t){return Object(A.jsxs)(we.a,{component:o.b,to:{pathname:"/activity/".concat(e.activityId)},style:{textDecoration:"none",color:"#333"},children:[Object(A.jsxs)(Q.a,{className:"ListItem",children:[Object(A.jsx)(Re.a,{children:Object(A.jsx)(ze.a,{children:Object(A.jsx)("img",{src:(a=e.thumbnail,n=e.activityId,"/activities/".concat(n,"/").concat(a)),alt:"Activity illustration"})})}),Object(A.jsx)($.a,{primary:e.title,secondary:e.description}),Object(A.jsx)(qe.a,{children:Object(A.jsx)(De.a,{edge:"end",children:Object(A.jsx)(Qe.a,{})})})]}),Object(A.jsx)(Ge.a,{variant:"inset",component:"li"})]},t);var a,n}))})})}function Ke(e){var t=Math.ceil(e.activities.length/2),a=e.activities.splice(0,t),n=e.activities.splice(-t);return Object(A.jsxs)("div",{className:"HeroList",children:[Object(A.jsx)("h1",{children:e.title}),Object(A.jsxs)("div",{className:"HeroListContent",children:[Object(A.jsx)($e,{className:"ActivityAvatarList",activities:a}),Object(A.jsx)($e,{className:"ActivityAvatarList",activities:n})]})]})}function Xe(){var e,t=Object(R.css)(Ee||(Ee=Object(E.a)(["display: block; margin: 0 auto;"]))),a=Object(G.b)(f.activitiesListUrl).data;if(!a)return Object(A.jsx)(z.a,{color:"#F19820",loading:!0,css:t,size:100});var n=function(){(e=Object(J.a)(a.activities)).map((function(t,a){return e[a].activityId=a+1}))};n();var i=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e.length<1&&n(),t||(t=e.length),Object(J.a)(Array(t)).map((function(){return e.splice(Math.floor(Math.random()*e.length),1)[0]}))};return Object(A.jsxs)("div",{className:"ViewActivitiesComponent",children:[Object(A.jsx)(Me,{}),Object(A.jsx)(Ve,{activities:i(1)}),Object(A.jsx)(Ke,{activities:i(4),title:"Activities we love right now"}),Object(A.jsx)(Be,{activities:i(3)}),Object(A.jsx)(Ve,{activities:i(1)}),Object(A.jsx)(Ke,{activities:i(4),title:"Trending this week"}),Object(A.jsx)(Be,{activities:i(6)}),Object(A.jsx)(Ve,{activities:i(1)}),Object(A.jsx)(Be,{activities:i(3)})]})}a(200),a(201);function Ze(e){return Object(A.jsxs)("div",{className:"ActivityIntroduction",children:["mp4"===e.activity.thumbnail.split(".").pop()?Object(A.jsx)("video",{className:"ActivityVideo",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,controls:!0,children:Object(A.jsx)("source",{src:"/activities/".concat(e.activityId,"/").concat(e.activity.thumbnail),type:"video/mp4"})}):Object(A.jsx)("img",{src:"/activities/"+e.activityId+"/"+e.activity.thumbnail,alt:"Header decoration"}),Object(A.jsx)("h1",{children:e.activity.title}),Object(A.jsx)("p",{dangerouslySetInnerHTML:{__html:e.activity.description}}),Object(A.jsx)(H.a,{variant:"contained",color:"primary",onClick:e.handleStartActivity,children:"I'm ready"})]})}a(202);var et=a(296),tt=a(289),at=a(293),nt=a(286),it=a(287),rt=a(288),st=(a(203),a(204),a(205),a(206),a(282)),ct=a(301),ot=a(285),lt=a(283),ut=a(284),dt=a(131),jt=(a(207),a(281)),bt=a(5),ht=a(304),mt=Object(jt.a)((function(e){return{root:{width:150+2*e.spacing(3)},margin:{height:e.spacing(3)}}})),pt="0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)",vt=[{value:0,label:"\ud83d\ude1f"},{value:50,label:"\ud83d\ude0c"},{value:100,label:"\ud83e\uddd1\u200d\ud83c\udfa8"}],Ot=Object(bt.a)({root:{color:"#F19820",height:2,padding:"15px 0"},thumb:{height:28,width:28,backgroundColor:"#fff",boxShadow:pt,marginTop:-14,marginLeft:-14,"&:focus, &:hover, &$active":{boxShadow:"0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)","@media (hover: none)":{boxShadow:pt}}},active:{},valueLabel:{left:"calc(-50% + 12px)",top:-22,"& *":{background:"transparent",color:"#000"}},track:{height:2},rail:{height:2,opacity:.5,backgroundColor:"#bfbfbf"},mark:{backgroundColor:"#bfbfbf",height:8,width:1,marginTop:-3},markActive:{opacity:1,backgroundColor:"#F19820"}})(ht.a);function xt(){var e=mt();return Object(A.jsx)("div",{className:e.root,children:Object(A.jsx)(Ot,{"aria-label":"ios slider",defaultValue:75,marks:vt,valueLabelDisplay:"off"})})}var ft;a(208);function yt(e){var t=i.a.useState(""),a=Object(c.a)(t,2),n=a[0],r=a[1];return Object(A.jsxs)(ct.a,{onClose:e.onClose,open:e.open,disableEnforceFocus:!0,children:[Object(A.jsx)(st.a,{align:"center",id:"dialog-title",children:"Congratulations! \ud83c\udf89"}),Object(A.jsxs)(lt.a,{align:"center",className:"ReviewDialogContent",children:[Object(A.jsxs)(ut.a,{children:["How did you feel?",Object(A.jsx)(xt,{})]}),Object(A.jsxs)(ut.a,{children:["How would you rate this activity?",Object(A.jsx)("br",{}),Object(A.jsx)(dt.a,{})]}),Object(A.jsx)(ut.a,{children:Object(A.jsx)(P.a,{fullWidth:!0,align:"center",id:"feedbackText",multiline:!0,name:"feedbackText",label:"Any notes to yourself?",value:n,onChange:function(e){return r(e.target.value)}})})]}),Object(A.jsxs)(ot.a,{children:[Object(A.jsx)(we.a,{component:o.b,to:{pathname:"/"},style:{textDecoration:"none"},children:Object(A.jsx)(H.a,{onClick:e.onClose,children:"Skip"})}),Object(A.jsx)(we.a,{component:o.b,to:{pathname:"/"},style:{textDecoration:"none"},children:Object(A.jsx)(H.a,{variant:"contained",onClick:function(){e.onSubmit()},color:"primary",type:"submit",children:"Done"})})]})]})}function gt(e){var t=i.a.useState(!1),a=Object(c.a)(t,2),r=a[0],s=a[1],o=Object(n.useState)(!1),l=Object(c.a)(o,2),u=l[0],d=l[1];return Object(A.jsxs)("div",{className:"ActivityCarousel",children:[Object(A.jsx)(et.a,{spaceBetween:50,slidesPerView:1,navigation:!0,pagination:{clickable:!0,type:"progressbar"},onReachEnd:function(){return d(!0)},children:e.activity.pages.map((function(t,a){return Object(A.jsxs)(tt.a,{children:["mp4"===t.thumbnail.split(".").pop()?Object(A.jsx)("video",{className:"ActivityVideo",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,controls:!0,children:Object(A.jsx)("source",{src:"/activities/".concat(e.activityId,"/").concat(t.thumbnail),type:"video/mp4"})}):Object(A.jsx)("img",{src:encodeURI("/activities/"+e.activityId+"/"+t.thumbnail),alt:"Header decoration"}),Object(A.jsxs)("div",{className:"text",children:[Object(A.jsx)("h1",{children:t.title}),Object(A.jsx)("p",{dangerouslySetInnerHTML:{__html:t.description}})]})]},a)}))}),u?Object(A.jsx)(H.a,{variant:"contained",onClick:function(){return s(!0)},color:"primary",children:"Finish"}):null,r?Object(A.jsx)(yt,{open:r,onSubmit:function(e){s(!1),T("/api/orders/delete",{feedback:e})},onClose:function(){return s(!1)}}):null]})}function wt(){var e=Object(l.g)().activityId,t=Object(n.useState)(!0),a=Object(c.a)(t,2),i=a[0],r=a[1],s=Object(G.b)("/activities/api/get/".concat(e-1)).data,o=Object(R.css)(ft||(ft=Object(E.a)(["display: block; margin: 0 auto;"])));return s?Object(A.jsx)("div",{className:"Activity",children:i?Object(A.jsx)(Ze,{activityId:e,activity:s.activity,handleStartActivity:function(){return r(!1)}}):Object(A.jsx)(gt,{activityId:e,activity:s.activity})}):Object(A.jsx)(z.a,{color:"#F19820",loading:!0,css:o,size:100})}at.a.use([nt.a,it.a,rt.a]);var kt=a(129);a(209),a(210);function St(e){var t=function(){return e.activityId+1},a="url('"+("/activities/"+t()+"/"+e.thumbnail)+"')";return Object(A.jsx)(we.a,{component:o.b,to:{pathname:"/activity/"+t()},className:"ActivityBubble",style:{backgroundColor:e.backgroundColour+"d0",textDecoration:"none"},children:Object(A.jsxs)("div",{className:"ActivityDetails",style:{opacity:e.bubbleSize>50?1:0,transition:"opacity 0.1s ease"},children:[Object(A.jsx)("div",{className:"ActivityThumbnail",style:{backgroundImage:a}}),Object(A.jsx)("h1",{children:e.title})]})})}var Nt;a(211);var Ct=Object(l.h)((function(){var e=Object(R.css)(Nt||(Nt=Object(E.a)(["display: block; margin: 0 auto;"]))),t=Object(G.b)(f.onboardingStatusUrl),a=t.data,n=t.mutate,i=Object(G.b)(f.activitiesListUrl).data;return a&&i?a.hasOwnProperty("error")?Object(A.jsx)(ce,{onComplete:n}):Object(A.jsx)("div",{className:"Spark",children:Object(A.jsx)(kt.a,{options:{size:165,minSize:20,gutter:10,provideProps:!0,numCols:5,fringeWidth:120,yRadius:200,xRadius:100,cornerRadius:20,showGuides:!1,compact:!0,gravitation:5},className:"sparkBubbleUi",children:i.activities.map((function(e,t){return Object(A.jsx)(St,{activityId:t,title:e.title,thumbnail:e.thumbnail,backgroundColour:e.background_colour},t)}))})}):Object(A.jsx)(z.a,{color:"#F19820",loading:!0,css:e,size:100})})),It=a(300),Tt=a(297),_t=i.a.createContext();function At(){var e=i.a.useState(!0),t=Object(c.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){setTimeout((function(){r(!1)}),1500)}),[]);var s=Object(oe.a)({palette:{type:Object(de.a)("(prefers-color-scheme: dark)")?"dark":"light",primary:{main:"#F19820"},secondary:{main:"#CAE8FF"}},typography:{fontFamily:["F37 Ginger","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")},overrides:{MuiTouchRipple:{child:{backgroundColor:"#F19820"}}}}),u=i.a.useState({text:"",severity:"",open:!1}),d=Object(c.a)(u,2),j=d[0],b=d[1],h=function(){b({open:!1})};return Object(A.jsxs)(le.a,{theme:s,children:[Object(A.jsx)(ue.a,{}),Object(A.jsxs)("div",{className:"App",children:[Object(A.jsx)("link",{rel:"shortcut icon",href:"./favicon.ico"}),Object(A.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"}),Object(A.jsx)("header",{className:"App-header",children:Object(A.jsxs)(_t.Provider,{value:{snackbar:j,setSnackbar:b},children:[Object(A.jsx)(It.a,{open:j.open,autoHideDuration:6e3,onClose:h,children:Object(A.jsx)(Tt.a,{onClose:h,severity:j.severity,children:j.text})}),a?Object(A.jsx)(Ce,{}):Object(A.jsxs)(o.a,{children:[Object(A.jsx)(Ne,{}),Object(A.jsx)("div",{className:"AppWrapper",children:Object(A.jsxs)(l.d,{children:[Object(A.jsxs)(l.b,{exact:!0,path:"/",children:[" ",Object(A.jsx)(Xe,{})," "]}),Object(A.jsxs)(l.b,{exact:!0,path:"/activity/:activityId",children:[" ",Object(A.jsx)(wt,{})," "]}),Object(A.jsx)(U,{exact:!0,path:"/spark",component:Ct}),Object(A.jsx)(U,{exact:!0,path:"/user",component:Pe}),Object(A.jsx)(U,{exact:!0,path:"/onboarding",component:ce}),Object(A.jsx)(l.b,{exact:!0,path:"/login",component:L}),Object(A.jsx)(l.b,{exact:!0,path:"/reset",component:F}),Object(A.jsx)(l.b,{exact:!0,path:"/register",component:V}),Object(A.jsx)(l.b,{exact:!0,path:"/confirm/:token",component:D}),Object(A.jsx)(l.b,{exact:!0,path:"/reset/:token",component:B})]})}),Object(A.jsx)(Oe,{})]})]})})]})]})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));I.a.interceptors.response.use((function(e){return e}),(function(e){return new Promise((function(t){var a=e.config,n=O();e.response&&401===e.response.status&&e.config&&!e.config.__isRetryRequest&&n&&(a._retry=!0,t(fetch(f.authRefresh,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify({refresh:O})}).then((function(e){return e.json()})).then((function(e){var t=JSON.parse(localStorage.getItem("currentUser"));t.access_token=e.access_token,g.updateUser(t),window.location.reload()}))));return Promise.reject(e)}))})),s.a.render(Object(A.jsx)(G.a,{value:{fetcher:function(e){return I.a.get(e,{headers:{Authorization:"Bearer "+v()}}).then((function(e){return e.data}))}},children:Object(A.jsx)(At,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},91:function(e,t,a){}},[[212,1,2]]]);
//# sourceMappingURL=main.bb9befbb.chunk.js.map