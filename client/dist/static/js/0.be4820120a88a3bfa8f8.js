webpackJsonp([0,6],{95:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(4),i=r(n),o=a(6),s=a(15),l=a(194),c=r(l);t.default={props:{data:{type:Array,required:!0},rowKey:String,showPagination:{type:Boolean,default:!0}},data:function(){return{avaliableHeight:0,pending:!1,page:{current:1,limit:0,total:0}}},computed:(0,i.default)({},(0,o.mapGetters)(["globalConfig"])),watch:{"globalConfig.pageLimit":function(e){this.page.current=1,this.page.limit=e,this.$emit("page-change",1)}},components:{Pagination:c.default},methods:{calcTableAvaliableHeight:function(){var e=this;this.$nextTick(function(){e.avaliableHeight=e.$refs.wrapper.clientHeight})},query:function(e,t){var a=this;t=t||this.page.current,this.pending=!0;for(var r=arguments.length,n=Array(r>2?r-2:0),i=2;i<r;i++)n[i-2]=arguments[i];var o=s.merge.apply(void 0,[{page:{current:t,limit:this.globalConfig.pageLimit}}].concat(n));return e.query(o).then(function(e){return e.json()}).then(function(e){return a.pending=!1,a.page.current=t||a.page.current,a.page.total=e.page?e.page.total:e.results.length,e.results})},onPageChange:function(e){this.$emit("page-change",e)}},created:function(){this.page.limit=this.globalConfig.pageLimit},mounted:function(){this.calcTableAvaliableHeight(),window.addEventListener("resize",this.calcTableAvaliableHeight)},beforeDestroy:function(){window.removeEventListener("resize",this.calcTableAvaliableHeight)}}},99:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(4),i=r(n),o=a(6);t.default={props:{current:{type:Number,default:1},total:{type:Number,default:1,required:!0}},computed:(0,i.default)({},(0,o.mapGetters)(["globalConfig"]),{pages:function(){return Math.round(this.total/this.globalConfig.pageLimit+.5)}}),methods:{change:function(e,t){t||this.$emit("page-change",e)},reset:function(){this.$emit("page-change",1)}}}},102:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(190),i=r(n),o=a(25);t.default={data:function(){return{search:{},form:{username:"",password:""},rules:{username:[{required:!0,message:this.$t("users.rules.username"),trigger:"blur"}],password:[{required:!0,message:this.$t("users.rules.password"),trigger:"blur"}]},formVisible:!1,users:[]}},components:{DataTable:i.default},methods:{fetch:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$refs.users.query(o.user,t,{search:this.search}).then(function(t){e.users=t}).catch(function(e){console.error(e)})},createUser:function(){this.formVisible=!0},cancelForm:function(){this.form.username="",this.form.password="",this.formVisible=!1},saveForm:function(){var e=this;this.$refs.form.validate(function(t){t&&o.user.save(null,e.form).then(function(){e.cancelForm(),e.$message({type:"success",message:e.$t("message.created")}),e.fetch()}).catch(function(t){e.$message({type:"error",message:422===t.status?e.$t("users.action.userExisted"):e.$t("message.createFailed")})})})},deleteUser:function(e){var t=this;this.$confirm("This action will remove the selected user: "+e.username+" forever, still going on?",this.$t("message.confirm.title"),{type:"warning"}).then(function(){e.delete({_id:e._id}).then(function(){t.$message({type:"success",message:t.$t("message.removed")}),t.fetch()})}).catch(function(){})}},mounted:function(){var e=this;this.$nextTick(function(){e.fetch()})}}},143:function(e,t,a){t=e.exports=a(14)(),t.push([e.id,".ui-data-table .toolbar{margin-bottom:.5rem}.ui-data-table .toolbar .el-form-item{margin-bottom:0}.ui-data-table .data-table{position:relative;margin:0 -1rem;font-size:.75rem;border-left:none;border-right:none}.ui-data-table .data-table .el-table:before{background:none}.ui-data-table .data-table>.data-loading{position:absolute;left:0;right:0;top:0;bottom:0;background-color:hsla(0,0%,100%,.9);z-index:10}.ui-data-table .data-table>.data-loading .loader-inner{position:relative}.ui-data-table .data-table>.data-loading .loader-inner>div{position:absolute;left:0;top:0;width:35px;height:35px;border:2px solid #20a0ff;border-bottom-color:transparent;border-top-color:transparent;border-radius:100%;animation:rotate 1s 0s ease-in-out infinite;animation-fill-mode:both}.ui-data-table .data-table>.data-loading .loader-inner>div:last-child{display:inline-block;left:10px;top:10px;width:15px;height:15px;animation-duration:.5s;border-color:#20a0ff transparent;animation-direction:reverse}.ui-data-table .data-table .actions{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.ui-data-table .data-table .actions .el-tooltip{margin-left:1rem}.ui-data-table .data-table .actions .el-tooltip:first-child{margin-left:0}.ui-data-table .data-table .actions .el-tooltip .el-tooltip__rel{display:inline-block;line-height:1rem}.ui-data-table .data-table .actions .icon{margin-left:.5rem;line-height:1rem;font-size:1rem;color:#20a0ff;cursor:pointer}.ui-data-table .data-table .actions .icon:first-child{margin-left:0}.ui-data-table .data-table .actions .icon:hover{color:#58b7ff}.ui-data-table .data-table .fade-enter-active,.ui-data-table .data-table .fade-leave-active{transition:opacity .5s}.ui-data-table .data-table .fade-enter,.ui-data-table .data-table .fade-leave-active{opacity:0}@media (max-width:64rem){.ui-data-table .data-table .actions .el-tooltip{margin-left:.5rem}}",""])},144:function(e,t,a){t=e.exports=a(14)(),t.push([e.id,".ui-pagination{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;margin:0 -1rem -1rem;padding:.75rem 1rem;border-top:1px solid #d3dce6;background-color:#fff}.ui-pagination .navs>a{float:left;width:2rem;height:1.75rem;line-height:1.75rem;text-align:center;border-right:1px solid #d3dce6;background-color:#fff;color:#475669;border:1px solid #d3dce6;border-right:none;cursor:pointer}.ui-pagination .navs>a:last-child{border-right:1px solid #d3dce6}.ui-pagination .navs>a[disabled]{color:#c0ccda;cursor:not-allowed;background-color:#eff2f7}.ui-pagination .navs>a:hover{background-color:#20a0ff;color:#fff;border-color:#20a0ff}",""])},161:function(e,t,a){var r=a(143);"string"==typeof r&&(r=[[e.id,r,""]]);a(16)(r,{});r.locals&&(e.exports=r.locals)},162:function(e,t,a){var r=a(144);"string"==typeof r&&(r=[[e.id,r,""]]);a(16)(r,{});r.locals&&(e.exports=r.locals)},190:function(e,t,a){var r,n;a(161),r=a(95);var i=a(200);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(n=r=r.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,e.exports=r},194:function(e,t,a){var r,n;a(162),r=a(99);var i=a(201);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(n=r=r.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,e.exports=r},198:function(e,t,a){var r,n;r=a(102);var i=a(209);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(n=r=r.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,e.exports=r},200:function(e,t){e.exports={render:function(){var e=this;e.$createElement;return e._c("div",{staticClass:"ui-data-table flex flex-1 flex-column"},[e.$slots.toolbar?e._c("div",{staticClass:"toolbar"},[e._t("toolbar")],!0):e._e(),e._v(" "),e._c("div",{ref:"wrapper",staticClass:"data-table flex flex-1"},[e._c("el-table",{attrs:{data:e.data,border:"",height:e.avaliableHeight,"row-key":function(t){return t[e.rowKey]}}},[e._t("default")],!0),e._v(" "),e._t("table"),e._v(" "),e._c("transition",{attrs:{name:"fade"}},[e._c("div",{directives:[{name:"show",rawName:"v-show",value:e.pending,expression:"pending"}],staticClass:"data-loading flex flex-main-center flex-cross-center"},[e._c("div",{staticClass:"loader-inner"},[e._c("div"),e._v(" "),e._c("div")])])])],!0),e._v(" "),e.showPagination?e._c("pagination",{attrs:{current:e.page.current,total:e.page.total||0},on:{"page-change":e.onPageChange}}):e._e()])},staticRenderFns:[]}},201:function(e,t){e.exports={render:function(){var e=this;e.$createElement;return e._c("div",{staticClass:"ui-pagination"},[e._c("span",{staticClass:"current"},[e._v(e._s(e.$t("pagination.current"))+" "+e._s(e.current)+" "+e._s(e.$t("pagination.currentAppend"))+"  "+e._s(e.$t("pagination.pages"))+" "+e._s(e.pages)+" "+e._s(e.$t("pagination.pagesAppend")))]),e._v(" "),e._c("div",{staticClass:"navs"},[e._c("a",{attrs:{disabled:e.current<=1},on:{click:function(t){e.change(1,e.current<=1)}}},[e._c("span",{staticClass:"iconfont icon-home-page"})]),e._v(" "),e._c("a",{attrs:{disabled:e.current<=1},on:{click:function(t){e.change(e.current-1,e.current<=1)}}},[e._c("el-icon",{attrs:{name:"arrow-left"}})]),e._v(" "),e._c("a",{attrs:{disabled:e.current>=e.pages},on:{click:function(t){e.change(e.current+1,e.current>=e.pages)}}},[e._c("el-icon",{attrs:{name:"arrow-right"}})]),e._v(" "),e._c("a",{attrs:{disabled:e.current>=e.pages},on:{click:function(t){e.change(e.pages,e.current>=e.pages)}}},[e._c("span",{staticClass:"iconfont icon-last-page"})]),e._v(" "),e._c("a",{on:{click:function(t){e.$emit("page-change",e.current)}}},[e._c("span",{staticClass:"iconfont icon-refresh"})])])])},staticRenderFns:[]}},209:function(e,t){e.exports={render:function(){var e=this;e.$createElement;return e._c("content-module",{attrs:{name:"users"}},[e._c("el-breadcrumb",{staticStyle:{"margin-bottom":".5rem"},attrs:{separator:"/"}},[e._c("el-breadcrumb-item",{attrs:{to:"/dashboard"}},[e._v(e._s(e.$t("users.breadcrumb.home")))]),e._v(" "),e._c("el-breadcrumb-item",[e._v(e._s(e.$t("users.breadcrumb.current")))])]),e._v(" "),e._c("data-table",{ref:"users",attrs:{data:e.users,"row-key":"_id"},on:{"page-change":e.fetch}},[e._c("div",{slot:"toolbar"},[e._c("el-button",{attrs:{type:"primary",icon:"plus"},nativeOn:{click:function(t){e.createUser(t)}}},[e._v(e._s(e.$t("toolbar.create")))])]),e._v(" "),e._c("el-table-column",{attrs:{property:"_id",label:"ID",sortable:"","min-width":"120"}}),e._v(" "),e._c("el-table-column",{attrs:{property:"username",label:e.$t("users.model.username"),sortable:"","min-width":"120"}}),e._v(" "),e._c("el-table-column",{attrs:{property:"role",label:e.$t("users.model.role"),"min-width":"90"}}),e._v(" "),e._c("el-table-column",{attrs:{label:e.$t("datatable.operate"),align:"center",width:"100"},inlineTemplate:{render:function(){var e=this;e.$createElement;return e._c("el-button",{attrs:{type:"text"},nativeOn:{click:function(t){e.deleteUser(e.row)}}},[e._v(e._s(e.$t("toolbar.remove")))])},staticRenderFns:[]}})]),e._v(" "),e._c("el-dialog",{directives:[{name:"model",rawName:"v-model",value:e.formVisible,expression:"formVisible"}],attrs:{title:e.$t("users.create.title")},domProps:{value:e.formVisible},on:{close:e.cancelForm,input:function(t){e.formVisible=t}}},[e._c("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"close-on-click-modal":!1,"close-on-press-escape":!1}},[e._c("el-form-item",{attrs:{label:e.$t("users.model.username"),prop:"username"}},[e._c("el-input",{directives:[{name:"model",rawName:"v-model",value:e.form.username,expression:"form.username"}],domProps:{value:e.form.username},on:{input:function(t){e.form.username=t}}})]),e._v(" "),e._c("el-form-item",{attrs:{label:e.$t("users.model.password"),prop:"password"}},[e._c("el-input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],attrs:{type:"password"},domProps:{value:e.form.password},on:{input:function(t){e.form.password=t}}})])]),e._v(" "),e._c("span",{staticClass:"dialog-footer",slot:"footer"},[e._c("el-button",{nativeOn:{click:function(t){e.formVisible=!1}}},[e._v(e._s(e.$t("message.confirm.cancel")))]),e._v(" "),e._c("el-button",{attrs:{type:"primary"},nativeOn:{click:function(t){e.saveForm(t)}}},[e._v(e._s(e.$t("message.confirm.ok")))])])])])},staticRenderFns:[]}}});
//# sourceMappingURL=0.be4820120a88a3bfa8f8.js.map