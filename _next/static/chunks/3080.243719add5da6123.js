!function(){var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),function(){"use strict";const t="en",i=new Intl.DateTimeFormat(t,{day:"numeric",month:"long",year:"numeric"}),o=new Intl.DateTimeFormat(t,{hour:"numeric",hour12:!0,minute:"2-digit",second:"2-digit"}),n=new Intl.DateTimeFormat(t,{weekday:"long"}),a=new Set([".cr2",".dng",".nef",".tif",".tiff"]),s=(new Set([".jpeg",".jpg",".png"]),new Set([...a,".ani",".apng",".avif",".bmp",".cur",".gif",".ico",".jfif",".jif",".jpe",".jpeg",".jpg",".jxl",".pjp",".pjpeg",".png",".svg",".qoi",".webp",".xbm"])),l=(new Set([...a,".jxl",".qoi",".svg"]),new Set([".bmp",".gif",".ico",".jfif",".jpe",".jpeg",".jpg",".png",".tif",".tiff",".webp"]),1e3),r=(new Set([".001",".7z",".ace",".apk",".appx",".arj",".bz2",".bzip2",".cab",".chm",".chw",".cpio",".deb",".dll",".dmg",".doc",".docx",".epub",".esd",".exe",".flv",".gz",".gzip",".hfs",".hxs",".img",".ipa",".jar",".lha",".lit",".lzh",".lzma",".mbr",".msi",".ntfs",".ods",".odt",".ova",".pages",".pkg",".ppt",".qcow",".qcow2",".r00",".rar",".rpm",".squashfs",".swf",".swm",".sys",".tar",".taz",".tgz",".txz",".udf",".vdi",".vhd",".vhdx",".vmdk",".wim",".xar",".xip",".xls",".xlsx",".xpi",".xz",".z",".zipx"]),new Set([".iso",".jsdos",".wsz",".zip"]),new Set(["desktop.ini"]),new Set(["/.deletedFiles.log"]),"/Users/Public/Desktop"),c=(new Set([r]),new Set([".aac",".oga",".wav"])),g=(new Set([".asx",".m3u",".pls"]),new Set([".m4v",".mkv",".mov",".mp4",".ogg",".ogm",".ogv",".webm"])),f=(new Set([...c,...s,...a,...g,".ani",".exe",".mp3",".sav",".whtml"]),300),p={cache:"no-cache",credentials:"omit",keepalive:!1,mode:"cors",priority:"high",referrerPolicy:"no-referrer",window:null};let w;const d=async()=>{const e=Date.now(),{backoff:t=f,now:i=0,optout:o=!1}=await(async()=>{const e=await fetch("https://use.ntpjs.org/v1/time.json",p);return await e.json()||{}})();i&&(w=e-Math.ceil(i*l)),setTimeout(d,(o?3600:t)*l)};var h="'Segoe UI', system-ui, Roboto, 'Helvetica Neue', sans-serif";let m,u,v;const x={x:0,y:0},b=()=>{v.scale(e.g.devicePixelRatio,e.g.devicePixelRatio),v.fillStyle="rgba(255, 255, 255, 90%)",v.font=`12px ${h}`,v.textAlign="center",v.textBaseline="middle",x.y=Math.floor(u.height/e.g.devicePixelRatio/2)+1,x.x=Math.floor(u.width/e.g.devicePixelRatio/2)},j=()=>{const e=(e=>({date:`${i.format(e)}\n${n.format(e)}`,time:o.format(e)}))(m&&"local"!==m?("number"!=typeof w&&(w=0,d()),new Date(Date.now()-w)):new Date);globalThis.postMessage(e),u&&(e=>{if(!v){if(v=u.getContext("2d"),!v)return;b()}v.clearRect(0,0,u.width,u.height),v.fillText(e.time,x.x,x.y)})(e)};let y=!1;globalThis.addEventListener("message",(t=>{let{data:i}=t;if(y){if("OffscreenCanvas"in e.g&&i?.devicePixelRatio){const{canvas:t,clockSize:o,devicePixelRatio:n}=i;return e.g.devicePixelRatio=n,t instanceof OffscreenCanvas&&(u=t),u instanceof OffscreenCanvas&&o?.height&&o?.width&&n&&(u.height=Math.floor(Number(o.height)*n),u.width=Math.floor(Number(o.width)*n),b()),void j()}"local"!==i&&"ntp"!==i||(m=i),j(),globalThis.setTimeout((()=>{j(),globalThis.setInterval(j,1e3)}),1e3-(new Date).getMilliseconds())}else"init"===i&&(y=!0,globalThis.postMessage("source"))}),{passive:!0})}(),_N_E={}}();