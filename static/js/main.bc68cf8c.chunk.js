(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,a){e.exports=a(143)},142:function(e,t,a){},143:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(8),r=a.n(i),c=a(83),s=a(84),l=a(95),m=a(85),u=a(96),d=a(92),g=a(33),h=a(20),p=a(46),f=a(31),E=a(94),k={NAVER_LOGIN_CALLBACK_URL:encodeURI("https://test.smartconsumer.kr/auth/callback&state="+window.location.href),KAKAO_LOGIN_CALLBACK_URL:encodeURI("https://test.smartconsumer.kr/auth/callbackKakao&state="+window.location.href),FACEBOOK_LOGIN_CALLBACK_URL:encodeURI("https://test.smartconsumer.kr/auth/callbackFacebook&state="+window.location.href),SET_OF_LINKS:[{name:"\uc2a4\ub9c8\ud2b8 \ucee8\uc288\uba38\ub4e4\uc758 \ud2b9\uac00 \uc0c1\ud488 \uc18c\uac1c",image:"https://stg.smartconsumer.kr/assets/icons/share_navercafe.png",link:"https://cafe.naver.com/smartconsumershop"},{name:"\uc2a4\ub9c8\ud2b8 \ucee8\uc288\uba38 \ud2b8\uc704\ud130",image:"https://stg.smartconsumer.kr/assets/icons/share_twitter.png",link:"https://twitter.com/SmartConsumer9"},{name:"\uc2a4\ub9c8\ud2b8 \ucee8\uc288\uba38 \uce74\uce74\uc624\uc2a4\ud1a0\ub9ac",image:"https://stg.smartconsumer.kr/assets/icons/share_kakaostory.png",link:"https://story.kakao.com/smartconsumer9"},{name:"\uc2a4\ub9c8\ud2b8 \ucee8\uc288\uba38 \ube14\ub85c\uadf8",image:"https://stg.smartconsumer.kr/images/smartconsumer-96.png",link:"http://blog.smartconsumer.kr"},{name:"\uc2a4\ub9c8\ud2b8 \ucee8\uc288\uba38 \ub124\uc774\ubc84 \ube14\ub85c\uadf8",image:"https://stg.smartconsumer.kr/assets/icons/share_naverblog.png",link:"https://pooq102.blog.me"}],SET_OF_MENUS:function(){var e=[];return String("\uad6d\ub0b4\uc5ec\ud589:travel_domestic;\ud574\uc678\uc5ec\ud589:travel_international").split(";").forEach(function(t,a){var n=String(t).split(":");e.push({displayName:n[0],queryName:""+n[1]})}),e}(),THEME:Object(E.a)({palette:{primary:{main:"#aec3dc"},secondary:{main:"#5592cc"}},typography:{fontFamily:["'Nanum Gothic'","sans-serif"].join(",")}})};var w=a(3),b=a(177),v=a(197),x=a(39),N=a(181),y=a(182),C=a(183),O=a(178),F=a(194),j=a(180),S=Object(b.a)(function(e){return{buttonRoot:{display:"flex"},divider:{width:"1px",background:"#FFFFFF"},buttonIconArea:{width:"35px",height:"35px",display:"flex",justifyContent:"center",alignItems:"center"},buttonIcon:{maxHeight:"100%",maxWidth:"100%"},buttonTextArea:function(e){return{width:"199px",height:"35px",background:e.data&&e.data.backgroundColor?e.data.backgroundColor:"#FFFFFF",display:"flex",justifyContent:"center",alignItems:"center"}},buttonText:function(e){return{fontFamily:"'Nanum Gothic',sans-serif",fontWeight:"bold",fontSize:"12px",color:e.data&&e.data.textColor?e.data.textColor:"#000000",maxHeight:"100%",maxWidth:"100%",marginLeft:"auto",marginRight:"auto"}}}});function I(e){var t=S(e);return o.a.createElement("div",null,e.data&&o.a.createElement("div",{className:t.buttonRoot,onClick:e.onClick},o.a.createElement("div",{className:t.buttonIconArea},o.a.createElement("img",{className:t.buttonIcon,src:e.data.icon,alt:e.data.text})),o.a.createElement("div",{className:t.divider}),o.a.createElement("div",{className:t.buttonTextArea},o.a.createElement("span",{className:t.buttonText},e.data.text))))}var _=Object(b.a)(function(e){return{imageIcon:{height:"100%"},iconRoot:{textAlign:"center"},iconOnly:{height:"40px",marginLeft:"auto",marginRight:"auto"}}});function z(e){var t=_(),a=o.a.useState(null),i=Object(h.a)(a,2),r=i[0],c=i[1],s=o.a.useState({login:!1,token:null,id:null,type:null}),l=Object(h.a)(s,2),m=l[0],u=l[1];function d(){c(null)}function g(t){e.cookies.remove("sc_t",{path:"/",domain:".smartconsumer.kr"}),window.location.href="https://stg.smartconsumer.kr"}function p(e){d();var t="\ub85c\uadf8\uc778",a="";switch(e){case"naver":t="\ub124\uc774\ubc84 \uc544\uc774\ub514\ub85c \ub85c\uadf8\uc778",a="https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=tY3NmTo6I13PbdT6MXAQ&redirect_uri="+k.NAVER_LOGIN_CALLBACK_URL;break;case"kakao":t="\uce74\uce74\uc624 \ub85c\uadf8\uc778",a="https://kauth.kakao.com/oauth/authorize?client_id=5d1de99106c0d206dc623bb9e2086f03&redirect_uri="+k.KAKAO_LOGIN_CALLBACK_URL+"&response_type=code";break;case"facebook":t="\ud398\uc774\uc2a4\ubd81\uc73c\ub85c \ub85c\uadf8\uc778",a="https://www.facebook.com/v3.3/dialog/oauth?client_id=346171289365431&redirect_uri="+k.FACEBOOK_LOGIN_CALLBACK_URL}!function(e,t,a,n){var o=navigator.userAgent,i=function(){return/\b(iPhone|iP[ao]d)/.test(o)||/\b(iP[ao]d)/.test(o)||/Android/i.test(o)||/Mobile/i.test(o)},r="undefined"!=typeof window.screenX?window.screenX:window.screenLeft,c="undefined"!=typeof window.screenY?window.screenY:window.screenTop,s="undefined"!=typeof window.outerWidth?window.outerWidth:document.documentElement.clientWidth,l="undefined"!=typeof window.outerHeight?window.outerHeight:document.documentElement.clientHeight-22,m=i()?null:a,u=i()?null:n,d=r<0?window.screen.width+r:r,g=parseInt(d+(s-m)/2,10),h=parseInt(c+(l-u)/2.5,10),p=[];null!==m&&p.push("width="+m),null!==u&&p.push("height="+u),p.push("left="+g),p.push("top="+h),p.push("scrollbars=1");var f=window.open(e,t,p.join(","));window.focus&&f.focus()}(a,t,500,600)}return Object(n.useEffect)(function(){if(e.cookies&&e.cookies.get("sc_t")){var t=e.cookies.get("sc_t").split(";");t.length<3?u({login:!1,token:null,id:null,type:null}):u({login:!0,token:t[0],id:t[1],type:t[2]})}},[e.cookies,m.login]),o.a.createElement("div",null,o.a.createElement(O.a,{"aria-controls":"login-menu","aria-haspopup":"true",className:t.iconRoot,color:"inherit","aria-label":"Login",onClick:function(e){c(e.currentTarget)}},o.a.createElement("img",{className:t.imageIcon,src:m.id?"https://stg.smartconsumer.kr/assets/icons/mypage.svg":"https://stg.smartconsumer.kr/assets/icons/login.svg",alt:m.id?"\ub85c\uadf8\uc544\uc6c3":"\ub85c\uadf8\uc778"})),m.id?o.a.createElement(F.a,{className:t.loginMenu,id:"login-menu",anchorEl:r,keepMounted:!0,open:Boolean(r),onClose:d},"naver"===m.type&&o.a.createElement(j.a,{className:t.loginMenuItem},o.a.createElement(I,{onClick:function(){return g()},data:{icon:"https://stg.smartconsumer.kr/assets/icons/naver.svg",text:"\ub85c\uadf8\uc544\uc6c3",backgroundColor:"#1EC800",textColor:"#FFFFFF"}})),"kakao"===m.type&&o.a.createElement(j.a,{className:t.loginMenuItem},o.a.createElement(I,{onClick:function(){return g()},data:{icon:"https://stg.smartconsumer.kr/assets/icons/kakao.png",text:"\ub85c\uadf8\uc544\uc6c3",backgroundColor:"#FFEB00",textColor:"#3C1E1E"}})),"facebook"===m.type&&o.a.createElement(j.a,{className:t.loginMenuItem},o.a.createElement(I,{onClick:function(){return g()},data:{icon:"https://stg.smartconsumer.kr/assets/icons/facebook.svg",text:"\ub85c\uadf8\uc544\uc6c3",backgroundColor:"#3b5998",textColor:"#ffffff"}}))):o.a.createElement(F.a,{className:t.loginMenu,id:"login-menu",anchorEl:r,keepMounted:!0,open:Boolean(r),onClose:d},o.a.createElement(j.a,{className:t.loginMenuItem,onClick:d},o.a.createElement(I,{onClick:function(){return p("naver")},data:{icon:"https://stg.smartconsumer.kr/assets/icons/naver.svg",text:"\ub124\uc774\ubc84 \uc544\uc774\ub514\ub85c \ub85c\uadf8\uc778",backgroundColor:"#1EC800",textColor:"#FFFFFF"}})),o.a.createElement(j.a,{className:t.loginMenuItem,onClick:d},o.a.createElement(I,{onClick:function(){return p("kakao")},data:{icon:"https://stg.smartconsumer.kr/assets/icons/kakao.png",text:"\uce74\uce74\uc624 \ub85c\uadf8\uc778",backgroundColor:"#FFEB00",textColor:"#3C1E1E"}})),o.a.createElement(j.a,{className:t.loginMenuItem,onClick:d},o.a.createElement(I,{onClick:function(){return p("facebook")},data:{icon:"https://stg.smartconsumer.kr/assets/icons/facebook.svg",text:"Facebook\uc73c\ub85c \ub85c\uadf8\uc778",backgroundColor:"#3b5998",textColor:"#ffffff"}}))))}var B=a(88),A=a.n(B),L=a(195),T=a(184),W=a(179),R=a(145),P=a(185),H=a(89),M=a.n(H),U=a(90),K=a.n(U),q=a(53),G=a.n(q),D=a(73),X=a(44),Y=a(191),V=Object(b.a)(function(e){return{root:{borderLeft:"5px solid transparent",borderRight:"5px solid transparent",borderTop:"10px solid transparent",borderBottom:"10px solid transparent"},flat:function(e){return{backgroundColor:"#AEC3DC",display:"flex"}},square:function(e){return{backgroundColor:"#AEC3DC",width:e.width,height:e.height,textAlign:"center",display:"table-cell",verticalAlign:"middle"}},icon:function(e){return{color:"#1C4366",width:e.imageWidth-4,height:e.imageHeight-4,marginTop:"2px",marginBottom:"2px",marginLeft:"2px",marginRight:"2px"}},favicon:function(e){return{backgroundColor:"#AEC3DC",width:e.imageWidth,height:e.imageHeight}},textBox:function(e){return{height:e.textBoxHeight,marginRight:e.textBoxMarginRight}},textTop:function(e){return{color:"#FFFFFF",fontSize:e.topFontSize}},textBottom:function(e){return{color:"#5592CC",fontSize:e.bottomFontSize}}}});function J(e){return o.a.createElement(D.a,e,o.a.createElement("path",{d:"M7.488 24h-.001c-.266 0-.487-.216-.487-.487v-.513c-1.104 0-2-.896-2-2v-13c0-1.104.896-2 2-2h2v-5c0-.552.448-1 1-1h4c.552 0 1 .448 1 1v5h2c1.105 0 2 .896 2 2v13c0 1.104-.895 2-2 2v.488c0 .283-.228.512-.512.512h-.001c-.265 0-.487-.214-.487-.487v-.513h-8v.488c0 .283-.229.512-.512.512zm9.012-13c.277 0 .5-.224.5-.5s-.223-.5-.5-.5h-9c-.276 0-.5.224-.5.5s.224.5.5.5h.507c-.072 1.037.389 1.936.996 2.352l-.003 1.476 3.529 3.543 2.834-2.823-3.529-3.542-1.289-.003c-.124-.364-.335-.721-.578-1.003h6.533zm-4.851 3.271l1.821 1.821-.354.353-1.821-1.82.354-.354zm.683 1.744l-.353.354-1.214-1.214.354-.353 1.213 1.213zm-.153-2.274l1.821 1.821-.354.353-1.82-1.821.353-.353zm-1.572-.726c-.102.283-.331.462-.606.539.042.416.551.6.85.303.279-.276.142-.754-.244-.842zm-1.361-2.015c.334.257.614.638.763 1.002l-1.003-.002-.001.682-.018-.022c-.332-.401-.529-.99-.477-1.66h.736zm4.254-9h-3c-.276 0-.5.224-.5.5v3.5h4v-3.5c0-.276-.224-.5-.5-.5z"}))}function Q(e){var t={width:52,height:52,imageWidth:52,imageHeight:52,textBoxHeight:52,topFontSize:16,bottomFontSize:20};e.size&&(t.width=e.size,t.height=e.size);e.favicon&&e.size>64?(e.size<=72?(t.imageWidth=t.width/9*4,t.imageHeight=t.height/9*4,t.textBoxHeight=parseInt(.3*t.height)):(t.imageWidth=t.width/2,t.imageHeight=t.height/2,t.textBoxHeight=parseInt(.3*t.height)),t.topFontSize=.4*t.textBoxHeight+"px",t.bottomFontSize=.6*t.textBoxHeight+"px"):(t.imageWidth=t.width,t.imageHeight=t.height,t.textBoxHeight=parseInt(t.height/4*3),t.topFontSize=parseInt(t.textBoxHeight/10*4)+"px",t.bottomFontSize=parseInt(t.textBoxHeight/10*5)+"px",t.textBoxMarginRight=t.imageWidth/4);var a=V(t);return o.a.createElement("div",{className:a.root},e.favicon?e.size>64?o.a.createElement("div",{className:a.square},o.a.createElement(J,{className:a.icon}),o.a.createElement(X.a,{className:a.textBox,component:"span"},o.a.createElement(Y.a,{className:a.textTop,fontFamily:"Nanum Brush Script"},"\ub5a0\ub098\ubcfc\uae4c"),o.a.createElement(Y.a,{className:a.textBottom,fontFamily:"Nanum Brush Script",fontWeight:700},"\uc2a4\ub9c8\ud2b8\ucee8\uc288\uba38"))):o.a.createElement("div",{className:a.favicon},o.a.createElement(J,{className:a.icon})):o.a.createElement("div",{className:a.flat},o.a.createElement(J,{className:a.icon}),o.a.createElement(X.a,{className:a.textBox,component:"span",display:"block"},o.a.createElement(Y.a,{className:a.textTop,fontFamily:"Nanum Brush Script"},"\ub5a0\ub098\ubcfc\uae4c"),o.a.createElement(Y.a,{className:a.textBottom,fontFamily:"Nanum Brush Script",fontWeight:700},"\uc2a4\ub9c8\ud2b8\ucee8\uc288\uba38"))))}var $=Object(b.a)(function(e){return Object(v.a)({root:{paddingTop:56,display:"flex"},menuButton:{marginRight:e.spacing(0)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(f.a)({display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),drawerIconBox:{flexGrow:1,paddingTop:10,marginLeft:20,width:220},logo:{flexGrow:1},logoImg:{height:52},imageIcon:{height:"100%"},iconRoot:{textAlign:"center"},linkIcon:{height:"40px"},iconInstall:{textAlign:"center"},iconHide:{display:"none"}})});function Z(e){var t=$(),a=Object(x.a)(),i=Object(n.useState)(!1),r=Object(h.a)(i,2),c=r[0],s=r[1],l=Object(n.useState)(!1),m=Object(h.a)(l,2),u=m[0],d=m[1];function g(){s(!1)}return Object(n.useEffect)(function(){window.addEventListener("beforeinstallprompt",function(e){window.deferredPrompt=e,d(!0)})},[]),o.a.createElement("header",{className:t.root},o.a.createElement(N.a,{position:"fixed",className:Object(w.a)(t.appBar,Object(p.a)({},t.appBarShift,c))},o.a.createElement(y.a,null,o.a.createElement(O.a,{color:"inherit","aria-label":"Open drawer",onClick:function(){s(!0)},edge:"start",className:t.menuButton},o.a.createElement(A.a,null)),o.a.createElement(C.a,{href:"https://stg.smartconsumer.kr/",className:t.logo},o.a.createElement(Q,null)),o.a.createElement(z,{cookies:e.cookies}),o.a.createElement(O.a,{onClick:function(){var e=window.deferredPrompt;e&&(e.prompt(),e.userChoice.then(function(e){window.deferredPrompt=null,d(!1)}))},className:u?t.iconInstall:t.iconHide},o.a.createElement("img",{className:t.imageIcon,src:"https://stg.smartconsumer.kr/assets/icons/install.svg",alt:"\uc124\uce58"})),o.a.createElement(O.a,{href:"https://stg.smartconsumer.kr/",classes:{root:t.iconRoot}},o.a.createElement("img",{className:t.imageIcon,src:"https://stg.smartconsumer.kr/assets/icons/refresh.svg",alt:"\uc0c8\ub85c\uace0\uce68"})))),o.a.createElement(L.a,{className:t.drawer,variant:"persistent",anchor:"left",open:c,classes:{paper:t.drawerPaper},onClose:g},o.a.createElement("div",{className:t.drawerHeader},o.a.createElement(C.a,{onClick:g,className:t.logo},o.a.createElement("img",{src:"https://stg.smartconsumer.kr/logo.png",className:t.logoImg,alt:"\ub85c\uace0"})),o.a.createElement(O.a,{onClick:g},"ltr"===a.direction?o.a.createElement(M.a,null):o.a.createElement(K.a,null))),o.a.createElement(T.a,null),o.a.createElement(W.a,null,k.SET_OF_MENUS.map(function(t,a){return o.a.createElement(R.a,{button:!0,key:a,onClick:function(t){return function(t){g(),e.menuIndex!==t&&e.onChangeMenu(t)}(a)}},o.a.createElement(P.a,{primary:t.displayName}))})),o.a.createElement(T.a,null),o.a.createElement("div",{className:t.drawerIconBox},k.SET_OF_LINKS.map(function(e,a){return o.a.createElement(G.a,{key:a},o.a.createElement(O.a,{target:"_blank",rel:"noopener noreferrer",href:e.link},o.a.createElement("img",{className:t.linkIcon,src:e.image,alt:e.name})))}))))}var ee=a(68),te=a(4),ae=a(189),ne=a(192),oe=a(188),ie=a(186),re=a(187),ce=a(91),se=a.n(ce),le=Object(b.a)(function(e){return{shareButton:{position:"absolute",right:e.spacing(0),bottom:e.spacing(0)},shareMenu:{},iconOnly:{height:"40px"},imageIcon:{height:"100%"},iconRoot:{textAlign:"center"}}});function me(e){var t=le(),a=o.a.useState(null),n=Object(h.a)(a,2),i=n[0],r=n[1];function c(){r(null)}function s(t){c();var a="\ub9c1\ud06c \uacf5\uc720\ud558\uae30",n=400,o=600,i=encodeURIComponent(e.item.link),r=encodeURI("["+e.item.mallName+"]"+e.item.title+" "+e.item.price),s="";switch(t){case"naver":a="\ub124\uc774\ubc84 \ube14\ub85c\uadf8\ub85c \uacf5\uc720\ud558\uae30",s="https://share.naver.com/web/shareView.nhn?url="+i+"&title="+r;break;case"twitter":a="\ud2b8\uc704\ud130\ub85c \uacf5\uc720\ud558\uae30",s="https://twitter.com/intent/tweet?text="+r+"%20"+i,o=264;break;case"facebook":a="\ud398\uc774\uc2a4\ubd81\uc73c\ub85c \uacf5\uc720\ud558\uae30",s="https://www.facebook.com/sharer/sharer.php?u="+i+"&quote="+r,n=600;break;case"line":n=600,o=550,a="\ub77c\uc778\uc73c\ub85c \uacf5\uc720\ud558\uae30",s="https://social-plugins.line.me/lineit/share?url="+i+"&text="+r}!function(e,t,a,n){var o=navigator.userAgent,i=function(){return/\b(iPhone|iP[ao]d)/.test(o)||/\b(iP[ao]d)/.test(o)||/Android/i.test(o)||/Mobile/i.test(o)},r="undefined"!=typeof window.screenX?window.screenX:window.screenLeft,c="undefined"!=typeof window.screenY?window.screenY:window.screenTop,s="undefined"!=typeof window.outerWidth?window.outerWidth:document.documentElement.clientWidth,l="undefined"!=typeof window.outerHeight?window.outerHeight:document.documentElement.clientHeight-22,m=i()?null:a,u=i()?null:n,d=r<0?window.screen.width+r:r,g=parseInt(d+(s-m)/2,10),h=parseInt(c+(l-u)/2.5,10),p=[];null!==m&&p.push("width="+m),null!==u&&p.push("height="+u),p.push("left="+g),p.push("top="+h),p.push("scrollbars=1");var f=window.open(e,t,p.join(","));window.focus&&f.focus()}(s,a,n,o)}return o.a.createElement("div",null,o.a.createElement(O.a,{"aria-controls":"simple-menu","aria-haspopup":"true",className:t.shareButton,color:"inherit","aria-label":"Share",onClick:function(e){r(e.currentTarget)}},o.a.createElement(se.a,null)),o.a.createElement(F.a,{className:t.shareMenu,id:"simple-menu",anchorEl:i,keepMounted:!0,open:Boolean(i),onClose:c},o.a.createElement(O.a,{onClick:function(){return function(){c();var t=/\d+/g,a=parseInt(e.item.price.match(t).join([])),n={objectType:"commerce",content:{title:e.item.title,imageUrl:e.item.image,link:{mobileWebUrl:e.item.link,webUrl:e.item.link}},commerce:{regularPrice:a},buttons:[{title:"\uad6c\ub9e4\ud558\uae30",link:{mobileWebUrl:e.item.link,webUrl:e.item.link}}]};e.item.orgPrice&&e.item.orgPrice.length>0&&(n.commerce.discountPrice=n.commerce.regularPrice,n.commerce.regularPrice=parseInt(e.item.orgPrice.match(t).join([]))),window.Kakao.Link.sendDefault(n)}()}},o.a.createElement("img",{className:t.iconOnly,src:"https://stg.smartconsumer.kr/assets/icons/share_kakao.png",alt:"\uce74\uce74\uc624\ud1a1 \uacf5\uc720\ud558\uae30"})),o.a.createElement(O.a,{onClick:function(){return c(),void window.Kakao.Story.share({url:e.item.link,text:"["+e.item.mallName+"]"+e.item.title+" "+e.item.price})}},o.a.createElement("img",{className:t.iconOnly,src:"https://stg.smartconsumer.kr/assets/icons/share_kakaostory.png",alt:"\uce74\uce74\uc624\uc2a4\ud1a0\ub9ac \uacf5\uc720\ud558\uae30"})),o.a.createElement(O.a,{onClick:function(){return s("naver")}},o.a.createElement("img",{className:t.iconOnly,src:"https://stg.smartconsumer.kr/assets/icons/naver.svg",alt:"\ub124\uc774\ubc84 \uacf5\uc720\ud558\uae30"})),o.a.createElement(T.a,{light:!0,variant:"middle"}),o.a.createElement(O.a,{onClick:function(){return s("line")}},o.a.createElement("img",{className:t.iconOnly,src:"https://stg.smartconsumer.kr/assets/icons/share_line.png",alt:"\ub77c\uc778 \uacf5\uc720\ud558\uae30"})),o.a.createElement(O.a,{onClick:function(){return s("facebook")}},o.a.createElement("img",{className:t.iconOnly,src:"https://stg.smartconsumer.kr/assets/icons/facebook.svg",alt:"\ud398\uc774\uc2a4\ubd81 \uacf5\uc720\ud558\uae30"})),o.a.createElement(O.a,{onClick:function(){return s("twitter")}},o.a.createElement("img",{className:t.iconOnly,src:"https://stg.smartconsumer.kr/assets/icons/share_twitter.png",alt:"\ud2b8\uc704\ud130 \uacf5\uc720\ud558\uae30"}))))}var ue=Object(b.a)(function(e){return{adRoot:function(e){return Object(f.a)({},e.customStyle)}}});function de(e){var t=ue(e);return Object(n.useEffect)(function(){(window.adsbygoogle=window.adsbygoogle||[]).push({})},[]),o.a.createElement("div",{align:"center",className:t.adRoot},"localhost"===window.location.hostname||"127.0.0.1"===window.location.hostname||"dev.smartconsumer.kr"===window.location.hostname?o.a.createElement("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-client":e.adClient?e.adClient:"ca-pub-2682155550928874","data-ad-slot":e.adSlot?e.adSlot:"8984188016","data-ad-format":e.adFormat?e.adFormat:"auto","data-ad-layout-key":e.adLayoutKey&&e.adLayoutKey,"data-full-width-responsive":e.fullWidthResponsive?e.fullWidthResponsive:"true","data-adtest":"on"}):o.a.createElement("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-client":e.adClient?e.adClient:"ca-pub-2682155550928874","data-ad-slot":e.adSlot?e.adSlot:"8984188016","data-ad-format":e.adFormat?e.adFormat:"auto","data-ad-layout-key":e.adLayoutKey&&e.adLayoutKey,"data-full-width-responsive":e.fullWidthResponsive?e.fullWidthResponsive:"true"}))}var ge=Object(b.a)(function(e){return{card:{width:(window.innerWidth-32)/2<220?(window.innerWidth-32)/2:220,height:(window.innerWidth-32)/2<200?380-(200-(window.innerWidth-32)/2):380,position:"relative"},media:{width:"100%",height:(window.innerWidth-32)/2<200?(window.innerWidth-32)/2:200,borderRadius:"5px"},itemTitle:{overflow:"hidden",height:"80px",fontSize:"14px",marginTop:"5px",marginLeft:"10px",marginRight:"10px"},itemPriceArea:{position:"absolute",left:e.spacing(2),bottom:e.spacing(1)},itemPrice:{float:"left",clear:"both",fontWeight:700,fontSize:"20px",marginTop:"2px",lineHeight:"1",letterSpacing:"-.06em",fontStyle:"normal",textAlign:"center"},itemDiscount:{float:"left",fontSize:"14px",color:"#C5500D",letterSpacing:"0",verticalAlign:"top",fontWeight:700},itemOrgPrice:{float:"left",marginTop:"1px",marginRight:"4px",marginLeft:"5px",fontWeight:700,fontSize:"14px",color:"#6E7481",textDecoration:"line-through",fontStyle:"normal"},sticker:{width:"60px",height:"30px",borderRadius:"10px",marginTop:"2px",left:e.spacing(1)}}});function he(e){var t="";switch(e){case"\ud2f0\ubaac":t="https://img.linkprice.com/files/glink/tmon/20170627/5951a3c576be9_120_60.jpg";break;case"G\ub9c8\ucf13":t="https://img.linkprice.com/files/stlink/gmarket/0364";break;case"11\ubc88\uac00":t="https://img.linkprice.com/files/glink/11st/20151209/56677fb2594fc_120_60.jpg";break;case"\ucfe0\ud321":t="https://img.linkprice.com/files/glink/coupang/20180115/5a5c6d9d5b3f8_120_60.jpg";break;case"\uc704\uba54\ud504":t="https://image.wemakeprice.com/dealimg2/today_120x60(1).jpg";break;case"GSSHOP":t="https://img.linkprice.com/files/glink/gseshop/12060.jpg"}return t}function pe(e){var t=ge();return o.a.createElement(ie.a,{className:t.card,justify:"center"},e.item?o.a.createElement(C.a,{target:"_blank",rel:"noopener noreferrer",href:e.item.link,color:"inherit",className:t.link},o.a.createElement(G.a,null,o.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},o.a.createElement(re.a,{justify:"center",className:t.media,image:e.item.image,title:e.item.title})),o.a.createElement(re.a,{className:t.sticker,image:he(e.item.mallName),title:e.item.mallName})),o.a.createElement(X.a,{className:t.itemTitle},e.item.title),o.a.createElement("div",{className:t.itemPriceArea},e.item.discount||e.item.orgPrice?o.a.createElement(X.a,{className:t.itemDiscount},e.item.discount):o.a.createElement(X.a,{className:t.itemDiscount},"\xa0"),o.a.createElement(X.a,{className:t.itemOrgPrice},e.item.orgPrice),o.a.createElement(X.a,{className:t.itemPrice},e.item.price))):o.a.createElement(de,{adClient:"ca-pub-2682155550928874",adSlot:"4097750891",adFormat:"auto",fullWidthResponsive:!0}),e.item&&o.a.createElement(me,{item:e.item}))}var fe=a(55),Ee=a.n(fe),ke=a(190),we=Object(b.a)(function(e){return{root:{flexGrow:1},scrollOnTop:{opacity:"0.3",position:"fixed",bottom:e.spacing(0),right:e.spacing(0),"&:active":{opacity:"1"}},progress:{position:"fixed",left:"50%",top:"50%"}}}),be=Object(te.a)({flexContainer:{justifyContent:"center",alignItems:"center"}})(ne.a);function ve(e){var t=we(),a=Object(n.useState)({products:[],lastPage:0,isFetching:!1,queryName:k.SET_OF_MENUS[e.menuIndex?e.menuIndex:0].queryName,hasNext:!0,hasError:null}),i=Object(h.a)(a,2),r=i[0],c=i[1],s=19;return Object(n.useEffect)(function(){function e(){var e=window.innerHeight;document.body.scrollHeight-e-(document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop)>=100||r.isFetching||!r.hasNext||c(Object(f.a)({},r,{isFetching:!0}))}return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}},[r,r.isFetching]),Object(n.useEffect)(function(){var e=!1,t=Ee.a.CancelToken.source();if(r.isFetching&&r.hasNext)return function(){var a=r.lastPage+1;Ee.a.get("https://test.smartconsumer.kr/api/getProducts?page="+a+"&size="+s+"&name="+r.queryName,{cancelToken:t.token,timeout:6e4}).then(function(t){if(!e)if(t.data.products.length>0){var n=!0;s>t.data.products.length&&(n=!1),c(function(e){return{queryName:r.queryName,lastPage:a,products:[].concat(Object(ee.a)(e.products),Object(ee.a)(t.data.products)),isFetching:!1,hasNext:n,hasError:null}})}else c(function(e){return Object(f.a)({},r,{hasNext:!1,isFetching:!1,hasError:null})})}).catch(function(t){e||(Ee.a.isCancel(t)?console.log("request cancelled:".concat(t.message)):(console.log("another error happened:"+t.message),c(function(e){return Object(f.a)({},r,{isFetching:!1,hasError:t.message})})))})}(),function(){e=!0,t.cancel("Cancelling in cleanup")}},[r,r.queryName,r.isFetching,r.lastPage]),Object(n.useEffect)(function(){c({queryName:k.SET_OF_MENUS[e.menuIndex?e.menuIndex:0].queryName,isFetching:!0,products:[],lastPage:0,hasNext:!0,hasError:!1})},[e.menuIndex]),o.a.createElement("div",null,o.a.createElement("nav",null,o.a.createElement(be,{value:e.menuIndex?e.menuIndex:0,onChange:function(t,a){e.menuIndex!==a&&e.onChangeMenu(a)},variant:"scrollable",scrollButtons:"on"},k.SET_OF_MENUS.map(function(e,t){return o.a.createElement(oe.a,{key:t,label:e.displayName})}))),o.a.createElement(ae.a,{container:!0,justify:"center",className:t.root},o.a.createElement("main",null,o.a.createElement(ae.a,{container:!0,justify:"center",spacing:2},r.products.map(function(e,t){return t%19===18?[o.a.createElement(ae.a,{key:e.cid,item:!0},o.a.createElement(pe,{item:e})),o.a.createElement(ae.a,{key:t,item:!0},o.a.createElement(pe,null))]:o.a.createElement(ae.a,{key:e.cid,item:!0},o.a.createElement(pe,{item:e}))}))),o.a.createElement(ae.a,{container:!0,justify:"center",spacing:2},r.hasError?r.hasError:r.isFetching&&o.a.createElement(ke.a,{className:t.progress,disableShrink:!0})),o.a.createElement(O.a,{classes:{root:t.scrollOnTop},onClick:function(){window.scroll(0,0)}},o.a.createElement("img",{src:"https://stg.smartconsumer.kr/assets/icons/arrow52.png",alt:"Scroll To Top"}))))}function xe(e){var t=o.a.useState(function(e){for(var t=0;t<k.SET_OF_MENUS.length;t++)if(k.SET_OF_MENUS[t].queryName===e)return t;return 0}(e.match&&e.match.params&&e.match.params.menu)),a=Object(h.a)(t,2),n=a[0],i=a[1];function r(e){i(e)}return o.a.createElement("div",null,o.a.createElement(Z,{menuIndex:n,onChangeMenu:r,cookies:e.cookies}),o.a.createElement(de,{customStyle:{marginTop:"15px"},adClient:"ca-pub-2682155550928874",adSlot:"8984188016",adFormat:"auto",fullWidthResponsive:!0}),o.a.createElement(ve,{menuIndex:n,onChangeMenu:r}))}var Ne=Object(b.a)(function(e){return{root:{backgroundColor:"#F0F0F0"},favicon:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"flex-end",padding:"0 15px"},square:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"flex-end",padding:"0 15px"},flat:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"flex-end",padding:"0 15px"},item:{borderLeft:"5px solid transparent",borderRight:"5px solid transparent",borderBottom:"10px solid transparent"}}});function ye(e){var t=Ne();return o.a.createElement("div",{className:t.root},o.a.createElement(T.a,null),o.a.createElement("div",{align:"center"},".ico"),o.a.createElement("div",{className:t.favicon},o.a.createElement(Q,{className:t.item,favicon:!0,size:16}),o.a.createElement(Q,{className:t.item,favicon:!0,size:24}),o.a.createElement(Q,{className:t.item,favicon:!0,size:32}),o.a.createElement(Q,{className:t.item,favicon:!0,size:48}),o.a.createElement(Q,{className:t.item,favicon:!0,size:57}),o.a.createElement(Q,{className:t.item,favicon:!0,size:64}),o.a.createElement(Q,{className:t.item,favicon:!0,size:72}),o.a.createElement(Q,{className:t.item,favicon:!0,size:96}),o.a.createElement(Q,{className:t.item,favicon:!0,size:120}),o.a.createElement(Q,{className:t.item,favicon:!0,size:128}),o.a.createElement(Q,{className:t.item,favicon:!0,size:144}),o.a.createElement(Q,{className:t.item,favicon:!0,size:152}),o.a.createElement(Q,{className:t.item,favicon:!0,size:192}),o.a.createElement(Q,{className:t.item,favicon:!0,size:195}),o.a.createElement(Q,{className:t.item,favicon:!0,size:228}),o.a.createElement(Q,{className:t.item,favicon:!0,size:256}),o.a.createElement(Q,{className:t.item,favicon:!0,size:512})),o.a.createElement(T.a,null),o.a.createElement("div",{align:"center"},"flat"),o.a.createElement("div",{className:t.flat},o.a.createElement(Q,{className:t.item}),o.a.createElement(Q,{className:t.item,size:72}),o.a.createElement(Q,{className:t.item,size:144})))}var Ce=a(67),Oe=a(196),Fe=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return console.log("https://stg.smartconsumer.kr"),o.a.createElement(Oe.a,{theme:k.THEME},o.a.createElement(Ce.a,null,o.a.createElement(d.a,{basename:"https://stg.smartconsumer.kr"},o.a.createElement(g.c,null,[o.a.createElement(g.a,{path:"/icon/:type",render:function(t){return o.a.createElement(ye,Object.assign({},t,{cookies:e.props.cookies}))}}),o.a.createElement(g.a,{path:"/icon",render:function(t){return o.a.createElement(ye,Object.assign({},t,{cookies:e.props.cookies}))}})],o.a.createElement(g.a,{path:"/:menu",render:function(t){return o.a.createElement(xe,Object.assign({},t,{cookies:e.props.cookies}))}}),o.a.createElement(g.a,{path:"/",render:function(t){return o.a.createElement(xe,Object.assign({},t,{cookies:e.props.cookies}))}})))))}}]),t}(n.Component),je=Object(Ce.b)(Fe),Se=(a(142),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function Ie(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(je,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("https://stg.smartconsumer.kr",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("https://stg.smartconsumer.kr","/service-worker.js");Se?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Ie(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):Ie(t,e)})}}()}},[[105,1,2]]]);
//# sourceMappingURL=main.bc68cf8c.chunk.js.map