webpackJsonp([9],{"7iZ4":function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=e("JD8u"),r={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"login_wraper"},[e("el-card",{staticClass:"log_card"},[e("div",{staticClass:"login_title"},[e("i",[a._v("logon")])]),a._v(" "),e("div",[e("el-form",{staticClass:"el-froms",attrs:{"label-position":"left","label-width":"60px"}},[e("el-form-item",{attrs:{label:"头像"}},[e("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://upload-z1.qiniup.com",data:a.obj,"on-success":a.handleAvatarSuccess}},[a.userdata.avatar?e("img",{staticClass:"avatar",attrs:{src:a.userdata.avatar}}):e("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a._v(" "),e("el-form-item",{attrs:{label:"用户名"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.userdata.username,expression:"userdata.username"}],staticClass:"myinput",attrs:{type:"text",placeholder:"username..."},domProps:{value:a.userdata.username},on:{input:function(t){t.target.composing||a.$set(a.userdata,"username",t.target.value)}}})]),a._v(" "),e("el-form-item",{attrs:{label:"密码"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.userdata.password,expression:"userdata.password"}],staticClass:"myinput",attrs:{type:"password",placeholder:"password..."},domProps:{value:a.userdata.password},on:{input:function(t){t.target.composing||a.$set(a.userdata,"password",t.target.value)}}})]),a._v(" "),e("el-form-item",[e("el-button",{staticClass:"btns",on:{click:a.handlesingup}},[a._v("\n                        注册\n                    ")])],1)],1)],1)])],1)},staticRenderFns:[]};var n=function(a){e("Jxu9")},i=e("C7Lr")(s.a,r,!1,n,"data-v-a3bf24d0",null);t.default=i.exports},JD8u:function(a,t,e){"use strict";(function(a){var s=e("aozt"),r=e.n(s),n=e("VG3+"),i=e.n(n);t.a={name:"singup",data:function(){return{obj:{token:""},userdata:{username:"",password:"",avatar:"",creatime:""}}},methods:{getToken:function(){var a=this;r.a.get("http://upload.yaojunrong.com/getToken").then(function(t){a.obj.token=t.data.data})},handleAvatarSuccess:function(a){this.userdata.avatar=a.url},handlesingup:function(){var a=this;if(this.userdata.username)if(this.userdata.password.length<4)this.$message.info("密码长度不够啊");else{var t=+new Date;this.userdata.creatime=i.a.changedata(t),this.$axios.post("/user/add",this.userdata).then(function(t){200===t.code?(a.$message.success({message:t.msg}),a.$router.push("/index/login")):a.$message.error(t.msg)})}else this.$message.error("用户名不阔以为空！")}},created:function(){this.getToken()}},window.onresize=function(){document.body.clientWidth<580?(a(".login_wraper").css({width:"80%"}),a(".myinput").css({width:"180px"}),a(".btns").css({width:"190px"})):(a(".login_wraper").css({width:"500px"}),a(".myinput").css({width:"280px"}),a(".btns").css({width:"290px"}))}}).call(t,e("w67j"))},Jxu9:function(a,t){}});
//# sourceMappingURL=9.c4199bc8811b4af35f1b.js.map