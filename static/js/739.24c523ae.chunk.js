"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[739,21],{8383:function(e,t,n){n.d(t,{Z:function(){return o}});var c={container:"Footer_container__iICw7",contacts_container:"Footer_contacts_container__j5stx",address:"Footer_address__aD4II",contacts_item:"Footer_contacts_item__nw9ee",contacts_link:"Footer_contacts_link__GaNqY"},i=n(3329),o=function(){return(0,i.jsx)("div",{className:c.container,children:(0,i.jsxs)("div",{className:c.contacts_container,children:[(0,i.jsx)("address",{className:c.address,children:"\u0410\u0434\u0440\u0435\u0441\u0430: \u0423\u043a\u0440\u0430\u0457\u043d\u0430, \u043c.\u041a\u0438\u0457\u0432, \u0432\u0443\u043b, \u041c\u0430\u0433\u043d\u0456\u0442\u043e\u0433\u043e\u0440\u0441\u044c\u043a\u0430 \u0431\u0443\u0434.5 "}),(0,i.jsx)("p",{className:c.schedule,children:"\u0420\u0435\u0436\u0438\u043c \u0440\u043e\u0431\u043e\u0442\u0438: \u041f\u043d-\u041f\u0442 9:00 \u2013 17:00"}),(0,i.jsxs)("p",{className:c.contacts_item,children:["\u0422\u0435\u043b\u0435\u0444\u043e\u043d:",(0,i.jsx)("a",{className:c.contacts_link,href:"tel:+380991111111",children:" +38 (099) 158 51 52"})]}),(0,i.jsxs)("p",{className:c.contacts_item,children:["\u0415\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430 \u043f\u043e\u0448\u0442\u0430:",(0,i.jsx)("a",{className:c.contacts_link,href:"mailto:test@example.com",children:" color-farb@gmail.com"})]})]})})}},9938:function(e,t,n){n.d(t,{Z:function(){return a}});var c=n(4691),i="Loader_loader__DwtSp",o=n(3329),a=function(){return(0,o.jsx)("div",{className:i,children:(0,o.jsx)(c.s5,{strokeColor:"orange",strokeWidth:"5",animationDuration:"1.5",width:"96",visible:!0})})}},5413:function(e,t,n){n.d(t,{Z:function(){return S}});var c=n(3433),i=n(9439),o=n(2791),a="Modal_modal__yEgVW",r="Modal_modal_active__nM+Ac",s="Modal_modal_content__8KQIg",l="Modal_modal_content_active__Vlx6f",d="Modal_photo__KCzk3",u="Modal_title__KuCmT",_="Modal_description__i76KN",m=n(4942),h=n(1413),p="ModalOneClick_modal__VLShz",x="ModalOneClick_modal_active__PW-Rn",f="ModalOneClick_modal_content__ktqNb",j="ModalOneClick_modal_content_active__Rbih3",v="ModalOneClick_form__+TqbX",g=n(4659),k=n(9434),y=n(3329),b=function(e){var t=e.activeModalOneClick,n=e.setModalOneClickActive,c=e.closeModal,a=e.order,r=(0,k.I0)(),s=a.title,l=a.price,d=a.type,u=a.color,_=a.code,b={customerName:"",customerPhone:""},N=(0,o.useState)({}),S=(0,i.Z)(N,2),Z=S[0],C=S[1],I=(0,o.useState)((0,h.Z)({},b)),w=(0,i.Z)(I,2),P=w[0],M=w[1],O=P.customerName,L=P.customerPhone,D=(new Date).toLocaleString();(0,o.useEffect)((function(){var e=String(a.quantity);C({title:s,price:l,type:d,color:u,code:_,quantity:e,customerName:O,customerPhone:L,date:D});var t=function(e){"Escape"===e.code&&E()};return window.addEventListener("keydown",t),function(){return window.removeEventListener("keydown",t)}}),[t,O,L]);var E=function(){n(!1),M((0,h.Z)({},b))},q=(0,o.useCallback)((function(e){var t=e.target,n=t.name,c=t.value;M((function(e){return(0,h.Z)((0,h.Z)({},e),{},(0,m.Z)({},n,c))}))}),[M]);return(0,y.jsx)("div",{className:t?x:p,onClick:E,children:(0,y.jsxs)("div",{className:t?j:f,onClick:function(e){return e.stopPropagation()},children:[(0,y.jsxs)("form",{className:v,children:[(0,y.jsxs)("label",{children:["\u0406\u043c'\u044f",(0,y.jsx)("input",{required:!0,name:"customerName",onChange:q,value:O})]}),(0,y.jsxs)("label",{children:["\u0422\u0435\u043b\u0435\u0444\u043e\u043d",(0,y.jsx)("input",{required:!0,name:"customerPhone",onChange:q,value:L})]}),(0,y.jsx)("button",{type:"button",onClick:function(){r((0,g.S)(Z)),n(!1),C({}),M((0,h.Z)({},b)),c()},children:"\u0412\u0456\u0434\u043f\u0440\u0430\u0432\u0438\u0442\u0438 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"})]}),(0,y.jsx)("button",{type:"button",onClick:E,children:"\u0437\u0430\u043a\u0440\u044b\u0442\u044c"})]})})},N=n(9126),S=function(e){var t=e.modalActive,n=e.setModalActive,m=e.product,h=m.title,p=m.photo,x=m.price,f=m.type,j=m.color,v=m.code,g=m.description,k=m._id,S=(0,o.useState)({}),Z=(0,i.Z)(S,2),C=Z[0],I=Z[1],w=(0,o.useState)("1"),P=(0,i.Z)(w,2),M=P[0],O=P[1],L=(0,o.useState)(!1),D=(0,i.Z)(L,2),E=D[0],q=D[1];(0,o.useEffect)((function(){I({title:h,price:x,code:v,color:j,type:f,quantity:M,_id:k,photo:p});var e=function(e){"Escape"===e.code&&V()};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[t,M]);var A=function(e){if("increment"===e.target.name)O(""===M?"1":String(Number(M)+1));else if("decrement"===e.target.name)M>0&&O(String(Number(M)-1));else if("quantity"===e.target.name){var t=e.target.value.replace(/\D+/g,"");O(0===t?"":String(t))}},V=function(){n(!1),I({}),O(1)};return(0,y.jsxs)("div",{children:[(0,y.jsx)("div",{className:t?r:a,onClick:V,children:(0,y.jsxs)("div",{className:t?l:s,onClick:function(e){return e.stopPropagation()},children:[(0,y.jsx)("h1",{className:u,children:h}),(0,y.jsxs)("div",{children:[(0,y.jsx)("img",{className:d,src:p,alt:h}),(0,y.jsxs)("p",{children:["\u0426\u0456\u043d\u0430: ",x," \u0433\u0440\u043d"]}),(0,y.jsxs)("p",{children:["\u0424\u0430\u0441\u043e\u0432\u043a\u0430: ",f]}),(0,y.jsxs)("p",{children:["\u041a\u043e\u043b\u0456\u0440: ",j]}),(0,y.jsxs)("p",{children:["\u041a\u043e\u0434 \u0442\u043e\u0432\u0430\u0440\u0443: ",v]})]}),(0,y.jsxs)("p",{className:_,children:["\u041e\u043f\u0438\u0441: ",g]}),(0,y.jsxs)("div",{children:[(0,y.jsx)("button",{type:"button",onClick:A,name:"decrement",children:"-"}),(0,y.jsx)("input",{value:M,name:"quantity",onChange:A,type:"text"}),(0,y.jsx)("button",{type:"button",onClick:A,name:"increment",children:"+"})]}),(0,y.jsx)("button",{type:"button",onClick:V,children:"\u0437\u0430\u043a\u0440\u044b\u0442\u044c"}),(0,y.jsx)("button",{type:"button",onClick:function(){q(!0)},children:"\u0417\u0430\u043a\u0430\u0437 \u0432 1 \u043a\u043b\u0438\u043a"}),(0,y.jsx)("button",{onClick:function(){var e=localStorage.getItem("order")||"[]",t=JSON.parse(e);t.map((function(e){return e._id})).includes(k)?console.log("\u0423\u0436\u0435 \u0435\u0441\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0435"):localStorage.setItem("order",JSON.stringify([].concat((0,c.Z)(t),[C])))},type:"button",children:(0,y.jsx)(N.DJ8,{})})]})}),(0,y.jsx)(b,{activeModalOneClick:E,setModalOneClickActive:q,order:C,closeModal:V})]})}},5998:function(e,t,n){n.d(t,{Z:function(){return _}});var c=n(9439),i="Search_container__FpDfx",o="Search_input__klILD",a="Search_button__W5MQY",r="Search_icon_search__skg9i",s=n(7689),l=n(2791),d=n(9126),u=n(3329),_=function(){var e=(0,s.s0)(),t=(0,l.useState)(""),n=(0,c.Z)(t,2),_=n[0],m=n[1];return(0,u.jsx)("div",{className:i,children:(0,u.jsxs)("div",{className:i,children:[(0,u.jsx)("input",{className:o,value:_,onChange:function(e){m(e.target.value)},placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u043e\u0448\u0443\u043a\u043e\u0432\u0438\u0439 \u0437\u0430\u043f\u0438\u0442"}),(0,u.jsx)("button",{type:"button",onClick:function(){""!==_&&e("/products?search=".concat(_))},className:a,children:(0,u.jsx)(d.dVI,{className:r})})]})})}},128:function(e,t,n){n.d(t,{Z:function(){return x}});var c=n(1413),i=n(4925),o="ProductItem_product_link__1Rpwt",a="ProductItem_image_link__dTbox",r="ProductItem_info_container__wVcTY",s="ProductItem_image_title__nSwSB",l="ProductItem_color__dkxSQ",d="ProductItem_type__YVrPy",u="ProductItem_color_type__pNxX2",_=n(3329),m=function(e){var t=e.photo,n=e.title,c=e.description,i=e.price,m=e.type,h=e.color,p=e.code,x=e._id,f=e.pickedProduct,j={photo:t,title:n,description:c,price:i,type:m,color:h,code:p,_id:x};return(0,_.jsxs)("li",{className:o,onClick:function(){f(j)},children:[(0,_.jsx)("img",{className:a,src:t,alt:n}),(0,_.jsxs)("div",{className:r,children:[(0,_.jsx)("p",{className:s,children:n}),(0,_.jsxs)("p",{className:l,children:["\u041a\u043e\u043b\u0456\u0440: ",(0,_.jsx)("b",{className:u,children:h})]}),(0,_.jsxs)("p",{className:d,children:["\u0424\u0430\u0441\u0443\u0432\u0430\u043d\u043d\u044f: ",(0,_.jsx)("b",{className:u,children:m})]})]})]})},h="ProductList_catalog_list__OirNz",p=["_id"],x=function(e){var t=e.productList,n=e.fetchProduct,o=function(e){n(e)},a=t.map((function(e){var t=e._id,n=(0,i.Z)(e,p);return(0,_.jsx)(m,(0,c.Z)((0,c.Z)({},n),{},{_id:t,pickedProduct:o}),t)}));return(0,_.jsx)("div",{children:(0,_.jsx)("ul",{className:h,children:a})})}},5021:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var c=n(9439),i=n(9434),o=n(2791),a=n(9325),r=n(220),s=n(9938),l=n(128),d=n(7689),u=n(5413),_=n(5998),m=n(8383),h="ProductPage_container__XJoIM",p="ProductPage_product_container__A1Dds",x=n(3329),f=function(){var e=(0,d.UO)(),t=(0,i.I0)(),n=(0,i.v9)(a.h),f=e.category,j=(0,o.useState)({}),v=(0,c.Z)(j,2),g=v[0],k=v[1],y=(0,o.useState)({}),b=(0,c.Z)(y,2),N=b[0],S=b[1],Z=(0,o.useState)(!1),C=(0,c.Z)(Z,2),I=C[0],w=C[1];(0,o.useEffect)((function(){try{t((0,r.uP)(f)).then((function(e){return S(e.payload.data)}))}catch(e){console.log(e)}}),[t,f]);return(0,x.jsxs)("div",{children:[(0,x.jsx)("div",{className:h,children:(0,x.jsx)(_.Z,{})}),n?(0,x.jsx)(s.Z,{}):(0,x.jsx)("div",{className:p,children:0!==Object.keys(N).length?(0,x.jsx)(l.Z,{productList:N,fetchProduct:function(e){k(e),w(!0)}}):(0,x.jsx)("p",{})}),(0,x.jsx)(u.Z,{modalActive:I,setModalActive:w,product:g}),(0,x.jsx)(m.Z,{})]})}},2739:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var c=n(9439),i=n(1413),o=n(4925),a={subcategory_link:"SubcategoryItem_subcategory_link__alIbD",image_link:"SubcategoryItem_image_link__eXxWs",image_title:"SubcategoryItem_image_title__WBz91",description_container:"SubcategoryItem_description_container__2Bi3Q",action:"SubcategoryItem_action__DciV2",title_container:"SubcategoryItem_title_container__vHv0w"},r=n(3329),s=function(e){var t=e.nameSubcategory,n=e.photoSubcategory,c=e.subcategory,i=e.pickSubcategory,o=e.descriptionSubcategory;return(0,r.jsxs)("li",{onClick:function(e){i(e.currentTarget.id)},className:a.subcategory_link,id:c,children:[(0,r.jsxs)("div",{className:a.action,children:[(0,r.jsx)("img",{className:a.image_link,src:n,alt:t}),(0,r.jsx)("div",{className:a.description_container,children:(0,r.jsx)("p",{className:a.description,children:o})})]}),(0,r.jsx)("div",{className:a.title_container,children:(0,r.jsx)("p",{className:a.image_title,children:t})})]})},l="SubcategoryList_catalog_list__7colA",d=["_id"],u=function(e){var t=e.subcategories,n=e.fetchSubcategory,c=function(e){n(e)},a=t.map((function(e){var t=e._id,n=(0,o.Z)(e,d);return(0,r.jsx)(s,(0,i.Z)((0,i.Z)({},n),{},{_id:t,pickSubcategory:c}),t)}));return(0,r.jsx)("div",{children:(0,r.jsx)("ul",{className:l,children:a})})},_=n(7689),m=n(9434),h=n(2791),p=n(6436),x=n(4930),f=n(9938),j="Subcategory_container__Uy88e",v=n(8383),g=n(5998),k=n(5021),y=function(){var e=(0,_.s0)(),t=(0,_.UO)(),n=(0,m.I0)(),i=(0,m.v9)(p.h),o=(0,h.useState)({}),a=(0,c.Z)(o,2),s=a[0],l=a[1],d=t.category;(0,h.useEffect)((function(){try{n((0,x.kc)(d)).then((function(e){l(e.payload.data)}))}catch(e){console.log(e)}}),[n,d]);return(0,r.jsx)("div",{children:!0===i?(0,r.jsx)(f.Z,{}):(0,r.jsx)("div",{children:0!==Object.keys(s).length?(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:j,children:[(0,r.jsx)(g.Z,{}),(0,r.jsx)(u,{subcategories:s,fetchSubcategory:function(t){e("/catalog/".concat(d,"/").concat(t))}})]}),(0,r.jsx)(v.Z,{})]}):(0,r.jsx)(k.default,{})})})}},9325:function(e,t,n){n.d(t,{h:function(){return c}});var c=function(e){return e.product.loading}},6436:function(e,t,n){n.d(t,{h:function(){return c}});var c=function(e){return e.subcategory.loading}}}]);
//# sourceMappingURL=739.24c523ae.chunk.js.map