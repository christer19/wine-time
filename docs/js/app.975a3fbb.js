(function(t){function e(e){for(var a,s,o=e[0],l=e[1],c=e[2],v=0,p=[];v<o.length;v++)s=o[v],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var l=n[o];0!==r[l]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"12e3":function(t,e,n){},"29a1":function(t,e,n){"use strict";var a=n("12e3"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"grey"},[a("nav",{staticClass:"flex-containerNav"},[a("h1",{staticClass:"ninety"},[a("router-link",{attrs:{to:"/"}},[a("img",{staticClass:"logo",attrs:{src:n("5a09")}})])],1),a("router-link",{staticClass:"ten about",attrs:{to:"/About"}},[t._v("About")])],1)]),a("router-view")],1)},i=[],s=(n("034f"),n("2877")),o={},l=Object(s["a"])(o,r,i,!1,null,null,null),c=l.exports,u=n("8c4f"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Home"},[n("form",{staticClass:"container",on:{submit:function(e){return e.preventDefault(),t.findWine(e)}}},[n("p",{staticClass:"ab-test"},[t._v("Select a wine and your max-price then search to see a list of recommended wines")]),n("div",{staticClass:"flex-container margin-bottom"},[n("div",[t._m(0),n("select",{directives:[{name:"model",rawName:"v-model",value:t.wine,expression:"wine"}],staticClass:"select-css",attrs:{name:"redWine",id:"redWine"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.wine=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"cabernet sauvignon"}},[t._v("Cabernet Sauvignon")]),n("option",{attrs:{value:"merlot"}},[t._v("Merlot")]),n("option",{attrs:{value:"pinot noir"}},[t._v("Pinot Noir")]),n("option",{attrs:{value:"bordeaux"}},[t._v("Bordeaux")]),n("option",{attrs:{value:"syrah"}},[t._v("Syrah")]),n("option",{attrs:{value:"malbec"}},[t._v("Malbec")]),n("option",{attrs:{value:"zinfandel"}},[t._v("Zinfandel")])])]),n("div",[n("label",{staticClass:"form-labels",attrs:{for:"whiteWine"}},[t._v("WHITE")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.wine,expression:"wine"}],staticClass:"select-css",attrs:{name:"whiteWine",id:"whiteWine"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.wine=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"pinto grigio"}},[t._v("Pinot Grigio")]),n("option",{attrs:{value:"chardonnay"}},[t._v("Chardonnay")]),n("option",{attrs:{value:"sauvignon blanc"}},[t._v("Sauvignon blanc")])])]),n("div",[n("label",{staticClass:"form-labels",attrs:{for:"sparklingWine"}},[t._v("SPARKLING")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.wine,expression:"wine"}],staticClass:"select-css",attrs:{name:"sparklingWine",id:"sparklingWine"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.wine=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"champagne"}},[t._v("Champagne")]),n("option",{attrs:{value:"cava"}},[t._v("Cava")]),n("option",{attrs:{value:"prosecco"}},[t._v("Prosecco")]),n("option",{attrs:{value:"sparkling wine"}},[t._v("Sparkling Wine")])])])]),n("div",{staticClass:"flex-container3 margin-bottom"},[n("div",[t._m(1),n("input",{directives:[{name:"model",rawName:"v-model",value:t.maxPrice,expression:"maxPrice"}],attrs:{id:"max-price",name:"max-price",type:"text"},domProps:{value:t.maxPrice},on:{input:function(e){e.target.composing||(t.maxPrice=e.target.value)}}})]),n("button",{staticClass:"form-labels",attrs:{type:"submit"},on:{click:t.googleClick}},[n("span",{staticClass:"search-icon"},[n("font-awesome-icon",{attrs:{icon:"search"}})],1),n("span",{staticClass:"searchWord"},[t._v("SEARCH")])])])]),t.results&&t.results.length>0?n("div",{staticClass:"rule"}):t._e(),n("main",{staticClass:"wines-container"},[t.results&&t.results.length>0?n("ul",[n("div",{staticClass:"container"},[n("p",{staticClass:"filter-text"},[t._v("FILTER")]),n("button",{staticClass:"filter-btn",on:{click:t.high}},[t._v("$ high to low")]),n("button",{staticClass:"filter-btn",on:{click:t.low}},[t._v("$ low to high")]),n("button",{staticClass:"filter-btn",on:{click:t.highestRatings}},[t._v("Highest Rated")]),n("button",{staticClass:"filter-btn",on:{click:t.mostRatings}},[t._v("Rating Count")])]),t._l(t.results,(function(e){return n("li",{key:e.id,staticClass:"wine-container container"},[n("div",{staticClass:"flex-container"},[n("div",{staticClass:"twentyFive"},[n("img",{staticClass:"img",attrs:{src:e.imageUrl,alt:e.title}})]),n("div",{staticClass:"seventyFive"},[n("h2",[n("strong",[t._v(t._s(e.title))])]),n("span",{staticClass:"price"},[t._v("$"+t._s(e.price)+" | "),n("a",{staticClass:"purchase",attrs:{target:"_blank",href:e.link}},[t._v("PURCHASE")])]),n("span",{staticClass:"rating"},[t._v(" Rating "),n("span",{staticClass:"inside-rating"},[t._v(t._s(Math.floor(100*e.averageRating))+"%")])]),n("span",{staticClass:"ratings"},[t._v(" Ratings "),n("strong",[t._v("x "+t._s(Math.floor(e.ratingCount)))])]),n("p",[t._v(t._s(e.description))])])])])}))],2):t.results&&0==t.results.length?n("div",{staticClass:"no-results"},[n("h2",[t._v("No Wines Found")]),n("p",[t._v("Please adjust your search")])]):t._e(),t.errors&&t.errors.length>0?n("ul",{staticClass:"errors"},t._l(t.errors,(function(e){return n("li",{key:e},[t._v(t._s(e.message))])})),0):t._e()])])},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"form-labels",attrs:{for:"redWine"}},[t._v(" RED "),n("i",{staticClass:"fas fa-angle-down"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"form-labels",attrs:{for:"max-price"}},[t._v(" MAX PRICE "),n("strong",{staticClass:"fiveHundred"},[t._v("$")])])}],f=n("bc3a"),m=n.n(f),d={name:"Home",data:function(){return{results:null,errors:[],wine:"",maxPrice:""}},methods:{findWine:function(){var t=this;m.a.get("https://api.spoonacular.com/food/wine/recommendation",{params:{wine:this.wine,number:18,minRating:.8,maxPrice:this.maxPrice,apiKey:"2c010ee91b164e24a2c25a653e110615"}}).then((function(e){t.results=t.processData(e.data.recommendedWines)})).catch((function(e){t.errors.push(e)}))},googleClick:function(){this.$ga.event({eventCategory:"mainApp",eventAction:"click",eventLabel:"wine_click",eventValue:1})},high:function(){return this.results.sort((function(t,e){return e.price-t.price}))},low:function(){return this.results.sort((function(t,e){return t.price-e.price}))},highestRatings:function(){return this.results.sort((function(t,e){return e.averageRating-t.averageRating}))},mostRatings:function(){return this.results.sort((function(t,e){return e.ratingCount-t.ratingCount}))},processData:function(t){for(var e in t)t[e].price=parseFloat(t[e].price.substring(1));return t}}},g=d,h=(n("29a1"),Object(s["a"])(g,v,p,!1,null,"66758b20",null)),_=h.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"About"},[n("p",[t._v(t._s(t.about))])])},C=[],w={data:function(){return{about:""}}},y=w,x=Object(s["a"])(y,b,C,!1,null,null,null),k=x.exports;a["a"].use(u["a"]);var P=[{path:"/",name:"Home",component:_},{path:"/About",name:"About",component:k}],R=new u["a"]({routes:P}),W=R,A=n("0284"),O=n.n(A),j=n("ecee"),S=n("c074"),E=n("ad3d");j["c"].add(S["a"]),a["a"].component("font-awesome-icon",E["a"]),a["a"].config.productionTip=!1,a["a"].use(O.a,{id:"UA-167943063-1",router:W}),new a["a"]({router:W,render:function(t){return t(c)}}).$mount("#app")},"5a09":function(t,e,n){t.exports=n.p+"img/wineTime.e7e153e8.svg"},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.975a3fbb.js.map