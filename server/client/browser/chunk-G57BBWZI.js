import{$ as w,C as O,Ca as V,D as H,Eb as ne,F as A,G as S,H as h,Ia as L,L as G,Mb as oe,N as B,O as $,R as J,Ra as ee,Sa as b,Ub as re,W as U,X as Q,Xb as le,Y as K,Zb as ae,_ as o,a as F,aa as u,b as R,bb as te,ca as W,cb as ie,ea as Z,g as k,ga as X,h as I,j,l as D,la as M,m as v,mb as se,na as z,r as q,sa as Y,sb as x,u as P,ua as _,wa as T}from"./chunk-5FGQ34ZG.js";import{g as y}from"./chunk-6DTZ7UCQ.js";var E={toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["link","image","video"],["table"]]},N=new A("config",{providedIn:"root",factory:()=>({modules:E})});var ye=l=>$([{provide:N,useValue:l}]);var he=[[["","above-quill-editor-toolbar",""]],[["","quill-editor-toolbar",""]],[["","below-quill-editor-toolbar",""]]],ue=["[above-quill-editor-toolbar]","[quill-editor-toolbar]","[below-quill-editor-toolbar]"];function ce(l,n){l&1&&L(0,"div",0)}function fe(l,n){l&1&&L(0,"div",0)}var C=(l,n)=>l||n||"html",me=()=>new R(l=>{let n=requestAnimationFrame(()=>{l.next(),l.complete()});return()=>cancelAnimationFrame(n)}),ge=(()=>{let n=class n{constructor(e,i){this.config=i,this.quill$=D(()=>y(this,null,function*(){if(!this.Quill){let t=this.document.addEventListener;this.document.addEventListener=this.document.__zone_symbol__addEventListener||this.document.addEventListener;let s=yield import("./chunk-JDE4HO6F.js");this.document.addEventListener=t,this.Quill=s.default?.default??s.default??s}return this.config.customOptions?.forEach(t=>{let s=this.Quill.import(t.import);s.whitelist=t.whitelist,this.Quill.register(s,!0,this.config.suppressGlobalRegisterWarning)}),yield this.registerCustomModules(this.Quill,this.config.customModules,this.config.suppressGlobalRegisterWarning)})).pipe(P({bufferSize:1,refCount:!0})),this.document=e.get(x),this.config||(this.config={modules:E})}getQuill(){return this.quill$}registerCustomModules(e,i,t){return y(this,null,function*(){if(Array.isArray(i))for(let{implementation:s,path:r}of i)k(s)&&(s=yield I(s)),e.register(r,s,t);return e})}};n.\u0275fac=function(i){return new(i||n)(S(Q),S(N,8))},n.\u0275prov=H({token:n,factory:n.\u0275fac,providedIn:"root"});let l=n;return l})(),pe=(()=>{let n=class n{constructor(){this.format=o(void 0),this.theme=o(void 0),this.modules=o(void 0),this.debug=o(!1),this.readOnly=o(!1),this.placeholder=o(void 0),this.maxLength=o(void 0),this.minLength=o(void 0),this.required=o(!1),this.formats=o(void 0),this.customToolbarPosition=o("top"),this.sanitize=o(!1),this.beforeRender=o(void 0),this.styles=o(null),this.registry=o(void 0),this.bounds=o(void 0),this.customOptions=o([]),this.customModules=o([]),this.trackChanges=o(void 0),this.classes=o(void 0),this.trimOnValidation=o(!1),this.linkPlaceholder=o(void 0),this.compareValues=o(!1),this.filterNull=o(!1),this.debounceTime=o(void 0),this.defaultEmptyValue=o(null),this.onEditorCreated=new u,this.onEditorChanged=new u,this.onContentChanged=new u,this.onSelectionChanged=new u,this.onFocus=new u,this.onBlur=new u,this.onNativeFocus=new u,this.onNativeBlur=new u,this.disabled=!1,this.toolbarPosition=Y("top"),this.subscription=null,this.quillSubscription=null,this.elementRef=h(w),this.document=h(x),this.cd=h(se),this.domSanitizer=h(oe),this.platformId=h(W),this.renderer=h(M),this.zone=h(z),this.service=h(ge),this.destroyRef=h(K),this.valueGetter=o(e=>{let i=e.getSemanticHTML();this.isEmptyValue(i)&&(i=this.defaultEmptyValue());let t=i,s=C(this.format(),this.service.config.format);if(s==="text")t=e.getText();else if(s==="object")t=e.getContents();else if(s==="json")try{t=JSON.stringify(e.getContents())}catch{t=e.getText()}return t}),this.valueSetter=o((e,i)=>{let t=C(this.format(),this.service.config.format);if(t==="html")return([!0,!1].includes(this.sanitize())?this.sanitize():this.service.config.sanitize||!1)&&(i=this.domSanitizer.sanitize(Z.HTML,i)),e.clipboard.convert({html:i});if(t==="json")try{return JSON.parse(i)}catch{return[{insert:i}]}return i}),this.selectionChangeHandler=(e,i,t)=>{let s=this.trackChanges()||this.service.config.trackChanges,r=!e&&!!this.onModelTouched&&(t==="user"||s&&s==="all");!this.onBlur.observed&&!this.onFocus.observed&&!this.onSelectionChanged.observed&&!r||this.zone.run(()=>{e===null?this.onBlur.emit({editor:this.quillEditor,source:t}):i===null&&this.onFocus.emit({editor:this.quillEditor,source:t}),this.onSelectionChanged.emit({editor:this.quillEditor,oldRange:i,range:e,source:t}),r&&this.onModelTouched(),this.cd.markForCheck()})},this.textChangeHandler=(e,i,t)=>{let s=this.quillEditor.getText(),r=this.quillEditor.getContents(),a=this.quillEditor.getSemanticHTML();this.isEmptyValue(a)&&(a=this.defaultEmptyValue());let d=this.trackChanges()||this.service.config.trackChanges,m=(t==="user"||d&&d==="all")&&!!this.onModelChange;!this.onContentChanged.observed&&!m||this.zone.run(()=>{if(m){let g=this.valueGetter();this.onModelChange(g(this.quillEditor))}this.onContentChanged.emit({content:r,delta:e,editor:this.quillEditor,html:a,oldDelta:i,source:t,text:s}),this.cd.markForCheck()})},this.editorChangeHandler=(e,i,t,s)=>{if(this.onEditorChanged.observed)if(e==="text-change"){let r=this.quillEditor.getText(),a=this.quillEditor.getContents(),d=this.quillEditor.getSemanticHTML();this.isEmptyValue(d)&&(d=this.defaultEmptyValue()),this.zone.run(()=>{this.onEditorChanged.emit({content:a,delta:i,editor:this.quillEditor,event:e,html:d,oldDelta:t,source:s,text:r}),this.cd.markForCheck()})}else this.zone.run(()=>{this.onEditorChanged.emit({editor:this.quillEditor,event:e,oldRange:t,range:i,source:s}),this.cd.markForCheck()})}}static normalizeClassNames(e){return e.trim().split(" ").reduce((t,s)=>{let r=s.trim();return r&&t.push(r),t},[])}ngOnInit(){this.toolbarPosition.set(this.customToolbarPosition())}ngAfterViewInit(){ne(this.platformId)||(this.quillSubscription=this.service.getQuill().pipe(j(e=>{let i=[this.service.registerCustomModules(e,this.customModules())],t=this.beforeRender()??this.service.config.beforeRender;return t&&i.push(t()),Promise.all(i).then(()=>e)})).subscribe(e=>{this.editorElem=this.elementRef.nativeElement.querySelector("[quill-editor-element]");let i=this.elementRef.nativeElement.querySelector("[quill-editor-toolbar]"),t=Object.assign({},this.modules()||this.service.config.modules);i?t.toolbar=i:t.toolbar===void 0&&(t.toolbar=E.toolbar);let s=this.placeholder()!==void 0?this.placeholder():this.service.config.placeholder;s===void 0&&(s="Insert text here ...");let r=this.styles();r&&Object.keys(r).forEach(c=>{this.renderer.setStyle(this.editorElem,c,r[c])}),this.classes()&&this.addClasses(this.classes()),this.customOptions().forEach(c=>{let f=e.import(c.import);f.whitelist=c.whitelist,e.register(f,!0)});let a=this.bounds()&&this.bounds()==="self"?this.editorElem:this.bounds();a||(a=this.service.config.bounds?this.service.config.bounds:this.document.body);let d=this.debug();!d&&d!==!1&&this.service.config.debug&&(d=this.service.config.debug);let m=this.readOnly();!m&&this.readOnly()!==!1&&(m=this.service.config.readOnly!==void 0?this.service.config.readOnly:!1);let g=this.defaultEmptyValue;this.service.config.hasOwnProperty("defaultEmptyValue")&&(g=this.service.config.defaultEmptyValue);let p=this.formats();if(!p&&p===void 0&&(p=this.service.config.formats?[...this.service.config.formats]:this.service.config.formats===null?null:void 0),this.zone.runOutsideAngular(()=>{if(this.quillEditor=new e(this.editorElem,{bounds:a,debug:d,formats:p,modules:t,placeholder:s,readOnly:m,defaultEmptyValue:g,registry:this.registry(),theme:this.theme()||(this.service.config.theme?this.service.config.theme:"snow")}),this.onNativeBlur.observed&&(this.quillEditor.scroll.domNode.addEventListener("blur",()=>this.onNativeBlur.next({editor:this.quillEditor,source:"dom"})),this.quillEditor.getModule("toolbar").container?.addEventListener("mousedown",f=>f.preventDefault())),this.onNativeFocus.observed&&this.quillEditor.scroll.domNode.addEventListener("focus",()=>this.onNativeFocus.next({editor:this.quillEditor,source:"dom"})),this.linkPlaceholder()){let f=this.quillEditor?.theme?.tooltip?.root?.querySelector("input[data-link]");f?.dataset&&(f.dataset.link=this.linkPlaceholder())}}),this.content){if(C(this.format(),this.service.config.format)==="text")this.quillEditor.setText(this.content,"silent");else{let de=this.valueSetter()(this.quillEditor,this.content);this.quillEditor.setContents(de,"silent")}this.quillEditor.getModule("history").clear()}this.setDisabledState(),this.addQuillEventListeners(),!(!this.onEditorCreated.observed&&!this.onValidatorChanged)&&me().pipe(re(this.destroyRef)).subscribe(()=>{this.onValidatorChanged&&this.onValidatorChanged(),this.onEditorCreated.emit(this.quillEditor)})}))}ngOnDestroy(){this.dispose(),this.quillSubscription?.unsubscribe(),this.quillSubscription=null}ngOnChanges(e){if(this.quillEditor){if(e.readOnly&&this.quillEditor.enable(!e.readOnly.currentValue),e.placeholder&&(this.quillEditor.root.dataset.placeholder=e.placeholder.currentValue),e.defaultEmptyValue&&(this.quillEditor.root.dataset.defaultEmptyValue=e.defaultEmptyValue.currentValue),e.styles){let i=e.styles.currentValue,t=e.styles.previousValue;t&&Object.keys(t).forEach(s=>{this.renderer.removeStyle(this.editorElem,s)}),i&&Object.keys(i).forEach(s=>{this.renderer.setStyle(this.editorElem,s,this.styles()[s])})}if(e.classes){let i=e.classes.currentValue,t=e.classes.previousValue;t&&this.removeClasses(t),i&&this.addClasses(i)}e.debounceTime&&this.addQuillEventListeners()}}addClasses(e){n.normalizeClassNames(e).forEach(i=>{this.renderer.addClass(this.editorElem,i)})}removeClasses(e){n.normalizeClassNames(e).forEach(i=>{this.renderer.removeClass(this.editorElem,i)})}writeValue(e){if(this.filterNull()&&e===null||(this.content=e,!this.quillEditor))return;let i=C(this.format(),this.service.config.format),s=this.valueSetter()(this.quillEditor,e);if(this.compareValues()){let r=this.quillEditor.getContents();if(JSON.stringify(r)===JSON.stringify(s))return}if(e){i==="text"?this.quillEditor.setText(e):this.quillEditor.setContents(s);return}this.quillEditor.setText("")}setDisabledState(e=this.disabled){this.disabled=e,this.quillEditor&&(e?(this.quillEditor.disable(),this.renderer.setAttribute(this.elementRef.nativeElement,"disabled","disabled")):(this.readOnly()||this.quillEditor.enable(),this.renderer.removeAttribute(this.elementRef.nativeElement,"disabled")))}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}registerOnValidatorChange(e){this.onValidatorChanged=e}validate(){if(!this.quillEditor)return null;let e={},i=!0,t=this.quillEditor.getText(),s=this.trimOnValidation()?t.trim().length:t.length===1&&t.trim().length===0?0:t.length-1,r=this.quillEditor.getContents().ops,a=!!r&&r.length===1&&[`
`,""].includes(r[0].insert?.toString());return this.minLength()&&s&&s<this.minLength()&&(e.minLengthError={given:s,minLength:this.minLength()},i=!1),this.maxLength()&&s>this.maxLength()&&(e.maxLengthError={given:s,maxLength:this.maxLength()},i=!1),this.required()&&!s&&a&&(e.requiredError={empty:!0},i=!1),i?null:e}addQuillEventListeners(){this.dispose(),this.zone.runOutsideAngular(()=>{this.subscription=new F,this.subscription.add(v(this.quillEditor,"selection-change").subscribe(([t,s,r])=>{this.selectionChangeHandler(t,s,r)}));let e=v(this.quillEditor,"text-change"),i=v(this.quillEditor,"editor-change");typeof this.debounceTime()=="number"&&(e=e.pipe(q(this.debounceTime())),i=i.pipe(q(this.debounceTime()))),this.subscription.add(e.subscribe(([t,s,r])=>{this.textChangeHandler(t,s,r)})),this.subscription.add(i.subscribe(([t,s,r,a])=>{this.editorChangeHandler(t,s,r,a)}))})}dispose(){this.subscription!==null&&(this.subscription.unsubscribe(),this.subscription=null)}isEmptyValue(e){return e==="<p></p>"||e==="<div></div>"||e==="<p><br></p>"||e==="<div><br></div>"}};n.\u0275fac=function(i){return new(i||n)},n.\u0275dir=B({type:n,inputs:{format:[1,"format"],theme:[1,"theme"],modules:[1,"modules"],debug:[1,"debug"],readOnly:[1,"readOnly"],placeholder:[1,"placeholder"],maxLength:[1,"maxLength"],minLength:[1,"minLength"],required:[1,"required"],formats:[1,"formats"],customToolbarPosition:[1,"customToolbarPosition"],sanitize:[1,"sanitize"],beforeRender:[1,"beforeRender"],styles:[1,"styles"],registry:[1,"registry"],bounds:[1,"bounds"],customOptions:[1,"customOptions"],customModules:[1,"customModules"],trackChanges:[1,"trackChanges"],classes:[1,"classes"],trimOnValidation:[1,"trimOnValidation"],linkPlaceholder:[1,"linkPlaceholder"],compareValues:[1,"compareValues"],filterNull:[1,"filterNull"],debounceTime:[1,"debounceTime"],defaultEmptyValue:[1,"defaultEmptyValue"],valueGetter:[1,"valueGetter"],valueSetter:[1,"valueSetter"]},outputs:{onEditorCreated:"onEditorCreated",onEditorChanged:"onEditorChanged",onContentChanged:"onContentChanged",onSelectionChanged:"onSelectionChanged",onFocus:"onFocus",onBlur:"onBlur",onNativeFocus:"onNativeFocus",onNativeBlur:"onNativeBlur"},features:[J]});let l=n;return l})(),Ke=(()=>{let n=class n extends pe{};n.\u0275fac=(()=>{let e;return function(t){return(e||(e=U(n)))(t||n)}})(),n.\u0275cmp=G({type:n,selectors:[["quill-editor"]],standalone:!0,features:[te([{multi:!0,provide:le,useExisting:O(()=>n)},{multi:!0,provide:ae,useExisting:O(()=>n)}]),_,ie],ngContentSelectors:ue,decls:5,vars:2,consts:[["quill-editor-element",""]],template:function(i,t){i&1&&(ee(he),T(0,ce,1,0,"div",0),b(1),b(2,1),b(3,2),T(4,fe,1,0,"div",0)),i&2&&(V(t.toolbarPosition()!=="top"?0:-1),X(4),V(t.toolbarPosition()==="top"?4:-1))},styles:["[_nghost-%COMP%]{display:inline-block}"]});let l=n;return l})();export{ye as a,Ke as b};
