"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[645],{8383:function(e,t,n){n.d(t,{Z:function(){return i}});var o="Footer_container__iICw7",c=n(3329),i=function(){return(0,c.jsx)("div",{className:o})}},9938:function(e,t,n){n.d(t,{Z:function(){return r}});var o=n(4691),c="Loader_loader__DwtSp",i=n(3329),r=function(){return(0,i.jsx)("div",{className:c,children:(0,i.jsx)(o.s5,{strokeColor:"orange",strokeWidth:"5",animationDuration:"1.5",width:"96",visible:!0})})}},5413:function(e,t,n){n.d(t,{Z:function(){return y}});var o=n(3433),c=n(9439),i=n(2791),r="Modal_modal__yEgVW",a="Modal_modal_active__nM+Ac",s="Modal_modal_content__8KQIg",l="Modal_modal_content_active__Vlx6f",d="Modal_photo__KCzk3",u="Modal_title__KuCmT",_="Modal_description__i76KN",m=n(4942),h=n(1413),f="ModalOneClick_modal__VLShz",p="ModalOneClick_modal_active__PW-Rn",v="ModalOneClick_modal_content__ktqNb",x="ModalOneClick_modal_content_active__Rbih3",j="ModalOneClick_form__+TqbX",k=n(4659),g=n(9434),C=n(3329),b=function(e){var t=e.activeModalOneClick,n=e.setModalOneClickActive,o=e.closeModal,r=e.order,a=(0,g.I0)(),s=r.title,l=r.price,d=r.type,u=r.color,_=r.code,b={customerName:"",customerPhone:""},N=(0,i.useState)({}),Z=(0,c.Z)(N,2),y=Z[0],S=Z[1],w=(0,i.useState)((0,h.Z)({},b)),M=(0,c.Z)(w,2),P=M[0],O=M[1],L=P.customerName,E=P.customerPhone,I=(new Date).toLocaleString();(0,i.useEffect)((function(){var e=String(r.quantity);S({title:s,price:l,type:d,color:u,code:_,quantity:e,customerName:L,customerPhone:E,date:I});var t=function(e){"Escape"===e.code&&q()};return window.addEventListener("keydown",t),function(){return window.removeEventListener("keydown",t)}}),[t,L,E]);var q=function(){n(!1),O((0,h.Z)({},b))},A=(0,i.useCallback)((function(e){var t=e.target,n=t.name,o=t.value;O((function(e){return(0,h.Z)((0,h.Z)({},e),{},(0,m.Z)({},n,o))}))}),[O]);return(0,C.jsx)("div",{className:t?p:f,onClick:q,children:(0,C.jsxs)("div",{className:t?x:v,onClick:function(e){return e.stopPropagation()},children:[(0,C.jsxs)("form",{className:j,children:[(0,C.jsxs)("label",{children:["\u0406\u043c'\u044f",(0,C.jsx)("input",{required:!0,name:"customerName",onChange:A,value:L})]}),(0,C.jsxs)("label",{children:["\u0422\u0435\u043b\u0435\u0444\u043e\u043d",(0,C.jsx)("input",{required:!0,name:"customerPhone",onChange:A,value:E})]}),(0,C.jsx)("button",{type:"button",onClick:function(){a((0,k.S)(y)),n(!1),S({}),O((0,h.Z)({},b)),o()},children:"\u0412\u0456\u0434\u043f\u0440\u0430\u0432\u0438\u0442\u0438 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"})]}),(0,C.jsx)("button",{type:"button",onClick:q,children:"\u0437\u0430\u043a\u0440\u044b\u0442\u044c"})]})})},N=n(8185),Z=n(9869),y=function(e){var t=e.modalActive,n=e.setModalActive,m=e.product,h=m.title,f=m.photo,p=m.price,v=m.type,x=m.color,j=m.code,k=m.description,y=m._id,S=(0,i.useState)({}),w=(0,c.Z)(S,2),M=w[0],P=w[1],O=(0,i.useState)("1"),L=(0,c.Z)(O,2),E=L[0],I=L[1],q=(0,i.useState)(!1),A=(0,c.Z)(q,2),D=A[0],J=A[1],K=(0,g.v9)(Z.bg);(0,i.useEffect)((function(){P({title:h,price:p,code:j,color:x,type:v,quantity:E,_id:y,photo:f});var e=function(e){"Escape"===e.code&&F()};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[t,E]);var z=function(e){if("increment"===e.target.name)I(""===E?"1":String(Number(E)+1));else if("decrement"===e.target.name)E>0&&I(String(Number(E)-1));else if("quantity"===e.target.name){var t=e.target.value.replace(/\D+/g,"");I(0===t?"":String(t))}},F=function(){n(!1),P({}),I(1)};return(0,C.jsxs)("div",{children:[(0,C.jsx)("div",{className:t?a:r,onClick:F,children:(0,C.jsxs)("div",{className:t?l:s,onClick:function(e){return e.stopPropagation()},children:[(0,C.jsx)("h1",{className:u,children:h}),(0,C.jsxs)("div",{children:[(0,C.jsx)("img",{className:d,src:f,alt:h}),(0,C.jsxs)("p",{children:["\u0426\u0456\u043d\u0430: ",p," \u0433\u0440\u043d"]}),(0,C.jsxs)("p",{children:["\u0424\u0430\u0441\u043e\u0432\u043a\u0430: ",v]}),(0,C.jsxs)("p",{children:["\u041a\u043e\u043b\u0456\u0440: ",x]}),(0,C.jsxs)("p",{children:["\u041a\u043e\u0434 \u0442\u043e\u0432\u0430\u0440\u0443: ",j]})]}),(0,C.jsxs)("p",{className:_,children:["\u041e\u043f\u0438\u0441: ",k]}),(0,C.jsxs)("div",{children:[(0,C.jsx)("button",{type:"button",onClick:z,name:"decrement",children:"-"}),(0,C.jsx)("input",{value:E,name:"quantity",onChange:z,type:"text"}),(0,C.jsx)("button",{type:"button",onClick:z,name:"increment",children:"+"})]}),(0,C.jsx)("button",{type:"button",onClick:F,children:"\u0437\u0430\u043a\u0440\u044b\u0442\u044c"}),(0,C.jsx)("button",{type:"button",onClick:function(){J(!0)},children:"\u0417\u0430\u043a\u0430\u0437 \u0432 1 \u043a\u043b\u0438\u043a"}),(0,C.jsx)("button",{onClick:function(){if(!0===K)console.log("\u0417\u0430\u043f\u0438\u0441\u044c \u0432 \u0431\u0430\u0437\u0443");else{var e=localStorage.getItem("order")||"[]",t=JSON.parse(e);localStorage.setItem("order",JSON.stringify([].concat((0,o.Z)(t),[M])))}},type:"button",children:(0,C.jsx)(N.DJ8,{})})]})}),(0,C.jsx)(b,{activeModalOneClick:D,setModalOneClickActive:J,order:M,closeModal:F})]})}},5998:function(e,t,n){n.d(t,{Z:function(){return u}});var o=n(9439),c="Search_container__FpDfx",i="Search_basketIcon__RNH1g",r=n(7689),a=n(1087),s=n(2791),l=n(8185),d=n(3329),u=function(){var e=(0,r.s0)(),t=(0,s.useState)(""),n=(0,o.Z)(t,2),u=n[0],_=n[1];return(0,d.jsxs)("div",{className:c,children:[(0,d.jsxs)("div",{className:c,children:[(0,d.jsx)("input",{value:u,onChange:function(e){_(e.target.value)}}),(0,d.jsx)("button",{type:"button",onClick:function(){e("/products?search=".concat(u))},children:"\u041f\u043e\u0448\u0443\u043a"})]}),(0,d.jsx)(a.OL,{to:"/order",children:(0,d.jsx)(l.DJ8,{className:i})})]})}},128:function(e,t,n){n.d(t,{Z:function(){return _}});var o=n(1413),c=n(4925),i="ProductItem_catalog_link__Be+UF",r="ProductItem_image_link__dTbox",a="ProductItem_image_title__nSwSB",s=n(3329),l=function(e){var t=e.photo,n=e.title,o=e.description,c=e.price,l=e.type,d=e.color,u=e.code,_=e._id,m=e.pickedProduct,h={photo:t,title:n,description:o,price:c,type:l,color:d,code:u,_id:_};return(0,s.jsxs)("li",{className:i,onClick:function(){m(h)},children:[(0,s.jsx)("img",{className:r,src:t,alt:n}),(0,s.jsx)("p",{className:a,children:n})]})},d="ProductList_catalog_list__OirNz",u=["_id"],_=function(e){var t=e.productList,n=e.fetchProduct,i=function(e){n(e)},r=t.map((function(e){var t=e._id,n=(0,c.Z)(e,u);return(0,s.jsx)(l,(0,o.Z)((0,o.Z)({},n),{},{_id:t,pickedProduct:i}),t)}));return(0,s.jsx)("div",{children:(0,s.jsx)("ul",{className:d,children:r})})}},1645:function(e,t,n){n.r(t);var o=n(9439),c=n(8383),i=n(5998),r=n(1087),a=n(2791),s=n(220),l=n(9434),d=n(128),u=n(9938),_=n(9325),m=n(5413),h=n(3329);t.default=function(e){var t=(0,l.v9)(_.h),n=(0,r.lr)(),f=(0,o.Z)(n,1)[0],p=(0,l.I0)(),v=(0,a.useState)({}),x=(0,o.Z)(v,2),j=x[0],k=x[1],g=(0,a.useState)({}),C=(0,o.Z)(g,2),b=C[0],N=C[1],Z=(0,a.useState)(!1),y=(0,o.Z)(Z,2),S=y[0],w=y[1];(0,a.useEffect)((function(){try{var e=f.get("search");p((0,s.HN)(e)).then((function(e){return N(e.payload.data)}))}catch(t){console.log(t)}}),[p,f]);return(0,h.jsxs)("div",{children:[(0,h.jsx)(i.Z,{}),t?(0,h.jsx)(u.Z,{}):(0,h.jsx)("div",{children:0!==Object.keys(b).length?(0,h.jsx)(d.Z,{productList:b,fetchProduct:function(e){k(e),w(!0)}}):(0,h.jsx)("p",{})}),(0,h.jsx)(m.Z,{modalActive:S,setModalActive:w,product:j}),(0,h.jsx)(c.Z,{})]})}},9325:function(e,t,n){n.d(t,{h:function(){return o}});var o=function(e){return e.product.loading}}}]);
//# sourceMappingURL=645.b98792fb.chunk.js.map