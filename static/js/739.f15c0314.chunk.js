"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[739,33],{8383:function(t,n,e){e.d(n,{Z:function(){return i}});var c="Footer_container__iICw7",r=e(3329),i=function(){return(0,r.jsx)("div",{className:c})}},9938:function(t,n,e){e.d(n,{Z:function(){return o}});var c=e(4691),r="Loader_loader__DwtSp",i=e(3329),o=function(){return(0,i.jsx)("div",{className:r,children:(0,i.jsx)(c.s5,{strokeColor:"orange",strokeWidth:"5",animationDuration:"1.5",width:"96",visible:!0})})}},3713:function(t,n,e){e.d(n,{Z:function(){return f}});var c=e(1413),r=e(9439),i=e(2791),o="Modal_modal__yEgVW",a="Modal_modal_active__nM+Ac",u="Modal_modal_content__8KQIg",s="Modal_modal_content_active__Vlx6f",l="Modal_photo__KCzk3",d=e(3329),f=function(t){var n=t.active,e=t.setActive,f=t.product,_=f.title,h=f.photo,p=f.price,j=f.type,m=f.color,v=f.code,x=f.description,g={title:_,price:p,color:m,code:v,quantity:1},y=(0,i.useState)((0,c.Z)({},g)),b=(0,r.Z)(y,2),k=b[0],Z=b[1],S=k.quantity;(0,i.useEffect)((function(){var t=function(t){"Escape"===t.code&&w()};return window.addEventListener("keydown",t),function(){return window.removeEventListener("keydown",t)}}));var N=function(t){"increment"===t.target.name?Z((function(t){return{quantity:t.quantity+1}})):"decrement"===t.target.name?S>1&&Z((function(t){return{quantity:t.quantity-1}})):"quantity"===t.target.name&&(0===t.target.value.length?Z((function(t){return{quantity:""}})):Z((function(n){return{quantity:Number(t.target.value)}})))},w=function(){e(!1),Z((0,c.Z)({},g))};return(0,d.jsx)("div",{className:n?a:o,onClick:w,children:(0,d.jsxs)("div",{className:n?s:u,onClick:function(t){return t.stopPropagation()},children:[(0,d.jsx)("h1",{children:_}),(0,d.jsx)("img",{className:l,src:h,alt:_}),(0,d.jsxs)("p",{children:["\u0426\u0456\u043d\u0430: ",p," \u0433\u0440\u043d"]}),(0,d.jsxs)("p",{children:["\u0424\u0430\u0441\u043e\u0432\u043a\u0430: ",j]}),(0,d.jsxs)("p",{children:["\u041a\u043e\u043b\u0456\u0440: ",m]}),(0,d.jsxs)("p",{children:["\u041a\u043e\u0434 \u0442\u043e\u0432\u0430\u0440\u0443: ",v]}),(0,d.jsxs)("p",{children:["\u041e\u043f\u0438\u0441: ",x]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("button",{type:"button",onClick:N,name:"decrement",children:"-"}),(0,d.jsx)("input",{value:S,name:"quantity",onChange:N,type:"number"}),(0,d.jsx)("button",{type:"button",onClick:N,name:"increment",children:"+"})]}),(0,d.jsx)("button",{type:"button",onClick:w,children:"\u0437\u0430\u043a\u0440\u044b\u0442\u044c"}),(0,d.jsx)("button",{type:"button",children:"\u0417\u0430\u043a\u0430\u0437 \u0432 1 \u043a\u043b\u0438\u043a"})]})})}},5998:function(t,n,e){e.d(n,{Z:function(){return u}});var c=e(9439),r="Search_container__FpDfx",i=e(7689),o=e(2791),a=e(3329),u=function(){var t=(0,i.s0)(),n=(0,o.useState)(""),e=(0,c.Z)(n,2),u=e[0],s=e[1];return(0,a.jsxs)("div",{className:r,children:[(0,a.jsx)("input",{value:u,onChange:function(t){s(t.target.value)}}),(0,a.jsx)("button",{type:"button",onClick:function(){t("/products?search=".concat(u))},children:"\u041f\u043e\u0448\u0443\u043a"})]})}},128:function(t,n,e){e.d(n,{Z:function(){return f}});var c=e(1413),r=e(4925),i="ProductItem_catalog_link__Be+UF",o="ProductItem_image_link__dTbox",a="ProductItem_image_title__nSwSB",u=e(3329),s=function(t){var n=t.photo,e=t.title,c=t.description,r=t.price,s=t.type,l=t.color,d=t.code,f=t._id,_=t.pickedProduct,h={photo:n,title:e,description:c,price:r,type:s,color:l,code:d,_id:f};return(0,u.jsxs)("li",{className:i,onClick:function(){_(h)},children:[(0,u.jsx)("img",{className:o,src:n,alt:e}),(0,u.jsx)("p",{className:a,children:e})]})},l="ProductList_catalog_list__OirNz",d=["_id"],f=function(t){var n=t.productList,e=t.fetchProduct,i=function(t){e(t)},o=n.map((function(t){var n=t._id,e=(0,r.Z)(t,d);return(0,u.jsx)(s,(0,c.Z)((0,c.Z)({},e),{},{_id:n,pickedProduct:i}),n)}));return(0,u.jsx)("div",{children:(0,u.jsx)("ul",{className:l,children:o})})}},9033:function(t,n,e){e.r(n);var c=e(9439),r=e(9434),i=e(2791),o=e(9325),a=e(220),u=e(9938),s=e(128),l=e(7689),d=e(3713),f=e(5998),_=e(8383),h=e(3329);n.default=function(){var t=(0,l.UO)(),n=(0,r.I0)(),e=(0,r.v9)(o.h),p=t.category,j=(0,i.useState)({}),m=(0,c.Z)(j,2),v=m[0],x=m[1],g=(0,i.useState)({}),y=(0,c.Z)(g,2),b=y[0],k=y[1],Z=(0,i.useState)(!1),S=(0,c.Z)(Z,2),N=S[0],w=S[1];(0,i.useEffect)((function(){try{n((0,a.uP)(p)).then((function(t){return k(t.payload.data)}))}catch(t){console.log(t)}}),[n,p]);return(0,h.jsxs)("div",{children:[(0,h.jsx)(f.Z,{}),e?(0,h.jsx)(u.Z,{}):(0,h.jsx)("div",{children:0!==Object.keys(b).length?(0,h.jsx)(s.Z,{productList:b,fetchProduct:function(t){x(t),w(!0)}}):(0,h.jsx)("p",{})}),(0,h.jsx)(d.Z,{active:N,setActive:w,product:v}),(0,h.jsx)(_.Z,{})]})}},2739:function(t,n,e){e.r(n),e.d(n,{default:function(){return Z}});var c=e(9439),r=e(1413),i=e(4925),o="SubcategoryItem_catalog_link__fnvzc",a="SubcategoryItem_image_link__eXxWs",u="SubcategoryItem_image_title__WBz91",s=e(3329),l=function(t){var n=t.nameSubcategory,e=t.photoSubcategory,c=t.subcategory,r=t.pickSubcategory;return(0,s.jsxs)("li",{onClick:function(t){r(t.currentTarget.id)},className:o,id:c,children:[(0,s.jsx)("img",{className:a,src:e,alt:n}),(0,s.jsx)("p",{className:u,children:n})]})},d="SubcategoryList_catalog_list__7colA",f=["_id"],_=function(t){var n=t.subcategories,e=t.fetchSubcategory,c=function(t){e(t)},o=n.map((function(t){var n=t._id,e=(0,i.Z)(t,f);return(0,s.jsx)(l,(0,r.Z)((0,r.Z)({},e),{},{_id:n,pickSubcategory:c}),n)}));return(0,s.jsx)("div",{children:(0,s.jsx)("ul",{className:d,children:o})})},h=e(7689),p=e(9434),j=e(2791),m=e(6436),v=e(4930),x=e(9938),g="Subcategory_container__Uy88e",y=e(8383),b=e(5998),k=e(9033),Z=function(){var t=(0,h.s0)(),n=(0,h.UO)(),e=(0,p.I0)(),r=(0,p.v9)(m.h),i=(0,j.useState)({}),o=(0,c.Z)(i,2),a=o[0],u=o[1],l=n.category;(0,j.useEffect)((function(){try{e((0,v.kc)(l)).then((function(t){u(t.payload.data)}))}catch(t){console.log(t)}}),[e,l]);return(0,s.jsx)("div",{children:!0===r?(0,s.jsx)(x.Z,{}):(0,s.jsx)("div",{children:(0,s.jsx)("div",{className:g,children:0!==Object.keys(a).length?(0,s.jsxs)("div",{children:[(0,s.jsx)(b.Z,{}),(0,s.jsx)(_,{subcategories:a,fetchSubcategory:function(n){t("/catalog/".concat(l,"/").concat(n))}}),(0,s.jsx)(y.Z,{})]}):(0,s.jsx)(k.default,{})})})})}},9325:function(t,n,e){e.d(n,{h:function(){return c}});var c=function(t){return t.product.loading}},6436:function(t,n,e){e.d(n,{h:function(){return c}});var c=function(t){return t.subcategory.loading}},4925:function(t,n,e){function c(t,n){if(null==t)return{};var e,c,r=function(t,n){if(null==t)return{};var e,c,r={},i=Object.keys(t);for(c=0;c<i.length;c++)e=i[c],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(c=0;c<i.length;c++)e=i[c],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}e.d(n,{Z:function(){return c}})}}]);
//# sourceMappingURL=739.f15c0314.chunk.js.map