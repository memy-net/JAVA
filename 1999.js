var Nanobar=function(){var t,i,e,h,n,s,o={width:"100%",height:"4px",zIndex:9999,top:"0"},a={width:0,height:"100%",clear:"both",transition:"height .3s"};return t=function(t,i){for(var e in i)t.style[e]=i[e];t.style["float"]="left"},h=function(){var t=this,i=this.width-this.here;.1>i&&i>-.1?(n.call(this,this.here),this.moving=!1,100==this.width&&(this.el.style.height=0,setTimeout(function(){t.cont.el.removeChild(t.el)},100))):(n.call(this,this.width-i/4),setTimeout(function(){t.go()},16))},n=function(t){this.width=t,this.el.style.width=this.width+"%"},s=function(){var t=new i(this);this.bars.unshift(t)},(i=function(i){this.el=document.createElement("div"),this.el.style.backgroundColor=i.opts.bg,this.here=this.width=0,this.moving=!1,this.cont=i,t(this.el,a),i.el.appendChild(this.el)}).prototype.go=function(t){t?(this.here=t,this.moving||(this.moving=!0,h.call(this))):this.moving&&h.call(this)},(e=function(i){var e;(i=this.opts=i||{}).bg=i.bg||"#1bb2e9",this.bars=[],e=this.el=document.createElement("div"),t(this.el,o),i.id&&(e.id=i.id),e.style.position=i.target?"relative":"fixed",i.target?i.target.insertBefore(e,i.target.firstChild):document.getElementsByTagName("body")[0].appendChild(e),s.call(this)}).prototype.go=function(t){this.bars[0].go(t),100==t&&s.call(this)},e}(),nanobar=new Nanobar;nanobar.go(30),nanobar.go(60),nanobar.go(100);
