 // JavaScript function to toggle the mobile menu
 function toggleMobileMenu() {
  var mobileMenuContent = document.getElementById('mobile-menu-content');
  if (mobileMenuContent.style.display === 'none' || mobileMenuContent.style.display === '') {
    mobileMenuContent.style.display = 'block';
  } else {
    mobileMenuContent.style.display = 'none';
  }
}