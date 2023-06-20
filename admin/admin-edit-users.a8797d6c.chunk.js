"use strict";(self.webpackChunkyuewu_dev=self.webpackChunkyuewu_dev||[]).push([[4263],{50935:(B,c,e)=>{e.d(c,{R:()=>u});var t=e(88767),a=e(22551),s=e(80129);function u(o={},m={}){const{id:n="",...d}=o,i=(0,s.stringify)(d,{encode:!1}),{get:l}=(0,a.useFetchClient)(),{data:r,isError:y,isLoading:U,refetch:L}=(0,t.useQuery)(["users",n,d],async()=>{const{data:{data:D}}=await l(`/admin/users/${n}${i?`?${i}`:""}`);return D},m);let M=[];return n&&r?M=[r]:Array.isArray(r?.results)&&(M=r.results),{users:M,pagination:r?.pagination??null,isLoading:U,isError:y,refetch:L}}},22282:(B,c,e)=>{e.r(c),e.d(c,{default:()=>Ee});var t=e(53547),a=e(22551),s=e(16550),u=e(87751),o=e(87462),m=e(15861),n=e(70885),d=e(64687),i=e.n(d),l=e(22072),r=e(45697),y=e.n(r),U=e(78718),L=e.n(U),M=e(27361),D=e.n(M),Z=e(57557),I=e.n(Z),J=e(69554),x=e(185),N=e(53979),X=e(29728),O=e(49066),W=e(41580),K=e(11047),G=e(75515),H=e(11276),Y=e(67819),h=e(85018),_=e(67109),b=e(19631);const le=async(S,z)=>{const{put:A}=(0,a.getFetchClient)(),{data:R}=await A(`/admin/users/${S}`,z);return R.data},de=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.username.label",defaultMessage:"Username"},name:"username",placeholder:{id:"Auth.form.username.placeholder",defaultMessage:"e.g. Kai_Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"global.password",defaultMessage:"Password"},name:"password",type:"password",size:{col:6,xs:12},autoComplete:"new-password"},{intlLabel:{id:"Auth.form.confirmPassword.label",defaultMessage:"Password confirmation"},name:"confirmPassword",type:"password",size:{col:6,xs:12},autoComplete:"new-password"}],[{intlLabel:{id:"Auth.form.active.label",defaultMessage:"Active"},name:"isActive",type:"bool",size:{col:6,xs:12}}]];var ce=e(17405),ue=e(81288),me=e(50935),ge=function(){return window&&window.strapi&&window.strapi.isEE?e(12201).Z:e(31605).Z}(),q=["email","firstname","lastname","username","isActive","roles"],ee=function(z){var A=z.canUpdate,R=(0,l.Z)(),g=R.formatMessage,k=(0,s.$B)("/settings/users/:id"),$=k.params.id,fe=(0,s.k6)(),ve=fe.push,Me=(0,a.useAppInfo)(),he=Me.setUserDisplayName,j=(0,a.useNotification)(),te=(0,a.useOverlayBlocker)(),Pe=te.lockApp,ye=te.unlockApp;(0,a.useFocusWhenNavigate)();var ae=(0,me.R)({id:$},{onError:function(f){var p=f.response.status;p===403?(j({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}}),ve("/")):j({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),Ae=(0,n.Z)(ae.users,1),P=Ae[0],se=ae.isLoading,Le=function(){var E=(0,m.Z)(i().mark(function f(p,T){var F,V,C,w,re;return i().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return Pe(),v.prev=1,v.next=4,le($,I()(p,"confirmPassword"));case 4:F=v.sent,j({type:"success",message:g({id:"notification.success.saved",defaultMessage:"Saved"})}),V=a.auth.getUserInfo(),$.toString()===V.id.toString()&&(a.auth.setUserInfo(F),C=D()(p,"username")||(0,b.Pp)(p.firstname,p.lastname),he(C)),T.setValues(L()(p,q)),v.next=17;break;case 11:v.prev=11,v.t0=v.catch(1),w=(0,b.Iz)(v.t0.response.data),re=Object.keys(w).reduce(function(oe,ie){return oe[ie]=w[ie].id,oe},{}),T.setErrors(re),j({type:"warning",message:D()(v.t0,"response.data.error.message","notification.error")});case 17:ye();case 18:case"end":return v.stop()}},f,null,[[1,11]])}));return function(p,T){return E.apply(this,arguments)}}(),De=se?{id:"app.containers.Users.EditPage.header.label-loading",defaultMessage:"Edit user"}:{id:"app.containers.Users.EditPage.header.label",defaultMessage:"Edit {name}"},Q=Object.keys(L()(P,q)).reduce(function(E,f){return f==="roles"?(E[f]=(P?.roles||[]).map(function(p){var T=p.id;return T}),E):(E[f]=P?.[f],E)},{}),Oe=Q.username||(0,b.Pp)(Q.firstname,Q.lastname),ne=g(De,{name:Oe});return se?t.createElement(x.o,{"aria-busy":"true"},t.createElement(a.SettingsPageTitle,{name:"Users"}),t.createElement(N.T,{primaryAction:t.createElement(X.z,{disabled:!0,startIcon:t.createElement(h.Z,null),type:"button",size:"L"},g({id:"global.save",defaultMessage:"Save"})),title:ne,navigationAction:t.createElement(a.Link,{startIcon:t.createElement(_.Z,null),to:"/settings/users?pageSize=10&page=1&sort=firstname"},g({id:"global.back",defaultMessage:"Back"}))}),t.createElement(O.D,null,t.createElement(a.LoadingIndicatorPage,null))):t.createElement(x.o,null,t.createElement(a.SettingsPageTitle,{name:"Users"}),t.createElement(J.Formik,{onSubmit:Le,initialValues:Q,validateOnChange:!1,validationSchema:ce.YM},function(E){var f=E.errors,p=E.values,T=E.handleChange,F=E.isSubmitting;return t.createElement(a.Form,null,t.createElement(N.T,{primaryAction:t.createElement(X.z,{disabled:F||!A,startIcon:t.createElement(h.Z,null),loading:F,type:"submit",size:"L"},g({id:"global.save",defaultMessage:"Save"})),title:ne,navigationAction:t.createElement(a.Link,{startIcon:t.createElement(_.Z,null),to:"/settings/users?pageSize=10&page=1&sort=firstname"},g({id:"global.back",defaultMessage:"Back"}))}),t.createElement(O.D,null,P?.registrationToken&&t.createElement(W.x,{paddingBottom:6},t.createElement(ge,{registrationToken:P.registrationToken})),t.createElement(K.k,{direction:"column",alignItems:"stretch",gap:7},t.createElement(W.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(K.k,{direction:"column",alignItems:"stretch",gap:4},t.createElement(G.Z,{variant:"delta",as:"h2"},g({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"Details"})),t.createElement(H.r,{gap:5},de.map(function(V){return V.map(function(C){return t.createElement(Y.P,(0,o.Z)({key:C.name},C.size),t.createElement(a.GenericInput,(0,o.Z)({},C,{disabled:!A,error:f[C.name],onChange:T,value:p[C.name]||""})))})})))),t.createElement(W.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(K.k,{direction:"column",alignItems:"stretch",gap:4},t.createElement(G.Z,{variant:"delta",as:"h2"},g({id:"global.roles",defaultMessage:"User's role"})),t.createElement(H.r,{gap:5},t.createElement(Y.P,{col:6,xs:12},t.createElement(ue.Z,{disabled:!A,error:f.roles,onChange:T,value:p.roles}))))))))}))};ee.propTypes={canUpdate:y().bool.isRequired};const pe=ee,Ee=()=>{const S=(0,a.useNotification)(),z=(0,t.useMemo)(()=>({read:u.Z.settings.users.read,update:u.Z.settings.users.update}),[]),{isLoading:A,allowedActions:{canRead:R,canUpdate:g}}=(0,a.useRBAC)(z),{state:k}=(0,s.TH)(),$=k?.from??"/";return(0,t.useEffect)(()=>{A||!R&&!g&&S({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}})},[A,R,g,S]),A?t.createElement(a.LoadingIndicatorPage,null):!R&&!g?t.createElement(s.l_,{to:$}):t.createElement(pe,{canUpdate:g})}},82464:(B,c,e)=>{e.d(c,{Z:()=>i});var t=e(53547),a=e(45697),s=e.n(a),u=e(12028),o=e(22551),m=e(65186),n=e(22072);const d=({children:l,target:r})=>{const y=(0,o.useNotification)(),{formatMessage:U}=(0,n.Z)(),{copy:L}=(0,o.useClipboard)(),M=U({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),D=async()=>{await L(r)&&y({type:"info",message:{id:"notification.link-copied"}})};return t.createElement(o.ContentBox,{endAction:t.createElement(u.h,{label:M,noBorder:!0,icon:t.createElement(m.Z,null),onClick:D}),title:r,titleEllipsis:!0,subtitle:l,icon:t.createElement("span",{style:{fontSize:32}},"\u2709\uFE0F"),iconBackground:"neutral100"})};d.propTypes={children:s().oneOfType([s().element,s().string]).isRequired,target:s().string.isRequired};const i=d},31605:(B,c,e)=>{e.d(c,{Z:()=>d});var t=e(53547),a=e(22072),s=e(45697),u=e.n(s),o=e(63871),m=e(82464);const n=({registrationToken:i})=>{const{formatMessage:l}=(0,a.Z)(),r=`${window.location.origin}${o.Z}auth/register?registrationToken=${i}`;return t.createElement(m.Z,{target:r},l({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"}))};n.defaultProps={registrationToken:""},n.propTypes={registrationToken:u().string};const d=n},81288:(B,c,e)=>{e.d(c,{Z:()=>D});var t=e(53547),a=e(45697),s=e.n(a),u=e(22072),o=e(40619),m=e(82562),n=e(88767),d=e(54863),i=e(86647),l=e(22551);const r=d.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,y=d.default.div`
  animation: ${r} 2s infinite linear;
`,U=()=>t.createElement(y,null,t.createElement(i.Z,null)),L=async()=>{const{get:Z}=(0,l.getFetchClient)(),{data:I}=await Z("/admin/roles");return I.data},M=({disabled:Z,error:I,onChange:J,value:x})=>{const{status:N,data:X}=(0,n.useQuery)(["roles"],L,{staleTime:5e4}),{formatMessage:O}=(0,u.Z)(),W=I?O({id:I,defaultMessage:I}):"",K=O({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),G=O({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),H=O({id:"app.components.Select.placeholder",defaultMessage:"Select"}),Y=N==="loading"?t.createElement(U,null):void 0;return t.createElement(o.P,{id:"roles",disabled:Z,error:W,hint:G,label:K,name:"roles",onChange:h=>{J({target:{name:"roles",value:h}})},placeholder:H,multi:!0,startIcon:Y,value:x.map(h=>h.toString()),withTags:!0,required:!0},(X||[]).map(h=>t.createElement(m.W,{key:h.id,value:h.id.toString()},O({id:`global.${h.code}`,defaultMessage:h.name}))))};M.defaultProps={disabled:!1,error:void 0},M.propTypes={disabled:s().bool,error:s().string,onChange:s().func.isRequired,value:s().array.isRequired};const D=M},17405:(B,c,e)=>{e.d(c,{YM:()=>i,Rw:()=>o});var t=e(87561),a=e(22551);const s={firstname:t.Z_().trim().required(a.translatedErrors.required),lastname:t.Z_(),email:t.Z_().email(a.translatedErrors.email).lowercase().required(a.translatedErrors.required),username:t.Z_().nullable(),password:t.Z_().min(8,a.translatedErrors.minLength).matches(/[a-z]/,"components.Input.error.contain.lowercase").matches(/[A-Z]/,"components.Input.error.contain.uppercase").matches(/\d/,"components.Input.error.contain.number"),confirmPassword:t.Z_().min(8,a.translatedErrors.minLength).oneOf([t.iH("password"),null],"components.Input.error.password.noMatch").when("password",(l,r)=>l?r.required(a.translatedErrors.required):r)},o={...s,currentPassword:t.Z_().when(["password","confirmPassword"],(l,r,y)=>l||r?y.required(a.translatedErrors.required):y),preferedLanguage:t.Z_().nullable()},n={roles:t.IX().min(1,a.translatedErrors.required).required(a.translatedErrors.required)},i=t.Ry().shape({...s,isActive:t.Xg(),...n})},12201:(B,c,e)=>{e.d(c,{Z:()=>d});var t=e(53547),a=e(22072),s=e(45697),u=e.n(s),o=e(63871),m=e(82464);const n=({registrationToken:i})=>{const{formatMessage:l}=(0,a.Z)();return i?t.createElement(m.Z,{target:`${window.location.origin}${o.Z}auth/register?registrationToken=${i}`},l({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})):t.createElement(m.Z,{target:`${window.location.origin}${o.Z}auth/login`},l({id:"app.components.Users.MagicLink.connect.sso",defaultMessage:"Send this link to the user, the first login can be made via a SSO provider."}))};n.defaultProps={registrationToken:""},n.propTypes={registrationToken:u().string};const d=n}}]);