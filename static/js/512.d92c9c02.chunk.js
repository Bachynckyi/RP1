"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[512],{8383:function(e,t,n){n.d(t,{Z:function(){return c}});var a="Footer_container__iICw7",r=n(3329),c=function(){return(0,r.jsx)("div",{className:a})}},9938:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(4691),r="Loader_loader__DwtSp",c=n(3329),i=function(){return(0,c.jsx)("div",{className:r,children:(0,c.jsx)(a.s5,{strokeColor:"orange",strokeWidth:"5",animationDuration:"1.5",width:"96",visible:!0})})}},5998:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(9439),r="Search_container__FpDfx",c="Search_input__klILD",i="Search_button__W5MQY",o="Search_icon_search__skg9i",s=n(7689),l=n(2791),u=n(9126),_=n(3329),d=function(){var e=(0,s.s0)(),t=(0,l.useState)(""),n=(0,a.Z)(t,2),d=n[0],g=n[1];return(0,_.jsx)("div",{className:r,children:(0,_.jsxs)("div",{className:r,children:[(0,_.jsx)("input",{className:c,value:d,onChange:function(e){g(e.target.value)},placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u043e\u0448\u0443\u043a\u043e\u0432\u0438\u0439 \u0437\u0430\u043f\u0438\u0442"}),(0,_.jsx)("button",{type:"button",onClick:function(){e("/products?search=".concat(d))},className:i,children:(0,_.jsx)(u.dVI,{className:o})})]})})}},4512:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var a=n(9439),r=n(8383),c=n(2791),i=n(196),o=n(9434),s=n(9104),l=n(9938),u=n(1413),_=n(4925),d="CategoryItem_catalog_link__LYdxW",g="CategoryItem_image_link__4dwoY",h="CategoryItem_image_title__wbY+r",f=n(3329),m=function(e){var t=e.nameCategory,n=e.photoCategory,a=e.category,r=e.pickCategory;return(0,f.jsxs)("li",{onClick:function(e){r(e.currentTarget.id)},className:d,id:a,children:[(0,f.jsx)("img",{className:g,src:n,alt:t}),(0,f.jsx)("p",{className:h,children:t})]})},x="CategoryList_catalog_list__tTpgU",v=["_id"],j=function(e){var t=e.categories,n=e.fetchCategory,a=function(e){n(e)},r=t.map((function(e){var t=e._id,n=(0,_.Z)(e,v);return(0,f.jsx)(m,(0,u.Z)((0,u.Z)({},n),{},{_id:t,pickCategory:a}),t)}));return(0,f.jsx)("div",{children:(0,f.jsx)("ul",{className:x,children:r})})},C="CategoryPage_container__5nuWk",p="CategoryPage_title__e9qcq",y="CategoryPage_catalog__xv0N8",k=n(7689),N=n(5998),Z=function(){var e=(0,k.s0)(),t=(0,o.I0)(),n=(0,o.v9)(s.h),u=(0,c.useState)(null),_=(0,a.Z)(u,2),d=_[0],g=_[1];(0,c.useEffect)((function(){try{t((0,i.t)()).then((function(e){return g(e.payload.data)}))}catch(e){console.log(e)}}),[t]);return(0,f.jsxs)("div",{className:y,children:[(0,f.jsx)(N.Z,{}),!0===n?(0,f.jsx)(l.Z,{}):(0,f.jsxs)("div",{children:[(0,f.jsxs)("div",{className:C,children:[(0,f.jsx)("h1",{className:p,children:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433 \u0442\u043e\u0432\u0430\u0440\u0456\u0432"}),null!==d&&(0,f.jsx)(j,{categories:d,fetchCategory:function(t){e("/catalog/".concat(t))}})]}),(0,f.jsx)(r.Z,{})]})]})}},9104:function(e,t,n){n.d(t,{h:function(){return a}});var a=function(e){return e.category.loading}}}]);
//# sourceMappingURL=512.d92c9c02.chunk.js.map