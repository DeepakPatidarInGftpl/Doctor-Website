"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[8592],{3512:(b,y,i)=>{i.d(y,{Z:()=>c});const c={type:"doc",content:[{type:"heading",attrs:{level:1,align:null},content:[{type:"text",text:"Hello"}]},{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"This is editable text. "},{type:"text",marks:[{type:"text_color",attrs:{color:"#d93f0b"}}],text:"You can focus it and start typing"},{type:"text",text:"."}]},{type:"paragraph",attrs:{align:null},content:[{type:"text",marks:[{type:"code"}],text:"code block"}]},{type:"blockquote",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",marks:[{type:"strong"}],text:"Lorem Ipsum"},{type:"text",text:"\xa0is "},{type:"text",marks:[{type:"text_background_color",attrs:{backgroundColor:"#fbca04"}}],text:"simply dummy"},{type:"text",text:" text of the printing and typesetting industry. "},{type:"text",marks:[{type:"em"}],text:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},{type:"text",text:", when an unknown printer took a galley of type and scrambled it to make a type specimen book."}]}]},{type:"heading",attrs:{level:2,align:null},content:[{type:"text",text:"The code block is a code editor"}]},{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"This editor has been wired up to render code blocks as instances of the "},{type:"text",marks:[{type:"link",attrs:{href:"https://codemirror.net",title:"https://codemirror.net",target:"_blank"}}],text:"CodeMirror"},{type:"text",text:" code editor, which provides "},{type:"text",marks:[{type:"link",attrs:{href:"https://en.wikipedia.org",title:"",target:"_blank"}}],text:"syntax highlighting"},{type:"text",text:", auto-indentation, and similar."}]},{type:"code_block",content:[{type:"text",text:"function max(a, b) {\n  return a > b ? a : b\n}"}]},{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"The content of the code editor is kept in sync with the content of the code block in the rich text editor, so that it is as if you're directly editing the outer document, using a more convenient interface."}]},{type:"heading",attrs:{level:4,align:"center"},content:[{type:"text",text:"Mr. Bean"}]},{type:"paragraph",attrs:{align:"center"},content:[{type:"text",text:"The image is resizable. Include "},{type:"text",marks:[{type:"strong"}],text:"image"},{type:"text",text:" plugin to enable image resizing"}]},{type:"heading",attrs:{level:3,align:"center"},content:[{type:"image",attrs:{src:"https://wallpapercave.com/wp/wp2318909.png",alt:"Bean",title:"Mr. Bean",width:"98px"}}]},{type:"heading",attrs:{level:3,align:null},content:[{type:"text",text:"Bullet list"}]},{type:"bullet_list",content:[{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",marks:[{type:"strong"}],text:"Lorem Ipsum"},{type:"text",text:"\xa0is simply dummy text of the printing and typesetting industry"}]},{type:"bullet_list",content:[{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"("},{type:"text",marks:[{type:"strong"}],text:"depth 1"},{type:"text",text:") It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}]},{type:"bullet_list",content:[{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"("},{type:"text",marks:[{type:"strong"}],text:"depth 2"},{type:"text",text:") The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."}]}]}]}]}]}]},{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable"}]}]},{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."}]}]}]},{type:"heading",attrs:{level:4,align:null},content:[{type:"text",text:"Ordered List"}]},{type:"ordered_list",attrs:{order:1},content:[{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",marks:[{type:"strong"}],text:"Lorem Ipsum"},{type:"text",text:"\xa0is simply dummy text of the printing and typesetting industry"}]}]},{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable"}]},{type:"ordered_list",attrs:{order:1},content:[{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"("},{type:"text",marks:[{type:"strong"}],text:"depth 1"},{type:"text",text:") It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}]},{type:"ordered_list",attrs:{order:1},content:[{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"("},{type:"text",marks:[{type:"strong"}],text:"depth 2"},{type:"text",text:") The chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."}]}]}]}]}]}]},{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."}]}]}]}]}},3631:(b,y,i)=>{i.d(y,{T:()=>u});var c=i(1135),h=i(1571),m=i(1728);let u=(()=>{class p{constructor(e){this.router=e,this.Loginvalue=new c.X(0),this.Createaccountvalue=new c.X(0),this.Forgotpasswordvalue=new c.X(0)}Createaccount(e){let a=localStorage.getItem("Loginusers"),s=[];s=JSON.parse(a||""),s.find(l=>{if(l.email==e.email)this.Createaccountvalue.next("This email are already exist");else{s.push(e);const d=JSON.stringify(s);localStorage.setItem("Loginusers",d),this.Login(e)}})}Login(e){let a={message:"",status:""},s=localStorage.getItem("Loginusers");const d=JSON.parse(s||"").find(({email:f})=>f===e.email);d?d.password===e.password?(this.Createtoken(e),this.Loginvalue.next("Login success"),this.router.navigate(["/index"]),this.Loginvalue.next(0)):(a.message="Incorrect password",a.status="password",this.Loginvalue.next(a)):(a.message="Email is  not valid",a.status="email",this.Loginvalue.next(a))}Createtoken(e){localStorage.setItem("LoginData","ABCDEFGHI"+e.email+"ghijklmnopqrsz01234567")}Deleteuser(){localStorage.removeItem("Loginusers"),localStorage.removeItem("LoginData")}Checkuser(){if(null===localStorage.getItem("Loginusers")){const s=JSON.stringify([{email:"admin@dreamguys.in",password:"123456"}]);localStorage.setItem("Loginusers",s)}}Forgotpassword(e){let a=localStorage.getItem("Loginusers"),s=[{email:""}];s=JSON.parse(a||"");const l=s.find(({email:d})=>d===e.email);this.Forgotpasswordvalue.next(l||"Email Not Valid")}}return p.\u0275fac=function(e){return new(e||p)(h.LFG(m.F0))},p.\u0275prov=h.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},3101:(b,y,i)=>{i.d(y,{E:()=>k});var c=i(4408);let m,h=1;const u={};function p(r){return r in u&&(delete u[r],!0)}const x={setImmediate(r){const t=h++;return u[t]=!0,m||(m=Promise.resolve()),m.then(()=>p(t)&&r()),t},clearImmediate(r){p(r)}},{setImmediate:a,clearImmediate:s}=x,l={setImmediate(...r){const{delegate:t}=l;return(t?.setImmediate||a)(...r)},clearImmediate(r){const{delegate:t}=l;return(t?.clearImmediate||s)(r)},delegate:void 0};var f=i(640);const k=new class v extends f.v{flush(t){this._active=!0;const o=this._scheduled;this._scheduled=void 0;const{actions:n}=this;let g;t=t||n.shift();do{if(g=t.execute(t.state,t.delay))break}while((t=n[0])&&t.id===o&&n.shift());if(this._active=!1,g){for(;(t=n[0])&&t.id===o&&n.shift();)t.unsubscribe();throw g}}}(class d extends c.o{constructor(t,o){super(t,o),this.scheduler=t,this.work=o}requestAsyncId(t,o,n=0){return null!==n&&n>0?super.requestAsyncId(t,o,n):(t.actions.push(this),t._scheduled||(t._scheduled=l.setImmediate(t.flush.bind(t,void 0))))}recycleAsyncId(t,o,n=0){if(null!=n&&n>0||null==n&&this.delay>0)return super.recycleAsyncId(t,o,n);t.actions.some(g=>g.id===o)||(l.clearImmediate(o),t._scheduled=void 0)}})}}]);