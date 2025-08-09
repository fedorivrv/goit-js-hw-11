import{a as f,S as p,i as n}from"./assets/vendor-DqB7j7Ix.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="51361824-00dcf0a42679c337e9a38d381",y="https://pixabay.com/api/";async function g(s){return(await f.get(y,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),h=new p(".gallery a",{captionsData:"alt",captionDelay:250});function b(s){const o=s.map(t=>`
    <li class="gallery-item">
      <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${t.likes}</p>
        <p><b>Views:</b> ${t.views}</p>
        <p><b>Comments:</b> ${t.comments}</p>
        <p><b>Downloads:</b> ${t.downloads}</p>
      </div>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",o),h.refresh()}function L(){c.innerHTML=""}function v(){u.classList.add("visible")}function w(){u.classList.remove("visible")}const d=document.querySelector("#search-form"),S=d.querySelector('input[name="searchQuery"]'),l=document.querySelector("#loading-message");d.addEventListener("submit",s=>{s.preventDefault();const o=S.value.trim();if(!o){n.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}L(),v(),l.classList.add("visible"),g(o).then(t=>{t.hits.length?b(t.hits):n.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).catch(()=>{n.error({title:"Error",message:"Failed to fetch images. Try again later.",position:"topRight"})}).finally(()=>{w(),l.classList.remove("visible")})});
//# sourceMappingURL=index.js.map
