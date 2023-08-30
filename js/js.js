const contentImgBlock = document.querySelector('.about__img');
const contentImg = contentImgBlock.querySelector('img');
const content = document.querySelector(".about__text");
console.log(contentImg);
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





const menu = document.querySelector('.header__menu')
const burger = document.querySelector('.header__burger');
burger.addEventListener('click', showBurger);
const body = document.querySelector('body');
function showBurger(event) {
   burger.classList.toggle('active');
   menu.classList.toggle('active');
}



const readMoreButtons = document.querySelectorAll('.bike-models__readMoreButton');
const itemsContainers = document.querySelectorAll('.bike-models__items.bike-models__items-hidden');
console.log(itemsContainers[1]);

readMoreButtons.forEach(function (button, index) {
   button.addEventListener('click', function () {
      event.preventDefault();
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




const about = document.getElementById('about');
const models = document.getElementById('models');
const conditions = document.getElementById('conditions');
const contacts = document.getElementById('contacts');
const headerHeight = 0;

about.addEventListener('click', scrollToPoint);
models.addEventListener('click', scrollToPoint);
conditions.addEventListener('click', scrollToPoint);
contacts.addEventListener('click', scrollToPoint);

function scrollToPoint(event) {
   event.preventDefault();
   const targetId = this.getAttribute('data-target');
   const element = document.querySelector(`.${targetId}`);
   if (element) {
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
         top: elementPosition + 1,
         behavior: 'instant'
      });
   }
}
