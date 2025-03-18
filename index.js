import{S as m,a as y,i as g}from"./assets/vendor-jhRMbdqn.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();let c;function h(e,t=!1){const r=document.querySelector(".gallery");t||(r.innerHTML=""),e.forEach(s=>{r.innerHTML+=L(s)}),c?c.refresh():b()}function v(){const e=document.querySelector(".gallery");e.innerHTML=""}function L(e){return`<li class="gallery-item">
              <a class="gallery-link" href="${e.largeImageURL}">
                  <img
                  class="gallery-image"
                  src="${e.webformatURL}"
                  data-source="${e.largeImageURL}"
                  alt="${e.tags}"
                  />
              </a>
                <div class="card-overlay">
                    <div class="param">
                        <span class="param-title">Likes</span>
                        <span class="param-value">${e.likes}</span>
                    </div>
                    <div class="param">
                        <span class="param-title">Views</span>
                        <span class="param-value">${e.views}</span>
                    </div>
                    <div class="param">
                        <span class="param-title">Comments</span>
                        <span class="param-value">${e.comments}</span>
                    </div>
                    <div class="param">
                        <span class="param-title">Downloads</span>
                        <span class="param-value">${e.downloads}</span>
                    </div>
                </div>
           </li>`}function b(){c=new m(".gallery a",{overlayOpacity:.8,captions:!0,captionsData:"alt",captionPosition:"outside",captionDelay:"250"})}const w="https://pixabay.com/api/",P="49290147-91bc44204d790a43c13c008af",S=15;let i=1,d="";async function E(e){return i=1,d=e,await p(e)}async function q(){return i++,await p(d)}async function p(e){try{debugger;const t=encodeURIComponent(e),r={key:P,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:S,page:i};return(await y.get(w,{params:r})).data}catch(t){throw console.error("Error fetching photos:",t),t}}document.addEventListener("DOMContentLoaded",()=>{x()});function x(){document.querySelector("form.form").addEventListener("submit",T),document.querySelector(".button.load-more").addEventListener("click",I)}async function T(e){e.preventDefault();const t=e.target.querySelector("input").value;if(t.trim()){v(),n(!0);try{const r=await E(t);f(r)}catch(r){u("Error fetching images: "+r.message)}finally{n(!1)}}}async function I(e){e.preventDefault(),n(!0);try{const t=await q();f(t,!0),O()}catch(t){u("Error fetching images: "+t.message)}finally{n(!1)}}function f(e,t=!1){e.hits.length?(h(e.hits,t),document.querySelector(".button.load-more").style.display="block"):(u("We're sorry, but you've reached the end of search results."),document.querySelector(".button.load-more").style.display="none")}function O(){var t;const e=document.querySelector(".gallery");if(e){const r=((t=e.firstElementChild)==null?void 0:t.getBoundingClientRect().height)||0;window.scrollBy({top:r*2,behavior:"smooth"})}}function u(e){g.error({message:e,close:!0,position:"topRight",backgroundColor:"#EF4040",messageColor:"#FAFAFB",maxWidth:"432px",class:"custom-iziToast"})}function n(e){document.querySelector(".loader").style.display=e?"block":"none"}
//# sourceMappingURL=index.js.map
