(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{ITuI:function(e,t,i){"use strict";i.r(t),i.d(t,"LandingModule",function(){return _e});var s=i("Q/Oy"),n=i("fXoL");let a=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.Ob({type:e}),e.\u0275inj=n.Nb({}),e})();var r=i("sYmb"),c=i("tyNb"),o=i("ofXK"),l=i("3Pt+"),d=i("OFbc"),h=i("XNiG"),b=i("2Vo4"),p=i("LRne"),u=i("HDdC"),g=i("DH7j"),v=i("n6bG"),_=i("lJxs");function y(e,t,i){return i?y(e,t).pipe(Object(_.a)(e=>Object(g.a)(e)?i(...e):i(e))):new u.a(i=>{const s=(...e)=>i.next(1===e.length?e[0]:e);let n;try{n=e(s)}catch(a){return void i.error(a)}if(Object(v.a)(t))return()=>t(s,n)})}var f=i("itXk"),m=i("mCNh"),V=i("VRyK"),I=i("IzEk"),S=i("JX91"),k=i("vkgz"),w=i("zx2A");function W(e){return t=>t.lift(new O(e))}class O{constructor(e){this.notifier=e}call(e,t){const i=new C(e),s=Object(w.c)(this.notifier,new w.a(i));return s&&!i.seenValue?(i.add(s),t.subscribe(i)):i}}class C extends w.b{constructor(e){super(e),this.seenValue=!1}notifyNext(){this.seenValue=!0,this.complete()}notifyComplete(){}}var P=i("NfdI"),R=i("eIep"),j=i("5+tZ"),x=i("l7GE"),z=i("ZUHj");function G(...e){return t=>{let i;return"function"==typeof e[e.length-1]&&(i=e.pop()),t.lift(new T(e,i))}}class T{constructor(e,t){this.observables=e,this.project=t}call(e,t){return t.subscribe(new A(e,this.observables,this.project))}}class A extends x.a{constructor(e,t,i){super(e),this.observables=t,this.project=i,this.toRespond=[];const s=t.length;this.values=new Array(s);for(let n=0;n<s;n++)this.toRespond.push(n);for(let n=0;n<s;n++){let e=t[n];this.add(Object(z.a)(this,e,void 0,n))}}notifyNext(e,t,i){this.values[i]=t;const s=this.toRespond;if(s.length>0){const e=s.indexOf(i);-1!==e&&s.splice(e,1)}}notifyComplete(){}_next(e){if(0===this.toRespond.length){const t=[e,...this.values];this.project?this._tryProject(t):this.destination.next(t)}}_tryProject(e){let t;try{t=this.project.apply(this,e)}catch(i){return void this.destination.error(i)}this.destination.next(t)}}var E=i("Kqap"),L=i("7o/Q");class B{constructor(e,t){this.compare=e,this.keySelector=t}call(e,t){return t.subscribe(new Q(e,this.compare,this.keySelector))}}class Q extends L.a{constructor(e,t,i){super(e),this.keySelector=i,this.hasKey=!1,"function"==typeof t&&(this.compare=t)}compare(e,t){return e===t}_next(e){let t;try{const{keySelector:i}=this;t=i?i(e):e}catch(s){return this.destination.error(s)}let i=!1;if(this.hasKey)try{const{compare:e}=this;i=e(this.key,t)}catch(s){return this.destination.error(s)}else this.hasKey=!0;i||(this.key=t,this.destination.next(e))}}var D=i("Cfvw");class ${constructor(e){this.predicate=e}call(e,t){return t.subscribe(new K(e,this.predicate))}}class K extends L.a{constructor(e,t){super(e),this.predicate=t,this.skipping=!0,this.index=0}_next(e){const t=this.destination;this.skipping&&this.tryCallPredicate(e),this.skipping||t.next(e)}tryCallPredicate(e){try{const t=this.predicate(e,this.index++);this.skipping=Boolean(t)}catch(t){this.destination.error(t)}}}var N=i("pLZG");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const M=["youtubeContainer"];let q=(()=>{class e{constructor(e,t){this._ngZone=e,this._youtubeContainer=new h.a,this._destroyed=new h.a,this._playerChanges=new b.a(void 0),this._videoId=new b.a(void 0),this._height=new b.a(390),this._width=new b.a(640),this._startSeconds=new b.a(void 0),this._endSeconds=new b.a(void 0),this._suggestedQuality=new b.a(void 0),this._playerVars=new b.a(void 0),this.ready=this._getLazyEmitter("onReady"),this.stateChange=this._getLazyEmitter("onStateChange"),this.error=this._getLazyEmitter("onError"),this.apiChange=this._getLazyEmitter("onApiChange"),this.playbackQualityChange=this._getLazyEmitter("onPlaybackQualityChange"),this.playbackRateChange=this._getLazyEmitter("onPlaybackRateChange"),this._isBrowser=Object(o.r)(t)}get videoId(){return this._videoId.value}set videoId(e){this._videoId.next(e)}get height(){return this._height.value}set height(e){this._height.next(e||390)}get width(){return this._width.value}set width(e){this._width.next(e||640)}set startSeconds(e){this._startSeconds.next(e)}set endSeconds(e){this._endSeconds.next(e)}set suggestedQuality(e){this._suggestedQuality.next(e)}get playerVars(){return this._playerVars.value}set playerVars(e){this._playerVars.next(e)}ngOnInit(){if(!this._isBrowser)return;let e=Object(p.a)(!0);if(!window.YT||!window.YT.Player){const t=new h.a;this._existingApiReadyCallback=window.onYouTubeIframeAPIReady,window.onYouTubeIframeAPIReady=()=>{this._existingApiReadyCallback&&this._existingApiReadyCallback(),this._ngZone.run(()=>t.next(!0))},e=t.pipe(Object(I.a)(1),Object(S.a)(!1))}const t=function(e,t,i,s,n,a,r){const c=Object(f.b)([t,a]).pipe(G(Object(f.b)([s,n])),Object(_.a)(([e,t])=>{const[i,s]=e,[n,a]=t;return i?{videoId:i,playerVars:s,width:n,height:a}:void 0}));return Object(f.b)([e,c,Object(p.a)(r)]).pipe((o=i,Object(m.a)(function(...e){let t=null;return"function"==typeof e[e.length-1]&&(t=e.pop()),1===e.length&&Object(g.a)(e[0])&&(e=e[0].slice()),i=>i.lift.call(Object(D.a)([i,...e]),new f.a(t))}(o),(l=([e,t])=>!t,e=>e.lift(new $(l))),Object(_.a)(([e])=>e))),Object(E.a)(Y,void 0),e=>e.lift(new B(void 0,void 0)));var o,l}(this._youtubeContainer,this._videoId,e,this._width,this._height,this._playerVars,this._ngZone).pipe(Object(k.a)(e=>{this._playerChanges.next(e)}),(i=e=>{F(e)||e.destroy()},Object(j.a)(e=>e?F(e)?Object(p.a)(e):new u.a(t=>{let s=!1,n=!1;const a=e=>{n=!0,s||(e.target.removeEventListener("onReady",a),t.next(e.target))};return e.addEventListener("onReady",a),()=>{s=!0,n||i(e)}}).pipe(Object(I.a)(1),Object(S.a)(void 0)):Object(p.a)(void 0))),W(this._destroyed),Object(P.a)());var i;t.subscribe(e=>{this._player=e,e&&this._pendingPlayerState&&this._initializePlayer(e,this._pendingPlayerState),this._pendingPlayerState=void 0}),function(e,t,i){Object(f.b)([e,t,i]).subscribe(([e,t,i])=>e&&e.setSize(t,i))}(t,this._width,this._height),function(e,t){Object(f.b)([e,t]).subscribe(([e,t])=>e&&t&&e.setPlaybackQuality(t))}(t,this._suggestedQuality),function(e,t,i,s,n,a){const r=Object(f.b)([i,s]).pipe(Object(_.a)(([e,t])=>({startSeconds:e,endSeconds:t}))),c=r.pipe(X(e,e=>!!e&&!function(e){const t=e.getPlayerState();return-1!==t&&5!==t}(e))),o=t.pipe(X(e,(e,t)=>!!e&&e.videoId!==t)),l=e.pipe(X(Object(f.b)([t,r]),([e,t],i)=>!(!i||e==i.videoId&&!t.startSeconds&&!t.endSeconds)));Object(V.a)(l,o,c).pipe(G(Object(f.b)([e,t,r,n])),Object(_.a)(([e,t])=>t),W(a)).subscribe(([e,t,i,s])=>{t&&e&&(e.videoId=t,e.cueVideoById(Object.assign({videoId:t,suggestedQuality:s},i)))})}(t,this._videoId,this._startSeconds,this._endSeconds,this._suggestedQuality,this._destroyed),t.connect()}createEventsBoundInZone(){return{}}ngAfterViewInit(){this._youtubeContainer.next(this.youtubeContainer.nativeElement)}ngOnDestroy(){this._player&&(this._player.destroy(),window.onYouTubeIframeAPIReady=this._existingApiReadyCallback),this._playerChanges.complete(),this._videoId.complete(),this._height.complete(),this._width.complete(),this._startSeconds.complete(),this._endSeconds.complete(),this._suggestedQuality.complete(),this._youtubeContainer.complete(),this._playerVars.complete(),this._destroyed.next(),this._destroyed.complete()}playVideo(){this._player?this._player.playVideo():this._getPendingState().playbackState=1}pauseVideo(){this._player?this._player.pauseVideo():this._getPendingState().playbackState=2}stopVideo(){this._player?this._player.stopVideo():this._getPendingState().playbackState=5}seekTo(e,t){this._player?this._player.seekTo(e,t):this._getPendingState().seek={seconds:e,allowSeekAhead:t}}mute(){this._player?this._player.mute():this._getPendingState().muted=!0}unMute(){this._player?this._player.unMute():this._getPendingState().muted=!1}isMuted(){return this._player?this._player.isMuted():!!this._pendingPlayerState&&!!this._pendingPlayerState.muted}setVolume(e){this._player?this._player.setVolume(e):this._getPendingState().volume=e}getVolume(){return this._player?this._player.getVolume():this._pendingPlayerState&&null!=this._pendingPlayerState.volume?this._pendingPlayerState.volume:0}setPlaybackRate(e){if(this._player)return this._player.setPlaybackRate(e);this._getPendingState().playbackRate=e}getPlaybackRate(){return this._player?this._player.getPlaybackRate():this._pendingPlayerState&&null!=this._pendingPlayerState.playbackRate?this._pendingPlayerState.playbackRate:0}getAvailablePlaybackRates(){return this._player?this._player.getAvailablePlaybackRates():[]}getVideoLoadedFraction(){return this._player?this._player.getVideoLoadedFraction():0}getPlayerState(){if(this._isBrowser&&window.YT)return this._player?this._player.getPlayerState():this._pendingPlayerState&&null!=this._pendingPlayerState.playbackState?this._pendingPlayerState.playbackState:-1}getCurrentTime(){return this._player?this._player.getCurrentTime():this._pendingPlayerState&&this._pendingPlayerState.seek?this._pendingPlayerState.seek.seconds:0}getPlaybackQuality(){return this._player?this._player.getPlaybackQuality():"default"}getAvailableQualityLevels(){return this._player?this._player.getAvailableQualityLevels():[]}getDuration(){return this._player?this._player.getDuration():0}getVideoUrl(){return this._player?this._player.getVideoUrl():""}getVideoEmbedCode(){return this._player?this._player.getVideoEmbedCode():""}_getPendingState(){return this._pendingPlayerState||(this._pendingPlayerState={}),this._pendingPlayerState}_initializePlayer(e,t){const{playbackState:i,playbackRate:s,volume:n,muted:a,seek:r}=t;switch(i){case 1:e.playVideo();break;case 2:e.pauseVideo();break;case 5:e.stopVideo()}null!=s&&e.setPlaybackRate(s),null!=n&&e.setVolume(n),null!=a&&(a?e.mute():e.unMute()),null!=r&&e.seekTo(r.seconds,r.allowSeekAhead)}_getLazyEmitter(e){return this._playerChanges.pipe(Object(R.a)(t=>t?y(i=>{t.addEventListener(e,i)},i=>{try{t.removeEventListener&&t.removeEventListener(e,i)}catch(s){}}):Object(p.a)()),e=>new u.a(t=>e.subscribe({next:e=>this._ngZone.run(()=>t.next(e)),error:e=>t.error(e),complete:()=>t.complete()})),W(this._destroyed))}}return e.\u0275fac=function(t){return new(t||e)(n.Qb(n.F),n.Qb(n.I))},e.\u0275cmp=n.Kb({type:e,selectors:[["youtube-player"]],viewQuery:function(e,t){if(1&e&&n.Ec(M,1),2&e){let e;n.rc(e=n.ec())&&(t.youtubeContainer=e.first)}},inputs:{videoId:"videoId",height:"height",width:"width",startSeconds:"startSeconds",endSeconds:"endSeconds",suggestedQuality:"suggestedQuality",playerVars:"playerVars",showBeforeIframeApiLoads:"showBeforeIframeApiLoads"},outputs:{ready:"ready",stateChange:"stateChange",error:"error",apiChange:"apiChange",playbackQualityChange:"playbackQualityChange",playbackRateChange:"playbackRateChange"},decls:2,vars:0,consts:[["youtubeContainer",""]],template:function(e,t){1&e&&n.Rb(0,"div",null,0)},encapsulation:2,changeDetection:0}),e})();function Y(e,[t,i,s]){if(e&&i&&e.playerVars!==i.playerVars)e.destroy();else{if(!i)return void(e&&e.destroy());if(e)return e}const n=s.runOutsideAngular(()=>new YT.Player(t,i));return n.videoId=i.videoId,n.playerVars=i.playerVars,n}function F(e){return"getPlayerStatus"in e}function X(e,t){return Object(m.a)(G(e),Object(N.a)(([e,i])=>t(i,e)),Object(_.a)(([e])=>e))}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let Z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.Ob({type:e}),e.\u0275inj=n.Nb({}),e})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var H=i("+PY+"),U=i("AytR"),J=i("4u49"),ee=i("jhN1"),te=i("xOb2"),ie=i("Hvpu"),se=i("CE6K");let ne=(()=>{class e{constructor(e,t,i){this.render2=e,this.el=t,this.platformId=i,this.spiedTags=[],this.sectionChange=new n.q}onScroll(e){if(!Object(o.r)(this.platformId))return;let t;const i=this.el.nativeElement.children,s=e.target.scrollTop,n=e.target.offsetTop+350;for(let a=0;a<i.length;a++){const e=i[a];this.spiedTags.some(t=>t===e.tagName)&&e.offsetTop-n<=s&&(t="p/"+e.id)}this.AddClassType(t),this.AddClassType(t,"nav-mobile__link","nav-mobile__link--active"),this.AddClassType(t,"footer__nav-item-mobile","footer__nav-item-mobile--active"),t!==this.currentSection&&(this.currentSection=t,this.sectionChange.emit(this.currentSection))}AddClassType(e,t="nav__link",i="nav__link--active"){const s=this.render2.selectRootElement("app-main",!0).querySelector("."+i);null!=s?s.id.replace("_","")!==e.replace("p/","")&&s.classList.remove(i):this.render2.selectRootElement("app-main",!0).querySelectorAll("."+t).forEach(t=>{null!=t&&t.id.replace("_","").replace("-mobile","")===e.replace("p/","")&&t.classList.add(i)})}}return e.\u0275fac=function(t){return new(t||e)(n.Qb(n.L),n.Qb(n.o),n.Qb(n.I))},e.\u0275dir=n.Lb({type:e,selectors:[["","appScrollSpy",""]],hostBindings:function(e,t){1&e&&n.dc("scroll",function(e){return t.onScroll(e)})},inputs:{spiedTags:"spiedTags"},outputs:{sectionChange:"sectionChange"}}),e})(),ae=(()=>{class e{constructor(e,t){this.platformId=e,this.modalService=t,this.Image={svgCase:"/assets/images/icons/case.svg#case",characters:"/assets/images/characters.png"}}openModal(e,t){if(!Object(o.r)(this.platformId))return`href="${U.a.vkSupportInvite}"`;this.modalService.open(`${e}${void 0!==t?+t:""}`)}closeModal(e,t){this.modalService.close(`${e}${void 0!==t?t:""}`)}}return e.\u0275fac=function(t){return new(t||e)(n.Qb(n.I),n.Qb(se.a))},e.\u0275cmp=n.Kb({type:e,selectors:[["app-benefits"]],decls:56,vars:41,consts:[[1,"advantages-section"],[1,"container"],[1,"row"],[1,"col-xl-3","col-lg-6","col-md-6","col-sm-12"],[1,"advantage"],["svgClass","advantage__icon","src","/assets/images/icons/settings.svg#settings"],[1,"advantage__title"],[1,"advantage__desc"],["svgClass","advantage__icon","src","/assets/images/icons/shield.svg#shield"],["svgClass","advantage__icon","src","/assets/images/icons/refresh.svg#refresh"],["svgClass","advantage__icon",3,"src"],[1,"promo-section"],["alt","characters",1,"promo-section__characters",3,"src"],[1,"promo-section__title"],["routerLink","/login",1,"button"]],template:function(e,t){1&e&&(n.Wb(0,"section",0),n.Wb(1,"div",1),n.Wb(2,"div",2),n.Wb(3,"div",3),n.Wb(4,"div",4),n.Rb(5,"svg-icon",5),n.Wb(6,"h2",6),n.zc(7),n.gc(8,"translate"),n.Vb(),n.Wb(9,"span",7),n.zc(10),n.gc(11,"translate"),n.Vb(),n.Vb(),n.Vb(),n.Wb(12,"div",3),n.Wb(13,"div",4),n.Rb(14,"svg-icon",8),n.Wb(15,"h2",6),n.zc(16),n.gc(17,"translate"),n.Rb(18,"br"),n.zc(19),n.gc(20,"translate"),n.Vb(),n.Wb(21,"span",7),n.zc(22),n.gc(23,"translate"),n.Vb(),n.Vb(),n.Vb(),n.Wb(24,"div",3),n.Wb(25,"div",4),n.Rb(26,"svg-icon",9),n.Wb(27,"h2",6),n.zc(28),n.gc(29,"translate"),n.Vb(),n.Wb(30,"span",7),n.zc(31),n.gc(32,"translate"),n.Vb(),n.Vb(),n.Vb(),n.Wb(33,"div",3),n.Wb(34,"div",4),n.Rb(35,"svg-icon",10),n.Wb(36,"h2",6),n.zc(37),n.gc(38,"translate"),n.Vb(),n.Wb(39,"span",7),n.zc(40),n.gc(41,"translate"),n.Vb(),n.Vb(),n.Vb(),n.Vb(),n.Vb(),n.Vb(),n.Wb(42,"section",11),n.Rb(43,"img",12),n.Wb(44,"div",1),n.Wb(45,"h3",13),n.zc(46),n.gc(47,"translate"),n.Wb(48,"span"),n.zc(49),n.gc(50,"translate"),n.Vb(),n.zc(51),n.gc(52,"translate"),n.Vb(),n.Wb(53,"div",14),n.zc(54),n.gc(55,"translate"),n.Vb(),n.Vb(),n.Vb()),2&e&&(n.Gb(7),n.Ac(n.hc(8,15,"\u0423\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438")),n.Gb(3),n.Bc(" ",n.hc(11,17,"\u0412\u0438\u0434\u0438\u043c\u043e\u0441\u0442\u044c \u0442\u0435\u043b\u0435\u043f\u043e\u0440\u0442\u0430, \u0440\u043e\u0448\u0430\u043d\u0430 \u0438 \u0441\u043a\u0440\u044b\u0442\u044b\u0445 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0435\u0439 \u0432 \u0442\u0443\u043c\u0430\u043d\u0435 \u0432\u043e\u0439\u043d\u044b")," "),n.Gb(6),n.Bc(" ",n.hc(17,19,"\u0425\u043e\u0440\u043e\u0448\u0430\u044f")," "),n.Gb(3),n.Bc(" ",n.hc(20,21,"\u0437\u0430\u0449\u0438\u0442\u0430")," "),n.Gb(3),n.Bc(" ",n.hc(23,23,"Octarine \u0438\u043c\u0435\u0435\u0442 \u043e\u0431\u0445\u043e\u0434 VAC, \u0445\u0443\u043c\u0430\u043d\u0438\u0437\u0430\u0442\u043e\u0440, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0432\u044b \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0443")," "),n.Gb(6),n.Bc(" ",n.hc(29,25,"\u041f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u044b\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f")," "),n.Gb(3),n.Bc(" ",n.hc(32,27,"\u041d\u0430\u0448\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432 \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e \u0434\u043e\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u0447\u0438\u0442 \u043d\u043e\u0432\u0435\u0439\u0448\u0438\u043c\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u043c\u0438")," "),n.Gb(4),n.lc("src",t.Image.svgCase),n.Gb(2),n.Bc(" ",n.hc(38,29,"\u041a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430")," "),n.Gb(3),n.Bc(" ",n.hc(41,31,"\u041e\u043f\u044b\u0442\u043d\u044b\u0435 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u044b \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438 \u0432\u0441\u0435\u0433\u0434\u0430 \u0433\u043e\u0442\u043e\u0432\u044b \u043e\u0442\u0432\u0435\u0442\u0438\u0442\u044c \u043d\u0430 \u0432\u0430\u0448\u0438 \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u0438 \u043f\u043e\u043c\u043e\u0447\u044c \u0432 \u0440\u0435\u0448\u0435\u043d\u0438\u0438 \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u044e\u0449\u0438\u0445 \u043f\u0440\u043e\u0431\u043b\u0435\u043c")," "),n.Gb(3),n.lc("src",t.Image.characters,n.wc),n.Gb(3),n.Bc(" ",n.hc(47,33,"\u041f\u043e\u0431\u0435\u0436\u0434\u0430\u0439")," "),n.Gb(3),n.Ac(n.hc(50,35,"\u0432\u043c\u0435\u0441\u0442\u0435")),n.Gb(2),n.Bc(" ",n.hc(52,37,"\u0441 Octarine"),"! "),n.Gb(3),n.Bc(" ",n.hc(55,39,"\u041f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e")," "))},directives:[d.b,c.d],pipes:[r.c],encapsulation:2}),e})(),re=(()=>{class e{constructor(e,t,i){this.render2=e,this.native=t,this.platformId=i}ngOnInit(){this.setAttribute("home",!0),this.setAttribute("price",!0),this.setAttribute("benefits",!0)}VK_SUPPORT_INVITE(){if(!Object(o.r)(this.platformId))return`href="${U.a.vkSupportInvite}"`;window.open(U.a.vkSupportInvite,"_blank")}DATA_PROCESSING(){if(!Object(o.r)(this.platformId))return`href="${U.a.dataProcessing}"`;window.open(U.a.dataProcessing,"_blank")}PRIVACY_POLICY(){if(!Object(o.r)(this.platformId))return`href="${U.a.privacyPolicy}"`;window.open(U.a.privacyPolicy,"_blank")}TERMS_OF_USE(){if(!Object(o.r)(this.platformId))return`href="${U.a.termsofuse}"`;window.open(U.a.termsofuse,"_blank")}DISCROD_INVITE(){if(!Object(o.r)(this.platformId))return`href="${U.a.discordInvite}"`;window.open(U.a.discordInvite,"_blank")}VK_INVITE(){if(!Object(o.r)(this.platformId))return`href="${U.a.vkInvite}"`;window.open(U.a.vkInvite,"_blank")}scrollTo(e,t){if(!Object(o.r)(this.platformId))return;const i="nav__link--active",s=this.native.nativeElement;s.querySelectorAll(".nav__link").forEach(e=>{e.classList.remove(i)}),s.classList.contains(i)||t.srcElement.classList.add(i);const n=this.render2.selectRootElement("app-main",!0).querySelector(`#${e}`);null!=n&&n.scrollIntoView({behavior:"smooth"})}setAttribute(e,t=!1){if(Object(o.r)(this.platformId))return;const i=this.native.nativeElement.querySelector(`#_${e}`);null!=i&&i.setAttribute("href",t?`/p/${e}`:`/${e}`)}}return e.\u0275fac=function(t){return new(t||e)(n.Qb(n.L),n.Qb(n.o),n.Qb(n.I))},e.\u0275cmp=n.Kb({type:e,selectors:[["app-footer"]],decls:45,vars:21,consts:[[1,"footer"],[1,"footer__mobile"],[1,"container"],[1,"footer__nav-mobile"],["id","_home","data-link","home",1,"footer__nav-item-mobile","footer__nav-item-mobile--active",3,"click"],["svgClass","footer__nav-item-mobile-icon","src","/assets/images/icons/home.svg#home"],["id","_benefits","data-link","benefits",1,"footer__nav-item-mobile",3,"click"],["svgClass","footer__nav-item-mobile-icon","src","/assets/images/icons/star.svg#star"],[1,"footer__desktop"],[1,"footer__content"],["id","_home",1,"logo",3,"click"],["src","/assets/images/logo.png","alt","logo",1,"logo__image"],[1,"social-media"],[1,"social-media__text"],[1,"social-media__socials"],["target","_blank","rel","noreferrer",1,"social-media__link",3,"click"],["svgClass","social-media__icon","src","/assets/images/icons/vk.svg#vk"],["svgClass","social-media__icon","src","/assets/images/icons/disk.svg#disk"],[1,"footer__navigation"],[1,"footer__navigation-list"],[1,"footer__navigation-item"],["rel","noreferrer","target","_blank",1,"footer__navigation-link",3,"click"],["target","_blank","rel","noreferrer",1,"footer__navigation-link",3,"click"]],template:function(e,t){1&e&&(n.Wb(0,"footer",0),n.Wb(1,"div",1),n.Wb(2,"div",2),n.Wb(3,"nav",3),n.Wb(4,"a",4),n.dc("click",function(e){return t.scrollTo("home",e)}),n.Rb(5,"svg-icon",5),n.zc(6),n.gc(7,"translate"),n.Vb(),n.Wb(8,"a",6),n.dc("click",function(e){return t.scrollTo("benefits",e)}),n.Rb(9,"svg-icon",7),n.zc(10),n.gc(11,"translate"),n.Vb(),n.Vb(),n.Vb(),n.Vb(),n.Wb(12,"div",8),n.Wb(13,"div",2),n.Wb(14,"div",9),n.Wb(15,"a",10),n.dc("click",function(e){return t.scrollTo("home",e)}),n.Rb(16,"img",11),n.Vb(),n.Wb(17,"div",12),n.Wb(18,"span",13),n.zc(19),n.gc(20,"translate"),n.Vb(),n.Wb(21,"div",14),n.Wb(22,"a",15),n.dc("click",function(){return t.VK_INVITE()}),n.Rb(23,"svg-icon",16),n.Vb(),n.Wb(24,"a",15),n.dc("click",function(){return t.DISCROD_INVITE()}),n.Rb(25,"svg-icon",17),n.Vb(),n.Vb(),n.Vb(),n.Vb(),n.Wb(26,"nav",18),n.Wb(27,"ul",19),n.Wb(28,"li",20),n.Wb(29,"a",21),n.dc("click",function(){return t.PRIVACY_POLICY()}),n.zc(30),n.gc(31,"translate"),n.Vb(),n.Vb(),n.Wb(32,"li",20),n.Wb(33,"a",22),n.dc("click",function(){return t.TERMS_OF_USE()}),n.zc(34),n.gc(35,"translate"),n.Vb(),n.Vb(),n.Vb(),n.Wb(36,"ul",19),n.Wb(37,"li",20),n.Wb(38,"a",22),n.dc("click",function(){return t.DATA_PROCESSING()}),n.zc(39),n.gc(40,"translate"),n.Vb(),n.Vb(),n.Wb(41,"li",20),n.Wb(42,"a",22),n.dc("click",function(){return t.VK_SUPPORT_INVITE()}),n.zc(43),n.gc(44,"translate"),n.Vb(),n.Vb(),n.Vb(),n.Vb(),n.Vb(),n.Vb(),n.Vb()),2&e&&(n.Gb(6),n.Bc(" ",n.hc(7,7,"\u0413\u043b\u0430\u0432\u043d\u0430\u044f")," "),n.Gb(4),n.Bc(" ",n.hc(11,9,"\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430")," "),n.Gb(9),n.Bc(" ",n.hc(20,11,"\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0435\u0442\u0438"),": "),n.Gb(11),n.Bc(" ",n.hc(31,13,"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438")," "),n.Gb(4),n.Bc(" ",n.hc(35,15,"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0435 \u0441\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435")," "),n.Gb(5),n.Bc(" ",n.hc(40,17,"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445")," "),n.Gb(4),n.Bc(" ",n.hc(44,19,"\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f \u0441 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u043e\u0439")," "))},directives:[d.b],pipes:[r.c],encapsulation:2}),e})();var ce=i("fDoI");let oe=!1,le=(()=>{class e{constructor(e,t){this.platformId=e,this.native=t,this.index=-1,this.videoId="",this.isReady=!1,this.Data=new n.q}ngAfterViewInit(){if(!Object(o.r)(this.platformId)||oe)return;if(null!=document.getElementById("youtube"))return void(oe=!0);const e=document.createElement("script");e.src="https://www.youtube.com/iframe_api",e.setAttribute("id","youtube"),document.body.appendChild(e),oe=!0}savePlayer(e){this.player={pl:e,id:this.index},this.Data.emit(this.player),H.a.PlayerData.push(this.player)}ngOnDestroy(){this.index=-1,oe=!1,this.player=void 0,H.a.PlayerData=[]}}return e.\u0275fac=function(t){return new(t||e)(n.Qb(n.I),n.Qb(n.L))},e.\u0275cmp=n.Kb({type:e,selectors:[["app-youtube"]],inputs:{index:"index",videoId:"videoId",isReady:"isReady"},outputs:{Data:"Data"},decls:1,vars:2,consts:[[3,"index","videoId","ready"]],template:function(e,t){1&e&&(n.Wb(0,"youtube-player",0),n.dc("ready",function(e){return t.savePlayer(e)}),n.Vb()),2&e&&n.lc("index",t.index)("videoId",t.videoId)},directives:[q],encapsulation:2}),e})();function de(e,t){1&e&&n.Rb(0,"div",21)}function he(e,t){if(1&e){const e=n.Xb();n.Wb(0,"div",28),n.Wb(1,"div",29),n.Wb(2,"div",30),n.Rb(3,"img",31),n.Wb(4,"div",32),n.zc(5),n.Vb(),n.Wb(6,"div",33),n.dc("click",function(){n.uc(e);const i=t.index;return n.fc(2).openModal("videoId",i)}),n.Rb(7,"svg-icon",34),n.Vb(),n.Vb(),n.Wb(8,"div",35),n.Wb(9,"h3",36),n.zc(10),n.Vb(),n.Wb(11,"span",37),n.zc(12),n.gc(13,"translate"),n.Vb(),n.Vb(),n.Vb(),n.Vb()}if(2&e){const e=t.$implicit,i=n.fc(2);n.Gb(3),n.lc("src",e.preview_image,n.wc),n.Gb(2),n.Bc(" ",e.preview_time," "),n.Gb(2),n.lc("src",i.preloadImage.ImageData.play),n.Gb(3),n.Bc(" ",e.name," "),n.Gb(2),n.Bc(" ",n.hc(13,5,e.description)," ")}}function be(e,t){if(1&e){const e=n.Xb();n.Wb(0,"section",22),n.Wb(1,"div",2),n.Wb(2,"h2",23),n.zc(3),n.gc(4,"translate"),n.Vb(),n.Wb(5,"div",24),n.yc(6,he,14,7,"div",25),n.gc(7,"async"),n.Vb(),n.Wb(8,"div",26),n.dc("click",function(){return n.uc(e),n.fc().ShowVideo()}),n.Wb(9,"div",27),n.zc(10),n.gc(11,"translate"),n.Vb(),n.Vb(),n.Vb(),n.Vb()}if(2&e){const e=n.fc();n.Gb(3),n.Bc(" ",n.hc(4,3,"\u0412\u0438\u0434\u0435\u043e-\u043e\u0431\u0437\u043e\u0440\u044b")," "),n.Gb(3),n.lc("ngForOf",n.hc(7,5,e.Data)),n.Gb(4),n.Bc(" ",n.hc(11,7,"\u0420\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u0432\u0441\u0435 \u0432\u0438\u0434\u0435\u043e")," ")}}function pe(e,t){if(1&e){const e=n.Xb();n.Wb(0,"app-modal",39),n.Wb(1,"div",40),n.Wb(2,"div",41),n.dc("click",function(){n.uc(e);const i=t.index;return n.fc(2).closeModal("videoId",i)}),n.Rb(3,"svg-icon",42),n.Vb(),n.Wb(4,"app-youtube",43),n.dc("Data",function(t){return n.uc(e),n.fc(2).DataPlayer(t)}),n.Vb(),n.Vb(),n.Vb()}if(2&e){const e=t.$implicit,i=t.index;n.nc("id","videoId",i,""),n.Gb(4),n.lc("index",i)("videoId",e.ycode)}}function ue(e,t){if(1&e&&(n.Wb(0,"div"),n.yc(1,pe,5,3,"app-modal",38),n.gc(2,"async"),n.Vb()),2&e){const e=n.fc();n.Gb(1),n.lc("ngForOf",n.hc(2,1,e.Data))}}const ge=function(){return["DIV"]},ve=[{path:":sectionId",component:(()=>{class e{constructor(e,t,i,s,n,a,r,c,o){this.title=e,this.ref=t,this.location=i,this.route=s,this.storage=n,this.preloadImage=a,this.modalService=r,this.translate=c,this.platformId=o,this.Data=H.a.VideoData,this.currentSection="home",this.player=[]}ngOnInit(){this.SetTitle(),void 0===this.HandlleOnchangeLangs&&(this.HandlleOnchangeLangs=this.translate.onLangChange.subscribe(()=>this.SetTitle()))}DataPlayer(e){this.player.push(e)}PmVK(){if(!Object(o.r)(this.platformId))return`href="${U.a.vkSupportInvite}"`;window.open(U.a.vkSupportInvite,"_blank")}openModal(e,t){if(!Object(o.r)(this.platformId))return`href="${U.a.vkSupportInvite}"`;this.modalService.open(`${e}${void 0!==t?+t:""}`);const i=this.player.find(e=>e.id===t);void 0!==i&&i.pl.target.playVideo()}closeModal(e,t){this.modalService.close(`${e}${void 0!==t?t:""}`);const i=this.player.find(e=>e.id===t);void 0!==i&&i.pl.target.stopVideo()}ngAfterViewInit(){this.ScrollInit(),this.VideoCard(window.innerWidth,this.ref.nativeElement)}OnResize(e){const t=e.target.innerWidth,i=this.ref.nativeElement;if(this.VideoCard(e.target.innerWidth,i),t>767)return;const s=i.querySelector(".button.button--disabled");null!=s&&s.classList.contains("hide")&&(s.classList.remove("hide"),s.setAttribute("style",""))}ShowVideo(){if(!Object(o.r)(this.platformId))return;const e=this.ref.nativeElement;this.VideoShow(e);const t=e.querySelector(".button.button--disabled");null==t||t.classList.contains("hide")||(t.classList.add("hide"),t.setAttribute("style","display: none;"))}onSectionChange(e){this.location.go(e),this.currentSection=e}scrollTo(e){if(!Object(o.r)(this.platformId))return;const t=this.ref.nativeElement.querySelector("#"+e);null!=t&&t.scrollIntoView({behavior:"smooth"})}ngOnDestroy(){var e,t;clearTimeout(this.handleScroll),null===(e=this.handleRoute)||void 0===e||e.unsubscribe(),null===(t=this.HandlleOnchangeLangs)||void 0===t||t.unsubscribe()}ScrollInit(){this.handleRoute=this.route.params.subscribe(e=>{this.handleScroll=setTimeout(()=>{this.currentSection=e.sectionId,this.scrollTo(this.currentSection)},40)})}VideoCard(e,t){if(!Object(o.r)(this.platformId))return;const i=t.querySelectorAll(".video-section .col-xl-4");if(e<=767)for(let s=0;s<i.length;s++)s>2&&(i[s].classList.contains("hide")||i[s].classList.add("hide"));else this.VideoShow(t)}VideoShow(e){e.querySelectorAll(".video-section .col-xl-4").forEach(e=>{null!=e&&e.classList.contains("hide")&&e.classList.remove("hide")})}SetTitle(){this.title.setTitle(this.storage.instant(Object(J.a)("Octarine - \u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u0447\u0438\u0442 \u0434\u043b\u044f \u0414\u043e\u0442\u0430 2")))}}return e.\u0275fac=function(t){return new(t||e)(n.Qb(ee.c),n.Qb(n.o),n.Qb(o.h),n.Qb(c.a),n.Qb(te.a),n.Qb(ie.a),n.Qb(se.a),n.Qb(r.d),n.Qb(n.I))},e.\u0275cmp=n.Kb({type:e,selectors:[["app-main"]],hostBindings:function(e,t){1&e&&n.dc("resize",function(e){return t.OnResize(e)},!1,n.tc)},decls:65,vars:50,consts:[["appScrollSpy","",1,"content-wrapper","section",3,"spiedTags","sectionChange"],["id","home",1,"main-section"],[1,"container"],[1,"main-section__title"],["routerLink","/login","rel","noreferrer","id","free-popup",1,"button","button--free-js"],["id","benefits"],["style","margin-bottom: 20px;",4,"ngIf"],["class","video-section",4,"ngIf"],[4,"ngIf"],["id","open-free-popup"],["id","free-popup",1,"free-popup","mfp-hide"],[1,"free-popup__close",3,"click"],["svgClass","free-popup__close-icon","src","/assets/images/icons/close.svg#close"],[1,"free-popup__title"],[1,"free-popup__desc"],[1,"free-popup__list"],[1,"free-popup__list-item"],[1,"free-popup__list-num"],[1,"free-popup__list-text"],["rel","noreferrer",1,"free-popup__link",3,"click"],["rel","noreferrer",1,"button",3,"click"],[2,"margin-bottom","20px"],[1,"video-section"],[1,"section-title"],[1,"row"],["class","col-xl-4 col-lg-6 col-md-6",4,"ngFor","ngForOf"],[1,"video-section__show-all-videos",3,"click"],[1,"button","button--disabled"],[1,"col-xl-4","col-lg-6","col-md-6"],[1,"video-card"],[1,"video-card__preview"],["width","100%","height","100%","alt","",1,"video-card__image",3,"src"],[1,"video-card__duration"],[1,"video-card__overlay",3,"click"],["svgClass","video-card__play",3,"src"],[1,"video-card__content"],[1,"video-card__title"],[1,"video-card__desc"],[3,"id",4,"ngFor","ngForOf"],[3,"id"],["id","video-popup",1,"video-popup","mfp-hide"],[1,"video-popup__close",3,"click"],["svgClass","video-popup__close-icon","src","/assets/images/icons/close.svg#close"],[3,"index","videoId","Data"]],template:function(e,t){1&e&&(n.Wb(0,"div",0),n.dc("sectionChange",function(e){return t.onSectionChange(e)}),n.Wb(1,"div",1),n.Wb(2,"div",2),n.Wb(3,"h1",3),n.zc(4),n.gc(5,"translate"),n.Rb(6,"br"),n.zc(7),n.gc(8,"translate"),n.Vb(),n.Wb(9,"a",4),n.zc(10),n.gc(11,"translate"),n.Vb(),n.Vb(),n.Vb(),n.Wb(12,"div",5),n.Rb(13,"app-benefits"),n.yc(14,de,1,0,"div",6),n.gc(15,"async"),n.yc(16,be,12,9,"section",7),n.gc(17,"async"),n.Vb(),n.Rb(18,"app-footer"),n.Vb(),n.yc(19,ue,3,3,"div",8),n.gc(20,"async"),n.Wb(21,"app-modal",9),n.Wb(22,"div",10),n.Wb(23,"div",11),n.dc("click",function(){return t.closeModal("open-free-popup")}),n.Rb(24,"svg-icon",12),n.Vb(),n.Wb(25,"h3",13),n.zc(26),n.gc(27,"translate"),n.Vb(),n.Wb(28,"span",14),n.zc(29),n.gc(30,"translate"),n.Vb(),n.Wb(31,"ul",15),n.Wb(32,"li",16),n.Wb(33,"div",17),n.zc(34," 1 "),n.Vb(),n.Wb(35,"div",18),n.zc(36),n.gc(37,"translate"),n.gc(38,"translate"),n.Wb(39,"a",19),n.dc("click",function(){return t.PmVK()}),n.zc(40),n.gc(41,"translate"),n.Vb(),n.zc(42),n.gc(43,"translate"),n.Vb(),n.Vb(),n.Wb(44,"li",16),n.Wb(45,"div",17),n.zc(46," 2 "),n.Vb(),n.Wb(47,"div",18),n.zc(48),n.gc(49,"translate"),n.Vb(),n.Vb(),n.Wb(50,"li",16),n.Wb(51,"div",17),n.zc(52," 3 "),n.Vb(),n.Wb(53,"div",18),n.zc(54),n.gc(55,"translate"),n.Vb(),n.Vb(),n.Wb(56,"li",16),n.Wb(57,"div",17),n.zc(58," 4 "),n.Vb(),n.Wb(59,"div",18),n.zc(60),n.gc(61,"translate"),n.Vb(),n.Vb(),n.Vb(),n.Wb(62,"a",20),n.dc("click",function(){return t.PmVK()}),n.zc(63),n.gc(64,"translate"),n.Vb(),n.Vb(),n.Vb()),2&e&&(n.lc("spiedTags",n.oc(49,ge)),n.Gb(4),n.Bc(" ",n.hc(5,17,"\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u0447\u0438\u0442")," "),n.Gb(3),n.Bc(" ",n.hc(8,19,"\u0434\u043b\u044f Dota 2")," "),n.Gb(3),n.Bc(" ",n.hc(11,21,"\u041f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e")," "),n.Gb(4),n.lc("ngIf",n.hc(15,23,t.Data).length<=0),n.Gb(2),n.lc("ngIf",n.hc(17,25,t.Data).length>0),n.Gb(3),n.lc("ngIf",n.hc(20,27,t.Data).length>0),n.Gb(7),n.Bc(" ",n.hc(27,29,"\u041f\u0440\u043e\u0431\u043d\u044b\u0439 \u043f\u0435\u0440\u0438\u043e\u0434")," "),n.Gb(3),n.Bc(" ",n.hc(30,31,"\u041c\u044b \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c \u043f\u0440\u043e\u0431\u043d\u044b\u0439 \u043f\u0435\u0440\u0438\u043e\u0434 \u0432\u0441\u0435\u043c \u043d\u0430\u0448\u0438\u043c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c"),". "),n.Gb(7),n.Cc(" ",n.hc(37,33,"\u041c\u044b \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c \u043f\u0440\u043e\u0431\u043d\u044b\u0439 \u043f\u0435\u0440\u0438\u043e\u0434 \u0432\u0441\u0435\u043c \u043d\u0430\u0448\u0438\u043c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c")," ",n.hc(38,35,"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435")," "),n.Gb(4),n.Ac(n.hc(41,37,"\u043d\u0430\u043c \u0432 \u0433\u0440\u0443\u043f\u043f\u0443")),n.Gb(2),n.Bc(" ",n.hc(43,39,"\u043a\u043e\u0434\u043e\u0432\u0443\u044e \u0444\u0440\u0430\u0437\u0443 \u201c\u043f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e\u201d \u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u043f\u0440\u043e\u043c\u043e\u043a\u043e\u0434.")," "),n.Gb(6),n.Bc(" ",n.hc(49,41,"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c \u043d\u0430 \u0441\u0430\u0439\u0442\u0435 \u0438 \u0430\u043a\u0442\u0438\u0432\u0438\u0440\u0443\u0439\u0442\u0435 \u043f\u0440\u043e\u043c\u043e\u043a\u043e\u0434 \u0432 \u043b\u0438\u0447\u043d\u043e\u043c \u043a\u0430\u0431\u0438\u043d\u0435\u0442\u0435"),". "),n.Gb(6),n.Bc(" ",n.hc(55,43,"\u0421\u043a\u0430\u0447\u0430\u0439\u0442\u0435 \u0438 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u043a\u043b\u0438\u0435\u043d\u0442"),". "),n.Gb(6),n.Bc(" ",n.hc(61,45,"\u041c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u0445\u043e\u0434\u0438\u0442\u044c \u0432 \u0438\u0433\u0440\u0443"),". "),n.Gb(3),n.Bc(" ",n.hc(64,47,"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c")," "))},directives:[ne,c.f,ae,o.l,re,ce.a,d.b,o.k,le],pipes:[r.c,o.b],encapsulation:2}),e})()}];let _e=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.Ob({type:e}),e.\u0275inj=n.Nb({imports:[[s.a,a,o.c,r.b,Z,l.h,d.a.forRoot(),c.g.forChild(ve)],c.g]}),e})()}}]);