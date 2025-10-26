import{a as u,S as f,i as s}from"./assets/vendor-D8hBcPQM.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const m="52944320-b7e1ddf3616ae70650c2bd4af",h="https://pixabay.com/api/";function p(o){const i={key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return u.get(h,{params:i}).then(e=>e.data)}const l=document.getElementById("gallery"),c=document.getElementById("loader");let g=new f(".gallery a",{captionsData:"alt",captionDelay:250});function y(o){const i=o.map(e=>`
    <li class="gallery-item">
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
      </a>
      <ul class="info">
        <li><b>Likes</b><div>${e.likes}</div></li>
        <li><b>Views</b><div>${e.views}</div></li>
        <li><b>Comments</b><div>${e.comments}</div></li>
        <li><b>Downloads</b><div>${e.downloads}</div></li>
      </ul>
    </li>
  `).join("");l.insertAdjacentHTML("beforeend",i),g.refresh()}function b(){l.innerHTML=""}function L(){c.classList.remove("is-hidden")}function v(){c.classList.add("is-hidden")}const d=document.getElementById("search-form"),w=d.querySelector('input[name="search-text"]');d.addEventListener("submit",o=>{o.preventDefault();const i=w.value.trim();if(!i){s.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}b(),L(),p(i).then(e=>{if(!e.hits||e.hits.length===0){s.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(e.hits)}).catch(e=>{console.error(e),s.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{v()})});
//# sourceMappingURL=index.js.map
