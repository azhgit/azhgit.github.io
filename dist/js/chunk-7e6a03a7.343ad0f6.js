(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e6a03a7"],{"5e64":function(s,t,e){},a55b:function(s,t,e){"use strict";e.r(t);var a=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",[e("Navbar"),e("form",{staticClass:"form-signin",on:{submit:function(t){return t.preventDefault(),s.signin(t)},keyup:function(t){return!t.type.indexOf("key")&&s._k(t.keyCode,"enter",13,t.key,"Enter")?null:s.signin(t)}}},[e("h1",{staticClass:"h3 mb-3 font-weight-normal"},[s._v("歡迎登入")]),e("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[s._v("Email address")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"Email address",required:"",autofocus:""},domProps:{value:s.user.username},on:{input:function(t){t.target.composing||s.$set(s.user,"username",t.target.value)}}}),e("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[s._v("Password")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Password",required:""},domProps:{value:s.user.password},on:{input:function(t){t.target.composing||s.$set(s.user,"password",t.target.value)}}}),e("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"}},[s._v("登入")]),e("p",{staticClass:"mt-5 mb-3 text-muted"},[s._v("© 2019-2020")])])],1)},n=[],r=e("d178"),o={name:"Login",components:{Navbar:r["a"]},data:function(){return{user:{username:"",password:""}}},methods:{signin:function(){var s="".concat("https://vue-course-api.hexschool.io","/admin/signin"),t=this;this.$http.post(s,t.user).then(function(s){console.log(s.data),s.data.success&&t.$router.push("/admin/products")})}}},i=o,u=(e("c266"),e("2877")),l=Object(u["a"])(i,a,n,!1,null,"23c13322",null);t["default"]=l.exports},c266:function(s,t,e){"use strict";var a=e("5e64"),n=e.n(a);n.a}}]);
//# sourceMappingURL=chunk-7e6a03a7.343ad0f6.js.map