(function(t){function a(a){for(var n,s,c=a[0],i=a[1],u=a[2],l=0,d=[];l<c.length;l++)s=c[l],r[s]&&d.push(r[s][0]),r[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);p&&p(a);while(d.length)d.shift()();return o.push.apply(o,u||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],n=!0,s=1;s<e.length;s++){var c=e[s];0!==r[c]&&(n=!1)}n&&(o.splice(a--,1),t=i(i.s=e[0]))}return t}var n={},s={app:0},r={app:0},o=[];function c(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-00586248":"47aaa4b0","chunk-02c8422a":"67f0f5d5","chunk-08fe058a":"17cbabe5","chunk-0b854644":"7c3a63fd","chunk-2bf93f4e":"6cd153c9","chunk-41ecde7a":"aecc8d2d","chunk-51063314":"64e4db3f","chunk-589d8e63":"08ac549a","chunk-7e6a03a7":"343ad0f6","chunk-be9efc50":"c6c2c4cb","chunk-d2e6e710":"c910541d"}[t]+".js"}function i(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.e=function(t){var a=[],e={"chunk-00586248":1,"chunk-02c8422a":1,"chunk-08fe058a":1,"chunk-0b854644":1,"chunk-2bf93f4e":1,"chunk-41ecde7a":1,"chunk-51063314":1,"chunk-589d8e63":1,"chunk-7e6a03a7":1,"chunk-be9efc50":1,"chunk-d2e6e710":1};s[t]?a.push(s[t]):0!==s[t]&&e[t]&&a.push(s[t]=new Promise(function(a,e){for(var n="css/"+({}[t]||t)+"."+{"chunk-00586248":"ea8021bc","chunk-02c8422a":"28f6bc40","chunk-08fe058a":"c88bc448","chunk-0b854644":"86a3e724","chunk-2bf93f4e":"dba62de6","chunk-41ecde7a":"1b087291","chunk-51063314":"394e2ee6","chunk-589d8e63":"8b52aa73","chunk-7e6a03a7":"6e54d9f3","chunk-be9efc50":"fb4c6166","chunk-d2e6e710":"022cb1ec"}[t]+".css",r=i.p+n,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var u=o[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===r))return a()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===n||l===r)return a()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=a,p.onerror=function(a){var n=a&&a.target&&a.target.src||r,o=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");o.request=n,delete s[t],p.parentNode.removeChild(p),e(o)},p.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(p)}).then(function(){s[t]=0}));var n=r[t];if(0!==n)if(n)a.push(n[2]);else{var o=new Promise(function(a,e){n=r[t]=[a,e]});a.push(n[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(t),u=function(a){l.onerror=l.onload=null,clearTimeout(d);var e=r[t];if(0!==e){if(e){var n=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.src,o=new Error("Loading chunk "+t+" failed.\n("+n+": "+s+")");o.type=n,o.request=s,e[1](o)}r[t]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(a)},i.m=t,i.c=n,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)i.d(e,n,function(a){return t[a]}.bind(null,n));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=a,u=u.slice();for(var d=0;d<u.length;d++)a(u[d]);var p=l;o.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"07c4":function(t,a,e){},3693:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("div",{staticClass:"carousel slide",attrs:{id:"carouselExampleIndicators","data-ride":"carousel"}},[n("ol",{staticClass:"carousel-indicators"},[n("li",{staticClass:"active",attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"0"}}),n("li",{attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"1"}}),n("li",{attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"2"}})]),n("div",{staticClass:"carousel-inner"},[n("div",{staticClass:"carousel-item  header-carousel-item active bg-cover",staticStyle:{"background-image":"url('https://images.unsplash.com/photo-1525026198548-4baa812f1183?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80')"}},[n("div",{staticClass:"bg-gradient"},[n("div",{staticClass:"carousel-caption d-none d-md-block logo-img"},[n("img",{staticClass:"logo-img",attrs:{src:e("3bf7"),width:"350px"}})])])]),n("div",{staticClass:"carousel-item  header-carousel-item bg-cover",staticStyle:{"background-image":"url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')"}},[n("div",{staticClass:"bg-gradient"},[n("div",{staticClass:"carousel-caption d-none d-md-block px-2"},[n("h1",{staticClass:"enFont mb-4"},[t._v("Sharing Love")]),n("p",{staticClass:"myFont my-3 d-none d-lg-block"},[t._v("愛的溫度，是我能為你做的事情")]),n("p",{staticClass:"myFont"},[t._v("點亮盼望，傳遞愛")])])])]),n("div",{staticClass:"carousel-item  header-carousel-item bg-cover",staticStyle:{"background-image":"url('https://images.unsplash.com/photo-1460788150444-d9dc07fa9dba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')"}},[n("div",{staticClass:"bg-gradient"},[n("div",{staticClass:"carousel-caption d-none d-md-block px-2"},[n("h1",{staticClass:"enFont mb-4"},[t._v("Be Together")]),n("p",{staticClass:"myFont my-3 d-none d-lg-block"},[t._v("別讓他們的無助，成為彼此的遺憾")]),n("p",{staticClass:"myFont"},[t._v("你的微光，是我們的希望")])])])])]),n("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselExampleIndicators",role:"button","data-slide":"prev"}},[n("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),n("span",{staticClass:"sr-only"},[t._v("Previous")])]),n("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselExampleIndicators",role:"button","data-slide":"next"}},[n("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),n("span",{staticClass:"sr-only"},[t._v("Next")])])])])}],r=e("1157"),o=e.n(r),c=(e("a7c7"),{name:"Carousel",mounted:function(){o()("#carouselExampleIndicators").carousel({interval:5e3})}}),i=c,u=e("2877"),l=Object(u["a"])(i,n,s,!1,null,null,null);a["a"]=l.exports},"3bf7":function(t,a,e){t.exports=e.p+"img/Ho73-bg.f5d2b8c0.png"},"3c9b":function(t,a,e){},"3d4d":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("f751"),e("097d");var n=e("2b0e"),s=e("2f62"),r=e("bc3a"),o=e.n(r),c=e("a7fe"),i=e.n(c),u=e("9062"),l=e.n(u),d=e("7bb1"),p=(e("e40d"),e("427f")),f=e.n(p),h=(e("4989"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)}),m=[],v=(e("5c0b"),e("2877")),b={},g=Object(v["a"])(b,h,m,!1,null,null,null),C=g.exports,k=e("8c4f"),_=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Alert"),e("Navbar",{staticClass:"sticky-top"}),e("router-view"),e("Footer",{staticClass:"d-none d-md-block"})],1)},y=[],x=e("d178"),w=e("3693"),E=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"message-alert"},t._l(t.messages,function(a,n){return e("div",{key:n,staticClass:"alert alert-dismissible",class:"alert-"+a.status},[t._v("\n    "+t._s(a.message)+"\n    "),e("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(a){return t.removeMessage(n)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}),0)},N=[],O=e("cebc"),M={name:"Alert",data:function(){return{}},methods:{updateMessage:function(t,a){this.$store.dispatch("updateMessage",{message:t,status:a})},removeMessage:function(){this.$store.dispatch("removeMessage")},removeMessageWithTiming:function(t){this.$store.dispatch("removeMessageWithTiming")}},computed:Object(O["a"])({},Object(s["c"])(["messages"]))},A=M,S=(e("82d5"),Object(v["a"])(A,E,N,!1,null,null,null)),j=S.exports,D=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("div",{staticClass:"bg"},[n("footer",{staticClass:"container"},[n("div",{staticClass:"form-row py-2"},[n("div",{staticClass:"col-md-3 mt-3"},[n("a",{attrs:{href:"/"}},[n("img",{staticClass:"myImg",attrs:{src:e("a61c"),alt:""}})])]),n("div",{staticClass:"col-md-9 text-secondary mt-md-3 mt-lg-5"},[n("p",[t._v("\n            　　我們希望藉由Half of 73°C 平台創造更加完備且快速地使用方式，提供所有願意付出的人，不論是以基金會的型式或是個人的名義。我們需要您的陪伴，一起創造更好的未來。\n          ")])])]),n("div",{staticClass:"row pb-3"},[n("div",{staticClass:"col-md-5 mt-1 mb-2"},[n("span",{staticClass:"h5 text-secondary"},[t._v("Follow Us : ")]),n("a",{staticClass:"text-info ml-2",attrs:{href:"https://www.facebook.com/",target:"_blank",title:"facebook"}},[n("i",{staticClass:"fab fa-facebook-square fa-2x"})]),n("a",{staticClass:"text-info ml-2",attrs:{href:"https://twitter.com/",target:"_blank",title:"twitter"}},[n("i",{staticClass:"fab fa-twitter  fa-2x"})]),n("a",{staticClass:"text-info ml-2",attrs:{href:"https://www.instagram.com/",target:"_blank",title:"instagram"}},[n("i",{staticClass:"fab fa-instagram  fa-2x"})]),n("a",{staticClass:"text-info ml-2",attrs:{href:"https://www.youtube.com/?gl=TW&hl=zh-TW",target:"_blank",title:"youtube"}},[n("i",{staticClass:"fab fa-youtube  fa-2x"})])]),n("div",{staticClass:"col-md-6 ml-auto"},[n("div",{staticClass:"input-group mb-0 input-group-md"},[n("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"輸入信箱獲取最新消息!"}}),n("div",{staticClass:"input-group-append"},[n("button",{staticClass:"btn btn-info text-",attrs:{type:"button"}},[t._v("\n                訂閱\n              ")])])])])]),n("div",{staticClass:"pt-2 pb-4"},[n("div",{staticClass:"text-center"},[t._v("Copyright © 2019 "),n("a",{attrs:{href:"",title:"Half of 73°C"}},[t._v("halfof73.com")]),t._v(". All Rights Reserved.\n        ")])])])])])}],T=(e("f0a0"),{}),L=Object(v["a"])(T,D,I,!1,null,"0261c905",null),$=L.exports,q={components:{Navbar:x["a"],Carousel:w["a"],Alert:j,Footer:$}},P=q,G=Object(v["a"])(P,_,y,!1,null,null,null),F=G.exports;n["a"].use(k["a"]);var H=new k["a"]({routes:[{path:"*",redirect:"/"},{path:"/login",name:"Login",component:function(){return e.e("chunk-7e6a03a7").then(e.bind(null,"a55b"))}},{path:"/",component:F,children:[{path:"",name:"HomePage",component:function(){return e.e("chunk-41ecde7a").then(e.bind(null,"ac80"))}},{path:"shop",name:"Shop",component:function(){return e.e("chunk-02c8422a").then(e.bind(null,"5aa4"))}},{path:"detail/:productId",name:"Detail",component:function(){return e.e("chunk-d2e6e710").then(e.bind(null,"0da0"))}},{path:"customer_order",name:"CustomerOrder",component:function(){return e.e("chunk-589d8e63").then(e.bind(null,"62e7"))}},{path:"customer_checkout/:orderId",name:"CustomerCheckout",component:function(){return e.e("chunk-be9efc50").then(e.bind(null,"e234"))}}]},{path:"/admin",name:"Dashboard",component:function(){return e.e("chunk-51063314").then(e.bind(null,"7277"))},meta:{requiresAuth:!0},children:[{path:"products",component:function(){return e.e("chunk-0b854644").then(e.bind(null,"1fae"))},meta:{requiresAuth:!0},children:[{path:"",name:"ProductList",component:function(){return e.e("chunk-00586248").then(e.bind(null,"3a3a"))},meta:{requiresAuth:!0}},{path:"orderList",name:"OrderList",component:function(){return e.e("chunk-2bf93f4e").then(e.bind(null,"175e"))},meta:{requiresAuth:!0}},{path:"coupons",name:"Coupons",component:function(){return e.e("chunk-08fe058a").then(e.bind(null,"af4e"))},meta:{requiresAuth:!0}}]}]}],scrollBehavior:function(t,a,e){if(e)return e;if(t.hash){var n={};return n.selector=t.hash,!!document.querySelector(t.hash)&&(n.offset={y:100},n)}return{x:0,y:0}}}),W={namespaced:!0,state:{products:[]},actions:{getProducts:function(t){var a="".concat("https://vue-course-api.hexschool.io","/api/").concat("ho73","/products");t.commit("LOADING",!0,{root:!0}),o.a.get(a).then(function(a){t.commit("LOADING",!1,{root:!0}),t.commit("PRODUCTS",a.data.products),console.log("取得商品列表",a)})},removeCartItem:function(t,a){var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("ho73","/cart/").concat(a.id);o.a.delete(e).then(function(a){t.dispatch("getCart")})}},mutations:{PRODUCTS:function(t,a){t.products=a}},getters:{products:function(t){return t.products}}},R=(e("ac6a"),{strict:!0,state:{messages:[]},actions:{updateMessage:function(t,a){var e=a.message,n=a.status,s=Math.floor(new Date/1e3);console.log("更新訊息",{message:e,status:n,timestamp:s}),t.commit("PUSH_MESSAGE",{message:e,status:n,timestamp:s}),t.dispatch("removeMessageWithTiming",s)},removeMessage:function(t){t.commit("REMOVE_MESSAGE")},removeMessageWithTiming:function(t,a){setTimeout(function(){t.state.messages.forEach(function(e,n){e.timestamp===a&&t.commit("REMOVE_MESSAGE",n)})},5e3)}},mutations:{PUSH_MESSAGE:function(t,a){t.messages.push(a)},REMOVE_MESSAGE:function(t,a){t.messages.splice(a,1)}},getters:{messages:function(t){return t.messages}}});n["a"].use(s["a"]);var U=new s["a"].Store({strict:!0,state:{isLoading:!1,categories:[],cart:{},cartNum:0},actions:{updateLoading:function(t,a){t.commit("LOADING",a)},getCart:function(t){var a="".concat("https://vue-course-api.hexschool.io","/api/").concat("ho73","/cart");o.a.get(a).then(function(a){t.commit("CART",a.data.data)})},removeCartItem:function(t,a){var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("ho73","/cart/").concat(a.id);t.commit("LOADING",!0),o.a.delete(e).then(function(e){t.dispatch("getCart");var n=e.data.message+":"+a.product.title;t.dispatch("updateMessage",{message:n,status:"info"}),t.commit("LOADING",!1)})},addtoCart:function(t,a){var e=a.item,n=a.qty,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("ho73","/cart"),r={product_id:e.id,qty:n};t.commit("LOADING",!0),o.a.post(s,{data:r}).then(function(a){t.dispatch("getCart");var n=e.title+a.data.message;t.dispatch("updateMessage",{message:n,status:"info"}),t.commit("LOADING",!1)})}},mutations:{LOADING:function(t,a){t.isLoading=a},CART:function(t,a){t.cart=a,t.cartNum=a.carts.length}},getters:{isLoading:function(t){return t.isLoading},cart:function(t){return t.cart},cartNum:function(t){return t.cartNum}},modules:{productsModules:W,alertModules:R}});n["a"].prototype.$bus=new n["a"];e("a481"),e("c5f6");var B=function(t){var a=Number(t);return"$  ".concat(a.toFixed(0).replace(/./g,function(t,a,e){var n=a&&"."!==t&&(e.length-a)%3===0?", ".concat(t).replace(/\s/g,""):t;return n}))},J=function(t){var a=new Date(1e3*t),e="",n=a.getFullYear(),s=a.getMonth()+1,r=a.getDate();return e=n+"/"+s+"/"+r,e};n["a"].config.productionTip=!1,n["a"].use(s["a"]),n["a"].use(i.a,o.a),o.a.defaults.withCredentials=!0,n["a"].use(d["b"],{events:"input|blur"},{locale:"zh_TW"}),d["a"].localize("zh_TW",f.a),n["a"].component("Loading",l.a),n["a"].filter("currency",B),n["a"].filter("date",J),new n["a"]({router:H,store:U,render:function(t){return t(C)}}).$mount("#app"),H.beforeEach(function(t,a,e){if(console.log(t,a,e),t.meta.requiresAuth){var n="".concat("https://vue-course-api.hexschool.io","/api/user/check");o.a.post(n).then(function(t){t.data.success?e():e({path:"/login"})})}else e()})},"5c0b":function(t,a,e){"use strict";var n=e("5e27"),s=e.n(n);s.a},"5e27":function(t,a,e){},"82d5":function(t,a,e){"use strict";var n=e("3c9b"),s=e.n(n);s.a},9825:function(t,a,e){t.exports=e.p+"img/Ho73-logo.a6058768.png"},a61c:function(t,a,e){t.exports=e.p+"img/Ho73-pureLogo.03eb457c.png"},a7c7:function(t,a,e){},d178:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary",attrs:{id:"ho73-navbar"}},[e("div",{staticClass:"container"},[t._m(0),t._m(1),e("a",{staticClass:"client-navbar-mobil-btn d-lg-none",class:{open:t.openNav},attrs:{href:"#"},on:{click:function(a){t.openNav=!t.openNav}}},[e("span"),e("span"),e("span")]),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavDropdown"}},[e("ul",{staticClass:"navbar-nav mr-auto"},[e("li",{staticClass:"nav-item",class:{active:"shop"==t.link},on:{click:function(a){a.preventDefault(),t.link="shop"}}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/shop"}},[t._v("\n              義賣商品\n            ")])],1),e("li",{staticClass:"nav-item",class:{active:"aboutUs"==t.link},on:{click:function(a){a.preventDefault(),t.link="aboutUs"}}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/home#aboutUs"}},[t._v("\n              關於本站\n            ")])],1)]),e("form",{staticClass:"form-inline",attrs:{id:"navbar-right"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/admin/products",id:"ho73-nav-btn"}},[e("button",{staticClass:"btn btn-primary mr-1",attrs:{type:"button"}},[e("i",{staticClass:"fas fa-user-alt fa-2x"})])]),e("div",{staticClass:"dropdown",attrs:{id:"dropdown"}},[e("button",{staticClass:"btn btn-primary",attrs:{id:"btn-cart",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e("i",{staticClass:"fas fa-shopping-cart fa-2x text-white",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"badge badge-pill badge-danger"},[t._v(t._s(t.cartNum))])]),e("div",{directives:[{name:"show",rawName:"v-show",value:0==!t.cartNum,expression:"!cartNum == 0"}],staticClass:"dropdown-menu dropdown-menu-left dropdown-menu-lg-right p-3",staticStyle:{"min-width":"500px",overflow:"scroll",height:"400px"},attrs:{"aria-labelledby":"CartDropdown","data-offset":"400"}},[e("div",{staticClass:"px-4 py-3"},[e("h6",[t._v("已選擇商品")]),e("table",{staticClass:"table"},[e("tbody",t._l(t.cart.carts,function(a){return e("tr",{key:a.id},[e("td",{staticClass:"align-middle"},[e("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.removeCartItem(a)}}},[e("i",{staticClass:"fas fa-trash fa-lg"})])]),e("td",{staticClass:"align-middle"},[t._v(t._s(a.product.title))]),e("td",{staticClass:"align-middle",attrs:{width:"70"}},[t._v(t._s(a.qty)+t._s(a.product.unit))]),a.product.price?e("td",{staticClass:"align-middle text-right",attrs:{width:"80"}},[t._v(t._s(t._f("currency")(a.qty*a.product.price)))]):e("td",{staticClass:"align-middle text-right",attrs:{width:"80"}},[t._v(t._s(t._f("currency")(a.qty*a.product.origin_price)))])])}),0)]),e("router-link",{attrs:{to:"/customer_order"}},[e("button",{staticClass:"btn btn-warning btn-block"},[e("i",{staticClass:"fas fa-shopping-bag"},[t._v(" 結帳去")])])])],1)])])],1)])])]),e("div",{staticClass:"menu-lightbox",class:{open:t.openNav}},[e("div",{staticClass:"menu-lightbox-container"},[e("div",{staticClass:"item",on:{click:function(a){t.openNav=!t.openNav}}},[e("router-link",{attrs:{to:"/"}},[t._v("首頁")])],1),e("div",{staticClass:"item",on:{click:function(a){t.openNav=!t.openNav}}},[e("router-link",{attrs:{to:"/shop"}},[t._v("義賣商品")])],1),e("div",{staticClass:"item",on:{click:function(a){t.openNav=!t.openNav}}},[e("router-link",{attrs:{to:"/home#aboutUs"}},[t._v("關於本站")])],1),e("div",{},[t._v("1")])])])])},s=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[n("img",{attrs:{src:e("9825"),height:"40",alt:""}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler d-none",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],r=e("cebc"),o=(e("07c4"),e("2f62")),c={name:"Navbar",data:function(){return{link:"",openNav:!1}},methods:Object(r["a"])({logout:function(){var t="".concat("https://vue-course-api.hexschool.io","/logout"),a=this;this.$http.post(t).then(function(t){t.data.success&&a.$router.push("/login")})},removeCartItem:function(t){this.$store.dispatch("removeCartItem",t)}},Object(o["b"])(["getCart"])),computed:Object(r["a"])({},Object(o["c"])(["cart","cartNum"])),created:function(){this.getCart()}},i=c,u=e("2877"),l=Object(u["a"])(i,n,s,!1,null,null,null);a["a"]=l.exports},f0a0:function(t,a,e){"use strict";var n=e("3d4d"),s=e.n(n);s.a}});
//# sourceMappingURL=app.536fb376.js.map