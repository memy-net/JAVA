document.write("<scr" + "ipt type=\"text/javascript\" src=\"https://twemoji.maxcdn.com/twemoji.min.js\"></scr" + "ipt>");
twemoji.parse(document.body);
!function(){Array.prototype.remove=function(){for(var e,t,i=arguments,o=i.length;o&&this.length;)for(e=i[--o];-1!==(t=this.indexOf(e));)this.splice(t,1);return this};var e=document.createElement("script");e.src="https://www.gstatic.com/firebasejs/4.9.0/firebase.js",e.onload=function(){firebase.initializeApp({apiKey:"AIzaSyD_MvMvRLs8CqwZ2k4c-Seic5ZBr2D1Zw8",databaseURL:"https://bloggerku-com.firebaseio.com",projectId:"bloggerku-com"}),function(e){for(var t=document.getElementsByClassName("lovebutton-bloggerku"),i=0,o=t[i];i<t.length;i++){var a=o.getAttribute("data-id"),r=JSON.parse(localStorage.getItem("liked"))||[],c=0;e.ref("like/"+a+"/total").on("value",function(e){-1!==r.indexOf(a)&&o.querySelector(".icon").classList.add("active"),c=e.val()||0,o.querySelector(".total").innerText=c}),o.querySelector("a").addEventListener("click",function(){o.querySelector(".icon").classList.toggle("active"),o.querySelector(".icon").classList.contains("active")?(r.push(a),localStorage.setItem("liked",JSON.stringify(r)),c++):(r.remove(a),localStorage.setItem("liked",JSON.stringify(r)),c--),e.ref("like/"+a+"/total").set(c)})}}(firebase.database())},document.body.append(e)}();
var pres = document.getElementsByTagName(&quot;blockquote&quot;); for (var i = 0; i &lt; pres.length; i++) { pres[i].addEventListener(&quot;dblclick&quot;, function () { var selection = getSelection(); var range = document.createRange(); range.selectNodeContents(this); selection.removeAllRanges(); selection.addRange(range); }, false); }
hashtags=jQuery.noConflict();hashtags(document).ready(function(e,n){"use strict";var t,o=window.location.origin,r=n.querySelectorAll(".post-body");if(0<r.length)for(t=0;t<r.length;t+=1)r[t].innerHTML=r[t].innerHTML.replace(/@(\S+)/g,'<a class="hashtags" href="'+o+'/search?q=$1">#$1</a>')}(0,this.document));
