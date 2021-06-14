(this["webpackJsonpmyo-react"]=this["webpackJsonpmyo-react"]||[]).push([[0],{103:function(e,t,a){},163:function(e,t,a){},198:function(e,t,a){},199:function(e,t,a){},200:function(e,t,a){},202:function(e,t,a){},203:function(e,t,a){},204:function(e,t,a){},205:function(e,t,a){},206:function(e,t,a){},207:function(e,t,a){},208:function(e,t,a){},209:function(e,t,a){},210:function(e,t,a){},212:function(e,t,a){},213:function(e,t,a){},214:function(e,t,a){},215:function(e,t,a){},216:function(e,t,a){},217:function(e,t,a){},223:function(e,t,a){},224:function(e,t,a){},225:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(16),r=a.n(s),c=(a(163),a(12)),o=a(15),l=a(26),u=a(67),d=a(147),j=a(22),b=a.n(j),h=a(38),m=a(308);function p(){var e=g.currentUserValue;return e&&e.access_token?{Authorization:"Bearer ".concat(e.access_token)}:{}}function v(){var e=g.currentUserValue;return e&&e.access_token?e.access_token:{}}function O(){var e=g.currentUserValue;return!(!e||!e.refresh_token)&&e.refresh_token}function x(e){return e.text().then((function(t){var a=t&&JSON.parse(t);if(!e.ok){-1!==[401,403].indexOf(e.status)&&g.logout();var n=a&&a.message||e.statusText;return Promise.reject(n)}return a}))}var f={authLogin:"/auth/login",authRefresh:"/auth/refresh",afterLogout:"/",resetWithToken:"/auth/reset/token",authSignUp:"/auth/register",authValidate:"/auth/validate",confirmEmail:"/auth/confirm",activitiesListUrl:"/activities/api/list",onboardingStatusUrl:"/onboarding/status",onboardingSteps:["About yourself","You and art","Final details"],onboardingQuestions:[{question:"What kind of creative activity are you most interested in?",answers:["Drawing","Writing","Painting","Crafts","Photography"]},{question:"What would you like to use Myo for?",answers:["To relax","To learn new skills","To use my imagination","To better express myself","To discover new arts"]},{question:"What would you like Myo to offer?",answers:["Breadth of activities","In depth skill building","Global perspectives","Interaction with artists & users"]},{question:"What skills are you most interested in developing?",answers:["Imagination","Persistence","Discipline","Inquisitiveness","Collaboration"]},{question:"Generally, how often do you engage in creative activities?",answers:["Everyday","Two or three times a week","Once every now and again","Never!"]},{question:"How often would you like to engage in creative activities?",answers:["Everyday","Two or three times a week","Once every now and again","Never!"]},{question:"For how long?",answers:["No more than 5mins at a time","5mins to 10mins","10mins to 20mins","20mins to 40mins","Sky\u2019s the limit!"]},{question:"How \u2018experienced\u2019 do you think you are?",answers:["Complete beginner","Want to take it easy","I like a challenge!","Experience grrrr!!"]},{question:"What materials do you have access to?",answers:["Pens and paper only","Own some pencils","Watercolour paints","Acrylic paints","General arts & crafts stuff","Camera (phone will do)"]}]},y=new m.a(JSON.parse(localStorage.getItem("currentUser"))),g={login:function(e,t){return w.apply(this,arguments)},logout:function(){localStorage.removeItem("currentUser"),y.next(null)},signUp:function(e,t,a){return k.apply(this,arguments)},updateUser:function(e){localStorage.setItem("currentUser",JSON.stringify(e)),y.next(e)},validateRegistration:function(e,t){return S.apply(this,arguments)},confirmEmail:function(e){return N.apply(this,arguments)},currentUser:y.asObservable(),get currentUserValue(){return y.value}};function w(){return(w=Object(h.a)(b.a.mark((function e(t,a){var n,i,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:a})},e.next=3,fetch(f.authLogin,n);case 3:return i=e.sent,e.next=6,x(i);case 6:return s=e.sent,localStorage.setItem("currentUser",JSON.stringify(s)),y.next(s),e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=Object(h.a)(b.a.mark((function e(t,a,n){var i,s,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:n,email:a})},e.next=3,fetch(f.authSignUp,i);case 3:return s=e.sent,e.next=6,x(s);case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return(S=Object(h.a)(b.a.mark((function e(t,a){var n,i,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,email:a})},e.next=3,fetch(f.authValidate,n);case 3:return i=e.sent,e.next=6,x(i);case 6:return s=e.sent,e.abrupt("return",s);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(h.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:t})},e.next=3,fetch(f.confirmEmail,a);case 3:return n=e.sent,e.next=6,x(n);case 6:if(!e.sent.hasOwnProperty("success")){e.next=11;break}return e.abrupt("return",!0);case 11:return e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var C=a(75),_=a.n(C);function I(e,t){return T.apply(this,arguments)}function T(){return(T=Object(h.a)(b.a.mark((function e(t,a){var n,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.post(t,a,{headers:p()});case 3:return n=e.sent,i=n.data,e.abrupt("return",i);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var A=a(2),U=function(e){var t=e.component,a=Object(d.a)(e,["component"]);return Object(A.jsx)(l.b,Object(u.a)(Object(u.a)({},a),{},{render:function(e){return g.currentUserValue?Object(A.jsx)(t,Object(u.a)({},e)):Object(A.jsx)(l.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},B=(a(103),a(59)),W=a(307),P=a(281);var F=Object(l.h)((function(e){var t=i.a.useContext(Ft).setSnackbar;g.currentUserValue&&e.history.push("/");var a=Object(B.a)({initialValues:{username:"",password:""},onSubmit:function(a){g.login(a.username,a.password).then((function(n){var i=(e.location.state||{from:{pathname:"/"}}).from;e.history.push(i),t({text:"Welcome, ".concat(a.username),open:!0,severity:"success"})}))}});return Object(A.jsx)("div",{className:"AuthForm",children:Object(A.jsxs)("form",{onSubmit:a.handleSubmit,children:[Object(A.jsx)(W.a,{fullWidth:!0,id:"username",name:"username",label:"Username",value:a.values.username,onChange:a.handleChange,error:a.touched.username&&Boolean(a.errors.username)}),Object(A.jsx)(W.a,{fullWidth:!0,id:"password",name:"password",label:"Password",type:"password",value:a.values.password,onChange:a.handleChange,error:a.touched.password&&Boolean(a.errors.password),helperText:a.touched.password&&a.errors.password}),Object(A.jsx)(P.a,{className:"SubmitButton",color:"primary",variant:"contained",fullWidth:!0,type:"submit",children:"Submit"}),Object(A.jsx)(P.a,{component:o.b,to:"/reset",className:"ResetPasswordButton",children:"Forgot password"}),Object(A.jsx)(P.a,{component:o.b,to:"/register",children:"New account"})]})})}));var L=Object(l.h)((function(e){var t=i.a.useContext(Ft).setSnackbar;return Object(A.jsx)(P.a,{variant:"contained",onClick:function(){return t({text:"You have logged out.",open:!0,severity:"success"}),g.logout(),void e.history.push(f.afterLogout)},children:"Logout"})}));var H=Object(l.h)((function(e){var t=i.a.useContext(Ft).setSnackbar,a=Object(l.g)().token,n=Object(B.a)({initialValues:{password:""},onSubmit:function(n){n.token=a,fetch(f.resetWithToken,{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(a){if(a.hasOwnProperty("error"))throw a.error;t({text:a.success,open:!0,severity:"success"}),e.history.push("/login")})).catch((function(e){t({text:e,open:!0,severity:"error"})}))}});return Object(A.jsx)("div",{className:"AuthForm",children:Object(A.jsxs)("form",{onSubmit:n.handleSubmit,children:[Object(A.jsx)(W.a,{fullWidth:!0,id:"password",name:"password",label:"New password",type:"password",value:n.values.password,onChange:n.handleChange,error:n.touched.password&&Boolean(n.errors.password),helperText:n.touched.password&&n.errors.password}),Object(A.jsx)(P.a,{variant:"contained",fullWidth:!0,type:"submit",children:"Set new password"})]})})}));var M=Object(l.h)((function(e){var t=i.a.useContext(Ft).setSnackbar,a=Object(B.a)({initialValues:{email:""},onSubmit:function(a){fetch("/auth/reset",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(a){if(a.hasOwnProperty("error"))throw a.error;t({text:a.success,open:!0,severity:"success"}),e.history.push("login")})).catch((function(e){t({text:e,open:!0,severity:"error"})}))}});return Object(A.jsx)("div",{className:"AuthForm",children:Object(A.jsxs)("form",{onSubmit:a.handleSubmit,children:[Object(A.jsx)(W.a,{fullWidth:!0,id:"email",name:"email",label:"Email",type:"email",value:a.values.email,onChange:a.handleChange,error:a.touched.email&&Boolean(a.errors.email),helperText:a.touched.email&&a.errors.email}),Object(A.jsx)(P.a,{color:"primary",variant:"contained",fullWidth:!0,type:"submit",children:"Send password reset email"}),Object(A.jsx)(P.a,{component:o.b,to:"/login",children:"Back to Login"})]})})}));var V,E=Object(l.h)((function(e){var t=i.a.useContext(Ft).setSnackbar;g.currentUserValue&&e.history.push("/");var a=function(){var e=Object(h.a)(b.a.mark((function e(a,n){var i,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.validateRegistration(a.username,a.email);case 2:return i=e.sent,s={},["admin","null","god"].includes(a.username)&&(s.username="Please choose a different username"),i.username_exists&&(s.username="This username is already taken"),i.email_exists&&(s.email="This email is already registered"),Object.entries(s).map((function(e){return t({text:e.pop(),open:!0,severity:"warning"}),!0})),e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),n=Object(B.a)({initialValues:{username:"",email:"",password:""},onSubmit:function(a){g.signUp(a.username,a.email,a.password).then((function(n){e.history.push("/login"),t({text:"An email has been sent to ".concat(a.email,". Please open it to continue."),open:!0,severity:"success"})}))},validate:a});return Object(A.jsx)("div",{className:"AuthForm",children:Object(A.jsxs)("form",{onSubmit:n.handleSubmit,children:[Object(A.jsx)(W.a,{fullWidth:!0,id:"username",name:"username",label:"Username",value:n.values.username,onChange:n.handleChange,error:n.touched.username&&Boolean(n.errors.username)}),Object(A.jsx)(W.a,{fullWidth:!0,id:"email",name:"email",label:"Email",value:n.values.email,onChange:n.handleChange,error:n.touched.email&&Boolean(n.errors.email)}),Object(A.jsx)(W.a,{fullWidth:!0,id:"password",name:"password",label:"Password",type:"password",value:n.values.password,onChange:n.handleChange,error:n.touched.password&&Boolean(n.errors.password),helperText:n.touched.password&&n.errors.password}),Object(A.jsx)(P.a,{className:"SubmitButton",color:"primary",variant:"contained",fullWidth:!0,type:"submit",children:"Submit"}),Object(A.jsx)(P.a,{component:o.b,to:"/login",className:"ResetPasswordButton",children:"Back to log-in"})]})})})),q=a(37),J=a(33),z=a(34),R=a.n(z);var D=Object(l.h)((function(e){var t=i.a.useContext(Ft).setSnackbar,a=Object(l.g)().token;g.confirmEmail(a).then((function(a){t({text:a?"Your email has been confirmed. You can now log-in.":"We could not confirm your email.",open:!0,severity:a?"success":"error"}),e.history.push("/login")}));var n=Object(J.css)(V||(V=Object(q.a)(["display: block; margin: 0 auto;"])));return Object(A.jsx)(R.a,{color:"#F19820",loading:!0,css:n,size:100})})),Y=a(32),G=(a(198),a(105),a(35)),Q=a(280),$=a(283),Z=a(284),K=a(315),X=a(285),ee=a(312),te=(a(199),a(135)),ae=a(282);var ne,ie=Object(l.h)((function(e){var t=i.a.useState(!1),a=Object(c.a)(t,2),n=a[0],s=a[1],r=i.a.useState(0),o=Object(c.a)(r,2),l=o[0],u=o[1],d=i.a.useState(""),j=Object(c.a)(d,2),b=j[0],h=j[1],m=["Myo is AI creativity in your pocket","Right now, we're analysing the experience of 35,892 users","To make sure your plan fits you perfectly","Your personalised creativity plan is almost ready. Are you?"];return i.a.useEffect((function(){var e=setInterval((function(){u((function(e){100===e&&s(!0);var t=6*Math.random(),a=Math.min(e+t,100);return a>95&&s(!0),h(function(e){var t=Math.floor(e*m.length/100);return m[t]}(a)),a}))}),500);return function(){clearInterval(e)}}),[]),n?Object(A.jsxs)("div",{children:[Object(A.jsx)("h2",{className:"animate__animated animate__backInDown",children:"Your custom training plan is ready"}),Object(A.jsx)(P.a,{style:{animation:"pulse 3s ease infinite",margin:"20px 0"},className:"StartButton animate__animated animate__fadeIn animate__delay-1s",variant:"contained",size:"large",color:"primary",onClick:function(){return e.onComplete()},children:"Let's go"})]}):Object(A.jsxs)("div",{style:{margin:"0 20px"},children:[Object(A.jsx)("h3",{className:"animate__animated animate__backInDown animate__delay-1s",children:b}),Object(A.jsx)(ae.a,{className:"animate__animated animate__fadeIn",variant:"determinate",value:l}),Object(A.jsx)(te.a,{className:"animate__animated animate__fadeIn goo",intensity:"strong",children:Object(A.jsxs)("svg",{width:"500",height:"500",children:[Object(A.jsx)("circle",{cx:"29%",cy:"50%",fill:"#FFB339",r:"49",style:{animation:"right 3s ease infinite"}}),Object(A.jsx)("circle",{cx:"44%",cy:"34%",fill:"#C6302C",r:"23",style:{animation:"left 7s linear infinite"}}),Object(A.jsx)("circle",{cx:"34%",cy:"74%",fill:"#F19821",r:"59",style:{animation:"left 4s linear infinite"}}),Object(A.jsx)("circle",{cx:"56%",cy:"59%",fill:"mediumorchid",r:"46",style:{animation:"right 5s ease infinite"}})]})})]})})),se=(a(200),a(136)),re=a.n(se);function ce(e){return Object(A.jsx)("div",{className:"OnboardingHero",style:{backgroundImage:'url("/activities/20/Thumbnail.jpeg"'},children:Object(A.jsxs)("div",{className:"UserHeroContent",style:{background:"linear-gradient(90deg, rgba(241,152,32,1) 40%, rgba(255,255,255,0) 90%)"},children:[Object(A.jsx)("h2",{children:"Spark is a totally custom creativity journey, designed for you."}),Object(A.jsxs)("p",{children:[Object(A.jsx)(re.a,{className:"Icon"})," To get started, we need to know a little bit more about you."]}),Object(A.jsx)(P.a,{className:"OnboardingHeroButton",onClick:e.onClick,children:"Next"})]})})}var oe=Object(l.h)((function(e){var t=i.a.useContext(Ft).setSnackbar,a=i.a.useState(!0),n=Object(c.a)(a,2),s=n[0],r=n[1],o=i.a.useState(!1),l=Object(c.a)(o,2),u=l[0],d=l[1],j=i.a.useState(0),b=Object(c.a)(j,2),h=b[0],m=b[1],p=f.onboardingSteps,v=f.onboardingQuestions,O=i.a.useState(0),x=Object(c.a)(O,2),y=x[0],g=x[1],w=i.a.useState([]),k=Object(c.a)(w,2),S=k[0],N=k[1],C=i.a.useState([]),_=Object(c.a)(C,2),T=_[0],U=_[1];i.a.useEffect((function(){if(S.length){var e={questionIndex:y,question:v[y].question,answer:S};U([].concat(Object(Y.a)(T),[e])),N([]),"multiple"!==v[y].type&&B()}}),[S]);var B=function(){var e=y+1,t=100*e/v.length,a=Math.ceil(t*p.length/100);y<v.length-1?(g(e),N([]),m(a)):(W(JSON.stringify(T)),d(!0))},W=function(e){I("/onboarding/save",{onboarding_json:e}).then((function(e){return t({text:e.success||e.error,open:e.error,severity:e.success?"success":"error"})}))},F=Object(J.css)(ne||(ne=Object(q.a)(["display: block; margin: 0 auto;"]))),L=Object(G.b)(f.onboardingStatusUrl).data;return L?(L.hasOwnProperty("success")&&e.onComplete(),s?Object(A.jsx)(ce,{onClick:function(){return r(!1)}}):u?Object(A.jsx)(ie,{onComplete:e.onComplete}):Object(A.jsxs)("div",{className:"UserOnboarding",children:[Object(A.jsx)(K.a,{activeStep:h,alternativeLabel:!0,style:{backgroundColor:"transparent"},children:p.map((function(e){return Object(A.jsx)(X.a,{children:Object(A.jsx)(ee.a,{children:e})},e)}))}),Object(A.jsx)("h2",{children:v[y].question}),(v[y],Object(A.jsxs)(Q.a,{component:"nav","aria-label":"Onboarding answers",children:[v[y].answers.map((function(e,t){return Object(A.jsx)($.a,{selected:S.includes(t),onClick:function(){return e=t,void N([].concat(Object(Y.a)(S),[e]));var e},button:!0,children:Object(A.jsx)(Z.a,{align:"center",primary:e})},t)})),"multiple"===v[y].type?Object(A.jsx)(P.a,{variant:"contained",color:"primary",onClick:B,disabled:!S.length,children:"Next"}):null]}))]})):Object(A.jsx)(R.a,{color:"#F19820",loading:!0,css:F,size:100})})),le=(a(202),a(203),a(145)),ue=a(304),de=a(305),je=a(303),be=(a(204),a(286)),he=a(287),me=a(137),pe=a.n(me),ve=a(138),Oe=a.n(ve);function xe(){var e=i.a.useState(0),t=Object(c.a)(e,2),a=t[0],n=t[1];return Object(A.jsxs)(be.a,{value:a,onChange:function(e,t){n(t)},showLabels:!0,className:"navbar",children:[Object(A.jsx)(he.a,{component:o.b,to:"/",id:"HomeNavbarIcon",label:"Home",icon:Object(A.jsx)(pe.a,{})}),Object(A.jsx)(he.a,{component:o.b,to:"/spark",id:"SparkNavbarIcon",label:"Spark",icon:Object(A.jsx)(Oe.a,{})})]})}var fe=a(21),ye=a(29),ge=a(30),we=a(31),ke=a(288),Se=(a(205),a(98)),Ne=a.n(Se),Ce=function(e){Object(ge.a)(a,e);var t=Object(we.a)(a);function a(){return Object(fe.a)(this,a),t.apply(this,arguments)}return Object(ye.a)(a,[{key:"render",value:function(){return Object(A.jsxs)("div",{className:"TopBar",children:[Object(A.jsx)(ke.a,{component:o.b,to:"/",className:"AccountLink",children:Object(A.jsx)("img",{className:"MyoLogo",src:"/assets/logo.png",alt:"Myo app logo"})}),Object(A.jsx)("img",{className:"MyoText",src:"/assets/myo-text.png",alt:"Myo app logo"}),Object(A.jsx)(ke.a,{component:o.b,to:"/user",className:"AccountLink",children:Object(A.jsx)(Ne.a,{fontSize:"large",className:"AccountCircle"})})]})}}]),a}(i.a.Component);a(206);function _e(){return Object(A.jsx)("div",{className:"SplashScreen",children:Object(A.jsx)("div",{className:"SplashScreenWrapper",children:Object(A.jsxs)(n.Suspense,{children:[Object(A.jsx)("img",{src:"/assets/myo-text-icon.png",alt:"Myo icon"}),Object(A.jsx)("p",{className:"animate__animated animate__bounceIn",children:"Spark wonder"})]})})})}a(207),a(208);var Ie,Te,Ae=a(139),Ue=a.n(Ae);function Be(e){var t=Object(G.b)("/auth/profile").data,a=Object(J.css)(Ie||(Ie=Object(q.a)(["display: block; margin: 0 auto;"])));if(!e.activities)return null;if(!t)return Object(A.jsx)(R.a,{color:"#F19820",loading:!0,css:a,size:100});var n=e.activities.pop(),i="/activities/".concat(n.activityId,"/").concat(n.thumbnail);return Object(A.jsx)("div",{className:"UserHero",style:{backgroundImage:'url("'.concat(i,'"')},children:Object(A.jsxs)("div",{className:"UserHeroContent",style:{background:"linear-gradient(90deg, rgba(241,152,32,1) 40%, rgba(255,255,255,0) 90%)"},children:[Object(A.jsx)(L,{className:"UserHeroLink"}),Object(A.jsx)("h1",{children:t.username}),Object(A.jsxs)("p",{children:[Object(A.jsx)(Ne.a,{className:"Icon"})," Member since:"]}),Object(A.jsx)("p",{className:"caption",children:t.registered}),Object(A.jsxs)("p",{children:[Object(A.jsx)(Ue.a,{className:"Icon"})," Total activities:"]}),Object(A.jsx)("p",{className:"caption",children:"52"}),Object(A.jsx)("span",{className:"stamp is-nope",children:"Super member"})]})})}function We(){var e=Object(J.css)(Te||(Te=Object(q.a)(["display: block; margin: 0 auto;"]))),t=Object(G.b)(f.activitiesListUrl).data;if(!t)return Object(A.jsx)(R.a,{color:"#F19820",loading:!0,css:e,size:100});var a=Object(Y.a)(t.activities);return a.map((function(e,t){return a[t].activityId=t+1})),Object(A.jsx)("div",{className:"UserMenu",children:Object(A.jsx)(Be,{activities:a})})}a(209),a(210);var Pe=a(140),Fe=a.n(Pe);var Le=function(e){return Object(A.jsx)("div",{className:"cardComponent",children:e.activities.map((function(e,t){return Object(A.jsxs)("div",{className:"card",children:[Object(A.jsx)("div",{className:"card-image",children:Object(A.jsx)("img",{src:"/activities/".concat(e.activityId,"/").concat(e.thumbnail),alt:"Header decoration"})}),Object(A.jsxs)("div",{className:"content",children:[Object(A.jsx)("h4",{children:e.title}),Object(A.jsx)("p",{children:e.description})]}),Object(A.jsx)(ke.a,{component:o.b,to:{pathname:"/activity/".concat(e.activityId)},className:"read-more",style:{textDecoration:"none"},children:Object(A.jsxs)("span",{children:["Start activity ",Object(A.jsx)(Fe.a,{className:"chevron-right"})]})})]},t)}))})},He=a(141),Me=(a(211),function(e){Object(ge.a)(a,e);var t=Object(we.a)(a);function a(e){var n;return Object(fe.a)(this,a),(n=t.call(this,e)).handleClose=function(){localStorage.setItem("onboardingComplete",!0),n.setState({isVisible:!1})},n.state={isVisible:null===localStorage.getItem("onboardingComplete")},n.story=[{component:"modal",intro:!0,children:Object(A.jsx)("p",{children:"Hey there! Welcome to Myo. As this is your first time, could we show you around?"}),className:"introModal"},{component:"speech-bubble",attachToId:"HomeNavbarIcon",children:Object(A.jsx)("p",{children:"This is the Home tab, where you can view all our activities, or you can click Spark, to start your custom creative journey."})},{component:"modal",intro:!1,children:Object(A.jsx)("p",{children:"The main feature of Myo is a custom curated journey of creativity exercises, that adapts and matches what you need."})},{component:"modal",intro:!1,children:Object(A.jsx)("p",{children:"We regularly add more exercises. Good luck with your creativity journey!"})}],n}return Object(ye.a)(a,[{key:"render",value:function(){return Object(A.jsx)(He.a,{story:this.story,isVisible:this.state.isVisible,onClose:this.handleClose})}}]),a}(i.a.Component));a(212);function Ve(e){var t=e.activities.pop(),a="/activities/".concat(t.activityId,"/").concat(t.thumbnail),n="/activity/".concat(t.activityId);return Object(A.jsx)("div",{className:"Hero",style:{backgroundImage:'url("'.concat(a,'"')},children:Object(A.jsxs)("div",{className:"HeroContent",style:{background:"linear-gradient(90deg, rgba(241,152,32,1) 35%, rgba(255,255,255,0) 64%)"},children:[Object(A.jsx)("h1",{children:t.title}),Object(A.jsx)("p",{children:t.description}),Object(A.jsx)(ke.a,{component:o.b,to:{pathname:n,state:{activityId:t.activityId}},className:"HeroLink",style:{textDecoration:"none"},children:Object(A.jsx)("button",{className:"HeroButton",children:"Start now"})})]})})}a(213);var Ee,qe=a(290),Je=a(291),ze=a(316),Re=a(292),De=a(289),Ye=a(293),Ge=a(142),Qe=a.n(Ge);a(214);function $e(e){return Object(A.jsx)(De.a,{item:!0,children:Object(A.jsx)(Q.a,{dense:!1,children:e.activities.map((function(e,t){return Object(A.jsxs)(ke.a,{component:o.b,to:{pathname:"/activity/".concat(e.activityId)},style:{textDecoration:"none",color:"#333"},children:[Object(A.jsxs)($.a,{className:"ListItem",children:[Object(A.jsx)(qe.a,{children:Object(A.jsx)(ze.a,{children:Object(A.jsx)("img",{src:(a=e.thumbnail,n=e.activityId,"/activities/".concat(n,"/").concat(a)),alt:"Activity illustration"})})}),Object(A.jsx)(Z.a,{primary:e.title,secondary:e.description}),Object(A.jsx)(Je.a,{children:Object(A.jsx)(Re.a,{edge:"end",children:Object(A.jsx)(Qe.a,{})})})]}),Object(A.jsx)(Ye.a,{variant:"inset",component:"li"})]},t);var a,n}))})})}function Ze(e){var t=Math.ceil(e.activities.length/2),a=e.activities.splice(0,t),n=e.activities.splice(-t);return Object(A.jsxs)("div",{className:"HeroList",children:[Object(A.jsx)("h1",{children:e.title}),Object(A.jsxs)("div",{className:"HeroListContent",children:[Object(A.jsx)($e,{className:"ActivityAvatarList",activities:a}),Object(A.jsx)($e,{className:"ActivityAvatarList",activities:n})]})]})}function Ke(){var e,t=Object(J.css)(Ee||(Ee=Object(q.a)(["display: block; margin: 0 auto;"]))),a=Object(G.b)(f.activitiesListUrl).data;if(!a)return Object(A.jsx)(R.a,{color:"#F19820",loading:!0,css:t,size:100});var n=function(){(e=Object(Y.a)(a.activities)).map((function(t,a){return e[a].activityId=a+1}))};n();var i=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e.length<1&&n(),t||(t=e.length),Object(Y.a)(Array(t)).map((function(){return e.splice(Math.floor(Math.random()*e.length),1)[0]}))};return Object(A.jsxs)("div",{className:"ViewActivitiesComponent",children:[Object(A.jsx)(Me,{}),Object(A.jsx)(Ve,{activities:i(1)}),Object(A.jsx)(Ze,{activities:i(4),title:"Activities we love right now"}),Object(A.jsx)(Le,{activities:i(3)}),Object(A.jsx)(Ve,{activities:i(1)}),Object(A.jsx)(Ze,{activities:i(4),title:"Trending this week"}),Object(A.jsx)(Le,{activities:i(6)}),Object(A.jsx)(Ve,{activities:i(1)}),Object(A.jsx)(Le,{activities:i(3)})]})}a(215),a(216);function Xe(e){return Object(A.jsxs)("div",{className:"ActivityIntroduction",children:["mp4"===e.activity.thumbnail.split(".").pop()?Object(A.jsx)("video",{className:"ActivityVideo",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,controls:!0,children:Object(A.jsx)("source",{src:"/activities/".concat(e.activityId,"/").concat(e.activity.thumbnail),type:"video/mp4"})}):Object(A.jsx)("img",{src:"/activities/"+e.activityId+"/"+e.activity.thumbnail,alt:"Header decoration"}),Object(A.jsx)("h1",{children:e.activity.title}),Object(A.jsx)("p",{dangerouslySetInnerHTML:{__html:e.activity.description}}),Object(A.jsx)(P.a,{variant:"contained",color:"primary",onClick:e.handleStartActivity,children:"I'm ready"})]})}a(217);var et=a(309),tt=a(302),at=a(306),nt=a(299),it=a(300),st=a(301),rt=(a(218),a(219),a(220),a(221),a(295)),ct=a(314),ot=a(298),lt=a(296),ut=a(297),dt=a(146),jt=(a(222),a(294)),bt=a(6),ht=a(317),mt=Object(jt.a)((function(e){return{root:{width:150+2*e.spacing(3)},margin:{height:e.spacing(3)}}})),pt="0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)",vt=[{value:0,label:"\ud83d\ude1f"},{value:50,label:"\ud83d\ude0c"},{value:100,label:"\ud83e\uddd1\u200d\ud83c\udfa8"}],Ot=Object(bt.a)({root:{color:"#F19820",height:2,padding:"15px 0"},thumb:{height:28,width:28,backgroundColor:"#fff",boxShadow:pt,marginTop:-14,marginLeft:-14,"&:focus, &:hover, &$active":{boxShadow:"0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)","@media (hover: none)":{boxShadow:pt}}},active:{},valueLabel:{left:"calc(-50% + 12px)",top:-22,"& *":{background:"transparent",color:"#000"}},track:{height:2},rail:{height:2,opacity:.5,backgroundColor:"#bfbfbf"},mark:{backgroundColor:"#bfbfbf",height:8,width:1,marginTop:-3},markActive:{opacity:1,backgroundColor:"#F19820"}})(ht.a);function xt(){var e=mt();return Object(A.jsx)("div",{className:e.root,children:Object(A.jsx)(Ot,{"aria-label":"ios slider",defaultValue:75,marks:vt,valueLabelDisplay:"off"})})}var ft;a(223);function yt(e){var t=i.a.useState(""),a=Object(c.a)(t,2),n=a[0],s=a[1];return Object(A.jsxs)(ct.a,{onClose:e.onClose,open:e.open,disableEnforceFocus:!0,children:[Object(A.jsx)(rt.a,{align:"center",id:"dialog-title",children:"Congratulations! \ud83c\udf89"}),Object(A.jsxs)(lt.a,{align:"center",className:"ReviewDialogContent",children:[Object(A.jsxs)(ut.a,{children:["How did you feel?",Object(A.jsx)(xt,{})]}),Object(A.jsxs)(ut.a,{children:["How would you rate this activity?",Object(A.jsx)("br",{}),Object(A.jsx)(dt.a,{})]}),Object(A.jsx)(ut.a,{children:Object(A.jsx)(W.a,{fullWidth:!0,align:"center",id:"feedbackText",multiline:!0,name:"feedbackText",label:"Any notes to yourself?",value:n,onChange:function(e){return s(e.target.value)}})})]}),Object(A.jsxs)(ot.a,{children:[Object(A.jsx)(ke.a,{component:o.b,to:{pathname:"/"},style:{textDecoration:"none"},children:Object(A.jsx)(P.a,{onClick:e.onClose,children:"Skip"})}),Object(A.jsx)(ke.a,{component:o.b,to:{pathname:"/"},style:{textDecoration:"none"},children:Object(A.jsx)(P.a,{variant:"contained",onClick:function(){e.onSubmit()},color:"primary",type:"submit",children:"Done"})})]})]})}function gt(e){var t=i.a.useState(!1),a=Object(c.a)(t,2),s=a[0],r=a[1],o=Object(n.useState)(!1),l=Object(c.a)(o,2),u=l[0],d=l[1];return Object(A.jsxs)("div",{className:"ActivityCarousel",children:[Object(A.jsx)(et.a,{spaceBetween:50,slidesPerView:1,navigation:!0,pagination:{clickable:!0,type:"progressbar"},onReachEnd:function(){return d(!0)},children:e.activity.pages.map((function(t,a){return Object(A.jsxs)(tt.a,{children:["mp4"===t.thumbnail.split(".").pop()?Object(A.jsx)("video",{className:"ActivityVideo",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,controls:!0,children:Object(A.jsx)("source",{src:"/activities/".concat(e.activityId,"/").concat(t.thumbnail),type:"video/mp4"})}):Object(A.jsx)("img",{src:encodeURI("/activities/"+e.activityId+"/"+t.thumbnail),alt:"Header decoration"}),Object(A.jsxs)("div",{className:"text",children:[Object(A.jsx)("h1",{children:t.title}),Object(A.jsx)("p",{dangerouslySetInnerHTML:{__html:t.description}})]})]},a)}))}),u?Object(A.jsx)(P.a,{variant:"contained",onClick:function(){return r(!0)},color:"primary",children:"Finish"}):null,s?Object(A.jsx)(yt,{open:s,onSubmit:function(e){r(!1),I("/api/orders/delete",{feedback:e})},onClose:function(){return r(!1)}}):null]})}function wt(){var e=Object(l.g)().activityId,t=Object(n.useState)(!0),a=Object(c.a)(t,2),i=a[0],s=a[1],r=Object(G.b)("/activities/api/get/".concat(e-1)).data,o=Object(J.css)(ft||(ft=Object(q.a)(["display: block; margin: 0 auto;"])));return r?Object(A.jsx)("div",{className:"Activity",children:i?Object(A.jsx)(Xe,{activityId:e,activity:r.activity,handleStartActivity:function(){return s(!1)}}):Object(A.jsx)(gt,{activityId:e,activity:r.activity})}):Object(A.jsx)(R.a,{color:"#F19820",loading:!0,css:o,size:100})}at.a.use([nt.a,it.a,st.a]);a(224);var kt,St=a(39),Nt=a(55),Ct=a.n(Nt),_t=function(e,t){return"".concat(t?"url(":"","https://awv3node-homepage.surge.sh/build/assets/").concat(e,".svg").concat(t?")":"")},It=window.innerWidth>600?150:window.innerWidth/6,Tt=["30vh","40vh","50vh","60vh","65vh","60vh","50vh","45vh","40vh","35vh","40vh","50vh","60vh","65vh","60vh","50vh","40vh","35vh","40vh","45vh"],At=function(e){var t=e.activities,a=e.offset,n=e.gradient,i=e.onClick;return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(St.b,{offset:a,speed:.2,children:Object(A.jsx)("div",{className:Ct.a.slopeBegin})}),Object(A.jsx)(St.b,{offset:0,speed:0,factor:3,style:{backgroundImage:_t("stars",!0),backgroundSize:"cover"}}),Object(A.jsx)(St.b,{offset:a,speed:.6,onClick:i,children:Object(A.jsx)("div",{className:"".concat(Ct.a.slopeEnd," ").concat(Ct.a[n])})}),Object(A.jsx)(St.b,{className:"".concat(Ct.a.text," ").concat(Ct.a.number),offset:0,speed:.3,children:Object(A.jsx)("span",{children:"Spark"})}),Object(A.jsx)(St.b,{className:"".concat(Ct.a.text," ").concat(Ct.a.description),offset:0,speed:.3,children:Object(A.jsx)("p",{children:"AI creativity in your pocket"})}),Object(A.jsx)(St.b,{offset:.1,speed:.8,style:{opacity:.1},children:Object(A.jsx)("img",{src:_t("cloud"),style:{display:"block",width:"20%",marginBottom:"30%"}})}),Object(A.jsxs)(St.b,{offset:.5,speed:.2,style:{opacity:.2},children:[Object(A.jsx)("img",{src:_t("cloud"),style:{display:"block",width:"10%",marginBottom:"34%"}}),Object(A.jsx)("img",{src:_t("cloud"),style:{display:"block",width:"20%",marginBottom:"50%"}})]}),Object(A.jsxs)(St.b,{offset:.7,speed:-.1,style:{opacity:.4},children:[Object(A.jsx)("img",{src:_t("cloud"),style:{display:"block",width:"20%",marginBottom:"26%"}}),Object(A.jsx)("img",{src:_t("cloud"),style:{display:"block",width:"10%",marginBottom:"16%"}})]}),Object(A.jsxs)(St.b,{offset:1.2,speed:.5,style:{opacity:.1},children:[Object(A.jsx)("img",{src:_t("cloud"),style:{display:"block",width:"20%",marginBottom:"26%"}}),Object(A.jsx)("img",{src:_t("cloud"),style:{display:"block",width:"20%",marginBottom:"40%"}})]}),Object(A.jsxs)(St.b,{offset:1.5,speed:.4,style:{opacity:.6},children:[Object(A.jsx)("img",{src:_t("cloud"),style:{display:"block",width:"20%",marginBottom:"30%"}}),Object(A.jsx)("img",{src:_t("cloud"),style:{display:"block",width:"15%",marginBottom:"35%"}})]}),Object(A.jsx)(St.b,{offset:2,speed:.4,style:{opacity:.6},children:Object(A.jsx)("h1",{children:"You're finished!"})}),t.map((function(e,t){return 0===a?Object(A.jsx)(St.b,{className:"".concat(Ct.a.activityIcon),style:{marginTop:Tt[t],marginLeft:It+=window.innerWidth>600?250:window.innerWidth/4},offset:0,speed:1,children:Object(A.jsx)("span",{children:e.title})},t):null}))]})};function Ut(e){It=window.innerWidth>600?150:window.innerWidth/6;var t=e.activities,a=Object(n.useRef)(null);return Object(A.jsx)("div",{style:{background:"#dfdfdf"},children:Object(A.jsxs)(St.a,{className:Ct.a.container,ref:a,pages:3,horizontal:!0,children:[Object(A.jsx)(At,{activities:t,offset:0,gradient:"pink"}),Object(A.jsx)(At,{activities:t,offset:1,gradient:"teal"}),Object(A.jsx)(At,{activities:t,offset:2,gradient:"tomato"})]})})}var Bt=Object(l.h)((function(){var e=Object(J.css)(kt||(kt=Object(q.a)(["display: block; margin: 0 auto;"]))),t=Object(G.b)(f.onboardingStatusUrl),a=t.data,n=t.mutate,i=Object(G.b)(f.activitiesListUrl).data;return a&&i?a.hasOwnProperty("error")?Object(A.jsx)(oe,{onComplete:n}):Object(A.jsx)("div",{className:"Spark",children:Object(A.jsx)(Ut,{activities:i.activities})}):Object(A.jsx)(R.a,{color:"#F19820",loading:!0,css:e,size:100})})),Wt=a(313),Pt=a(310),Ft=i.a.createContext();function Lt(){var e=i.a.useState(!0),t=Object(c.a)(e,2),a=t[0],s=t[1];Object(n.useEffect)((function(){setTimeout((function(){s(!1)}),1500)}),[]);var r=Object(le.a)({palette:{type:Object(je.a)("(prefers-color-scheme: dark)")?"dark":"light",primary:{main:"#F19820"},secondary:{main:"#CAE8FF"}},typography:{fontFamily:["F37 Ginger","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")},overrides:{MuiTouchRipple:{child:{backgroundColor:"#F19820"}}}}),u=i.a.useState({text:"",severity:"",open:!1}),d=Object(c.a)(u,2),j=d[0],b=d[1],h=function(){b({open:!1})};return Object(A.jsxs)(ue.a,{theme:r,children:[Object(A.jsx)(de.a,{}),Object(A.jsxs)("div",{className:"App",children:[Object(A.jsx)("link",{rel:"shortcut icon",href:"./favicon.ico"}),Object(A.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"}),Object(A.jsx)("header",{className:"App-header",children:Object(A.jsxs)(Ft.Provider,{value:{snackbar:j,setSnackbar:b},children:[Object(A.jsx)(Wt.a,{open:j.open,autoHideDuration:6e3,onClose:h,children:Object(A.jsx)(Pt.a,{onClose:h,severity:j.severity,children:j.text})}),a?Object(A.jsx)(_e,{}):Object(A.jsxs)(o.a,{children:[Object(A.jsx)(Ce,{}),Object(A.jsx)("div",{className:"AppWrapper",children:Object(A.jsxs)(l.d,{children:[Object(A.jsxs)(l.b,{exact:!0,path:"/",children:[" ",Object(A.jsx)(Ke,{})," "]}),Object(A.jsxs)(l.b,{exact:!0,path:"/activity/:activityId",children:[" ",Object(A.jsx)(wt,{})," "]}),Object(A.jsx)(U,{exact:!0,path:"/spark",component:Bt}),Object(A.jsx)(U,{exact:!0,path:"/user",component:We}),Object(A.jsx)(U,{exact:!0,path:"/onboarding",component:oe}),Object(A.jsx)(l.b,{exact:!0,path:"/login",component:F}),Object(A.jsx)(l.b,{exact:!0,path:"/logout",component:L}),Object(A.jsx)(l.b,{exact:!0,path:"/reset",component:M}),Object(A.jsx)(l.b,{exact:!0,path:"/register",component:E}),Object(A.jsx)(l.b,{exact:!0,path:"/confirm/:token",component:D}),Object(A.jsx)(l.b,{exact:!0,path:"/reset/:token",component:H})]})}),Object(A.jsx)(xe,{})]})]})})]})]})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));_.a.interceptors.response.use((function(e){return e}),(function(e){return new Promise((function(t){var a=e.config,n=O();e.response&&401===e.response.status&&e.config&&!e.config.__isRetryRequest&&n&&(a._retry=!0,t(fetch(f.authRefresh,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify({refresh:O})}).then((function(e){return e.json()})).then((function(e){var t=JSON.parse(localStorage.getItem("currentUser"));t.access_token=e.access_token,g.updateUser(t),window.location.reload()}))));return Promise.reject(e)}))})),r.a.render(Object(A.jsx)(G.a,{value:{fetcher:function(e){return _.a.get(e,{headers:{Authorization:"Bearer "+v()}}).then((function(e){return e.data}))}},children:Object(A.jsx)(Lt,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},55:function(e,t,a){e.exports={container:"styles_container__GYYmZ",text:"styles_text__2nqlF",number:"styles_number__Uxrv2",description:"styles_description__1M0dc",activityIcon:"styles_activityIcon__2PYIz",slopeBegin:"styles_slopeBegin__C_PD3",slopeEnd:"styles_slopeEnd__3hgvL",pink:"styles_pink__23YfJ",teal:"styles_teal__1Wtgr",tomato:"styles_tomato__1VsmE"}}},[[225,1,2]]]);
//# sourceMappingURL=main.3cd1cf5a.chunk.js.map