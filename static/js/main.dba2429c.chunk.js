(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,n){e.exports=n(141)},140:function(e,t,n){},141:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),i=n.n(o),c=n(80),s=n(81),l=n(92),m=n(82),u=n(93),d=n(89),g=n(30),p=n(20),h=n(45),f=n(36),k=n(91),w={NAVER_LOGIN_CALLBACK_URL:encodeURI("https://test.smartconsumer.kr/auth/callback&state="+window.location.href),KAKAO_LOGIN_CALLBACK_URL:encodeURI("https://test.smartconsumer.kr/auth/callbackKakao&state="+window.location.href),FACEBOOK_LOGIN_CALLBACK_URL:encodeURI("https://test.smartconsumer.kr/auth/callbackFacebook&state="+window.location.href),SET_OF_LINKS:[{name:"\uc2a4\ub9c8\ud2b8 \ucee8\uc288\uba38\ub4e4\uc758 \ud2b9\uac00 \uc0c1\ud488 \uc18c\uac1c",image:"https://stg.smartconsumer.kr/assets/icons/share_navercafe.png",link:"https://cafe.naver.com/smartconsumershop"},{name:"\uc2a4\ub9c8\ud2b8 \ucee8\uc288\uba38 \ud2b8\uc704\ud130",image:"https://stg.smartconsumer.kr/assets/icons/share_twitter.png",link:"https://twitter.com/SmartConsumer9"},{name:"\uc2a4\ub9c8\ud2b8 \ucee8\uc288\uba38 \uce74\uce74\uc624\uc2a4\ud1a0\ub9ac",image:"https://stg.smartconsumer.kr/assets/icons/share_kakaostory.png",link:"https://story.kakao.com/smartconsumer9"},{name:"\uc2a4\ub9c8\ud2b8 \ucee8\uc288\uba38 \ube14\ub85c\uadf8",image:"https://stg.smartconsumer.kr/images/favicon-96x96.png",link:"http://blog.smartconsumer.kr"},{name:"\uc2a4\ub9c8\ud2b8 \ucee8\uc288\uba38 \ub124\uc774\ubc84 \ube14\ub85c\uadf8",image:"https://stg.smartconsumer.kr/assets/icons/share_naverblog.png",link:"https://pooq102.blog.me"}],SET_OF_MENUS:function(){var e=[];return String("\ubca0\uc2a4\ud2b8:best;\uc5ec\uc131\uc758\ub958:women_fashion;\ub0a8\uc131\uc758\ub958:men_fashion;\uc720\uc544\ub3d9:baby;\uc2dd\ud488:food;\ubdf0\ud2f0:beauty;\uc2e0\ubc1c/\uc7a1\ud654:accessories;\uc0dd\ud65c/\ud648:home;\uac00\uc804/\ub514\uc9c0\ud138:digital;\uc2a4\ud3ec\uce20/\uc790\ub3d9\ucc28:sports;e\ucfe0\ud3f0/\ud2f0\ucf13:ticket").split(";").forEach(function(t,n){var a=String(t).split(":");e.push({displayName:a[0],queryName:""+a[1]})}),e}(),THEME:Object(k.a)({typography:{fontFamily:["'Nanum Gothic'","sans-serif"].join(",")}})};var E=n(3),b=n(174),v=n(194),x=n(34),N=n(178),y=n(179),C=n(180),O=n(175),_=n(190),j=n(177),I=Object(b.a)(function(e){return{buttonRoot:{display:"flex"},divider:{width:"1px",background:"#FFFFFF"},buttonIconArea:{width:"35px",height:"35px",display:"flex",justifyContent:"center",alignItems:"center"},buttonIcon:{maxHeight:"100%",maxWidth:"100%"},buttonTextArea:function(e){return{width:"199px",height:"35px",background:e.data&&e.data.backgroundColor?e.data.backgroundColor:"#FFFFFF",display:"flex",justifyContent:"center",alignItems:"center"}},buttonText:function(e){return{fontFamily:"'Nanum Gothic',sans-serif",fontWeight:"bold",fontSize:"12px",color:e.data&&e.data.textColor?e.data.textColor:"#000000",maxHeight:"100%",maxWidth:"100%",marginLeft:"auto",marginRight:"auto"}}}});function F(e){var t=I(e);return r.a.createElement("div",null,e.data&&r.a.createElement("div",{className:t.buttonRoot,onClick:e.onClick},r.a.createElement("div",{className:t.buttonIconArea},r.a.createElement("img",{className:t.buttonIcon,src:e.data.icon,alt:e.data.text})),r.a.createElement("div",{className:t.divider}),r.a.createElement("div",{className:t.buttonTextArea},r.a.createElement("span",{className:t.buttonText},e.data.text))))}var S=Object(b.a)(function(e){return{imageIcon:{height:"100%"},iconRoot:{textAlign:"center"},iconOnly:{height:"40px",marginLeft:"auto",marginRight:"auto"}}});function A(e){var t=S(),n=r.a.useState(null),o=Object(p.a)(n,2),i=o[0],c=o[1],s=r.a.useState({login:!1,token:null,id:null,type:null}),l=Object(p.a)(s,2),m=l[0],u=l[1];function d(){c(null)}function g(t){e.cookies.remove("sc_t",{path:"/",domain:".smartconsumer.kr"}),window.location.href="https://stg.smartconsumer.kr"}function h(e){d();var t="\ub85c\uadf8\uc778",n="";switch(e){case"naver":t="\ub124\uc774\ubc84 \uc544\uc774\ub514\ub85c \ub85c\uadf8\uc778",n="https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=tY3NmTo6I13PbdT6MXAQ&redirect_uri="+w.NAVER_LOGIN_CALLBACK_URL;break;case"kakao":t="\uce74\uce74\uc624 \ub85c\uadf8\uc778",n="https://kauth.kakao.com/oauth/authorize?client_id=5d1de99106c0d206dc623bb9e2086f03&redirect_uri="+w.KAKAO_LOGIN_CALLBACK_URL+"&response_type=code";break;case"facebook":t="\ud398\uc774\uc2a4\ubd81\uc73c\ub85c \ub85c\uadf8\uc778",n="https://www.facebook.com/v3.3/dialog/oauth?client_id=346171289365431&redirect_uri="+w.FACEBOOK_LOGIN_CALLBACK_URL}console.log(n),function(e,t,n,a){var r=navigator.userAgent,o=function(){return/\b(iPhone|iP[ao]d)/.test(r)||/\b(iP[ao]d)/.test(r)||/Android/i.test(r)||/Mobile/i.test(r)},i="undefined"!=typeof window.screenX?window.screenX:window.screenLeft,c="undefined"!=typeof window.screenY?window.screenY:window.screenTop,s="undefined"!=typeof window.outerWidth?window.outerWidth:document.documentElement.clientWidth,l="undefined"!=typeof window.outerHeight?window.outerHeight:document.documentElement.clientHeight-22,m=o()?null:n,u=o()?null:a,d=i<0?window.screen.width+i:i,g=parseInt(d+(s-m)/2,10),p=parseInt(c+(l-u)/2.5,10),h=[];null!==m&&h.push("width="+m),null!==u&&h.push("height="+u),h.push("left="+g),h.push("top="+p),h.push("scrollbars=1");var f=window.open(e,t,h.join(","));window.focus&&f.focus()}(n,t,500,600)}return Object(a.useEffect)(function(){if(e.cookies&&e.cookies.get("sc_t")){var t=e.cookies.get("sc_t").split(";");t.length<3?u({login:!1,token:null,id:null,type:null}):u({login:!0,token:t[0],id:t[1],type:t[2]})}},[e.cookies,m.login]),r.a.createElement("div",null,r.a.createElement(O.a,{"aria-controls":"login-menu","aria-haspopup":"true",className:t.iconRoot,color:"inherit","aria-label":"Login",onClick:function(e){c(e.currentTarget)}},r.a.createElement("img",{className:t.imageIcon,src:m.id?"https://stg.smartconsumer.kr/assets/icons/mypage.svg":"https://stg.smartconsumer.kr/assets/icons/login.svg",alt:m.id?"\ub85c\uadf8\uc544\uc6c3":"\ub85c\uadf8\uc778"})),m.id?r.a.createElement(_.a,{className:t.loginMenu,id:"login-menu",anchorEl:i,keepMounted:!0,open:Boolean(i),onClose:d},"naver"===m.type&&r.a.createElement(j.a,{className:t.loginMenuItem},r.a.createElement(F,{onClick:function(){return g()},data:{icon:"https://stg.smartconsumer.kr/assets/icons/naver.svg",text:"\ub85c\uadf8\uc544\uc6c3",backgroundColor:"#1EC800",textColor:"#FFFFFF"}})),"kakao"===m.type&&r.a.createElement(j.a,{className:t.loginMenuItem},r.a.createElement(F,{onClick:function(){return g()},data:{icon:"https://stg.smartconsumer.kr/assets/icons/kakao.png",text:"\ub85c\uadf8\uc544\uc6c3",backgroundColor:"#FFEB00",textColor:"#3C1E1E"}})),"facebook"===m.type&&r.a.createElement(j.a,{className:t.loginMenuItem},r.a.createElement(F,{onClick:function(){return g()},data:{icon:"https://stg.smartconsumer.kr/assets/icons/facebook.svg",text:"\ub85c\uadf8\uc544\uc6c3",backgroundColor:"#3b5998",textColor:"#ffffff"}}))):r.a.createElement(_.a,{className:t.loginMenu,id:"login-menu",anchorEl:i,keepMounted:!0,open:Boolean(i),onClose:d},r.a.createElement(j.a,{className:t.loginMenuItem,onClick:d},r.a.createElement(F,{onClick:function(){return h("naver")},data:{icon:"https://stg.smartconsumer.kr/assets/icons/naver.svg",text:"\ub124\uc774\ubc84 \uc544\uc774\ub514\ub85c \ub85c\uadf8\uc778",backgroundColor:"#1EC800",textColor:"#FFFFFF"}})),r.a.createElement(j.a,{className:t.loginMenuItem,onClick:d},r.a.createElement(F,{onClick:function(){return h("kakao")},data:{icon:"https://stg.smartconsumer.kr/assets/icons/kakao.png",text:"\uce74\uce74\uc624 \ub85c\uadf8\uc778",backgroundColor:"#FFEB00",textColor:"#3C1E1E"}})),r.a.createElement(j.a,{className:t.loginMenuItem,onClick:d},r.a.createElement(F,{onClick:function(){return h("facebook")},data:{icon:"https://stg.smartconsumer.kr/assets/icons/facebook.svg",text:"Facebook\uc73c\ub85c \ub85c\uadf8\uc778",backgroundColor:"#3b5998",textColor:"#ffffff"}}))))}var L=n(85),T=n.n(L),P=n(191),R=n(181),M=n(176),W=n(143),U=n(182),B=n(86),H=n.n(B),K=n(87),q=n.n(K),G=n(53),z=n.n(G),D=Object(b.a)(function(e){return Object(v.a)({root:{paddingTop:56,display:"flex"},menuButton:{marginRight:e.spacing(0)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(f.a)({display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),drawerIconBox:{flexGrow:1,paddingTop:10,marginLeft:20,width:220},logo:{flexGrow:1},imageIcon:{height:"100%"},iconRoot:{textAlign:"center"},linkIcon:{height:"40px"},iconInstall:{textAlign:"center"},iconHide:{display:"none"}})});function X(e){var t=D(),n=Object(x.a)(),o=Object(a.useState)(!1),i=Object(p.a)(o,2),c=i[0],s=i[1],l=Object(a.useState)(!1),m=Object(p.a)(l,2),u=m[0],d=m[1];function g(){s(!1)}return Object(a.useEffect)(function(){window.addEventListener("beforeinstallprompt",function(e){window.deferredPrompt=e,d(!0)})},[]),r.a.createElement("header",{className:t.root},r.a.createElement(N.a,{position:"fixed",className:Object(E.a)(t.appBar,Object(h.a)({},t.appBarShift,c))},r.a.createElement(y.a,null,r.a.createElement(O.a,{color:"inherit","aria-label":"Open drawer",onClick:function(){s(!0)},edge:"start",className:t.menuButton},r.a.createElement(T.a,null)),r.a.createElement(C.a,{href:"https://stg.smartconsumer.kr/",className:t.logo},r.a.createElement("img",{src:"https://stg.smartconsumer.kr/logo3.png",alt:"\ub85c\uace0"})),r.a.createElement(A,{cookies:e.cookies}),r.a.createElement(O.a,{onClick:function(){var e=window.deferredPrompt;e&&(e.prompt(),e.userChoice.then(function(e){window.deferredPrompt=null,d(!1)}))},className:u?t.iconInstall:t.iconHide},r.a.createElement("img",{className:t.imageIcon,src:"https://stg.smartconsumer.kr/assets/icons/install.svg",alt:"\uc124\uce58"})),r.a.createElement(O.a,{href:"https://stg.smartconsumer.kr/",classes:{root:t.iconRoot}},r.a.createElement("img",{className:t.imageIcon,src:"https://stg.smartconsumer.kr/assets/icons/refresh.svg",alt:"\uc0c8\ub85c\uace0\uce68"})))),r.a.createElement(P.a,{className:t.drawer,variant:"persistent",anchor:"left",open:c,classes:{paper:t.drawerPaper},onClose:g},r.a.createElement("div",{className:t.drawerHeader},r.a.createElement(C.a,{onClick:g,className:t.logo},r.a.createElement("img",{src:"https://stg.smartconsumer.kr/logo3.png",alt:"\ub85c\uace0"})),r.a.createElement(O.a,{onClick:g},"ltr"===n.direction?r.a.createElement(H.a,null):r.a.createElement(q.a,null))),r.a.createElement(R.a,null),r.a.createElement(M.a,null,w.SET_OF_MENUS.map(function(t,n){return r.a.createElement(W.a,{button:!0,key:n,onClick:function(t){return function(t){g(),e.menuIndex!==t&&e.onChangeMenu(t)}(n)}},r.a.createElement(U.a,{primary:t.displayName}))})),r.a.createElement(R.a,null),r.a.createElement("div",{className:t.drawerIconBox},w.SET_OF_LINKS.map(function(e,n){return r.a.createElement(z.a,{key:n},r.a.createElement(O.a,{target:"_blank",rel:"noopener noreferrer",href:e.link},r.a.createElement("img",{className:t.linkIcon,src:e.image,alt:e.name})))}))))}var Y=n(65),V=n(186),J=n(188),Q=n(185),$=n(183),Z=n(184),ee=n(43),te=n(88),ne=n.n(te),ae=Object(b.a)(function(e){return{shareButton:{position:"absolute",right:e.spacing(0),bottom:e.spacing(0)},shareMenu:{},iconOnly:{height:"40px"},imageIcon:{height:"100%"},iconRoot:{textAlign:"center"}}});function re(e){var t=ae(),n=r.a.useState(null),a=Object(p.a)(n,2),o=a[0],i=a[1];function c(){i(null)}function s(t){c();var n="\ub9c1\ud06c \uacf5\uc720\ud558\uae30",a=400,r=600,o=encodeURIComponent(e.item.link),i=encodeURI("["+e.item.mallName+"]"+e.item.title+" "+e.item.price),s="";switch(t){case"naver":n="\ub124\uc774\ubc84 \ube14\ub85c\uadf8\ub85c \uacf5\uc720\ud558\uae30",s="https://share.naver.com/web/shareView.nhn?url="+o+"&title="+i;break;case"twitter":n="\ud2b8\uc704\ud130\ub85c \uacf5\uc720\ud558\uae30",s="https://twitter.com/intent/tweet?text="+i+"%20"+o,r=264;break;case"facebook":n="\ud398\uc774\uc2a4\ubd81\uc73c\ub85c \uacf5\uc720\ud558\uae30",s="https://www.facebook.com/sharer/sharer.php?u="+o+"&quote="+i,a=600;break;case"line":a=600,r=550,n="\ub77c\uc778\uc73c\ub85c \uacf5\uc720\ud558\uae30",s="https://social-plugins.line.me/lineit/share?url="+o+"&text="+i}!function(e,t,n,a){var r=navigator.userAgent,o=function(){return/\b(iPhone|iP[ao]d)/.test(r)||/\b(iP[ao]d)/.test(r)||/Android/i.test(r)||/Mobile/i.test(r)},i="undefined"!=typeof window.screenX?window.screenX:window.screenLeft,c="undefined"!=typeof window.screenY?window.screenY:window.screenTop,s="undefined"!=typeof window.outerWidth?window.outerWidth:document.documentElement.clientWidth,l="undefined"!=typeof window.outerHeight?window.outerHeight:document.documentElement.clientHeight-22,m=o()?null:n,u=o()?null:a,d=i<0?window.screen.width+i:i,g=parseInt(d+(s-m)/2,10),p=parseInt(c+(l-u)/2.5,10),h=[];null!==m&&h.push("width="+m),null!==u&&h.push("height="+u),h.push("left="+g),h.push("top="+p),h.push("scrollbars=1");var f=window.open(e,t,h.join(","));window.focus&&f.focus()}(s,n,a,r)}return r.a.createElement("div",null,r.a.createElement(O.a,{"aria-controls":"simple-menu","aria-haspopup":"true",className:t.shareButton,color:"inherit","aria-label":"Share",onClick:function(e){i(e.currentTarget)}},r.a.createElement(ne.a,null)),r.a.createElement(_.a,{className:t.shareMenu,id:"simple-menu",anchorEl:o,keepMounted:!0,open:Boolean(o),onClose:c},r.a.createElement(O.a,{onClick:function(){return function(){c();var t=/\d+/g,n=parseInt(e.item.price.match(t).join([])),a={objectType:"commerce",content:{title:e.item.title,imageUrl:e.item.image,link:{mobileWebUrl:e.item.link,webUrl:e.item.link}},commerce:{regularPrice:n},buttons:[{title:"\uad6c\ub9e4\ud558\uae30",link:{mobileWebUrl:e.item.link,webUrl:e.item.link}}]};e.item.orgPrice&&e.item.orgPrice.length>0&&(a.commerce.discountPrice=a.commerce.regularPrice,a.commerce.regularPrice=parseInt(e.item.orgPrice.match(t).join([]))),window.Kakao.Link.sendDefault(a)}()}},r.a.createElement("img",{className:t.iconOnly,src:"https://stg.smartconsumer.kr/assets/icons/share_kakao.png",alt:"\uce74\uce74\uc624\ud1a1 \uacf5\uc720\ud558\uae30"})),r.a.createElement(O.a,{onClick:function(){return c(),void window.Kakao.Story.share({url:e.item.link,text:"["+e.item.mallName+"]"+e.item.title+" "+e.item.price})}},r.a.createElement("img",{className:t.iconOnly,src:"https://stg.smartconsumer.kr/assets/icons/share_kakaostory.png",alt:"\uce74\uce74\uc624\uc2a4\ud1a0\ub9ac \uacf5\uc720\ud558\uae30"})),r.a.createElement(O.a,{onClick:function(){return s("naver")}},r.a.createElement("img",{className:t.iconOnly,src:"https://stg.smartconsumer.kr/assets/icons/naver.svg",alt:"\ub124\uc774\ubc84 \uacf5\uc720\ud558\uae30"})),r.a.createElement(R.a,{light:!0,variant:"middle"}),r.a.createElement(O.a,{onClick:function(){return s("line")}},r.a.createElement("img",{className:t.iconOnly,src:"https://stg.smartconsumer.kr/assets/icons/share_line.png",alt:"\ub77c\uc778 \uacf5\uc720\ud558\uae30"})),r.a.createElement(O.a,{onClick:function(){return s("facebook")}},r.a.createElement("img",{className:t.iconOnly,src:"https://stg.smartconsumer.kr/assets/icons/facebook.svg",alt:"\ud398\uc774\uc2a4\ubd81 \uacf5\uc720\ud558\uae30"})),r.a.createElement(O.a,{onClick:function(){return s("twitter")}},r.a.createElement("img",{className:t.iconOnly,src:"https://stg.smartconsumer.kr/assets/icons/share_twitter.png",alt:"\ud2b8\uc704\ud130 \uacf5\uc720\ud558\uae30"}))))}var oe=Object(b.a)(function(e){return{card:{width:(window.innerWidth-32)/2<220?(window.innerWidth-32)/2:220,height:(window.innerWidth-32)/2<200?380-(200-(window.innerWidth-32)/2):380,position:"relative"},media:{width:"100%",height:(window.innerWidth-32)/2<200?(window.innerWidth-32)/2:200,borderRadius:"5px"},itemTitle:{overflow:"hidden",height:"80px",fontSize:"14px",marginTop:"5px",marginLeft:"10px",marginRight:"10px"},itemPriceArea:{position:"absolute",left:e.spacing(2),bottom:e.spacing(1)},itemPrice:{float:"left",clear:"both",fontWeight:700,fontSize:"20px",marginTop:"2px",lineHeight:"1",letterSpacing:"-.06em",fontStyle:"normal",textAlign:"center"},itemDiscount:{float:"left",fontSize:"14px",color:"#C5500D",letterSpacing:"0",verticalAlign:"top",fontWeight:700},itemOrgPrice:{float:"left",marginTop:"1px",marginRight:"4px",marginLeft:"5px",fontWeight:700,fontSize:"14px",color:"#6E7481",textDecoration:"line-through",fontStyle:"normal"},sticker:{width:"60px",height:"30px",borderRadius:"10px",marginTop:"2px",left:e.spacing(1)}}});function ie(e){var t="";switch(e){case"\ud2f0\ubaac":t="https://img.linkprice.com/files/glink/tmon/20170627/5951a3c576be9_120_60.jpg";break;case"G\ub9c8\ucf13":t="https://img.linkprice.com/files/stlink/gmarket/0364";break;case"11\ubc88\uac00":t="https://img.linkprice.com/files/glink/11st/20151209/56677fb2594fc_120_60.jpg";break;case"\ucfe0\ud321":t="https://img.linkprice.com/files/glink/coupang/20180115/5a5c6d9d5b3f8_120_60.jpg";break;case"\uc704\uba54\ud504":t="https://image.wemakeprice.com/dealimg2/today_120x60(1).jpg";break;case"GSSHOP":t="https://img.linkprice.com/files/glink/gseshop/12060.jpg"}return t}function ce(e){var t=oe();return r.a.createElement($.a,{className:t.card,justify:"center"},e.item&&r.a.createElement(C.a,{target:"_blank",rel:"noopener noreferrer",href:e.item.link,color:"inherit",className:t.link},r.a.createElement(z.a,null,r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement(Z.a,{justify:"center",className:t.media,image:e.item.image,title:e.item.title})),r.a.createElement(Z.a,{className:t.sticker,image:ie(e.item.mallName),title:e.item.mallName})),r.a.createElement(ee.a,{className:t.itemTitle},e.item.title),r.a.createElement("div",{className:t.itemPriceArea},e.item.discount||e.item.orgPrice?r.a.createElement(ee.a,{className:t.itemDiscount},e.item.discount):r.a.createElement(ee.a,{className:t.itemDiscount},"\xa0"),r.a.createElement(ee.a,{className:t.itemOrgPrice},e.item.orgPrice),r.a.createElement(ee.a,{className:t.itemPrice},e.item.price))),r.a.createElement(re,{item:e.item}))}var se=n(55),le=n.n(se),me=n(187),ue=Object(b.a)(function(e){return{root:{flexGrow:1},scrollOnTop:{opacity:"0.3",position:"fixed",bottom:e.spacing(0),right:e.spacing(0),"&:active":{opacity:"1"}},progress:{position:"fixed",left:"50%",top:"50%"}}});function de(e){var t=ue(),n=Object(a.useState)({products:[],lastPage:0,isFetching:!1,queryName:w.SET_OF_MENUS[e.menuIndex?e.menuIndex:0].queryName,hasNext:!0,hasError:null}),o=Object(p.a)(n,2),i=o[0],c=o[1],s=20;return Object(a.useEffect)(function(){function e(){var e=window.innerHeight;document.body.scrollHeight-e-(document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop)>=100||i.isFetching||!i.hasNext||c(Object(f.a)({},i,{isFetching:!0}))}return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}},[i,i.isFetching]),Object(a.useEffect)(function(){var e=!1,t=le.a.CancelToken.source();if(i.isFetching&&i.hasNext)return function(){var n=i.lastPage+1;le.a.get("https://test.smartconsumer.kr/api/getProducts?page="+n+"&size="+s+"&name="+i.queryName,{cancelToken:t.token,timeout:6e4}).then(function(t){e||(t.data.products.length>0?c(function(e){return{queryName:i.queryName,lastPage:n,products:[].concat(Object(Y.a)(e.products),Object(Y.a)(t.data.products)),isFetching:!1,hasNext:!0,hasError:null}}):c(function(e){return Object(f.a)({},i,{hasNext:!1,isFetching:!1,hasError:null})}))}).catch(function(t){e||(le.a.isCancel(t)?console.log("request cancelled:".concat(t.message)):(console.log("another error happened:"+t.message),c(function(e){return Object(f.a)({},i,{isFetching:!1,hasError:t.message})})))})}(),function(){e=!0,t.cancel("Cancelling in cleanup")}},[i,i.queryName,i.isFetching,i.lastPage]),Object(a.useEffect)(function(){c({queryName:w.SET_OF_MENUS[e.menuIndex?e.menuIndex:0].queryName,isFetching:!0,products:[],lastPage:0,hasNext:!0,hasError:!1})},[e.menuIndex]),r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement(J.a,{value:e.menuIndex?e.menuIndex:0,onChange:function(t,n){e.menuIndex!==n&&e.onChangeMenu(n)},variant:"scrollable",scrollButtons:"on"},w.SET_OF_MENUS.map(function(e,t){return r.a.createElement(Q.a,{key:t,label:e.displayName})}))),r.a.createElement(V.a,{container:!0,justify:"center",className:t.root},r.a.createElement("main",null,r.a.createElement(V.a,{container:!0,justify:"center",spacing:2},i.products.map(function(e){return r.a.createElement(V.a,{key:e.cid,item:!0},r.a.createElement(ce,{item:e}))}))),r.a.createElement(V.a,{container:!0,justify:"center",spacing:2},i.hasError?i.hasError:i.isFetching&&r.a.createElement(me.a,{className:t.progress,disableShrink:!0})),r.a.createElement(O.a,{classes:{root:t.scrollOnTop},onClick:function(){window.scroll(0,0)}},r.a.createElement("img",{src:"https://stg.smartconsumer.kr/assets/icons/arrow52.png",alt:"Scroll To Top"}))))}function ge(e){var t=r.a.useState(function(e){for(var t=0;t<w.SET_OF_MENUS.length;t++)if(w.SET_OF_MENUS[t].queryName===e)return t;return 0}(e.match&&e.match.params&&e.match.params.menu)),n=Object(p.a)(t,2),a=n[0],o=n[1];function i(e){o(e)}return r.a.createElement("div",null,r.a.createElement(X,{menuIndex:a,onChangeMenu:i,cookies:e.cookies}),r.a.createElement(de,{menuIndex:a,onChangeMenu:i}))}var pe=n(64),he=n(192),fe=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(he.a,{theme:w.THEME},r.a.createElement(pe.a,null,r.a.createElement(d.a,null,r.a.createElement(g.c,null,r.a.createElement(g.a,{path:"/:menu",render:function(t){return r.a.createElement(ge,Object.assign({},t,{cookies:e.props.cookies}))}}),r.a.createElement(g.a,{path:"/",render:function(t){return r.a.createElement(ge,Object.assign({},t,{cookies:e.props.cookies}))}})))))}}]),t}(a.Component),ke=Object(pe.b)(fe),we=(n(140),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function Ee(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(r.a.createElement(ke,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("https://stg.smartconsumer.kr",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("https://stg.smartconsumer.kr","/service-worker.js");we?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Ee(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):Ee(t,e)})}}()}},[[102,1,2]]]);
//# sourceMappingURL=main.dba2429c.chunk.js.map