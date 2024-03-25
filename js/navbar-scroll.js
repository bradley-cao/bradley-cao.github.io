const navBar = document.querySelector('.navbar');
const toggler = document.getElementById('toggler');

toggler.onclick = function() {
  console.log(toggler.getAttribute('aria-expanded'));
  if (toggler.getAttribute('aria-expanded') == "true") {
    console.log("reached here");
    if (!navBar.classList.contains('navbar-scrolled')) {
      navBar.classList.add('navbar-scrolled');
    }
  } else if (window.scrollY < 76) {
    console.log("reached here 2");
    navBar.classList.remove('navbar-scrolled');
  } 
}

window.addEventListener('scroll', () => {
  if (window.scrollY > 76) {
    navBar.classList.add('navbar-scrolled');
    // navBar.classList.remove('navbar-light');
    // navBar.classList.add('navbar-dark');
  } else if (window.scrollY < 76) {
    navBar.classList.remove('navbar-scrolled');
    // navBar.classList.add('navbar-light');
    // navBar.classList.remove('navbar-dark');
  }
});