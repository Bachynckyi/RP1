"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[739,21],{8383:function(e,t,n){n.d(t,{Z:function(){return r}});var c="Footer_container__iICw7",o=n(3329),r=function(){return(0,o.jsx)("div",{className:c})}},9938:function(e,t,n){n.d(t,{Z:function(){return i}});var c=n(4691),o="Loader_loader__DwtSp",r=n(3329),i=function(){return(0,r.jsx)("div",{className:o,children:(0,r.jsx)(c.s5,{strokeColor:"orange",strokeWidth:"5",animationDuration:"1.5",width:"96",visible:!0})})}},5413:function(e,t,n){n.d(t,{Z:function(){return S}});var c=n(3433),o=n(9439),r=n(2791),i="Modal_modal__yEgVW",a="Modal_modal_active__nM+Ac",s="Modal_modal_content__8KQIg",l="Modal_modal_content_active__Vlx6f",u="Modal_photo__KCzk3",d=n(4942),_=n(1413),f="ModalOneClick_modal__VLShz",m="ModalOneClick_modal_active__PW-Rn",h="ModalOneClick_modal_content__ktqNb",v="ModalOneClick_modal_content_active__Rbih3",x="ModalOneClick_form__+TqbX",p=n(4659),j=n(9434),g=n(3329),k=function(e){var t=e.activeModalOneClick,n=e.setModalOneClickActive,c=e.closeModal,i=e.order,a=(0,j.I0)(),s=i.title,l=i.price,u=i.type,k=i.color,y=i.code,b={customerName:"",customerPhone:""},S=(0,r.useState)({}),Z=(0,o.Z)(S,2),C=Z[0],N=Z[1],w=(0,r.useState)((0,_.Z)({},b)),M=(0,o.Z)(w,2),P=M[0],O=M[1],I=P.customerName,L=P.customerPhone,E=(new Date).toLocaleString();(0,r.useEffect)((function(){var e=String(i.quantity);N({title:s,price:l,type:u,color:k,code:y,quantity:e,customerName:I,customerPhone:L,date:E});var t=function(e){"Escape"===e.code&&q()};return window.addEventListener("keydown",t),function(){return window.removeEventListener("keydown",t)}}),[t,I,L]);var q=function(){n(!1),O((0,_.Z)({},b))},A=(0,r.useCallback)((function(e){var t=e.target,n=t.name,c=t.value;O((function(e){return(0,_.Z)((0,_.Z)({},e),{},(0,d.Z)({},n,c))}))}),[O]);return(0,g.jsx)("div",{className:t?m:f,onClick:q,children:(0,g.jsxs)("div",{className:t?v:h,onClick:function(e){return e.stopPropagation()},children:[(0,g.jsxs)("form",{className:x,children:[(0,g.jsxs)("label",{children:["\u0406\u043c'\u044f",(0,g.jsx)("input",{required:!0,name:"customerName",onChange:A,value:I})]}),(0,g.jsxs)("label",{children:["\u0422\u0435\u043b\u0435\u0444\u043e\u043d",(0,g.jsx)("input",{required:!0,name:"customerPhone",onChange:A,value:L})]}),(0,g.jsx)("button",{type:"button",onClick:function(){a((0,p.S)(C)),n(!1),N({}),O((0,_.Z)({},b)),c()},children:"\u0412\u0456\u0434\u043f\u0440\u0430\u0432\u0438\u0442\u0438 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"})]}),(0,g.jsx)("button",{type:"button",onClick:q,children:"\u0437\u0430\u043a\u0440\u044b\u0442\u044c"})]})})},y=n(8185),b=n(9869),S=function(e){var t=e.modalActive,n=e.setModalActive,d=e.product,_=d.title,f=d.photo,m=d.price,h=d.type,v=d.color,x=d.code,p=d.description,S=d._id,Z=(0,r.useState)({}),C=(0,o.Z)(Z,2),N=C[0],w=C[1],M=(0,r.useState)("1"),P=(0,o.Z)(M,2),O=P[0],I=P[1],L=(0,r.useState)(!1),E=(0,o.Z)(L,2),q=E[0],A=E[1],D=(0,j.v9)(b.bg);(0,r.useEffect)((function(){w({title:_,price:m,code:x,color:v,type:h,quantity:O,_id:S,photo:f});var e=function(e){"Escape"===e.code&&J()};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[t,O]);var z=function(e){if("increment"===e.target.name)I(""===O?"1":String(Number(O)+1));else if("decrement"===e.target.name)O>0&&I(String(Number(O)-1));else if("quantity"===e.target.name){var t=e.target.value.replace(/\D+/g,"");I(0===t?"":String(t))}},J=function(){n(!1),w({}),I(1)};return(0,g.jsxs)("div",{children:[(0,g.jsx)("div",{className:t?a:i,onClick:J,children:(0,g.jsxs)("div",{className:t?l:s,onClick:function(e){return e.stopPropagation()},children:[(0,g.jsx)("h1",{children:_}),(0,g.jsx)("img",{className:u,src:f,alt:_}),(0,g.jsxs)("p",{children:["\u0426\u0456\u043d\u0430: ",m," \u0433\u0440\u043d"]}),(0,g.jsxs)("p",{children:["\u0424\u0430\u0441\u043e\u0432\u043a\u0430: ",h]}),(0,g.jsxs)("p",{children:["\u041a\u043e\u043b\u0456\u0440: ",v]}),(0,g.jsxs)("p",{children:["\u041a\u043e\u0434 \u0442\u043e\u0432\u0430\u0440\u0443: ",x]}),(0,g.jsxs)("p",{children:["\u041e\u043f\u0438\u0441: ",p]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("button",{type:"button",onClick:z,name:"decrement",children:"-"}),(0,g.jsx)("input",{value:O,name:"quantity",onChange:z,type:"text"}),(0,g.jsx)("button",{type:"button",onClick:z,name:"increment",children:"+"})]}),(0,g.jsx)("button",{type:"button",onClick:J,children:"\u0437\u0430\u043a\u0440\u044b\u0442\u044c"}),(0,g.jsx)("button",{type:"button",onClick:function(){A(!0)},children:"\u0417\u0430\u043a\u0430\u0437 \u0432 1 \u043a\u043b\u0438\u043a"}),(0,g.jsx)("button",{onClick:function(){if(!0===D)console.log("\u0417\u0430\u043f\u0438\u0441\u044c \u0432 \u0431\u0430\u0437\u0443");else{var e=localStorage.getItem("order")||"[]",t=JSON.parse(e);localStorage.setItem("order",JSON.stringify([].concat((0,c.Z)(t),[N])))}},type:"button",children:(0,g.jsx)(y.DJ8,{})})]})}),(0,g.jsx)(k,{activeModalOneClick:q,setModalOneClickActive:A,order:N,closeModal:J})]})}},5998:function(e,t,n){n.d(t,{Z:function(){return d}});var c=n(9439),o="Search_container__FpDfx",r="Search_basketIcon__RNH1g",i=n(7689),a=n(1087),s=n(2791),l=n(8185),u=n(3329),d=function(){var e=(0,i.s0)(),t=(0,s.useState)(""),n=(0,c.Z)(t,2),d=n[0],_=n[1];return(0,u.jsxs)("div",{className:o,children:[(0,u.jsxs)("div",{className:o,children:[(0,u.jsx)("input",{value:d,onChange:function(e){_(e.target.value)}}),(0,u.jsx)("button",{type:"button",onClick:function(){e("/products?search=".concat(d))},children:"\u041f\u043e\u0448\u0443\u043a"})]}),(0,u.jsx)(a.OL,{to:"/order",children:(0,u.jsx)(l.DJ8,{className:r})})]})}},128:function(e,t,n){n.d(t,{Z:function(){return _}});var c=n(1413),o=n(4925),r="ProductItem_catalog_link__Be+UF",i="ProductItem_image_link__dTbox",a="ProductItem_image_title__nSwSB",s=n(3329),l=function(e){var t=e.photo,n=e.title,c=e.description,o=e.price,l=e.type,u=e.color,d=e.code,_=e._id,f=e.pickedProduct,m={photo:t,title:n,description:c,price:o,type:l,color:u,code:d,_id:_};return(0,s.jsxs)("li",{className:r,onClick:function(){f(m)},children:[(0,s.jsx)("img",{className:i,src:t,alt:n}),(0,s.jsx)("p",{className:a,children:n})]})},u="ProductList_catalog_list__OirNz",d=["_id"],_=function(e){var t=e.productList,n=e.fetchProduct,r=function(e){n(e)},i=t.map((function(e){var t=e._id,n=(0,o.Z)(e,d);return(0,s.jsx)(l,(0,c.Z)((0,c.Z)({},n),{},{_id:t,pickedProduct:r}),t)}));return(0,s.jsx)("div",{children:(0,s.jsx)("ul",{className:u,children:i})})}},5021:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var c=n(9439),o=n(9434),r=n(2791),i=n(9325),a=n(220),s=n(9938),l=n(128),u=n(7689),d=n(5413),_=n(5998),f=n(8383),m="ProductPage_container__XJoIM",h=n(3329),v=function(){var e=(0,u.UO)(),t=(0,o.I0)(),n=(0,o.v9)(i.h),v=e.category,x=(0,r.useState)({}),p=(0,c.Z)(x,2),j=p[0],g=p[1],k=(0,r.useState)({}),y=(0,c.Z)(k,2),b=y[0],S=y[1],Z=(0,r.useState)(!1),C=(0,c.Z)(Z,2),N=C[0],w=C[1];(0,r.useEffect)((function(){try{t((0,a.uP)(v)).then((function(e){return S(e.payload.data)}))}catch(e){console.log(e)}}),[t,v]);return(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:m,children:(0,h.jsx)(_.Z,{})}),n?(0,h.jsx)(s.Z,{}):(0,h.jsx)("div",{children:0!==Object.keys(b).length?(0,h.jsx)(l.Z,{productList:b,fetchProduct:function(e){g(e),w(!0)}}):(0,h.jsx)("p",{})}),(0,h.jsx)(d.Z,{modalActive:N,setModalActive:w,product:j}),(0,h.jsx)(f.Z,{})]})}},2739:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var c=n(9439),o=n(1413),r=n(4925),i="SubcategoryItem_catalog_link__fnvzc",a="SubcategoryItem_image_link__eXxWs",s="SubcategoryItem_image_title__WBz91",l=n(3329),u=function(e){var t=e.nameSubcategory,n=e.photoSubcategory,c=e.subcategory,o=e.pickSubcategory;return(0,l.jsxs)("li",{onClick:function(e){o(e.currentTarget.id)},className:i,id:c,children:[(0,l.jsx)("img",{className:a,src:n,alt:t}),(0,l.jsx)("p",{className:s,children:t})]})},d="SubcategoryList_catalog_list__7colA",_=["_id"],f=function(e){var t=e.subcategories,n=e.fetchSubcategory,c=function(e){n(e)},i=t.map((function(e){var t=e._id,n=(0,r.Z)(e,_);return(0,l.jsx)(u,(0,o.Z)((0,o.Z)({},n),{},{_id:t,pickSubcategory:c}),t)}));return(0,l.jsx)("div",{children:(0,l.jsx)("ul",{className:d,children:i})})},m=n(7689),h=n(9434),v=n(2791),x=n(6436),p=n(4930),j=n(9938),g="Subcategory_container__Uy88e",k=n(8383),y=n(5998),b=n(5021),S=function(){var e=(0,m.s0)(),t=(0,m.UO)(),n=(0,h.I0)(),o=(0,h.v9)(x.h),r=(0,v.useState)({}),i=(0,c.Z)(r,2),a=i[0],s=i[1],u=t.category;(0,v.useEffect)((function(){try{n((0,p.kc)(u)).then((function(e){s(e.payload.data)}))}catch(e){console.log(e)}}),[n,u]);return(0,l.jsx)("div",{children:!0===o?(0,l.jsx)(j.Z,{}):(0,l.jsx)("div",{children:(0,l.jsx)("div",{className:g,children:0!==Object.keys(a).length?(0,l.jsxs)("div",{children:[(0,l.jsx)(y.Z,{}),(0,l.jsx)(f,{subcategories:a,fetchSubcategory:function(t){e("/catalog/".concat(u,"/").concat(t))}}),(0,l.jsx)(k.Z,{})]}):(0,l.jsx)(b.default,{})})})})}},9325:function(e,t,n){n.d(t,{h:function(){return c}});var c=function(e){return e.product.loading}},6436:function(e,t,n){n.d(t,{h:function(){return c}});var c=function(e){return e.subcategory.loading}}}]);
//# sourceMappingURL=739.b8ffdadf.chunk.js.map