

const importCardContainer = document.querySelector("#import-card-container");
const dropdownLinks = document.querySelectorAll('.dropdown a');
const headerLinks = document.querySelectorAll(".header-links a");



menuButton.addEventListener('click', () => {
   dropdownMenu.classList.toggle('show');
   if (dropdownMenu.classList.contains('show')) {
      importCardContainer.style.marginTop = "250px";
   } else {

      importCardContainer.style.marginTop = "0px";
   }
});

// Close dropdown menu on close button click
closeButton.addEventListener('click', () => {
   dropdownMenu.classList.remove('show');
   importCardContainer.style.marginTop = "0px";
});

// Close dropdown if clicked outside
window.addEventListener('click', (event) => {
   if (!dropdownMenu.contains(event.target) && !menuButton.contains(event.target)) {
      dropdownMenu.classList.remove('show');
      statsContainer.style.marginTop = '0';
   }
});