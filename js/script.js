document.addEventListener('DOMContentLoaded', function(){
  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  if (menuToggle && mobileNav){
    menuToggle.addEventListener('click', function(){
      const open = mobileNav.getAttribute('aria-hidden') === 'false';
      mobileNav.setAttribute('aria-hidden', open ? 'true' : 'false');
      mobileNav.style.display = open ? 'none' : 'block';
    });
  }
});