_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{IB8S:function(e,t,a){e.exports={inbetweenOne_container:"InbetweenOne_inbetweenOne_container__1IGtT",inbetweenOne_wrapper:"InbetweenOne_inbetweenOne_wrapper__3VZ3h"}},NzbH:function(e,t,a){e.exports={empty_padding_newsletter:"Newsletter_empty_padding_newsletter__1cz-s",newsletter_container:"Newsletter_newsletter_container__gIHk5",newsletter_wrapper:"Newsletter_newsletter_wrapper__3sEMR",newsletter_component:"Newsletter_newsletter_component__2fGrr",newsletter_signinbox:"Newsletter_newsletter_signinbox__PXMdH",newsletter_btn:"Newsletter_newsletter_btn__3XlFu"}},OREE:function(e,t,a){e.exports={homeNews_container:"HomeNews_homeNews_container__gOpIK",homeNews_title:"HomeNews_homeNews_title__3zxOD",homeNews_title_left:"HomeNews_homeNews_title_left__Lcqn_",homeNews_wrapper:"HomeNews_homeNews_wrapper__3lYjM",homeNews_buttons:"HomeNews_homeNews_buttons__2c1ec",homeNews_box:"HomeNews_homeNews_box__1WTYs"}},RNiq:function(e,t,a){"use strict";a.r(t),a.d(t,"__N_SSG",(function(){return H}));var s=a("o0o1"),n=a.n(s);function r(e,t,a,s,n,r,i){try{var o=e[r](i),l=o.value}catch(c){return void a(c)}o.done?t(l):Promise.resolve(l).then(s,n)}var i=a("a3WO");var o=a("BsWD");function l(e){return function(e){if(Array.isArray(e))return Object(i.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=a("ODXe"),m=a("MX0m"),d=a.n(m),_=a("q1tI"),u=a.n(_),p=a("80PL"),x=a("vcXL"),w=a.n(x),f=a("z9a/"),N=a.n(f),j=u.a.createElement,b=function(e){var t=e.id,a=e.name,s=(e.description,e.price,e.category,e.image);e.createdAt;return j("div",{key:a,className:"jsx-2170358054 "+(N.a.blockSmall_container||"")},j("p",{className:"jsx-2170358054 "+(N.a.titleSmall||"")},a),j("a",{href:"#!",onClick:function(){return fetch("http://localhost:3000/api/popularity/".concat(t),{method:"PUT",headers:{"Content-Type":"application/json;charset=utf-8"}})},className:"jsx-2170358054"},j("img",{src:s,className:"jsx-2170358054 "+(N.a.imageSmall||"")})),j(d.a,{id:"2170358054"},[]))},g=a("eva/"),h=a.n(g),v=u.a.createElement,S=function(e){var t=e.data,a=e.latest;return v("div",{className:"jsx-2085888330 "+(h.a.latestNews_container||"")},v("div",{className:"jsx-2085888330 "+(h.a.latestNews_title||"")},v("p",{className:"jsx-2085888330 "+(h.a.latestNews_title_left||"")},"Najnowsze"),v("a",{href:"#allImages",onClick:function(){return a()},className:"jsx-2085888330 "+(h.a.latestNews_title_right||"")},v("p",{className:"jsx-2085888330"},"Zobacz"))),t?v("div",{className:"jsx-2085888330 "+(h.a.latestNews_wrapper||"")},t.map((function(e){return v(b,{id:e._id,name:e.name,description:e.description,price:e.price,category:e.category,image:e.image,createdAt:e.createdAt,key:e.name})}))):v("p",{className:"jsx-2085888330"},"loading"),v(d.a,{id:"2085888330"},[]))},y=a("OREE"),O=a.n(y),k=a("IObC"),E=u.a.createElement,I=function(e){var t=e.data,a=e.latest,s=e.popular,n=e.under,r=e.random;return E("div",{id:"allImages",className:"jsx-2085888330 "+(O.a.homeNews_container||"")},E("div",{className:"jsx-2085888330 "+(O.a.homeNews_title||"")},E("p",{className:"jsx-2085888330 "+(O.a.homeNews_title_left||"")},"Wejdz na wyzszy poziom zakupow")),t?E("div",{className:"jsx-2085888330 "+(O.a.homeNews_wrapper||"")},E("div",{className:"jsx-2085888330 "+(O.a.homeNews_buttons||"")},E("p",{onClick:function(){return a()},className:"jsx-2085888330 btn"},"Najnowsze"),E("p",{onClick:function(){return s()},className:"jsx-2085888330 btn"},"Popularne"),E("p",{onClick:function(){return n()},className:"jsx-2085888330 btn"},"- 10PLN"),E("p",{onClick:function(){return r()},className:"jsx-2085888330 btn"},"Random")),E("div",{className:"jsx-2085888330 "+(O.a.homeNews_box||"")},t.map((function(e){return E(k.a,{id:e._id,name:e.name,description:e.description,price:e.price,category:e.category,image:e.image,createdAt:e.createdAt,key:e.name})})))):E("p",{className:"jsx-2085888330"},"loading"),E(d.a,{id:"2085888330"},[]))},z=(u.a.createElement,a("IB8S"),u.a.createElement,a("NzbH")),D=a.n(z),P=u.a.createElement,A=function(){return P(u.a.Fragment,null,P("div",{id:"newsletter",className:"jsx-2085888330 "+(D.a.empty_padding_newsletter||"")}),P("div",{className:"jsx-2085888330 "+(D.a.newsletter_container||"")},P("div",{className:"jsx-2085888330 "+(D.a.newsletter_wrapper||"")},P("p",{className:"jsx-2085888330 "+(D.a.newsletter_component||"")},"Zostaw suba! ",P("br",{className:"jsx-2085888330"})," badz na biezaco z nowosciami"),P("div",{className:"jsx-2085888330 "+(D.a.newsletter_signinbox||"")},P("input",{type:"text",className:"jsx-2085888330"}),P("p",{className:"jsx-2085888330 "+(D.a.newsletter_btn||"")},"Zapisz sie")))),P(d.a,{id:"2085888330"},[]))},C=a("iWaP"),L=u.a.createElement,H=!0;t.default=function(e){var t=Object(_.useState)([]),a=t[0],s=t[1],i=Object(_.useState)([]),o=i[0],m=i[1],x=Object(_.useState)(""),f=x[0],N=x[1],j=Object(_.useState)(8),b=j[0],g=j[1],h=Object(_.useState)(!0),v=h[0],y=h[1],O=u.a.useState(!1),k=Object(c.a)(O,2),E=k[0],z=k[1],D=u.a.useRef(),P=Object(C.useKeenSlider)({loop:!0,duration:2e3,dragStart:function(){z(!0)},dragEnd:function(){z(!1)}}),H=Object(c.a)(P,2),R=H[0],J=H[1];u.a.useEffect((function(){R.current.addEventListener("mouseover",(function(){z(!0)})),R.current.addEventListener("mouseout",(function(){z(!1)}))}),[R]),u.a.useEffect((function(){return D.current=setInterval((function(){!E&&J&&J.next()}),3500),function(){clearInterval(D.current)}}),[E,J]),Object(_.useEffect)((function(){JSON.parse(localStorage.getItem("localData"))&&JSON.parse(localStorage.getItem("localPage"))?(s(JSON.parse(localStorage.getItem("localData"))),g(JSON.parse(localStorage.getItem("localPage")))):s(e.homeNewsData)}),[]);var M=function(){var e=l(a),t=new Date(Date.now()-432e6).toISOString(),s=e.filter((function(e){return e.createdAt>t}));m(s),N("latest")},W=function(){var e=l(a).filter((function(e){return e.popularity>=10}));m(e),N("popular")},T=function(){var e=l(a).filter((function(e){return e.price<=10}));m(e),N("under")},X=function(){var e,t=(e=n.a.mark((function e(){var t,a,r,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w()("http://localhost:3000/api/items/".concat(b));case 2:return a=e.sent,e.next=5,a.json();case 5:r=e.sent,i=r.data,mutate("http://localhost:3000/api/items/".concat(b),i,!1),t=i,localStorage.setItem("localData",JSON.stringify(i)),localStorage.setItem("localPage",JSON.stringify(b)),g((function(e){return e+4})),m([]),s(t),"latest"===f&&M(),"popular"===f&&W(),"under"===f&&T();case 17:case"end":return e.stop()}}),e)})),function(){var t=this,a=arguments;return new Promise((function(s,n){var i=e.apply(t,a);function o(e){r(i,s,n,o,l,"next",e)}function l(e){r(i,s,n,o,l,"throw",e)}o(void 0)}))});return function(){return t.apply(this,arguments)}}();return L(p.a,{mainPage:v,setMainPage:y},L("div",{className:"jsx-931979104 container"},L("div",{ref:R,className:"jsx-931979104 keen-slider"},L("div",{className:"jsx-931979104 keen-slider__slide number-slide1 slider-configuration"},L("div",{className:"jsx-931979104 slider-box"},L("img",{src:"./slider/1.jpg",className:"jsx-931979104"}),L("p",{className:"jsx-931979104 slider-text slider-text-1"},"PONAD 100 SKLEPOW"))),L("div",{className:"jsx-931979104 keen-slider__slide number-slide2 slider-configuration"},L("div",{className:"jsx-931979104 slider-box"},L("img",{src:"./slider/2.jpg",className:"jsx-931979104"}),L("p",{className:"jsx-931979104 slider-text slider-text-2"},"ZAWSZE POD REKA"))),L("div",{className:"jsx-931979104 keen-slider__slide number-slide3 slider-configuration"},L("div",{className:"jsx-931979104 slider-box"},L("img",{src:"./slider/1.jpg",className:"jsx-931979104"}),L("p",{className:"jsx-931979104 slider-text slider-text-3"},"NA KAZDA OKAZJE"))),L("div",{className:"jsx-931979104 keen-slider__slide number-slide4 slider-configuration"},L("div",{className:"jsx-931979104 slider-box"},L("img",{src:"./slider/4.jpg",className:"jsx-931979104"}),L("p",{className:"jsx-931979104 slider-text slider-text-4"},"WASZE CENTRUM")))),L(S,{data:e.latestNewsData,latest:M}),L(A,null),L(I,{data:0===o.length?a:o,latest:M,popular:W,under:T,random:function(){var e=function(e){for(var t,a,s=e.length;0!==s;)a=Math.floor(Math.random()*s),t=e[s-=1],e[s]=e[a],e[a]=t;return e}(l(a));m(e),N("random")}})),L("div",{className:"jsx-931979104 moreBtnDiv"},L("button",{onClick:function(){return X()},className:"jsx-931979104 btn"},"WIECEJ")),L(d.a,{id:"931979104"},[".slider-configuration.jsx-931979104{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:2rem 0;}",".slider-box.jsx-931979104{position:relative;}",".slider-text.jsx-931979104{position:absolute;font-size:3rem;width:34rem;line-height:3rem;text-shadow:1px 1px 0px rgba(0,0,0,0.2);padding:1rem 2rem;background-color:#ffc500;color:#fff;}",".slider-text-1.jsx-931979104{bottom:30rem;left:-5rem;white-space:nowrap;}",".slider-text-2.jsx-931979104{bottom:29rem;right:-1rem;}",".slider-text-3.jsx-931979104{bottom:3rem;left:-10rem;}",".slider-text-4.jsx-931979104{bottom:2rem;right:-3rem;}",".star.jsx-931979104{position:absolute;top:-54px;left:-57px;width:9%;-webkit-transform:rotate(-3deg);-ms-transform:rotate(-3deg);transform:rotate(-3deg);}",".moreBtnDiv.jsx-931979104{text-align:center;margin:3rem 0;}",".moreBtnDiv.jsx-931979104 button.jsx-931979104{padding:1rem 3rem;border:none;outline:none;}",".moreBtnDiv.jsx-931979104 button.jsx-931979104:hover{background-color:#ff2a2a;color:#fff;}",".moreBtnDiv.jsx-931979104 button.jsx-931979104:active{-webkit-transform:translateY(0.3rem);-ms-transform:translateY(0.3rem);transform:translateY(0.3rem);}","@media only screen and (max-width:1024px){.slider-text-1.jsx-931979104{left:-1rem;}.slider-text-2.jsx-931979104{right:-3rem;}.slider-text-3.jsx-931979104{left:-1rem;}}","@media only screen and (max-width:768px){.slider-box.jsx-931979104{position:relative;width:95%;margin:0 auto;}.slider-box.jsx-931979104 img.jsx-931979104{width:100%;}.slider-box.jsx-931979104 p.jsx-931979104{font-size:1.8rem;width:100%;padding:0.4rem 0;text-align:center;bottom:0;left:0;}}","@media only screen and (max-width:510px){.slider-box.jsx-931979104 p.jsx-931979104{font-size:1.3rem;padding:.2rem 0;line-height:inherit;}}"]))}},"eva/":function(e,t,a){e.exports={latestNews_container:"LatestNews_latestNews_container__3OCKx",latestNews_title:"LatestNews_latestNews_title__2Xtcj",latestNews_title_left:"LatestNews_latestNews_title_left__2yE_2",latestNews_title_right:"LatestNews_latestNews_title_right__1MlzG",latestNews_wrapper:"LatestNews_latestNews_wrapper__2QLUj","latestNews_title-right":"LatestNews_latestNews_title-right__3OV02"}},vcXL:function(e,t,a){"use strict";var s=self.fetch.bind(self);e.exports=s,e.exports.default=e.exports},vlRD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("RNiq")}])},"z9a/":function(e,t,a){e.exports={blockSmall_container:"SmallCard_blockSmall_container__ouW6-",titleSmall:"SmallCard_titleSmall__2YMVT",imageSmall:"SmallCard_imageSmall__1IHKn"}}},[["vlRD",0,2,1,3]]]);