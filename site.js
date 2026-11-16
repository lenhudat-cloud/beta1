(function(){
function g(f){return fetch(f,{cache:'no-store'}).then(function(r){if(!r.ok)throw 0;return r.json()})}
function paras(el,t){el.innerHTML='';String(t).split(/\n{2,}/).forEach(function(x){var p=document.createElement('p');p.textContent=x;p.style.whiteSpace='pre-line';el.appendChild(p)})}
function hash(){if(location.hash){var t=document.getElementById(location.hash.slice(1));if(t)t.scrollIntoView()}}
var pg=document.body.dataset.page;
if(pg)g('pages.json').then(function(d){var o=d[pg];if(!o)return;
[].forEach.call(document.querySelectorAll('[data-k]'),function(e){var k=e.dataset.k;if(k==='maps'){if(o.address)e.href='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(o.address);return}if(o[k])e.textContent=o[k]});
var c=document.querySelector('[data-cms]');if(c&&o.content)paras(c,o.content)}).catch(function(){});
var tl=document.getElementById('tl');
if(tl)g('history.json').then(function(a){tl.innerHTML='';a.forEach(function(i){var li=document.createElement('li'),b=document.createElement('b');b.textContent=i.year;li.appendChild(b);li.appendChild(document.createTextNode(i.content));tl.appendChild(li)});var n=tl.nextElementSibling;if(n&&n.classList.contains('note'))n.remove()}).catch(function(){});
var dc=document.getElementById('docs');
if(dc)g('documents.json').then(function(a){dc.innerHTML='';a.forEach(function(i){var li=document.createElement('li'),k=document.createElement('a'),s=document.createElement('span');k.textContent=i.title;k.href=i.link||'#chung-nhan';if(i.link){k.target='_blank';k.rel='noopener'}s.textContent=i.date||'';li.appendChild(k);li.appendChild(s);dc.appendChild(li)})}).catch(function(){});
var six=document.getElementById('six');
if(six)g('business.json').then(function(a){six.innerHTML='';a.forEach(function(it,i){var c=document.createElement('a'),b=document.createElement('b'),h=document.createElement('h3'),p=document.createElement('p');if(it.anchor)c.id=it.anchor;c.href='lien-he.html';b.textContent=('0'+(i+1)).slice(-2);h.textContent=it.title;p.textContent=it.content;c.appendChild(b);c.appendChild(h);c.appendChild(p);six.appendChild(c)});hash()}).catch(function(){});
var pl=document.getElementById('pl'),pd=document.getElementById('pd');
if(pl&&pd)g('projects.json').then(function(J){pl.innerHTML='';if(!J.length){pd.textContent='Chưa có dự án.';return}
function show(n){var j=J[n];pd.innerHTML='<div class="ph"></div><p class="k"></p><h3></h3><p></p><p><strong></strong></p><p style="color:var(--mut)"></p>';var q=pd.children;q[1].textContent=String(j.category).toUpperCase();q[2].textContent=j.title;q[3].textContent=j.place;q[4].firstChild.textContent=j.metric;q[5].textContent=j.content;[].forEach.call(pl.children,function(li,k){li.firstChild.setAttribute('aria-current',k===n)})}
J.forEach(function(j,k){var li=document.createElement('li'),bt=document.createElement('button'),sm=document.createElement('small');bt.type='button';bt.appendChild(document.createTextNode(j.title));sm.textContent=j.category+' · '+j.metric;bt.appendChild(sm);bt.onclick=function(){show(k)};li.appendChild(bt);pl.appendChild(li)});show(0)}).catch(function(){});
})();
