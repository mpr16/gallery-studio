(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d215d02"],{c098:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Contacto"},[s("br"),s("br"),s("h1",[t._v("Contacto")]),s("br"),s("div",[s("b-form-input",{attrs:{placeholder:"Enter your name"},model:{value:t.text1,callback:function(e){t.text1=e},expression:"text1"}}),s("br"),s("b-form-input",{attrs:{placeholder:"Enter your email"},model:{value:t.text2,callback:function(e){t.text2=e},expression:"text2"}})],1),s("br"),s("div",[s("b-form-textarea",{attrs:{id:"textarea-state",state:t.text.length>=50,placeholder:"Enter at least 50 characters",rows:"3"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),s("br")],1),s("div",[s("b-form-checkbox",{attrs:{id:"checkbox-1",name:"checkbox-1",value:"accepted","unchecked-value":"not_accepted"},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[t._v(" I accept the terms and use ")]),s("div",[t._v("State: "),s("strong",[t._v(t._s(t.status))])]),s("br"),s("br")],1),s("div",[s("b-alert",{attrs:{show:"",variant:"success",dismissible:""},model:{value:t.showDismissibleAlert,callback:function(e){t.showDismissibleAlert=e},expression:"showDismissibleAlert"}},[t._v(" Vuestro mensaje ha sido enviado! ")]),s("b-button",{staticClass:"m-1",attrs:{variant:"dark"},on:{click:function(e){t.showDismissibleAlert=!0}}},[t._v(" Enviar ")])],1)])},n=[],i={data:function(){return{text1:"",text2:"",text:"",status:"not_accepted",showDismissibleAlert:!1}},methods:{countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs}}},o=i,c=s("2877"),r=Object(c["a"])(o,a,n,!1,null,null,null);e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d215d02.04d7d52c.js.map