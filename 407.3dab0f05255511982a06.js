(self.webpackChunkoctarine_front_end=self.webpackChunkoctarine_front_end||[]).push([[407],{5407:(t,i,e)=>{"use strict";e.r(i),e.d(i,{SignInModule:()=>b});var s=e(3982),n=e(2057),o=e(4751),a=e(2595),r=e(9765),l=e(6215),c=e(7809),h=e(5257),u=e(8002),d=e(591),g=e(4788),m=e(1211),p=e(2955),v=e(8163),_=e(5813),f=e(56);const L=function(t){return{"button--disabled-click":t}},Z=[{path:"",component:(()=>{class t{constructor(t,i,e,s,n,o,a){this.title=t,this.wasm=i,this.native=e,this.state=s,this.storage=n,this.formBuilder=o,this.translate=a,this.Notification=new r.xQ,this.MatcherFormControl=new c.n,this.AwaitRequest=new l.X(!1),this.FailedOnChange=new l.X(!1)}ngOnInit(){this.SetTitle(),this.CreateFormInit(),void 0===this.HandlleLogin&&(this.HandlleLogin=this.state.Login.subscribe(t=>this.onLOGIN(t))),void 0===this.HandlleOnchangeLangs&&(this.HandlleOnchangeLangs=this.translate.onLangChange.subscribe(()=>this.SetTitle())),this.onChanged()}onChanged(){void 0===this.HandlleLoginForm&&(this.HandlleLoginForm=this.LoginInForm.valueChanges.subscribe(t=>this.LoginInForm.hasError("required","login")?(this.SetOrRemoveErrorClass("login"),void this.Notification.next(this.storage.instant((0,d.J)("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 email")))):t.login.length<5?(this.SetOrRemoveErrorClass("login"),void this.Notification.next(this.storage.instant((0,d.J)("\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 5")))):t.login.length>64?(this.SetOrRemoveErrorClass("login"),void this.Notification.next(this.storage.instant((0,d.J)("\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 64")))):this.LoginInForm.hasError("required","password")?(this.SetOrRemoveErrorClass("password"),void this.Notification.next(this.storage.instant((0,d.J)("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c")))):(this.Notification.next(""),void this.SetOrRemoveErrorClass())))}Submited(){const t=this.state.ConnectionState.pipe((0,h.q)(1),(0,u.U)(t=>2===t));this.HandlleSendLogin=t.subscribe(t=>{t&&(this.wasm.Interact.send("Login",{email_or_username:this.LoginInForm.value.login,password:this.LoginInForm.value.password}),this.AwaitRequest.next(!0))})}onLOGIN(t){var i,e;switch(null!==(i=t.error)&&void 0!==i?i:0){case 0:case 1:this.Notification.next("");break;case 2:this.Notification.next(this.storage.instant((0,d.J)("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d")));break;case 3:this.Notification.next(this.storage.instant((0,d.J)("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c")));break;case 4:const i=new Date(Date.now()+(null!==(e=null==t?void 0:t.retry_after)&&void 0!==e?e:0));this.Notification.next(this.storage.instant((0,d.J)("\u0412\u044b \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0447\u0430\u0441\u0442\u043e \u043c\u0435\u043d\u044f\u0435\u0442\u0435 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440, \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 \u043f\u043e\u0441\u043b\u0435"),this.DateFormat(i,"%d/%m/%Y - %H:%M:%S",!0)))}this.AwaitRequest.next(!1)}ngOnDestroy(){var t,i,e,s;this.AwaitRequest.unsubscribe(),null===(t=this.HandlleLogin)||void 0===t||t.unsubscribe(),null===(i=this.HandlleSendLogin)||void 0===i||i.unsubscribe(),null===(e=this.HandlleLoginForm)||void 0===e||e.unsubscribe(),null===(s=this.HandlleOnchangeLangs)||void 0===s||s.unsubscribe()}SetOrRemoveErrorClass(t){const i="field--unvalid",e=this.native.nativeElement;if(void 0===t)return void e.querySelectorAll(`.${i}`).forEach(t=>{t.classList.contains(i)&&t.classList.remove(i)});const s=e.querySelector(`#${t}`);null==s||s.classList.contains(i)||s.classList.add(i)}CreateFormInit(){this.LoginInForm=this.formBuilder.group({login:["",this.MatcherFormControl.ValidatorLogin()],password:["",this.MatcherFormControl.ValidatorPasswordLogin]})}DateFormat(t,i,e){return e=e?"getUTC":"get",i.replace(/%[YmdHMS]/g,i=>{switch(i){case"%d":i=t[e+"Date"]();break;case"%m":i=1+t[e+"Month"]();break;case"%Y":return t[e+"FullYear"]();case"%H":i=t[e+"Hours"]();break;case"%M":i=t[e+"Minutes"]();break;case"%S":i=t[e+"Seconds"]();break;default:return i.slice(1)}return("0"+i).slice(-2)})}SetTitle(){this.title.setTitle(this.storage.instant((0,d.J)("Octarine - \u0412\u043e\u0439\u0442\u0438")))}}return t.\u0275fac=function(i){return new(i||t)(g.Y36(m.Dx),g.Y36(p.$),g.Y36(g.SBq),g.Y36(v.b),g.Y36(_.m),g.Y36(o.qu),g.Y36(f.sK))},t.\u0275cmp=g.Xpm({type:t,selectors:[["app-login"]],decls:33,vars:30,consts:[[1,"content-wrapper","login-page"],[1,"main"],[1,"auth",3,"formGroup","ngSubmit"],[1,"auth__title"],[1,"auth__field-group"],["id","login",1,"field"],["required","","type","text","formControlName","login","autocomplete","email",1,"field__input",3,"placeholder"],["svgClass","field__icon","src","/assets/images/icons/user.svg#user"],["id","password",1,"field"],["required","","type","password","formControlName","password","autocomplete","current-password",1,"field__input",3,"placeholder"],["svgClass","field__icon","src","/assets/images/icons/key.svg#key"],[1,"auth__reset-pass"],["routerLink","/reset",1,"auth__link","auth__link--blue"],[1,"auth__notification"],[1,"button",3,"ngClass"],[1,"auth__note-group"],[1,"auth__note"],["routerLink","/sign-up",1,"auth__link","auth__link--blue"]],template:function(t,i){1&t&&(g.TgZ(0,"div",0),g.TgZ(1,"main",1),g.TgZ(2,"form",2),g.NdJ("ngSubmit",function(){return i.Submited()}),g.TgZ(3,"h2",3),g._uU(4),g.ALo(5,"translate"),g.qZA(),g.TgZ(6,"div",4),g.TgZ(7,"div",5),g._UZ(8,"input",6),g.ALo(9,"translate"),g._UZ(10,"svg-icon",7),g.qZA(),g.TgZ(11,"div",8),g._UZ(12,"input",9),g.ALo(13,"translate"),g._UZ(14,"svg-icon",10),g.qZA(),g.qZA(),g.TgZ(15,"div",11),g.TgZ(16,"a",12),g._uU(17),g.ALo(18,"translate"),g.qZA(),g.qZA(),g.TgZ(19,"div",13),g._uU(20),g.ALo(21,"async"),g.qZA(),g.TgZ(22,"button",14),g.ALo(23,"async"),g._uU(24),g.ALo(25,"translate"),g.qZA(),g.TgZ(26,"div",15),g.TgZ(27,"span",16),g._uU(28),g.ALo(29,"translate"),g.TgZ(30,"a",17),g._uU(31),g.ALo(32,"translate"),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA()),2&t&&(g.xp6(2),g.Q6J("formGroup",i.LoginInForm),g.xp6(2),g.hij(" ",g.lcZ(5,10,"\u0412\u043e\u0439\u0442\u0438")," "),g.xp6(4),g.s9C("placeholder",g.lcZ(9,12,"\u041b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u043e\u0447\u0442\u0430")),g.xp6(4),g.s9C("placeholder",g.lcZ(13,14,"\u041f\u0430\u0440\u043e\u043b\u044c")),g.xp6(5),g.hij(" ",g.lcZ(18,16,"\u0417\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"),"? "),g.xp6(3),g.hij(" ",g.lcZ(21,18,i.Notification)," "),g.xp6(2),g.Q6J("ngClass",g.VKq(28,L,!1!==g.lcZ(23,20,i.AwaitRequest)||!i.LoginInForm.valid)),g.xp6(2),g.hij(" ",g.lcZ(25,22,"\u0412\u043e\u0439\u0442\u0438")," "),g.xp6(4),g.hij(" ",g.lcZ(29,24,"\u041d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430"),"? "),g.xp6(3),g.hij(" ",g.lcZ(32,26,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f")," "))},directives:[o._Y,o.JL,o.sg,o.Fj,o.Q7,o.JJ,o.u,a.bk,s.yS,n.mk],pipes:[f.X$,n.Ov],encapsulation:2}),t})()}];let b=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=g.oAB({type:t}),t.\u0275inj=g.cJS({imports:[[n.ez,f.aw,o.UX,a._J.forRoot(),s.Bz.forChild(Z)],s.Bz]}),t})()}}]);