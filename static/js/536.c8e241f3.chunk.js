"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[536],{8383:function(e,r,t){t.d(r,{Z:function(){return c}});var n={container:"Footer_container__iICw7",contacts_container:"Footer_contacts_container__j5stx",address:"Footer_address__aD4II",contacts_item:"Footer_contacts_item__nw9ee",contacts_link:"Footer_contacts_link__GaNqY",messenger:"Footer_messenger__NrPp+",messenger_links:"Footer_messenger_links__G2Jbz",messenger_icon:"Footer_messenger_icon__pMYan",messenger_name:"Footer_messenger_name__9o7Mp",messenger_title:"Footer_messenger_title__U+gvF",messengers_container:"Footer_messengers_container__3groe"},s=t(6355),a=t(1087),i=t(3329),c=function(){return(0,i.jsxs)("div",{className:n.container,children:[(0,i.jsxs)("div",{className:n.contacts_container,children:[(0,i.jsx)("address",{className:n.address,children:"\u0410\u0434\u0440\u0435\u0441\u0430: \u0423\u043a\u0440\u0430\u0457\u043d\u0430, \u043c.\u041a\u0438\u0457\u0432, \u0432\u0443\u043b. \u041c\u0430\u0433\u043d\u0456\u0442\u043e\u0433\u043e\u0440\u0441\u044c\u043a\u0430 \u0431\u0443\u0434.5 "}),(0,i.jsx)("p",{className:n.schedule,children:"\u0420\u0435\u0436\u0438\u043c \u0440\u043e\u0431\u043e\u0442\u0438: \u041f\u043d-\u041f\u0442 9:00 \u2013 17:00"}),(0,i.jsxs)("p",{className:n.contacts_item,children:["\u0422\u0435\u043b\u0435\u0444\u043e\u043d:",(0,i.jsx)("a",{className:n.contacts_link,href:"tel:+380991585152",children:" +38 (099) 158 51 52"})]}),(0,i.jsxs)("p",{className:n.contacts_item,children:["\u0415\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430 \u043f\u043e\u0448\u0442\u0430:",(0,i.jsx)("a",{className:n.contacts_link,href:"mailto:color-farb@gmail.com",children:" color-farb@gmail.com"})]})]}),(0,i.jsxs)("div",{className:n.messengers_container,children:[(0,i.jsx)("h2",{className:n.messenger_title,children:"\u0417\u0432'\u044f\u0437\u0430\u0442\u0438\u0441\u044c \u0437 \u043d\u0430\u043c\u0438"}),(0,i.jsxs)("div",{className:n.messenger_links,children:[(0,i.jsxs)(a.rU,{className:n.messenger,to:"tg://resolve?domain=sob_yar",children:[(0,i.jsx)(s.Ww5,{className:n.messenger_icon}),(0,i.jsx)("p",{className:n.messenger_name,children:"Telegram"})]}),(0,i.jsxs)(a.rU,{className:n.messenger,to:"viber://chat?number=%2B380991585152",children:[(0,i.jsx)(s.MJj,{className:n.messenger_icon}),(0,i.jsx)("p",{className:n.messenger_name,children:"Viber"})]}),(0,i.jsxs)(a.rU,{className:n.messenger,to:"https://api.whatsapp.com/send/?phone=+380991585152",children:[(0,i.jsx)(s.xpo,{className:n.messenger_icon}),(0,i.jsx)("p",{className:n.messenger_name,children:"WhatsApp"})]})]})]})]})}},1536:function(e,r,t){t.r(r),t.d(r,{default:function(){return f}});var n=t(9439),s="BasketPage_container__zK6JL",a=t(2791),i=t(4925),c=t(1413),l=t(3329),o=function(e){var r=e.product,t=e.updateOrder,s=e._id,i=e.updatedQuantity,o=r.title,u=r.photo,d=r.price,m=r.type,h=r.color,p=r.code,x=(0,a.useState)({}),j=(0,n.Z)(x,2),f=j[0],g=j[1],v=(0,a.useState)(),_=(0,n.Z)(v,2),y=_[0],b=_[1],N=JSON.parse(localStorage.getItem("order"));(0,a.useEffect)((function(){var e=N.filter((function(e){return e._id===s})),r=Number(e[0].quantity);g(r),b(d*r)}),[N,d,s]);var S=function(e){if("increment"===e.target.name)if(""===f){var r=N.map((function(e){return e._id===s?(0,c.Z)((0,c.Z)({},e),{},{quantity:""}):e}));localStorage.setItem("order",JSON.stringify(r)),g(""),i()}else{var t=N.map((function(e){return e._id===s?(0,c.Z)((0,c.Z)({},e),{},{quantity:String(Number(e.quantity)+1)}):e}));localStorage.setItem("order",JSON.stringify(t)),g(String(Number(f)+1)),i()}else if("decrement"===e.target.name){if(f>0){var n=N.map((function(e){return e._id===s?(0,c.Z)((0,c.Z)({},e),{},{quantity:String(Number(e.quantity)-1)}):e}));localStorage.setItem("order",JSON.stringify(n)),g(String(Number(f)-1)),i()}}else if("quantity"===e.target.name){var a=e.target.value.replace(/\D+/g,"");if(0===a){var l=N.map((function(e){return e._id===s?(0,c.Z)((0,c.Z)({},e),{},{quantity:""}):e}));localStorage.setItem("order",JSON.stringify(l)),g(""),i()}else{var o=N.map((function(e){return e._id===s?(0,c.Z)((0,c.Z)({},e),{},{quantity:String(a)}):e}));localStorage.setItem("order",JSON.stringify(o)),g(String(a)),i()}}};return(0,l.jsxs)("li",{children:[(0,l.jsx)("h1",{children:o}),(0,l.jsx)("img",{src:u,alt:o}),(0,l.jsxs)("p",{children:["\u0426\u0456\u043d\u0430: ",d," \u0433\u0440\u043d"]}),(0,l.jsxs)("p",{children:["\u0424\u0430\u0441\u0443\u0432\u0430\u043d\u043d\u044f: ",m]}),(0,l.jsxs)("p",{children:["\u041a\u043e\u043b\u0456\u0440: ",h]}),(0,l.jsxs)("p",{children:["\u041a\u043e\u0434 \u0442\u043e\u0432\u0430\u0440\u0443: ",p]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("button",{type:"button",onClick:S,name:"decrement",children:"-"}),(0,l.jsx)("input",{value:f,name:"quantity",onChange:S,type:"text"}),(0,l.jsx)("button",{type:"button",onClick:S,name:"increment",children:"+"})]}),(0,l.jsx)("button",{onClick:function(){var e=JSON.parse(localStorage.getItem("order")).filter((function(e){return e._id!==s}));t(e)},children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0437 \u043a\u043e\u0448\u0438\u043a\u0430"}),(0,l.jsxs)("p",{children:["\u0421\u0443\u043c\u0430: ",y," \u0433\u0440\u043d"]})]})},u=["_id"],d=function(e){var r=e.newOrder,t=(0,a.useState)(0),s=(0,n.Z)(t,2),c=s[0],d=s[1],m=(0,a.useState)(!1),h=(0,n.Z)(m,2),p=h[0],x=h[1],j=JSON.parse(localStorage.getItem("order"));(0,a.useEffect)((function(){d(j.reduce((function(e,r){return Number(e)+Number(r.price)*r.quantity}),"")),x(!1)}),[j,p]);var f=function(e){r(e)},g=function(){x(!0)},v=j.map((function(e){var r=e._id,t=(0,i.Z)(e,u);return(0,l.jsx)(o,{product:t,_id:r,updateOrder:f,updatedQuantity:g},r)}));return(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"\u0422\u043e\u0432\u0430\u0440\u0438 \u0434\u043e \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"}),(0,l.jsx)("ol",{children:v}),(0,l.jsxs)("p",{children:["\u0421\u0443\u043c\u0430 \u0434\u043e \u0441\u043f\u043b\u0430\u0442\u0438: ",JSON.stringify(c)," \u0433\u0440\u043d"]})]})},m=t(4942),h=t(4659),p=t(9434),x=function(e){var r=e.confirmedOrder,t=e.totalAmount,s=e.dispatchOrder,i=(0,p.I0)(),o=(new Date).toLocaleString(),u=(0,a.useState)({customerSurname:"",customerName:"",phone:"",comments:"",typeOfDelivery:"",locality:"",branchNumber:"",date:o}),d=(0,n.Z)(u,2),x=d[0],j=d[1],f=(0,a.useState)({}),g=(0,n.Z)(f,2),v=g[0],_=g[1];(0,a.useEffect)((function(){_((0,c.Z)((0,c.Z)({},x),{},{confirmedOrder:r,totalAmount:String(t)}))}),[r,x,t]);var y=(0,a.useCallback)((function(e){var r=e.target,t=r.name,n=r.value;if("phone"===t){var s=r.value.replace(/\D+/g,"");j((function(e){return(0,c.Z)((0,c.Z)({},e),{},(0,m.Z)({},t,s))}))}else j("typeOfDelivery"===t?function(e){var r;return(0,c.Z)((0,c.Z)({},e),{},(r={},(0,m.Z)(r,t,n),(0,m.Z)(r,"locality",""),(0,m.Z)(r,"branchNumber",""),r))}:function(e){return(0,c.Z)((0,c.Z)({},e),{},(0,m.Z)({},t,n))})}),[j]);return(0,l.jsxs)("div",{children:[(0,l.jsxs)("form",{children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u0456 \u0434\u0430\u043d\u0456"}),(0,l.jsxs)("label",{children:["\u041f\u0440\u0456\u0437\u0432\u0438\u0449\u0435",(0,l.jsx)("input",{required:!0,name:"customerSurname",onChange:y,value:x.customerSurname,type:"text"})]}),(0,l.jsxs)("label",{children:["\u0406\u043c'\u044f",(0,l.jsx)("input",{required:!0,name:"customerName",onChange:y,value:x.customerName,type:"text"})]}),(0,l.jsxs)("label",{children:["\u0422\u0435\u043b\u0435\u0444\u043e\u043d",(0,l.jsx)("input",{type:"text",required:!0,name:"phone",onChange:y,value:x.phone})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430"}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("input",{type:"radio",id:"Sklad",name:"typeOfDelivery",value:"Sklad",onChange:y}),(0,l.jsx)("label",{htmlFor:"Sklad",children:"\u0421\u0430\u043c\u043e\u0432\u0438\u0432\u0456\u0437"}),(0,l.jsx)("input",{type:"radio",id:"Nova Poshta",name:"typeOfDelivery",value:"Nova Poshta",onChange:y}),(0,l.jsx)("label",{htmlFor:"Nova Poshta",children:"\u041d\u043e\u0432\u0430 \u041f\u043e\u0448\u0442\u0430"}),(0,l.jsx)("input",{type:"radio",id:"Delivery",name:"typeOfDelivery",value:"Delivery",onChange:y}),(0,l.jsx)("label",{htmlFor:"Delivery",children:"Delivery"})]}),(0,l.jsxs)("div",{children:["Sklad"===x.typeOfDelivery&&(0,l.jsxs)("div",{children:[(0,l.jsx)("address",{children:"\u0410\u0434\u0440\u0435\u0441\u0430: \u0423\u043a\u0440\u0430\u0457\u043d\u0430, \u043c. \u041a\u0438\u0457\u0432 , \u0432\u0443\u043b. \u0414\u0440\u0430\u0433\u043e\u043c\u0430\u043d\u043e\u0432\u0430 23, \u043e\u0444\u0456\u0441 555"}),(0,l.jsx)("p",{children:"\u0420\u0435\u0436\u0438\u043c \u0440\u043e\u0431\u043e\u0442\u0438: \u041f\u043d-\u041f\u0442 9:00 \u2013 17:00"}),(0,l.jsxs)("p",{children:["\u0422\u0435\u043b\u0435\u0444\u043e\u043d:",(0,l.jsx)("a",{href:"tel:+380991111111",children:" +38 099 111 11 11"})]})]}),"Nova Poshta"===x.typeOfDelivery&&(0,l.jsxs)("div",{children:[(0,l.jsxs)("label",{children:["\u041d\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u0439 \u043f\u0443\u043d\u043a\u0442",(0,l.jsx)("input",{required:!0,name:"locality",type:"text",onChange:y,value:x.locality})]}),(0,l.jsxs)("label",{children:["\u041d\u043e\u043c\u0435\u0440 \u0432\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u044f",(0,l.jsx)("input",{required:!0,name:"branchNumber",type:"text",onChange:y,value:x.branchNumber})]})]}),"Delivery"===x.typeOfDelivery&&(0,l.jsxs)("div",{children:[(0,l.jsxs)("label",{children:["\u041d\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u0439 \u043f\u0443\u043d\u043a\u0442",(0,l.jsx)("input",{required:!0,name:"locality",type:"text",onChange:y,value:x.locality})]}),(0,l.jsxs)("label",{children:["\u041d\u043e\u043c\u0435\u0440 \u0432\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u044f",(0,l.jsx)("input",{required:!0,name:"branchNumber",type:"text",onChange:y,value:x.branchNumber})]})]})]})]})]}),(0,l.jsx)("div",{children:(0,l.jsxs)("label",{children:["\u041a\u043e\u043c\u0435\u043d\u0442\u0430\u0440 \u0434\u043e \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f",(0,l.jsx)("textarea",{rows:"20",cols:"70",required:!0,name:"comments",value:x.comments,onChange:y})]})})]}),(0,l.jsx)("button",{type:"click",onClick:function(){try{i((0,h.m)(v)).then(localStorage.removeItem("order"))}catch(e){console.log(e)}s(!0)},children:"\u0412\u0456\u0434\u043f\u0440\u0430\u0432\u0438\u0442\u0438 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"})]})},j=t(8383),f=function(){var e=(0,a.useState)({}),r=(0,n.Z)(e,2),t=r[0],i=r[1],c=(0,a.useState)({}),o=(0,n.Z)(c,2),u=o[0],m=o[1],h=(0,a.useState)(!1),p=(0,n.Z)(h,2),f=p[0],g=p[1],v=(0,a.useState)(),_=(0,n.Z)(v,2),y=_[0],b=_[1];(0,a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("order"));null!==e&&i(e)}),[]);return(0,l.jsxs)("div",{children:[0!==Object.keys(t).length?(0,l.jsxs)("div",{className:s,children:[(0,l.jsx)(d,{basket:t,newOrder:function(e){i(e),localStorage.setItem("order",JSON.stringify(e))}}),!f&&(0,l.jsx)("button",{onClick:function(){var e=JSON.parse(localStorage.getItem("order"));b(e.reduce((function(e,r){return Number(e)+Number(r.price)*r.quantity}),"")),m(e),g(!0)},children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u0438 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"}),f&&(0,l.jsx)("div",{children:(0,l.jsx)(x,{confirmedOrder:u,totalAmount:y,dispatchOrder:function(e){!0===e&&i({})}})})]}):(0,l.jsx)("div",{className:s,children:(0,l.jsx)("p",{children:"\u041d\u0456\u0447\u043e\u0433\u043e \u043d\u0435\u043c\u0430\u0454 \u0432 \u043a\u043e\u0448\u0438\u043a\u0443"})}),(0,l.jsx)(j.Z,{})]})}},4925:function(e,r,t){function n(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}t.d(r,{Z:function(){return n}})}}]);
//# sourceMappingURL=536.c8e241f3.chunk.js.map