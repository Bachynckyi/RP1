"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[603],{5603:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(9439),i=n(9869),c=n(9434),l=n(2791),o=n(1413),u=n(4925),s=n(3329),a=function(e){var t=e.title,n=e.photo,i=e.price,c=e.type,o=e.color,u=e.code,a=e.quantity,d=e._id,f=(0,l.useState)({}),h=(0,r.Z)(f,2),p=h[0],j=h[1],g=i*p;(0,l.useEffect)((function(){j(a)}),[]);var m=function(e){"increment"===e.target.name?j(""===p?"1":String(Number(p)+1)):"decrement"===e.target.name?p>0&&j(String(Number(p)-1)):"quantity"===e.target.name&&(0===e.target.value.length?j(""):j(String(e.target.value)))};return(0,s.jsxs)("li",{children:[(0,s.jsx)("h1",{children:t}),(0,s.jsx)("img",{src:n,alt:t}),(0,s.jsxs)("p",{children:["\u0426\u0456\u043d\u0430: ",i," \u0433\u0440\u043d"]}),(0,s.jsxs)("p",{children:["\u0424\u0430\u0441\u043e\u0432\u043a\u0430: ",c]}),(0,s.jsxs)("p",{children:["\u041a\u043e\u043b\u0456\u0440: ",o]}),(0,s.jsxs)("p",{children:["\u041a\u043e\u0434 \u0442\u043e\u0432\u0430\u0440\u0443: ",u]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("button",{type:"button",onClick:m,name:"decrement",children:"-"}),(0,s.jsx)("input",{value:p,name:"quantity",onChange:m,type:"number"}),(0,s.jsx)("button",{type:"button",onClick:m,name:"increment",children:"+"})]}),(0,s.jsx)("button",{onClick:function(){var e=JSON.parse(localStorage.getItem("order"));console.log(e),console.log(d);var t=e.filter((function(e){return e._id!==d}));console.log(t)},children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0437 \u043a\u043e\u0448\u0438\u043a\u0430"}),(0,s.jsxs)("p",{children:["\u0421\u0443\u043c\u043c\u0430: ",g," \u0433\u0440\u043d"]})]})},d=["_id"],f=function(e){var t=e.basket.map((function(e){var t=e._id,n=(0,u.Z)(e,d);return(0,s.jsx)(a,(0,o.Z)((0,o.Z)({},n),{},{_id:t}),t)}));return(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{children:"\u0422\u043e\u0432\u0430\u0440\u0438 \u0434\u043e \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"}),(0,s.jsx)("ol",{children:t}),(0,s.jsx)("p",{children:"\u0421\u0443\u043c\u0430 \u0434\u043e \u0441\u043f\u043b\u0430\u0442\u0438: "}),(0,s.jsx)("button",{children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u0438 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"})]})},h=function(){var e=(0,c.v9)(i.bg),t=(0,l.useState)({}),n=(0,r.Z)(t,2),o=n[0],u=n[1];return(0,l.useEffect)((function(){if(!1===e){var t=JSON.parse(localStorage.getItem("order"));null!==t&&u(t)}}),[]),(0,s.jsx)("div",{children:0!==Object.keys(o).length?(0,s.jsx)(f,{basket:o}):(0,s.jsx)("p",{children:"\u041d\u0456\u0447\u043e\u0433\u043e \u043d\u0435\u043c\u0430\u0454 \u0432 \u043a\u043e\u0448\u0438\u043a\u0443"})})}},4925:function(e,t,n){function r(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=603.89f697a0.chunk.js.map