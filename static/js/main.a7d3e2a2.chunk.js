(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,n){e.exports=n(141)},140:function(e,t,n){},141:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(9),r=n.n(i),c=n(82),s=n(83),l=n(95),m=n(84),u=n(96),d=n(92),p=n(30),g=n(19),h=n(46),f=n(42),E=n(94),k={NAVER_LOGIN_CALLBACK_URL:encodeURI("http://localhost:8001/auth/callback&state="+window.location.href),KAKAO_LOGIN_CALLBACK_URL:encodeURI("http://localhost:8001/auth/callbackKakao&state="+window.location.href),FACEBOOK_LOGIN_CALLBACK_URL:encodeURI("http://localhost:8001/auth/callbackFacebook&state="+window.location.href),SET_OF_LINKS:[{name:"\uc2a4\ub9c8\ud2b8 \ucee8\uc288\uba38\ub4e4\uc758 \ud2b9\uac00 \uc0c1\ud488 \uc18c\uac1c",image:"https://cafe.pstatic.net/img/sns/cafe_ogtag_270x270_160618.png",link:"https://cafe.naver.com/smartconsumershop"},{name:"\uc2a4\ub9c8\ud2b8 \ucee8\uc288\uba38 \ud2b8\uc704\ud130",image:"https://abs.twimg.com/favicons/favicon.ico",link:"https://twitter.com/SmartConsumer9"},{name:"\uc2a4\ub9c8\ud2b8 \ucee8\uc288\uba38 \uce74\uce74\uc624\uc2a4\ud1a0\ub9ac",image:"https://story-web-0.kakaocdn.net/public/web/story_icon_256x256.png",link:"https://story.kakao.com/smartconsumer9"},{name:"\uc2a4\ub9c8\ud2b8 \ucee8\uc288\uba38 \ube14\ub85c\uadf8",image:"https://stg.smartconsumer.kr/favicon-32x32.png",link:"http://blog.smartconsumer.kr"},{name:"\uc2a4\ub9c8\ud2b8 \ucee8\uc288\uba38 \ub124\uc774\ubc84 \ube14\ub85c\uadf8",image:"https://blogimgs.pstatic.net/nblog/mylog/post/og_default_image_160610.png",link:"https://pooq102.blog.me"}],SET_OF_MENUS:function(){var e=[];return String("\ubca0\uc2a4\ud2b8:best;\uc5ec\uc131\uc758\ub958:women_fashion;\ub0a8\uc131\uc758\ub958:men_fashion;\uc720\uc544\ub3d9:baby;\uc2dd\ud488:food;\ubdf0\ud2f0:beauty;\uc2e0\ubc1c/\uc7a1\ud654:accessories;\uc0dd\ud65c/\ud648:home;\uac00\uc804/\ub514\uc9c0\ud138:digital;\uc2a4\ud3ec\uce20/\uc790\ub3d9\ucc28:sports;e\ucfe0\ud3f0/\ud2f0\ucf13:ticket").split(";").forEach(function(t,n){var a=String(t).split(":");e.push({displayName:a[0],queryName:""+a[1]})}),e}(),THEME:Object(E.a)({typography:{fontFamily:["'Nanum Gothic'","sans-serif"].join(",")}})};var b=n(3),w=n(174),_=n(194),C=n(34),N=n(178),A=n(179),x=n(180),O=n(175),v=n(190),y=n(177),P=Object(w.a)(function(e){return{buttonRoot:{display:"flex"},divider:{width:"1px",background:"#FFFFFF"},buttonIconArea:{width:"35px",height:"35px",display:"flex",justifyContent:"center",alignItems:"center"},buttonIcon:{maxHeight:"100%",maxWidth:"100%"},buttonTextArea:function(e){return{width:"199px",height:"35px",background:e.data&&e.data.backgroundColor?e.data.backgroundColor:"#FFFFFF",display:"flex",justifyContent:"center",alignItems:"center"}},buttonText:function(e){return{fontFamily:"'Nanum Gothic',sans-serif",fontWeight:"bold",fontSize:"12px",color:e.data&&e.data.textColor?e.data.textColor:"#000000",maxHeight:"100%",maxWidth:"100%",marginLeft:"auto",marginRight:"auto"}}}});function I(e){var t=P(e);return o.a.createElement("div",null,e.data&&o.a.createElement("div",{className:t.buttonRoot,onClick:e.onClick},o.a.createElement("div",{className:t.buttonIconArea},o.a.createElement("img",{className:t.buttonIcon,src:e.data.icon,alt:e.data.text})),o.a.createElement("div",{className:t.divider}),o.a.createElement("div",{className:t.buttonTextArea},o.a.createElement("span",{className:t.buttonText},e.data.text))))}var T=Object(w.a)(function(e){return{imageIcon:{height:"100%"},iconRoot:{textAlign:"center"},iconOnly:{height:"40px",marginLeft:"auto",marginRight:"auto"}}});function R(e){var t=T(),n=o.a.useState(null),i=Object(g.a)(n,2),r=i[0],c=i[1],s=o.a.useState({login:!1,token:null,id:null,type:null}),l=Object(g.a)(s,2),m=l[0],u=l[1];function d(){c(null)}function p(t){d(),e.cookies.remove("sc_t",{path:"/",domain:Object({NODE_ENV:"production",PUBLIC_URL:"https://stg.smartconsumer.kr",REACT_APP_LANGUAGE:"ko-KR",REACT_APP_NAME:"\uc2a4\ub9c8\ud2b8\ucee8\uc288\uba38",REACT_APP_TITLE:"\uc2a4\ub9c8\ud2b8\ucee8\uc288\uba38 - \uc778\uacf5\uc9c0\ub2a5 \ucd5c\uc800\uac00 \uc1fc\ud551",REACT_APP_DESCRIPTION:"\uc778\uacf5\uc9c0\ub2a5 \ucd5c\uc800\uac00 \uc1fc\ud551",REACT_APP_AUTHOR_EMAIL:"pooq99@smartconsumer.kr",REACT_APP_KEYWORDS:"\uc624\ud508\ub9c8\ucf13, \uc18c\uc15c\ucee4\uba38\uc2a4, \ud648\uc1fc\ud551, \ubc31\ud654\uc810, \uc138\uc77c, \ud2b9\uac00, \ucfe0\ud321, \uc704\uba54\ud504, \ud2f0\ubaac, \uc704\uba54\uc774\ud06c\ud504\ub77c\uc774\uc2a4, \ud2f0\ucf13\ubaac\uc2a4\ud130, \uc9c0\ub9c8\ucf13, G\ub9c8\ucf13, auction, \uc625\uc158, interpark, \uc778\ud130\ud30c\ud06c, 11\ubc88\uac00, 11st, \ucfe0\ud3f0, \ud2f0\ucf13, \ubc18\uac12, \uc1fc\ud551\ubab0, \uc9c0\uc2dd\uc1fc\ud551, \ud22c\ub370\uc774\uc138\uc77c, todaysale, \ucfe0\ud3f0\ubaa8\uc544, \ucfe0\ud3f0\ucc28\ud2b8, \ud558\ub8e8\ud558\ub098, \ud558\ub8e8\uc138\uc77c, \ubc18\uac12\ud560\uc778, \ubc18\uac12\ucfe0\ud3f0, \ubc18\uac12\ud2f0\ucf13, \ud560\uc778\ucfe0\ud3f0, \uc18c\uc15c\ucee4\uba38\uc2a4 \uc0ac\uc774\ud2b8 \uc21c\uc704",REACT_APP_EVENT_BANNER_PC:"true",REACT_APP_EVENT_BANNER_MOBILE:"true",REACT_APP_MENU_BUTTON:"true",REACT_APP_LOGIN_BUTTON:"true",REACT_APP_MENUS:"\ubca0\uc2a4\ud2b8:best;\uc5ec\uc131\uc758\ub958:women_fashion;\ub0a8\uc131\uc758\ub958:men_fashion;\uc720\uc544\ub3d9:baby;\uc2dd\ud488:food;\ubdf0\ud2f0:beauty;\uc2e0\ubc1c/\uc7a1\ud654:accessories;\uc0dd\ud65c/\ud648:home;\uac00\uc804/\ub514\uc9c0\ud138:digital;\uc2a4\ud3ec\uce20/\uc790\ub3d9\ucc28:sports;e\ucfe0\ud3f0/\ud2f0\ucf13:ticket",REACT_APP_GOOGLE_ANALYTICS:"UA-136592393-4",REACT_APP_PRODUCT_PREFIX:"",REACT_APP_NAVER_CLIENTID:"clPiOGBgLl9V77JONoxB",REACT_APP_NAVER_CALLBACKURL:"http://localhost:8001/auth/callback",REACT_APP_KAKAO_APPKEY:"5d1de99106c0d206dc623bb9e2086f03",REACT_APP_KAKAO_CALLBACKURL:"http://localhost:8001/auth/callbackKakao",REACT_APP_FACEBOOK_APPID:"346171289365431",REACT_APP_FACEBOOK_CALLBACKURL:"http://localhost:8001/auth/callbackFacebook"}).REACT_APP_COOKIE_DOMAIN}),u({login:!1,token:null,id:null,type:null})}function h(e){d();var t="\ub85c\uadf8\uc778",n="";switch(e){case"naver":t="\ub124\uc774\ubc84 \uc544\uc774\ub514\ub85c \ub85c\uadf8\uc778",n="https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=clPiOGBgLl9V77JONoxB&redirect_uri="+k.NAVER_LOGIN_CALLBACK_URL;break;case"kakao":t="\uce74\uce74\uc624 \ub85c\uadf8\uc778",n="https://kauth.kakao.com/oauth/authorize?client_id=5d1de99106c0d206dc623bb9e2086f03&redirect_uri="+k.KAKAO_LOGIN_CALLBACK_URL+"&response_type=code";break;case"facebook":t="\ud398\uc774\uc2a4\ubd81\uc73c\ub85c \ub85c\uadf8\uc778",n="https://www.facebook.com/v3.3/dialog/oauth?client_id=346171289365431&redirect_uri="+k.FACEBOOK_LOGIN_CALLBACK_URL}!function(e,t,n,a){var o=navigator.userAgent,i=function(){return/\b(iPhone|iP[ao]d)/.test(o)||/\b(iP[ao]d)/.test(o)||/Android/i.test(o)||/Mobile/i.test(o)},r="undefined"!=typeof window.screenX?window.screenX:window.screenLeft,c="undefined"!=typeof window.screenY?window.screenY:window.screenTop,s="undefined"!=typeof window.outerWidth?window.outerWidth:document.documentElement.clientWidth,l="undefined"!=typeof window.outerHeight?window.outerHeight:document.documentElement.clientHeight-22,m=i()?null:n,u=i()?null:a,d=r<0?window.screen.width+r:r,p=parseInt(d+(s-m)/2,10),g=parseInt(c+(l-u)/2.5,10),h=[];null!==m&&h.push("width="+m),null!==u&&h.push("height="+u),h.push("left="+p),h.push("top="+g),h.push("scrollbars=1");var f=window.open(e,t,h.join(","));window.focus&&f.focus()}(n,t,500,600)}return Object(a.useEffect)(function(){if(e.cookies&&e.cookies.get("sc_t")){var t=e.cookies.get("sc_t").split(";");t.length<3?u({login:!1,token:null,id:null,type:null}):u({login:!0,token:t[0],id:t[1],type:t[2]})}},[e.cookies,m.login]),o.a.createElement("div",null,o.a.createElement(O.a,{"aria-controls":"login-menu","aria-haspopup":"true",className:t.iconRoot,color:"inherit","aria-label":"Login",onClick:function(e){c(e.currentTarget)}},o.a.createElement("img",{className:t.imageIcon,src:m.id?"https://stg.smartconsumer.kr/assets/icons/mypage.svg":"https://stg.smartconsumer.kr/assets/icons/login.svg",alt:m.id?"\ub85c\uadf8\uc544\uc6c3":"\ub85c\uadf8\uc778"})),m.id?o.a.createElement(v.a,{className:t.loginMenu,id:"login-menu",anchorEl:r,keepMounted:!0,open:Boolean(r),onClose:d},"naver"===m.type&&o.a.createElement(y.a,{className:t.loginMenuItem,onClick:d},o.a.createElement(I,{onClick:function(){return p()},data:{icon:"https://stg.smartconsumer.kr/assets/icons/naver.svg",text:"\ub85c\uadf8\uc544\uc6c3",backgroundColor:"#1EC800",textColor:"#FFFFFF"}})),"kakao"===m.type&&o.a.createElement(y.a,{className:t.loginMenuItem,onClick:d},o.a.createElement(I,{onClick:function(){return p()},data:{icon:"https://stg.smartconsumer.kr/assets/icons/kakao.png",text:"\ub85c\uadf8\uc544\uc6c3",backgroundColor:"#FFEB00",textColor:"#3C1E1E"}})),"facebook"===m.type&&o.a.createElement(y.a,{className:t.loginMenuItem,onClick:d},o.a.createElement(I,{onClick:function(){return p()},data:{icon:"https://stg.smartconsumer.kr/assets/icons/facebook.svg",text:"\ub85c\uadf8\uc544\uc6c3",backgroundColor:"#3b5998",textColor:"#ffffff"}}))):o.a.createElement(v.a,{className:t.loginMenu,id:"login-menu",anchorEl:r,keepMounted:!0,open:Boolean(r),onClose:d},o.a.createElement(y.a,{className:t.loginMenuItem,onClick:d},o.a.createElement(I,{onClick:function(){return h("naver")},data:{icon:"https://stg.smartconsumer.kr/assets/icons/naver.svg",text:"\ub124\uc774\ubc84 \uc544\uc774\ub514\ub85c \ub85c\uadf8\uc778",backgroundColor:"#1EC800",textColor:"#FFFFFF"}})),o.a.createElement(y.a,{className:t.loginMenuItem,onClick:d},o.a.createElement(I,{onClick:function(){return h("kakao")},data:{icon:"https://stg.smartconsumer.kr/assets/icons/kakao.png",text:"\uce74\uce74\uc624 \ub85c\uadf8\uc778",backgroundColor:"#FFEB00",textColor:"#3C1E1E"}})),o.a.createElement(y.a,{className:t.loginMenuItem,onClick:d},o.a.createElement(I,{onClick:function(){return h("facebook")},data:{icon:"https://stg.smartconsumer.kr/assets/icons/facebook.svg",text:"Facebook\uc73c\ub85c \ub85c\uadf8\uc778",backgroundColor:"#3b5998",textColor:"#ffffff"}}))))}var j=n(88),L=n.n(j),F=n(191),S=n(181),B=n(176),U=n(143),M=n(182),K=n(89),G=n.n(K),H=n(90),W=n.n(H),q=Object(w.a)(function(e){return Object(_.a)({root:{paddingTop:56,display:"flex"},menuButton:{marginRight:e.spacing(0)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(f.a)({display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),drawerIconBox:{flexGrow:1,paddingTop:10,width:240},logo:{flexGrow:1},imageIcon:{height:"100%"},iconRoot:{textAlign:"center"},linkIcon:{height:"32px"},iconInstall:{textAlign:"center"},iconHide:{display:"none"}})});function D(e){var t=q(),n=Object(C.a)(),i=Object(a.useState)(!1),r=Object(g.a)(i,2),c=r[0],s=r[1],l=Object(a.useState)(!1),m=Object(g.a)(l,2),u=m[0],d=m[1];function p(){s(!1)}return Object(a.useEffect)(function(){window.addEventListener("beforeinstallprompt",function(e){window.deferredPrompt=e,d(!0)})},[]),o.a.createElement("div",{className:t.root},o.a.createElement(N.a,{position:"fixed",className:Object(b.a)(t.appBar,Object(h.a)({},t.appBarShift,c))},o.a.createElement(A.a,null,o.a.createElement(O.a,{color:"inherit","aria-label":"Open drawer",onClick:function(){s(!0)},edge:"start",className:t.menuButton},o.a.createElement(L.a,null)),o.a.createElement(x.a,{href:"https://stg.smartconsumer.kr/",className:t.logo},o.a.createElement("img",{src:"https://stg.smartconsumer.kr/logo3.png",alt:"\ub85c\uace0"})),o.a.createElement(R,{cookies:e.cookies}),o.a.createElement(O.a,{onClick:function(){var e=window.deferredPrompt;e&&(e.prompt(),e.userChoice.then(function(e){window.deferredPrompt=null,d(!1)}))},className:u?t.iconInstall:t.iconHide},o.a.createElement("img",{className:t.imageIcon,src:"https://stg.smartconsumer.kr/assets/icons/install.svg",alt:"\uc124\uce58"})),o.a.createElement(O.a,{href:"https://stg.smartconsumer.kr/",classes:{root:t.iconRoot}},o.a.createElement("img",{className:t.imageIcon,src:"https://stg.smartconsumer.kr/assets/icons/refresh.svg",alt:"\uc0c8\ub85c\uace0\uce68"})))),o.a.createElement(F.a,{className:t.drawer,variant:"persistent",anchor:"left",open:c,classes:{paper:t.drawerPaper},onClose:p},o.a.createElement("div",{className:t.drawerHeader},o.a.createElement(x.a,{onClick:p,className:t.logo},o.a.createElement("img",{src:"https://stg.smartconsumer.kr/logo3.png",alt:"\ub85c\uace0"})),o.a.createElement(O.a,{onClick:p},"ltr"===n.direction?o.a.createElement(G.a,null):o.a.createElement(W.a,null))),o.a.createElement(S.a,null),o.a.createElement(B.a,null,k.SET_OF_MENUS.map(function(t,n){return o.a.createElement(U.a,{button:!0,key:n,onClick:function(t){return function(t){p(),e.menuIndex!==t&&e.onChangeMenu(t)}(n)}},o.a.createElement(M.a,{primary:t.displayName}))})),o.a.createElement(S.a,null),o.a.createElement("div",{className:t.drawerIconBox},k.SET_OF_LINKS.map(function(e,n){return o.a.createElement(O.a,{key:n,target:"_blank",href:e.link},o.a.createElement("img",{className:t.linkIcon,src:e.image,alt:e.name}))}))))}var V=n(66),z=n(186),Y=n(188),X=n(185),J=n(183),$=n(184),Q=n(43),Z=n(91),ee=n.n(Z),te=Object(w.a)(function(e){return{shareButton:{position:"absolute",right:e.spacing(0),bottom:e.spacing(0)},shareMenu:{},iconOnly:{height:"40px"},imageIcon:{height:"100%"},iconRoot:{textAlign:"center"}}});function ne(e){var t=te(),n=o.a.useState(null),a=Object(g.a)(n,2),i=a[0],r=a[1];function c(){r(null)}function s(t){c();var n="\ub9c1\ud06c \uacf5\uc720\ud558\uae30",a=400,o=600,i=encodeURIComponent(e.item.link),r=encodeURI("["+e.item.mallName+"]"+e.item.title+" "+e.item.price),s="";switch(t){case"naver":n="\ub124\uc774\ubc84 \ube14\ub85c\uadf8\ub85c \uacf5\uc720\ud558\uae30",s="https://share.naver.com/web/shareView.nhn?url="+i+"&title="+r;break;case"twitter":n="\ud2b8\uc704\ud130\ub85c \uacf5\uc720\ud558\uae30",s="https://twitter.com/intent/tweet?text="+r+"%20"+i,o=264;break;case"facebook":n="\ud398\uc774\uc2a4\ubd81\uc73c\ub85c \uacf5\uc720\ud558\uae30",s="https://www.facebook.com/sharer/sharer.php?u="+i+"&quote="+r,a=600;break;case"line":a=600,o=550,n="\ub77c\uc778\uc73c\ub85c \uacf5\uc720\ud558\uae30",s="https://social-plugins.line.me/lineit/share?url="+i+"&text="+r}!function(e,t,n,a){var o=navigator.userAgent,i=function(){return/\b(iPhone|iP[ao]d)/.test(o)||/\b(iP[ao]d)/.test(o)||/Android/i.test(o)||/Mobile/i.test(o)},r="undefined"!=typeof window.screenX?window.screenX:window.screenLeft,c="undefined"!=typeof window.screenY?window.screenY:window.screenTop,s="undefined"!=typeof window.outerWidth?window.outerWidth:document.documentElement.clientWidth,l="undefined"!=typeof window.outerHeight?window.outerHeight:document.documentElement.clientHeight-22,m=i()?null:n,u=i()?null:a,d=r<0?window.screen.width+r:r,p=parseInt(d+(s-m)/2,10),g=parseInt(c+(l-u)/2.5,10),h=[];null!==m&&h.push("width="+m),null!==u&&h.push("height="+u),h.push("left="+p),h.push("top="+g),h.push("scrollbars=1");var f=window.open(e,t,h.join(","));window.focus&&f.focus()}(s,n,a,o)}return o.a.createElement("div",null,o.a.createElement(O.a,{"aria-controls":"simple-menu","aria-haspopup":"true",className:t.shareButton,color:"inherit","aria-label":"Share",onClick:function(e){r(e.currentTarget)}},o.a.createElement(ee.a,null)),o.a.createElement(v.a,{className:t.shareMenu,id:"simple-menu",anchorEl:i,keepMounted:!0,open:Boolean(i),onClose:c},o.a.createElement(O.a,{onClick:function(){return function(){c();var t=/\d+/g,n=parseInt(e.item.price.match(t).join([])),a={objectType:"commerce",content:{title:e.item.title,imageUrl:e.item.image,link:{mobileWebUrl:e.item.link,webUrl:e.item.link}},commerce:{regularPrice:n},buttons:[{title:"\uad6c\ub9e4\ud558\uae30",link:{mobileWebUrl:e.item.link,webUrl:e.item.link}}]};e.item.orgPrice&&e.item.orgPrice.length>0&&(a.commerce.discountPrice=a.commerce.regularPrice,a.commerce.regularPrice=parseInt(e.item.orgPrice.match(t).join([]))),window.Kakao.Link.sendDefault(a)}()}},o.a.createElement("img",{className:t.iconOnly,src:"https://stg.smartconsumer.kr/assets/icons/share_kakao.png",alt:"\uce74\uce74\uc624\ud1a1 \uacf5\uc720\ud558\uae30"})),o.a.createElement(O.a,{onClick:function(){return c(),void window.Kakao.Story.share({url:e.item.link,text:"["+e.item.mallName+"]"+e.item.title+" "+e.item.price})}},o.a.createElement("img",{className:t.iconOnly,src:"https://stg.smartconsumer.kr/assets/icons/share_kakaostory.png",alt:"\uce74\uce74\uc624\uc2a4\ud1a0\ub9ac \uacf5\uc720\ud558\uae30"})),o.a.createElement(O.a,{onClick:function(){return s("naver")}},o.a.createElement("img",{className:t.iconOnly,src:"https://stg.smartconsumer.kr/assets/icons/share_naver.png",alt:"\ub124\uc774\ubc84 \uacf5\uc720\ud558\uae30"})),o.a.createElement(S.a,{light:!0,variant:"middle"}),o.a.createElement(O.a,{onClick:function(){return s("line")}},o.a.createElement("img",{className:t.iconOnly,src:"https://stg.smartconsumer.kr/assets/icons/share_line.png",alt:"\ub77c\uc778 \uacf5\uc720\ud558\uae30"})),o.a.createElement(O.a,{onClick:function(){return s("facebook")}},o.a.createElement("img",{className:t.iconOnly,src:"https://stg.smartconsumer.kr/assets/icons/share_facebook.png",alt:"\ud398\uc774\uc2a4\ubd81 \uacf5\uc720\ud558\uae30"})),o.a.createElement(O.a,{onClick:function(){return s("twitter")}},o.a.createElement("img",{className:t.iconOnly,src:"https://stg.smartconsumer.kr/assets/icons/share_twitter.png",alt:"\ud2b8\uc704\ud130 \uacf5\uc720\ud558\uae30"}))))}var ae=Object(w.a)(function(e){return{card:{width:220,height:380,position:"relative"},media:{width:200,height:200,borderRadius:"5px"},itemTitle:{overflow:"hidden",height:"80px",fontSize:"14px",marginTop:"5px",marginLeft:"10px",marginRight:"10px"},itemPriceArea:{position:"absolute",left:e.spacing(2),bottom:e.spacing(1)},itemPrice:{float:"left",clear:"both",fontWeight:700,fontSize:"20px",marginTop:"2px",lineHeight:"1",letterSpacing:"-.06em",fontStyle:"normal",textAlign:"center"},itemDiscount:{float:"left",fontSize:"14px",color:"#f27935",letterSpacing:"0",verticalAlign:"top",fontWeight:700},itemOrgPrice:{float:"left",marginTop:"1px",marginRight:"4px",marginLeft:"5px",fontWeight:700,fontSize:"14px",color:"#c2c7cc",textDecoration:"line-through",fontStyle:"normal"},sticker:{width:"60px",height:"30px",borderRadius:"10px",marginTop:"2px",left:e.spacing(1)}}});function oe(e){var t="";switch(e){case"\ud2f0\ubaac":t="https://img.linkprice.com/files/glink/tmon/20170627/5951a3c576be9_120_60.jpg";break;case"G\ub9c8\ucf13":t="https://img.linkprice.com/files/stlink/gmarket/0364";break;case"11\ubc88\uac00":t="https://img.linkprice.com/files/glink/11st/20151209/56677fb2594fc_120_60.jpg";break;case"\ucfe0\ud321":t="https://img.linkprice.com/files/glink/coupang/20180115/5a5c6d9d5b3f8_120_60.jpg";break;case"\uc704\uba54\ud504":t="https://image.wemakeprice.com/dealimg2/today_120x60(1).jpg";break;case"GSSHOP":t="https://img.linkprice.com/files/glink/11st/20151209/56677fb2594fc_120_60.jpg"}return t}function ie(e){var t=ae();return o.a.createElement(J.a,{className:t.card,justify:"center"},e.item&&o.a.createElement(x.a,{target:"_blank",href:e.item.link,color:"inherit",className:t.link},o.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},o.a.createElement($.a,{justify:"center",className:t.media,image:e.item.image,title:e.item.title})),o.a.createElement($.a,{className:t.sticker,image:oe(e.item.mallName),title:e.item.mallName}),o.a.createElement(Q.a,{className:t.itemTitle},e.item.title),o.a.createElement("div",{className:t.itemPriceArea},e.item.discount||e.item.orgPrice?o.a.createElement(Q.a,{className:t.itemDiscount},e.item.discount):o.a.createElement(Q.a,{className:t.itemDiscount},"\xa0"),o.a.createElement(Q.a,{className:t.itemOrgPrice},e.item.orgPrice),o.a.createElement(Q.a,{className:t.itemPrice},e.item.price))),o.a.createElement(ne,{item:e.item}))}var re=n(57),ce=n.n(re),se=n(187),le=Object(w.a)(function(e){return{root:{flexGrow:1},scrollOnTop:{opacity:"0.3",position:"fixed",bottom:e.spacing(0),right:e.spacing(0),"&:active":{opacity:"1"}},progress:{position:"fixed",left:"50%",top:"50%"}}});function me(e){var t=le(),n=Object(a.useState)({products:[],lastPage:0,isFetching:!1,queryName:k.SET_OF_MENUS[e.menuIndex?e.menuIndex:0].queryName,hasNext:!0}),i=Object(g.a)(n,2),r=i[0],c=i[1],s=20;return Object(a.useEffect)(function(){function e(){var e=window.innerHeight;document.body.scrollHeight-e-(document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop)>=100||r.isFetching||!r.hasNext||c(Object(f.a)({},r,{isFetching:!0}))}return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}},[r,r.isFetching]),Object(a.useEffect)(function(){var e=!1,t=ce.a.CancelToken.source();if(r.isFetching&&r.hasNext)return function(){var n=r.lastPage+1;ce.a.get("https://api.smartconsumer.kr/api/getProducts?page="+n+"&size="+s+"&name="+r.queryName,{cancelToken:t.token,timeout:6e4}).then(function(t){e||(t.data.products.length>0?c(function(e){return{queryName:r.queryName,lastPage:n,products:[].concat(Object(V.a)(e.products),Object(V.a)(t.data.products)),isFetching:!1,hasNext:!0}}):c(function(e){return Object(f.a)({},r,{hasNext:!1,isFetching:!1})}))}).catch(function(t){e||(ce.a.isCancel(t)?console.log("request cancelled:".concat(t.message)):console.log("another error happened:"+t.message))})}(),function(){e=!0,t.cancel("Cancelling in cleanup")}},[r,r.queryName,r.isFetching,r.lastPage]),Object(a.useEffect)(function(){c({queryName:k.SET_OF_MENUS[e.menuIndex?e.menuIndex:0].queryName,isFetching:!0,products:[],lastPage:0,hasNext:!0})},[e.menuIndex]),o.a.createElement("div",null,o.a.createElement(Y.a,{value:e.menuIndex?e.menuIndex:0,onChange:function(t,n){e.menuIndex!==n&&e.onChangeMenu(n)},variant:"scrollable",scrollButtons:"on"},k.SET_OF_MENUS.map(function(e,t){return o.a.createElement(X.a,{key:t,label:e.displayName})})),o.a.createElement(z.a,{container:!0,justify:"center",className:t.root},o.a.createElement(z.a,{container:!0,justify:"center",spacing:2},r.products.map(function(e){return o.a.createElement(z.a,{key:e.cid,item:!0},o.a.createElement(ie,{item:e}))})),o.a.createElement(z.a,{container:!0,justify:"center",spacing:2},r.isFetching&&o.a.createElement(se.a,{className:t.progress,disableShrink:!0})),o.a.createElement(O.a,{classes:{root:t.scrollOnTop},onClick:function(){window.scroll(0,0)}},o.a.createElement("img",{src:"https://stg.smartconsumer.kr/assets/icons/arrow52.png",alt:"Scroll To Top"}))))}function ue(e){var t=o.a.useState(function(e){for(var t=0;t<k.SET_OF_MENUS.length;t++)if(k.SET_OF_MENUS[t].queryName===e)return t;return 0}(e.match&&e.match.params&&e.match.params.menu)),n=Object(g.a)(t,2),a=n[0],i=n[1];function r(e){i(e)}return o.a.createElement("div",null,o.a.createElement(D,{menuIndex:a,onChangeMenu:r,cookies:e.cookies}),o.a.createElement(me,{menuIndex:a,onChangeMenu:r}))}var de=n(65),pe=n(192),ge=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(pe.a,{theme:k.THEME},o.a.createElement(de.a,null,o.a.createElement(d.a,null,o.a.createElement(p.c,null,o.a.createElement(p.a,{path:"/:menu",render:function(t){return o.a.createElement(ue,Object.assign({},t,{cookies:e.props.cookies}))}}),o.a.createElement(p.a,{path:"/",render:function(t){return o.a.createElement(ue,Object.assign({},t,{cookies:e.props.cookies}))}})))))}}]),t}(a.Component),he=Object(de.b)(ge);n(140),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(he,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[105,1,2]]]);
//# sourceMappingURL=main.a7d3e2a2.chunk.js.map