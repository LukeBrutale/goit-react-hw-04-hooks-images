(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{12:function(e,t,a){e.exports={imageGallery:"ImageGallery_imageGallery__ZPanN"}},14:function(e,t,a){e.exports={loadButton:"Button_loadButton__1e0DO"}},15:function(e,t,a){e.exports={loader:"App_loader__2YC8q"}},21:function(e,t,a){},4:function(e,t,a){e.exports={searchBar:"SearchBar_searchBar__1RWX7",searchForm:"SearchBar_searchForm__1SwF2",searchFormButton:"SearchBar_searchFormButton__1yV5W",searchFormButtonLabel:"SearchBar_searchFormButtonLabel__1RNle",searchFormInput:"SearchBar_searchFormInput__2Sody",SearchFormInput:"SearchBar_SearchFormInput__2lkGS"}},43:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(11),o=a.n(c),s=(a(21),a(10)),i=a(3),l=a(16),m=a(4),u=a.n(m),j=a(0);var d=function(e){var t=e.onSubmit,a=Object(n.useState)(""),r=Object(i.a)(a,2),c=r[0],o=r[1];return Object(j.jsx)("header",{className:u.a.searchBar,children:Object(j.jsxs)("form",{className:u.a.searchForm,onSubmit:function(e){e.preventDefault(),""!==c.trim()?(t(c),o("")):alert("Input query")},children:[Object(j.jsx)("button",{type:"submit",className:u.a.searchFormButton,children:Object(j.jsxs)("span",{className:u.a.searchFormButtonLabel,children:[Object(j.jsx)(l.a,{}),"Search"]})}),Object(j.jsx)("input",{className:u.a.searchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){o(e.currentTarget.value.toLowerCase())},value:c})]})})};var h=function(e,t){var a="".concat("https://pixabay.com/api/?image_type=photo&orientation=horizontal","&q=").concat(e,"&page=").concat(t,"&per_page=").concat(12,"&key=").concat("23113693-a6d7ef0307e3a7805769671eb");return fetch(a).then((function(t){return t.ok?t.json():Promise.reject(new Error("\u041d\u0435\u0442 \u043a\u0430\u0440\u0442\u0438\u043d\u043e\u043a \u0441 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u043c ".concat(e)))}))},g=a(9),b=a.n(g);var O=function(e){var t=e.onSetImg,a=e.largeImageURL,n=e.tags,r=e.onOpenModal,c=e.webformatURL;return Object(j.jsx)("li",{className:b.a.imageGalleryItem,onClick:function(){return t(a,n)},children:Object(j.jsx)("img",{src:c,alt:n,className:b.a.imageGalleryItemImage,onClick:r})})},f=a(12),p=a.n(f);var _=function(e){var t=e.images,a=e.onOpenModal,n=e.onSetImg;return Object(j.jsx)("div",{children:Object(j.jsx)("ul",{className:p.a.imageGallery,children:t.map((function(e){var t=e.id,r=e.webformatURL,c=e.tags,o=e.largeImageURL;return Object(j.jsx)(O,{webformatURL:r,tags:c,largeImageURL:o,onOpenModal:a,onSetImg:n},t)}))})})},x=a.p+"static/media/error.7d86105a.jpg";var v=function(e){var t=e.message;return Object(j.jsxs)("div",{role:"alert",children:[Object(j.jsx)("img",{src:x,width:"240",alt:"sadcat"}),Object(j.jsx)("p",{children:t})]})},I=a(7),S=a.n(I);var y=function(e){var t=e.onCloseModal,a=e.imgModal;Object(n.useEffect)((function(){return window.addEventListener("keydown",r),function(){return window.removeEventListener("keydown",r)}}));var r=function(e){"Escape"===e.code&&t()};return Object(j.jsx)("div",{className:S.a.overlay,onClick:t,children:Object(j.jsx)("div",{className:S.a.modal,children:Object(j.jsx)("img",{src:a.img,alt:a.alt,className:S.a.modalImage})})})},F=a(13),B=a.n(F);function w(){return Object(j.jsx)(B.a,{type:"Circles",color:"#00BFFF",height:50,width:50,timeout:3e3})}var N=a(14),L=a.n(N);var C=function(e){var t=e.onNextPageImg;return Object(j.jsx)("button",{type:"button",className:L.a.loadButton,onClick:t,children:"Load more"})},k=a(15),G=a.n(k),M="idle",E="pending",R="resolved",P="rejected";var T=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),o=Object(i.a)(c,2),l=o[0],m=o[1],u=Object(n.useState)(null),g=Object(i.a)(u,2),b=g[0],O=g[1],f=Object(n.useState)(1),p=Object(i.a)(f,2),x=p[0],I=p[1],S=Object(n.useState)(M),F=Object(i.a)(S,2),B=F[0],N=F[1],L=Object(n.useState)(!1),k=Object(i.a)(L,2),T=k[0],U=k[1],D=Object(n.useState)(null),q=Object(i.a)(D,2),W=q[0],J=q[1];Object(n.useEffect)((function(){""!==a&&function(e,t){N(E),h(e,t).then((function(t){if(0===t.total)return O({message:"There are no pictures with the name ".concat(e)}),void N(P);m((function(e){return[].concat(Object(s.a)(e),Object(s.a)(t.hits))})),N(R),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(t){O({message:"There are no pictures with the name ".concat(e)}),N(P)}))}(a,x)}),[a,x]);var K=function(e,t){J({img:e,alt:t})},X=function(){U(!T)};return Object(j.jsxs)("div",{children:[Object(j.jsx)(d,{onSubmit:function(e){r(e),I(1),m([])}}),B===E&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(_,{images:l,onOpenModal:X,onSetImg:K}),Object(j.jsxs)("div",{className:G.a.loader,children:[Object(j.jsx)(w,{}),Object(j.jsx)("p",{children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c..."})]})]}),B===R&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(_,{images:l,onOpenModal:X,onSetImg:K}),Object(j.jsx)(C,{onNextPageImg:function(){return I((function(e){return e+1}))}}),T&&Object(j.jsx)(y,{onCloseModal:X,imgModal:W})]}),B===P&&Object(j.jsx)(v,{message:b.message})]})},U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,44)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)}))};o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(T,{})}),document.getElementById("root")),U()},7:function(e,t,a){e.exports={overlay:"Modal_overlay__a-CWT",modal:"Modal_modal__-LnQF",modalImage:"Modal_modalImage__3nFXf"}},9:function(e,t,a){e.exports={imageGalleryItem:"ImageGalleryItem_imageGalleryItem__1lpKP",imageGalleryItemImage:"ImageGalleryItem_imageGalleryItemImage__13DBK"}}},[[43,1,2]]]);
//# sourceMappingURL=main.35579914.chunk.js.map