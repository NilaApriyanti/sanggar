(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"371c":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-layout",{attrs:{view:"lHh Lpr lFf"}},[e("q-header",{staticClass:"light-blue-7",attrs:{elevated:""}},[e("q-toolbar",[e("q-toolbar-title",{staticClass:"white"},[t._v("\n        Akun Sanggar\n      ")])],1)],1),e("q-page-container",[e("router-view")],1),e("br"),e("q-tabs",{staticClass:"bg-white text-blue-grey-14 fixed-bottom visible mobile-only",attrs:{"active-color":"primary","no-caps":"",shrink:""},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("q-route-tab",{attrs:{to:{name:"menuutama"},dense:"",name:"explore",icon:"home"}}),e("q-route-tab",{attrs:{to:"/carisanggar",dense:"",name:"cari",icon:"fas fa-search"}}),e("q-route-tab",{attrs:{to:"/wardrobesanggar",dense:"",icon:"fas fa-tshirt",label:""}}),e("q-route-tab",{attrs:{to:"/dancers",dense:"",name:"dancer",icon:"fas fa-users"}}),e("q-route-tab",{attrs:{to:"/profil/"+t.id+"/"+t.username,dense:"",name:"profil",icon:"far fa-user"}})],1)],1)},s=[],o=e("b06b"),n={name:"MyLayout",data:function(){return{tab:"explore",id:this.$q.localStorage.getItem("data")._id,username:this.$q.localStorage.getItem("data").username,leftDrawerOpen:this.$q.platform.is.desktop}},methods:{openURL:o["a"]}},i=n,l=e("2877"),c=Object(l["a"])(i,r,s,!1,null,null,null);a["default"]=c.exports}}]);