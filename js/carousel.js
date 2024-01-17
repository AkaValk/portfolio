// On récupère le slider
const swipr = document.querySelector("#swiper")
// Paramètres du slider
 const swiper = new Swiper('.slider-container', {
    fade : 'true',
    grabCursor : 'true',
    // configure Swiper to use modules
    
    direction: 'horizontal',
    pagination : {
        el: ".swiper-pagination",
        clickable : 'true',
        dynamicBullets : true
    },
    breakpoints :{
        0:{
            slidesPerView : 1,
        },
        520:{
            slidesPerView : 1,
        },
        950:{
            slidesPerView : 1,
        },
    },
  });
  swiper.init()
 