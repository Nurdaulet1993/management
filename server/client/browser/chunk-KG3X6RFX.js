import{$ as se,$a as xe,$b as Le,Aa as A,Cb as Be,D as B,Da as me,E as ee,Ea as fe,Fa as ge,G as $,Ga as h,H as b,Ha as p,Ia as P,Ja as R,Ka as F,L as _,La as j,M as te,Ma as be,N as y,Nb as ke,Ob as E,Pa as S,Qa as m,Qb as N,Rb as Ae,S as re,T as ne,Ta as ve,Tb as je,U as G,Ua as _e,Ub as Se,V as ie,Va as ye,Wb as Oe,X as ae,Yb as Ne,Z as oe,Za as w,_ as x,_a as O,aa as ce,bc as Ve,cb as D,d as T,db as Ce,dc as He,eb as Q,fb as Pe,ga as d,gb as we,ha as v,i as Y,ia as C,ja as de,lc as $e,o as K,ob as De,pb as q,qa as k,r as Z,sa as le,sb as Re,ua as ue,ub as Fe,va as he,vb as Ee,wa as f,wb as Ie,xa as pe,xb as Me,ya as u,yb as Te}from"./chunk-5FGQ34ZG.js";import{a as l,b as g}from"./chunk-6DTZ7UCQ.js";var Ye=n=>({"xng-breadcrumb-link-disabled":n}),qe=(n,t,o,e,r,i)=>({$implicit:n,info:t,last:o,first:e,index:r,count:i});function Ke(n,t){n&1&&j(0)}function Ze(n,t){if(n&1&&(R(0),w(1),F()),n&2){let o=m(2).$implicit;d(),O(o.label)}}function et(n,t){if(n&1&&(h(0,"a",7),f(1,Ke,1,0,"ng-container",8)(2,Ze,2,1,"ng-container",9),p()),n&2){let o=m(),e=o.$implicit,r=o.last,i=o.first,a=o.index,s=o.count,c=m();u("ngClass",Ce(10,Ye,e.disable))("routerLink",e.routeInterceptor?e.routeInterceptor(e.routeLink,e):e.routeLink)("queryParams",c.preserveQueryParams?e.queryParams:void 0)("fragment",c.preserveFragment?e.fragment:void 0)("target",c.anchorTarget?c.anchorTarget:"_self"),pe("aria-disabled",e.disable)("tabIndex",e.disable?-1:0),d(),u("ngTemplateOutlet",c.itemTemplate)("ngTemplateOutletContext",Q(12,qe,e.label,e.info,r,i,a,s)),d(),u("ngIf",!c.itemTemplate)}}function tt(n,t){n&1&&j(0)}function rt(n,t){if(n&1&&(R(0),w(1),F()),n&2){let o=m(2).$implicit;d(),O(o.label)}}function nt(n,t){if(n&1&&(h(0,"label",10),f(1,tt,1,0,"ng-container",8)(2,rt,2,1,"ng-container",9),p()),n&2){let o=m(),e=o.$implicit,r=o.last,i=o.first,a=o.index,s=o.count,c=m();d(),u("ngTemplateOutlet",c.itemTemplate)("ngTemplateOutletContext",Q(3,qe,e.label,e.info,r,i,a,s)),d(),u("ngIf",!c.itemTemplate)}}function it(n,t){n&1&&j(0)}function at(n,t){if(n&1&&(R(0),w(1),F()),n&2){let o=m(3);d(),O(o.separator)}}function ot(n,t){if(n&1&&(h(0,"li",11),f(1,it,1,0,"ng-container",12)(2,at,2,1,"ng-container",9),p()),n&2){let o=m(2);d(),u("ngTemplateOutlet",o.separatorTemplate),d(),u("ngIf",!o.separatorTemplate)}}function st(n,t){if(n&1&&(R(0),h(1,"li",3),f(2,et,3,19,"a",4)(3,nt,3,10,"label",5),p(),f(4,ot,3,2,"li",6),F()),n&2){let o=t.last;d(2),u("ngIf",!o),d(),u("ngIf",o),d(),u("ngIf",!o)}}var ct=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275dir=y({type:t,selectors:[["","xngBreadcrumbItem",""]],standalone:!0});let n=t;return n})(),L={PREFIX:":",REGEX_IDENTIFIER:"/:[^/]+",REGEX_REPLACER:"/[^/]+"},dt="@",Ge=n=>!!n&&Object.keys(n).length>0,lt=(()=>{let t=class t{constructor(e,r){this.activatedRoute=e,this.router=r,this.baseHref="/",this.dynamicBreadcrumbStore=[],this.currentBreadcrumbs=[],this.previousBreadcrumbs=[],this.breadcrumbs=new T([]),this.breadcrumbs$=this.breadcrumbs.asObservable(),this.detectRouteChanges()}detectRouteChanges(){this.setupBreadcrumbs(this.activatedRoute.snapshot),this.router.events.pipe(K(e=>e instanceof ke)).subscribe(e=>{e.shouldActivate&&this.setupBreadcrumbs(e.state.root)})}setupBreadcrumbs(e){this.previousBreadcrumbs=this.currentBreadcrumbs;let r=this.getRootBreadcrumb();this.currentBreadcrumbs=r?[r]:[],this.prepareBreadcrumbList(e,this.baseHref)}getRootBreadcrumb(){let e=this.router.config.find(a=>a.path===""),r=this.extractObject(e?.data?.breadcrumb),i=this.getFromStore(r.alias,"/");if(Ge(r)||Ge(i))return l(g(l(l({},i),r),{routeLink:this.baseHref}),this.getQueryParamsFromPreviousList("/"))}prepareBreadcrumbItem(e,r){let{path:i,breadcrumb:a}=this.parseRouteData(e.routeConfig),s=this.resolvePathSegment(i,e),c=`${r}${s}`,W=this.getFromStore(a.alias,c),z=this.extractLabel(W?.label||a?.label,s),H=!1,J="";return z||(H=!0,J=s),l(g(l(l({},W),a),{label:H?J:z,routeLink:c,isAutoGeneratedLabel:H}),this.getQueryParamsFromPreviousList(c))}prepareBreadcrumbList(e,r){if(e.routeConfig?.path){let s=this.prepareBreadcrumbItem(e,r);if(this.currentBreadcrumbs.push(s),e.firstChild)return this.prepareBreadcrumbList(e.firstChild,s.routeLink+"/")}else if(e.firstChild)return this.prepareBreadcrumbList(e.firstChild,r);let i=this.currentBreadcrumbs[this.currentBreadcrumbs.length-1];this.setQueryParamsForActiveBreadcrumb(i,e);let a=this.currentBreadcrumbs.filter(s=>!s.skip);this.breadcrumbs.next(a)}getFromStore(e,r){return this.dynamicBreadcrumbStore.find(i=>e&&e===i.alias||r&&r===i.routeLink||this.matchRegex(r,i.routeRegex))}matchRegex(e,r){return e.match(new RegExp(r))?.[0]===e}resolvePathSegment(e,r){return e.includes(L.PREFIX)&&Object.entries(r.params).forEach(([i,a])=>{e=e.replace(`:${i}`,`${a}`)}),e}getQueryParamsFromPreviousList(e){let{queryParams:r,fragment:i}=this.previousBreadcrumbs.find(a=>a.routeLink===e)||{};return{queryParams:r,fragment:i}}setQueryParamsForActiveBreadcrumb(e,r){if(e){let{queryParams:i,fragment:a}=r;e.queryParams=i?l({},i):void 0,e.fragment=a}}parseRouteData(e){let{path:r,data:i}=e,a=this.mergeWithBaseChildData(e,i?.breadcrumb);return{path:r,breadcrumb:a}}mergeWithBaseChildData(e,r){if(!e)return this.extractObject(r);let i;e.loadChildren?i=e._loadedRoutes.find(s=>s.path===""):e.children&&(i=e.children.find(s=>s.path===""));let a=i?.data?.breadcrumb;return a?this.mergeWithBaseChildData(i,l(l({},this.extractObject(r)),this.extractObject(a))):this.extractObject(r)}set(e,r){let i=this.extractObject(r),a;e.startsWith(dt)?a=["alias",g(l({},i),{alias:e.slice(1)})]:e.includes(L.PREFIX)?a=["routeRegex",g(l({},i),{routeRegex:this.buildRegex(e)})]:a=["routeLink",g(l({},i),{routeLink:this.ensureLeadingSlash(e)})],a[1].isAutoGeneratedLabel=!1,this.updateStore(...a),this.updateCurrentBreadcrumbs(...a)}updateStore(e,r){let i=this.dynamicBreadcrumbStore.findIndex(a=>r[e]===a[e]);i>-1?this.dynamicBreadcrumbStore[i]=l(l({},this.dynamicBreadcrumbStore[i]),r):this.dynamicBreadcrumbStore.push(l({},r))}updateCurrentBreadcrumbs(e,r){let i=this.currentBreadcrumbs.findIndex(a=>e==="routeRegex"?this.matchRegex(a.routeLink,r[e]):r[e]===a[e]);if(i>-1){this.currentBreadcrumbs[i]=l(l({},this.currentBreadcrumbs[i]),r);let a=this.currentBreadcrumbs.filter(s=>!s.skip);this.breadcrumbs.next([...a])}}buildRegex(e){return this.ensureLeadingSlash(e).replace(new RegExp(L.REGEX_IDENTIFIER,"g"),L.REGEX_REPLACER)}ensureLeadingSlash(e){return e.startsWith("/")?e:`/${e}`}extractLabel(e,r){let i=typeof e=="object"?e.label:e;return typeof i=="function"?i(r):i}extractObject(e){return e&&(typeof e=="string"||typeof e=="function")?{label:e}:e||{}}};t.\u0275fac=function(r){return new(r||t)($(E),$(N))},t.\u0275prov=B({token:t,factory:t.\u0275fac,providedIn:"root"});let n=t;return n})(),Xe=(()=>{let t=class t{set separator(e){e instanceof C?(this.separatorTemplate=e,this._separator=void 0):(this.separatorTemplate=void 0,this._separator=e||"/")}get separator(){return this._separator}constructor(e,r){this.breadcrumbService=e,this._separator="/",this.autoGenerate=!0,this.preserveQueryParams=!0,this.preserveFragment=!0,this.class="",this.setupMessage="not set up yet",this.someParameterValue=null,r.params.subscribe(i=>{this.setupComponent(i.someParam)})}setupComponent(e){this.setupMessage="set up at "+new Date,this.someParameterValue=e}ngOnInit(){this.breadcrumbs$=this.breadcrumbService.breadcrumbs$.pipe(Y(e=>e.filter(r=>this.autoGenerate?!0:!r.isAutoGeneratedLabel).map(r=>{let{routeInterceptor:i,routeLink:a}=r;return g(l({},r),{routeLink:i?.(a,r)||a})})))}};t.\u0275fac=function(r){return new(r||t)(v(lt),v(E))},t.\u0275cmp=_({type:t,selectors:[["xng-breadcrumb"]],contentQueries:function(r,i,a){if(r&1&&ve(a,ct,5,C),r&2){let s;_e(s=ye())&&(i.itemTemplate=s.first)}},inputs:{autoGenerate:"autoGenerate",preserveQueryParams:"preserveQueryParams",preserveFragment:"preserveFragment",class:"class",anchorTarget:"anchorTarget",separator:"separator"},standalone:!0,features:[D],decls:4,vars:4,consts:[["aria-label","breadcrumb",1,"xng-breadcrumb-root",3,"ngClass"],[1,"xng-breadcrumb-list"],[4,"ngFor","ngForOf"],[1,"xng-breadcrumb-item"],["class","xng-breadcrumb-link","rel","noopener noreferrer",3,"ngClass","routerLink","queryParams","fragment","target",4,"ngIf"],["class","xng-breadcrumb-trail",4,"ngIf"],["class","xng-breadcrumb-separator","aria-hidden","true",4,"ngIf"],["rel","noopener noreferrer",1,"xng-breadcrumb-link",3,"ngClass","routerLink","queryParams","fragment","target"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf"],[1,"xng-breadcrumb-trail"],["aria-hidden","true",1,"xng-breadcrumb-separator"],[4,"ngTemplateOutlet"]],template:function(r,i){r&1&&(h(0,"nav",0)(1,"ol",1),f(2,st,5,3,"ng-container",2),Pe(3,"async"),p()()),r&2&&(u("ngClass",i.class),d(2),u("ngForOf",we(3,2,i.breadcrumbs$)))},dependencies:[Be,Fe,Ee,Ie,Me,Te,je,Ae],styles:[`.xng-breadcrumb-root{margin:0}.xng-breadcrumb-list{display:flex;align-items:center;flex-wrap:wrap;margin:0;padding:0}.xng-breadcrumb-item{list-style:none}.xng-breadcrumb-trail{display:flex;align-items:center}.xng-breadcrumb-link{display:flex;align-items:center;white-space:nowrap;color:inherit;text-decoration:none;transition:text-decoration .3s;cursor:pointer}.xng-breadcrumb-link:hover{text-decoration:underline}.xng-breadcrumb-link-disabled{pointer-events:none;cursor:disabled}.xng-breadcrumb-separator{display:flex;-webkit-user-select:none;user-select:none;margin-left:8px;margin-right:8px}
`],encapsulation:2});let n=t;return n})();var I=class{attach(t){return this._attachedHost=t,t.attach(this)}detach(){let t=this._attachedHost;t!=null&&(this._attachedHost=null,t.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(t){this._attachedHost=t}},X=class extends I{constructor(t,o,e,r,i){super(),this.component=t,this.viewContainerRef=o,this.injector=e,this.componentFactoryResolver=r,this.projectableNodes=i}},M=class extends I{constructor(t,o,e,r){super(),this.templateRef=t,this.viewContainerRef=o,this.context=e,this.injector=r}get origin(){return this.templateRef.elementRef}attach(t,o=this.context){return this.context=o,super.attach(t)}detach(){return this.context=void 0,super.detach()}},U=class extends I{constructor(t){super(),this.element=t instanceof se?t.nativeElement:t}},V=class{constructor(){this._isDisposed=!1,this.attachDomPortal=null}hasAttached(){return!!this._attachedPortal}attach(t){if(t instanceof X)return this._attachedPortal=t,this.attachComponentPortal(t);if(t instanceof M)return this._attachedPortal=t,this.attachTemplatePortal(t);if(this.attachDomPortal&&t instanceof U)return this._attachedPortal=t,this.attachDomPortal(t)}detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(t){this._disposeFn=t}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var Ue=class extends V{constructor(t,o,e,r,i){super(),this.outletElement=t,this._componentFactoryResolver=o,this._appRef=e,this._defaultInjector=r,this.attachDomPortal=a=>{this._document;let s=a.element;s.parentNode;let c=this._document.createComment("dom-portal");s.parentNode.insertBefore(c,s),this.outletElement.appendChild(s),this._attachedPortal=a,super.setDisposeFn(()=>{c.parentNode&&c.parentNode.replaceChild(s,c)})},this._document=i}attachComponentPortal(t){let e=(t.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(t.component),r;return t.viewContainerRef?(r=t.viewContainerRef.createComponent(e,t.viewContainerRef.length,t.injector||t.viewContainerRef.injector,t.projectableNodes||void 0),this.setDisposeFn(()=>r.destroy())):(r=e.create(t.injector||this._defaultInjector||ae.NULL),this._appRef.attachView(r.hostView),this.setDisposeFn(()=>{this._appRef.viewCount>0&&this._appRef.detachView(r.hostView),r.destroy()})),this.outletElement.appendChild(this._getComponentRootNode(r)),this._attachedPortal=t,r}attachTemplatePortal(t){let o=t.viewContainerRef,e=o.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return e.rootNodes.forEach(r=>this.outletElement.appendChild(r)),e.detectChanges(),this.setDisposeFn(()=>{let r=o.indexOf(e);r!==-1&&o.remove(r)}),this._attachedPortal=t,e}dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(t){return t.hostView.rootNodes[0]}};var We=(()=>{let t=class t extends V{constructor(e,r,i){super(),this._componentFactoryResolver=e,this._viewContainerRef=r,this._isInitialized=!1,this.attached=new ce,this.attachDomPortal=a=>{this._document;let s=a.element;s.parentNode;let c=this._document.createComment("dom-portal");a.setAttachedHost(this),s.parentNode.insertBefore(c,s),this._getRootNode().appendChild(s),this._attachedPortal=a,super.setDisposeFn(()=>{c.parentNode&&c.parentNode.replaceChild(s,c)})},this._document=i}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let r=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,a=(e.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(e.component),s=r.createComponent(a,r.length,e.injector||r.injector,e.projectableNodes||void 0);return r!==this._viewContainerRef&&this._getRootNode().appendChild(s.hostView.rootNodes[0]),super.setDisposeFn(()=>s.destroy()),this._attachedPortal=e,this._attachedRef=s,this.attached.emit(s),s}attachTemplatePortal(e){e.setAttachedHost(this);let r=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}};t.\u0275fac=function(r){return new(r||t)(v(de),v(k),v(Re))},t.\u0275dir=y({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],standalone:!0,features:[ue]});let n=t;return n})();var ze=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=te({type:t}),t.\u0275inj=ee({});let n=t;return n})();function ht(n,t){if(n&1){let o=be();h(0,"li",1)(1,"a",2),S("click",function(){let r=re(o).$implicit,i=m();return ne(i.setPage(r))}),w(2),p()()}if(n&2){let o=t.$implicit,e=m();d(),A("active",e.currentPage()===o),d(),xe(" ",o," ")}}function pt(n,t){}var Yt=(()=>{let t=class t{constructor(){this.currentPage=le(1),this.itemsPerPage=x(10),this.totalItems=x(0),this.itemCount=x(),this.pagesCount=q(()=>Math.ceil(this.totalItems()/this.itemsPerPage())),this.pages=q(()=>this.range(1,this.pagesCount())),this.change=oe()}set page(e){this.currentPage.set(e)}setPage(e){this.currentPage.set(e),this.change.emit(this.currentPage())}range(e,r){return[...Array(r).keys()].map(i=>i+e)}onNextPage(){this.currentPage.update(e=>e+1),this.change.emit(this.currentPage())}onPrevPage(){this.currentPage.update(e=>e-1),this.change.emit(this.currentPage())}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=_({type:t,selectors:[["ui-pagination"]],inputs:{page:[2,"currentPage","page",De],itemsPerPage:[1,"itemsPerPage"],totalItems:[1,"totalItems"],itemCount:[1,"itemCount"]},outputs:{change:"change"},standalone:!0,features:[he,D],decls:12,vars:4,consts:[[1,"pagination","justify-content-end"],[1,"page-item"],[1,"page-link","rounded-1",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-chevron-left"],["points","15 18 9 12 15 6"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-chevron-right"],["points","9 18 15 12 9 6"]],template:function(r,i){r&1&&(h(0,"nav")(1,"ul",0)(2,"li",1)(3,"a",2),S("click",function(){return i.onPrevPage()}),G(),h(4,"svg",3),P(5,"polyline",4),p()()(),fe(6,ht,3,3,"li",1,me),ie(),h(8,"li",1)(9,"a",2),S("click",function(){return i.onNextPage()}),G(),h(10,"svg",5),P(11,"polyline",6),p()()()()()),r&2&&(d(2),A("disabled",i.currentPage()===1),d(4),ge(i.pages()),d(3),A("disabled",i.currentPage()===i.pagesCount()))},changeDetection:0});let n=t;return n})(),Je=(()=>{let t=class t{constructor(){this.titleSub=new T(null),this.title=Oe(this.titleSub)}setTitle(e){this.titleSub.next(e)}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=B({token:t,factory:t.\u0275fac,providedIn:"root"});let n=t;return n})(),Kt=(()=>{let t=class t{constructor(){this.pageService=b(Je),this.titlePortal=this.pageService.title}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=_({type:t,selectors:[["ui-page-header"]],standalone:!0,features:[D],decls:3,vars:1,consts:[[1,"py-4","d-flex","justify-content-between","align-items-center"],[3,"cdkPortalOutlet"]],template:function(r,i){r&1&&(h(0,"div",0),f(1,pt,0,0,"ng-template",1),P(2,"xng-breadcrumb"),p()),r&2&&(d(),u("cdkPortalOutlet",i.titlePortal()))},dependencies:[Xe,ze,We],changeDetection:0});let n=t;return n})(),Zt=(()=>{let t=class t{constructor(){this.pageService=b(Je),this.template=b(C),this.vcr=b(k)}ngAfterViewInit(){this.pageService.setTitle(new M(this.template,this.vcr))}};t.\u0275fac=function(r){return new(r||t)},t.\u0275dir=y({type:t,selectors:[["","ui-page-title",""]],standalone:!0});let n=t;return n})(),er=(()=>{let t=class t{constructor(){this.debounce=x(1e3),this.placeholder=x("Search..."),this.route=b(E),this.router=b(N),this.control=new Ve(this.route.snapshot.queryParams.search,{nonNullable:!0}),this.control.valueChanges.pipe(Se(),Z(this.debounce())).subscribe(e=>{console.log(e),this.router.navigate([],{queryParams:{search:e||null},queryParamsHandling:"merge"})})}ngOnInit(){}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=_({type:t,selectors:[["ui-search"]],inputs:{debounce:[1,"debounce"],placeholder:[1,"placeholder"]},standalone:!0,features:[D],decls:3,vars:2,consts:[["type","text",1,"form-control","rounded-1",3,"placeholder","formControl"],[1,"search-icon","rounded-1"],[1,"bi","bi-search"]],template:function(r,i){r&1&&(P(0,"input",0),h(1,"div",1),P(2,"i",2),p()),r&2&&u("placeholder",i.placeholder())("formControl",i.control)},dependencies:[$e,Ne,Le,He],styles:["[_nghost-%COMP%]{position:relative}.form-control[_ngcontent-%COMP%]{padding-left:35px}.search-icon[_ngcontent-%COMP%]{align-items:center;position:absolute;left:10px;top:50%;transform:translateY(-50%);cursor:pointer}"],changeDetection:0});let n=t;return n})();export{M as a,Ue as b,ze as c,Yt as d,Kt as e,Zt as f,er as g};