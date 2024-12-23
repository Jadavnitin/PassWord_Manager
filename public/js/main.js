// Toggle dropdown menu on hamburger (Menu) icon click
const menuButton = document.getElementById('menuButton');
const dropdownMenu = document.getElementById('dropdownMenu');
const closeButton = document.getElementById('closeButton');
const statsContainer = document.getElementById('statsContainer');


// setTimeout(() => {
//    window.location.reload();
// }, 5000);

menuButton.addEventListener('click', () => {
   dropdownMenu.classList.toggle('show');
   // Add margin to container when dropdown is open
   if (dropdownMenu.classList.contains('show')) {
      statsContainer.style.marginTop = '210px'; // Adjust this value as needed
   } else {
      statsContainer.style.marginTop = '0';
   }
});

// Close dropdown menu on close button click
closeButton.addEventListener('click', () => {
   dropdownMenu.classList.remove('show');
   statsContainer.style.marginTop = '0';
});

// Close dropdown if clicked outside
window.addEventListener('click', (event) => {
   if (!dropdownMenu.contains(event.target) && !menuButton.contains(event.target)) {
      dropdownMenu.classList.remove('show');
      statsContainer.style.marginTop = '0';
   }
});


