"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[95113],{95113:(me,z,h)=>{h.d(z,{gD:()=>de,LD:()=>pe});var C=h(98184),S=h(36895),i=h(94650),g=h(3238),T=h(59549),R=h(30531),x=h(12693),N=h(40445),O=h(21281),M=h(77579);class K{constructor(n=!1,e,t=!0,s){this._multiple=n,this._emitChanges=t,this.compareWith=s,this._selection=new Set,this._deselectedToEmit=[],this._selectedToEmit=[],this.changed=new M.x,e&&e.length&&(n?e.forEach(a=>this._markSelected(a)):this._markSelected(e[0]),this._selectedToEmit.length=0)}get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}select(...n){this._verifyValueAssignment(n),n.forEach(t=>this._markSelected(t));const e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...n){this._verifyValueAssignment(n),n.forEach(t=>this._unmarkSelected(t));const e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...n){this._verifyValueAssignment(n);const e=this.selected,t=new Set(n);n.forEach(a=>this._markSelected(a)),e.filter(a=>!t.has(a)).forEach(a=>this._unmarkSelected(a));const s=this._hasQueuedChanges();return this._emitChangeEvent(),s}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();const e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){if(this.compareWith){for(const e of this._selection)if(this.compareWith(e,n))return!0;return!1}return this._selection.has(n)}isEmpty(){return 0===this._selection.size}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){}_hasQueuedChanges(){return!(!this._deselectedToEmit.length&&!this._selectedToEmit.length)}}var u=h(29521),w=h(24006),W=h(49770),D=h(56451),V=h(68675),F=h(63900),A=h(95698),L=h(39300),H=h(54004),U=h(71884),y=h(82722),p=h(37340);const Q=["trigger"],Z=["panel"];function X(l,n){if(1&l&&(i.TgZ(0,"span",8),i._uU(1),i.qZA()),2&l){const e=i.oxw();i.xp6(1),i.Oqu(e.placeholder)}}function J(l,n){if(1&l&&(i.TgZ(0,"span",12),i._uU(1),i.qZA()),2&l){const e=i.oxw(2);i.xp6(1),i.Oqu(e.triggerValue)}}function j(l,n){1&l&&i.Hsn(0,0,["*ngSwitchCase","true"])}function q(l,n){if(1&l&&(i.TgZ(0,"span",9),i.YNc(1,J,2,1,"span",10),i.YNc(2,j,1,0,"ng-content",11),i.qZA()),2&l){const e=i.oxw();i.Q6J("ngSwitch",!!e.customTrigger),i.xp6(2),i.Q6J("ngSwitchCase",!0)}}function $(l,n){if(1&l){const e=i.EpF();i.TgZ(0,"div",13)(1,"div",14,15),i.NdJ("@transformPanel.done",function(s){i.CHM(e);const a=i.oxw();return i.KtG(a._panelDoneAnimatingStream.next(s.toState))})("keydown",function(s){i.CHM(e);const a=i.oxw();return i.KtG(a._handleKeydown(s))}),i.Hsn(3,1),i.qZA()()}if(2&l){const e=i.oxw();i.Q6J("@transformPanelWrap",void 0),i.xp6(1),i.Gre("mat-select-panel ",e._getPanelTheme(),""),i.Udp("transform-origin",e._transformOrigin)("font-size",e._triggerFontSize,"px"),i.Q6J("ngClass",e.panelClass)("@transformPanel",e.multiple?"showing-multiple":"showing"),i.uIk("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}const ee=[[["mat-select-trigger"]],"*"],te=["mat-select-trigger","*"],B={transformPanelWrap:(0,p.X$)("transformPanelWrap",[(0,p.eR)("* => void",(0,p.IO)("@transformPanel",[(0,p.pV)()],{optional:!0}))]),transformPanel:(0,p.X$)("transformPanel",[(0,p.SB)("void",(0,p.oB)({transform:"scaleY(0.8)",minWidth:"100%",opacity:0})),(0,p.SB)("showing",(0,p.oB)({opacity:1,minWidth:"calc(100% + 32px)",transform:"scaleY(1)"})),(0,p.SB)("showing-multiple",(0,p.oB)({opacity:1,minWidth:"calc(100% + 64px)",transform:"scaleY(1)"})),(0,p.eR)("void => *",(0,p.jt)("120ms cubic-bezier(0, 0, 0.2, 1)")),(0,p.eR)("* => void",(0,p.jt)("100ms 25ms linear",(0,p.oB)({opacity:0})))])};let P=0;const b=256,G=new i.OlP("mat-select-scroll-strategy"),ae=new i.OlP("MAT_SELECT_CONFIG"),le={provide:G,deps:[C.aV],useFactory:function ne(l){return()=>l.scrollStrategies.reposition()}};class re{constructor(n,e){this.source=n,this.value=e}}const oe=(0,g.Kr)((0,g.sb)((0,g.Id)((0,g.FD)(class{constructor(l,n,e,t,s){this._elementRef=l,this._defaultErrorStateMatcher=n,this._parentForm=e,this._parentFormGroup=t,this.ngControl=s,this.stateChanges=new M.x}})))),ce=new i.OlP("MatSelectTrigger");let he=(()=>{class l extends oe{constructor(e,t,s,a,r,c,o,d,_,f,ge,ue,_e,k){super(r,a,o,d,f),this._viewportRuler=e,this._changeDetectorRef=t,this._ngZone=s,this._dir=c,this._parentFormField=_,this._liveAnnouncer=_e,this._defaultOptions=k,this._panelOpen=!1,this._compareWith=(m,I)=>m===I,this._uid="mat-select-"+P++,this._triggerAriaLabelledBy=null,this._destroy=new M.x,this._onChange=()=>{},this._onTouched=()=>{},this._valueId="mat-select-value-"+P++,this._panelDoneAnimatingStream=new M.x,this._overlayPanelClass=this._defaultOptions?.overlayPanelClass||"",this._focused=!1,this.controlType="mat-select",this._multiple=!1,this._disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1,this.ariaLabel="",this.optionSelectionChanges=(0,W.P)(()=>{const m=this.options;return m?m.changes.pipe((0,V.O)(m),(0,F.w)(()=>(0,D.T)(...m.map(I=>I.onSelectionChange)))):this._ngZone.onStable.pipe((0,A.q)(1),(0,F.w)(()=>this.optionSelectionChanges))}),this.openedChange=new i.vpe,this._openedStream=this.openedChange.pipe((0,L.h)(m=>m),(0,H.U)(()=>{})),this._closedStream=this.openedChange.pipe((0,L.h)(m=>!m),(0,H.U)(()=>{})),this.selectionChange=new i.vpe,this.valueChange=new i.vpe,this.ngControl&&(this.ngControl.valueAccessor=this),null!=k?.typeaheadDebounceInterval&&(this._typeaheadDebounceInterval=k.typeaheadDebounceInterval),this._scrollStrategyFactory=ue,this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=parseInt(ge)||0,this.id=this.id}get focused(){return this._focused||this._panelOpen}get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}get required(){return this._required??this.ngControl?.control?.hasValidator(w.kI.required)??!1}set required(e){this._required=(0,O.Ig)(e),this.stateChanges.next()}get multiple(){return this._multiple}set multiple(e){this._multiple=(0,O.Ig)(e)}get disableOptionCentering(){return this._disableOptionCentering}set disableOptionCentering(e){this._disableOptionCentering=(0,O.Ig)(e)}get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}get typeaheadDebounceInterval(){return this._typeaheadDebounceInterval}set typeaheadDebounceInterval(e){this._typeaheadDebounceInterval=(0,O.su)(e)}get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}ngOnInit(){this._selectionModel=new K(this.multiple),this.stateChanges.next(),this._panelDoneAnimatingStream.pipe((0,U.x)(),(0,y.R)(this._destroy)).subscribe(()=>this._panelDoneAnimating(this.panelOpen))}ngAfterContentInit(){this._initKeyManager(),this._selectionModel.changed.pipe((0,y.R)(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe((0,V.O)(null),(0,y.R)(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){const e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){const s=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?s.setAttribute("aria-labelledby",e):s.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(void 0!==this._previousControl&&null!==t.disabled&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this._typeaheadDebounceInterval)}ngOnDestroy(){this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._panelOpen=!0,this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck())}close(){this._panelOpen&&(this._panelOpen=!1,this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched())}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){const e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}_isRtl(){return!!this._dir&&"rtl"===this._dir.value}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){const t=e.keyCode,s=t===u.JH||t===u.LH||t===u.oh||t===u.SV,a=t===u.K5||t===u.L_,r=this._keyManager;if(!r.isTyping()&&a&&!(0,u.Vb)(e)||(this.multiple||e.altKey)&&s)e.preventDefault(),this.open();else if(!this.multiple){const c=this.selected;r.onKeydown(e);const o=this.selected;o&&c!==o&&this._liveAnnouncer.announce(o.viewValue,1e4)}}_handleOpenKeydown(e){const t=this._keyManager,s=e.keyCode,a=s===u.JH||s===u.LH,r=t.isTyping();if(a&&e.altKey)e.preventDefault(),this.close();else if(r||s!==u.K5&&s!==u.L_||!t.activeItem||(0,u.Vb)(e))if(!r&&this._multiple&&s===u.A&&e.ctrlKey){e.preventDefault();const c=this.options.some(o=>!o.disabled&&!o.selected);this.options.forEach(o=>{o.disabled||(c?o.select():o.deselect())})}else{const c=t.activeItemIndex;t.onKeydown(e),this._multiple&&a&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==c&&t.activeItem._selectViaInteraction()}else e.preventDefault(),t.activeItem._selectViaInteraction()}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}_onAttached(){this._overlayDir.positionChange.pipe((0,A.q)(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()})}_getPanelTheme(){return this._parentFormField?`mat-${this._parentFormField.color}`:""}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this._selectionModel.selected.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{const t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){const t=this.options.find(s=>{if(this._selectionModel.isSelected(s))return!1;try{return null!=s.value&&this._compareWith(s.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return!!(e!==this._value||this._multiple&&Array.isArray(e))&&(this.options&&this._setSelectionByValue(e),this._value=e,!0)}_initKeyManager(){this._keyManager=new x.s1(this.options).withTypeAhead(this._typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withAllowedModifierKeys(["shiftKey"]),this._keyManager.tabOut.pipe((0,y.R)(this._destroy)).subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.pipe((0,y.R)(this._destroy)).subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){const e=(0,D.T)(this.options.changes,this._destroy);this.optionSelectionChanges.pipe((0,y.R)(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),(0,D.T)(...this.options.map(t=>t._stateChanges)).pipe((0,y.R)(e)).subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}_onSelect(e,t){const s=this._selectionModel.isSelected(e);null!=e.value||this._multiple?(s!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())):(e.deselect(),this._selectionModel.clear(),null!=this.value&&this._propagateChanges(e.value)),s!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){const e=this.options.toArray();this._selectionModel.sort((t,s)=>this.sortComparator?this.sortComparator(t,s,e):e.indexOf(t)-e.indexOf(s)),this.stateChanges.next()}}_propagateChanges(e){let t=null;t=this.multiple?this.selected.map(s=>s.value):this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){this._keyManager&&(this.empty?this._keyManager.setFirstItemActive():this._keyManager.setActiveItem(this._selectionModel.selected[0]))}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;const e=this._parentFormField?.getLabelId();return this.ariaLabelledby?(e?e+" ":"")+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;const e=this._parentFormField?.getLabelId();let t=(e?e+" ":"")+this._valueId;return this.ariaLabelledby&&(t+=" "+this.ariaLabelledby),t}_panelDoneAnimating(e){this.openedChange.emit(e)}setDescribedByIds(e){e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(){this.focus(),this.open()}get shouldLabelFloat(){return this._panelOpen||!this.empty||this._focused&&!!this._placeholder}}return l.\u0275fac=function(e){return new(e||l)(i.Y36(R.rL),i.Y36(i.sBO),i.Y36(i.R0b),i.Y36(g.rD),i.Y36(i.SBq),i.Y36(N.Is,8),i.Y36(w.F,8),i.Y36(w.sg,8),i.Y36(T.G_,8),i.Y36(w.a5,10),i.$8M("tabindex"),i.Y36(G),i.Y36(x.Kd),i.Y36(ae,8))},l.\u0275dir=i.lG2({type:l,viewQuery:function(e,t){if(1&e&&(i.Gf(Q,5),i.Gf(Z,5),i.Gf(C.pI,5)),2&e){let s;i.iGM(s=i.CRH())&&(t.trigger=s.first),i.iGM(s=i.CRH())&&(t.panel=s.first),i.iGM(s=i.CRH())&&(t._overlayDir=s.first)}},inputs:{userAriaDescribedBy:["aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",placeholder:"placeholder",required:"required",multiple:"multiple",disableOptionCentering:"disableOptionCentering",compareWith:"compareWith",value:"value",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:"typeaheadDebounceInterval",sortComparator:"sortComparator",id:"id"},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},features:[i.qOj,i.TTD]}),l})(),de=(()=>{class l extends he{constructor(){super(...arguments),this._scrollTop=0,this._triggerFontSize=0,this._transformOrigin="top",this._offsetY=0,this._positions=[{originX:"start",originY:"top",overlayX:"start",overlayY:"top"},{originX:"start",originY:"bottom",overlayX:"start",overlayY:"bottom"}]}_calculateOverlayScroll(e,t,s){const a=this._getItemHeight();return Math.min(Math.max(0,a*e-t+a/2),s)}ngOnInit(){super.ngOnInit(),this._viewportRuler.change().pipe((0,y.R)(this._destroy)).subscribe(()=>{this.panelOpen&&(this._triggerRect=this.trigger.nativeElement.getBoundingClientRect(),this._changeDetectorRef.markForCheck())})}open(){super._canOpen()&&(super.open(),this._triggerRect=this.trigger.nativeElement.getBoundingClientRect(),this._triggerFontSize=parseInt(getComputedStyle(this.trigger.nativeElement).fontSize||"0"),this._calculateOverlayPosition(),this._ngZone.onStable.pipe((0,A.q)(1)).subscribe(()=>{this._triggerFontSize&&this._overlayDir.overlayRef&&this._overlayDir.overlayRef.overlayElement&&(this._overlayDir.overlayRef.overlayElement.style.fontSize=`${this._triggerFontSize}px`)}))}_scrollOptionIntoView(e){const t=(0,g.CB)(e,this.options,this.optionGroups),s=this._getItemHeight();this.panel.nativeElement.scrollTop=0===e&&1===t?0:(0,g.jH)((e+t)*s,s,this.panel.nativeElement.scrollTop,b)}_positioningSettled(){this._calculateOverlayOffsetX(),this.panel.nativeElement.scrollTop=this._scrollTop}_panelDoneAnimating(e){this.panelOpen?this._scrollTop=0:(this._overlayDir.offsetX=0,this._changeDetectorRef.markForCheck()),super._panelDoneAnimating(e)}_getChangeEvent(e){return new re(this,e)}_calculateOverlayOffsetX(){const e=this._overlayDir.overlayRef.overlayElement.getBoundingClientRect(),t=this._viewportRuler.getViewportSize(),s=this._isRtl(),a=this.multiple?56:32;let r;if(this.multiple)r=40;else if(this.disableOptionCentering)r=16;else{let d=this._selectionModel.selected[0]||this.options.first;r=d&&d.group?32:16}s||(r*=-1);const c=0-(e.left+r-(s?a:0)),o=e.right+r-t.width+(s?0:a);c>0?r+=c+8:o>0&&(r-=o+8),this._overlayDir.offsetX=Math.round(r),this._overlayDir.overlayRef.updatePosition()}_calculateOverlayOffsetY(e,t,s){const a=this._getItemHeight(),r=(a-this._triggerRect.height)/2,c=Math.floor(b/a);let o;return this.disableOptionCentering?0:(o=0===this._scrollTop?e*a:this._scrollTop===s?(e-(this._getItemCount()-c))*a+(a-(this._getItemCount()*a-b)%a):t-a/2,Math.round(-1*o-r))}_checkOverlayWithinViewport(e){const t=this._getItemHeight(),s=this._viewportRuler.getViewportSize(),a=this._triggerRect.top-8,r=s.height-this._triggerRect.bottom-8,c=Math.abs(this._offsetY),d=Math.min(this._getItemCount()*t,b)-c-this._triggerRect.height;d>r?this._adjustPanelUp(d,r):c>a?this._adjustPanelDown(c,a,e):this._transformOrigin=this._getOriginBasedOnOption()}_adjustPanelUp(e,t){const s=Math.round(e-t);this._scrollTop-=s,this._offsetY-=s,this._transformOrigin=this._getOriginBasedOnOption(),this._scrollTop<=0&&(this._scrollTop=0,this._offsetY=0,this._transformOrigin="50% bottom 0px")}_adjustPanelDown(e,t,s){const a=Math.round(e-t);if(this._scrollTop+=a,this._offsetY+=a,this._transformOrigin=this._getOriginBasedOnOption(),this._scrollTop>=s)return this._scrollTop=s,this._offsetY=0,void(this._transformOrigin="50% top 0px")}_calculateOverlayPosition(){const e=this._getItemHeight(),t=this._getItemCount(),s=Math.min(t*e,b),r=t*e-s;let c;c=this.empty?0:Math.max(this.options.toArray().indexOf(this._selectionModel.selected[0]),0),c+=(0,g.CB)(c,this.options,this.optionGroups);const o=s/2;this._scrollTop=this._calculateOverlayScroll(c,o,r),this._offsetY=this._calculateOverlayOffsetY(c,o,r),this._checkOverlayWithinViewport(r)}_getOriginBasedOnOption(){const e=this._getItemHeight(),t=(e-this._triggerRect.height)/2;return`50% ${Math.abs(this._offsetY)-t+e/2}px 0px`}_getItemHeight(){return 3*this._triggerFontSize}_getItemCount(){return this.options.length+this.optionGroups.length}}return l.\u0275fac=function(){let n;return function(t){return(n||(n=i.n5z(l)))(t||l)}}(),l.\u0275cmp=i.Xpm({type:l,selectors:[["mat-select"]],contentQueries:function(e,t,s){if(1&e&&(i.Suo(s,ce,5),i.Suo(s,g.ey,5),i.Suo(s,g.K7,5)),2&e){let a;i.iGM(a=i.CRH())&&(t.customTrigger=a.first),i.iGM(a=i.CRH())&&(t.options=a),i.iGM(a=i.CRH())&&(t.optionGroups=a)}},hostAttrs:["role","combobox","aria-autocomplete","none","aria-haspopup","true",1,"mat-select"],hostVars:19,hostBindings:function(e,t){1&e&&i.NdJ("keydown",function(a){return t._handleKeydown(a)})("focus",function(){return t._onFocus()})("blur",function(){return t._onBlur()}),2&e&&(i.uIk("id",t.id)("tabindex",t.tabIndex)("aria-controls",t.panelOpen?t.id+"-panel":null)("aria-expanded",t.panelOpen)("aria-label",t.ariaLabel||null)("aria-required",t.required.toString())("aria-disabled",t.disabled.toString())("aria-invalid",t.errorState)("aria-activedescendant",t._getAriaActiveDescendant()),i.ekj("mat-select-disabled",t.disabled)("mat-select-invalid",t.errorState)("mat-select-required",t.required)("mat-select-empty",t.empty)("mat-select-multiple",t.multiple))},inputs:{disabled:"disabled",disableRipple:"disableRipple",tabIndex:"tabIndex"},exportAs:["matSelect"],features:[i._Bn([{provide:T.Eo,useExisting:l},{provide:g.HF,useExisting:l}]),i.qOj],ngContentSelectors:te,decls:9,vars:12,consts:[["cdk-overlay-origin","",1,"mat-select-trigger",3,"click"],["origin","cdkOverlayOrigin","trigger",""],[1,"mat-select-value",3,"ngSwitch"],["class","mat-select-placeholder mat-select-min-line",4,"ngSwitchCase"],["class","mat-select-value-text",3,"ngSwitch",4,"ngSwitchCase"],[1,"mat-select-arrow-wrapper"],[1,"mat-select-arrow"],["cdk-connected-overlay","","cdkConnectedOverlayLockPosition","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayOpen","cdkConnectedOverlayPositions","cdkConnectedOverlayMinWidth","cdkConnectedOverlayOffsetY","backdropClick","attach","detach"],[1,"mat-select-placeholder","mat-select-min-line"],[1,"mat-select-value-text",3,"ngSwitch"],["class","mat-select-min-line",4,"ngSwitchDefault"],[4,"ngSwitchCase"],[1,"mat-select-min-line"],[1,"mat-select-panel-wrap"],["role","listbox","tabindex","-1",3,"ngClass","keydown"],["panel",""]],template:function(e,t){if(1&e&&(i.F$t(ee),i.TgZ(0,"div",0,1),i.NdJ("click",function(){return t.toggle()}),i.TgZ(3,"div",2),i.YNc(4,X,2,1,"span",3),i.YNc(5,q,3,2,"span",4),i.qZA(),i.TgZ(6,"div",5),i._UZ(7,"div",6),i.qZA()(),i.YNc(8,$,4,14,"ng-template",7),i.NdJ("backdropClick",function(){return t.close()})("attach",function(){return t._onAttached()})("detach",function(){return t.close()})),2&e){const s=i.MAs(1);i.uIk("aria-owns",t.panelOpen?t.id+"-panel":null),i.xp6(3),i.Q6J("ngSwitch",t.empty),i.uIk("id",t._valueId),i.xp6(1),i.Q6J("ngSwitchCase",!0),i.xp6(1),i.Q6J("ngSwitchCase",!1),i.xp6(3),i.Q6J("cdkConnectedOverlayPanelClass",t._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",t._scrollStrategy)("cdkConnectedOverlayOrigin",s)("cdkConnectedOverlayOpen",t.panelOpen)("cdkConnectedOverlayPositions",t._positions)("cdkConnectedOverlayMinWidth",null==t._triggerRect?null:t._triggerRect.width)("cdkConnectedOverlayOffsetY",t._offsetY)}},dependencies:[S.mk,S.RF,S.n9,S.ED,C.pI,C.xu],styles:['.mat-select{display:inline-block;width:100%;outline:none}.mat-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{height:16px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid rgba(0,0,0,0);border-right:5px solid rgba(0,0,0,0);border-top:5px solid;margin:0 4px}.mat-form-field.mat-focused .mat-select-arrow{transform:translateX(0)}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px;outline:0}.cdk-high-contrast-active .mat-select-panel{outline:solid 1px}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:rgba(0,0,0,0);-webkit-text-fill-color:rgba(0,0,0,0);transition:none;display:block}.mat-select-min-line:empty::before{content:" ";white-space:pre;width:1px;display:inline-block;visibility:hidden}'],encapsulation:2,data:{animation:[B.transformPanelWrap,B.transformPanel]},changeDetection:0}),l})(),pe=(()=>{class l{}return l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=i.oAB({type:l}),l.\u0275inj=i.cJS({providers:[le],imports:[S.ez,C.U8,g.Ng,g.BQ,R.ZD,T.lN,g.Ng,g.BQ]}),l})()}}]);