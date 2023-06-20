"use strict";(self.webpackChunkyuewu_dev=self.webpackChunkyuewu_dev||[]).push([[9987],{73032:(R,i,t)=>{t.d(i,{Z:()=>r});var e=t(22551),E=t(78967);const{get:u,post:c,put:g,del:d}=(0,e.getFetchClient)(),r={get:async()=>(await u(`/${E.Z}/settings`)).data,update:async o=>(await c(`/${E.Z}/settings`,o)).data}},89578:(R,i,t)=>{t.d(i,{Z:()=>h});var e=t(53547),E=t(54863),u=t(19270),c=t(54574),g=t(7681),d=t(11047),m=t(41580),r=t(23620),o=t(45377),P=t(63428),s=t(96404);const p=(0,E.default)(u.Q)`
  & > div {
    width: max-content;
  }
`,M=E.default.button`
  border: none;
  padding: 0;
  background: transparent;
`,h=({name:y,label:K,value:v,isPassword:A,placeholder:n,description:l,tooltip:F,detailsLink:D,error:C,required:B,onChange:I=()=>{},editable:O})=>e.createElement(c.g,{name:y,required:B,hint:l,error:C},e.createElement(g.K,{spacing:1},e.createElement(d.k,null,e.createElement(p,null,K),e.createElement(m.x,{paddingLeft:2}),D&&e.createElement(d.k,{width:"100%",justifyContent:"flex-end"},e.createElement(r.r,{isExternal:!0,href:D},"Details"))),e.createElement(o._,{disabled:O===void 0?!1:!O,placeholder:n,value:v,type:A?"password":"text",onChange:I}),e.createElement(P.J,null),e.createElement(s.c,null)))},29987:(R,i,t)=>{t.r(i),t.d(i,{default:()=>v});var e=t(53547),E=t(22072),u=t(22551),c=t(53979),g=t(29728),d=t(49066),m=t(41580),r=t(7681),o=t(75515),P=t(11276),s=t(67819),p=t(85018),M=t(73032),_=t(89578),h=t(77853),y=t(38620);const K=()=>{const{formatMessage:A}=(0,E.Z)(),[n,l]=(0,e.useState)({accessKeyId:"",accessKeySecret:"",endpoint:"",regionId:"",cateId:"",storageRegion:"",signingKey:"",callbackUrl:""}),{lockApp:F,unlockApp:D}=(0,u.useOverlayBlocker)(),C=(0,u.useNotification)(),B=async()=>{const a=await M.Z.get();l(a)};(0,e.useEffect)(()=>{B()},[]);const I=a=>{l({...n,accessKeyId:a.target.value})},O=a=>{l({...n,accessKeySecret:a.target.value})},L=a=>{l({...n,regionId:a.target.value})},T=a=>{l({...n,endpoint:a.target.value})},U=a=>{l({...n,storageRegion:a.target.value})},W=a=>{l({...n,signingKey:a.target.value})},S=a=>{l({...n,callbackUrl:a.target.value})},Z=async()=>{F();const a=await M.Z.update(n);C(a?{type:"success",message:"\u8BBE\u7F6E\u5DF2\u4FDD\u5B58\u3002"}:{type:"warning",message:"\u8BF7\u914D\u7F6E\u6709\u6548\u6570\u636E\uFF01"}),D()};return e.createElement(e.Fragment,null,e.createElement(c.T,{title:A({id:(0,y.Z)("plugin.name")}),primaryAction:e.createElement(g.z,{type:"submit",onClick:Z,startIcon:e.createElement(p.Z,null),size:"L"},"\u4FDD\u5B58")}),e.createElement(d.D,null,e.createElement(m.x,{background:"neutral100",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(r.K,{size:4},e.createElement(o.Z,{variant:"delta",as:"h2"},"Settings"),e.createElement(P.r,{gap:6},e.createElement(s.P,{col:12,s:12},e.createElement(_.Z,{name:"API Key",label:"API Key",value:n.accessKeyId,placeholder:"\u8F93\u5165\u4F60\u7684 AccessKeyId",description:"\u5728\u963F\u91CC\u4E91\u63A7\u5236\u53F0\u521B\u5EFA\u8BBF\u95EE\u5BC6\u94A5",detailsLink:"https://help.aliyun.com/document_detail/116401.html?spm=a2c4g.116401.0.0.60e73669VvRy5H",isPassword:!0,onChange:I})),e.createElement(s.P,{col:12,s:12},e.createElement(_.Z,{name:"API Key Secret",label:"API Key Secret",value:n.accessKeySecret,placeholder:"\u8F93\u5165\u4F60\u7684 AccessKeySecret",isPassword:!0,onChange:O})),e.createElement(s.P,{col:12,s:12},e.createElement(_.Z,{name:"Region Id",label:"Region Id",value:n.regionId,placeholder:"\u8F93\u5165\u4F60\u7684API\u63A5\u5165\u5730\u57DF\u6807\u8BC6",detailsLink:"https://help.aliyun.com/document_detail/98194.html",onChange:L})),e.createElement(s.P,{col:12,s:12},e.createElement(_.Z,{name:"Endpoint",label:"Endpoint",value:n.endpoint,placeholder:"\u8F93\u5165\u4F60\u7684\u63A5\u5165\u5730\u5740\uFF08\u8BBF\u95EE\u57DF\u540D\uFF09",detailsLink:"https://help.aliyun.com/document_detail/98194.html",onChange:T})),e.createElement(s.P,{col:12,s:12},e.createElement(_.Z,{name:"Storage Region",label:"Storage Region",value:n.storageRegion,placeholder:"\u8F93\u5165\u4F60\u7684\u5B58\u50A8\u5730\u57DF\u6807\u8BC6",detailsLink:"https://help.aliyun.com/document_detail/98194.html",onChange:U})),e.createElement(s.P,{col:12,s:12},e.createElement(_.Z,{name:"Cate Id",label:"Cate Id",value:n.cateId,placeholder:"\u8F93\u5165\u4F60\u7684\u5206\u7C7BID"})),e.createElement(s.P,{col:12,s:12},e.createElement(_.Z,{name:"Signing Key",label:"Signing Key",value:n.signingKey,placeholder:"\u8F93\u5165\u4F60\u7684\u7B7E\u540Dkey",onChange:W})),e.createElement(s.P,{col:12,s:12},e.createElement(_.Z,{name:"Calback Url",label:"Calback Url",value:n.callbackUrl,onChange:S,placeholder:"\u8F93\u5165\u4F60\u7684\u56DE\u8C03\u5730\u5740"})))))))},v=()=>e.createElement(u.CheckPagePermissions,{permissions:h.Z.settingsRoles},e.createElement(K,null))}}]);