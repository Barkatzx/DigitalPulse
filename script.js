// JavaScript function to toggle the mobile menu
function toggleMobileMenu() {
  var mobileMenuContent = document.getElementById('mobile-menu-content');
  if (mobileMenuContent.style.display === 'none' || mobileMenuContent.style.display === '') {
    mobileMenuContent.style.display = 'block';
  } else {
    mobileMenuContent.style.display = 'none';
  }
}

// For Smooth Scrooling

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});