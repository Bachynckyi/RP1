"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[739,317],{8383:function(t,e,n){n.d(e,{Z:function(){return o}});var c="Footer_container__iICw7",r=n(3329),o=function(){return(0,r.jsx)("div",{className:c})}},9938:function(t,e,n){n.d(e,{Z:function(){return i}});var c=n(4691),r="Loader_loader__DwtSp",o=n(3329),i=function(){return(0,o.jsx)("div",{className:r,children:(0,o.jsx)(c.s5,{strokeColor:"orange",strokeWidth:"5",animationDuration:"1.5",width:"96",visible:!0})})}},102:function(t,e,n){n.r(e),n.d(e,{default:function(){return N}});var c=n(9439),r=n(9434),o=n(2791),i=n(9325),a=n(220),s=n(9938),u=n(1413),l=n(4925),d="ProductItem_catalog_link__Be+UF",_="ProductItem_image_link__dTbox",f="ProductItem_image_title__nSwSB",h=n(3329),p=function(t){var e=t.photo,n=t.title,c=t.description,r=t.price,o=t.type,i=t.color,a=t.code,s=t._id,u=t.pickedProduct,l={photo:e,title:n,description:c,price:r,type:o,color:i,code:a,_id:s};return(0,h.jsxs)("li",{className:d,onClick:function(){u(l)},children:[(0,h.jsx)("img",{className:_,src:e,alt:n}),(0,h.jsx)("p",{className:f,children:n})]})},g="ProductList_catalog_list__OirNz",j=["_id"],x=function(t){var e=t.productList,n=t.fetchProduct,c=function(t){n(t)},r=e.map((function(t){var e=t._id,n=(0,l.Z)(t,j);return(0,h.jsx)(p,(0,u.Z)((0,u.Z)({},n),{},{_id:e,pickedProduct:c}),e)}));return(0,h.jsx)("div",{children:(0,h.jsx)("ul",{className:g,children:r})})},m=n(7689),v="Modal_modal__yEgVW",y="Modal_modal_active__nM+Ac",b="Modal_modal_content__8KQIg",k="Modal_modal_content_active__Vlx6f",S="Modal_photo__KCzk3",Z=function(t){var e=t.active,n=t.setActive,c=t.product,r=c.title,o=c.photo,i=c.price,a=c.type,s=c.color,u=c.code,l=c.description;return(0,h.jsx)("div",{className:e?y:v,onClick:function(){return n(!1)},children:(0,h.jsxs)("div",{className:e?k:b,onClick:function(t){return t.stopPropagation()},children:[(0,h.jsx)("h1",{children:r}),(0,h.jsx)("img",{className:S,src:o,alt:r}),(0,h.jsxs)("p",{children:["\u0426\u0456\u043d\u0430: ",i," \u0433\u0440\u043d"]}),(0,h.jsxs)("p",{children:["\u0424\u0430\u0441\u043e\u0432\u043a\u0430: ",a]}),(0,h.jsxs)("p",{children:["\u041a\u043e\u043b\u0456\u0440: ",s]}),(0,h.jsxs)("p",{children:["\u041a\u043e\u0434 \u0442\u043e\u0432\u0430\u0440\u0443: ",u]}),(0,h.jsxs)("p",{children:["\u041e\u043f\u0438\u0441: ",l]}),(0,h.jsx)("button",{type:"button",onClick:function(){return n(!1)},children:"\u0437\u0430\u043a\u0440\u044b\u0442\u044c"})]})})},N=function(){var t=(0,r.I0)(),e=(0,r.v9)(i.h),n=(0,o.useState)({}),u=(0,c.Z)(n,2),l=u[0],d=u[1],_=(0,m.UO)().category,f=(0,o.useState)(!1),p=(0,c.Z)(f,2),g=p[0],j=p[1],v=(0,o.useState)({}),y=(0,c.Z)(v,2),b=y[0],k=y[1];(0,o.useEffect)((function(){try{t((0,a.u)(_)).then((function(t){return d(t.payload.data)}))}catch(e){console.log(e)}}),[t,_]);return(0,h.jsxs)("div",{children:[e?(0,h.jsx)(s.Z,{}):(0,h.jsx)("div",{children:0!==Object.keys(l).length?(0,h.jsx)(x,{productList:l,fetchProduct:function(t){k(t),j(!0)}}):(0,h.jsx)("p",{})}),(0,h.jsx)(Z,{active:g,setActive:j,product:b})]})}},2739:function(t,e,n){n.r(e),n.d(e,{default:function(){return k}});var c=n(9439),r=n(1413),o=n(4925),i="SubcategoryItem_catalog_link__fnvzc",a="SubcategoryItem_image_link__eXxWs",s="SubcategoryItem_image_title__WBz91",u=n(3329),l=function(t){var e=t.nameSubcategory,n=t.photoSubcategory,c=t.subcategory,r=t.pickSubcategory;return(0,u.jsxs)("li",{onClick:function(t){r(t.currentTarget.id)},className:i,id:c,children:[(0,u.jsx)("img",{className:a,src:n,alt:e}),(0,u.jsx)("p",{className:s,children:e})]})},d="SubcategoryList_catalog_list__7colA",_=["_id"],f=function(t){var e=t.subcategories,n=t.fetchSubcategory,c=function(t){n(t)},i=e.map((function(t){var e=t._id,n=(0,o.Z)(t,_);return(0,u.jsx)(l,(0,r.Z)((0,r.Z)({},n),{},{_id:e,pickSubcategory:c}),e)}));return(0,u.jsx)("div",{children:(0,u.jsx)("ul",{className:d,children:i})})},h=n(7689),p=n(9434),g=n(2791),j=n(6436),x=n(4930),m=n(9938),v="Subcategory_container__Uy88e",y=n(8383),b=n(102),k=function(){var t=(0,h.s0)(),e=(0,h.UO)(),n=(0,p.I0)(),r=(0,p.v9)(j.h),o=(0,g.useState)({}),i=(0,c.Z)(o,2),a=i[0],s=i[1],l=e.category;(0,g.useEffect)((function(){try{n((0,x.kc)(l)).then((function(t){return s(t.payload.data)}))}catch(t){console.log(t)}}),[n,l]);return(0,u.jsx)("div",{children:!0===r?(0,u.jsx)(m.Z,{}):(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{className:v,children:0!==Object.keys(a).length?(0,u.jsx)(f,{subcategories:a,fetchSubcategory:function(e){t("/catalog/".concat(l,"/").concat(e))}}):(0,u.jsx)(b.default,{})}),(0,u.jsx)(y.Z,{})]})})}},9325:function(t,e,n){n.d(e,{h:function(){return c}});var c=function(t){return t.product.loading}},6436:function(t,e,n){n.d(e,{h:function(){return c}});var c=function(t){return t.subcategory.loading}},4925:function(t,e,n){function c(t,e){if(null==t)return{};var n,c,r=function(t,e){if(null==t)return{};var n,c,r={},o=Object.keys(t);for(c=0;c<o.length;c++)n=o[c],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(c=0;c<o.length;c++)n=o[c],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}n.d(e,{Z:function(){return c}})}}]);
//# sourceMappingURL=739.c7b839a9.chunk.js.map