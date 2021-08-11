// $(document).ready(function () {
//   /* -----------------------------------------------
//                     MOBILE NAVIGATION
//     -------------------------------------------------- */

//   $('.burger-icon').on('click', function () {
//     if ($('.main-nav').hasClass('mobile-hide')) {
//       $('.main-nav').removeClass('mobile-hide');
//       $('.main-nav').addClass('mobile-show');
//     } else {
//       $('.main-nav').addClass('mobile-hide');
//       $('.main-nav').removeClass('mobile-show');
//     }
//   });
// });
window.onload = function () {
  const hamburger = document.getElementById('burger-icon');
  const navUL = document.getElementById('nav-drop');

  hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
  });
};
