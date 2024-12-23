
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const navLinks = document.querySelectorAll(".menu a");



navLinks.forEach(link => {
   link.addEventListener("click", function () {

      navLinks.forEach(nav => nav.classList.remove("active"));

      this.classList.add("active");



   });
});


hamburger.addEventListener('click', () => {
   menu.classList.toggle('active');
   console.log(menu.classList)
});

