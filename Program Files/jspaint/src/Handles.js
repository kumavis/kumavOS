function Handles(e){const{$handles_container:t,$object_container:s}=e,o=e.outset||0,n=e.get_handles_offset_left||(()=>0),i=e.get_handles_offset_top||(()=>0),a=e.get_ghost_offset_left||(()=>0),c=e.get_ghost_offset_top||(()=>0),h=e.size_only||!1,f=0,r=-1,l=1,d=-1,_=1,y=$(E("div")).addClass("resize-ghost");e.thick&&y.addClass("thick");const g=[];[[d,l],[d,f],[d,r],[f,r],[_,r],[_,f],[_,l],[f,l]].forEach((([p,m])=>{const k=$(E("div")).addClass("handle");k.appendTo(t);const u=$(E("div")).addClass("grab-region").appendTo(t);let w;p!==f&&m!==f||u.addClass("is-middle"),k.css("touch-action","none");let x=!1;if(!h||p!==d&&m!==r){let o;m===r&&p===d||m===l&&p===_?o="nwse-resize":m===l&&p===d||m===r&&p===_?o="nesw-resize":m!==f?o="ew-resize":p!==f&&(o="ns-resize");let n="";p===d&&(n+="n"),p===_&&(n+="s"),m===r&&(n+="w"),m===l&&(n+="e"),n+="-resize";const i=make_css_cursor(o,[16,16],n);k.add(u).css({cursor:i});const h=t=>{y.appendTo(s),x=!0,w=e.get_rect();const o=to_canvas_coords(t);let n,i,h=0,f=0;m===l?(h=0,n=~~(o.x-w.x)):m===r?(h=~~(o.x-w.x),n=~~(w.x+w.width-o.x)):n=~~w.width,p===_?(f=0,i=~~(o.y-w.y)):p===d?(f=~~(o.y-w.y),i=~~(w.y+w.height-o.y)):i=~~w.height;let g={x:w.x+h,y:w.y+f,width:n,height:i};g.width=Math.max(1,g.width),g.height=Math.max(1,g.height),e.constrain_rect?g=e.constrain_rect(g,m,p):(g.x=Math.min(g.x,w.x+w.width),g.y=Math.min(g.y,w.y+w.height)),y.css({position:"absolute",left:magnification*g.x+a(),top:magnification*g.y+c(),width:magnification*g.width-2,height:magnification*g.height-2}),w=g};k.add(u).on("pointerdown",(s=>{x=!1,0===s.button&&($G.on("pointermove",h),$("body").css({cursor:i}).addClass("cursor-bully")),$G.one("pointerup",(()=>{$G.off("pointermove",h),$("body").css({cursor:""}).removeClass("cursor-bully"),y.remove(),x&&e.set_rect(w),t.trigger("update")}))})),k.on("mousedown selectstart",(e=>{e.preventDefault()}))}else k.addClass("useless-handle"),u.remove();const v=()=>{const t=e.get_rect(),s=k.width(),a=n(),c=i();for({len_key,pos_key,region,offset}of[{len_key:"width",pos_key:"left",region:m,offset:a},{len_key:"height",pos_key:"top",region:p,offset:c}]){let e=Math.max(t[len_key]*magnification/2-16,Math.min(16,t[len_key]*magnification/3)),n=t[len_key]*magnification-e;n-e<magnification&&(e=0,n=magnification);const i=-16,a=Math.min(16,e),c=t[len_key]*magnification-a,r=t[len_key]*magnification-i;h&&(e=Math.max(-offset,Math.min(e,n-32))),-1===region?(k.css({[pos_key]:offset-o}),u.css({[pos_key]:offset+i,[len_key]:a-i})):region===f?(k.css({[pos_key]:offset+(t[len_key]*magnification-s)/2}),u.css({[pos_key]:offset+e,[len_key]:n-e})):1===region&&(k.css({[pos_key]:offset+(t[len_key]*magnification-s/2)}),u.css({[pos_key]:offset+c,[len_key]:r-c}))}};t.on("update resize scroll",v),$G.on("resize theme-load",v),setTimeout(v,50),g.push(k[0],u[0])})),this.handles=g,this.hide=()=>{$(g).css({opacity:0,pointerEvents:"none"})},this.show=()=>{$(g).css({opacity:"",pointerEvents:""})}}