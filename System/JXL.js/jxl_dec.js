var Module=function(n){var r,t,e,o,a,i,u,c,f,s,l,p,d,v,h,y,g;(n=void 0!==(n=n||{})?n:{}).ready=new Promise((function(n,e){r=n,t=e}));var m={};for(e in n)n.hasOwnProperty(e)&&(m[e]=n[e]);var w=[],b="";b=0!==(b=self.location.href).indexOf("blob:")?b.substr(0,b.lastIndexOf("/")+1):"",o=function(n){var r=new XMLHttpRequest;return r.open("GET",n,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)};var A=n.print||console.log.bind(console),T=n.printErr||console.warn.bind(console);for(e in m)m.hasOwnProperty(e)&&(n[e]=m[e]);m=null,n.arguments&&(w=n.arguments),n.thisProgram&&n.thisProgram,n.quit&&n.quit;n.wasmBinary&&(a=n.wasmBinary),n.noExitRuntime,"object"!=typeof WebAssembly&&L("no native wasm support detected");var _=!1,E=new TextDecoder("utf8");function P(n,r){if(!n)return"";for(var t=n+r,e=n;!(e>=t)&&f[e];)++e;return E.decode(f.subarray(n,e))}var C=new TextDecoder("utf-16le");function W(n,r){for(var t=n,e=t>>1,o=e+r/2;!(e>=o)&&l[e];)++e;return t=e<<1,C.decode(f.subarray(n,t))}function k(n,r,t){if(void 0===t&&(t=2147483647),t<2)return 0;for(var e=r,o=(t-=2)<2*n.length?t/2:n.length,a=0;a<o;++a){var i=n.charCodeAt(a);s[r>>1]=i,r+=2}return s[r>>1]=0,r-e}function F(n){return 2*n.length}function R(n,r){for(var t=0,e="";!(t>=r/4);){var o=p[n+4*t>>2];if(0==o)break;if(++t,o>=65536){var a=o-65536;e+=String.fromCharCode(55296|a>>10,56320|1023&a)}else e+=String.fromCharCode(o)}return e}function I(n,r,t){if(void 0===t&&(t=2147483647),t<4)return 0;for(var e=r,o=e+t-4,a=0;a<n.length;++a){var i=n.charCodeAt(a);if(i>=55296&&i<=57343&&(i=65536+((1023&i)<<10)|1023&n.charCodeAt(++a)),p[r>>2]=i,(r+=4)+4>o)break}return p[r>>2]=0,r-e}function U(n){for(var r=0,t=0;t<n.length;++t){var e=n.charCodeAt(t);e>=55296&&e<=57343&&++t,r+=4}return r}function j(n,r){return n%r>0&&(n+=r-n%r),n}function S(r){u=r,n.HEAP8=c=new Int8Array(r),n.HEAP16=s=new Int16Array(r),n.HEAP32=p=new Int32Array(r),n.HEAPU8=f=new Uint8Array(r),n.HEAPU16=l=new Uint16Array(r),n.HEAPU32=d=new Uint32Array(r),n.HEAPF32=v=new Float32Array(r),n.HEAPF64=h=new Float64Array(r)}n.INITIAL_MEMORY;var O=[],x=[],M=[];function D(n){O.unshift(n)}function B(n){M.unshift(n)}var H,V=0,q=null,z=null;function L(r){n.onAbort&&n.onAbort(r),T(r+=""),_=!0,1,r="abort("+r+"). Build with -s ASSERTIONS=1 for more info.";var e=new WebAssembly.RuntimeError(r);throw t(e),e}function N(n){return n.startsWith("data:application/octet-stream;base64,")}if(n.preloadedImages={},n.preloadedAudios={},n.locateFile)!N(G="jxl_dec.wasm")&&(H=G,G=n.locateFile?n.locateFile(H,b):b+H);else var G="jxl_dec.wasm";function J(n){try{if(n==G&&a)return new Uint8Array(a);if(o)return o(n);throw"both async and sync fetching of the wasm failed"}catch(n){L(n)}}function X(r){for(;r.length>0;){var t=r.shift();if("function"!=typeof t){var e=t.func;"number"==typeof e?void 0===t.arg?y.get(e)():y.get(e)(t.arg):e(void 0===t.arg?null:t.arg)}else t(n)}}function Y(n){switch(n){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw TypeError("Unknown type size: "+n)}}var Z=void 0;function $(n){for(var r="",t=n;f[t];)r+=Z[f[t++]];return r}var K={},Q={},nn={};function rn(n){if(void 0===n)return"_unknown";var r=(n=n.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return r>=48&&r<=57?"_"+n:n}function tn(n,r){return Function("body","return function "+(n=rn(n))+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(r)}function en(n,r){var t=tn(r,(function(n){this.name=r,this.message=n;var t=Error(n).stack;void 0!==t&&(this.stack=this.toString()+"\n"+t.replace(/^Error(:[^\n]*)?\n/,""))}));return t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},t}var on=void 0;function an(n){throw new on(n)}var un=void 0;function cn(n){throw new un(n)}function fn(n,r,t){if(t=t||{},!("argPackAdvance"in r))throw TypeError("registerType registeredInstance requires argPackAdvance");var e=r.name;if(n||an('type "'+e+'" must have a positive integer typeid pointer'),Q.hasOwnProperty(n)){if(t.ignoreDuplicateRegistrations)return;an("Cannot register type '"+e+"' twice")}if(Q[n]=r,delete nn[n],K.hasOwnProperty(n)){var o=K[n];delete K[n],o.forEach((function(n){n()}))}}var sn=[],ln=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function pn(n){n>4&&0==--ln[n].refcount&&(ln[n]=void 0,sn.push(n))}function dn(n){switch(n){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var r=sn.length?sn.pop():ln.length;return ln[r]={refcount:1,value:n},r}}function vn(n){return this.fromWireType(d[n>>2])}function hn(n){if(null===n)return"null";var r=typeof n;return"object"===r||"array"===r||"function"===r?n.toString():""+n}function yn(n){for(;n.length;){var r=n.pop();n.pop()(r)}}var gn=void 0;function mn(n){var r=kn(n),t=$(r);return Wn(r),t}var wn={};function bn(){return"object"==typeof globalThis?globalThis:Function("return this")()}function An(n,r){var t=Q[n];return void 0===t&&an(r+" has unknown type "+mn(n)),t}var Tn={};function _n(n){try{return i.grow(n-u.byteLength+65535>>>16),S(i.buffer),1}catch(n){}}var En={mappings:{},buffers:[null,[],[]],printChar:function(n,r){var t=En.buffers[n];0===r||10===r?((1===n?A:T)(function(n,r,t){for(var e=r+void 0,o=r;n[o]&&!(o>=e);)++o;return E.decode(n.subarray?n.subarray(r,o):new Uint8Array(n.slice(r,o)))}(t,0)),t.length=0):t.push(r)},varargs:void 0,get:function(){return En.varargs+=4,p[En.varargs-4>>2]},getStr:function(n){return P(n)},get64:function(n,r){return n}};!function(){for(var n=Array(256),r=0;r<256;++r)n[r]=String.fromCharCode(r);Z=n}(),on=n.BindingError=en(Error,"BindingError"),un=n.InternalError=en(Error,"InternalError"),n.count_emval_handles=function(){for(var n=0,r=5;r<ln.length;++r)void 0!==ln[r]&&++n;return n},n.get_first_emval=function(){for(var n=5;n<ln.length;++n)if(void 0!==ln[n])return ln[n];return null},gn=n.UnboundTypeError=en(Error,"UnboundTypeError");var Pn={b:function(n,r,t,e){L("Assertion failed: "+P(n)+", at: "+[r?P(r):"unknown filename",t,e?P(e):"unknown function"])},m:function(n,r){},r:function(n,r,t,e,o){},n:function(n,r,t,e,o){var a=Y(t);fn(n,{name:r=$(r),fromWireType:function(n){return!!n},toWireType:function(n,r){return r?e:o},argPackAdvance:8,readValueFromPointer:function(n){var e;if(1===t)e=c;else if(2===t)e=s;else{if(4!==t)throw TypeError("Unknown boolean type size: "+r);e=p}return this.fromWireType(e[n>>a])},destructorFunction:null})},w:function(n,r){fn(n,{name:r=$(r),fromWireType:function(n){var r=ln[n].value;return pn(n),r},toWireType:function(n,r){return dn(r)},argPackAdvance:8,readValueFromPointer:vn,destructorFunction:null})},j:function(n,r,t){var e=Y(t);fn(n,{name:r=$(r),fromWireType:function(n){return n},toWireType:function(n,r){if("number"!=typeof r&&"boolean"!=typeof r)throw TypeError('Cannot convert "'+hn(r)+'" to '+this.name);return r},argPackAdvance:8,readValueFromPointer:function(n,r){switch(r){case 2:return function(n){return this.fromWireType(v[n>>2])};case 3:return function(n){return this.fromWireType(h[n>>3])};default:throw TypeError("Unknown float type: "+n)}}(r,e),destructorFunction:null})},p:function(r,t,e,o,a,i){var u,c,f,s,l,d,v=function(n,r){for(var t=[],e=0;e<n;e++)t.push(p[(r>>2)+e]);return t}(t,e);r=$(r),c=a,u=$(u=o),"function"!=typeof(f=function(){var r,t,e;return u.includes("j")?(r=u,t=c,e=[],function(){e.length=arguments.length;for(var o=0;o<arguments.length;o++)e[o]=arguments[o];return function(r,t,e){var o,a,i;return r.includes("j")?(o=t,a=e,i=n["dynCall_"+r],a&&a.length?i.apply(null,[o].concat(a)):i.call(null,o)):y.get(t).apply(null,e)}(r,t,e)}):y.get(c)}())&&an("unknown function pointer with signature "+u+": "+c),a=f,s=r,l=function(){!function(n,r){var t=[],e={};throw r.forEach((function n(r){if(!e[r]&&!Q[r]){if(nn[r])return void nn[r].forEach(n);t.push(r),e[r]=!0}})),new gn(n+": "+t.map(mn).join([", "]))}("Cannot call "+r+" due to unbound types",v)},d=t-1,n.hasOwnProperty(s)?((void 0===d||void 0!==n[s].overloadTable&&void 0!==n[s].overloadTable[d])&&an("Cannot register public name '"+s+"' twice"),function(n,r,t){if(void 0===n[r].overloadTable){var e=n[r];n[r]=function(){return n[r].overloadTable.hasOwnProperty(arguments.length)||an("Function '"+t+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+n[r].overloadTable+")!"),n[r].overloadTable[arguments.length].apply(this,arguments)},n[r].overloadTable=[],n[r].overloadTable[e.argCount]=e}}(n,s,s),n.hasOwnProperty(d)&&an("Cannot register multiple overloads of a function with the same number of arguments ("+d+")!"),n[s].overloadTable[d]=l):(n[s]=l,void 0!==d&&(n[s].numArguments=d)),function(n,r,t){function e(r){var e=t(r);e.length!==n.length&&cn("Mismatched type converter count");for(var o=0;o<n.length;++o)fn(n[o],e[o])}n.forEach((function(n){nn[n]=r}));var o=Array(r.length),a=[],i=0;r.forEach((function(n,r){Q.hasOwnProperty(n)?o[r]=Q[n]:(a.push(n),K.hasOwnProperty(n)||(K[n]=[]),K[n].push((function(){o[r]=Q[n],++i===a.length&&e(o)})))})),0===a.length&&e(o)}([],v,(function(e){var o,u,c,f=[e[0],null].concat(e.slice(1));return o=r,u=function(n,r,t,e,o){var a=r.length;a<2&&an("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var i=null!==r[1]&&!1,u=!1,c=1;c<r.length;++c)if(null!==r[c]&&void 0===r[c].destructorFunction){u=!0;break}var f="void"!==r[0].name,s="",l="";for(c=0;c<a-2;++c)s+=(0!==c?", ":"")+"arg"+c,l+=(0!==c?", ":"")+"arg"+c+"Wired";var p="return function "+rn(n)+"("+s+") {\nif (arguments.length !== "+(a-2)+") {\nthrowBindingError('function "+n+" called with ' + arguments.length + ' arguments, expected "+(a-2)+" args!');\n}\n";u&&(p+="var destructors = [];\n");var d=u?"destructors":"null",v=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],h=[an,e,o,yn,r[0],r[1]];i&&(p+="var thisWired = classParam.toWireType("+d+", this);\n");for(c=0;c<a-2;++c)p+="var arg"+c+"Wired = argType"+c+".toWireType("+d+", arg"+c+"); // "+r[c+2].name+"\n",v.push("argType"+c),h.push(r[c+2]);if(i&&(l="thisWired"+(l.length>0?", ":"")+l),p+=(f?"var rv = ":"")+"invoker(fn"+(l.length>0?", ":"")+l+");\n",u)p+="runDestructors(destructors);\n";else for(c=i?1:2;c<r.length;++c){var y=1===c?"thisWired":"arg"+(c-2)+"Wired";null!==r[c].destructorFunction&&(p+=y+"_dtor("+y+"); // "+r[c].name+"\n",v.push(y+"_dtor"),h.push(r[c].destructorFunction))}return f&&(p+="var ret = retType.fromWireType(rv);\nreturn ret;\n"),p+="}\n",v.push(p),function(n,r){if(!(n instanceof Function))throw TypeError("new_ called with constructor type "+typeof n+" which is not a function");var t=tn(n.name||"unknownFunctionName",(function(){}));t.prototype=n.prototype;var e=new t,o=n.apply(e,r);return o instanceof Object?o:e}(Function,v).apply(null,h)}(r,f,0,a,i),c=t-1,n.hasOwnProperty(o)||cn("Replacing nonexistant public symbol"),void 0!==n[o].overloadTable&&void 0!==c?n[o].overloadTable[c]=u:(n[o]=u,n[o].argCount=c),[]}))},d:function(n,r,t,e,o){r=$(r),-1===o&&(o=4294967295);var a=Y(t),i=function(n){return n};if(0===e){var u=32-8*t;i=function(n){return n<<u>>>u}}var v=r.includes("unsigned");fn(n,{name:r,fromWireType:i,toWireType:function(n,t){if("number"!=typeof t&&"boolean"!=typeof t)throw TypeError('Cannot convert "'+hn(t)+'" to '+this.name);if(t<e||t>o)throw TypeError('Passing a number "'+hn(t)+'" from JS side to C/C++ side to an argument of type "'+r+'", which is outside the valid range ['+e+", "+o+"]!");return v?t>>>0:0|t},argPackAdvance:8,readValueFromPointer:function(n,r,t){switch(r){case 0:return t?function(n){return c[n]}:function(n){return f[n]};case 1:return t?function(n){return s[n>>1]}:function(n){return l[n>>1]};case 2:return t?function(n){return p[n>>2]}:function(n){return d[n>>2]};default:throw TypeError("Unknown integer type: "+n)}}(r,a,0!==e),destructorFunction:null})},c:function(n,r,t){var e=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][r];function o(n){var r=d,t=r[n>>=2],o=r[n+1];return new e(u,o,t)}fn(n,{name:t=$(t),fromWireType:o,argPackAdvance:8,readValueFromPointer:o},{ignoreDuplicateRegistrations:!0})},k:function(n,r){var t="std::string"===(r=$(r));fn(n,{name:r,fromWireType:function(n){var r,e=d[n>>2];if(t)for(var o=n+4,a=0;a<=e;++a){var i=n+4+a;if(a==e||0==f[i]){var u=P(o,i-o);void 0===r?r=u:(r+="\0",r+=u),o=i+1}}else{var c=Array(e);for(a=0;a<e;++a)c[a]=String.fromCharCode(f[n+4+a]);r=c.join("")}return Wn(n),r},toWireType:function(n,r){r instanceof ArrayBuffer&&(r=new Uint8Array(r));var e="string"==typeof r;e||r instanceof Uint8Array||r instanceof Uint8ClampedArray||r instanceof Int8Array||an("Cannot pass non-string to std::string");var o=(t&&e?function(){return function(n){for(var r=0,t=0;t<n.length;++t){var e=n.charCodeAt(t);e>=55296&&e<=57343&&(e=65536+((1023&e)<<10)|1023&n.charCodeAt(++t)),e<=127?++r:r+=e<=2047?2:e<=65535?3:4}return r}(r)}:function(){return r.length})(),a=Cn(4+o+1);if(d[a>>2]=o,t&&e)(function(n,r,t,e){if(!(e>0))return 0;for(var o=t,a=t+e-1,i=0;i<n.length;++i){var u=n.charCodeAt(i);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&n.charCodeAt(++i)),u<=127){if(t>=a)break;r[t++]=u}else if(u<=2047){if(t+1>=a)break;r[t++]=192|u>>6,r[t++]=128|63&u}else if(u<=65535){if(t+2>=a)break;r[t++]=224|u>>12,r[t++]=128|u>>6&63,r[t++]=128|63&u}else{if(t+3>=a)break;r[t++]=240|u>>18,r[t++]=128|u>>12&63,r[t++]=128|u>>6&63,r[t++]=128|63&u}}r[t]=0})(r,f,a+4,o+1);else if(e)for(var i=0;i<o;++i){var u=r.charCodeAt(i);u>255&&(Wn(a),an("String has UTF-16 code units that do not fit in 8 bits")),f[a+4+i]=u}else for(i=0;i<o;++i)f[a+4+i]=r[i];return null!==n&&n.push(Wn,a),a},argPackAdvance:8,readValueFromPointer:vn,destructorFunction:function(n){Wn(n)}})},g:function(n,r,t){var e,o,a,i,u;t=$(t),2===r?(e=W,o=k,i=F,a=function(){return l},u=1):4===r&&(e=R,o=I,i=U,a=function(){return d},u=2),fn(n,{name:t,fromWireType:function(n){for(var t,o=d[n>>2],i=a(),c=n+4,f=0;f<=o;++f){var s=n+4+f*r;if(f==o||0==i[s>>u]){var l=e(c,s-c);void 0===t?t=l:(t+="\0",t+=l),c=s+r}}return Wn(n),t},toWireType:function(n,e){"string"!=typeof e&&an("Cannot pass non-string to C++ string type "+t);var a=i(e),c=Cn(4+a+r);return d[c>>2]=a>>u,o(e,c+4,a+r),null!==n&&n.push(Wn,c),c},argPackAdvance:8,readValueFromPointer:vn,destructorFunction:function(n){Wn(n)}})},o:function(n,r){fn(n,{isVoid:!0,name:r=$(r),argPackAdvance:0,fromWireType:function(){},toWireType:function(n,r){}})},e:pn,l:function(n){var r,t;return 0===n?dn(bn()):(n=void 0===(t=wn[r=n])?$(r):t,dn(bn()[n]))},h:function(n){n>4&&(ln[n].refcount+=1)},i:function(r,t,e,o){(a=r)||an("Cannot use deleted val. handle = "+a),r=ln[a].value;var a,i=Tn[t];return i||(i=function(r){for(var t="",e=0;e<r;++e)t+=(0!==e?", ":"")+"arg"+e;var o="return function emval_allocator_"+r+"(constructor, argTypes, args) {\n";for(e=0;e<r;++e)o+="var argType"+e+" = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + "+e+'], "parameter '+e+'");\nvar arg'+e+" = argType"+e+".readValueFromPointer(args);\nargs += argType"+e+"['argPackAdvance'];\n";return Function("requireRegisteredType","Module","__emval_register",o+="var obj = new constructor("+t+");\nreturn __emval_register(obj);\n}\n")(An,n,dn)}(t),Tn[t]=i),i(r,e,o)},a:function(){L()},t:function(n,r,t){f.copyWithin(n,r,r+t)},f:function(n){var r=f.length;if((n>>>=0)>2147483648)return!1;for(var t=1;t<=4;t*=2){var e=r*(1+.2/t);if(e=Math.min(e,n+100663296),_n(Math.min(2147483648,j(Math.max(n,e),65536))))return!0}return!1},u:function(n){return 0},q:function(n,r,t,e,o){},v:function(n,r,t,e){for(var o=0,a=0;a<t;a++){for(var i=p[r+8*a>>2],u=p[r+(8*a+4)>>2],c=0;c<u;c++)En.printChar(n,f[i+c]);o+=u}return p[e>>2]=o,0},s:function(n){!function(n){n}(n)}};!function(){var r={a:Pn};function e(r,t){var e,o=r.exports;n.asm=o,S((i=n.asm.x).buffer),y=n.asm.D,e=n.asm.y,x.unshift(e),function(r){if(V--,n.monitorRunDependencies&&n.monitorRunDependencies(V),0==V&&(null!==q&&(clearInterval(q),q=null),z)){var t=z;z=null,t()}}()}function o(n){e(n.instance)}function u(n){return(a||"function"!=typeof fetch?Promise.resolve().then((function(){return J(G)})):fetch(G,{credentials:"same-origin"}).then((function(n){if(!n.ok)throw"failed to load wasm binary file at '"+G+"'";return n.arrayBuffer()})).catch((function(){return J(G)}))).then((function(n){return WebAssembly.instantiate(n,r)})).then(n,(function(n){T("failed to asynchronously prepare wasm: "+n),L(n)}))}if(V++,n.monitorRunDependencies&&n.monitorRunDependencies(V),n.instantiateWasm)try{return n.instantiateWasm(r,e)}catch(n){return T("Module.instantiateWasm callback failed with error: "+n),!1}(a||"function"!=typeof WebAssembly.instantiateStreaming||N(G)||"function"!=typeof fetch?u(o):fetch(G,{credentials:"same-origin"}).then((function(n){return WebAssembly.instantiateStreaming(n,r).then(o,(function(n){return T("wasm streaming compile failed: "+n),T("falling back to ArrayBuffer instantiation"),u(o)}))}))).catch(t)}();n.___wasm_call_ctors=function(){return(n.___wasm_call_ctors=n.asm.y).apply(null,arguments)};var Cn=n._malloc=function(){return(Cn=n._malloc=n.asm.z).apply(null,arguments)},Wn=n._free=function(){return(Wn=n._free=n.asm.A).apply(null,arguments)},kn=n.___getTypeName=function(){return(kn=n.___getTypeName=n.asm.B).apply(null,arguments)};n.___embind_register_native_and_builtin_types=function(){return(n.___embind_register_native_and_builtin_types=n.asm.C).apply(null,arguments)},n.dynCall_iiji=function(){return(n.dynCall_iiji=n.asm.E).apply(null,arguments)},n.dynCall_jiji=function(){return(n.dynCall_jiji=n.asm.F).apply(null,arguments)};function Fn(t){function e(){!g&&(g=!0,n.calledRun=!0,_||(!0,X(x),r(n),n.onRuntimeInitialized&&n.onRuntimeInitialized(),function(){if(n.postRun)for("function"==typeof n.postRun&&(n.postRun=[n.postRun]);n.postRun.length;)B(n.postRun.shift());X(M)}()))}t=t||w,V>0||(!function(){if(n.preRun)for("function"==typeof n.preRun&&(n.preRun=[n.preRun]);n.preRun.length;)D(n.preRun.shift());X(O)}(),!(V>0)&&(n.setStatus?(n.setStatus("Running..."),setTimeout((function(){setTimeout((function(){n.setStatus("")}),1),e()}),1)):e()))}if(z=function n(){g||Fn(),g||(z=n)},n.run=Fn,n.preInit)for("function"==typeof n.preInit&&(n.preInit=[n.preInit]);n.preInit.length>0;)n.preInit.pop()();return Fn(),n.ready};addEventListener("message",(async n=>{if(n.data.image){let r=performance.now(),t=(await Module({noInitialRun:!0})).decode(n.data.image);if(!t)throw"Error decoding "+n.data.jxlSrc;console.log("Finished decoding",n.data.jxlSrc,"in",performance.now()-r,"ms"),postMessage({imgData:t})}else if(n.data.canvas){n.data.canvas.getContext("2d").putImageData(n.data.imgData,0,0);let r=await n.data.canvas.convertToBlob({type:"image/"+n.data.imageType});postMessage({blob:r,url:URL.createObjectURL(r)})}}));