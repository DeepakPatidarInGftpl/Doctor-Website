(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[2983],{12983:function(G,$,J){var E;typeof globalThis<"u"?globalThis:typeof this<"u"||(typeof window<"u"?window:typeof self<"u"?self:global),G.exports=(E=function(){try{return J(96166)}catch{}}(),function(){"use strict";var Y={662:function(j,m){var p,W=this&&this.__extends||(p=function(P,i){return(p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(w,v){w.__proto__=v}||function(w,v){for(var h in v)Object.prototype.hasOwnProperty.call(v,h)&&(w[h]=v[h])})(P,i)},function(P,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function w(){this.constructor=P}p(P,i),P.prototype=null===i?Object.create(i):(w.prototype=i.prototype,new w)});Object.defineProperty(m,"__esModule",{value:!0}),m.CellHookData=m.HookData=void 0;var x=function p(P,i,w){this.table=i,this.pageNumber=i.pageNumber,this.pageCount=this.pageNumber,this.settings=i.settings,this.cursor=w,this.doc=P.getDocument()};m.HookData=x;var b=function(p){function P(i,w,v,h,r,t){var e=p.call(this,i,w,t)||this;return e.cell=v,e.row=h,e.column=r,e.section=h.section,e}return W(P,p),P}(x);m.CellHookData=b},790:function(j,m,W){Object.defineProperty(m,"__esModule",{value:!0});var x=W(148),b=W(938),p=W(323),P=W(587),i=W(49),w=W(858);m.default=function v(h){h.API.autoTable=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var e;1===r.length?e=r[0]:(console.error("Use of deprecated autoTable initiation"),(e=r[2]||{}).columns=r[0],e.body=r[1]);var l=(0,P.parseInput)(this,e),s=(0,w.createTable)(this,l);return(0,i.drawTable)(this,s),this},h.API.lastAutoTable=!1,h.API.previousAutoTable=!1,h.API.autoTable.previous=!1,h.API.autoTableText=function(r,t,e,l){(0,b.default)(r,t,e,l,this)},h.API.autoTableSetDefaults=function(r){return p.DocHandler.setDefaults(r,this),this},h.autoTableSetDefaults=function(r,t){p.DocHandler.setDefaults(r,t)},h.API.autoTableHtmlToJson=function(r,t){if(void 0===t&&(t=!1),typeof window>"u")return console.error("Cannot run autoTableHtmlToJson in non browser environment"),null;var e=new p.DocHandler(this),l=(0,x.parseHtml)(e,r,window,t,!1),n=l.body;return{columns:l.head[0].map(function(d){return d.content}),rows:n,data:n}},h.API.autoTableEndPosY=function(){console.error("Use of deprecated function: autoTableEndPosY. Use doc.lastAutoTable.finalY instead.");var r=this.lastAutoTable;return r&&r.finalY?r.finalY:0},h.API.autoTableAddPageContent=function(r){return console.error("Use of deprecated function: autoTableAddPageContent. Use jsPDF.autoTableSetDefaults({didDrawPage: () => {}}) instead."),h.API.autoTable.globalDefaults||(h.API.autoTable.globalDefaults={}),h.API.autoTable.globalDefaults.addPageContent=r,this},h.API.autoTableAddPage=function(){return console.error("Use of deprecated function: autoTableAddPage. Use doc.addPage()"),this.addPage(),this}}},938:function(j,m){Object.defineProperty(m,"__esModule",{value:!0}),m.default=function W(x,b,p,P,i){P=P||{};var v=i.internal.scaleFactor,h=i.internal.getFontSize()/v,t=h*(i.getLineHeightFactor?i.getLineHeightFactor():1.15),l="",s=1;if(("middle"===P.valign||"bottom"===P.valign||"center"===P.halign||"right"===P.halign)&&(s=(l="string"==typeof x?x.split(/\r\n|\r|\n/g):x).length||1),p+=h*(2-1.15),"middle"===P.valign?p-=s/2*t:"bottom"===P.valign&&(p-=s*t),"center"===P.halign||"right"===P.halign){var n=h;if("center"===P.halign&&(n*=.5),l&&s>=1){for(var f=0;f<l.length;f++)i.text(l[f],b-i.getStringUnitWidth(l[f])*n,p),p+=t;return i}b-=i.getStringUnitWidth(x)*n}return"justify"===P.halign?i.text(x,b,p,{maxWidth:P.maxWidth||100,align:"justify"}):i.text(x,b,p),i}},200:function(j,m){function b(i,w){var v=i>0,h=w||0===w;return v&&h?"DF":v?"S":h?"F":null}function p(i,w){var v,h,r,t;if(i=i||w,Array.isArray(i)){if(i.length>=4)return{top:i[0],right:i[1],bottom:i[2],left:i[3]};if(3===i.length)return{top:i[0],right:i[1],bottom:i[2],left:i[1]};if(2===i.length)return{top:i[0],right:i[1],bottom:i[0],left:i[1]};i=1===i.length?i[0]:w}return"object"==typeof i?("number"==typeof i.vertical&&(i.top=i.vertical,i.bottom=i.vertical),"number"==typeof i.horizontal&&(i.right=i.horizontal,i.left=i.horizontal),{left:null!==(v=i.left)&&void 0!==v?v:w,top:null!==(h=i.top)&&void 0!==h?h:w,right:null!==(r=i.right)&&void 0!==r?r:w,bottom:null!==(t=i.bottom)&&void 0!==t?t:w}):("number"!=typeof i&&(i=w),{top:i,right:i,bottom:i,left:i})}Object.defineProperty(m,"__esModule",{value:!0}),m.getPageAvailableWidth=m.parseSpacing=m.getFillStyle=m.addTableBorder=m.getStringWidth=void 0,m.getStringWidth=function W(i,w,v){return v.applyStyles(w,!0),(Array.isArray(i)?i:[i]).map(function(t){return v.getTextWidth(t)}).reduce(function(t,e){return Math.max(t,e)},0)},m.addTableBorder=function x(i,w,v,h){var r=w.settings.tableLineWidth;i.applyStyles({lineWidth:r,lineColor:w.settings.tableLineColor});var e=b(r,!1);e&&i.rect(v.x,v.y,w.getWidth(i.pageSize().width),h.y-v.y,e)},m.getFillStyle=b,m.parseSpacing=p,m.getPageAvailableWidth=function P(i,w){var v=p(w.settings.margin,0);return i.pageSize().width-(v.left+v.right)}},913:function(j,m){var P,W=this&&this.__extends||(P=function(i,w){return(P=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(v,h){v.__proto__=h}||function(v,h){for(var r in h)Object.prototype.hasOwnProperty.call(h,r)&&(v[r]=h[r])})(i,w)},function(i,w){if("function"!=typeof w&&null!==w)throw new TypeError("Class extends value "+String(w)+" is not a constructor or null");function v(){this.constructor=i}P(i,w),i.prototype=null===w?Object.create(w):(v.prototype=w.prototype,new v)});Object.defineProperty(m,"__esModule",{value:!0}),m.getTheme=m.defaultStyles=m.HtmlRowInput=void 0;var x=function(P){function i(w){var v=P.call(this)||this;return v._element=w,v}return W(i,P),i}(Array);m.HtmlRowInput=x,m.defaultStyles=function b(P){return{font:"helvetica",fontStyle:"normal",overflow:"linebreak",fillColor:!1,textColor:20,halign:"left",valign:"top",fontSize:10,cellPadding:5/P,lineColor:200,lineWidth:0,cellWidth:"auto",minCellHeight:0,minCellWidth:0}},m.getTheme=function p(P){return{striped:{table:{fillColor:255,textColor:80,fontStyle:"normal"},head:{textColor:255,fillColor:[41,128,185],fontStyle:"bold"},body:{},foot:{textColor:255,fillColor:[41,128,185],fontStyle:"bold"},alternateRow:{fillColor:245}},grid:{table:{fillColor:255,textColor:80,fontStyle:"normal",lineWidth:.1},head:{textColor:255,fillColor:[26,188,156],fontStyle:"bold",lineWidth:0},body:{},foot:{textColor:255,fillColor:[26,188,156],fontStyle:"bold",lineWidth:0},alternateRow:{}},plain:{head:{fontStyle:"bold"},foot:{fontStyle:"bold"}}}[P]}},259:function(j,m,W){Object.defineProperty(m,"__esModule",{value:!0}),m.parseCss=void 0;var x=W(200);function P(v,h){var r=i(v,h);if(!r)return null;var t=r.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d*))?\)$/);if(!t||!Array.isArray(t))return null;var e=[parseInt(t[1]),parseInt(t[2]),parseInt(t[3])];return 0===parseInt(t[4])||isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function i(v,h){var r=h(v);return"rgba(0, 0, 0, 0)"===r||"transparent"===r||"initial"===r||"inherit"===r?null==v.parentElement?null:i(v.parentElement,h):r}m.parseCss=function b(v,h,r,t,e){var l={},s=1.3333333333333333,n=P(h,function(H){return e.getComputedStyle(H).backgroundColor});null!=n&&(l.fillColor=n);var f=P(h,function(H){return e.getComputedStyle(H).color});null!=f&&(l.textColor=f);var d=function w(v,h){var r=[v.paddingTop,v.paddingRight,v.paddingBottom,v.paddingLeft],t=96/(72/h),e=(parseInt(v.lineHeight)-parseInt(v.fontSize))/h/2,l=r.map(function(n){return parseInt(n||"0")/t}),s=(0,x.parseSpacing)(l,0);return e>s.top&&(s.top=e),e>s.bottom&&(s.bottom=e),s}(t,r);d&&(l.cellPadding=d);var y="borderTopColor",g=s*r,a=t.borderTopWidth;if(t.borderBottomWidth===a&&t.borderRightWidth===a&&t.borderLeftWidth===a){var C=(parseFloat(a)||0)/g;C&&(l.lineWidth=C)}else l.lineWidth={top:(parseFloat(t.borderTopWidth)||0)/g,right:(parseFloat(t.borderRightWidth)||0)/g,bottom:(parseFloat(t.borderBottomWidth)||0)/g,left:(parseFloat(t.borderLeftWidth)||0)/g},l.lineWidth.top||(l.lineWidth.right?y="borderRightColor":l.lineWidth.bottom?y="borderBottomColor":l.lineWidth.left&&(y="borderLeftColor"));console.log(l.lineWidth);var D=P(h,function(H){return e.getComputedStyle(H)[y]});null!=D&&(l.lineColor=D);var u=["left","right","center","justify"];-1!==u.indexOf(t.textAlign)&&(l.halign=t.textAlign),-1!==(u=["middle","bottom","top"]).indexOf(t.verticalAlign)&&(l.valign=t.verticalAlign);var o=parseInt(t.fontSize||"");isNaN(o)||(l.fontSize=o/s);var S=function p(v){var h="";return("bold"===v.fontWeight||"bolder"===v.fontWeight||parseInt(v.fontWeight)>=700)&&(h="bold"),("italic"===v.fontStyle||"oblique"===v.fontStyle)&&(h+="italic"),h}(t);S&&(l.fontStyle=S);var c=(t.fontFamily||"").toLowerCase();return-1!==v.indexOf(c)&&(l.font=c),l}},323:function(j,m){Object.defineProperty(m,"__esModule",{value:!0}),m.DocHandler=void 0;var W={},x=function(){function b(p){this.jsPDFDocument=p,this.userStyles={textColor:p.getTextColor?this.jsPDFDocument.getTextColor():0,fontSize:p.internal.getFontSize(),fontStyle:p.internal.getFont().fontStyle,font:p.internal.getFont().fontName,lineWidth:p.getLineWidth?this.jsPDFDocument.getLineWidth():0,lineColor:p.getDrawColor?this.jsPDFDocument.getDrawColor():0}}return b.setDefaults=function(p,P){void 0===P&&(P=null),P?P.__autoTableDocumentDefaults=p:W=p},b.unifyColor=function(p){return Array.isArray(p)?p:"number"==typeof p?[p,p,p]:"string"==typeof p?[p]:null},b.prototype.applyStyles=function(p,P){var i,w,v;void 0===P&&(P=!1),p.fontStyle&&this.jsPDFDocument.setFontStyle&&this.jsPDFDocument.setFontStyle(p.fontStyle);var h=this.jsPDFDocument.internal.getFont(),r=h.fontStyle,t=h.fontName;if(p.font&&(t=p.font),p.fontStyle){r=p.fontStyle;var e=this.getFontList()[t];e&&-1===e.indexOf(r)&&(this.jsPDFDocument.setFontStyle&&this.jsPDFDocument.setFontStyle(e[0]),r=e[0])}if(this.jsPDFDocument.setFont(t,r),p.fontSize&&this.jsPDFDocument.setFontSize(p.fontSize),!P){var l=b.unifyColor(p.fillColor);l&&(i=this.jsPDFDocument).setFillColor.apply(i,l),(l=b.unifyColor(p.textColor))&&(w=this.jsPDFDocument).setTextColor.apply(w,l),(l=b.unifyColor(p.lineColor))&&(v=this.jsPDFDocument).setDrawColor.apply(v,l),"number"==typeof p.lineWidth&&this.jsPDFDocument.setLineWidth(p.lineWidth)}},b.prototype.splitTextToSize=function(p,P,i){return this.jsPDFDocument.splitTextToSize(p,P,i)},b.prototype.rect=function(p,P,i,w,v){return this.jsPDFDocument.rect(p,P,i,w,v)},b.prototype.getLastAutoTable=function(){return this.jsPDFDocument.lastAutoTable||null},b.prototype.getTextWidth=function(p){return this.jsPDFDocument.getTextWidth(p)},b.prototype.getDocument=function(){return this.jsPDFDocument},b.prototype.setPage=function(p){this.jsPDFDocument.setPage(p)},b.prototype.addPage=function(){return this.jsPDFDocument.addPage()},b.prototype.getFontList=function(){return this.jsPDFDocument.getFontList()},b.prototype.getGlobalOptions=function(){return W||{}},b.prototype.getDocumentOptions=function(){return this.jsPDFDocument.__autoTableDocumentDefaults||{}},b.prototype.pageSize=function(){var p=this.jsPDFDocument.internal.pageSize;return null==p.width&&(p={width:p.getWidth(),height:p.getHeight()}),p},b.prototype.scaleFactor=function(){return this.jsPDFDocument.internal.scaleFactor},b.prototype.getLineHeightFactor=function(){var p=this.jsPDFDocument;return p.getLineHeightFactor?p.getLineHeightFactor():1.15},b.prototype.getLineHeight=function(p){return p/this.scaleFactor()*this.getLineHeightFactor()},b.prototype.pageNumber=function(){var p=this.jsPDFDocument.internal.getCurrentPageInfo();return p?p.pageNumber:this.jsPDFDocument.internal.getNumberOfPages()},b}();m.DocHandler=x},148:function(j,m,W){Object.defineProperty(m,"__esModule",{value:!0}),m.parseHtml=void 0;var x=W(259),b=W(913);function P(w,v,h,r,t,e){for(var l=new b.HtmlRowInput(r),s=0;s<r.cells.length;s++){var n=r.cells[s],f=h.getComputedStyle(n);if(t||"none"!==f.display){var d=void 0;e&&(d=(0,x.parseCss)(w,n,v,f,h)),l.push({rowSpan:n.rowSpan,colSpan:n.colSpan,styles:d,_element:n,content:i(n)})}}var y=h.getComputedStyle(r);if(l.length>0&&(t||"none"!==y.display))return l}function i(w){var v=w.cloneNode(!0);return v.innerHTML=v.innerHTML.replace(/\n/g,"").replace(/ +/g," "),v.innerHTML=v.innerHTML.split(/<br.*?>/).map(function(h){return h.trim()}).join("\n"),v.innerText||v.textContent||""}m.parseHtml=function p(w,v,h,r,t){var e,l,s;void 0===r&&(r=!1),void 0===t&&(t=!1),s="string"==typeof v?h.document.querySelector(v):v;var n=Object.keys(w.getFontList()),f=w.scaleFactor(),d=[],y=[],g=[];if(!s)return console.error("Html table could not be found with input: ",v),{head:d,body:y,foot:g};for(var a=0;a<s.rows.length;a++){var C=s.rows[a],D=null===(l=null===(e=C?.parentElement)||void 0===e?void 0:e.tagName)||void 0===l?void 0:l.toLowerCase(),u=P(n,f,h,C,r,t);!u||("thead"===D?d.push(u):"tfoot"===D?g.push(u):y.push(u))}return{head:d,body:y,foot:g}}},587:function(j,m,W){Object.defineProperty(m,"__esModule",{value:!0}),m.parseInput=void 0;var x=W(148),b=W(360),p=W(200),P=W(323),i=W(291);function l(s,n,f){var d=s[0]||n[0]||f[0]||[],y=[];return Object.keys(d).filter(function(g){return"_element"!==g}).forEach(function(g){var C,a=1;"object"==typeof(C=Array.isArray(d)?d[parseInt(g)]:d[g])&&!Array.isArray(C)&&(a=C?.colSpan||1);for(var D=0;D<a;D++){var u;u=Array.isArray(d)?y.length:g+(D>0?"_".concat(D):""),y.push({dataKey:u})}}),y}m.parseInput=function w(s,n){var f=new P.DocHandler(s),d=f.getDocumentOptions(),y=f.getGlobalOptions();(0,i.default)(f,y,d,n);var a,g=(0,b.assign)({},y,d,n);typeof window<"u"&&(a=window);var C=function v(s,n,f){for(var d={styles:{},headStyles:{},bodyStyles:{},footStyles:{},alternateRowStyles:{},columnStyles:{}},y=function(D){if("columnStyles"===D)d.columnStyles=(0,b.assign)({},s[D],n[D],f[D]);else{var H=[s,n,f].map(function(T){return T[D]||{}});d[D]=(0,b.assign)({},H[0],H[1],H[2])}},g=0,a=Object.keys(d);g<a.length;g++)y(a[g]);return d}(y,d,n),D=function h(s,n,f){for(var y={didParseCell:[],willDrawCell:[],didDrawCell:[],willDrawPage:[],didDrawPage:[]},g=0,a=[s,n,f];g<a.length;g++){var C=a[g];C.didParseCell&&y.didParseCell.push(C.didParseCell),C.willDrawCell&&y.willDrawCell.push(C.willDrawCell),C.didDrawCell&&y.didDrawCell.push(C.didDrawCell),C.willDrawPage&&y.willDrawPage.push(C.willDrawPage),C.didDrawPage&&y.didDrawPage.push(C.didDrawPage)}return y}(y,d,n),u=function r(s,n){var f,d,y,g,a,C,D,u,o,S,c,k,F,H=(0,p.parseSpacing)(n.margin,40/s.scaleFactor()),T=null!==(f=function t(s,n){var f=s.getLastAutoTable(),d=s.scaleFactor(),y=s.pageNumber(),g=!1;return f&&f.startPageNumber&&(g=f.startPageNumber+f.pageNumber-1===y),"number"==typeof n?n:null!=n&&!1!==n||!g||null==f?.finalY?null:f.finalY+20/d}(s,n.startY))&&void 0!==f?f:H.top;k=!0===n.showFoot?"everyPage":!1===n.showFoot?"never":null!==(d=n.showFoot)&&void 0!==d?d:"everyPage",F=!0===n.showHead?"everyPage":!1===n.showHead?"never":null!==(y=n.showHead)&&void 0!==y?y:"everyPage";var R=null!==(g=n.useCss)&&void 0!==g&&g,O=null!==(a=n.horizontalPageBreakRepeat)&&void 0!==a?a:null;return{includeHiddenHtml:null!==(C=n.includeHiddenHtml)&&void 0!==C&&C,useCss:R,theme:n.theme||(R?"plain":"striped"),startY:T,margin:H,pageBreak:null!==(D=n.pageBreak)&&void 0!==D?D:"auto",rowPageBreak:null!==(u=n.rowPageBreak)&&void 0!==u?u:"auto",tableWidth:null!==(o=n.tableWidth)&&void 0!==o?o:"auto",showHead:F,showFoot:k,tableLineWidth:null!==(S=n.tableLineWidth)&&void 0!==S?S:0,tableLineColor:null!==(c=n.tableLineColor)&&void 0!==c?c:200,horizontalPageBreak:!!n.horizontalPageBreak,horizontalPageBreakRepeat:O}}(f,g),o=function e(s,n,f){var d=n.head||[],y=n.body||[],g=n.foot||[];if(n.html)if(f){var C=(0,x.parseHtml)(s,n.html,f,n.includeHiddenHtml,n.useCss)||{};d=C.head||d,y=C.body||d,g=C.foot||d}else console.error("Cannot parse html in non browser environment");return{columns:n.columns||l(d,y,g),head:d,body:y,foot:g}}(f,g,a);return{id:n.tableId,content:o,hooks:D,styles:C,settings:u}}},291:function(j,m){function x(b){b.rowHeight?(console.error("Use of deprecated style rowHeight. It is renamed to minCellHeight."),b.minCellHeight||(b.minCellHeight=b.rowHeight)):b.columnWidth&&(console.error("Use of deprecated style columnWidth. It is renamed to cellWidth."),b.cellWidth||(b.cellWidth=b.columnWidth))}Object.defineProperty(m,"__esModule",{value:!0}),m.default=function W(b,p,P,i){for(var w=function(t){t&&"object"!=typeof t&&console.error("The options parameter should be of type object, is: "+typeof t),typeof t.extendWidth<"u"&&(t.tableWidth=t.extendWidth?"auto":"wrap",console.error("Use of deprecated option: extendWidth, use tableWidth instead.")),typeof t.margins<"u"&&(typeof t.margin>"u"&&(t.margin=t.margins),console.error("Use of deprecated option: margins, use margin instead.")),t.startY&&"number"!=typeof t.startY&&(console.error("Invalid value for startY option",t.startY),delete t.startY),!t.didDrawPage&&(t.afterPageContent||t.beforePageContent||t.afterPageAdd)&&(console.error("The afterPageContent, beforePageContent and afterPageAdd hooks are deprecated. Use didDrawPage instead"),t.didDrawPage=function(g){b.applyStyles(b.userStyles),t.beforePageContent&&t.beforePageContent(g),b.applyStyles(b.userStyles),t.afterPageContent&&t.afterPageContent(g),b.applyStyles(b.userStyles),t.afterPageAdd&&g.pageNumber>1&&g.afterPageAdd(g),b.applyStyles(b.userStyles)}),["createdHeaderCell","drawHeaderRow","drawRow","drawHeaderCell"].forEach(function(g){t[g]&&console.error('The "'.concat(g,'" hook has changed in version 3.0, check the changelog for how to migrate.'))}),[["showFoot","showFooter"],["showHead","showHeader"],["didDrawPage","addPageContent"],["didParseCell","createdCell"],["headStyles","headerStyles"]].forEach(function(g){var a=g[0],C=g[1];t[C]&&(console.error("Use of deprecated option ".concat(C,". Use ").concat(a," instead")),t[a]=t[C])}),[["padding","cellPadding"],["lineHeight","rowHeight"],"fontSize","overflow"].forEach(function(g){var a="string"==typeof g?g:g[0],C="string"==typeof g?g:g[1];typeof t[a]<"u"&&(typeof t.styles[C]>"u"&&(t.styles[C]=t[a]),console.error("Use of deprecated option: "+a+", use the style "+C+" instead."))});for(var e=0,l=["styles","bodyStyles","headStyles","footStyles"];e<l.length;e++)x(t[l[e]]||{});for(var n=t.columnStyles||{},f=0,d=Object.keys(n);f<d.length;f++)x(n[d[f]]||{})},v=0,h=[p,P,i];v<h.length;v++)w(h[v])}},287:function(j,m,W){Object.defineProperty(m,"__esModule",{value:!0}),m.Column=m.Cell=m.Row=m.Table=void 0;var x=W(913),b=W(662),p=W(200),P=function(){function h(r,t){this.pageNumber=1,this.pageCount=1,this.id=r.id,this.settings=r.settings,this.styles=r.styles,this.hooks=r.hooks,this.columns=t.columns,this.head=t.head,this.body=t.body,this.foot=t.foot}return h.prototype.getHeadHeight=function(r){return this.head.reduce(function(t,e){return t+e.getMaxCellHeight(r)},0)},h.prototype.getFootHeight=function(r){return this.foot.reduce(function(t,e){return t+e.getMaxCellHeight(r)},0)},h.prototype.allRows=function(){return this.head.concat(this.body).concat(this.foot)},h.prototype.callCellHooks=function(r,t,e,l,s,n){for(var f=0,d=t;f<d.length;f++){var a=!1===(0,d[f])(new b.CellHookData(r,this,e,l,s,n));if(e.text=Array.isArray(e.text)?e.text:[e.text],a)return!1}return!0},h.prototype.callEndPageHooks=function(r,t){r.applyStyles(r.userStyles);for(var e=0,l=this.hooks.didDrawPage;e<l.length;e++)(0,l[e])(new b.HookData(r,this,t))},h.prototype.callWillDrawPageHooks=function(r,t){for(var e=0,l=this.hooks.willDrawPage;e<l.length;e++)(0,l[e])(new b.HookData(r,this,t))},h.prototype.getWidth=function(r){if("number"==typeof this.settings.tableWidth)return this.settings.tableWidth;if("wrap"===this.settings.tableWidth)return this.columns.reduce(function(l,s){return l+s.wrappedWidth},0);var e=this.settings.margin;return r-e.left-e.right},h}();m.Table=P;var i=function(){function h(r,t,e,l,s){void 0===s&&(s=!1),this.height=0,this.raw=r,r instanceof x.HtmlRowInput&&(this.raw=r._element,this.element=r._element),this.index=t,this.section=e,this.cells=l,this.spansMultiplePages=s}return h.prototype.getMaxCellHeight=function(r){var t=this;return r.reduce(function(e,l){var s;return Math.max(e,(null===(s=t.cells[l.index])||void 0===s?void 0:s.height)||0)},0)},h.prototype.hasRowSpan=function(r){var t=this;return r.filter(function(e){var l=t.cells[e.index];return!!l&&l.rowSpan>1}).length>0},h.prototype.canEntireRowFit=function(r,t){return this.getMaxCellHeight(t)<=r},h.prototype.getMinimumRowHeight=function(r,t){var e=this;return r.reduce(function(l,s){var n=e.cells[s.index];if(!n)return 0;var f=t.getLineHeight(n.styles.fontSize),y=n.padding("vertical")+f;return y>l?y:l},0)},h}();m.Row=i;var w=function(){function h(r,t,e){var l,s;this.contentHeight=0,this.contentWidth=0,this.wrappedWidth=0,this.minReadableWidth=0,this.minWidth=0,this.width=0,this.height=0,this.x=0,this.y=0,this.styles=t,this.section=e,this.raw=r;var n=r;null==r||"object"!=typeof r||Array.isArray(r)?(this.rowSpan=1,this.colSpan=1):(this.rowSpan=r.rowSpan||1,this.colSpan=r.colSpan||1,n=null!==(s=null!==(l=r.content)&&void 0!==l?l:r.title)&&void 0!==s?s:r,r._element&&(this.raw=r._element)),this.text=(null!=n?""+n:"").split(/\r\n|\r|\n/g)}return h.prototype.getTextPos=function(){var r,e;if("top"===this.styles.valign)r=this.y+this.padding("top");else if("bottom"===this.styles.valign)r=this.y+this.height-this.padding("bottom");else{var t=this.height-this.padding("vertical");r=this.y+t/2+this.padding("top")}if("right"===this.styles.halign)e=this.x+this.width-this.padding("right");else if("center"===this.styles.halign){var l=this.width-this.padding("horizontal");e=this.x+l/2+this.padding("left")}else e=this.x+this.padding("left");return{x:e,y:r}},h.prototype.getContentHeight=function(r,t){void 0===t&&(t=1.15);var s=(Array.isArray(this.text)?this.text.length:1)*(this.styles.fontSize/r*t)+this.padding("vertical");return Math.max(s,this.styles.minCellHeight)},h.prototype.padding=function(r){var t=(0,p.parseSpacing)(this.styles.cellPadding,0);return"vertical"===r?t.top+t.bottom:"horizontal"===r?t.left+t.right:t[r]},h}();m.Cell=w;var v=function(){function h(r,t,e){this.wrappedWidth=0,this.minReadableWidth=0,this.minWidth=0,this.width=0,this.dataKey=r,this.raw=t,this.index=e}return h.prototype.getMaxCustomCellWidth=function(r){for(var t=0,e=0,l=r.allRows();e<l.length;e++){var n=l[e].cells[this.index];n&&"number"==typeof n.styles.cellWidth&&(t=Math.max(t,n.styles.cellWidth))}return t},h}();m.Column=v},360:function(j,m){Object.defineProperty(m,"__esModule",{value:!0}),m.assign=void 0,m.assign=function W(x,b,p,P,i){if(null==x)throw new TypeError("Cannot convert undefined or null to object");for(var w=Object(x),v=1;v<arguments.length;v++){var h=arguments[v];if(null!=h)for(var r in h)Object.prototype.hasOwnProperty.call(h,r)&&(w[r]=h[r])}return w}},858:function(j,m,W){Object.defineProperty(m,"__esModule",{value:!0}),m.createTable=void 0;var x=W(323),b=W(287),p=W(189),P=W(913),i=W(360);function h(s,n,f,d,y,g){var a={};return n.map(function(D,u){for(var o=0,S={},c=0,H=0,T=0,k=f;T<k.length;T++){var F=k[T];if(null==a[F.index]||0===a[F.index].left)if(0===H){var R,z={};"object"==typeof(R=Array.isArray(D)?D[F.index-c-o]:D[F.dataKey])&&!Array.isArray(R)&&(z=R?.styles||{});var A=l(s,F,u,y,d,g,z),O=new b.Cell(R,A,s);S[F.dataKey]=O,S[F.index]=O,a[F.index]={left:O.rowSpan-1,times:H=O.colSpan-1}}else H--,c++;else a[F.index].left--,H=a[F.index].times,o++}return new b.Row(D,u,s,S)})}function r(s,n){var f={};return s.forEach(function(d){if(null!=d.raw){var y=function t(s,n){if("head"===s){if("object"==typeof n)return n.header||n.title||null;if("string"==typeof n||"number"==typeof n)return n}else if("foot"===s&&"object"==typeof n)return n.footer;return null}(n,d.raw);null!=y&&(f[d.dataKey]=y)}}),Object.keys(f).length>0?f:null}function l(s,n,f,d,y,g,a){var D,C=(0,P.getTheme)(d);"head"===s?D=y.headStyles:"body"===s?D=y.bodyStyles:"foot"===s&&(D=y.footStyles);var u=(0,i.assign)({},C.table,C[s],y.styles,D),S="body"===s&&(y.columnStyles[n.dataKey]||y.columnStyles[n.index])||{},c="body"===s&&f%2==0?(0,i.assign)({},C.alternateRow,y.alternateRowStyles):{},H=(0,P.defaultStyles)(g),T=(0,i.assign)({},H,u,c,S);return(0,i.assign)(T,a)}m.createTable=function w(s,n){var f=new x.DocHandler(s),d=function v(s,n){var y,f=s.content,d=function e(s){return s.map(function(n,f){var d,y,g;return g="object"==typeof n&&null!==(y=null!==(d=n.dataKey)&&void 0!==d?d:n.key)&&void 0!==y?y:f,new b.Column(g,n,f)})}(f.columns);0===f.head.length&&(y=r(d,"head"))&&f.head.push(y),0===f.foot.length&&(y=r(d,"foot"))&&f.foot.push(y);var g=s.settings.theme,a=s.styles;return{columns:d,head:h("head",f.head,d,a,g,n),body:h("body",f.body,d,a,g,n),foot:h("foot",f.foot,d,a,g,n)}}(n,f.scaleFactor()),y=new b.Table(n,d);return(0,p.calculateWidths)(f,y),f.applyStyles(f.userStyles),y}},49:function(j,m,W){Object.defineProperty(m,"__esModule",{value:!0}),m.addPage=m.drawTable=void 0;var x=W(200),b=W(287),p=W(323),P=W(360),i=W(938),w=W(435);function l(u,o,S){var c=S.getLineHeight(u.styles.fontSize),H=u.padding("vertical"),T=Math.floor((o-H)/c);return Math.max(0,T)}function f(u,o,S,c,H,T,k){var F=function a(u,o,S,c){var H=o.settings.margin.bottom,T=o.settings.showFoot;return("everyPage"===T||"lastPage"===T&&S)&&(H+=o.getFootHeight(o.columns)),u.pageSize().height-c.y-H}(u,o,c,T);if(S.canEntireRowFit(F,k))d(u,o,S,T,k);else if(function n(u,o,S,c){var H=u.pageSize().height,T=c.settings.margin,F=H-(T.top+T.bottom);"body"===o.section&&(F-=c.getHeadHeight(c.columns)+c.getFootHeight(c.columns));var R=o.getMinimumRowHeight(c.columns,u),z=R<S;if(R>F)return console.error("Will not be able to print row ".concat(o.index," correctly since it's minimum height is larger than page height")),!0;if(!z)return!1;var A=o.hasRowSpan(c.columns);return o.getMaxCellHeight(c.columns)>F?(A&&console.error("The content of row ".concat(o.index," will not be drawn correctly since drawing rows with a height larger than the page height and has cells with rowspans is not supported.")),!0):!(A||"avoid"===c.settings.rowPageBreak)}(u,S,F,o)){var R=function s(u,o,S,c){var H={};u.spansMultiplePages=!0,u.height=0;for(var T=0,k=0,F=S.columns;k<F.length;k++)if(z=u.cells[(R=F[k]).index]){Array.isArray(z.text)||(z.text=[z.text]);var A=new b.Cell(z.raw,z.styles,z.section);(A=(0,P.assign)(A,z)).text=[];var O=l(z,o,c);z.text.length>O&&(A.text=z.text.splice(O,z.text.length));var M=c.scaleFactor(),L=c.getLineHeightFactor();z.contentHeight=z.getContentHeight(M,L),z.contentHeight>=o&&(z.contentHeight=o,A.styles.minCellHeight-=o),z.contentHeight>u.height&&(u.height=z.contentHeight),A.contentHeight=A.getContentHeight(M,L),A.contentHeight>T&&(T=A.contentHeight),H[R.index]=A}var B=new b.Row(u.raw,-1,u.section,H,!0);B.height=T;for(var U=0,K=S.columns;U<K.length;U++){var R,z;(A=B.cells[(R=K[U]).index])&&(A.height=B.height),(z=u.cells[R.index])&&(z.height=u.height)}return B}(S,F,o,u);d(u,o,S,T,k),C(u,o,H,T,k),f(u,o,R,c,H,T,k)}else C(u,o,H,T,k),f(u,o,S,c,H,T,k)}function d(u,o,S,c,H){c.x=o.settings.margin.left;for(var T=0,k=H;T<k.length;T++){var F=k[T],R=S.cells[F.index];if(R)if(u.applyStyles(R.styles),R.x=c.x,R.y=c.y,!1!==o.callCellHooks(u,o.hooks.willDrawCell,R,S,F,c)){y(u,R,c);var A=R.getTextPos();(0,i.default)(R.text,A.x,A.y,{halign:R.styles.halign,valign:R.styles.valign,maxWidth:Math.ceil(R.width-R.padding("left")-R.padding("right"))},u.getDocument()),o.callCellHooks(u,o.hooks.didDrawCell,R,S,F,c),c.x+=F.width}else c.x+=F.width;else c.x+=F.width}c.y+=S.height}function y(u,o,S){var c=o.styles;if(u.getDocument().setFillColor(u.getDocument().getFillColor()),"number"==typeof c.lineWidth){var H=(0,x.getFillStyle)(c.lineWidth,c.fillColor);H&&u.rect(o.x,S.y,o.width,o.height,H)}else"object"==typeof c.lineWidth&&(c.fillColor&&u.rect(o.x,S.y,o.width,o.height,"F"),function g(u,o,S,c){var H,T,k,F;function R(z,A,O,M,L){u.getDocument().setLineWidth(z),u.getDocument().line(A,O,M,L,"S")}c.top&&(H=S.x,k=S.x+o.width,c.right&&(k+=.5*c.right),c.left&&(H-=.5*c.left),R(c.top,H,T=S.y,k,F=S.y)),c.bottom&&(H=S.x,k=S.x+o.width,c.right&&(k+=.5*c.right),c.left&&(H-=.5*c.left),R(c.bottom,H,T=S.y+o.height,k,F=S.y+o.height)),c.left&&(T=S.y,F=S.y+o.height,c.top&&(T-=.5*c.top),c.bottom&&(F+=.5*c.bottom),R(c.left,H=S.x,T,k=S.x,F)),c.right&&(T=S.y,F=S.y+o.height,c.top&&(T-=.5*c.top),c.bottom&&(F+=.5*c.bottom),R(c.right,H=S.x+o.width,T,k=S.x+o.width,F))}(u,o,S,c.lineWidth))}function C(u,o,S,c,H){void 0===H&&(H=[]),u.applyStyles(u.userStyles),"everyPage"===o.settings.showFoot&&o.foot.forEach(function(k){return d(u,o,k,c,H)}),o.callEndPageHooks(u,c);var T=o.settings.margin;(0,x.addTableBorder)(u,o,S,c),D(u),o.pageNumber++,o.pageCount++,c.x=T.left,c.y=T.top,S.y=T.top,o.callWillDrawPageHooks(u,c),"everyPage"===o.settings.showHead&&(o.head.forEach(function(k){return d(u,o,k,c,H)}),u.applyStyles(u.userStyles))}function D(u){var o=u.pageNumber();return u.setPage(o+1),u.pageNumber()===o&&(u.addPage(),!0)}m.drawTable=function v(u,o){var S=o.settings,c=S.startY,H=S.margin,T={x:H.left,y:c},k=o.getHeadHeight(o.columns)+o.getFootHeight(o.columns),F=c+H.bottom+k;"avoid"===S.pageBreak&&(F+=o.body.reduce(function(M,L){return M+L.height},0));var A=new p.DocHandler(u);("always"===S.pageBreak||null!=S.startY&&F>A.pageSize().height)&&(D(A),T.y=H.top),o.callWillDrawPageHooks(A,T);var O=(0,P.assign)({},T);o.startPageNumber=A.pageNumber(),S.horizontalPageBreak?function h(u,o,S,c){(0,w.calculateAllColumnsCanFitInPage)(u,o).map(function(T,k){u.applyStyles(u.userStyles),k>0?C(u,o,S,c,T.columns):function r(u,o,S,c){var H=o.settings;u.applyStyles(u.userStyles),("firstPage"===H.showHead||"everyPage"===H.showHead)&&o.head.forEach(function(T){return d(u,o,T,S,c)})}(u,o,c,T.columns),function t(u,o,S,c,H){u.applyStyles(u.userStyles),o.body.forEach(function(T,k){f(u,o,T,k===o.body.length-1,S,c,H)})}(u,o,S,c,T.columns),function e(u,o,S,c){var H=o.settings;u.applyStyles(u.userStyles),("lastPage"===H.showFoot||"everyPage"===H.showFoot)&&o.foot.forEach(function(T){return d(u,o,T,S,c)})}(u,o,c,T.columns)})}(A,o,O,T):(A.applyStyles(A.userStyles),("firstPage"===S.showHead||"everyPage"===S.showHead)&&o.head.forEach(function(M){return d(A,o,M,T,o.columns)}),A.applyStyles(A.userStyles),o.body.forEach(function(M,L){f(A,o,M,L===o.body.length-1,O,T,o.columns)}),A.applyStyles(A.userStyles),("lastPage"===S.showFoot||"everyPage"===S.showFoot)&&o.foot.forEach(function(M){return d(A,o,M,T,o.columns)})),(0,x.addTableBorder)(A,o,O,T),o.callEndPageHooks(A,T),o.finalY=T.y,u.lastAutoTable=o,u.previousAutoTable=o,u.autoTable&&(u.autoTable.previous=o),A.applyStyles(A.userStyles)},m.addPage=C},435:function(j,m,W){Object.defineProperty(m,"__esModule",{value:!0}),m.calculateAllColumnsCanFitInPage=void 0;var x=W(200);function b(P,i,w){var v;void 0===w&&(w={});var h=(0,x.getPageAvailableWidth)(P,i),r=new Map,t=[],e=[],l=[];Array.isArray(i.settings.horizontalPageBreakRepeat)?l=i.settings.horizontalPageBreakRepeat:("string"==typeof i.settings.horizontalPageBreakRepeat||"number"==typeof i.settings.horizontalPageBreakRepeat)&&(l=[i.settings.horizontalPageBreakRepeat]),l.forEach(function(d){var y=i.columns.find(function(g){return g.dataKey===d||g.index===d});y&&!r.has(y.index)&&(r.set(y.index,!0),t.push(y.index),e.push(i.columns[y.index]),h-=y.wrappedWidth)});for(var s=!0,n=null!==(v=w?.start)&&void 0!==v?v:0;n<i.columns.length;)if(r.has(n))n++;else{var f=i.columns[n].wrappedWidth;if(!(s||h>=f))break;s=!1,t.push(n),e.push(i.columns[n]),h-=f,n++}return{colIndexes:t,columns:e,lastIndex:n-1}}m.calculateAllColumnsCanFitInPage=function p(P,i){for(var w=[],v=0;v<i.columns.length;v++){var h=b(P,i,{start:v});h.columns.length&&(w.push(h),v=h.lastIndex)}return w}},189:function(j,m,W){Object.defineProperty(m,"__esModule",{value:!0}),m.ellipsize=m.resizeColumns=m.calculateWidths=void 0;var x=W(200);function P(t,e,l){for(var s=e,n=t.reduce(function(o,S){return o+S.wrappedWidth},0),f=0;f<t.length;f++){var d=t[f],a=d.width+s*(d.wrappedWidth/n),C=l(d),D=a<C?C:a;e-=D-d.width,d.width=D}if(e=Math.round(1e10*e)/1e10){var u=t.filter(function(o){return!(e<0)||o.width>l(o)});u.length&&(e=P(u,e,l))}return e}function h(t,e,l,s,n){return t.map(function(f){return function r(t,e,l,s,n){var f=1e4*s.scaleFactor();if((e=Math.ceil(e*f)/f)>=(0,x.getStringWidth)(t,l,s))return t;for(;e<(0,x.getStringWidth)(t+n,l,s)&&!(t.length<=1);)t=t.substring(0,t.length-1);return t.trim()+n}(f,e,l,s,n)})}m.calculateWidths=function b(t,e){!function p(t,e){var l=t.scaleFactor(),s=e.settings.horizontalPageBreak,n=(0,x.getPageAvailableWidth)(t,e);e.allRows().forEach(function(f){for(var d=0,y=e.columns;d<y.length;d++){var g=y[d],a=f.cells[g.index];if(a){e.callCellHooks(t,e.hooks.didParseCell,a,f,g,null);var D=a.padding("horizontal");a.contentWidth=(0,x.getStringWidth)(a.text,a.styles,t)+D;var u=(0,x.getStringWidth)(a.text.join(" ").split(/\s+/),a.styles,t);a.minReadableWidth=u+a.padding("horizontal"),"number"==typeof a.styles.cellWidth?(a.minWidth=a.styles.cellWidth,a.wrappedWidth=a.styles.cellWidth):"wrap"===a.styles.cellWidth||!0===s?a.contentWidth>n?(a.minWidth=n,a.wrappedWidth=n):(a.minWidth=a.contentWidth,a.wrappedWidth=a.contentWidth):(a.minWidth=a.styles.minCellWidth||10/l,a.wrappedWidth=a.contentWidth,a.minWidth>a.wrappedWidth&&(a.wrappedWidth=a.minWidth))}}}),e.allRows().forEach(function(f){for(var d=0,y=e.columns;d<y.length;d++){var g=y[d],a=f.cells[g.index];if(a&&1===a.colSpan)g.wrappedWidth=Math.max(g.wrappedWidth,a.wrappedWidth),g.minWidth=Math.max(g.minWidth,a.minWidth),g.minReadableWidth=Math.max(g.minReadableWidth,a.minReadableWidth);else{var C=e.styles.columnStyles[g.dataKey]||e.styles.columnStyles[g.index]||{},D=C.cellWidth||C.minCellWidth;D&&"number"==typeof D&&(g.minWidth=D,g.wrappedWidth=D)}a&&(a.colSpan>1&&!g.minWidth&&(g.minWidth=a.minWidth),a.colSpan>1&&!g.wrappedWidth&&(g.wrappedWidth=a.minWidth))}})}(t,e);var l=[],s=0;e.columns.forEach(function(f){var d=f.getMaxCustomCellWidth(e);d?f.width=d:(f.width=f.wrappedWidth,l.push(f)),s+=f.width});var n=e.getWidth(t.pageSize().width)-s;n&&(n=P(l,n,function(f){return Math.max(f.minReadableWidth,f.minWidth)})),n&&(n=P(l,n,function(f){return f.minWidth})),n=Math.abs(n),!e.settings.horizontalPageBreak&&n>.1/t.scaleFactor()&&(n=n<1?n:Math.round(n),console.warn("Of the table content, ".concat(n," units width could not fit page"))),function w(t){for(var e=t.allRows(),l=0;l<e.length;l++)for(var s=e[l],n=null,f=0,d=0,y=0;y<t.columns.length;y++){var g=t.columns[y];if((d-=1)>1&&t.columns[y+1])f+=g.width,delete s.cells[g.index];else if(n){var a=n;delete s.cells[g.index],n=null,a.width=g.width+f}else{if(!(a=s.cells[g.index]))continue;if(d=a.colSpan,f=0,a.colSpan>1){n=a,f+=g.width;continue}a.width=g.width+f}}}(e),function v(t,e){for(var l={count:0,height:0},s=0,n=t.allRows();s<n.length;s++){for(var f=n[s],d=0,y=t.columns;d<y.length;d++){var a=f.cells[y[d].index];if(a){e.applyStyles(a.styles,!0);var C=a.width-a.padding("horizontal");if("linebreak"===a.styles.overflow)a.text=e.splitTextToSize(a.text,C+1/e.scaleFactor(),{fontSize:a.styles.fontSize});else if("ellipsize"===a.styles.overflow)a.text=h(a.text,C,a.styles,e,"...");else if("hidden"===a.styles.overflow)a.text=h(a.text,C,a.styles,e,"");else if("function"==typeof a.styles.overflow){var D=a.styles.overflow(a.text,C);a.text="string"==typeof D?[D]:D}a.contentHeight=a.getContentHeight(e.scaleFactor(),e.getLineHeightFactor());var u=a.contentHeight/a.rowSpan;a.rowSpan>1&&l.count*l.height<u*a.rowSpan?l={height:u,count:a.rowSpan}:l&&l.count>0&&l.height>u&&(u=l.height),u>f.height&&(f.height=u)}}l.count--}}(e,t),function i(t){for(var e={},l=1,s=t.allRows(),n=0;n<s.length;n++)for(var f=s[n],d=0,y=t.columns;d<y.length;d++){var g=y[d],a=e[g.index];if(l>1)l--,delete f.cells[g.index];else if(a)a.cell.height+=f.height,l=a.cell.colSpan,delete f.cells[g.index],a.left--,a.left<=1&&delete e[g.index];else{var C=f.cells[g.index];if(!C)continue;if(C.height=f.height,C.rowSpan>1){var D=s.length-n;e[g.index]={cell:C,left:C.rowSpan>D?D:C.rowSpan,row:f}}}}}(e)},m.resizeColumns=P,m.ellipsize=h},84:function(j){if(typeof E>"u"){var m=new Error("Cannot find module 'undefined'");throw m.code="MODULE_NOT_FOUND",m}j.exports=E}},I={};function _(j){var m=I[j];if(void 0!==m)return m.exports;var W=I[j]={exports:{}};return Y[j].call(W.exports,W,W.exports,_),W.exports}var N={};return function(){var j=N;Object.defineProperty(j,"__esModule",{value:!0}),j.Cell=j.Column=j.Row=j.Table=j.CellHookData=j.__drawTable=j.__createTable=j.applyPlugin=void 0;var m=_(790),W=_(587),x=_(49),b=_(858),p=_(287);Object.defineProperty(j,"Table",{enumerable:!0,get:function(){return p.Table}});var P=_(662);Object.defineProperty(j,"CellHookData",{enumerable:!0,get:function(){return P.CellHookData}});var i=_(287);function w(e){(0,m.default)(e)}Object.defineProperty(j,"Cell",{enumerable:!0,get:function(){return i.Cell}}),Object.defineProperty(j,"Column",{enumerable:!0,get:function(){return i.Column}}),Object.defineProperty(j,"Row",{enumerable:!0,get:function(){return i.Row}}),j.applyPlugin=w,j.__createTable=function h(e,l){var s=(0,W.parseInput)(e,l);return(0,b.createTable)(e,s)},j.__drawTable=function r(e,l){(0,x.drawTable)(e,l)};try{var t=_(84);t.jsPDF&&(t=t.jsPDF),w(t)}catch{}j.default=function v(e,l){var s=(0,W.parseInput)(e,l),n=(0,b.createTable)(e,s);(0,x.drawTable)(e,n)}}(),N}())}}]);