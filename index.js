import{S as f,a as y,i as g}from"./assets/vendor-jhRMbdqn.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}})();let u;function h(e,t=!1){const a=document.querySelector(".gallery");t||(a.innerHTML=""),e.forEach(s=>{a.innerHTML+=L(s)}),u?u.refresh():b()}function v(){const e=document.querySelector(".gallery");e.innerHTML=""}function L(e){return`<li class="gallery-item">
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
           </li>`}function b(){u=new f(".gallery a",{overlayOpacity:.8,captions:!0,captionsData:"alt",captionPosition:"outside",captionDelay:"250"})}const S="https://pixabay.com/api/",w="49290147-91bc44204d790a43c13c008af",E=15;async function p(e,t){try{const a=encodeURIComponent(e),s={key:w,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:E,page:t};return(await y.get(S,{params:s})).data}catch(a){throw console.error("Error fetching photos:",a),a}}let d=1,n="";document.addEventListener("DOMContentLoaded",()=>{P()});function P(){document.querySelector("form.form").addEventListener("submit",q),document.querySelector(".button.load-more").addEventListener("click",T)}async function q(e){if(e.preventDefault(),n=e.target.querySelector("input").value,!!n.trim()){v(),i(!0),d=1;try{const t=await p(n,d);m(t)}catch(t){l("Error fetching images: "+t.message)}finally{i(!1)}}}async function T(e){e.preventDefault(),i(!0);try{const t=await p(n,++d);m(t,!0),x()}catch(t){l("Error fetching images: "+t.message)}finally{i(!1)}}function m(e,t=!1){e.hits.length?(h(e.hits,t),document.querySelector(".button.load-more").style.display="block"):(l(t?"We're sorry, but you've reached the end of search results.":"Sorry, there are no images matching your search query. Please try again!"),document.querySelector(".button.load-more").style.display="none")}function x(){var t;const e=document.querySelector(".gallery");if(e){const a=((t=e.firstElementChild)==null?void 0:t.getBoundingClientRect().height)||0;window.scrollBy({top:a*2,behavior:"smooth"})}}function l(e){g.error({message:e,close:!0,position:"topRight",backgroundColor:"#EF4040",messageColor:"#FAFAFB",maxWidth:"432px",class:"custom-iziToast"})}function i(e){document.querySelector(".loader").style.display=e?"block":"none"}
//# sourceMappingURL=index.js.map
