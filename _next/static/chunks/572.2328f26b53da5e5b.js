"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[572],{8166:function(e,l,n){n.r(l),n.d(l,{default:function(){return f}});var t=n(2670),i=n(5893),r=n(8509),s=n(4184),c=n.n(s),a=n(7294),o=n(9583),u=n(2544),d=(n(933),n(2546));function f(e){var l,n,s,f,m=(0,a.useRef)(null),v=(0,a.useState)(0),h=v[0],x=v[1],p=(0,a.useState)(),j=p[0],g=p[1],N=(0,a.useRef)(null),b=(0,a.useRef)(null);return(0,a.useEffect)((function(){m.current&&(0,r.Qp)(m.current,{reserveScrollBarGap:!0});var l=function(l){var n;"Escape"==l.key&&(null===(n=e.onClose)||void 0===n||n.call(e))};return document.addEventListener("keydown",l),function(){(0,r.tP)(),document.removeEventListener("keydown",l)}}),[m,e]),(0,a.useEffect)((function(){j&&"object"==typeof j.navigation&&N.current&&b.current&&(j.navigation.prevEl=N.current,j.navigation.nextEl=b.current)}),[j]),(0,i.jsxs)("div",{ref:m,className:"fixed left-0 top-0 z-50 flex h-full w-full animate-fadeIn items-center justify-center",children:[(0,i.jsx)("div",{className:"absolute h-full w-full bg-black opacity-60"}),(0,i.jsxs)("div",{className:"z-10 flex h-full w-full flex-col py-8 pt-20 md:py-8",children:[(0,i.jsx)("div",{className:"absolute right-0 top-0 z-20 flex w-full justify-end md:w-auto",onClick:function(){var l;return null===(l=e.onClose)||void 0===l?void 0:l.call(e)},children:(0,i.jsx)("div",{className:"cursor-pointer p-6 text-white md:p-12 md:text-body md:hover:text-white",children:(0,i.jsx)(o.aHS,{size:32})})}),(0,i.jsx)("div",{className:"h-full w-full animate-slideIn items-center overflow-y-hidden",children:(0,i.jsx)(d.tq,{modules:[u.W_],className:"h-full",slidesPerView:1,centeredSlides:!0,centerInsufficientSlides:!0,onSlideChange:function(e){return x(e.activeIndex)},lazyPreloadPrevNext:1,onSwiper:function(e){g(e)},navigation:{prevEl:N.current,nextEl:b.current},onClick:function(l,n){var i,r=n.target;return(0,t.Z)(r,HTMLDivElement)&&(null===(i=e.onClose)||void 0===i?void 0:i.call(e))},children:null===(l=e.project.images)||void 0===l?void 0:l.map((function(l,n){return(0,i.jsx)(d.o5,{className:"!flex h-full items-center",children:(0,i.jsx)("img",{className:"mx-auto max-h-full select-none",src:l.source,alt:e.project.name,loading:"lazy"})},n)}))})}),Number(null===(n=e.project.images)||void 0===n?void 0:n.length)>1&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"absolute right-0 top-0 z-10 hidden h-full md:block",children:(0,i.jsx)("div",{className:"flex h-full cursor-pointer items-center p-12 hover:text-white",ref:b,children:(0,i.jsx)(o.Dli,{size:48})})}),(0,i.jsx)("div",{className:"absolute left-0 top-0 z-10 hidden h-full md:block",children:(0,i.jsx)("div",{className:"flex h-full cursor-pointer items-center p-12 hover:text-white",ref:N,children:(0,i.jsx)(o.bUI,{size:48})})})]}),Number(null===(s=e.project.images)||void 0===s?void 0:s.length)>1&&(0,i.jsx)("div",{className:"flex items-center justify-center space-x-2 pt-8 md:space-x-4",children:null===(f=e.project.images)||void 0===f?void 0:f.map((function(l,n){return(0,i.jsx)("div",{className:"bg-black",children:(0,i.jsx)("img",{className:c()("h-[60px] cursor-pointer select-none sm:h-[70px] md:h-[110px]",{"opacity-70 hover:opacity-100":h!=n}),src:l.thumbnail,alt:e.project.name,width:160,loading:"lazy",onClick:function(){return null===j||void 0===j?void 0:j.slideTo(n)}})},n)}))})]})]})}}}]);