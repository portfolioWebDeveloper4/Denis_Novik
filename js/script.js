$(document).ready(function () {
   // gulp ===================================================
   function testWebP(callback) {
      let webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }
   testWebP(function (support) {
      if (support == true) {
         document.querySelector('body').classList.add('webp');
      } else {
         document.querySelector('body').classList.add('no-webp');
      }
   });
   // gulp ===================================================





   // burger =================================================
   $('.header__burger').click(function() {
      $('.header__burger, .nav').toggleClass('active');
      $('body').toggleClass('lock');
   });

   for (i = 0; i < $('.nav__item').length; i++) {
      $('.nav__item')[i].onclick = function() {
         $('.header__burger, .nav').toggleClass('active');
         $('body').toggleClass('lock');
      };
   };
   // / burger ===============================================
});