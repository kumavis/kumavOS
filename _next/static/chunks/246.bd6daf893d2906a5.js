"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[246],{80246:function(t,e,r){async function n(t){let e=0;const r=[];await async function(t,e){const r=function(t){return t[Symbol.asyncIterator]?t[Symbol.asyncIterator]():t[Symbol.iterator]?t[Symbol.iterator]():t.next?t:function(t){let e=[t];return{next:()=>Promise.resolve({done:0===e.length,value:e.pop()}),return:()=>(e=[],{}),[Symbol.asyncIterator](){return this}}}(t)}(t);for(;;){const{value:t,done:n}=await r.next();if(t&&await e(t),n)break}r.return&&r.return()}(t,(t=>{r.push(t),e+=t.byteLength}));const n=new Uint8Array(e);let o=0;for(const t of r)n.set(t,o),o+=t.byteLength;return n}async function o({onProgress:t,url:e,method:r="GET",headers:o={},body:a}){a&&(a=await n(a));const s=await fetch(e,{method:r,headers:o,body:a}),u=s.body&&s.body.getReader?function(t){if(t[Symbol.asyncIterator])return t;const e=t.getReader();return{next:()=>e.read(),return:()=>(e.releaseLock(),{}),[Symbol.asyncIterator](){return this}}}(s.body):[new Uint8Array(await s.arrayBuffer())];o={};for(const[t,e]of s.headers.entries())o[t]=e;return{url:s.url,method:s.method,statusCode:s.status,statusMessage:s.statusText,body:u,headers:o}}r.r(e),r.d(e,{request:function(){return o}});var a={request:o};e.default=a}}]);