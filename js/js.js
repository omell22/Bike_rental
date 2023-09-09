const contentImgBlock = document.querySelector('.about__img');
const contentImg = contentImgBlock.querySelector('img');
const content = document.querySelector(".about__text");
contentImg.addEventListener('load', function () {
   const maxHeight = contentImg.scrollHeight;
   const words = content.textContent.split(' ');
   let newText = '';

   for (const word of words) {
      const testText = newText + ' ' + word;
      content.textContent = testText;
      if (content.scrollHeight <= maxHeight) {
         newText = testText;
      } else {
         content.textContent = newText + '...';
         break;
      }
   }
});





document.addEventListener("DOMContentLoaded", function sleep() {
   const arrowUp = document.querySelector(".arrow-up");
   window.addEventListener("scroll", function () {
      if (window.scrollY > 200) {
         arrowUp.style.opacity = "1";
         arrowUp.style.transition = "1s"; 
      } else {
         arrowUp.style.transition = "1s";
         arrowUp.style.opacity = "0";
      }
   });
   
});


const body = document.querySelector('body');
const menu = document.querySelector('.header__menu')
const burger = document.querySelector('.header__burger');
burger.addEventListener('click', showBurger);

body.addEventListener('click', closeBurger);
function showBurger(event) {
   event.stopPropagation();
   burger.classList.toggle('active');
   menu.classList.toggle('active');
}
function closeBurger(event) {
   if (burger.classList.contains('active')) {
       burger.classList.remove('active');
       menu.classList.remove('active');
   }
}

const readMoreButtons = document.querySelectorAll('.bike-models__readMoreButton');
const itemsContainers = document.querySelectorAll('.bike-models__items.bike-models__items-hidden');


readMoreButtons.forEach(function (button, index) {
   button.addEventListener('click', function () {
      event.preventDefault();
      console.log("8456928");
      itemsContainers[index].classList.toggle('bike-models__items-hidden');
   });
});




const swiper = new Swiper('.comments__slider', {
   slidesPerView: 'auto', // Встановлюємо "auto" для автоматичного визначення кількості слайдів
   loop: true, // Циклічний режим
   navigation: {
      nextEl: '.swiper-button-next', // Селектор кнопки "Наступний слайд"
      prevEl: '.swiper-button-prev', // Селектор кнопки "Попередній слайд"
   },

});




document.addEventListener("DOMContentLoaded", function () {
   const cookieBanner = document.getElementById("cookieBanner");
   const acceptButton = document.getElementById("acceptButton");
   const footer = document.querySelector('.footer__rights');
   const closeButton = document.getElementById("closeButton");
   const isCookiesAccepted = localStorage.getItem("cookiesAccepted");

   if (!isCookiesAccepted) {
      cookieBanner.style.display = "flex";
   }

   acceptButton.addEventListener("click", function () {
      footer.style.padding = "2rem 0";
      cookieBanner.style.display = "none";
      localStorage.setItem("cookiesAccepted", "true");
   });

   closeButton.addEventListener("click", function () {
      cookieBanner.style.display = "none";
      footer.style.padding = "2rem 0";
   });

});




const header = document.querySelector('.header');
const height = window.scrollHeight;
window.addEventListener('scroll', function() {
   if (window.scrollY > height){
      header.style.background = 'rgba(10,10,10,0.1)';
   }

})
