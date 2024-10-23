document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
  
    menuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  });
  