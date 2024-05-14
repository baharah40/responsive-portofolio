document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');
  const closeIcon = document.querySelector('.closeIcon');

  hamburger.addEventListener('click', function() {
    menu.classList.toggle('showMenu');
    hamburger.classList.toggle('closeIcon');
    document.body.style.overflowY = menu.classList.contains('showMenu') ? 'hidden' : 'auto'; 
  });

  closeIcon.addEventListener('click', function() {
    menu.classList.remove('showMenu');
    hamburger.classList.remove('closeIcon');
    document.body.style.overflowY = 'auto'; 
  });
});
