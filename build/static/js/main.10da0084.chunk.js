(this["webpackJsonpmyo-react"]=this["webpackJsonpmyo-react"]||[]).push([[0],{117:function(t,e,c){},120:function(t,e,c){},126:function(t,e,c){},127:function(t,e,c){},128:function(t,e,c){},134:function(t,e,c){},135:function(t,e,c){},136:function(t,e,c){"use strict";c.r(e);var a=c(0),n=c.n(a),i=c(35),s=c.n(i),r=(c(80),c(15)),o=c(16),l=c(18),j=c(17),b=c(14),u=c(9),d=(c(81),c(82),c(38)),h=(c(83),c(154)),O=c(155),v=c(66),p=c.n(v),m=c(67),x=c.n(m),y=c(1);function f(){var t=n.a.useState(0),e=Object(d.a)(t,2),c=e[0],a=e[1];return Object(y.jsxs)(h.a,{value:c,onChange:function(t,e){a(e)},showLabels:!0,className:"navbar",children:[Object(y.jsx)(O.a,{component:b.b,to:"/",id:"HomeNavbarIcon",label:"Home",icon:Object(y.jsx)(p.a,{})}),Object(y.jsx)(O.a,{component:b.b,to:"/spark",id:"SparkNavbarIcon",label:"Spark",icon:Object(y.jsx)(x.a,{})})]})}var g=c(163),k=(c(96),c(68)),N=c.n(k),S=function(t){Object(l.a)(c,t);var e=Object(j.a)(c);function c(){return Object(r.a)(this,c),e.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(y.jsxs)("div",{className:"TopBar",children:[Object(y.jsx)("img",{className:"MyoLogo",src:"/assets/logo.png",alt:"Myo app logo"}),Object(y.jsx)("img",{className:"MyoText",src:"/assets/myo-text.png",alt:"Myo app logo"}),Object(y.jsx)(g.a,{component:b.b,to:"/user",className:"AccountLink",children:Object(y.jsx)(N.a,{fontSize:"large",className:"AccountCircle"})})]})}}]),c}(n.a.Component);c(97);function I(){return Object(y.jsx)("div",{className:"SplashScreen",children:Object(y.jsx)("div",{className:"SplashScreenWrapper",children:Object(y.jsxs)(a.Suspense,{children:[Object(y.jsx)("img",{src:"/assets/myo-text-icon.png",alt:"Myo icon"}),Object(y.jsx)("p",{children:"Spark wonder"})]})})})}c(98);var w=c(21);w.a.init("7n8vr8n6");var C=w.a.build({toolId:"rmokbn"});function A(){return w.a.accessToken()?Object(y.jsxs)("div",{className:"UserMenu",children:[Object(y.jsx)("h1",{children:"Your account"}),Object(y.jsx)(C,{})]}):Object(y.jsx)(u.a,{to:{pathname:"/login"}})}var M=c(36),H=c(31),T=(c(117),c(32)),z=c(37),W=c.n(z),B=(c(120),c(69)),D=c.n(B);var V,L=function(t){var e=function(t){return t+1};return Object(y.jsx)("div",{className:"cardComponent",children:t.cards.map((function(c,a){return Object(y.jsxs)("div",{className:"card",children:[Object(y.jsx)("div",{className:"card-image",children:Object(y.jsx)("img",{src:"/activities/"+e(a)+"/"+c.thumbnail,alt:"Header decoration"})}),Object(y.jsxs)("div",{className:"content",children:[Object(y.jsx)("h4",{children:c.title}),Object(y.jsx)("p",{children:c.description})]}),Object(y.jsx)(g.a,{component:b.b,to:{pathname:"/activity/"+e(a),state:{activityId:t.activityId}},className:"read-more",style:{textDecoration:"none"},children:Object(y.jsxs)("span",{children:["Start activity ",Object(y.jsx)(D.a,{className:"chevron-right"})]})})]},a)}))})},R=c(70),_=(c(121),function(t){Object(l.a)(c,t);var e=Object(j.a)(c);function c(t){var a;return Object(r.a)(this,c),(a=e.call(this,t)).handleClose=function(){localStorage.setItem("onboardingComplete",!0),a.setState({isVisible:!1})},a.state={isVisible:null===localStorage.getItem("onboardingComplete")},a.story=[{component:"modal",intro:!0,children:Object(y.jsx)("p",{children:"Hey there! Welcome to Myo. As this is your first time, could we show you around?"}),className:"introModal"},{component:"speech-bubble",attachToId:"HomeNavbarIcon",children:Object(y.jsx)("p",{children:"This is the Home tab, where you can view all our activities, or you can click Spark, to start your custom creative journey."})},{component:"modal",intro:!1,children:Object(y.jsx)("p",{children:"The main feature of Myo is a custom curated journey of creativity exercises, that adapts and matches what you need."})},{component:"modal",intro:!1,children:Object(y.jsx)("p",{children:"We regularly add more exercises. Good luck with your creativity journey!"})}],a}return Object(o.a)(c,[{key:"render",value:function(){return Object(y.jsx)(R.a,{story:this.story,isVisible:this.state.isVisible,onClose:this.handleClose})}}]),c}(n.a.Component));function F(){var t=Object(T.css)(V||(V=Object(M.a)(["display: block; margin: 0 auto;"]))),e=Object(H.b)("/activities/api/list").data;return e?Object(y.jsxs)("div",{className:"ViewActivitiesComponent",children:[Object(y.jsx)(_,{}),Object(y.jsx)(L,{cards:e.activities})]}):Object(y.jsx)(W.a,{color:"#F19820",loading:!0,css:t,size:100})}c(126);var U=c(156);c(127);function E(t){return Object(y.jsxs)("div",{className:"ActivityIntroduction",children:[Object(y.jsx)("img",{src:"/activities/"+t.activityId+"/"+t.activity.thumbnail,alt:"Header decoration"}),Object(y.jsx)("h1",{children:t.activity.title}),Object(y.jsx)("p",{dangerouslySetInnerHTML:{__html:t.activity.description}}),Object(y.jsx)(U.a,{variant:"contained",color:"primary",onClick:t.handleStartActivity,children:"Start now"})]})}c(128);var G,J=c(162),P=c(160),Y=c(161),$=c(157),q=c(158),K=c(159);c(129),c(130),c(131),c(132);function Q(t){var e=Object(a.useState)(!1),c=Object(d.a)(e,2),n=c[0],i=c[1];return Object(y.jsxs)("div",{className:"ActivityCarousel",children:[Object(y.jsx)(J.a,{spaceBetween:50,slidesPerView:1,navigation:!0,pagination:{clickable:!0,type:"progressbar"},onReachEnd:function(){return i(!0)},children:t.activity.pages.map((function(e,c){return Object(y.jsxs)(P.a,{children:[Object(y.jsx)("img",{src:encodeURI("/activities/"+t.activityId+"/"+e.thumbnail),alt:"Header decoration"}),Object(y.jsxs)("div",{class:"text",children:[Object(y.jsx)("h1",{children:e.title}),Object(y.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]})]},c)}))}),n?Object(y.jsx)(g.a,{component:b.b,to:{pathname:"/"},style:{textDecoration:"none"},children:Object(y.jsx)(U.a,{variant:"contained",color:"primary",children:"Done"})}):null]})}function X(){var t=Object(u.g)().activityId,e=Object(a.useState)(!0),c=Object(d.a)(e,2),n=c[0],i=c[1],s=Object(H.b)("/activities/api/get/".concat(t-1)).data,r=Object(T.css)(G||(G=Object(M.a)(["display: block; margin: 0 auto;"])));return s?Object(y.jsx)("div",{class:"Activity",children:n?Object(y.jsx)(E,{activityId:t,activity:s.activity,handleStartActivity:function(){return i(!1)}}):Object(y.jsx)(Q,{activityId:t,activity:s.activity})}):Object(y.jsx)(W.a,{color:"#F19820",loading:!0,css:r,size:100})}Y.a.use([$.a,q.a,K.a]);var Z=c(71);c(133),c(134);function tt(t){var e=function(){return t.activityId+1},c="url('"+("/activities/"+e()+"/"+t.thumbnail)+"')";return Object(y.jsx)(g.a,{component:b.b,to:{pathname:"/activity/"+e()},className:"ActivityBubble",style:{backgroundColor:t.backgroundColour+"d0",textDecoration:"none"},children:Object(y.jsxs)("div",{className:"ActivityDetails",style:{opacity:t.bubbleSize>50?1:0,transition:"opacity 0.1s ease"},children:[Object(y.jsx)("div",{className:"ActivityThumbnail",style:{backgroundImage:c}}),Object(y.jsx)("h1",{children:t.title})]})})}var et;c(135);var ct=function(){var t=Object(T.css)(et||(et=Object(M.a)(["display: block; margin: 0 auto;"]))),e=Object(H.b)("/activities/api/list").data;return e?Object(y.jsx)("div",{class:"Spark",children:Object(y.jsx)(Z.a,{options:{size:165,minSize:20,gutter:10,provideProps:!0,numCols:5,fringeWidth:120,yRadius:200,xRadius:100,cornerRadius:20,showGuides:!1,compact:!0,gravitation:5},className:"sparkBubbleUi",children:e.activities.map((function(t,e){return Object(y.jsx)(tt,{activityId:e,title:t.title,thumbnail:t.thumbnail,backgroundColour:t.background_colour},e)}))})}):Object(y.jsx)(W.a,{color:"#F19820",loading:!0,css:t,size:100})};w.a.init("7n8vr8n6");var at=w.a.build({toolId:"aaroka"}),nt=function(t){Object(l.a)(c,t);var e=Object(j.a)(c);function c(){return Object(r.a)(this,c),e.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(y.jsx)(at,{})}}]),c}(n.a.Component);w.a.init("7n8vr8n6");var it=w.a.build({toolId:"aaroka"}),st=function(t){Object(l.a)(c,t);var e=Object(j.a)(c);function c(){return Object(r.a)(this,c),e.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(y.jsx)(it,{})}}]),c}(n.a.Component);w.a.init("7n8vr8n6");var rt=w.a.build({toolId:"oadbor"}),ot=function(t){Object(l.a)(c,t);var e=Object(j.a)(c);function c(){return Object(r.a)(this,c),e.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(y.jsx)(rt,{})}}]),c}(n.a.Component),lt=function(t){Object(l.a)(c,t);var e=Object(j.a)(c);function c(){var t;return Object(r.a)(this,c),(t=e.call(this)).state={splashScreen:!0},t}return Object(o.a)(c,[{key:"componentDidMount",value:function(){var t=this;setTimeout((function(){t.setState({splashScreen:!1})}),1500)}},{key:"render",value:function(){return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)("link",{rel:"shortcut icon",href:"./favicon.ico"}),Object(y.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"}),Object(y.jsx)("header",{className:"App-header",children:this.state.splashScreen?Object(y.jsx)(I,{}):Object(y.jsxs)(b.a,{children:[Object(y.jsx)(S,{}),Object(y.jsx)("div",{className:"AppWrapper",children:Object(y.jsxs)(u.d,{children:[Object(y.jsx)(u.b,{exact:!0,path:"/",children:Object(y.jsx)(F,{})}),Object(y.jsx)(u.b,{exact:!0,path:"/activity/:activityId",children:Object(y.jsx)(X,{})}),Object(y.jsx)(u.b,{exact:!0,path:"/spark",children:Object(y.jsx)(ct,{})}),Object(y.jsx)(u.b,{exact:!0,path:"/user",children:Object(y.jsx)(A,{})}),Object(y.jsx)(u.b,{exact:!0,path:"/login",children:Object(y.jsx)(nt,{})}),Object(y.jsx)(u.b,{exact:!0,path:"/signup",children:Object(y.jsx)(st,{})}),Object(y.jsx)(u.b,{exact:!0,path:"/reset",children:Object(y.jsx)(ot,{})})]})}),Object(y.jsx)(f,{})]})})]})}}]),c}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(y.jsx)(H.a,{value:{fetcher:function(){return fetch.apply(void 0,arguments).then((function(t){return t.json()}))}},children:Object(y.jsx)(lt,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},80:function(t,e,c){},81:function(t,e,c){},82:function(t,e,c){},83:function(t,e,c){},96:function(t,e,c){},97:function(t,e,c){},98:function(t,e,c){}},[[136,1,2]]]);
//# sourceMappingURL=main.10da0084.chunk.js.map