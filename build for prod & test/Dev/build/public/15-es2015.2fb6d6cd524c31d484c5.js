(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{ypLv:function(e,i,t){"use strict";t.r(i),t.d(i,"TransactionModule",(function(){return I}));var s=t("mrSG"),r=t("fXoL"),n=t("5+WD"),a=t("lKJ0");let d=(()=>{class e{constructor(e){this.transmissionService=e,this.currentInstanceOf="TransactionService",this.dragdropList=[],this.dragdropListTc=[],this.ElementList=[],this.releasedragdropList=[],this.releaseElementList=[],this.linedragdropList=[],this.lineElementList=[],this.csvHeader=[],this.csvHeaderAll=[],this.csvRow=[],this.csvRowAll=[],this.xmlArray=[],this.loader={i:!1,d:!1},this.errors={csv:[],server:""},this.uploadProgress=0,this.statusRequest={transmission:[],reProcess:!0,xids:[]},this.showStatus=!1,this.statusCount={p:0,e:0,s:0,f:0},this.getViewUrl=(e,i,t)=>{if("P"!==t)return"";let s=!1,r=this.csvHeader.findIndex(e=>e===this.dragdropListTc[this.itemIdIndex].displayText.toUpperCase()),n=this.csvHeader.findIndex(e=>e===this.dragdropListTc[this.itemIdDomain].displayText);if(-1===r){if(r=this.csvHeaderAll[i].findIndex(e=>e===this.dragdropListTc[this.itemIdIndex].path[0]),n=this.csvHeaderAll[i].findIndex(e=>e===this.dragdropListTc[this.itemIdDomain].path[0]),-1===r)return"";s=!0}return e.replace("GTM_OTM_OBJECT","GtmTransaction").replace("GTM_OTM_MANAGER_LAYOUT_GID","GTM_TRANSACTION_VIEW").replace("GTM_OTM_FINDER_SET","BIIB.GTM_MSRR_TRANSACTION").replace("GTM_OTM_OBJECT_GID",this.transmissionService.getViewLink(i,n,r,s?this.csvRowAll:this.csvRow))},this.getInitialState=e=>{e.table&&(this.csvHeader.length=0,this.csvRow.length=0,this.showStatus=!1,this.statusCount={p:0,e:0,s:0,f:0}),this.xmlArray.length=0,this.uploadProgress=0,this.errors.csv.length=0,this.errors.server=""}}linedrop(e){return Object(s.a)(this,void 0,void 0,(function*(){if(this.selfDragDrop(e))return;this.loader.i=!0;const{item1:i,item2:t}=this.swapLine(e);Object(n.d)(this.linedragdropList,e.previousIndex,e.currentIndex),this.dragdropList=[...this.releasedragdropList,...this.linedragdropList],yield this.transmissionService.swapTrxs([i,t]),location.reload(),this.loader.i=!1}))}releasedrop(e){return Object(s.a)(this,void 0,void 0,(function*(){if(this.selfDragDrop(e))return;(this.loader.i=!0)&&location.reload();const{item1:i,item2:t}=this.swap(e);Object(n.d)(this.releasedragdropList,e.previousIndex,e.currentIndex),this.dragdropList=[...this.releasedragdropList,...this.linedragdropList],yield this.transmissionService.swapTrxs([i,t]),this.loader.i=!1}))}selfDragDrop(e){return this.dragdropList[e.currentIndex]._id===this.dragdropList[e.previousIndex]._id}swap(e){return{item1:Object.assign(Object.assign({},this.releasedragdropList[e.previousIndex]),{_id:this.releasedragdropList[e.currentIndex]._id}),item2:Object.assign(Object.assign({},this.releasedragdropList[e.currentIndex]),{_id:this.releasedragdropList[e.previousIndex]._id})}}swapLine(e){return{item1:Object.assign(Object.assign({},this.linedragdropList[e.previousIndex]),{_id:this.linedragdropList[e.currentIndex]._id}),item2:Object.assign(Object.assign({},this.linedragdropList[e.currentIndex]),{_id:this.linedragdropList[e.previousIndex]._id})}}releaseValueChange(e){return Object(s.a)(this,void 0,void 0,(function*(){return this.releasedragdropList=e.required?this.releaseElementList.filter(e=>!0===e.required):this.releasedragdropList.filter(i=>i.name!==e.name),this.dragdropList=[...this.releasedragdropList,...this.linedragdropList],yield this.transmissionService.updateTransaction(e)}))}lineValueChange(e){return Object(s.a)(this,void 0,void 0,(function*(){return this.linedragdropList=e.required?this.lineElementList.filter(e=>!0===e.required):this.linedragdropList.filter(i=>i.name!==e.name),this.dragdropList=[...this.releasedragdropList,...this.linedragdropList],yield this.transmissionService.updateTransaction(e)}))}onUpload(e){return Object(s.a)(this,void 0,void 0,(function*(){this.itemIdIndex=this.dragdropListTc.findIndex(e=>String(e.path[0]).includes("GtmTransactionGid")&&String(e.path[0]).includes("Xid")),this.itemIdDomain=this.dragdropListTc.findIndex(e=>String(e.path[0]).includes("GtmTransactionGid")&&String(e.path[0]).includes("DomainName"));const i={dragdropList:this.dragdropListTc,containLines:!0,parentGidIdentifierPathString:"GtmTransactionGid",lineIdentifierPathString:"GtmTransactionLine"};yield this.transmissionService.onUpload(e,i,this)}))}onRefreshStatus(){return Object(s.a)(this,void 0,void 0,(function*(){yield this.transmissionService.onRefreshStatus(this)}))}sendDataToGtm(){return Object(s.a)(this,void 0,void 0,(function*(){yield this.transmissionService.sendDataToGtm(this,"GtmTransactionGid")}))}}return e.\u0275fac=function(i){return new(i||e)(r.gc(a.a))},e.\u0275prov=r.Sb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var c=t("tyNb"),o=t("ofXK"),l=t("wZkO"),h=t("CW4N"),p=t("bv9b");const m=["fileInput"];function u(e,i){if(1&e&&(r.ac(0),r.cc(1,"h2",8),r.Mc(2),r.bc(),r.Xb(3,"mat-progress-bar",9),r.Zb()),2&e){const e=r.oc(3);r.Jb(2),r.Oc("",e.itemService.uploadProgress," %"),r.Jb(1),r.vc("color",e.transmissionService.getInstanceColor())("bufferValue",e.itemService.uploadProgress+20)("value",e.itemService.uploadProgress)}}function v(e,i){1&e&&(r.cc(0,"div",6),r.cc(1,"div",10),r.Mc(2,"Loading"),r.bc(),r.bc())}function g(e,i){if(1&e&&(r.cc(0,"div"),r.cc(1,"div",6),r.Lc(2,u,4,4,"ng-container",0),r.Lc(3,v,3,0,"div",7),r.bc(),r.bc()),2&e){const e=r.oc(2);r.Jb(2),r.vc("ngIf",e.itemService.loader.d),r.Jb(1),r.vc("ngIf",e.itemService.loader.i)}}function f(e,i){if(1&e&&(r.ac(0),r.cc(1,"mat-tab-group",2),r.cc(2,"mat-tab",3),r.Xb(3,"app-shared-tab",4),r.bc(),r.cc(4,"mat-tab",5),r.Xb(5,"app-shared-tab",4),r.bc(),r.bc(),r.Lc(6,g,4,2,"div",0),r.Zb()),2&e){const e=r.oc();r.Jb(1),r.vc("color",e.transmissionService.getInstanceColor()),r.Jb(2),r.vc("hasChild",!0)("tabTitle","Transaction")("itemService",e.itemService)("isAdminTab",!1),r.Jb(2),r.vc("hasChild",!0)("tabTitle","Transaction")("itemService",e.itemService)("isAdminTab",!0),r.Jb(1),r.vc("ngIf",e.itemService.loader.i||e.itemService.loader.d)}}function b(e,i){if(1&e&&(r.cc(0,"div",11),r.cc(1,"span",12),r.Mc(2,"\xd7"),r.bc(),r.cc(3,"div",13),r.Mc(4),r.bc(),r.bc()),2&e){const e=r.oc();r.Jb(4),r.Oc(" ",e.error," ")}}let L=(()=>{class e{constructor(e,i,t){this.itemService=e,this.transmissionService=i,this.activatedRoute=t,this.isAdminTab=!1}ngOnInit(){return Object(s.a)(this,void 0,void 0,(function*(){const{data:e,error:i}=this.activatedRoute.snapshot.data.data;if(i)return this.error=i;this.itemService.ElementList=e.filter(e=>this.getElement(e)),this.transmissionService.displayTransaction=e,this.itemService.dragdropList=this.itemService.ElementList.filter(e=>e.required),this.itemService.dragdropListTc=e.filter(e=>e.required),this.itemService.releaseElementList=e.filter(e=>this.getReleaseElement(e)),this.itemService.lineElementList=e.filter(e=>this.getLineElement(e)),this.itemService.releasedragdropList=this.itemService.releaseElementList.filter(e=>e.display&&e.required),this.itemService.linedragdropList=this.itemService.lineElementList.filter(e=>e.display&&e.required)}))}getElement(e){return this.transmissionService.getElement(e)}getReleaseElement(e){return(e.path.length>1||!(!e.display||!this.transmissionService.getElement(e)))&&!e.type.includes("Transaction Line")&&e.display}getLineElement(e){return(e.path.length>1||!(!e.display||!this.transmissionService.getElement(e)))&&e.display&&e.type.includes("Transaction Line")}}return e.\u0275fac=function(i){return new(i||e)(r.Wb(d),r.Wb(a.a),r.Wb(c.a))},e.\u0275cmp=r.Qb({type:e,selectors:[["app-transaction"]],viewQuery:function(e,i){var t;1&e&&r.Sc(m,!0),2&e&&r.Cc(t=r.lc())&&(i.myInputVariable=t.first)},decls:2,vars:2,consts:[[4,"ngIf"],["class","alert danger",4,"ngIf"],["dynamicHeight","",3,"color"],["label","Download Template"],[3,"hasChild","tabTitle","itemService","isAdminTab"],["label","Create Template"],[1,"ui","active","inverted","dimmer"],["class","ui active inverted dimmer",4,"ngIf"],[1,"example-h2"],["mode","buffer",2,"width","50%",3,"color","bufferValue","value"],[1,"ui","text","loader"],[1,"alert","danger"],["onclick","this.parentElement.style.display='none';",1,"closebtn"],[1,"alert-header"]],template:function(e,i){1&e&&(r.Lc(0,f,7,10,"ng-container",0),r.Lc(1,b,5,1,"div",1)),2&e&&(r.vc("ngIf",!i.error),r.Jb(1),r.vc("ngIf",i.error))},directives:[o.m,l.b,l.a,h.a,p.a],styles:[""]}),e})();var S=t("jvDc");const T=[{path:"",component:L}];let I=(()=>{class e{}return e.\u0275mod=r.Ub({type:e}),e.\u0275inj=r.Tb({factory:function(i){return new(i||e)},providers:[d],imports:[[S.a,c.i.forChild(T)]]}),e})()}}]);