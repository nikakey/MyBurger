webpackJsonp([2],{182:function(e,r,n){"use strict";function t(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function o(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!==typeof r&&"function"!==typeof r?e:r}function i(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}Object.defineProperty(r,"__esModule",{value:!0});var a=n(0),s=n.n(a),c=n(7),p=n(13),d=n(193),l=n(55),u=n(12),A=n(54),f=function(){function e(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(r,n,t){return n&&e(r.prototype,n),t&&e(r,t),r}}(),x=function(e){function r(){return t(this,r),o(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return i(r,e),f(r,[{key:"componentDidMount",value:function(){this.props.onFetchOrders(this.props.token,this.props.userId)}},{key:"render",value:function(){var e=s.a.createElement(A.a,null);return this.props.loading||(e=this.props.orders.map(function(e){return s.a.createElement(d.a,{key:e.id,ingredients:e.ingredients,price:e.price})})),s.a.createElement("div",null,e)}}]),r}(a.Component),m=function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}},b=function(e){return{onFetchOrders:function(r,n){return e(u.d(r,n))}}};r.default=Object(c.b)(m,b)(Object(l.a)(x,p.a))},193:function(e,r,n){"use strict";var t=n(0),o=n.n(t),i=n(194),a=n.n(i),s=function(e){var r=[];for(var n in e.ingredients)r.push({name:n,amount:e.ingredients[n]});var t=r.map(function(e){return o.a.createElement("span",{style:{textTransform:"capitalize",display:"block",border:"1px solid #ccc",padding:"5px"},key:e.name},e.name," (",e.amount,")")});return o.a.createElement("div",{className:a.a.Order},o.a.createElement("p",null,"Ingredients:"),o.a.createElement("div",{className:a.a.IngredientsWrapper},t),o.a.createElement("p",null,"Price: ",o.a.createElement("strong",null,"USD ",Number.parseFloat(e.price).toFixed(2))))};r.a=s},194:function(e,r,n){var t=n(195);"string"===typeof t&&(t=[[e.i,t,""]]);var o={hmr:!1};o.transform=void 0;n(180)(t,o);t.locals&&(e.exports=t.locals)},195:function(e,r,n){r=e.exports=n(179)(!0),r.push([e.i,".Order__Order__4yi4Z{width:80%;border:1px solid #eee;-webkit-box-shadow:0 2px 3px #ccc;box-shadow:0 2px 3px #ccc;padding:10px;margin:10px auto;-webkit-box-sizing:border-box;box-sizing:border-box}.Order__IngredientsWrapper__2nTtf{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}@media (min-width:600px){.Order__IngredientsWrapper__2nTtf{-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:justify;justify-content:space-between}}","",{version:3,sources:["/Users/veronika/Documents/burger-builder-project/src/components/Order/Order.css"],names:[],mappings:"AAAA,qBACE,UAAW,AACX,sBAAuB,AACvB,kCAAmC,AAC3B,0BAA2B,AACnC,aAAc,AACd,iBAAkB,AAClB,8BAA+B,AACvB,qBAAuB,CAChC,AAED,kCACE,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AACvB,qBAAuB,CAC5B,AAED,yBACE,kCACE,uBAAwB,AACpB,mBAAoB,AACxB,mBAAoB,AAChB,eAAgB,AACpB,sBAAuB,AACnB,6BAA+B,CACpC,CACF",file:"Order.css",sourcesContent:[".Order {\n  width: 80%;\n  border: 1px solid #eee;\n  -webkit-box-shadow: 0 2px 3px #ccc;\n          box-shadow: 0 2px 3px #ccc;\n  padding: 10px;\n  margin: 10px auto;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.IngredientsWrapper {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n\n@media (min-width: 600px) {\n  .IngredientsWrapper {\n    -ms-flex-direction: row;\n        flex-direction: row;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n  }\n}"],sourceRoot:""}]),r.locals={Order:"Order__Order__4yi4Z",IngredientsWrapper:"Order__IngredientsWrapper__2nTtf"}}});
//# sourceMappingURL=2.303c6ddf.chunk.js.map