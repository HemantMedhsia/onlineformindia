const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
let isOpen = false;

menuToggle.addEventListener("click", () => {
  if (!isOpen) {
    gsap.to(mobileMenu, { duration: 0.5, x: 0 });
    mobileMenu.classList.remove("hidden");
    isOpen = true;
  } else {
    gsap.to(mobileMenu, { duration: 0.5, x: "100%" });
    setTimeout(() => {
      mobileMenu.classList.add("hidden");
    }, 500);
    isOpen = false;
  }
});
