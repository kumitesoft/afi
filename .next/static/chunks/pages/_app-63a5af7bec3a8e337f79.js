_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{0:function(n,t,e){e("GcxT"),n.exports=e("nOHt")},"1TCz":function(n,t,e){"use strict";e.r(t);var r=e("q1tI"),o=e.n(r),i=e("8Kt/"),s=e.n(i),a=(e("sKKC"),e("Mj6V")),u=e.n(a),c=(e("pdi6"),e("nOHt")),l=(e("bgIA"),o.a.createElement);u.a.configure({showSpinner:!1,trickleRate:.1,trickleSpeed:300}),c.Router.events.on("routeChangeStart",(function(){u.a.start()})),c.Router.events.on("routeChangeComplete",(function(){u.a.done()})),c.Router.events.on("routeChangeError",(function(){u.a.done()})),t.default=function(n){var t=n.Component,e=n.pageProps,i=Object(r.useState)(10),a=i[0],u=i[1];return console.log(t,e,"eee"),l(o.a.Fragment,null,l(s.a,null,l("link",{href:"https://fonts.googleapis.com/css2?family=Vollkorn&display=swap",rel:"stylesheet"}),l("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})),l("button",{onClick:function(){return u((function(n){return n+10}))}},a),l(t,e))}},GcxT:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return e("1TCz")}])},Mj6V:function(n,t,e){var r,o;void 0===(o="function"===typeof(r=function(){var n={version:"0.2.0"},t=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function e(n,t,e){return n<t?t:n>e?e:n}function r(n){return 100*(-1+n)}n.configure=function(n){var e,r;for(e in n)void 0!==(r=n[e])&&n.hasOwnProperty(e)&&(t[e]=r);return this},n.status=null,n.set=function(s){var a=n.isStarted();s=e(s,t.minimum,1),n.status=1===s?null:s;var u=n.render(!a),c=u.querySelector(t.barSelector),l=t.speed,f=t.easing;return u.offsetWidth,o((function(e){""===t.positionUsing&&(t.positionUsing=n.getPositioningCSS()),i(c,function(n,e,o){var i;return(i="translate3d"===t.positionUsing?{transform:"translate3d("+r(n)+"%,0,0)"}:"translate"===t.positionUsing?{transform:"translate("+r(n)+"%,0)"}:{"margin-left":r(n)+"%"}).transition="all "+e+"ms "+o,i}(s,l,f)),1===s?(i(u,{transition:"none",opacity:1}),u.offsetWidth,setTimeout((function(){i(u,{transition:"all "+l+"ms linear",opacity:0}),setTimeout((function(){n.remove(),e()}),l)}),l)):setTimeout(e,l)})),this},n.isStarted=function(){return"number"===typeof n.status},n.start=function(){n.status||n.set(0);var e=function(){setTimeout((function(){n.status&&(n.trickle(),e())}),t.trickleSpeed)};return t.trickle&&e(),this},n.done=function(t){return t||n.status?n.inc(.3+.5*Math.random()).set(1):this},n.inc=function(t){var r=n.status;return r?("number"!==typeof t&&(t=(1-r)*e(Math.random()*r,.1,.95)),r=e(r+t,0,.994),n.set(r)):n.start()},n.trickle=function(){return n.inc(Math.random()*t.trickleRate)},function(){var t=0,e=0;n.promise=function(r){return r&&"resolved"!==r.state()?(0===e&&n.start(),t++,e++,r.always((function(){0===--e?(t=0,n.done()):n.set((t-e)/t)})),this):this}}(),n.render=function(e){if(n.isRendered())return document.getElementById("nprogress");a(document.documentElement,"nprogress-busy");var o=document.createElement("div");o.id="nprogress",o.innerHTML=t.template;var s,u=o.querySelector(t.barSelector),c=e?"-100":r(n.status||0),f=document.querySelector(t.parent);return i(u,{transition:"all 0 linear",transform:"translate3d("+c+"%,0,0)"}),t.showSpinner||(s=o.querySelector(t.spinnerSelector))&&l(s),f!=document.body&&a(f,"nprogress-custom-parent"),f.appendChild(o),o},n.remove=function(){u(document.documentElement,"nprogress-busy"),u(document.querySelector(t.parent),"nprogress-custom-parent");var n=document.getElementById("nprogress");n&&l(n)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var n=document.body.style,t="WebkitTransform"in n?"Webkit":"MozTransform"in n?"Moz":"msTransform"in n?"ms":"OTransform"in n?"O":"";return t+"Perspective"in n?"translate3d":t+"Transform"in n?"translate":"margin"};var o=function(){var n=[];function t(){var e=n.shift();e&&e(t)}return function(e){n.push(e),1==n.length&&t()}}(),i=function(){var n=["Webkit","O","Moz","ms"],t={};function e(e){return e=e.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(function(n,t){return t.toUpperCase()})),t[e]||(t[e]=function(t){var e=document.body.style;if(t in e)return t;for(var r,o=n.length,i=t.charAt(0).toUpperCase()+t.slice(1);o--;)if((r=n[o]+i)in e)return r;return t}(e))}function r(n,t,r){t=e(t),n.style[t]=r}return function(n,t){var e,o,i=arguments;if(2==i.length)for(e in t)void 0!==(o=t[e])&&t.hasOwnProperty(e)&&r(n,e,o);else r(n,i[1],i[2])}}();function s(n,t){return("string"==typeof n?n:c(n)).indexOf(" "+t+" ")>=0}function a(n,t){var e=c(n),r=e+t;s(e,t)||(n.className=r.substring(1))}function u(n,t){var e,r=c(n);s(n,t)&&(e=r.replace(" "+t+" "," "),n.className=e.substring(1,e.length-1))}function c(n){return(" "+(n.className||"")+" ").replace(/\s+/gi," ")}function l(n){n&&n.parentNode&&n.parentNode.removeChild(n)}return n})?r.call(t,e,t,n):r)||(n.exports=o)},bgIA:function(n,t,e){},pdi6:function(n,t,e){},sKKC:function(n,t,e){}},[[0,0,2,1]]]);