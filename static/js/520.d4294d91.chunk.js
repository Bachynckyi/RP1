"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[520],{8383:function(e,t,a){a.d(t,{Z:function(){return k}});var r="Footer_footer_container__SK7em",n="Footer_container__iICw7",s="Footer_contacts_container__j5stx",i="Footer_address__aD4II",c="Footer_contacts_item__nw9ee",l="Footer_contacts_link__GaNqY",o="Footer_messenger_links__G2Jbz",u="Footer_messenger_link__juZba",d="Footer_messenger_telegram__E4Uac",_="Footer_icon_telegram__birFW",m="Footer_messenger_viber__tj0Ny",h="Footer_icon_viber__04FYK",p="Footer_messenger_whatsapp__ttb-U",f="Footer_icon_whatsapp__AsAvE",N="Footer_messenger_name__9o7Mp",v="Footer_messenger_title__U+gvF",x="Footer_messengers_container__3groe",j="Footer_schedule__P8Y6E",b=a(6355),y=a(1087),g=a(3329),k=function(){return(0,g.jsx)("div",{className:r,children:(0,g.jsxs)("div",{className:n,children:[(0,g.jsxs)("div",{className:s,children:[(0,g.jsx)("address",{className:i,children:"\u0410\u0434\u0440\u0435\u0441\u0430: \u0423\u043a\u0440\u0430\u0457\u043d\u0430, \u043c.\u041a\u0438\u0457\u0432, \u0432\u0443\u043b. \u0411\u0456\u043b\u043e\u043c\u043e\u0440\u0441\u044c\u043a\u0430, \u0431\u0443\u0434.2"}),(0,g.jsx)("p",{className:j,children:"\u0420\u0435\u0436\u0438\u043c \u0440\u043e\u0431\u043e\u0442\u0438: \u041f\u043d-\u041f\u0442 9:00 \u2013 17:00"}),(0,g.jsxs)("p",{className:c,children:["\u0422\u0435\u043b\u0435\u0444\u043e\u043d:",(0,g.jsx)("a",{className:l,href:"tel:+380991585152",children:" +38 (099) 158 51 52"})]}),(0,g.jsxs)("p",{className:c,children:["\u0415\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430 \u043f\u043e\u0448\u0442\u0430:",(0,g.jsx)("a",{className:l,href:"mailto:color-farb@gmail.com",children:" color-farb@gmail.com"})]})]}),(0,g.jsxs)("div",{className:x,children:[(0,g.jsx)("h2",{className:v,children:"\u0417\u0432'\u044f\u0437\u0430\u0442\u0438\u0441\u044c \u0437 \u043d\u0430\u043c\u0438"}),(0,g.jsxs)("div",{className:o,children:[(0,g.jsxs)("div",{className:u,children:[(0,g.jsx)(y.rU,{className:d,to:"tg://resolve?domain=sob_yar",children:(0,g.jsx)(b.AGi,{className:_})}),(0,g.jsx)("p",{className:N,children:"Telegram"})]}),(0,g.jsxs)("div",{className:u,children:[(0,g.jsx)(y.rU,{className:m,to:"viber://chat?number=%2B380991585152",children:(0,g.jsx)(b.MJj,{className:h})}),(0,g.jsx)("p",{className:N,children:"Viber"})]}),(0,g.jsxs)("div",{className:u,children:[(0,g.jsx)(y.rU,{className:p,to:"https://api.whatsapp.com/send/?phone=+380991585152",children:(0,g.jsx)(b.xpo,{className:f})}),(0,g.jsx)("p",{className:N,children:"WhatsApp"})]})]})]})]})})}},7520:function(e,t,a){a.r(t),a.d(t,{default:function(){return Ue}});var r=a(9439),n={container:"BasketPage_container__zK6JL",button_confirm:"BasketPage_button_confirm__j230M",dispatch_container:"BasketPage_dispatch_container__b8B-q",success_icon:"BasketPage_success_icon__gSxED",error_icon:"BasketPage_error_icon__VJ-Rj",dispatch_title:"BasketPage_dispatch_title__alSUS",dispatch_button:"BasketPage_dispatch_button__ZB5fF"},s=a(2791),i=a(4925),c=a(1413),l="BasketItem_item__GGZ6b",o="BasketItem_title__vm9Cx",u="BasketItem_image__uiV8O",d="BasketItem_product_items__SrncF",_="BasketItem_product_item_color__4iyvS",m="BasketItem_container__kmOrW",h="BasketItem_products_items_container__MPuaF",p="BasketItem_quantity_button_decrement__Z7Vx6",f="BasketItem_quantity_button_increment__h8c79",N="BasketItem_input__ULNsQ",v="BasketItem_quantity_container__kSjup",x="BasketItem_buttons_container__Zw3hG",j="BasketItem_button_delete__sKlL3",b="BasketItem_delete_icon__Lnhr8",y="BasketItem_product_container__cHVW0",g=a(6856),k=a(9434),S=a(9869),Z=a(7235),C=a(3329),O=function(e){var t=e.product,a=e.updateOrder,n=e._id,i=e.basket,O=t.title,F=t.photo,B=t.price,q=t.type,L=t.color,I=t.code,D=(0,s.useState)({}),w=(0,r.Z)(D,2),A=w[0],E=w[1],P=(0,s.useState)(),R=(0,r.Z)(P,2),J=R[0],U=R[1],V=JSON.parse(localStorage.getItem("order")),G=(0,k.v9)(S.bg),T=(0,k.v9)(S.kE),W=(0,k.I0)();(0,s.useEffect)((function(){if(!0===G){E(t.quantity);var e=B*Number(t.quantity);U(e.toFixed(2))}else{var a=V.filter((function(e){return e._id===n})),r=Number(a[0].quantity);E(r),U((B*r).toFixed(2))}}),[V,B,n,i]);var H=function(e){if("increment"===e.target.name)if(""===A)if(!0===G){W((0,Z.ZX)({token:T,_id:n,quantity:""})).then((function(e){a(e.payload.data.basket),E("")}))}else{var t=V.map((function(e){return e._id===n?(0,c.Z)((0,c.Z)({},e),{},{quantity:""}):e}));localStorage.setItem("order",JSON.stringify(t)),E(""),a(t)}else if(!0===G){var r=String(Number(A)+1);W((0,Z.ZX)({token:T,_id:n,quantity:r})).then((function(e){a(e.payload.data.basket),E(String(Number(A)+1))}))}else{var s=V.map((function(e){return e._id===n?(0,c.Z)((0,c.Z)({},e),{},{quantity:String(Number(e.quantity)+1)}):e}));localStorage.setItem("order",JSON.stringify(s)),E(String(Number(A)+1)),a(s)}else if("decrement"===e.target.name){if(A>0)if(!0===G){var i=String(Number(A)-1);W((0,Z.ZX)({token:T,_id:n,quantity:i})).then((function(e){a(e.payload.data.basket),E(String(Number(A)-1))}))}else{var l=V.map((function(e){return e._id===n?(0,c.Z)((0,c.Z)({},e),{},{quantity:String(Number(e.quantity)-1)}):e}));localStorage.setItem("order",JSON.stringify(l)),E(String(Number(A)-1)),a(l)}}else if("quantity"===e.target.name){var o=e.target.value.replace(/\D+/g,"");if(0===o)if(!0===G){W((0,Z.ZX)({token:T,_id:n,quantity:""})).then((function(e){a(e.payload.data.basket),E("")}))}else{var u=V.map((function(e){return e._id===n?(0,c.Z)((0,c.Z)({},e),{},{quantity:""}):e}));localStorage.setItem("order",JSON.stringify(u)),E(""),a(u)}else if(!0===G){var d=String(o);W((0,Z.ZX)({token:T,_id:n,quantity:d})).then((function(e){a(e.payload.data.basket),E(String(o))}))}else{var _=V.map((function(e){return e._id===n?(0,c.Z)((0,c.Z)({},e),{},{quantity:String(o)}):e}));localStorage.setItem("order",JSON.stringify(_)),E(String(o)),a(_)}}};return(0,C.jsxs)("li",{className:l,children:[(0,C.jsx)("h1",{className:o,children:O}),(0,C.jsxs)("div",{className:y,children:[(0,C.jsxs)("div",{className:m,children:[(0,C.jsx)("img",{className:u,src:F,alt:O}),(0,C.jsxs)("div",{className:h,children:[(0,C.jsxs)("p",{className:d,children:["\u0426\u0456\u043d\u0430: ",(0,C.jsxs)("span",{className:_,children:[B," \u0433\u0440\u043d"]})]}),(0,C.jsxs)("p",{className:d,children:["\u0424\u0430\u0441\u0443\u0432\u0430\u043d\u043d\u044f: ",(0,C.jsx)("span",{className:_,children:q})]}),(0,C.jsxs)("p",{className:d,children:["\u041a\u043e\u043b\u0456\u0440: ",(0,C.jsx)("span",{className:_,children:L})]}),(0,C.jsxs)("p",{className:d,children:["\u041a\u043e\u0434 \u0442\u043e\u0432\u0430\u0440\u0443: ",(0,C.jsx)("span",{className:_,children:I})]}),(0,C.jsxs)("p",{className:d,children:["\u0421\u0443\u043c\u0430: ",(0,C.jsxs)("span",{className:_,children:[J," \u0433\u0440\u043d"]})]})]})]}),(0,C.jsxs)("div",{className:x,children:[(0,C.jsxs)("div",{className:v,children:[(0,C.jsx)("button",{type:"button",onClick:H,name:"decrement",className:p,children:"-"}),(0,C.jsx)("input",{className:N,value:A,name:"quantity",onChange:H,type:"text"}),(0,C.jsx)("button",{type:"button",onClick:H,name:"increment",className:f,children:"+"})]}),(0,C.jsx)("button",{onClick:function(){if(!0===G){var e=n;W((0,Z.Er)({token:T,id:e})).then((function(e){return a(e.payload.data.basket)}))}else{var t=JSON.parse(localStorage.getItem("order")).filter((function(e){return e._id!==n}));a(t)}},className:j,children:(0,C.jsx)(g.FH3,{className:b})})]})]})]})},F="BasketList_list_container__+VV3v",B="BasketList_title__qRCGV",q="BasketList_totalAmount__LuGHY",L="BasketList_basket_list__39xsf",I=["_id"],D=function(e){var t=e.newOrder,a=e.basket,n=(0,s.useState)(0),c=(0,r.Z)(n,2),l=c[0],o=c[1],u=(0,s.useState)(!1),d=(0,r.Z)(u,2),_=d[0],m=d[1],h=(0,s.useState)(null),p=(0,r.Z)(h,2),f=p[0],N=p[1],v=function(e){t(e),m(!0)};return(0,s.useEffect)((function(){o(a.reduce((function(e,t){return(Number(e)+Number(t.price)*Number(t.quantity)).toFixed(2)}),""));var e=a.map((function(e){var t=e._id,r=(0,i.Z)(e,I);return(0,C.jsx)(O,{product:r,_id:t,updateOrder:v,basket:a},t)}));N(e),m(!1)}),[_]),(0,C.jsxs)("div",{className:F,children:[(0,C.jsx)("h2",{className:B,children:"\u0422\u043e\u0432\u0430\u0440\u0438 \u0434\u043e \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"}),(0,C.jsx)("ol",{className:L,children:f}),(0,C.jsxs)("p",{className:q,children:["\u0421\u0443\u043c\u0430 \u0434\u043e \u0441\u043f\u043b\u0430\u0442\u0438: ",l," \u0433\u0440\u043d"]})]})},w=a(4942),A="OrderConfirmation_container__eqxWG",E="OrderConfirmation_form__BROGN",P="OrderConfirmation_form_container__LJcSE",R="OrderConfirmation_button_submit__QdQrr",J="OrderConfirmation_contact_details_container__ALON0",U="OrderConfirmation_contact_details_title__Jtakm",V="OrderConfirmation_contact_details_label__VzfUh",G="OrderConfirmation_contact_details_input__ygIE2",T="OrderConfirmation_contact_details_subtitle__U6YaM",W="OrderConfirmation_delivery_details_container__fbCNL",H="OrderConfirmation_delivery_details_title__iHggr",K="OrderConfirmation_delivery_details_subtitle__bRHCR",X="OrderConfirmation_description_details_container__R4HES",M="OrderConfirmation_description_details_subtitle__BaggC",Q="OrderConfirmation_description_details_field__aXsjp",Y="OrderConfirmation_delivery_details_warehouse__QDt9J",z="OrderConfirmation_delivery_details_label__CXyAe",$="OrderConfirmation_delivery_details_address__yhE8L",ee="OrderConfirmation_delivery_details_schedule__CQsqN",te="OrderConfirmation_delivery_details_item__uYfOQ",ae="OrderConfirmation_delivery_details_link__A3AF4",re="OrderConfirmation_delivery_details_courier__h4qwl",ne="OrderConfirmation_delivery_details_courier_label__hClRW",se="OrderConfirmation_delivery_details_courier_label_branchNumber_active__-bEvk",ie="OrderConfirmation_delivery_details_courier_label_branchNumber__BnFoa",ce="OrderConfirmation_delivery_details_courier_input__4uUCi",le="OrderConfirmation_delivery_details_courier_input_error__mAwoT",oe="OrderConfirmation_delivery_details_courier_subtitle__2pC0z",ue="OrderConfirmation_delivery_options__jAdVj",de="OrderConfirmation_delivery_details_option__fCaHC",_e="OrderConfirmation_radio_button__wTbGY",me="OrderConfirmation_custom_button__F6U3w",he="OrderConfirmation_error_message__5KKV3",pe=a(5861),fe=a(7757),Ne=a.n(fe),ve=a(1243),xe=a(6382),je=ve.Z.create({baseURL:"https://api.novaposhta.ua"}),be=function(){var e=(0,pe.Z)(Ne().mark((function e(t){var a,r;return Ne().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={apiKey:"0a4318678777f6e1341aba9b78c2f072",modelName:"Address",calledMethod:"getCities",methodProperties:{Page:"1",FindByString:t,Limit:"10000"}},e.next=4,je.post("/v2.0/json/",a);case 4:return r=e.sent,e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),ye=function(){var e=(0,pe.Z)(Ne().mark((function e(t){var a,r,n;return Ne().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.refLocality,t.branchNumber,e.prev=1,r={apiKey:"0a4318678777f6e1341aba9b78c2f072",modelName:"Address",calledMethod:"getWarehouses",methodProperties:{CityRef:a,Page:"1",Limit:"10000",Language:"UA"}},e.next=5,je.post("/v2.0/json/",r);case 5:return n=e.sent,e.abrupt("return",n);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();ve.Z.defaults.baseURL="https://api.novaposhta.ua/v2.0/json/";var ge=(0,xe.hg)("https://api.novaposhta.ua/v2.0/json/",function(){var e=(0,pe.Z)(Ne().mark((function e(t,a){var r,n;return Ne().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.rejectWithValue,e.prev=1,e.next=4,be(t);case 4:return n=e.sent,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",r(e.t0.response.request.status));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}()),ke=(0,xe.hg)("https://api.novaposhta.ua/v2.0/json/",function(){var e=(0,pe.Z)(Ne().mark((function e(t,a){var r,n,s,i;return Ne().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.rejectWithValue,e.prev=1,n=t.refLocality,s=t.branchNumber,e.next=5,ye({refLocality:n,branchNumber:s});case 5:return i=e.sent,e.abrupt("return",i);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",r(e.t0.response.request.status));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,a){return e.apply(this,arguments)}}()),Se="\u0421ourierItem_item__E7WPk",Ze=function(e){var t=e.Description,a=e.pickedLocality,r=e.Ref;return(0,C.jsx)("li",{onClick:function(e){var t=e.target.innerText;a({locality:t,Ref:r})},className:Se,children:t})},Ce="CourierList_courier_list__vfHX6",Oe=function(e){var t=e.courierLocality,a=e.pickLocality,r=function(e){var t=e.locality,r=e.Ref;a({locality:t,Ref:r})},n=t.map((function(e){var t=e.Description,a=e.Ref,n=e.SettlementTypeDescription,s=e.AreaDescription;return(0,C.jsx)(Ze,{Description:t,pickedLocality:r,Ref:a,SettlementTypeDescription:n,AreaDescription:s},a)}));return(0,C.jsx)("div",{children:(0,C.jsx)("ul",{className:Ce,children:n})})},Fe="BranchNumberItem_item__H1djD",Be=function(e){var t=e.Description,a=e.pickedBranchNumber;return(0,C.jsx)("li",{onClick:function(e){var t=e.target.innerText;a(t)},className:Fe,children:t})},qe="BranchNumberList_courier_list__vz4AQ",Le=function(e){var t=e.courierBranchNumber,a=e.pickBranchNumber,n=e.search,i=e.notFoundBranch,c=(0,s.useState)(null),l=(0,r.Z)(c,2),o=l[0],u=l[1];(0,s.useEffect)((function(){var e=t.filter((function(e){return!0===e.Description.toLowerCase().includes(n.toLowerCase())}));0===e.length?i():u(e.map((function(e){var t=e.Description,a=e.Ref;return(0,C.jsx)(Be,{Description:t,pickedBranchNumber:d},a)})))}),[n]);var d=function(e){a(e)};return(0,C.jsx)("div",{children:null!==o&&(0,C.jsx)("ul",{className:qe,children:o})})},Ie=function(e){var t=e.confirmedOrder,a=e.totalAmount,n=e.dispatchOrder,i=new Date,l=(0,k.I0)(),o=i.toLocaleString(),u=(0,s.useState)({customerSurname:"",customerName:"",phone:"",comments:"",typeOfDelivery:"",locality:"",branchNumber:"",date:o}),d=(0,r.Z)(u,2),_=d[0],m=d[1],h=(0,s.useState)({}),p=(0,r.Z)(h,2),f=p[0],N=p[1],v=_.branchNumber,x=(0,s.useState)(null),j=(0,r.Z)(x,2),b=j[0],y=j[1],g=(0,s.useState)(null),S=(0,r.Z)(g,2),Z=S[0],O=S[1],F=(0,s.useState)(!1),B=(0,r.Z)(F,2),q=B[0],L=B[1],I=(0,s.useState)(!1),D=(0,r.Z)(I,2),pe=D[0],fe=D[1],Ne=(0,s.useState)(null),ve=(0,r.Z)(Ne,2),xe=ve[0],je=ve[1],be=(0,s.useState)(!1),ye=(0,r.Z)(be,2),Se=ye[0],Ze=ye[1],Ce=(0,s.useState)(!1),Fe=(0,r.Z)(Ce,2),Be=Fe[0],qe=Fe[1],Ie=(0,s.useState)(!1),De=(0,r.Z)(Ie,2),we=De[0],Ae=De[1];(0,s.useEffect)((function(){"Nova Poshta"===_.typeOfDelivery&&""!==_.locality&&null===xe&&l(ge(_.locality)).then((function(e){0!==e.payload.data.data.length?(y(e.payload.data.data),qe(!1),L(!1)):(qe(!0),L(!0))})),null!==xe&&!1===Se&&l(ke({refLocality:xe,branchNumber:v})).then((function(e){0!==e.payload.data.data.length?O(e.payload.data.data):(Ae(!1),fe(!1),O(null))})),N((0,c.Z)((0,c.Z)({},_),{},{confirmedOrder:t,totalAmount:String(a)}))}),[t,_,a]);var Ee=(0,s.useCallback)((function(e){var t=e.target,a=t.name,r=t.value;if("phone"===a){var n=t.value.replace(/\D+/g,"");m((function(e){return(0,c.Z)((0,c.Z)({},e),{},(0,w.Z)({},a,n))}))}else"typeOfDelivery"===a?(m((function(e){var t;return(0,c.Z)((0,c.Z)({},e),{},(t={},(0,w.Z)(t,a,r),(0,w.Z)(t,"locality",""),(0,w.Z)(t,"branchNumber",""),t))})),y(null),qe(!1),Ae(!1),O(null)):"locality"===a?(je(null),fe(!1),Ae(!1),m((function(e){return(0,c.Z)((0,c.Z)({},e),{},{branchNumber:""})})),""===r&&(L(!0),qe(!0)),m((function(e){return(0,c.Z)((0,c.Z)({},e),{},(0,w.Z)({},a,r))}))):"branchNumber"===a?(Ze(!0),m((function(e){return(0,c.Z)((0,c.Z)({},e),{},(0,w.Z)({},a,r))})),fe(!0),""===r&&(fe(!1),Ae(!0))):m((function(e){return(0,c.Z)((0,c.Z)({},e),{},(0,w.Z)({},a,r))}))}),[m]);return(0,C.jsx)("div",{className:A,children:(0,C.jsxs)("form",{className:E,onSubmit:function(e){e.preventDefault(),n(f)},children:[(0,C.jsxs)("div",{className:P,children:[(0,C.jsxs)("div",{className:J,children:[(0,C.jsx)("h2",{className:U,children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u0456 \u0434\u0430\u043d\u0456"}),(0,C.jsxs)("label",{className:V,children:[(0,C.jsx)("span",{className:T,children:"\u041f\u0440\u0456\u0437\u0432\u0438\u0449\u0435"}),(0,C.jsx)("input",{className:G,required:!0,name:"customerSurname",onChange:Ee,value:_.customerSurname,type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u0440\u0456\u0437\u0432\u0438\u0449\u0435"})]}),(0,C.jsxs)("label",{className:V,children:[(0,C.jsx)("span",{className:T,children:"\u0406\u043c'\u044f"}),(0,C.jsx)("input",{className:G,required:!0,name:"customerName",onChange:Ee,value:_.customerName,type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0456\u043c'\u044f"})]}),(0,C.jsxs)("label",{className:V,children:[(0,C.jsx)("span",{className:T,children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"}),(0,C.jsx)("input",{className:G,type:"text",required:!0,name:"phone",minLength:"7",onChange:Ee,value:_.phone,placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443"})]})]}),(0,C.jsxs)("div",{className:W,children:[(0,C.jsx)("h2",{className:H,children:"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430"}),(0,C.jsxs)("div",{children:[(0,C.jsxs)("div",{className:ue,children:[(0,C.jsxs)("label",{className:de,htmlFor:"Sklad",children:[(0,C.jsx)("input",{className:_e,type:"radio",id:"Sklad",name:"typeOfDelivery",value:"Sklad",onChange:Ee,required:!0}),(0,C.jsx)("span",{className:me}),(0,C.jsx)("span",{className:K,children:"\u0421\u0430\u043c\u043e\u0432\u0438\u0432\u0456\u0437"})]}),(0,C.jsxs)("label",{className:de,htmlFor:"Nova Poshta",children:[(0,C.jsx)("input",{className:_e,type:"radio",id:"Nova Poshta",name:"typeOfDelivery",value:"Nova Poshta",onChange:Ee}),(0,C.jsx)("span",{className:me}),(0,C.jsx)("span",{className:K,children:"\u041d\u043e\u0432\u0430 \u043f\u043e\u0448\u0442\u0430"})]}),(0,C.jsxs)("label",{className:de,htmlFor:"Delivery",children:[(0,C.jsx)("input",{className:_e,type:"radio",id:"Delivery",name:"typeOfDelivery",value:"Delivery",onChange:Ee}),(0,C.jsx)("span",{className:me}),(0,C.jsx)("span",{className:K,children:"Delivery"})]})]}),(0,C.jsxs)("div",{children:["Sklad"===_.typeOfDelivery&&(0,C.jsxs)("div",{className:Y,children:[(0,C.jsx)("span",{className:z,children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u0430 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f"}),(0,C.jsx)("address",{className:$,children:"\u0410\u0434\u0440\u0435\u0441\u0430: \u0423\u043a\u0440\u0430\u0457\u043d\u0430, \u043c.\u041a\u0438\u0457\u0432, \u0432\u0443\u043b. \u041c\u0430\u0433\u043d\u0456\u0442\u043e\u0433\u043e\u0440\u0441\u044c\u043a\u0430 \u0431\u0443\u0434.5"}),(0,C.jsx)("p",{className:ee,children:"\u0420\u0435\u0436\u0438\u043c \u0440\u043e\u0431\u043e\u0442\u0438: \u041f\u043d-\u041f\u0442 9:00 \u2013 17:00"}),(0,C.jsxs)("p",{className:te,children:["\u0422\u0435\u043b\u0435\u0444\u043e\u043d:",(0,C.jsx)("a",{className:ae,href:"tel:+380991585152",children:" +38 (099) 158 51 52"})]})]}),"Nova Poshta"===_.typeOfDelivery&&(0,C.jsxs)("div",{className:re,children:[(0,C.jsxs)("label",{className:ne,children:[(0,C.jsx)("span",{className:oe,children:"\u041d\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u0439 \u043f\u0443\u043d\u043a\u0442"}),(0,C.jsx)("input",{className:!0===Be?le:ce,required:!0,name:"locality",type:"text",onChange:Ee,value:_.locality,placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u043d\u0430\u0441\u0435\u043b\u0435\u043d\u043e\u0433\u043e \u043f\u0443\u043d\u043a\u0442\u0430"})]}),Be&&(0,C.jsx)("p",{className:he,children:"\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u043d\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u0439 \u043f\u0443\u043d\u043a\u0442 \u0437\u0456 \u0441\u043f\u0438\u0441\u043a\u0443 !"}),!q&&(0,C.jsx)(C.Fragment,{children:null!==b&&(0,C.jsx)(Oe,{courierLocality:b,pickLocality:function(e){var t=e.locality,a=e.Ref;m((function(e){return(0,c.Z)((0,c.Z)({},e),{},{locality:t})})),L(!0),je(a),qe(!1),Ze(!1)}})}),(0,C.jsxs)("label",{className:null!==xe?se:ie,children:[(0,C.jsx)("span",{className:oe,children:"\u041d\u043e\u043c\u0435\u0440 \u0432\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u044f"}),(0,C.jsx)("input",{className:!0===we?le:ce,required:!0,name:"branchNumber",type:"text",onChange:Ee,value:_.branchNumber,placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u043e\u043c\u0435\u0440 \u0432\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u044f"})]}),we&&(0,C.jsx)("p",{className:he,children:"\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u043d\u043e\u043c\u0435\u0440 \u0432\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u044f \u0437\u0456 \u0441\u043f\u0438\u0441\u043a\u0443 !"}),pe&&(0,C.jsx)(C.Fragment,{children:null!==Z&&(0,C.jsx)(Le,{courierBranchNumber:Z,pickBranchNumber:function(e){m((function(t){return(0,c.Z)((0,c.Z)({},t),{},{branchNumber:e})})),Ae(!1),fe(!1)},search:_.branchNumber,notFoundBranch:function(){Ae(!0),fe(!1)}})})]}),"Delivery"===_.typeOfDelivery&&(0,C.jsxs)("div",{className:re,children:[(0,C.jsxs)("label",{className:ne,children:[(0,C.jsx)("span",{className:oe,children:"\u041d\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u0439 \u043f\u0443\u043d\u043a\u0442"}),(0,C.jsx)("input",{className:ce,required:!0,name:"locality",type:"text",onChange:Ee,value:_.locality,placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u043d\u0430\u0441\u0435\u043b\u0435\u043d\u043e\u0433\u043e \u043f\u0443\u043d\u043a\u0442\u0430"})]}),(0,C.jsxs)("label",{className:ne,children:[(0,C.jsx)("span",{className:oe,children:"\u041d\u043e\u043c\u0435\u0440 \u0432\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u044f"}),(0,C.jsx)("input",{className:ce,required:!0,name:"branchNumber",type:"text",onChange:Ee,value:_.branchNumber,placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u043e\u043c\u0435\u0440 \u0432\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u044f"})]})]})]})]})]}),(0,C.jsxs)("div",{className:X,children:[(0,C.jsx)("h3",{className:M,children:"\u041a\u043e\u043c\u0435\u043d\u0442\u0430\u0440 \u0434\u043e \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"}),(0,C.jsx)("textarea",{className:Q,name:"comments",value:_.comments,onChange:Ee})]})]}),(0,C.jsx)("button",{className:R,type:"submit",children:"\u0412\u0456\u0434\u043f\u0440\u0430\u0432\u0438\u0442\u0438 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"})]})})},De=a(8383),we=a(4659),Ae=a(8646),Ee=a(1831),Pe=a(1087),Re=a(8820),Je=a(4651),Ue=function(){var e=(0,s.useState)({}),t=(0,r.Z)(e,2),a=t[0],i=t[1],c=(0,s.useState)({}),l=(0,r.Z)(c,2),o=l[0],u=l[1],d=(0,s.useState)(!1),_=(0,r.Z)(d,2),m=_[0],h=_[1],p=(0,s.useState)(),f=(0,r.Z)(p,2),N=f[0],v=f[1],x=(0,k.I0)(),j=(0,s.useState)(null),b=(0,r.Z)(j,2),y=b[0],g=b[1],O=(0,k.v9)(Ae.h),F=(0,k.v9)(S.bg),B=(0,k.v9)(S.kE);(0,s.useEffect)((function(){if(!0===F)x((0,Z.TE)(B)).then((function(e){return i(e.payload.user.basket)}));else{var e=JSON.parse(localStorage.getItem("order"));null!==e&&i(e)}}),[]);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("div",{className:n.container,children:!0===O?(0,C.jsx)(Ee.Z,{}):(0,C.jsx)(C.Fragment,{children:null===y?(0,C.jsx)(C.Fragment,{children:0!==Object.keys(a).length?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(D,{basket:a,newOrder:function(e){!0===F?i(e):(i(e),localStorage.setItem("order",JSON.stringify(e)))}}),!m&&(0,C.jsx)("button",{onClick:function(){if(!0===F)x((0,Z.TE)(B)).then((function(e){v(e.payload.user.basket.reduce((function(e,t){return Number(e)+Number(t.price)*t.quantity}),"")),u(e.payload.user.basket)})),h(!0);else{var e=JSON.parse(localStorage.getItem("order"));v(e.reduce((function(e,t){return Number(e)+Number(t.price)*t.quantity}),"")),u(e),h(!0)}},className:n.button_confirm,children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u0438 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"}),m&&(0,C.jsx)(Ie,{confirmedOrder:o,totalAmount:N,dispatchOrder:function(e){try{x((0,we.m)(e)).then((function(e){201===e.payload.request.status&&(!0===F?x((0,Z.RT)(B)):localStorage.removeItem("order"),i({})),g(e.payload.request.status)}))}catch(t){console.log(t)}}})]}):(0,C.jsx)("p",{children:"\u041d\u0456\u0447\u043e\u0433\u043e \u043d\u0435\u043c\u0430\u0454 \u0432 \u043a\u043e\u0448\u0438\u043a\u0443"})}):(0,C.jsx)(C.Fragment,{children:201===y?(0,C.jsxs)("div",{className:n.dispatch_container,children:[(0,C.jsx)(Re.mny,{className:n.success_icon}),(0,C.jsx)("h3",{className:n.dispatch_title,children:"\u0417\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u0443\u0441\u043f\u0456\u0448\u043d\u043e"}),(0,C.jsx)("p",{className:n.dispatch_sentence,children:"\u041e\u0447\u0456\u043a\u0443\u0439\u0442\u0435 \u043d\u0430 \u0434\u0437\u0432\u0456\u043d\u043e\u043a \u0432\u0430\u0448\u043e\u0433\u043e \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430"}),(0,C.jsx)(Pe.OL,{className:n.dispatch_button,to:"/",children:"\u041d\u0430 \u0433\u043e\u043b\u043e\u0432\u043d\u0443"})]}):(0,C.jsxs)("div",{className:n.dispatch_container,children:[(0,C.jsx)(Je.$Vt,{className:n.error_icon}),(0,C.jsx)("h3",{className:n.dispatch_title,children:"\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a."}),(0,C.jsx)("p",{className:n.dispatch_sentence,children:"\u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437"}),(0,C.jsx)(Pe.OL,{className:n.dispatch_button,to:"/",children:"\u041d\u0430 \u0433\u043e\u043b\u043e\u0432\u043d\u0443"})]})})})}),(0,C.jsx)(De.Z,{})]})}},8646:function(e,t,a){a.d(t,{h:function(){return r}});var r=function(e){return e.order.loading}}}]);
//# sourceMappingURL=520.d4294d91.chunk.js.map