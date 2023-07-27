"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[787],{8787:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var n=r(9439),i=r(2791),a=r(4925),l=r(1413),u=r(3329),o=function(e){var t=e.product,r=e.updateOrder,a=e._id,o=e.updatedQuantity,c=t.title,s=t.photo,d=t.price,h=t.type,m=t.color,f=t.code,p=(0,i.useState)({}),x=(0,n.Z)(p,2),v=x[0],y=x[1],j=(0,i.useState)(),g=(0,n.Z)(j,2),b=g[0],S=g[1],O=JSON.parse(localStorage.getItem("order"));(0,i.useEffect)((function(){var e=O.filter((function(e){return e._id===a})),t=Number(e[0].quantity);y(t),S(d*t)}),[O,d,a]);var Z=function(e){if("increment"===e.target.name)if(""===v){var t=O.map((function(e){return e._id===a?(0,l.Z)((0,l.Z)({},e),{},{quantity:""}):e}));localStorage.setItem("order",JSON.stringify(t)),y(""),o()}else{var r=O.map((function(e){return e._id===a?(0,l.Z)((0,l.Z)({},e),{},{quantity:String(Number(e.quantity)+1)}):e}));localStorage.setItem("order",JSON.stringify(r)),y(String(Number(v)+1)),o()}else if("decrement"===e.target.name){if(v>0){var n=O.map((function(e){return e._id===a?(0,l.Z)((0,l.Z)({},e),{},{quantity:String(Number(e.quantity)-1)}):e}));localStorage.setItem("order",JSON.stringify(n)),y(String(Number(v)-1)),o()}}else if("quantity"===e.target.name){var i=e.target.value.replace(/\D+/g,"");if(0===i){var u=O.map((function(e){return e._id===a?(0,l.Z)((0,l.Z)({},e),{},{quantity:""}):e}));localStorage.setItem("order",JSON.stringify(u)),y(""),o()}else{var c=O.map((function(e){return e._id===a?(0,l.Z)((0,l.Z)({},e),{},{quantity:String(i)}):e}));localStorage.setItem("order",JSON.stringify(c)),y(String(i)),o()}}};return(0,u.jsxs)("li",{children:[(0,u.jsx)("h1",{children:c}),(0,u.jsx)("img",{src:s,alt:c}),(0,u.jsxs)("p",{children:["\u0426\u0456\u043d\u0430: ",d," \u0433\u0440\u043d"]}),(0,u.jsxs)("p",{children:["\u0424\u0430\u0441\u0443\u0432\u0430\u043d\u043d\u044f: ",h]}),(0,u.jsxs)("p",{children:["\u041a\u043e\u043b\u0456\u0440: ",m]}),(0,u.jsxs)("p",{children:["\u041a\u043e\u0434 \u0442\u043e\u0432\u0430\u0440\u0443: ",f]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("button",{type:"button",onClick:Z,name:"decrement",children:"-"}),(0,u.jsx)("input",{value:v,name:"quantity",onChange:Z,type:"text"}),(0,u.jsx)("button",{type:"button",onClick:Z,name:"increment",children:"+"})]}),(0,u.jsx)("button",{onClick:function(){var e=JSON.parse(localStorage.getItem("order")).filter((function(e){return e._id!==a}));r(e)},children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0437 \u043a\u043e\u0448\u0438\u043a\u0430"}),(0,u.jsxs)("p",{children:["\u0421\u0443\u043c\u0430: ",b," \u0433\u0440\u043d"]})]})},c=["_id"],s=function(e){var t=e.newOrder,r=(0,i.useState)(0),l=(0,n.Z)(r,2),s=l[0],d=l[1],h=(0,i.useState)(!1),m=(0,n.Z)(h,2),f=m[0],p=m[1],x=JSON.parse(localStorage.getItem("order"));(0,i.useEffect)((function(){d(x.reduce((function(e,t){return Number(e)+Number(t.price)*t.quantity}),"")),p(!1)}),[x,f]);var v=function(e){t(e)},y=function(){p(!0)},j=x.map((function(e){var t=e._id,r=(0,a.Z)(e,c);return(0,u.jsx)(o,{product:r,_id:t,updateOrder:v,updatedQuantity:y},t)}));return(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{children:"\u0422\u043e\u0432\u0430\u0440\u0438 \u0434\u043e \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"}),(0,u.jsx)("ol",{children:j}),(0,u.jsxs)("p",{children:["\u0421\u0443\u043c\u0430 \u0434\u043e \u0441\u043f\u043b\u0430\u0442\u0438: ",JSON.stringify(s)," \u0433\u0440\u043d"]})]})},d=r(4942),h=r(4659),m=r(9434),f=function(e){var t=e.confirmedOrder,r=e.totalAmount,a=e.dispatchOrder,o=(0,m.I0)(),c=(new Date).toLocaleString(),s=(0,i.useState)({customerSurname:"",customerName:"",phone:"",comments:"",typeOfDelivery:"",locality:"",branchNumber:"",date:c}),f=(0,n.Z)(s,2),p=f[0],x=f[1],v=(0,i.useState)({}),y=(0,n.Z)(v,2),j=y[0],g=y[1];(0,i.useEffect)((function(){g((0,l.Z)((0,l.Z)({},p),{},{confirmedOrder:t,totalAmount:String(r)}))}),[t,p,r]);var b=(0,i.useCallback)((function(e){var t=e.target,r=t.name,n=t.value;if("phone"===r){var i=t.value.replace(/\D+/g,"");x((function(e){return(0,l.Z)((0,l.Z)({},e),{},(0,d.Z)({},r,i))}))}else x("typeOfDelivery"===r?function(e){var t;return(0,l.Z)((0,l.Z)({},e),{},(t={},(0,d.Z)(t,r,n),(0,d.Z)(t,"locality",""),(0,d.Z)(t,"branchNumber",""),t))}:function(e){return(0,l.Z)((0,l.Z)({},e),{},(0,d.Z)({},r,n))})}),[x]);return(0,u.jsxs)("div",{children:[(0,u.jsxs)("form",{children:[(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u0456 \u0434\u0430\u043d\u0456"}),(0,u.jsxs)("label",{children:["\u041f\u0440\u0456\u0437\u0432\u0438\u0449\u0435",(0,u.jsx)("input",{required:!0,name:"customerSurname",onChange:b,value:p.customerSurname,type:"text"})]}),(0,u.jsxs)("label",{children:["\u0406\u043c'\u044f",(0,u.jsx)("input",{required:!0,name:"customerName",onChange:b,value:p.customerName,type:"text"})]}),(0,u.jsxs)("label",{children:["\u0422\u0435\u043b\u0435\u0444\u043e\u043d",(0,u.jsx)("input",{type:"text",required:!0,name:"phone",onChange:b,value:p.phone})]})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{children:"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430"}),(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{children:[(0,u.jsx)("input",{type:"radio",id:"Sklad",name:"typeOfDelivery",value:"Sklad",onChange:b}),(0,u.jsx)("label",{htmlFor:"Sklad",children:"\u0421\u0430\u043c\u043e\u0432\u0438\u0432\u0456\u0437"}),(0,u.jsx)("input",{type:"radio",id:"Nova Poshta",name:"typeOfDelivery",value:"Nova Poshta",onChange:b}),(0,u.jsx)("label",{htmlFor:"Nova Poshta",children:"\u041d\u043e\u0432\u0430 \u041f\u043e\u0448\u0442\u0430"}),(0,u.jsx)("input",{type:"radio",id:"Delivery",name:"typeOfDelivery",value:"Delivery",onChange:b}),(0,u.jsx)("label",{htmlFor:"Delivery",children:"Delivery"})]}),(0,u.jsxs)("div",{children:["Sklad"===p.typeOfDelivery&&(0,u.jsxs)("div",{children:[(0,u.jsx)("address",{children:"\u0410\u0434\u0440\u0435\u0441\u0430: \u0423\u043a\u0440\u0430\u0457\u043d\u0430, \u043c. \u041a\u0438\u0457\u0432 , \u0432\u0443\u043b. \u0414\u0440\u0430\u0433\u043e\u043c\u0430\u043d\u043e\u0432\u0430 23, \u043e\u0444\u0456\u0441 555"}),(0,u.jsx)("p",{children:"\u0420\u0435\u0436\u0438\u043c \u0440\u043e\u0431\u043e\u0442\u0438: \u041f\u043d-\u041f\u0442 9:00 \u2013 17:00"}),(0,u.jsxs)("p",{children:["\u0422\u0435\u043b\u0435\u0444\u043e\u043d:",(0,u.jsx)("a",{href:"tel:+380991111111",children:" +38 099 111 11 11"})]})]}),"Nova Poshta"===p.typeOfDelivery&&(0,u.jsxs)("div",{children:[(0,u.jsxs)("label",{children:["\u041d\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u0439 \u043f\u0443\u043d\u043a\u0442",(0,u.jsx)("input",{required:!0,name:"locality",type:"text",onChange:b,value:p.locality})]}),(0,u.jsxs)("label",{children:["\u041d\u043e\u043c\u0435\u0440 \u0432\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u044f",(0,u.jsx)("input",{required:!0,name:"branchNumber",type:"text",onChange:b,value:p.branchNumber})]})]}),"Delivery"===p.typeOfDelivery&&(0,u.jsxs)("div",{children:[(0,u.jsxs)("label",{children:["\u041d\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u0439 \u043f\u0443\u043d\u043a\u0442",(0,u.jsx)("input",{required:!0,name:"locality",type:"text",onChange:b,value:p.locality})]}),(0,u.jsxs)("label",{children:["\u041d\u043e\u043c\u0435\u0440 \u0432\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u044f",(0,u.jsx)("input",{required:!0,name:"branchNumber",type:"text",onChange:b,value:p.branchNumber})]})]})]})]})]}),(0,u.jsx)("div",{children:(0,u.jsxs)("label",{children:["\u041a\u043e\u043c\u0435\u043d\u0442\u0430\u0440 \u0434\u043e \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f",(0,u.jsx)("textarea",{rows:"20",cols:"70",required:!0,name:"comments",value:p.comments,onChange:b})]})})]}),(0,u.jsx)("button",{type:"click",onClick:function(){try{o((0,h.m)(j)).then(localStorage.removeItem("order"))}catch(e){console.log(e)}a(!0)},children:"\u0412\u0456\u0434\u043f\u0440\u0430\u0432\u0438\u0442\u0438 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"})]})},p=function(){var e=(0,i.useState)({}),t=(0,n.Z)(e,2),r=t[0],a=t[1],l=(0,i.useState)({}),o=(0,n.Z)(l,2),c=o[0],d=o[1],h=(0,i.useState)(!1),m=(0,n.Z)(h,2),p=m[0],x=m[1],v=(0,i.useState)(),y=(0,n.Z)(v,2),j=y[0],g=y[1];(0,i.useEffect)((function(){var e=JSON.parse(localStorage.getItem("order"));null!==e&&a(e)}),[]);return(0,u.jsx)("div",{children:0!==Object.keys(r).length?(0,u.jsxs)("div",{children:[(0,u.jsx)(s,{basket:r,newOrder:function(e){a(e),localStorage.setItem("order",JSON.stringify(e))}}),!p&&(0,u.jsx)("button",{onClick:function(){var e=JSON.parse(localStorage.getItem("order"));g(e.reduce((function(e,t){return Number(e)+Number(t.price)*t.quantity}),"")),d(e),x(!0)},children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u0438 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"}),p&&(0,u.jsx)("div",{children:(0,u.jsx)(f,{confirmedOrder:c,totalAmount:j,dispatchOrder:function(e){!0===e&&a({})}})})]}):(0,u.jsx)("p",{children:"\u041d\u0456\u0447\u043e\u0433\u043e \u043d\u0435\u043c\u0430\u0454 \u0432 \u043a\u043e\u0448\u0438\u043a\u0443"})})}},4925:function(e,t,r){function n(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}r.d(t,{Z:function(){return n}})}}]);
//# sourceMappingURL=787.2c8a3a95.chunk.js.map