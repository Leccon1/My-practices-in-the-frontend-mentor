(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();const i=document.getElementById("cardContent"),l=document.querySelector("[data-button-submit]"),c=document.querySelectorAll("[data-rating-btn]");let a=null;c.forEach(s=>{s.addEventListener("click",()=>{a=Number(s.dataset.ratingBtn),c.forEach(r=>{r!==s&&r.classList.remove("card-raiting__stars-button--active"),s.classList.add("card-raiting__stars-button--active")})})});l.addEventListener("click",()=>{if(!a){alert("Пожалуйста, выберите оценку!");return}i.style.setProperty("align-items","center"),i.classList.add("card-thanks"),i.innerHTML=`
            <img
            class="card-thanks__image"
            src="./images/illustration-thank-you.svg"
            alt="Thank you illustration">
            <p class="card-thanks__raiting-text">
                You selected <span>${a}</span> out of 5
            </p>
            <h2 class="card-thanks__title">Thank you!</h2>
            <p class="card-thanks__description card-description">
                We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
            </p>
    `});
