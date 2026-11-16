(function(){
var box=document.getElementById('art');if(!box)return;
var sec=box.closest('section'),cats=box.dataset.cats.split(',');
var NAMES={'gioi-thieu':'Lời chào','lich-su':'Lịch sử','chung-nhan':'Chứng nhận · đăng ký','chi-duong':'Chỉ đường','epc':'EPC điện mặt trời','ess':'ESS','thiet-bi':'Thiết bị môi trường','tu-van':'Tư vấn môi trường','du-an':'Dự án','lien-he':'Liên hệ tư vấn'};
function fmt(d){var p=String(d).split('-');return p.length===3?p[2]+'/'+p[1]+'/'+p[0]:d}
fetch('posts.json',{cache:'no-store'}).then(function(r){if(!r.ok)throw 0;return r.json()}).then(function(a){
a=a.filter(function(p){return cats.indexOf(p.category)>-1}).sort(function(x,y){return y.date<x.date?-1:1});
if(!a.length)return;box.innerHTML='';
cats.forEach(function(c){var g=a.filter(function(p){return p.category===c});if(!g.length)return;
if(cats.length>1){var h=document.createElement('h3');h.className='ah';h.textContent=NAMES[c]||c;box.appendChild(h)}
g.forEach(function(p){var ar=document.createElement('article'),k=document.createElement('p'),t=document.createElement('h3'),b=document.createElement('div');ar.className='ar';k.className='k';k.textContent=fmt(p.date);t.textContent=p.title;
String(p.content).split(/\n{2,}/).forEach(function(x){var e=document.createElement('p');e.textContent=x;b.appendChild(e)});
ar.appendChild(k);ar.appendChild(t);ar.appendChild(b);box.appendChild(ar)})});
sec.hidden=false}).catch(function(){});
})();
