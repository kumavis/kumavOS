"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8512],{80807:function(e,t,n){const i=n(14141).ZP.div.withConfig({componentId:"sc-8ce3e3c2-0"})`
  iframe {
    background-color: ${e=>{let{$hasSrcDoc:t}=e;return t?"#fff":"initial"}};
    border: 0;
    height: calc(100% - 36px - 33px);
    width: 100%;
  }

  nav {
    background-color: rgb(87, 87, 87);
    display: flex;
    padding: 4px 0;
    place-content: center;
    place-items: center;

    div {
      display: flex;
      justify-content: space-around;
      min-width: 102px;
      padding-left: 6px;
      width: 102px;
    }

    button {
      border-radius: 50%;
      display: flex;
      height: 28px;
      place-content: center;
      place-items: center;
      transition: background 0.2s ease-in-out;
      width: 28px;

      svg {
        fill: rgb(240, 240, 240);
        height: 22px;
        width: 22px;
      }

      &:hover {
        background-color: rgb(103, 103, 103);
      }

      &:active {
        background-color: rgb(110, 110, 110);
      }

      &:disabled {
        background-color: inherit;

        svg {
          fill: rgb(152, 152, 152);
        }
      }
    }

    &:not(:first-child) {
      border-bottom: 1px solid rgb(118, 115, 118);
      height: 33px;
      justify-content: left;
      padding: 0 8px;

      button {
        margin-bottom: 4px;
        margin-right: 4px;
      }
    }

    input {
      background-color: rgb(64, 62, 65);
      border-radius: 18px;
      color: rgb(255, 255, 255);
      font-family: ${e=>{let{theme:t}=e;return t.formats.systemFont}};
      font-size: 13px;
      height: 28px;
      letter-spacing: 0.2px;
      line-height: 26px;
      margin: 0 6px;
      padding: 0 13px;
      width: 100%;

      &:focus {
        outline: 2px solid rgb(138, 180, 248);
      }
    }
  }
`;t.Z=i},78512:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var i=n(85893),o=n(64358);const r=[{icon:"/System/Icons/Favicons/google.webp",name:"Google",url:"https://www.google.com/webhp?igu=1"},{icon:"/System/Icons/Favicons/wikipedia.webp",name:"Wikipedia",url:"https://www.wikipedia.org/"},{icon:"/System/Icons/Favicons/archive.webp",name:"Internet Archive",url:"https://archive.org/"},{icon:o.Yg,name:"daedalOS",url:"https://dustinbrett.com/"},{icon:"/System/Icons/Favicons/win96.webp",name:"Windows 96",url:"https://windows96.net/"},{icon:"/System/Icons/Favicons/aos.webp",name:"AaronOS",url:"https://aaronos.dev/"},{icon:"/System/Icons/Favicons/diablo.webp",name:"Diablo",url:"https://d07riv.github.io/diabloweb/"}];var s=n(67294);const c=e=>{let{direction:t}=e;const n=(0,s.useMemo)((()=>"right"===t?{transform:"scaleX(-1)"}:void 0),[t]);return(0,i.jsx)("svg",{style:n,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})})},l=()=>(0,i.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})}),a=()=>(0,i.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})});var d=n(80807),u=n(7459),p=n(26724),h=n(56758),g=n(25804),w=n(19682),x=n(30663),f=n(42362),b=n(34254),m=e=>{let{id:t}=e;const{icon:n,linkElement:m,url:v,processes:{[t]:k}}=(0,h.z)(),{prependFileToTitle:y}=(0,u.Z)(t),{url:S=""}=k||{},j=S||"https://www.google.com/webhp?igu=1",{canGoBack:$,canGoForward:C,history:F,moveHistory:Z,position:E}=(0,w.Z)(j,t),{exists:I,readFile:z}=(0,p.o)(),B=(0,s.useRef)(null),L=(0,s.useRef)(null),[R,T]=(0,s.useState)(!1),[G,A]=(0,s.useState)(""),D=e=>{Z(e),B.current&&(B.current.value=F[E+e])},H=(0,s.useRef)(""),P=(0,s.useCallback)((async e=>{const{contentWindow:i}=L.current||{};if(i?.location){const s=[".htm",".html"].includes((0,b.RT)(e))&&await I(e);if(T(!0),A(""),s&&A((await z(e)).toString()),n(t,g.Z.Browser.icon),!s){const s=await(0,b.Qv)(e);if(i.location.replace(s),s.startsWith(b.z8))y(`${e} - Google Search`);else{const{name:t=""}=r?.find((t=>{let{url:n}=t;return n===e}))||{};y(t)}if(e.startsWith("ipfs://"))n(t,"/System/Icons/Favicons/ipfs.webp");else{const e=new Image,i=`${new URL(s).origin}${o.Yg}`;e.addEventListener("error",(()=>{const{icon:e}=r?.find((e=>{let{url:t}=e;return t===s}))||{};e&&n(t,e)}),o.K7),e.addEventListener("load",(()=>n(t,i)),o.K7),e.src=i}}}}),[I,t,y,z,n]);return(0,s.useEffect)((()=>{k&&F[E]!==H.current&&(H.current=F[E],P(F[E]))}),[F,E,k,P]),(0,s.useEffect)((()=>{L?.current&&m(t,"peekElement",L.current)}),[t,m]),(0,i.jsxs)(d.Z,{$hasSrcDoc:Boolean(G),children:[(0,i.jsxs)("nav",{children:[(0,i.jsxs)("div",{children:[(0,i.jsx)(x.Z,{disabled:!$,onClick:()=>D(-1),...(0,b.PS)("Click to go back"),children:(0,i.jsx)(c,{direction:"left"})}),(0,i.jsx)(x.Z,{disabled:!C,onClick:()=>D(1),...(0,b.PS)("Click to go forward"),children:(0,i.jsx)(c,{direction:"right"})}),(0,i.jsx)(x.Z,{disabled:R,onClick:()=>P(F[E]),...(0,b.PS)("Reload this page"),children:R?(0,i.jsx)(a,{}):(0,i.jsx)(l,{})})]}),(0,i.jsx)("input",{ref:B,defaultValue:j,enterKeyHint:"go",onFocusCapture:()=>B.current?.select(),onKeyDown:e=>{let{key:n}=e;B.current&&"Enter"===n&&(v(t,B.current.value),window.getSelection()?.removeAllRanges(),B.current.blur())},type:"text"})]}),(0,i.jsx)("nav",{children:r.map((e=>{let{name:n,icon:o,url:r}=e;return(0,i.jsx)(x.Z,{onClick:()=>{B.current&&(B.current.value=r),v(t,r)},...(0,b.PS)(`${n}\n${r}`),children:(0,i.jsx)(f.Z,{alt:n,imgSize:16,src:o})},n)}))}),(0,i.jsx)("iframe",{ref:L,onLoad:()=>T(!1),srcDoc:G||void 0,title:t,...o.v0})]})}},7459:function(e,t,n){var i=n(56758),o=n(25804),r=n(67294),s=n(64358);t.Z=e=>{const{title:t}=(0,i.z)(),[n]=e.split(s.CC),{title:c}=o.Z[n]||{};return{appendFileToTitle:(0,r.useCallback)(((n,i)=>{const o=n?` - ${n}${i?` ${s.xy}`:""}`:"";t(e,`${c}${o}`)}),[e,c,t]),prependFileToTitle:(0,r.useCallback)(((n,i)=>{const o=n?`${i?`${s.xy} `:""}${n} - `:"";t(e,`${o}${c}`)}),[e,c,t])}}},19682:function(e,t,n){var i=n(56758),o=n(67294);t.Z=(e,t)=>{const{url:n}=(0,i.z)(),[r,s]=(0,o.useState)(e),[c,l]=(0,o.useState)((()=>[e])),[a,d]=(0,o.useState)(0),u=(0,o.useCallback)((e=>{const i=a+e;d(i),s(c[i]),n(t,c[i])}),[n,c,t,a]);return(0,o.useEffect)((()=>{e!==r&&(d(a+1),s(e),l([...c.slice(0,a+1),e]))}),[r,c,a,e]),{canGoBack:a>0,canGoForward:a<c.length-1,currentUrl:r,history:c,moveHistory:u,position:a}}}}]);