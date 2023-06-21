"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[174],{9938:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(3367),a="Loader_loader__DwtSp",o=r(3329),c=function(){return(0,o.jsx)("div",{className:a,children:(0,o.jsx)(n.s5,{strokeColor:"orange",strokeWidth:"5",animationDuration:"1.5",width:"96",visible:!0})})}},5174:function(e,t,r){r.r(t),r.d(t,{default:function(){return Z}});var n=r(4942),a=r(5861),o=r(1413),c=r(9439),i=r(7757),l=r.n(i),u={container:"AddProductForm_container__ZMqFD",product_form:"AddProductForm_product_form__Mo-TC",label_input:"AddProductForm_label_input__Z0CRD",product_picture:"AddProductForm_product_picture__q+XIz",title_picture:"AddProductForm_title_picture__Mwg4G"},s=r(2791),d=r(4118),A=r(196),p=r(9434),h=r(9869),f=r(220);function g(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=r(3329),j=function(e){var t=e.title,r=e.pickCategory;return(0,m.jsxs)("li",{children:[(0,m.jsx)("input",{type:"radio",id:t,name:"category",value:t,onChange:function(e){var t=e.target.value;r(t)},required:!0}),(0,m.jsx)("label",{htmlFor:t,children:t})]})},x=["_id"],_=function(e){var t=e.categories,r=e.fetchCategory,n=function(e){r(e)},a=t.map((function(e){var t=e._id,r=g(e,x);return(0,m.jsx)(j,(0,o.Z)((0,o.Z)({},r),{},{_id:t,pickCategory:n}),t)}));return(0,m.jsxs)("div",{children:[(0,m.jsx)("h3",{children:"\u041e\u0431\u0440\u0430\u0442\u0438 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044e \u0442\u043e\u0432\u0430\u0440\u0443"}),(0,m.jsx)("ol",{children:a})]})},v=function(e){return e.category.loading},b=r(9938),N={title:"",description:"",category:"",price:"",type:"",color:"",photo:""},w=function(){var e=(0,p.I0)(),t=(0,p.v9)(h.kE),r=(0,s.useState)((0,o.Z)({},N)),i=(0,c.Z)(r,2),g=i[0],j=i[1],x=g.title,w=g.description,C=g.price,y=g.color,k=g.type,Z=g.photo,D=g.category,q=(0,s.useState)(null),B=(0,c.Z)(q,2),Q=B[0],P=B[1],M=(0,p.v9)(v);(0,s.useEffect)((function(){try{e((0,A.t)(t)).then((function(e){return P(e.payload.data)}))}catch(r){console.log(r)}}),[e,t]);var F=(0,s.useCallback)((function(e){var t=e.target,r=t.name,a=t.value;j("photo"===r?function(e){return(0,o.Z)((0,o.Z)({},e),{},{photo:t.files[0]})}:function(e){return(0,o.Z)((0,o.Z)({},e),{},(0,n.Z)({},r,a))})}),[j]);return(0,m.jsx)(m.Fragment,{children:M?(0,m.jsx)(b.Z,{}):(0,m.jsx)("div",{className:u.container,children:(0,m.jsxs)("form",{className:u.product_form,onSubmit:function(r){r.preventDefault(),console.log(g);var n=new FormData;n.append("photo",Z),n.append("title",x),n.append("type",k),n.append("color",y),n.append("price",C),n.append("description",w),n.append("category",D);var o=n,c=function(){var t=(0,a.Z)(l().mark((function t(r){var n,a;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=r.token,a=r.data;try{e((0,f.g)({token:n,data:a}))}catch(o){console.log(o)}case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();c({token:t,data:o}),j(N)},children:[(0,m.jsxs)("div",{children:[Z?(0,m.jsx)("img",{src:URL.createObjectURL(Z),alt:"productPhoto",className:u.product_picture}):(0,m.jsx)("img",{src:d,alt:"defaultPicture",className:u.product_picture}),(0,m.jsx)("p",{className:u.title_picture,children:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0456\u044f \u0442\u043e\u0432\u0430\u0440\u0443"}),(0,m.jsx)("input",{type:"file",name:"photo",required:!0,accept:"image/png, image/jpeg",onChange:F})]}),(0,m.jsxs)("div",{children:[(0,m.jsxs)("label",{className:u.label_input,children:["\u041d\u0430\u0437\u0432\u0430 \u0442\u043e\u0432\u0430\u0440\u0443",(0,m.jsx)("input",{className:u.input,name:"title",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u0442\u043e\u0432\u0430\u0440\u0443",required:!0,value:x,onChange:F})]}),(0,m.jsxs)("label",{children:["\u041e\u043f\u0438\u0441",(0,m.jsx)("textarea",{className:u.label_input,name:"description",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043e\u043f\u0438\u0441",rows:"20",cols:"70",required:!0,value:w,onChange:F})]}),(0,m.jsxs)("label",{className:u.label_input,children:["\u0424\u0430\u0441\u043e\u0432\u043a\u0430",(0,m.jsx)("input",{className:u.input,name:"type",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0444\u0430\u0441\u043e\u0432\u043a\u0443",required:!0,value:k,onChange:F})]}),(0,m.jsxs)("label",{className:u.label_input,children:["\u041a\u043e\u043b\u0456\u0440",(0,m.jsx)("input",{className:u.input,name:"color",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043a\u043e\u043b\u0456\u0440",required:!0,value:y,onChange:F})]}),(0,m.jsxs)("label",{className:u.label_input,children:["\u0426\u0456\u043d\u0430",(0,m.jsx)("input",{className:u.input,name:"price",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0446\u0456\u043d\u0443",required:!0,value:C,onChange:F})]})]}),null!==Q&&(0,m.jsx)(_,{categories:Q,fetchCategory:function(e){console.log(e),j((function(t){return(0,o.Z)((0,o.Z)({},t),{},{category:e})}))}}),(0,m.jsx)("button",{type:"submit",children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0442\u043e\u0432\u0430\u0440"})]})})})},C=r(9325),y="AddProductPage_container__IuA4V",k="AddProductPage_title__NkUw-",Z=function(){var e=(0,p.v9)(C.h);return(0,m.jsxs)("div",{className:y,children:[(0,m.jsx)("h1",{className:k,children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0442\u043e\u0432\u0430\u0440"}),e?(0,m.jsx)(b.Z,{}):(0,m.jsx)(w,{})]})}},9325:function(e,t,r){r.d(t,{h:function(){return n}});var n=function(e){return e.product.loading}},4118:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAYFBMVEXDw8MAAABwcHDHx8eKioqkpKS8vLzGxsatra3KysqQkJCenp6AgIB3d3dra2u3t7dZWVlMTEyysrIsLCxTU1NDQ0OUlJQhISEyMjJlZWUMDAw9PT2Dg4N0dHQYGBhGRkaaAXj3AAACVklEQVR4nO3a63KiQBBAYbATxxYQbxtNdjd5/7dMIFwEGbaA1Fo05/tpNFVzZJgBCQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICFEdFJROTRQ5jKxbvVRLF79CCmkW043XbeEeTpBxo8zXs2ZA2i9RSRiQbPUw5l90wDUw2cqIyIYamBHpP9Lho+GEMNNM7P8IfB/8BOg2qbcNaB/8BQg2qt3ww8J5hpkA2kkAwcj50GUdVgN3AymGkQpPW+1zMXfFeHdhror7LBuvt9GsXHzpHaaVAdCC/dw9FddnnYNU0MNXDp4WuUp6j7bCAv3jXDUIPAabo5eia9K46SS9ffDDX44nxbA7kWM2V/f5gYa+CTnwyKVeMuwjIaSL15CMNj+72LaODWt7fNTotsUG8dcq+t2bCEBpq0bqC2dhA2G4ho/cLN1VT3TtJkA00u57R8xQVvdw2ujdlgsYGusnGWEfRwl6B1aWmwQbEQ/v4elf7pSBCGt7cdDTYoF8K/2XftNp0JGqcEew3qhTD7rt27p8FHPRvMNbhZCN/Wge49CcIwqSJYa9BYCD+07yfpxmcsNQgax/6qJ0H4Xn7EWAM99426pfwhwlYDz0LoU1xGm2rgXQh9vu+smWoQXAY2uJhr0LMQ+uR31gw1GPVs1lZMNUj/PeIOqaUGchrV4Cp2GujrqATZZbSVBr274n5bNdJANuOJjQY8ozl6GtRm3sD9yDPb824QuHjqo/ureOYJ8p8TZKJHDwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOB/+wQBph2Iu8J1cQAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=174.eafe4dad.chunk.js.map