"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[645],{8383:function(t,n,e){e.d(n,{Z:function(){return i}});var r="Footer_container__iICw7",c=e(3329),i=function(){return(0,c.jsx)("div",{className:r})}},9938:function(t,n,e){e.d(n,{Z:function(){return o}});var r=e(4691),c="Loader_loader__DwtSp",i=e(3329),o=function(){return(0,i.jsx)("div",{className:c,children:(0,i.jsx)(r.s5,{strokeColor:"orange",strokeWidth:"5",animationDuration:"1.5",width:"96",visible:!0})})}},3713:function(t,n,e){e.d(n,{Z:function(){return f}});var r=e(1413),c=e(9439),i=e(2791),o="Modal_modal__yEgVW",u="Modal_modal_active__nM+Ac",a="Modal_modal_content__8KQIg",s="Modal_modal_content_active__Vlx6f",l="Modal_photo__KCzk3",d=e(3329),f=function(t){var n=t.active,e=t.setActive,f=t.product,p=f.title,_=f.photo,h=f.price,v=f.type,m=f.color,j=f.code,x=f.description,y={title:p,price:h,color:m,code:j,quantity:1},g=(0,i.useState)((0,r.Z)({},y)),b=(0,c.Z)(g,2),k=b[0],Z=b[1],w=k.quantity;(0,i.useEffect)((function(){var t=function(t){"Escape"===t.code&&N()};return window.addEventListener("keydown",t),function(){return window.removeEventListener("keydown",t)}}));var C=function(t){"increment"===t.target.name?Z((function(t){return{quantity:t.quantity+1}})):"decrement"===t.target.name?w>1&&Z((function(t){return{quantity:t.quantity-1}})):"quantity"===t.target.name&&(0===t.target.value.length?Z((function(t){return{quantity:""}})):Z((function(n){return{quantity:Number(t.target.value)}})))},N=function(){e(!1),Z((0,r.Z)({},y))};return(0,d.jsx)("div",{className:n?u:o,onClick:N,children:(0,d.jsxs)("div",{className:n?s:a,onClick:function(t){return t.stopPropagation()},children:[(0,d.jsx)("h1",{children:p}),(0,d.jsx)("img",{className:l,src:_,alt:p}),(0,d.jsxs)("p",{children:["\u0426\u0456\u043d\u0430: ",h," \u0433\u0440\u043d"]}),(0,d.jsxs)("p",{children:["\u0424\u0430\u0441\u043e\u0432\u043a\u0430: ",v]}),(0,d.jsxs)("p",{children:["\u041a\u043e\u043b\u0456\u0440: ",m]}),(0,d.jsxs)("p",{children:["\u041a\u043e\u0434 \u0442\u043e\u0432\u0430\u0440\u0443: ",j]}),(0,d.jsxs)("p",{children:["\u041e\u043f\u0438\u0441: ",x]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("button",{type:"button",onClick:C,name:"decrement",children:"-"}),(0,d.jsx)("input",{value:w,name:"quantity",onChange:C,type:"number"}),(0,d.jsx)("button",{type:"button",onClick:C,name:"increment",children:"+"})]}),(0,d.jsx)("button",{type:"button",onClick:N,children:"\u0437\u0430\u043a\u0440\u044b\u0442\u044c"}),(0,d.jsx)("button",{type:"button",children:"\u0417\u0430\u043a\u0430\u0437 \u0432 1 \u043a\u043b\u0438\u043a"})]})})}},5998:function(t,n,e){e.d(n,{Z:function(){return a}});var r=e(9439),c="Search_container__FpDfx",i=e(7689),o=e(2791),u=e(3329),a=function(){var t=(0,i.s0)(),n=(0,o.useState)(""),e=(0,r.Z)(n,2),a=e[0],s=e[1];return(0,u.jsxs)("div",{className:c,children:[(0,u.jsx)("input",{value:a,onChange:function(t){s(t.target.value)}}),(0,u.jsx)("button",{type:"button",onClick:function(){t("/products?search=".concat(a))},children:"\u041f\u043e\u0448\u0443\u043a"})]})}},128:function(t,n,e){e.d(n,{Z:function(){return f}});var r=e(1413),c=e(4925),i="ProductItem_catalog_link__Be+UF",o="ProductItem_image_link__dTbox",u="ProductItem_image_title__nSwSB",a=e(3329),s=function(t){var n=t.photo,e=t.title,r=t.description,c=t.price,s=t.type,l=t.color,d=t.code,f=t._id,p=t.pickedProduct,_={photo:n,title:e,description:r,price:c,type:s,color:l,code:d,_id:f};return(0,a.jsxs)("li",{className:i,onClick:function(){p(_)},children:[(0,a.jsx)("img",{className:o,src:n,alt:e}),(0,a.jsx)("p",{className:u,children:e})]})},l="ProductList_catalog_list__OirNz",d=["_id"],f=function(t){var n=t.productList,e=t.fetchProduct,i=function(t){e(t)},o=n.map((function(t){var n=t._id,e=(0,c.Z)(t,d);return(0,a.jsx)(s,(0,r.Z)((0,r.Z)({},e),{},{_id:n,pickedProduct:i}),n)}));return(0,a.jsx)("div",{children:(0,a.jsx)("ul",{className:l,children:o})})}},1645:function(t,n,e){e.r(n);var r=e(9439),c=e(8383),i=e(5998),o=e(1087),u=e(2791),a=e(220),s=e(9434),l=e(128),d=e(9938),f=e(9325),p=e(3713),_=e(3329);n.default=function(){var t=(0,s.v9)(f.h),n=(0,o.lr)(),e=(0,r.Z)(n,1)[0],h=(0,s.I0)(),v=(0,u.useState)({}),m=(0,r.Z)(v,2),j=m[0],x=m[1],y=(0,u.useState)({}),g=(0,r.Z)(y,2),b=g[0],k=g[1],Z=(0,u.useState)(!1),w=(0,r.Z)(Z,2),C=w[0],N=w[1];(0,u.useEffect)((function(){try{var t=e.get("search");h((0,a.HN)(t)).then((function(t){return k(t.payload.data)}))}catch(n){console.log(n)}}),[h,e]);return(0,_.jsxs)("div",{children:[(0,_.jsx)(i.Z,{}),t?(0,_.jsx)(d.Z,{}):(0,_.jsx)("div",{children:0!==Object.keys(b).length?(0,_.jsx)(l.Z,{productList:b,fetchProduct:function(t){x(t),N(!0)}}):(0,_.jsx)("p",{})}),(0,_.jsx)(p.Z,{active:C,setActive:N,product:j}),(0,_.jsx)(c.Z,{})]})}},9325:function(t,n,e){e.d(n,{h:function(){return r}});var r=function(t){return t.product.loading}},4925:function(t,n,e){function r(t,n){if(null==t)return{};var e,r,c=function(t,n){if(null==t)return{};var e,r,c={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(c[e]=t[e]);return c}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(c[e]=t[e])}return c}e.d(n,{Z:function(){return r}})}}]);
//# sourceMappingURL=645.e0b2d487.chunk.js.map