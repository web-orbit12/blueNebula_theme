document.addEventListener('DOMContentLoaded', function() {
  const menuLinks = document.querySelectorAll('.mega-menu__list li a');

  menuLinks.forEach((link) => {
    if (link.querySelector('img')) {
      link.classList.add('imgmenu');
    }
  });
  
});
