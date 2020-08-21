(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-33d9"],{C9MU:function(n,t,o){var e=o("RMZv");"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);(0,o("SZ7m").default)("1f0469a6",e,!0,{})},RMZv:function(n,t,o){(n.exports=o("I1BE")(!1)).push([n.i,".running-container {\n  height: 100%;\n  padding: 24px 0;\n}\n.running-container .job-list > li {\n    width: 336px;\n    height: 240px;\n    margin: 12px;\n    background: #fff;\n    border-radius: 4px;\n}\n.running-container .job-list > li .top {\n      padding: 12px;\n      padding-bottom: 0;\n}\n.running-container .job-list > li .top .job-id {\n        color: #7f7d8e;\n        font-weight: bold;\n        color: #3E4052;\n}\n.running-container .job-list > li .top .enter {\n        text-align: center;\n        height: 22px;\n        line-height: 22px;\n        border-radius: 22px;\n}\n.running-container .job-list > li .top .enter:hover {\n          text-decoration: underline;\n}\n.running-container .job-list > li .role {\n      margin: 0px 12px;\n      color: #bbbbc8;\n      padding-bottom: 6px;\n      border-bottom: 1px solid #EBEDF0;\n}\n.running-container .job-list > li .status {\n      height: 188.16px;\n}\n.running-container .job-list > li .status .text {\n        left: 50%;\n        top: 50%;\n        width: 100px;\n        height: 100px;\n        margin-left: -50px;\n        margin-top: -50px;\n        text-align: center;\n        line-height: 100px;\n}\n.running-container .job-list > li .status .mask {\n        z-index: 999;\n        display: none;\n        background: rgba(255, 255, 255, 0.5);\n}\n.running-container .job-list > li .status .el-button {\n        display: none;\n}\n.running-container .job-list > li .status:hover .mask {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n}\n.running-container .job-list > li .status:hover .text {\n        display: none;\n}\n.running-container .job-list > li .status:hover .el-button {\n        display: block;\n}\n.running-container .ie-ul {\n    width: 100%;\n}\n.running-container .ie-pos {\n    top: 0;\n    left: 0;\n}\n.running-container .dialog-main-content {\n    font-family: 'Lato';\n    font-size: 18px;\n    color: #534c77;\n    text-align: center;\n    font-weight: bold;\n    margin-bottom: 25px;\n}\n.running-container .dialog-sub-content {\n    font-family: 'Lato';\n    font-size: 12px;\n    color: #bbbbc8;\n    text-align: center;\n}\n.running-container .dialog-button {\n    width: 135px;\n    height: 32px;\n    border-radius: 2px;\n    border: 0px;\n    font-family: 'Lato';\n    font-weight: bold;\n    font-size: 12px;\n    text-align: center;\n    cursor: pointer;\n    outline: none;\n}\n.running-container .dialog-check-button {\n    color: #ffffff;\n    background-color: #494ece;\n}\n.running-container .dialog-click-button {\n    color: #ffffff;\n    background-color: #3135a6;\n}\n.running-container .dialog-uncheck-button {\n    color: #7f7d8e;\n    background-color: #e8e8ef;\n}\n",""])},VfG1:function(n,t,o){"use strict";var e=o("r9s+");o.n(e).a},"b/+g":function(n,t,o){"use strict";o.r(t);var e=o("dv4G"),i={name:"JobRunning",props:{jobId:{type:String,default:""},role:{type:String,default:"guest"},status:{type:String,default:"waiting"}},data:function(){return{mouseoverd:!1,progressNum:0}},watch:{status:{handler:function(){this.getProgress()}}},beforeMount:function(){this.getProgress()},methods:{enter:function(){this.$emit("enter")},getProgress:function(){"waiting"!==this.status?this.progressNum=parseFloat(this.status):this.progressNum=0},mouseoverHandler:function(){this.mouseoverd=!0},killOperation:function(){this.$emit("kill")}}},r=(o("VfG1"),o("KHd+")),a=Object(r.a)(i,function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("section",{staticClass:"flex flex-col running-container"},[o("div",{staticClass:"flex flex-row space-between job-info"},[o("span",{staticClass:"job-id"},[n._v(n._s(n.jobId))]),n._v(" "),o("span",{staticClass:"kill-btn",on:{click:n.killOperation}},[n._v(n._s("waiting"===n.status?"cancel":"kill"))])]),n._v(" "),o("span",{staticClass:"role-info"},[n._v("Role: "+n._s(n.role))]),n._v(" "),o("div",{staticClass:"flex flex-center justify-center progress-info",on:{mouseover:n.mouseoverHandler,mouseout:function(t){n.mouseoverd=!1}}},[o("el-progress",{attrs:{percentage:n.progressNum,"show-text":!1,width:120,color:"#494ece",type:"circle"}}),n._v(" "),o("div",{staticClass:"operation-btn"},[o("p",{directives:[{name:"show",rawName:"v-show",value:!n.mouseoverd,expression:"!mouseoverd"}],staticClass:"flex flex-row flex-bottom",class:{"wait-status":"waiting"===n.status,"running-status":"waiting"!==n.status}},[o("span",[n._v(n._s("waiting"===n.status?"waiting...":n.progressNum))]),n._v(" "),"waiting"!==n.status?o("span",{staticClass:"precentage-text"},[n._v("%")]):n._e()]),n._v(" "),o("span",{directives:[{name:"show",rawName:"v-show",value:n.mouseoverd,expression:"mouseoverd"}],staticClass:"enter-btn",on:{click:n.enter}},[n._v("enter")])])],1)])},[],!1,null,"38eb5c8d",null);a.options.__file="JobRunning.vue";var s={components:{jobRunning:a.exports},directives:{},data:function(){return{loading:!0,jobList:[],timer:null,showDialog:!1,mainContent:"",subContent:"",checkSure:null,checkclick:null,willKill:""}},mounted:function(){this.getJobList(),this.timer=setInterval(this.getJobList,5e3)},beforeDestroy:function(){clearInterval(this.timer)},methods:{getJobList:function(){var n=this,t=[];Object(e.b)().then(function(o){o.data.forEach(function(n){var o=n.fJobId,e=n.fStatus,i=n.fRole,r=n.fPartyId,a=n.fProgress||0,s="running"===e?a+"%":e;t.push({jobId:o,fStatus:e,status:s,statusProgress:"running"===e?a:0,role:i,partyId:r})}),n.jobList=t}).then(function(t){n.loading=!1})},enter:function(n,t,o){window.open(this.$router.resolve({path:"/dashboard",query:{job_id:n,role:t,party_id:o}}).href,"_blank")},handleKillJob:function(n,t,o,i,r){var a=this,s={job_id:n,role:t,party_id:o};Object(e.e)(s).then(function(n){var t=n.data.job.fStatus;"waiting"===t?("kill"===i&&(a.jobList[r].status=t,a.jobList.splice()),i="cancel"):"cancel"===i&&(i="kill",a.jobList[r].status=t,a.jobList.splice()),a.checkSure=!0,a.confirmKill(s,i)})},confirmKill:function(n,t){this.mainContent="Are you sure you want to "+t+" this job?",this.subContent="You can't undo this action",this.showDialog=!0,this.willKill=n},sureKillJob:function(){this.submitKillJob(this.willKill)},closeDialog:function(){this.showDialog=!1,this.willKill=""},submitKillJob:function(n){var t=this,o=this;Object(e.f)(n).then(function(n){t.getJobList(),o.closeDialog()},function(n){throw o.closeDialog(),n}).catch(function(n){throw o.closeDialog(),n})}}},l=(o("jfYB"),Object(r.a)(s,function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticClass:"running-container flex flex-center flex-col app-container"},[o("ul",{staticClass:"job-list flex flex-center flex-wrap ie-ul"},n._l(n.jobList,function(t,e){return o("li",{key:e,staticClass:"shadow"},[o("job-running",{attrs:{"job-id":t.jobId,role:t.role,status:t.status},on:{enter:function(o){n.enter(t.jobId,t.role,t.partyId)},kill:function(o){n.handleKillJob(t.jobId,t.role,t.partyId,"waiting"===t.status?"cancel":"kill",e)}}})],1)})),n._v(" "),o("el-dialog",{attrs:{visible:n.showDialog,width:"510px"},on:{"update:visible":function(t){n.showDialog=t}}},[o("div",{staticClass:"dialog-main-content"},[n._v(n._s(n.mainContent))]),n._v(" "),o("div",{staticClass:"dialog-sub-content"},[n._v(n._s(n.subContent))]),n._v(" "),o("div",{staticClass:"flex justify-center",staticStyle:{"margin-top":"72px"}},[o("button",{staticClass:"dialog-button",class:[!0===n.checkSure?"dialog-check-button":"dialog-uncheck-button",!0===n.checkclick?"dialog-click-button":""],on:{mouseover:function(t){n.checkSure=!0},mouseout:function(t){n.checkSure=null,n.checkclick=null},mousedown:function(t){n.checkclick=!0},click:n.sureKillJob}},[n._v("Sure")]),n._v(" "),o("button",{staticClass:"dialog-button",class:[!1===n.checkSure?"dialog-check-button":"dialog-uncheck-button",!1===n.checkclick?"dialog-click-button":""],staticStyle:{"margin-left":"23px"},on:{mouseover:function(t){n.checkSure=!1},mouseout:function(t){n.checkSure=null,n.checkclick=null},mousedown:function(t){n.checkclick=!1},click:n.closeDialog}},[n._v("cancel")])])])],1)},[],!1,null,null,null));l.options.__file="index.vue";t.default=l.exports},dv4G:function(n,t,o){"use strict";o.d(t,"h",function(){return i}),o.d(t,"b",function(){return r}),o.d(t,"f",function(){return a}),o.d(t,"j",function(){return s}),o.d(t,"e",function(){return l}),o.d(t,"d",function(){return c}),o.d(t,"i",function(){return u}),o.d(t,"a",function(){return d}),o.d(t,"c",function(){return b}),o.d(t,"g",function(){return f});var e=o("t3Un");function i(n){return Object(e.a)({url:"/job/query/page/new",method:"post",data:n})}function r(n){return Object(e.a)({url:"/job/query/status",method:"get",params:n})}function a(n){return Object(e.a)({url:"/job/v1/pipeline/job/stop",method:"post",data:n})}function s(n){return Object(e.a)({url:"/job/v1/rerun",method:"post",data:n})}function l(n){var t=n.job_id,o=n.role,i=n.party_id;return Object(e.a)({url:"/job/query/"+t+"/"+o+"/"+i,method:"get"})}function c(n){return Object(e.a)({url:"/v1/tracking/component/parameters",method:"post",data:n})}function u(n){var t=n.componentId,o=n.job_id,i=n.role,r=n.party_id,a=n.begin,s=n.end,l=n.type;return Object(e.a)({url:"/queryLogWithSize/"+o+"/"+i+"/"+r+"/"+t+"/"+l+"/"+a+"/"+s,method:"get"})}function d(n){return Object(e.a)({url:"/job/update",method:"put",data:n})}function b(n){return Object(e.a)({url:"/job/componentCommand",method:"post",data:n})}function f(){return Object(e.a)({url:"/job/query/fields",method:"post"})}},jfYB:function(n,t,o){"use strict";var e=o("C9MU");o.n(e).a},oBsw:function(n,t,o){(n.exports=o("I1BE")(!1)).push([n.i,".flex-bottom[data-v-38eb5c8d] {\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline;\n}\n.running-container[data-v-38eb5c8d] {\n  padding: 12px;\n  font-family: 'Arial';\n  font-size: 14px;\n}\n.running-container .job-info[data-v-38eb5c8d] {\n    margin-bottom: 6px;\n}\n.running-container .job-info .job-id[data-v-38eb5c8d] {\n      font-weight: bold;\n      color: #3e4052;\n}\n.running-container .job-info .kill-btn[data-v-38eb5c8d] {\n      color: #4159d1;\n      cursor: pointer;\n}\n.running-container .role-info[data-v-38eb5c8d] {\n    color: #999ba3;\n    font-size: 12px;\n    padding-bottom: 6px;\n    border-bottom: 1px solid #ebedf0;\n}\n.running-container .progress-info[data-v-38eb5c8d] {\n    width: 100%;\n    height: 100%;\n    position: relative;\n}\n.running-container .progress-info .operation-btn[data-v-38eb5c8d] {\n      position: absolute;\n}\n.running-container .progress-info .wait-status[data-v-38eb5c8d] {\n      font-size: 18px;\n      color: #5e7feb;\n      font-weight: bold;\n}\n.running-container .progress-info .running-status[data-v-38eb5c8d] {\n      font-size: 36px;\n      color: #5e7feb;\n}\n.running-container .progress-info .running-status .precentage-text[data-v-38eb5c8d] {\n        font-size: 16px;\n}\n.running-container .progress-info .enter-btn[data-v-38eb5c8d] {\n      font-size: 18px;\n      color: #4159d1;\n      cursor: pointer;\n}\n",""])},"r9s+":function(n,t,o){var e=o("oBsw");"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);(0,o("SZ7m").default)("25b36c80",e,!0,{})}}]);