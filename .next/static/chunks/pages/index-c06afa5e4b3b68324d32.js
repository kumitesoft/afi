_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{RNiq:function(e,t,s){"use strict";s.r(t),s.d(t,"__N_SSG",(function(){return O}));var a=s("o0o1"),r=s.n(a);function n(e,t,s,a,r,n,i){try{var o=e[n](i),l=o.value}catch(m){return void s(m)}o.done?t(l):Promise.resolve(l).then(a,r)}function i(e){return function(){var t=this,s=arguments;return new Promise((function(a,r){var i=e.apply(t,s);function o(e){n(i,a,r,o,l,"next",e)}function l(e){n(i,a,r,o,l,"throw",e)}o(void 0)}))}}var o=s("a3WO");var l=s("BsWD");function m(e){return function(e){if(Array.isArray(e))return Object(o.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(l.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=s("ODXe"),d=s("MX0m"),x=s.n(d),p=s("q1tI"),u=s.n(p),f=s("5Yp1"),j=s("vcXL"),b=s.n(j),w=u.a.createElement,g=function(e){var t=e.id,s=e.name,a=(e.description,e.price,e.category,e.image);e.createdAt;return w("div",{key:s,className:"jsx-3798694978 blockSmall"},w("p",{className:"jsx-3798694978 titleSmall"},s),w("a",{href:"#!",onClick:function(){return fetch("http://localhost:3000/api/popularity/".concat(t),{method:"PUT",headers:{"Content-Type":"application/json;charset=utf-8"}})},className:"jsx-3798694978"},w("img",{src:a,className:"jsx-3798694978 image"})),w(x.a,{id:"3798694978"},[".blockSmall.jsx-3798694978{position:relative;cursor:pointer;min-height:10rem;max-height:17rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",".blockSmall.jsx-3798694978 a.jsx-3798694978{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",".blockSmall.jsx-3798694978 a.jsx-3798694978 .image.jsx-3798694978{max-width:100%;-webkit-transition:0.2s;transition:0.2s;border-radius:0.2rem;}",".blockSmall.jsx-3798694978:hover .image.jsx-3798694978{-webkit-transform:translate(-0.5rem,-0.5rem) rotate(-3deg);-ms-transform:translate(-0.5rem,-0.5rem) rotate(-3deg);transform:translate(-0.5rem,-0.5rem) rotate(-3deg);}",".titleSmall.jsx-3798694978{-webkit-transition:0.2s;transition:0.2s;position:absolute;bottom:1rem;right:12%;font-weight:600;min-width:8rem;z-index:-1;}",".blockSmall.jsx-3798694978:hover .titleSmall.jsx-3798694978{bottom:-1.1rem;right:0;color:black;}"]))},h=u.a.createElement,N=function(e){var t=e.data,s=e.latest;return h("div",{className:"jsx-3318252457 latestNews_container"},h("div",{className:"jsx-3318252457 latestNews_title"},h("p",{className:"jsx-3318252457 latestNews_title-left"},"Najnowsze"),h("a",{href:"#allImages",onClick:function(){return s()},className:"jsx-3318252457 latestNews_title-right"},h("p",{className:"jsx-3318252457"},"Zobacz"))),t?h("div",{className:"jsx-3318252457 latestNews"},t.map((function(e){return h(g,{id:e._id,name:e.name,description:e.description,price:e.price,category:e.category,image:e.image,createdAt:e.createdAt,key:e.name})}))):h("p",{className:"jsx-3318252457"},"loading"),h(x.a,{id:"3318252457"},[".latestNews_container.jsx-3318252457{width:95%;margin:3rem auto 0 auto;}",".latestNews_title.jsx-3318252457{font-size:1.3rem;color:#000;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:baseline;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;}",".latestNews_title-left.jsx-3318252457{font-size:1.8rem;}",".latestNews_title-right.jsx-3318252457{cursor:pointer;}",".latestNews_title-right.jsx-3318252457:hover{opacity:0.75;}",".latestNews.jsx-3318252457{display:grid;grid-template-columns:repeat(auto-fit,minmax(10rem,1fr));grid-gap:1.3rem;margin-top:1rem;}","@media only screen and (max-width:768px){.latestNews_title-right.jsx-3318252457{text-align:center;}}","@media only screen and (max-width:425px){.latestNews_container.jsx-3318252457{margin:3rem auto 0 auto;}}"]))},v=s("3Mv1"),y=u.a.createElement,k=function(e){var t=e.data,s=e.latest,a=e.popular,r=e.under,n=e.random;return y("div",{id:"allImages",className:"jsx-3437942587 homeNews_container"},y("div",{className:"jsx-3437942587 homeNews_title"},y("p",{className:"jsx-3437942587 homeNews_title-left"},"Wejdz na wyzszy poziom zakupow")),t?y("div",{className:"jsx-3437942587 homeNews"},y("div",{className:"jsx-3437942587 homeNews_buttons"},y("p",{onClick:function(){return s()},className:"jsx-3437942587 btn"},"Najnowsze"),y("p",{onClick:function(){return a()},className:"jsx-3437942587 btn"},"Popularne"),y("p",{onClick:function(){return r()},className:"jsx-3437942587 btn"},"- 10PLN"),y("p",{onClick:function(){return n()},className:"jsx-3437942587 btn"},"Random")),y("div",{className:"jsx-3437942587 homeNews_box"},t.map((function(e){return y(v.a,{id:e._id,name:e.name,description:e.description,price:e.price,category:e.category,image:e.image,createdAt:e.createdAt,key:e.name})})))):y("p",{className:"jsx-3437942587"},"loading"),y(x.a,{id:"3437942587"},[".homeNews_container.jsx-3437942587{width:95%;margin:0rem auto;padding-top:7rem;}",".homeNews_title.jsx-3437942587{font-size:1.3rem;color:#000;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}",".homeNews_title-left.jsx-3437942587{font-size:1.8rem;}",".homeNews.jsx-3437942587{margin-top:1rem;}",".homeNews_buttons.jsx-3437942587{white-space:nowrap;grid-template-columns:repeat(4,minmax(6.9rem,14rem));display:grid;font-size:1.3rem;margin-bottom:4rem;}",".homeNews_buttons.jsx-3437942587 p.jsx-3437942587{margin-right:1rem;position:relative;text-align:center;}",".homeNews_buttons.jsx-3437942587 p.jsx-3437942587::before{content:'';position:absolute;bottom:0;left:0;height:2px;width:0%;-webkit-transition:0.2s;transition:0.2s;background-color:#484848;}",".homeNews_buttons.jsx-3437942587 p.jsx-3437942587:hover{color:#484848;}",".homeNews_buttons.jsx-3437942587 p.jsx-3437942587:hover.jsx-3437942587::before{margin-right:1rem;width:100%;}",".homeNews_buttons.jsx-3437942587 p.jsx-3437942587:active{-webkit-transform:translateY(0.3rem);-ms-transform:translateY(0.3rem);transform:translateY(0.3rem);}",".homeNews_box.jsx-3437942587{display:grid;grid-template-columns:repeat(auto-fit,minmax(15.9rem,24.4rem));grid-auto-rows:25.14rem;grid-gap:1.3rem;grid-row-gap:4rem;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:2rem;}","@media only screen and (max-width:768px){.homeNews_buttons.jsx-3437942587{white-space:nowrap;grid-template-columns:repeat(2,minmax(6.9rem,1fr));row-gap:1rem;-webkit-column-gap:1rem;column-gap:1rem;}.homeNews_buttons.jsx-3437942587 p.jsx-3437942587{margin-right:0rem;}}"]))},_=(u.a.createElement,u.a.createElement,u.a.createElement),E=function(){return _(u.a.Fragment,null,_("div",{id:"newsletter",className:"jsx-1104043810 empty_padding_newsletter"}),_("div",{className:"jsx-1104043810 newsletter_container"},_("div",{className:"jsx-1104043810 newsletter_wrapper"},_("p",{className:"jsx-1104043810 newsletter_component"},"Twoj newsletter - ",_("br",{className:"jsx-1104043810"})," najnowsze promocje, oferty i znizki"),_("p",{className:"jsx-1104043810 btn newsletter_btn"},"Zapisz sie"))),_(x.a,{id:"1104043810"},[".empty_padding_newsletter.jsx-1104043810{height:8rem;}",".newsletter_container.jsx-1104043810{background-color:#95ac00;height:12rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".newsletter_wrapper.jsx-1104043810{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:61%;margin:0 auto;}",".newsletter_component.jsx-1104043810{font-size:3rem;width:36rem;line-height:2.3rem;color:#000;font-variant-caps:all-petite-caps;}",".newsletter_btn.jsx-1104043810{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;font-size:1.6rem;padding:0.7rem 1.4rem;white-space:nowrap;}",".newsletter_btn.jsx-1104043810:hover{color:#fff;background-color:#000;}","@media only screen and (max-width:1024px){.newsletter_wrapper.jsx-1104043810{width:80%;}}","@media only screen and (max-width:768px){.newsletter_container.jsx-1104043810{height:auto;padding:1rem 0;}.newsletter_component.jsx-1104043810{text-align:center;margin-bottom:1rem;width:auto;font-size:2rem;line-height:1.8rem;}.newsletter_wrapper.jsx-1104043810{width:90%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}}"]))},S=s("iWaP");s("jA0i");var z=u.a.createElement,O=!0;t.default=function(e){var t=Object(p.useState)([]),s=t[0],a=t[1],n=Object(p.useState)([]),o=n[0],l=n[1],d=Object(p.useState)(""),j=d[0],w=d[1],g=Object(p.useState)(2),h=g[0],v=g[1],y=Object(p.useState)(!0),_=y[0],O=y[1],A=u.a.useState(!1),D=Object(c.a)(A,2),P=D[0],C=D[1],I=u.a.useRef(),R=Object(S.useKeenSlider)({loop:!0,duration:2e3,dragStart:function(){C(!0)},dragEnd:function(){C(!1)}}),W=Object(c.a)(R,2),T=W[0],Y=W[1];u.a.useEffect((function(){T.current.addEventListener("mouseover",(function(){C(!0)})),T.current.addEventListener("mouseout",(function(){C(!1)}))}),[T]),u.a.useEffect((function(){return I.current=setInterval((function(){!P&&Y&&Y.next()}),3500),function(){clearInterval(I.current)}}),[P,Y]),Object(p.useEffect)((function(){a(e.homeNewsData)}),[]);var Z=function(){var e=m(s),t=new Date(Date.now()-432e6).toISOString(),a=e.filter((function(e){return e.createdAt>t}));l(a),w("latest")},B=function(){var e=m(s).filter((function(e){return e.popularity>=2}));l(e),w("popular")},L=function(){var e=m(s).filter((function(e){return e.price<=10}));l(e),w("under")},M=function(){var e=function(e){for(var t,s,a=e.length;0!==a;)s=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[s],e[s]=t;return e}(m(s));l(e),w("random")},X=function(){var e=i(r.a.mark((function e(){var t,s,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b()("http://localhost:3000/api/items/".concat(h));case 2:return t=e.sent,e.next=5,t.json();case 5:s=e.sent,n=s.data,v((function(e){return e+1})),a(n),"latest"===j&&Z(),"popular"===j&&B(),"under"===j&&L(),"random"===j&&M(),l([]);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return z(f.a,{mainPage:_,setMainPage:O},z("div",{className:"jsx-931979104 container"},z("div",{ref:T,className:"jsx-931979104 keen-slider"},z("div",{className:"jsx-931979104 keen-slider__slide number-slide1 slider-configuration"},z("div",{className:"jsx-931979104 slider-box"},z("img",{src:"./slider/1.jpg",className:"jsx-931979104"}),z("p",{className:"jsx-931979104 slider-text slider-text-1"},"PONAD 100 SKLEPOW"))),z("div",{className:"jsx-931979104 keen-slider__slide number-slide2 slider-configuration"},z("div",{className:"jsx-931979104 slider-box"},z("img",{src:"./slider/2.jpg",className:"jsx-931979104"}),z("p",{className:"jsx-931979104 slider-text slider-text-2"},"ZAWSZE POD REKA"))),z("div",{className:"jsx-931979104 keen-slider__slide number-slide3 slider-configuration"},z("div",{className:"jsx-931979104 slider-box"},z("img",{src:"./slider/1.jpg",className:"jsx-931979104"}),z("p",{className:"jsx-931979104 slider-text slider-text-3"},"NA KAZDA OKAZJE"))),z("div",{className:"jsx-931979104 keen-slider__slide number-slide4 slider-configuration"},z("div",{className:"jsx-931979104 slider-box"},z("img",{src:"./slider/4.jpg",className:"jsx-931979104"}),z("p",{className:"jsx-931979104 slider-text slider-text-4"},"WASZE CENTRUM")))),z(N,{data:e.latestNewsData,latest:Z}),z(E,null),z(k,{data:0===o.length?s:o,latest:Z,popular:B,under:L,random:M})),z("div",{className:"jsx-931979104 moreBtnDiv"},z("button",{onClick:function(){return X()},className:"jsx-931979104 btn"},"WIECEJ")),z(x.a,{id:"931979104"},[".slider-configuration.jsx-931979104{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:2rem 0;}",".slider-box.jsx-931979104{position:relative;}",".slider-text.jsx-931979104{position:absolute;font-size:3rem;width:34rem;line-height:3rem;text-shadow:1px 1px 0px rgba(0,0,0,0.2);padding:1rem 2rem;background-color:#ffc500;color:#fff;}",".slider-text-1.jsx-931979104{bottom:30rem;left:-5rem;white-space:nowrap;}",".slider-text-2.jsx-931979104{bottom:29rem;right:-1rem;}",".slider-text-3.jsx-931979104{bottom:3rem;left:-10rem;}",".slider-text-4.jsx-931979104{bottom:2rem;right:-3rem;}",".star.jsx-931979104{position:absolute;top:-54px;left:-57px;width:9%;-webkit-transform:rotate(-3deg);-ms-transform:rotate(-3deg);transform:rotate(-3deg);}",".moreBtnDiv.jsx-931979104{text-align:center;margin:3rem 0;}",".moreBtnDiv.jsx-931979104 button.jsx-931979104{padding:1rem 3rem;border:none;outline:none;}",".moreBtnDiv.jsx-931979104 button.jsx-931979104:hover{background-color:#ff2a2a;color:#fff;}",".moreBtnDiv.jsx-931979104 button.jsx-931979104:active{-webkit-transform:translateY(0.3rem);-ms-transform:translateY(0.3rem);transform:translateY(0.3rem);}","@media only screen and (max-width:1024px){.slider-text-1.jsx-931979104{left:-1rem;}.slider-text-2.jsx-931979104{right:-3rem;}.slider-text-3.jsx-931979104{left:-1rem;}}","@media only screen and (max-width:768px){.slider-box.jsx-931979104{position:relative;width:95%;margin:0 auto;}.slider-box.jsx-931979104 img.jsx-931979104{width:100%;}.slider-box.jsx-931979104 p.jsx-931979104{font-size:1.8rem;width:100%;padding:0.4rem 0;text-align:center;bottom:0;left:0;}}","@media only screen and (max-width:510px){.slider-box.jsx-931979104 p.jsx-931979104{font-size:1.3rem;padding:.2rem 0;line-height:inherit;}}"]))}},vcXL:function(e,t,s){"use strict";var a=self.fetch.bind(self);e.exports=a,e.exports.default=e.exports},vlRD:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s("RNiq")}])}},[["vlRD",0,2,3,1,4]]]);