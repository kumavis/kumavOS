import{loadImage,loadText,makePassFBO,makePass}from"./utils.js";export default({regl:a,config:r,lkg:e},s)=>{if(!e.enabled)return makePass({primary:s.primary});const l=makePassFBO(a,r.useHalfFloat),m=loadText("shaders/glsl/quiltPass.frag.glsl"),t=a({frag:a.prop("frag"),uniforms:{quiltTexture:s.primary,...e},framebuffer:l});return makePass({primary:l},Promise.all([m.loaded]),((a,r)=>l.resize(a,r)),(()=>t({frag:m.text()})))};