import{b as k}from"./chunk-G57BBWZI.js";import{h as j}from"./chunk-5G3LZJIT.js";import{d as _,e as w}from"./chunk-TW44EWVM.js";import{f as B}from"./chunk-KG3X6RFX.js";import{$b as F,Ea as v,Fa as h,Ga as t,H as n,Ha as e,Ia as m,L as f,Ob as E,Pa as S,Qb as N,Yb as T,Za as o,_a as b,_b as D,ac as R,cb as y,cc as I,ec as A,fb as C,fc as G,ga as c,gb as P,gc as O,hc as V,ic as M,jc as $,lc as q,wa as g,ya as s,zb as x}from"./chunk-5FGQ34ZG.js";import"./chunk-6DTZ7UCQ.js";var L=(r,i)=>i.id;function Q(r,i){r&1&&(t(0,"h4",22),o(1," Add New Product "),e())}function z(r,i){if(r&1&&(t(0,"option",12),o(1),C(2,"titlecase"),e()),r&2){let u=i.$implicit;s("value",+u.id),c(),b(P(2,2,u.title))}}var le=(()=>{let i=class i{constructor(){this.router=n(N),this.route=n(E),this.categoryService=n(w),this.productService=n(_),this.toastrService=n(j),this.fb=n($),this.categories=this.categoryService.categories,this.form=this.fb.nonNullable.group({title:"\u0421\u043C\u0430\u0440\u0442\u0444\u043E\u043D OPPO Reno11F 5G",description:"\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430 Android 14",price:this.fb.nonNullable.control(""),categoryId:this.fb.nonNullable.control("",[D.required])})}saveProduct(){if(this.form.invalid)return;let{title:d,description:l,price:a,categoryId:p}=this.form.getRawValue();this.productService.create({title:d,description:l,price:+a,categoryId:+p}).subscribe(H=>{this.toastrService.success(`${H.title} added successfully!`,"",{timeOut:1e3}),this.router.navigate(["../"],{queryParamsHandling:"merge",relativeTo:this.route})})}};i.\u0275fac=function(l){return new(l||i)},i.\u0275cmp=f({type:i,selectors:[["app-product-edit"]],standalone:!0,features:[y],decls:36,vars:1,consts:[["ui-page-title",""],[1,"row",3,"ngSubmit","formGroup"],[1,"col-lg-8"],[1,"card","shadow"],[1,"card-body"],[1,"h5","mb-4","fw-light"],[1,"row"],[1,"mb-3","col-lg-6"],[1,"form-label"],["type","text","placeholder","Product Name","formControlName","title",1,"form-control"],["aria-label","Default select example","formControlName","categoryId",1,"form-select"],["value","null"],[3,"value"],[1,"mb-3","col-lg-12"],["formControlName","description",2,"height","200px"],[1,"d-flex","justify-content-end"],[1,"btn","btn-success","text-white","rounded-1"],[1,"col-lg-4"],[1,"card","shadow","mb-4"],[1,"mb-4","h5","fw-light"],[1,"mb-3"],["type","text","formControlName","price","placeholder","$0.00",1,"form-control"],[1,"page-title","m-0"]],template:function(l,a){l&1&&(g(0,Q,2,0,"ng-template",0),t(1,"form",1),S("ngSubmit",function(){return a.saveProduct()}),t(2,"div",2)(3,"div",3)(4,"div",4)(5,"h4",5),o(6,"Product Information"),e(),t(7,"div",6)(8,"div",7)(9,"label",8),o(10,"Title"),e(),m(11,"input",9),e(),t(12,"div",7)(13,"label",8),o(14,"Product Category"),e(),t(15,"select",10)(16,"option",11),o(17,"Product Category"),e(),v(18,z,3,4,"option",12,L),e()(),t(20,"div",13)(21,"label",8),o(22,"Description"),e(),m(23,"quill-editor",14),e()(),t(24,"div",15)(25,"button",16),o(26,"Create Product"),e()()()()(),t(27,"div",17)(28,"div",18)(29,"div",4)(30,"h4",19),o(31,"Product Price"),e(),t(32,"div",20)(33,"label",8),o(34,"Regular Price"),e(),m(35,"input",21),e()()()()()),l&2&&(c(),s("formGroup",a.form),c(17),h(a.categories()))},dependencies:[B,k,q,I,V,M,T,O,F,R,A,G,x],changeDetection:0});let r=i;return r})();export{le as ProductEditComponent};
