"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[645],{8383:function(e,t,n){n.d(t,{Z:function(){return r}});var o="Footer_container__iICw7",c=n(3329),r=function(){return(0,c.jsx)("div",{className:o})}},9938:function(e,t,n){n.d(t,{Z:function(){return i}});var o=n(4691),c="Loader_loader__DwtSp",r=n(3329),i=function(){return(0,r.jsx)("div",{className:c,children:(0,r.jsx)(o.s5,{strokeColor:"orange",strokeWidth:"5",animationDuration:"1.5",width:"96",visible:!0})})}},5413:function(e,t,n){n.d(t,{Z:function(){return y}});var o=n(9439),c=n(2791),r="Modal_modal__yEgVW",i="Modal_modal_active__nM+Ac",a="Modal_modal_content__8KQIg",u="Modal_modal_content_active__Vlx6f",l="Modal_photo__KCzk3",s=n(4942),d=n(1413),_="ModalOneClick_modal__VLShz",f="ModalOneClick_modal_active__PW-Rn",m="ModalOneClick_modal_content__ktqNb",p="ModalOneClick_modal_content_active__Rbih3",h="ModalOneClick_form__+TqbX",v=n(4659),j=n(9434),x=n(3329),k=function(e){var t=e.activeModalOneClick,n=e.setModalOneClickActive,r=e.closeModal,i=e.order,a=(0,j.I0)(),u=i.title,l=i.price,k=i.type,y=i.color,b=i.code,g={customerName:"",customerPhone:""},C=(0,c.useState)({}),Z=(0,o.Z)(C,2),w=Z[0],N=Z[1],O=(0,c.useState)((0,d.Z)({},g)),S=(0,o.Z)(O,2),M=S[0],P=S[1],E=M.customerName,L=M.customerPhone,q=(new Date).toLocaleString();(0,c.useEffect)((function(){var e=String(i.quantity);N({title:u,price:l,type:k,color:y,code:b,quantity:e,customerName:E,customerPhone:L,date:q});var t=function(e){"Escape"===e.code&&I()};return window.addEventListener("keydown",t),function(){return window.removeEventListener("keydown",t)}}),[t,E,L]);var I=function(){n(!1),w({}),P((0,d.Z)({},g))},A=(0,c.useCallback)((function(e){var t=e.target,n=t.name,o=t.value;P((function(e){return(0,d.Z)((0,d.Z)({},e),{},(0,s.Z)({},n,o))}))}),[P]);return(0,x.jsx)("div",{className:t?f:_,onClick:I,children:(0,x.jsxs)("div",{className:t?p:m,onClick:function(e){return e.stopPropagation()},children:[(0,x.jsxs)("form",{className:h,children:[(0,x.jsxs)("label",{children:["\u0406\u043c'\u044f",(0,x.jsx)("input",{required:!0,name:"customerName",onChange:A,value:E})]}),(0,x.jsxs)("label",{children:["\u0422\u0435\u043b\u0435\u0444\u043e\u043d",(0,x.jsx)("input",{required:!0,name:"customerPhone",onChange:A,value:L})]}),(0,x.jsx)("button",{type:"button",onClick:function(){a((0,v.S)(w)),n(!1),N({}),P((0,d.Z)({},g)),r()},children:"\u0412\u0456\u0434\u043f\u0440\u0430\u0432\u0438\u0442\u0438 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"})]}),(0,x.jsx)("button",{type:"button",onClick:I,children:"\u0437\u0430\u043a\u0440\u044b\u0442\u044c"})]})})},y=function(e){var t=e.modalActive,n=e.setModalActive,s=e.product,d=s.title,_=s.photo,f=s.price,m=s.type,p=s.color,h=s.code,v=s.description,j=(0,c.useState)({}),y=(0,o.Z)(j,2),b=y[0],g=y[1],C=(0,c.useState)(1),Z=(0,o.Z)(C,2),w=Z[0],N=Z[1],O=(0,c.useState)(!1),S=(0,o.Z)(O,2),M=S[0],P=S[1];(0,c.useEffect)((function(){var e=function(e){"Escape"===e.code&&L()};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}));var E=function(e){"increment"===e.target.name?N(""===w?1:w+1):"decrement"===e.target.name?w>0&&N(w-1):"quantity"===e.target.name&&(0===e.target.value.length?N(""):N(e.target.value))},L=function(){n(!1),g({}),N(1)};return(0,x.jsxs)("div",{children:[(0,x.jsx)("div",{className:t?i:r,onClick:L,children:(0,x.jsxs)("div",{className:t?u:a,onClick:function(e){return e.stopPropagation()},children:[(0,x.jsx)("h1",{children:d}),(0,x.jsx)("img",{className:l,src:_,alt:d}),(0,x.jsxs)("p",{children:["\u0426\u0456\u043d\u0430: ",f," \u0433\u0440\u043d"]}),(0,x.jsxs)("p",{children:["\u0424\u0430\u0441\u043e\u0432\u043a\u0430: ",m]}),(0,x.jsxs)("p",{children:["\u041a\u043e\u043b\u0456\u0440: ",p]}),(0,x.jsxs)("p",{children:["\u041a\u043e\u0434 \u0442\u043e\u0432\u0430\u0440\u0443: ",h]}),(0,x.jsxs)("p",{children:["\u041e\u043f\u0438\u0441: ",v]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("button",{type:"button",onClick:E,name:"decrement",children:"-"}),(0,x.jsx)("input",{value:w,name:"quantity",onChange:E,type:"number"}),(0,x.jsx)("button",{type:"button",onClick:E,name:"increment",children:"+"})]}),(0,x.jsx)("button",{type:"button",onClick:L,children:"\u0437\u0430\u043a\u0440\u044b\u0442\u044c"}),(0,x.jsx)("button",{type:"button",onClick:function(){g({title:d,price:f,code:h,color:p,type:m,quantity:w}),P(!0)},children:"\u0417\u0430\u043a\u0430\u0437 \u0432 1 \u043a\u043b\u0438\u043a"})]})}),(0,x.jsx)(k,{activeModalOneClick:M,setModalOneClickActive:P,order:b,closeModal:L})]})}},5998:function(e,t,n){n.d(t,{Z:function(){return u}});var o=n(9439),c="Search_container__FpDfx",r=n(7689),i=n(2791),a=n(3329),u=function(){var e=(0,r.s0)(),t=(0,i.useState)(""),n=(0,o.Z)(t,2),u=n[0],l=n[1];return(0,a.jsxs)("div",{className:c,children:[(0,a.jsx)("input",{value:u,onChange:function(e){l(e.target.value)}}),(0,a.jsx)("button",{type:"button",onClick:function(){e("/products?search=".concat(u))},children:"\u041f\u043e\u0448\u0443\u043a"})]})}},128:function(e,t,n){n.d(t,{Z:function(){return _}});var o=n(1413),c=n(4925),r="ProductItem_catalog_link__Be+UF",i="ProductItem_image_link__dTbox",a="ProductItem_image_title__nSwSB",u=n(3329),l=function(e){var t=e.photo,n=e.title,o=e.description,c=e.price,l=e.type,s=e.color,d=e.code,_=e._id,f=e.pickedProduct,m={photo:t,title:n,description:o,price:c,type:l,color:s,code:d,_id:_};return(0,u.jsxs)("li",{className:r,onClick:function(){f(m)},children:[(0,u.jsx)("img",{className:i,src:t,alt:n}),(0,u.jsx)("p",{className:a,children:n})]})},s="ProductList_catalog_list__OirNz",d=["_id"],_=function(e){var t=e.productList,n=e.fetchProduct,r=function(e){n(e)},i=t.map((function(e){var t=e._id,n=(0,c.Z)(e,d);return(0,u.jsx)(l,(0,o.Z)((0,o.Z)({},n),{},{_id:t,pickedProduct:r}),t)}));return(0,u.jsx)("div",{children:(0,u.jsx)("ul",{className:s,children:i})})}},1645:function(e,t,n){n.r(t);var o=n(9439),c=n(8383),r=n(5998),i=n(1087),a=n(2791),u=n(220),l=n(9434),s=n(128),d=n(9938),_=n(9325),f=n(5413),m=n(3329);t.default=function(){var e=(0,l.v9)(_.h),t=(0,i.lr)(),n=(0,o.Z)(t,1)[0],p=(0,l.I0)(),h=(0,a.useState)({}),v=(0,o.Z)(h,2),j=v[0],x=v[1],k=(0,a.useState)({}),y=(0,o.Z)(k,2),b=y[0],g=y[1],C=(0,a.useState)(!1),Z=(0,o.Z)(C,2),w=Z[0],N=Z[1];(0,a.useEffect)((function(){try{var e=n.get("search");p((0,u.HN)(e)).then((function(e){return g(e.payload.data)}))}catch(t){console.log(t)}}),[p,n]);return(0,m.jsxs)("div",{children:[(0,m.jsx)(r.Z,{}),e?(0,m.jsx)(d.Z,{}):(0,m.jsx)("div",{children:0!==Object.keys(b).length?(0,m.jsx)(s.Z,{productList:b,fetchProduct:function(e){x(e),N(!0)}}):(0,m.jsx)("p",{})}),(0,m.jsx)(f.Z,{active:w,setActive:N,product:j}),(0,m.jsx)(c.Z,{})]})}},9325:function(e,t,n){n.d(t,{h:function(){return o}});var o=function(e){return e.product.loading}},4925:function(e,t,n){function o(e,t){if(null==e)return{};var n,o,c=function(e,t){if(null==e)return{};var n,o,c={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}n.d(t,{Z:function(){return o}})}}]);
//# sourceMappingURL=645.ca327b2f.chunk.js.map