webpackJsonp([19],{"4DmS":function(t,a,e){var s=e("FaaY");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("033075c0",s,!0)},"5jRo":function(t,a,e){"use strict";e.d(a,"a",function(){return s});var s={data:function(){return{pageSizeArray:[5,10,15,20],pageNo:1,pageSize:5,pageTotal:null,total:null}},mounted:function(){this.getTask()},watch:{pageSize:function(t,a){return this.pageTotal>t?(this.getTask(),!1):!(this.pageTotal<a)&&void this.getTask()}},methods:{handleSizeChange:function(t){this.pageSize=t},handleCurrentChange:function(t){this.pageNo=t,this.getTask()},getTask:function(){var t=this;this.$ajax.post(this.apiUrl,this.params).then(function(a){var e=a.data;if("200"===e.code){t.pageTotal=e.data.total||e.totalCount||e.data.totalCount;var s=e.data.data||e.data.datas||e.data.userAccountDOList||e.data.buyers||e.data||e.data.chargeApplys;t.setList(s)}else t.$message.error(e.message)}).catch(function(a){t.$message.error("网络错误，刷新下试试")})},isNull:function(t){return t||"暂无数据"}}}},BO1k:function(t,a,e){t.exports={default:e("fxRn"),__esModule:!0}},DtQc:function(t,a,e){"use strict";function s(t){e("4DmS")}Object.defineProperty(a,"__esModule",{value:!0});var n=e("b2Ub"),i=e("PB4U"),o=e("VU/8"),r=s,l=o(n.a,i.a,!1,r,"data-v-3ab73314",null);a.default=l.exports},FaaY:function(t,a,e){a=t.exports=e("FZ+f")(!0),a.push([t.i,".taskDetail[data-v-3ab73314]{font-size:14px;min-width:1000px;padding-left:20px;padding-right:20px;margin-bottom:20px}.taskDetail .red[data-v-3ab73314]{color:#ff2933}.taskDetail .blue[data-v-3ab73314]{color:#1c95ff;cursor:pointer}.taskDetail .link[data-v-3ab73314]{max-width:700px;display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;vertical-align:middle}.taskDetail .gray[data-v-3ab73314]{color:#666}.taskDetail .nav[data-v-3ab73314]{background:#fff;padding:12px 16px;padding-right:16px;margin-bottom:24px;border-radius:4px}.taskDetail .top[data-v-3ab73314]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.taskDetail .top .top-left[data-v-3ab73314]{background:#fff;border-radius:4px;-webkit-box-flex:1;-ms-flex:1;flex:1;max-width:900px;-webkit-box-shadow:0 0 15px rgba(0,0,0,.07);box-shadow:0 0 15px rgba(0,0,0,.07)}.taskDetail .top .top-left .title[data-v-3ab73314]{height:40px;line-height:40px;padding-left:28px;color:#fff;font-size:14px;background:#ff8a22}.taskDetail .top .top-left .top-left-cont[data-v-3ab73314]{padding:0 28px}.taskDetail .top .top-left .top-left-cont h3[data-v-3ab73314]{font-size:14px;color:#9b9b9b;line-height:38px}.taskDetail .top .top-left .top-left-cont .detail[data-v-3ab73314]{padding:20px 0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.taskDetail .top .top-left .top-left-cont .detail li[data-v-3ab73314]{-webkit-box-flex:1;-ms-flex:1;flex:1;padding-left:40px;border-left:1px solid #d8d8d8;font-size:14px;color:#3c3c3c;line-height:38px}.taskDetail .top .top-left .top-left-cont .detail li[data-v-3ab73314]:first-child{border:none}.taskDetail .top .top-right[data-v-3ab73314]{border-radius:4px;min-width:300px;background:#fff;-webkit-box-shadow:0 0 15px rgba(0,0,0,.07);box-shadow:0 0 15px rgba(0,0,0,.07);margin-left:20px;padding:38px 65px;color:#444}.taskDetail .top .top-right h2[data-v-3ab73314]{font-size:20px;line-height:20px;margin-bottom:20px}.taskDetail .top .top-right p[data-v-3ab73314]{font-size:12px;line-height:20px}.taskDetail .cont[data-v-3ab73314]{padding:20px;margin-top:20px;background:#fff;border-radius:4px;font-size:14px;color:#444}.taskDetail .cont .step h2[data-v-3ab73314]{font-size:16px;color:#444;line-height:1;margin-bottom:24px;margin-top:40px}.taskDetail .cont .step img[data-v-3ab73314]{width:60px;height:60px;margin-top:20px}.taskDetail .cont .step .step1[data-v-3ab73314]{display:-webkit-box;display:-ms-flexbox;display:flex}.taskDetail .cont .step .step1>div[data-v-3ab73314]{margin-left:40px}.taskDetail .cont .step .step1>div span[data-v-3ab73314]{display:inline-block;width:220px}.taskDetail .cont .step .step1>div p[data-v-3ab73314]{line-height:30px}.taskDetail .cont .step .step2[data-v-3ab73314]{display:-webkit-box;display:-ms-flexbox;display:flex}.taskDetail .cont .step .step2 li[data-v-3ab73314]{margin-right:120px}.taskDetail .cont .step .step2 h3[data-v-3ab73314]{line-height:1;margin-bottom:20px}.taskDetail .cont .step .step2 p[data-v-3ab73314]{font-size:14px;line-height:30px}.taskDetail .cont .step .step2 span[data-v-3ab73314]{display:inline-block;width:100px}.taskDetail .cont .step .step4 table[data-v-3ab73314]{width:100%;text-align:center;margin-bottom:40px}.taskDetail .cont .step .step4 table tr[data-v-3ab73314]{height:150px;font-size:14px;color:#444}.taskDetail .cont .step .step4 table tr[data-v-3ab73314]:first-child{height:40px}.taskDetail .cont .step .step4 table tr th[data-v-3ab73314]{border:1px solid #dedede;background:#fafafa;vertical-align:middle;min-width:100px}.taskDetail .cont .step .step4 table tr td[data-v-3ab73314]{border:1px solid #dedede;vertical-align:middle}.taskDetail .cont .step .step4 table tr td>div[data-v-3ab73314]{width:250px;margin:0 auto}.taskDetail .cont .step .step4 table tr td p[data-v-3ab73314]{line-height:30px;text-align:left}","",{version:3,sources:["D:/vue-seller-two/src/components/header/taskDetail.vue"],names:[],mappings:"AACA,6BACE,eAAgB,AAChB,iBAAkB,AAClB,kBAAmB,AACnB,mBAAoB,AACpB,kBAAoB,CACrB,AACD,kCACE,aAAe,CAChB,AACD,mCACE,cAAe,AACf,cAAgB,CACjB,AACD,mCACE,gBAAiB,AACjB,qBAAsB,AACtB,gBAAiB,AACjB,uBAAwB,AACxB,mBAAoB,AACpB,qBAAuB,CACxB,AACD,mCACE,UAAY,CACb,AACD,kCACE,gBAAiB,AACjB,kBAAmB,AACnB,mBAAoB,AACpB,mBAAoB,AACpB,iBAAmB,CACpB,AACD,kCACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,uBAAwB,AACpB,oBAAqB,AACjB,0BAA4B,CACrC,AACD,4CACE,gBAAiB,AACjB,kBAAmB,AACnB,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,gBAAiB,AACjB,4CAA8C,AACtC,mCAAsC,CAC/C,AACD,mDACE,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,WAAY,AACZ,eAAgB,AAChB,kBAAoB,CACrB,AACD,2DACE,cAAgB,CACjB,AACD,8DACE,eAAgB,AAChB,cAAe,AACf,gBAAkB,CACnB,AACD,mEACE,eAAgB,AAChB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,uBAAwB,AACpB,oBAAqB,AACjB,0BAA4B,CACrC,AACD,sEACE,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,kBAAmB,AACnB,8BAA+B,AAC/B,eAAgB,AAChB,cAAe,AACf,gBAAkB,CACnB,AACD,kFACE,WAAa,CACd,AACD,6CACE,kBAAmB,AACnB,gBAAiB,AACjB,gBAAiB,AACjB,4CAA8C,AACtC,oCAAsC,AAC9C,iBAAkB,AAClB,kBAAmB,AACnB,UAAY,CACb,AACD,gDACE,eAAgB,AAChB,iBAAkB,AAClB,kBAAoB,CACrB,AACD,+CACE,eAAgB,AAChB,gBAAkB,CACnB,AACD,mCACE,aAAc,AACd,gBAAiB,AACjB,gBAAiB,AACjB,kBAAmB,AACnB,eAAgB,AAChB,UAAY,CACb,AACD,4CACE,eAAgB,AAChB,WAAY,AACZ,cAAe,AACf,mBAAoB,AACpB,eAAiB,CAClB,AACD,6CACE,WAAY,AACZ,YAAa,AACb,eAAiB,CAClB,AACD,gDACE,oBAAqB,AACrB,oBAAqB,AACrB,YAAc,CACf,AACD,oDACE,gBAAkB,CACnB,AACD,yDACE,qBAAsB,AACtB,WAAa,CACd,AACD,sDACE,gBAAkB,CACnB,AACD,gDACE,oBAAqB,AACrB,oBAAqB,AACrB,YAAc,CACf,AACD,mDACE,kBAAoB,CACrB,AACD,mDACE,cAAe,AACf,kBAAoB,CACrB,AACD,kDACE,eAAgB,AAChB,gBAAkB,CACnB,AACD,qDACE,qBAAsB,AACtB,WAAa,CACd,AACD,sDACE,WAAY,AACZ,kBAAmB,AACnB,kBAAoB,CACrB,AACD,yDACE,aAAc,AACd,eAAgB,AAChB,UAAY,CACb,AACD,qEACE,WAAa,CACd,AACD,4DACE,yBAA0B,AAC1B,mBAAoB,AACpB,sBAAuB,AACvB,eAAiB,CAClB,AACD,4DACE,yBAA0B,AAC1B,qBAAuB,CACxB,AACD,gEACE,YAAa,AACb,aAAe,CAChB,AACD,8DACE,iBAAkB,AAClB,eAAiB,CAClB",file:"taskDetail.vue",sourcesContent:["\n.taskDetail[data-v-3ab73314] {\n  font-size: 14px;\n  min-width: 1000px;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-bottom: 20px;\n}\n.taskDetail .red[data-v-3ab73314] {\n  color: #ff2933;\n}\n.taskDetail .blue[data-v-3ab73314] {\n  color: #1c95ff;\n  cursor: pointer;\n}\n.taskDetail .link[data-v-3ab73314] {\n  max-width: 700px;\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  vertical-align: middle;\n}\n.taskDetail .gray[data-v-3ab73314] {\n  color: #666;\n}\n.taskDetail .nav[data-v-3ab73314] {\n  background: #fff;\n  padding: 12px 16px;\n  padding-right: 16px;\n  margin-bottom: 24px;\n  border-radius: 4px;\n}\n.taskDetail .top[data-v-3ab73314] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n.taskDetail .top .top-left[data-v-3ab73314] {\n  background: #fff;\n  border-radius: 4px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  max-width: 900px;\n  -webkit-box-shadow: 0 0 15px rgba(0,0,0,0.07);\n          box-shadow: 0 0 15px rgba(0,0,0,0.07);\n}\n.taskDetail .top .top-left .title[data-v-3ab73314] {\n  height: 40px;\n  line-height: 40px;\n  padding-left: 28px;\n  color: #fff;\n  font-size: 14px;\n  background: #ff8a22;\n}\n.taskDetail .top .top-left .top-left-cont[data-v-3ab73314] {\n  padding: 0 28px;\n}\n.taskDetail .top .top-left .top-left-cont h3[data-v-3ab73314] {\n  font-size: 14px;\n  color: #9b9b9b;\n  line-height: 38px;\n}\n.taskDetail .top .top-left .top-left-cont .detail[data-v-3ab73314] {\n  padding: 20px 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n.taskDetail .top .top-left .top-left-cont .detail li[data-v-3ab73314] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  padding-left: 40px;\n  border-left: 1px solid #d8d8d8;\n  font-size: 14px;\n  color: #3c3c3c;\n  line-height: 38px;\n}\n.taskDetail .top .top-left .top-left-cont .detail li[data-v-3ab73314]:first-child {\n  border: none;\n}\n.taskDetail .top .top-right[data-v-3ab73314] {\n  border-radius: 4px;\n  min-width: 300px;\n  background: #fff;\n  -webkit-box-shadow: 0 0 15px rgba(0,0,0,0.07);\n          box-shadow: 0 0 15px rgba(0,0,0,0.07);\n  margin-left: 20px;\n  padding: 38px 65px;\n  color: #444;\n}\n.taskDetail .top .top-right h2[data-v-3ab73314] {\n  font-size: 20px;\n  line-height: 20px;\n  margin-bottom: 20px;\n}\n.taskDetail .top .top-right p[data-v-3ab73314] {\n  font-size: 12px;\n  line-height: 20px;\n}\n.taskDetail .cont[data-v-3ab73314] {\n  padding: 20px;\n  margin-top: 20px;\n  background: #fff;\n  border-radius: 4px;\n  font-size: 14px;\n  color: #444;\n}\n.taskDetail .cont .step h2[data-v-3ab73314] {\n  font-size: 16px;\n  color: #444;\n  line-height: 1;\n  margin-bottom: 24px;\n  margin-top: 40px;\n}\n.taskDetail .cont .step img[data-v-3ab73314] {\n  width: 60px;\n  height: 60px;\n  margin-top: 20px;\n}\n.taskDetail .cont .step .step1[data-v-3ab73314] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.taskDetail .cont .step .step1 >div[data-v-3ab73314] {\n  margin-left: 40px;\n}\n.taskDetail .cont .step .step1 >div span[data-v-3ab73314] {\n  display: inline-block;\n  width: 220px;\n}\n.taskDetail .cont .step .step1 >div p[data-v-3ab73314] {\n  line-height: 30px;\n}\n.taskDetail .cont .step .step2[data-v-3ab73314] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.taskDetail .cont .step .step2 li[data-v-3ab73314] {\n  margin-right: 120px;\n}\n.taskDetail .cont .step .step2 h3[data-v-3ab73314] {\n  line-height: 1;\n  margin-bottom: 20px;\n}\n.taskDetail .cont .step .step2 p[data-v-3ab73314] {\n  font-size: 14px;\n  line-height: 30px;\n}\n.taskDetail .cont .step .step2 span[data-v-3ab73314] {\n  display: inline-block;\n  width: 100px;\n}\n.taskDetail .cont .step .step4 table[data-v-3ab73314] {\n  width: 100%;\n  text-align: center;\n  margin-bottom: 40px;\n}\n.taskDetail .cont .step .step4 table tr[data-v-3ab73314] {\n  height: 150px;\n  font-size: 14px;\n  color: #444;\n}\n.taskDetail .cont .step .step4 table tr[data-v-3ab73314]:first-child {\n  height: 40px;\n}\n.taskDetail .cont .step .step4 table tr th[data-v-3ab73314] {\n  border: 1px solid #dedede;\n  background: #fafafa;\n  vertical-align: middle;\n  min-width: 100px;\n}\n.taskDetail .cont .step .step4 table tr td[data-v-3ab73314] {\n  border: 1px solid #dedede;\n  vertical-align: middle;\n}\n.taskDetail .cont .step .step4 table tr td >div[data-v-3ab73314] {\n  width: 250px;\n  margin: 0 auto;\n}\n.taskDetail .cont .step .step4 table tr td p[data-v-3ab73314] {\n  line-height: 30px;\n  text-align: left;\n}"],sourceRoot:""}])},PB4U:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"taskDetail"},[e("div",{staticClass:"nav"},[e("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[e("el-breadcrumb-item",{attrs:{to:{name:"overView"}}},[t._v("首页")]),t._v(" "),e("el-breadcrumb-item",{attrs:{to:{name:"task"}}},[t._v("任务管理")]),t._v(" "),e("el-breadcrumb-item",[t._v("垫付任务详情")])],1)],1),t._v(" "),e("div",{staticClass:"top"},[e("div",{staticClass:"top-left"},[e("div",{staticClass:"title"},[e("span",[t._v(t._s(0==t.taskInfoObj.shopType?"京东":1==t.taskInfoObj.shopType?"淘宝":"天猫")+" | "+t._s(t.taskInfoObj.shopName)+" | "+t._s(t.taskInfoObj.taskTypeDetail))])]),t._v(" "),e("div",{staticClass:"top-left-cont"},[e("h3",[t._v("任务编号："+t._s(t.taskInfoObj.sellerTaskId))]),t._v(" "),e("ul",{staticClass:"detail"},[e("li",[e("p",[t._v("付款价格：\n              "),e("span",{staticClass:"red"},[t._v(t._s(t.taskInfoObj.payment))])]),t._v(" "),e("p",[t._v("任务数量：\n              "),e("span",{staticClass:"red"},[t._v(t._s(t.taskInfoObj.throwNum))])])]),t._v(" "),e("li",[e("p",[t._v("待确认好评：\n              "),e("span",{staticClass:"red"},[t._v(t._s(t.taskInfoObj.toConfirmOrderNum))])]),t._v(" "),e("p",[t._v("待确认评价截图：\n              "),e("span",{staticClass:"red"},[t._v(t._s(t.taskInfoObj.toConfirmFavorNum))])])]),t._v(" "),e("li",[e("p",[t._v("已完成订单：\n              "),e("span",{staticClass:"red"},[t._v(t._s(t.taskInfoObj.confirmedFavorNum))])])])])])]),t._v(" "),1==t.taskInfoObj.status||2==t.taskInfoObj.status?e("div",{staticClass:"top-right"},[e("h2",[t._v("任务已选取店铺及任务类型")]),t._v(" "),e("p",[t._v("任务已选取店铺及任务类型"),e("br"),t._v(" 您需完善商品信息设置：\n        "),e("span",{staticClass:"blue",on:{click:function(a){t.toDo("finsh")}}},[t._v("去完善")])])]):t._e(),t._v(" "),3==t.taskInfoObj.status?e("div",{staticClass:"top-right"},[e("h2",[t._v("任务信息已设置,待支付订单")]),t._v(" "),e("p",[t._v("任务信息已设置,待支付订单"),e("br"),t._v(" 您需支付该任务：\n        "),e("span",{staticClass:"blue",on:{click:function(a){t.toDo("pay")}}},[t._v("去支付")])])]):t._e(),t._v(" "),4==t.taskInfoObj.status?e("div",{staticClass:"top-right"},[e("h2",[t._v("任务已提交，等待客服审核")]),t._v(" "),e("p",[t._v("您的任务已提交，客服审核通过之后即可上线"),e("br"),t._v(" "),e("span",{staticClass:"red"},[t._v("16:00")]),t._v("点之前提交的任务当日审核上线；"),e("br"),t._v(" "),e("span",{staticClass:"red"},[t._v("16:00")]),t._v("点之后提交的任务次日\n        "),e("span",{staticClass:"red"},[t._v("6:00")]),t._v("统一上线"),e("br"),t._v(" 审核之前您还可以：\n        "),e("span",{staticClass:"blue",on:{click:function(a){t.toDo("cancel")}}},[t._v("撤销任务")])])]):t._e(),t._v(" "),5==t.taskInfoObj.status?e("div",{staticClass:"top-right"},[e("h2",[t._v("任务已通过")]),t._v(" "),e("p",[t._v("任务已通过"),e("br"),t._v(" 您还可以：\n        "),e("span",{staticClass:"blue",on:{click:function(a){t.toDo("cancel")}}},[t._v("撤销任务")])])]):t._e(),t._v(" "),6==t.taskInfoObj.status?e("div",{staticClass:"top-right"},[e("h2",[t._v("任务未通过审核")]),t._v(" "),e("p",[t._v("任务未通过审核"),e("br"),t._v(" 您可以：\n        "),e("span",{staticClass:"blue",on:{click:function(a){t.toDo("return")}}},[t._v("去修改")]),e("br"),t._v(" "),e("span",{staticClass:"blue",on:{click:function(a){t.toDo("cancel")}}},[t._v("撤销任务")])])]):t._e(),t._v(" "),7==t.taskInfoObj.status?e("div",{staticClass:"top-right"},[e("h2",[t._v("任务已被撤销")]),t._v(" "),e("p",[t._v("任务已被撤销"),e("br"),t._v(" 您可以：\n        "),e("span",{staticClass:"blue",on:{click:function(a){t.toDo("new")}}},[t._v("去发布新任务")])])]):t._e(),t._v(" "),8==t.taskInfoObj.status?e("div",{staticClass:"top-right"},[e("h2",[t._v("任务进行中")]),t._v(" "),e("p",[t._v("任务进行中"),e("br"),t._v(" 您还可以：\n        "),e("span",{staticClass:"blue",on:{click:function(a){t.toDo("cancel")}}},[t._v("撤销任务")])])]):t._e(),t._v(" "),9==t.taskInfoObj.status?e("div",{staticClass:"top-right"},[e("h2",[t._v("任务已被终止")]),t._v(" "),e("p",[t._v("任务已被终止"),e("br"),t._v(" 您可以：\n        "),e("span",{staticClass:"blue",on:{click:function(a){t.toDo("new")}}},[t._v("去发布新任务")])])]):t._e(),t._v(" "),20==t.taskInfoObj.status?e("div",{staticClass:"top-right"},[e("h2",[t._v("任务已完成")]),t._v(" "),e("p",[t._v("任务已完成"),e("br"),t._v(" 您可以：\n        "),e("span",{staticClass:"blue",on:{click:function(a){t.toDo("new")}}},[t._v("去发布新任务")])])]):t._e(),t._v(" "),21==t.taskInfoObj.status?e("div",{staticClass:"top-right"},[e("h2",[t._v("任务已结束")]),t._v(" "),e("p",[t._v("任务已结束"),e("br"),t._v(" 您可以：\n        "),e("span",{staticClass:"blue",on:{click:function(a){t.toDo("new")}}},[t._v("去发布新任务")])])]):t._e()]),t._v(" "),e("div",{staticClass:"cont"},[e("div",{staticClass:"step"},[e("h2",[t._v("1.商品信息")]),t._v(" "),e("div",{staticClass:"step1"},[e("img",{attrs:{src:t.goodsInfoObj.productPicUrl,alt:"商品展示图"}}),t._v(" "),e("div",[e("p",[e("span",[t._v("商品名称："+t._s(t.goodsInfoObj.productName))]),t._v("\n            所在分类："+t._s(t.goodsInfoObj.productClassFirstDetail)+"\n          ")]),t._v(" "),e("p",[t._v("商品链接：\n            "),e("a",{staticClass:"blue link",attrs:{target:"_blank",href:t.goodsInfoObj.productUrl}},[t._v(t._s(t.goodsInfoObj.productUrl))])]),t._v(" "),e("p",[e("span",[t._v("试客件数 / 人："+t._s(t.goodsInfoObj.numPerOrder)+"件")]),t._v("\n            商品单价："+t._s(t.goodsInfoObj.productShowPrice)+"元（\n            "),0==t.goodsInfoObj.isPostFree?e("i",[t._v("不")]):t._e(),t._v("包邮）\n          ")]),t._v(" "),e("p",[t._v("小计："+t._s(t.goodsInfoObj.productShowPrice*t.goodsInfoObj.numPerOrder)+"元")])])])]),t._v(" "),e("div",{staticClass:"step"},[e("h2",[t._v("2.如何找到商品")]),t._v(" "),e("ul",{staticClass:"step2"},t._l(t.searchListArr,function(a,s){return e("li",{key:s},[e("h3",[t._v("搜索关键词"+t._s(s+1)+"："+t._s(a.keyword))]),t._v(" "),e("p",[e("span",{staticClass:"gray"},[t._v("排序方式：")]),t._v("\n            "+t._s(0==a.sortClass?"综合排序":"其他")+"\n          ")]),t._v(" "),e("p",[e("span",{staticClass:"gray"},[t._v("价格区间：")]),t._v("\n            "+t._s(a.priceLow)+"-"+t._s(a.priceHigh)+"元\n          ")]),t._v(" "),e("p",[e("span",{staticClass:"gray"},[t._v("品牌：")]),t._v("\n            "+t._s(a.brand)+"\n          ")]),t._v(" "),e("p",[e("span",{staticClass:"gray"},[t._v("发货地：")]),t._v("\n            "+t._s(a.postLocation)+"\n          ")]),t._v(" "),e("p",[e("span",{staticClass:"gray"},[t._v("评价数（约）：")]),t._v("\n            "+t._s(a.favorNum)+"\n          ")]),t._v(" "),e("p",[e("span",{staticClass:"gray"},[t._v("预计翻页数：")]),t._v("\n            "+t._s(a.pageNum)+"\n          ")])])}))]),t._v(" "),e("div",{staticClass:"step"},[e("h2",[t._v("3.任务分数发放计划")]),t._v(" "),e("div",{ref:"charts",staticClass:"planList charts",style:{width:"100%",height:"500px"}},[e("div",{ref:"myChart",attrs:{id:"myChart"}})])]),t._v(" "),e("div",{staticClass:"step"},[e("h2",[t._v("4.费用合计")]),t._v(" "),e("div",{staticClass:"step4"},[e("table",{staticClass:"table"},[t._m(0),t._v(" "),e("tr",[t._m(1),t._v(" "),e("td",[e("div",[e("p",[t._v("商品: "+t._s(t.totalPriceObj.productUnitPrice)+"元*"+t._s(t.totalPriceObj.numPerOrder)+"件 / 单*"+t._s(t.totalPriceObj.totalNum)+"单")]),t._v(" "),e("p",[t._v("运费备用金: "+t._s(t.totalPriceObj.postPrice)+"元 / 单*"+t._s(t.totalPriceObj.totalNum)+"单")])])]),t._v(" "),e("td",[e("span",[t._v(t._s(t.benjin)+"元")])]),t._v(" "),e("td",{attrs:{rowspan:"2"}},[e("span",{staticClass:"red"},[t._v(t._s(t.totalPriceObj.totalPrice))]),t._v("元\n            ")])]),t._v(" "),e("tr",[t._m(2),t._v(" "),e("td",[e("div",[e("p",[t._v("图文好评: "+t._s(t.totalPriceObj.graphicFavorPrice)+"元 / 单*"+t._s(t.totalPriceObj.graphicFavorNum)+"单")]),t._v(" "),e("p",[t._v("纯文字好评: "+t._s(t.totalPriceObj.wordFavorPrice)+"元 / 单*"+t._s(t.totalPriceObj.wordFavorNum)+"单")]),t._v(" "),e("p",[t._v("默认五星好评: "+t._s(t.totalPriceObj.defaultFavorPrice)+"元 / 单*"+t._s(t.totalPriceObj.defaultFavorNum)+"单")]),t._v(" "),e("p",[t._v("plus会员: "+t._s(t.totalPriceObj.plusPrice)+"元 / 单*"+t._s(t.totalPriceObj.plusNum)+"单")])])]),t._v(" "),e("td",[e("span",[t._v(t._s(t.yongjin)+"元")])])])])])]),t._v(" "),e("div",{staticClass:"step"},[e("h2",[t._v("5.申请任务进展")]),t._v(" "),e("div",{staticClass:"step5"},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.buyerListArr}},[e("el-table-column",{attrs:{prop:"telephone",align:"center",label:"手机号"}}),t._v(" "),e("el-table-column",{attrs:{prop:"buyerName",align:"center",label:"买号"}}),t._v(" "),e("el-table-column",{attrs:{prop:"orderId",align:"center",label:"订单编号"}}),t._v(" "),e("el-table-column",{attrs:{prop:"taskDayId",align:"center",label:"试用编号"}}),t._v(" "),e("el-table-column",{attrs:{align:"center",label:"任务状态"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(1==a.row.status?"待下单":2==a.row.status?"待修改":3==a.row.status?"待审核":4==a.row.status?"审核通过":10==a.row.status?"待评价":11==a.row.status?"待审核评价":12==a.row.status?"评价被驳回":13==a.row.status?"评价通过待返佣":19==a.row.status?"已取消":20==a.row.status?"已完成":"其他状态"))])]}}])})],1)],1),t._v(" "),e("div",{staticClass:"pager"},[e("el-pagination",{attrs:{"current-page":t.pageNo,"page-sizes":t.pageSizeArray,"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.pageTotal},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])])])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",[e("th",[t._v("分类")]),t._v(" "),e("th",[t._v("费用明细")]),t._v(" "),e("th",[t._v("小计")]),t._v(" "),e("th",[t._v("合计")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("td",[e("span",[t._v("本金冻结")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("td",[e("span",[t._v("佣金冻结")])])}],i={render:s,staticRenderFns:n};a.a=i},b2Ub:function(t,a,e){"use strict";var s=e("BO1k"),n=e.n(s),i=e("Pg0u"),o=e.n(i),r=e("5jRo");a.a={name:"taskDetail",mixins:[r.a],data:function(){return{taskInfoObj:{},goodsInfoObj:{},totalPriceObj:{},buyerListArr:[],tableData:[{phone:"18666554455",buyerName:"次u三分",orderNum:"156415fasf4as5d45sa5fas",tryNum:"54s5dsa5d4sa4f4545a4",status:"待审核"}],option:{tooltip:{trigger:"axis"},legend:{data:["计划下单数","实际下单数"]},toolbox:{show:!1,feature:{dataZoom:{yAxisIndex:"none"},dataView:{readOnly:!1},magicType:{type:["line","bar"]},restore:{},saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:["0","9-8","9-9","9-10","9-11","9-12","9-13"]},yAxis:{type:"value",axisLabel:{formatter:"{value}"}},series:[{name:"计划下单数",type:"line",itemStyle:{normal:{color:"#029E4A"}},data:[11,11,15,13,12,13,10]},{name:"实际下单数",type:"line",itemStyle:{normal:{color:"#40B6FF"}},data:[1,4,2,5,3,2,9]}]},apiUrl:"/api/seller/order/getBuyerListBy"}},computed:{searchListArr:function(){var t=[];return this.goodsInfoObj.searchWordList&&(t=JSON.parse(this.goodsInfoObj.searchWordList)),t},benjin:function(){var t=0;return t=this.totalPriceObj.productUnitPrice*this.totalPriceObj.numPerOrder*this.totalPriceObj.totalNum+this.totalPriceObj.postPrice*this.totalPriceObj.totalNum,t},yongjin:function(){var t=0;return t=this.totalPriceObj.graphicFavorPrice*this.totalPriceObj.graphicFavorNum+this.totalPriceObj.wordFavorPrice*this.totalPriceObj.wordFavorNum+this.totalPriceObj.defaultFavorPrice*this.totalPriceObj.defaultFavorNum+this.totalPriceObj.plusPrice*this.totalPriceObj.plusNum,t},params:function(){return{sellerTaskId:this.$route.query.sellerTaskId,pageNo:this.pageNo,pageSize:this.pageSize}}},methods:{resizeCharts:function(){this.$refs.myChart.style.height=this.$refs.charts.style.height,this.$refs.myChart.style.width=this.$refs.charts.style.width},timeFilter:function(t){return t=t.toString(),t.substr(4,2)+"-"+t.substr(6,2)},setCharts:function(){this.resizeCharts(),o.a.init(this.$refs.myChart).setOption(this.option)},toDo:function(t,a){switch(t){case"finsh":this.$router.push({name:"sendTaskTwo",query:{sellerTaskId:this.taskInfoObj.sellerTaskId}});break;case"pay":this.$router.push({name:"sendTaskThree",query:{sellerTaskId:this.taskInfoObj.sellerTaskId}});break;case"cancel":this.getCancel();break;case"return":this.$router.push({name:"sendTaskTwo",query:{rbSellerTaskId:this.taskInfoObj.sellerTaskId}});break;case"new":this.$router.push({name:"sendTaskOne"})}},getTaskInfo:function(){var t=this;this.$ajax.post("/api/seller/task/getTaskDetail",{sellerTaskId:this.$route.query.sellerTaskId}).then(function(a){"200"===a.data.code?t.taskInfoObj=a.data.data:t.$message({type:"warning",message:a.data.message})}).catch(function(t){})},getGoodsInfo:function(){var t=this;this.$ajax.post("/api/seller/task/getTaskProductInfo",{sellerTaskId:this.$route.query.sellerTaskId}).then(function(a){"200"===a.data.code?t.goodsInfoObj=a.data.data:t.$message({type:"warning",message:a.data.message})}).catch(function(t){})},getTaskNum:function(){var t=this;this.$ajax.post("/api/seller/task/getTrailList",{sellerTaskId:this.$route.query.sellerTaskId}).then(function(a){if("200"===a.data.code){var e=a.data.data,s=[],i=[],o=[],r=!0,l=!1,p=void 0;try{for(var A,d=n()(e);!(r=(A=d.next()).done);r=!0){var c=A.value,v=c.time,b=v.substr(4,2)+"-"+v.substr(6);s.push(b),i.push(c.actualNum),o.push(c.throwTime)}}catch(t){l=!0,p=t}finally{try{!r&&d.return&&d.return()}finally{if(l)throw p}}t.option.xAxis.data=s,t.option.series[0].data=o,t.option.series[1].data=i,t.setCharts()}else t.$message({type:"warning",message:a.data.message})}).catch(function(t){})},getTotalPrice:function(){var t=this;this.$ajax.post("/api/seller/task/getTaskCost",{sellerTaskId:this.$route.query.sellerTaskId}).then(function(a){"200"===a.data.code?t.totalPriceObj=a.data.data:t.$message({type:"warning",message:a.data.message})}).catch(function(t){})},setList:function(t){this.buyerListArr=t},getCancel:function(){var t=this;this.$confirm("确定要撤销该任务?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$ajax.post("/api/platform/task/cancelTask",{sellerTaskId:t.taskInfoObj.sellerTaskId}).then(function(a){"200"===a.data.code?(t.$message({type:"success",message:"撤销成功!"}),t.getTask()):t.$message({type:"warning",message:a.data.message})}).catch(function(t){})}).catch(function(){t.$message({type:"info",message:"已取消"})})}},mounted:function(){this.getTaskInfo(),this.getGoodsInfo(),this.getTaskNum(),this.getTotalPrice()}}},fxRn:function(t,a,e){e("+tPU"),e("zQR9"),t.exports=e("g8Ux")},g8Ux:function(t,a,e){var s=e("77Pl"),n=e("3fs2");t.exports=e("FeBl").getIterator=function(t){var a=n(t);if("function"!=typeof a)throw TypeError(t+" is not iterable!");return s(a.call(t))}}});
//# sourceMappingURL=19.4e656de474d40e37a0af.js.map