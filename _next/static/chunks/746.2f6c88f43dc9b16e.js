"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[746],{31404:function(e,t,n){var i=n(85893),s=n(55785),a=n(56758),o=n(5152),r=n.n(o),l=n(67294);const c=r()((()=>n.e(6753).then(n.bind(n,26753))),{loadableGenerated:{webpack:()=>[26753]}});t.Z=e=>{let{id:t,useHook:n,StyledComponent:o,children:r}=e;const{processes:{[t]:{url:u=""}={}}}=(0,a.z)(),d=(0,l.useRef)(null),[h,f]=(0,l.useState)(!0),g=(0,l.useMemo)((()=>({contain:"strict",visibility:h?"hidden":"visible"})),[h]);return n(t,u,d,f,h),(0,i.jsxs)(i.Fragment,{children:[h&&(0,i.jsx)(c,{}),(0,i.jsx)(o,{ref:d,style:g,...(0,s.Z)({id:t}),children:r})]})}},746:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var i=n(85893),s=n(31404),a=n(14141),o=a.ZP.div.withConfig({componentId:"sc-bf9d7d9b-0"})`
  height: ${e=>{let{theme:t}=e;return`calc(100% - ${t.sizes.titleBar.height}px)`}};
  width: 100%;

  canvas {
    height: 100%;
    width: 100%;
  }
`,r=n(56758),l=n(62065),c=n(67294),u=n(64358),d=n(34254),h=(e,t,n,i)=>{const{processes:{[e]:s}={}}=(0,r.z)(),{windowStates:{[e]:o}}=(0,l.k)(),{size:h}=o||{},{libs:f}=s||{},{sizes:{titleBar:g}}=(0,a.Fg)(),m=(0,c.useCallback)((()=>n.current?.querySelector("canvas")),[n]);(0,c.useEffect)((()=>{h&&(window.CCModule.setCanvasSize?.((0,d.Vy)(h.width),(0,d.Vy)(h.height)-g.height),window.CCModule.OnResize?.())}),[m,h,g.height]),(0,c.useEffect)((()=>{window.CCModule||setTimeout((()=>{const e=m();window.CCModule={arguments:["Singleplayer"],canvas:e,postRun:[()=>i(!1),()=>{const{width:t,height:n}=e.getBoundingClientRect()||{};e.width=t,e.height=n}],print:console.info,setStatus:console.info},(0,d.mb)(f)}),u.jx.WINDOW)}),[m,f,i])},f=e=>{let{id:t}=e;return(0,i.jsx)(s.Z,{StyledComponent:o,id:t,useHook:h,children:(0,i.jsx)("canvas",{onContextMenu:d.nK})})}},55785:function(e,t,n){var i=n(62727),s=n(6529),a=n(42151),o=n(26724),r=n(56758),l=n(62065),c=n(1864),u=n(67294),d=n(64358),h=n(34254);t.Z=e=>{let{callback:t,directory:n=d.Ll,id:f,onDragLeave:g,onDragOver:m,updatePositions:p}=e;const{url:w}=(0,r.z)(),{iconPositions:v,sortOrders:b,setIconPositions:C}=(0,l.k)(),{mkdirRecursive:y,updateFolder:k,writeFile:x}=(0,o.o)(),L=(0,u.useCallback)((async(e,t,n)=>{if(f)if(t){const i=(0,c.join)(d.Ll,e);await y(d.Ll),await x(i,t,!0)&&(n===a.v.UPDATE_URL&&w(f,i),k(d.Ll,e))}else n===a.v.UPDATE_URL&&w(f,e)}),[f,y,k,w,x]),{openTransferDialog:D}=(0,i.Z)();return{onDragLeave:g,onDragOver:e=>{m?.(e),(0,h.nK)(e)},onDrop:e=>{if(p&&e.target instanceof HTMLElement){const{files:t,text:i}=(0,s.p4)(e);if(0===t.length&&""===i)return;const a={x:e.clientX,y:e.clientY};let o=[];if(i){try{o=JSON.parse(i)}catch{}if(!Array.isArray(o))return;const[e]=o;if(!e)return;if(e.startsWith(n)&&(0,c.basename)(e)===(0,c.relative)(n,e))return;o=o.map((e=>(0,c.basename)(e)))}else o=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);o=o.map((e=>{if(!v[`${n}/${e}`])return e;let t=0,i="";do{t+=1,i=`${n}/${(0,c.basename)(e,(0,c.extname)(e))} (${t})${(0,c.extname)(e)}`}while(v[i]);return(0,c.basename)(i)})),(0,h.vi)(n,e.target,v,b,a,o,C)}(0,s.WG)(e,t||L,n,D,Boolean(f))}}}}}]);