import{a as m,S as d,i as p}from"./assets/vendor-CZCqCKWq.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const f="49627345-81d87c81626646e8cd4c1e6ab",g=i=>m("https://pixabay.com/api/",{params:{key:f,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}),y=document.querySelector(".gallery"),h=i=>{const o=i.map(({webformatURL:r,largeImageURL:e,tags:t,likes:a,views:n,comments:c,downloads:u})=>`<li class="image-item">
            <div class="gallery-card"><a href="${r}"><img src="${e}" alt="${t}" class="image"/></a></div>
            <ul class="image-info">
                <li>Likes<p>${a}</p></li>
                <li>Views<p>${n}</p></li>
                <li>Comments<p>${c}</p></li>
                <li>Downloads<p>${u}</p></li>
            </ul>
        </li>`).join(""),s=new d(".gallery-card a",{captionDelay:"250"});y.innerHTML=o,s.refresh()},l=document.querySelector(".form");document.querySelector(".gallery");l.addEventListener("submit",L);function L(i){i.preventDefault();const o=l.elements[0].value.toLowerCase().trim();g(o).then(s=>{const r=s.data.hits;if(console.log(r),!r.length){p.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"});return}h(r)}).catch(s=>console.log(s)).finally(()=>{})}
//# sourceMappingURL=index.js.map
