const settingsButton = document.querySelectorAll(".settings-button");
const menuButton = document.getElementById('menuButton');
const dropdownMenu = document.getElementById('dropdownMenu');
const closeButton = document.getElementById('closeButton');
const headerLinks = document.querySelectorAll(".header-links a");
const dropdownLinks = document.querySelectorAll('.dropdown a');
const settingsCardContainer = document.querySelector(".settings-card-container");



settingsButton.forEach((settingsButton) =>
   settingsButton.addEventListener("click", () => {
      const isDisabled = settingsButton.classList.contains("enabled");
      if (isDisabled) {
         settingsButton.classList.remove("enabled");
         settingsButton.textContent = "Disable";
      } else {
         settingsButton.classList.add("enabled");
         settingsButton.textContent = "Enable";
      }
   })
);



// Add event listener for the theme dropdown

   const themeSelector = document.getElementById("theme-selector");

   // Retrieve the theme from localStorage
   const savedTheme = localStorage.getItem("theme");
   
   if (savedTheme) {
      themeSelector.value = savedTheme.split(" ").map((str) => { return str.charAt(0).toUpperCase() + str.slice(1); }).join(" ")
      applyTheme(savedTheme);            // Apply the saved theme to the page
   } else {
      // If no theme is saved, set the default theme (e.g., 'light')
      themeSelector.value = "Dark";
      console.log(themeSelector.value);
      applyTheme("dark");
   }

   themeSelector.addEventListener("change", () => {
      const theme = themeSelector.value.toLowerCase();
      console.log(theme);
      localStorage.setItem("theme", theme); // Save the theme to localStorage
      applyTheme(theme);
   });

   // Function to apply the theme
  function applyTheme(theme) {
      const root = document.documentElement;
     
      switch (theme) {
         case "dark":
            root.style.setProperty("--bg-color", "#1a1a1a");
            root.style.setProperty("--settings-card-color", "#252525");
            root.style.setProperty("--text-color", "#ffffff");
            break;

         case "solarised dark":
            root.style.setProperty("--bg-color", "#002b36");
            root.style.setProperty("--settings-card-color", "#073642");
            root.style.setProperty("--text-color", "#839496");
            break;

         case "tokyo night":
            root.style.setProperty("--bg-color", "#1a202c");
            root.style.setProperty("--settings-card-color", "#2d3748");
            root.style.setProperty("--text-color", "#a0aec0");
            break;

         case "dracula":
            root.style.setProperty("--bg-color", "#282a36");
            root.style.setProperty("--settings-card-color", "#44475a");
            root.style.setProperty("--text-color", "#f8f8f2");
            break;

         case "monokai":
            root.style.setProperty("--bg-color", "#272822");
            root.style.setProperty("--settings-card-color", "#3e3d32");
            root.style.setProperty("--text-color", "#f8f8f2");
            break;

         case "blue":
            root.style.setProperty("--bg-color", "#1e3a8a");
            root.style.setProperty("--settings-card-color", "#2563eb");
            root.style.setProperty("--text-color", "#ffffff");
            break;

         case "nord":
            root.style.setProperty("--bg-color", "#2e3440");
            root.style.setProperty("--settings-card-color", "#3b4252");
            root.style.setProperty("--text-color", "#eceff4");
            break;

         case "gray":
            root.style.setProperty("--bg-color", "#3c3c3c");
            root.style.setProperty("--settings-card-color", "#5c5c5c");
            root.style.setProperty("--text-color", "#ffffff");
            break;

         case "light":
            root.style.setProperty("--bg-color", "#ffffff");
            root.style.setProperty("--settings-card-color", "#f0f0f0");
            root.style.setProperty("--text-color", "#000000");
            break;

         default:
            break;
      }
   }





headerLinks.forEach(link => {
   link.addEventListener("click", function () {
      headerLinks.forEach(link => link.classList.remove("active"));
      this.classList.add("active");
   });
});



dropdownLinks.forEach(link => {
   link.addEventListener("click", function () {
      dropdownLinks.forEach(link => link.classList.remove("active"));
      this.classList.add("active");
   });
});

const currentPage = window.location.pathname.split('/').pop(); // e.g., 'home.html'



headerLinks.forEach(link => {
   const linkPage = link.getAttribute('href');

   if (linkPage === currentPage) {
      link.classList.add('active'); // Add 'active' class to the matching link
   } else {
      link.classList.remove('active'); // Remove 'active' from non-matching links
   }
})

dropdownLinks.forEach(link => {
   const linkPage = link.getAttribute('href');

   if (linkPage === currentPage) {
      link.classList.add('active'); // Add 'active' class to the matching link
   } else {
      link.classList.remove('active'); // Remove 'active' from non-matching links
   }
});


menuButton.addEventListener('click', () => {
   dropdownMenu.classList.toggle('show');
   if (dropdownMenu.classList.contains('show')) {
      settingsCardContainer.style.marginTop = "250px";
   } else {

      settingsCardContainer.style.marginTop = "0px";
   }
});

// Close dropdown menu on close button click
closeButton.addEventListener('click', () => {
   dropdownMenu.classList.remove('show');
   settingsCardContainer.style.marginTop = "0px";
});

// Close dropdown if clicked outside
window.addEventListener('click', (event) => {
   if (!dropdownMenu.contains(event.target) && !menuButton.contains(event.target)) {
      dropdownMenu.classList.remove('show');
      settingsCardContainer.style.marginTop = '0';
   }
});



