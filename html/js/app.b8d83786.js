(function(){"use strict";var t={4340:function(t,e,n){var o=n(144),a=n(998),i=n(6232),s=n(5550),r=n(9582),l=n(2118),d=n(9223),c=n(4324),u=n(5808),h=n(4525),f=n(8279),p=n(4611),g=n(3059),m=n(7233),v=n(7953),y=function(){var t=this,e=t._self._c;return e(a.Z,{attrs:{id:"inspire"}},[e(r.Z,[e(m.Z,{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(h.Z,[e(f.km,[e(f.V9,{staticClass:"text-h6"},[t._v(" 标记系统 ")]),e(f.oZ,[t._v(" "+t._s(t.tySysOwner)+" ")])],1)],1),e(d.Z),e(u.Z,{attrs:{dense:"",nav:""}},t._l(t.items,(function(n){return e(h.Z,{key:n.title,attrs:{link:""}},[e(p.Z,[e(c.Z,{attrs:{color:n.color}},[t._v(t._s(n.icon))])],1),e(f.km,[e(f.V9,{on:{click:function(e){return t.jmpPage(n.kk)}}},[t._v(" "+t._s(n.title))])],1)],1)})),1)],1)],1),e(i.Z,{attrs:{app:""}},[e(s.Z,{on:{click:function(e){t.drawer=!t.drawer}}}),e(v.qW,[t._v(t._s(t.tySysOwner))])],1),e(g.Z,[e(l.Z,{attrs:{fluid:""}},[e("router-view")],1)],1)],1)},_=[],k={data:()=>({drawer:null,items:[],tySysOwner:"System admin",logininfo:{}}),created:async function(){let t=this.$route.params.acckey;this.tySysOwner,this.items=[{title:"地址",icon:"mdi-domain",color:"blue darken-2",kk:t}]},methods:{jmpPage:function(t){this.$router.push({name:"vTrans",params:{msg:t}})}}},w=k,Z=n(1001),b=(0,Z.Z)(w,y,_,!1,null,null,null),x=b.exports,T=n(1705);o.ZP.use(T.Z);var I=new T.Z({}),O=n(8345),P=n(6190),E=n(4886),S=n(4127),A=n(266),L=n(8299),j=n(4061),H=n(1713),N=n(3687),R=n(7808),U=function(){var t=this,e=t._self._c;return e(l.Z,[e("h3",{staticStyle:{"padding-bottom":"20px"}},[t._v("管理地址")]),e(H.Z,[e(A.Z,{attrs:{cols:"12"}},[e(r.Z,[e(E.EB,[e(R.Z,{attrs:{"append-icon":"mdi-magnify",label:"查找","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),e(j.Z,{attrs:{"max-width":"600px"},model:{value:t.dialogEditTag,callback:function(e){t.dialogEditTag=e},expression:"dialogEditTag"}},[e(r.Z,[e(E.EB,{staticClass:"text-h5"},[e("div",{staticStyle:{"font-size":"5px"}},[t._v("区块 "+t._s(t.editingHashId))]),e("div",{staticStyle:{"font-size":"5px"}},[t._v("地址 "+t._s(t.editingFromAddr))])]),e(E.h7,{staticStyle:{display:"block"}},[e(N.Z),t._l(t.vnameList,(function(n,o){return e(P.Z,{key:"kkk"+o,attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.saveItem(n)}}},[t._v(t._s(n))])})),e(N.Z)],2),e(E.h7,[e("div",{staticStyle:{"padding-right":"12px","font-size":"12px"}},[t._v("如无合适用户，可以新增")]),e("br"),e(R.Z,{model:{value:t.newAddrItem,callback:function(e){t.newAddrItem=e},expression:"newAddrItem"}}),e(P.Z,{attrs:{color:"yellow darken-1",text:""},on:{click:function(e){return t.saveNew("OK")}}},[t._v("新增")]),e(P.Z,{attrs:{color:"yellow darken-1",text:""},on:{click:function(e){return t.cancelNew("OK")}}},[t._v("取消")])],1)],1)],1),e(L.Z,{attrs:{headers:t.headers,items:t.transList,search:t.search,options:t.options,"server-items-length":t.totalTrans,loading:t.loading,"footer-props":{itemsPerPageOptions:[5,25,50,100],"items-per-page-text":"每页展示"}},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"item.doEdit",fn:function({item:n}){return[e(S.Z,{attrs:{color:"secondary",dark:""},on:{click:function(e){return t.doEdit({item:n})}}},[t._v(" 修改 "+t._s(n.none)+" ")])]}},{key:"item.hashid",fn:function({item:e}){return[t._v(" "+t._s(t.getHashIdAbbr(e.hashid))+" ")]}},{key:"item.uname",fn:function({item:n}){return[t._v(" "+t._s(n.uname)+" "),e(c.Z,{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editTag(n)}}},[t._v(" mdi-pencil ")])]}}],null,!0)})],1)],1)],1)],1)},C=[],$=n(9669),B=n.n($),D={name:"vTyWorkSpace",data:()=>({logininfo:{},search:"",headers:[{text:"Hash",value:"hashid"},{text:"时间",value:"atime"},{text:"转账地址",value:"fromaddr"},{text:"接收地址",value:"toaddr"},{text:"金额",value:"amount"},{text:"所属用户",value:"uname"}],transList:[],totalTrans:0,loading:!0,options:{itemsPerPage:50,page:1},dialogEditTag:!1,vnameList:[],newAddrItem:"",editingHashId:"",editingFromAddr:""}),methods:{cancelNew:function(t){console.log("dummy ",t),this.dialogEditTag=!1},saveNew:function(t){console.log("dummy ",t),this.newAddrItem.length<1?console.log("saveNew =>","内容不合法"):this.updateHashInfo(this.editingHashId,this.newAddrItem)},saveItem:function(t){console.log("uname => ",t),this.newAddrItem=t,this.updateHashInfo(this.editingHashId,this.newAddrItem)},editTag:function(t){console.log("editTag = > ",t),this.editingHashId=t.hashid,this.editingFromAddr=t.fromaddr,this.loadTags(t.fromaddr),this.dialogEditTag=!0},doEdit:function(t){console.log("doEdit",t),this.editDomain(t)},loadData:async function(){this.loading=!0;let t=this.options.page-1,e=this.options.itemsPerPage;B().defaults.baseURL="";let n="/api/list_trans?sx="+this.$route.params.acckey+"&pageid="+t+"&pagenum="+e;await B().get(n).then((t=>{if(console.log("profile ",t),200==t.status&&200==t.data.code){console.log("ok");let e=t.data.res,n=this.formatRes(e);console.log("data for table: ",n),this.transList=n,this.totalTrans=t.data.count,this.loading=!1}})).catch((t=>{console.log(t)}))},getHashIdAbbr:function(t){if(""!=t){let e=t.length;return t.substring(e-8)}return""},formatRes:function(t){let e=[];for(const n of t){let t={};t.hashid=n[0],t.atime=n[4],t.fromaddr=n[3],t.toaddr=n[1],t.amount=n[5],t.uname=n[6],e.push(t)}return e},updateHashInfo:function(t,e){console.log("update set ","hashid "+t+" uname"+e);let n={headers:{"Content-Type":"application/json"}},o={hashid:t,tag_name:e,sx:this.$route.params.acckey},a=JSON.stringify(o);B().defaults.baseURL="",B().post("/api/setTag",a,n).then((n=>{if(console.log("res==>",n),200==n.status&&200==n.data.code){console.log("/setTag with name",e),this.newAddrItem="",this.dialogEditTag=!1;for(const n of this.transList)n.hashid==t&&(n.uname=e)}})).catch((t=>{console.log("err==>",t)}))},loadTags:function(t){this.loading=!0,B().defaults.baseURL="";let e="/api/list_tags?sx="+this.$route.params.acckey+"&addr="+t;B().get(e).then((t=>{if(console.log("loadTags => ",t),200==t.status&&200==t.data.code){console.log("ok");let e=t.data.res;this.vnameList=e}else this.vnameList=[]})).catch((t=>{console.log(t)})),this.loading=!1}},mounted:function(){},async created(){this.loadData()},watch:{options:{handler(){console.log("options",this.options),console.log("Go to page ",this.options.page),console.log("Go to page size ",this.options.itemsPerPage),this.loadData()},deep:!0}}},V=D,z=(0,Z.Z)(V,U,C,!1,null,null,null),F=z.exports;const M=O.Z.prototype.push;O.Z.prototype.push=function(t){return M.call(this,t).catch((t=>t))};var G=new O.Z({mode:"history",routes:[{path:"/dash/:acckey",name:"vTrans",component:F}]});o.ZP.use(O.Z),o.ZP.config.productionTip=!1,console.log("I use VUE_APP_BASEURL sx ",{NODE_ENV:"production",VUE_APP_BASEURL:"",BASE_URL:"/"}),new o.ZP({vuetify:I,router:G,render:t=>t(x)}).$mount("#app")}},e={};function n(o){var a=e[o];if(void 0!==a)return a.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,o,a,i){if(!o){var s=1/0;for(c=0;c<t.length;c++){o=t[c][0],a=t[c][1],i=t[c][2];for(var r=!0,l=0;l<o.length;l++)(!1&i||s>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[l])}))?o.splice(l--,1):(r=!1,i<s&&(s=i));if(r){t.splice(c--,1);var d=a();void 0!==d&&(e=d)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[o,a,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var a,i,s=o[0],r=o[1],l=o[2],d=0;if(s.some((function(e){return 0!==t[e]}))){for(a in r)n.o(r,a)&&(n.m[a]=r[a]);if(l)var c=l(n)}for(e&&e(o);d<s.length;d++)i=s[d],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(c)},o=self["webpackChunkvuetify_app"]=self["webpackChunkvuetify_app"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(4340)}));o=n.O(o)})();
//# sourceMappingURL=app.b8d83786.js.map