(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{Ws5E:function(t,e,i){"use strict";i.r(e),i.d(e,"PartyModule",(function(){return T}));var r=i("mrSG"),s=i("5+WD"),n=i("fXoL"),a=i("lKJ0");let c=(()=>{class t{constructor(t){this.transmissionService=t,this.currentInstanceOf="PartyService",this.dragdropList=[],this.dragdropListTc=[],this.ElementList=[],this.csvHeader=[],this.csvHeaderAll=[],this.csvRow=[],this.csvRowAll=[],this.xmlArray=[],this.loader={i:!1,d:!1},this.errors={csv:[],server:""},this.uploadProgress=0,this.statusRequest={transmission:[],reProcess:!0,xids:[]},this.statusCount={p:0,e:0,s:0,f:0},this.showStatus=!1,this.getViewUrl=(t,e,i)=>{if("P"!==i)return"";let r=!1,s=this.csvHeader.findIndex(t=>t===this.dragdropListTc[this.itemIdIndex+1].displayText.toUpperCase()),n=this.csvHeader.findIndex(t=>"Domain Name"===t);if(-1===s){if(s=this.csvHeaderAll[e].findIndex(t=>t===this.dragdropListTc[this.itemIdIndex+1].path[0]),n=this.csvHeaderAll[e].findIndex(t=>t===this.dragdropListTc[this.itemIdIndex+1].path[0]),-1===s)return"";r=!0}return t.replace("GTM_OTM_OBJECT","GtmContact").replace("GTM_OTM_MANAGER_LAYOUT_GID","GTM_CONTACT_VIEW").replace("GTM_OTM_FINDER_SET","BIIB.GTM_MSRR_CONTACT").replace("GTM_OTM_OBJECT_GID",this.transmissionService.getViewLink(e,n,s,r?this.csvRowAll:this.csvRow))}}drop(t){return Object(r.a)(this,void 0,void 0,(function*(){if(this.selfDragDrop(t))return;this.loader.i=!0;const{item1:e,item2:i}=this.swap(t);Object(s.d)(this.dragdropList,t.previousIndex,t.currentIndex),yield this.transmissionService.swapPartys([e,i]),location.reload(),this.loader.i=!1}))}selfDragDrop(t){return this.dragdropList[t.currentIndex]._id===this.dragdropList[t.previousIndex]._id}swap(t){return{item1:Object.assign(Object.assign({},this.dragdropList[t.previousIndex]),{_id:this.dragdropList[t.currentIndex]._id}),item2:Object.assign(Object.assign({},this.dragdropList[t.currentIndex]),{_id:this.dragdropList[t.previousIndex]._id})}}valueChange(t){return Object(r.a)(this,void 0,void 0,(function*(){return this.dragdropList=t.required?this.ElementList.filter(t=>!0===t.required):this.dragdropList.filter(e=>e.name!==t.name),yield this.transmissionService.updateParty(t)}))}onUpload(t){return Object(r.a)(this,void 0,void 0,(function*(){this.itemIdIndex=this.dragdropListTc.findIndex(t=>String(t.path[0]).includes("ContactGid")&&String(t.path[0]).includes("Xid")),this.itemIdDomain=this.dragdropListTc.findIndex(t=>String(t.path[0]).includes("ContactGid")&&String(t.path[0]).includes("DomainName"));const e={dragdropList:this.dragdropListTc,containLines:!1,parentGidIdentifierPathString:"",lineIdentifierPathString:""};yield this.transmissionService.onUpload(t,e,this)}))}onRefreshStatus(){return Object(r.a)(this,void 0,void 0,(function*(){yield this.transmissionService.onRefreshStatus(this)}))}sendDataToGtm(){return Object(r.a)(this,void 0,void 0,(function*(){yield this.transmissionService.sendDataToGtm(this,"ContactGid")}))}getInitialState(t){t.table&&(this.csvHeader.length=0,this.csvRow.length=0,this.showStatus=!1,this.statusCount={p:0,e:0,s:0,f:0}),this.xmlArray.length=0,this.uploadProgress=0,this.errors.csv.length=0,this.errors.server=""}}return t.\u0275fac=function(e){return new(e||t)(n.gc(a.a))},t.\u0275prov=n.Sb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var o=i("tyNb"),d=i("ofXK"),l=i("wZkO"),h=i("CW4N"),p=i("bv9b"),u=i("bTqV");const v=["fileInput"];function b(t,e){if(1&t&&(n.cc(0,"div",7),n.cc(1,"h2",8),n.Mc(2),n.bc(),n.Xb(3,"mat-progress-bar",9),n.bc()),2&t){const t=n.oc(2);n.Jb(2),n.Oc("",t.partyService.uploadProgress," %"),n.Jb(1),n.vc("color",t.transmissionService.getInstanceColor())("bufferValue",t.partyService.uploadProgress+20)("value",t.partyService.uploadProgress)}}function f(t,e){1&t&&(n.cc(0,"div",7),n.cc(1,"div",10),n.Mc(2,"Loading"),n.bc(),n.bc())}function m(t,e){if(1&t&&(n.ac(0),n.cc(1,"mat-tab-group",2),n.cc(2,"mat-tab",3),n.Xb(3,"app-shared-tab",4),n.bc(),n.cc(4,"mat-tab",5),n.Xb(5,"app-shared-tab",4),n.bc(),n.bc(),n.Lc(6,b,4,4,"div",6),n.Lc(7,f,3,0,"div",6),n.Zb()),2&t){const t=n.oc();n.Jb(1),n.vc("color",t.transmissionService.getInstanceColor()),n.Jb(2),n.vc("itemService",t.partyService)("tabTitle","Party")("isAdminTab",!1),n.Jb(2),n.vc("itemService",t.partyService)("tabTitle","Party")("isAdminTab",!0),n.Jb(1),n.vc("ngIf",t.partyService.loader.d),n.Jb(1),n.vc("ngIf",t.partyService.loader.i)}}function g(t,e){if(1&t){const t=n.dc();n.cc(0,"div",11),n.cc(1,"span",12),n.Mc(2,"\xd7"),n.bc(),n.cc(3,"div",13),n.Mc(4),n.bc(),n.cc(5,"button",14),n.kc("click",(function(){return n.Fc(t),n.Dc(9).click()})),n.cc(6,"span"),n.Mc(7,"Upload"),n.bc(),n.cc(8,"input",15,16),n.kc("change",(function(e){return n.Fc(t),n.oc().onFileInput(e)})),n.bc(),n.bc(),n.bc()}if(2&t){const t=n.oc();n.Jb(4),n.Oc(" ",t.error," ")}}let I=(()=>{class t{constructor(t,e,i){this.partyService=t,this.transmissionService=e,this.activatedRoute=i,this.isAdminTab=!1}ngOnInit(){return Object(r.a)(this,void 0,void 0,(function*(){const{data:t,error:e}=this.activatedRoute.snapshot.data.data;if(e)return this.error=e;this.partyService.ElementList=t.filter(t=>this.getElement(t)),this.partyService.dragdropList=this.partyService.ElementList.filter(t=>t.required),this.partyService.dragdropListTc=t.filter(t=>t.required)}))}getElement(t){return this.transmissionService.getElement(t)}onFileInput(t){}}return t.\u0275fac=function(e){return new(e||t)(n.Wb(c),n.Wb(a.a),n.Wb(o.a))},t.\u0275cmp=n.Qb({type:t,selectors:[["app-party"]],viewQuery:function(t,e){var i;1&t&&n.Sc(v,!0),2&t&&n.Cc(i=n.lc())&&(e.myInputVariable=i.first)},decls:2,vars:2,consts:[[4,"ngIf"],["class","alert danger",4,"ngIf"],["dynamicHeight","",3,"color"],["label","Download Template"],[3,"itemService","tabTitle","isAdminTab"],["label","Create Template"],["class","ui active inverted dimmer",4,"ngIf"],[1,"ui","active","inverted","dimmer"],[1,"example-h2"],["mode","buffer",2,"width","50%",3,"color","bufferValue","value"],[1,"ui","text","loader"],[1,"alert","danger"],["onclick","this.parentElement.style.display='none';",1,"closebtn"],[1,"alert-header"],["mat-raised-button","","color","primary","type","button",1,"table-btn","mr-10",3,"click"],["type","file","accept",".png, .jpg, .jpeg, .pdf",2,"display","none",3,"change"],["fileInput",""]],template:function(t,e){1&t&&(n.Lc(0,m,8,9,"ng-container",0),n.Lc(1,g,10,1,"div",1)),2&t&&(n.vc("ngIf",!e.error),n.Jb(1),n.vc("ngIf",e.error))},directives:[d.m,l.b,l.a,h.a,p.a,u.a],styles:[""]}),t})();var S=i("jvDc");const y=[{path:"",component:I}];let T=(()=>{class t{}return t.\u0275mod=n.Ub({type:t}),t.\u0275inj=n.Tb({factory:function(e){return new(e||t)},providers:[c],imports:[[o.i.forChild(y),S.a]]}),t})()}}]);