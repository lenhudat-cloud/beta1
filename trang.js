(function(){
function ok(u){return /^(uploads\/[\w.\-]+|https:\/\/[^"'()\s]+)$/.test(u)}
function setText(el,v){el.textContent='';String(v).split('\n').forEach(function(line,i){if(i)el.appendChild(document.createElement('br'));line.split(/(\*[^*]+\*)/).forEach(function(part){if(!part)return;if(part.length>2&&part.charAt(0)==='*'&&part.charAt(part.length-1)==='*'){var e=document.createElement('em');e.textContent=part.slice(1,-1);el.appendChild(e)}else el.appendChild(document.createTextNode(part))})})}
fetch('site.json',{cache:'no-store'}).then(function(r){if(!r.ok)throw 0;return r.json()}).then(function(S){
[].forEach.call(document.querySelectorAll('[data-t]'),function(el){var v=S[el.dataset.t];if(typeof v!=='string')return;if(v==='')el.style.display='none';else setText(el,v)});
[].forEach.call(document.querySelectorAll('[data-img]'),function(el){var v=S[el.dataset.img];if(typeof v!=='string'||!v||!ok(v))return;
if(el.tagName==='IMG'){el.src=v;el.hidden=false;var f=el.closest('figure');if(f)f.hidden=false}
else if(el.classList.contains('logo')){el.textContent='';var i=new Image();i.src=v;i.alt=S['site.name']||'Logo';el.appendChild(i)}
else{el.style.backgroundImage='linear-gradient(rgba(20,20,20,.62),rgba(20,20,20,.62)),url("'+v+'")';el.style.backgroundSize='cover';el.style.backgroundPosition='center'}});
var h=S['site.hotline'];if(h)[].forEach.call(document.querySelectorAll('[data-tel]'),function(a){a.textContent='Gọi '+h;a.href='tel:'+h.replace(/[^\d+]/g,'')})}).catch(function(){});
})();
