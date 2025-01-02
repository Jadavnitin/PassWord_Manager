

document.addEventListener("DOMContentLoaded", function () {
   
const menuButton = document.getElementById('menuButton');
const dropdownMenu = document.getElementById('dropdownMenu');
const closeButton = document.getElementById('closeButton');
const statsContainer = document.getElementById('statsContainer');
const mainHeaderAp = document.querySelector(".main-header-ap");
const addButton = document.getElementById('addButton');
const mainSection = document.querySelector("#main-section");
const showBtn = document.querySelector('button[type="button"]');
const addPasswordSection = document.getElementById("add-password-section");
const passwordGeneratorSection = document.getElementById("password-generator-section");
const usePasswordButton = document.getElementById("use");
const cancelGenButton = document.getElementById("cancel-gen");
const cancelGenButton1 = document.getElementById("cancel-gen1");
const passwordField = document.getElementById('password-gen');
const toggleVisibility = document.getElementById('toggleVisibility');
const lengthSlider = document.getElementById('length-slider');
const lengthValue = document.getElementById('lengthValue');
const azSwitch = document.getElementById('azSwitch');
const digitsSwitch = document.getElementById('digitsSwitch');
const symbolsSwitch = document.getElementById('symbolsSwitch');
const passwordInput = document.getElementById('password');
const apAddButton = document.getElementById('ap-add-button');
const websiteInput = document.getElementById('website');
const usernameInput = document.getElementById('username');
const descriptionInput = document.getElementById('note');
const todoListContainer = document.getElementById('todo-list');
const totalDecrptionTIme = document.querySelector('.ms-h2');
const headerLinks = document.querySelectorAll(".header-links a");
const dropdownLinks = document.querySelectorAll('.dropdown a');


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
   })




   menuButton.addEventListener('click', () => {
      dropdownMenu.classList.toggle('show');

      // Add margin to container when dropdown is open
      if (dropdownMenu.classList.contains('show')) {
         if (statsContainer) {
            statsContainer.style.marginTop = '210px';
         }
         // Adjust this value as needed
      } else {
         if (statsContainer) {
            statsContainer.style.marginTop = '0px';
         }
      }
   });

   // Close dropdown menu on close button click
   closeButton.addEventListener('click', () => {
      dropdownMenu.classList.remove('show');
      if (statsContainer) {
         statsContainer.style.marginTop = '0px';
      }
   });

   // Close dropdown if clicked outside
   
   window.addEventListener('click', (event) => {
      if (!dropdownMenu.contains(event.target) && !menuButton.contains(event.target)) {
         dropdownMenu.classList.remove('show');
            statsContainer.style.marginTop = '0px';
      }
   });


   let passwordVisible = false;
     
lengthSlider.value = 20;
   
   
   lengthValue.textContent = lengthSlider.value;

   lengthSlider.addEventListener('input', () => {
      lengthValue.textContent = lengthSlider.value;
      generatePassword();
   });

   // Function to restore default styles
   const restoreStyles = () => {
      document.body.style.fontFamily = '';
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
      document.body.style.display = '';
      document.body.style.justifyContent = '';
      document.body.style.alignItems = '';
      document.body.style.height = '';
      document.body.style.flexDirection = '';
      document.body.style.gap = '';
      document.body.style.overflow = '';

   };


   const applyStyles = () => {
      document.body.style.fontFamily = 'Arial, sans-serif';
      document.body.style.backgroundColor = '#2E3440';
      document.body.style.color = '#D8DEE9';
      document.body.style.display = 'flex';
      document.body.style.justifyContent = 'center';
      document.body.style.alignItems = 'center';
      document.body.style.height = '100vh';
      document.body.style.flexDirection = 'column';
      document.body.style.gap = '20px';
      document.body.style.overflow = 'hidden';
   };


   function generatePassword() {
      const totalLength = parseInt(lengthSlider.value);
      const azEnabled = azSwitch.checked;
      const digitsEnabled = digitsSwitch.checked;
      const symbolsEnabled = symbolsSwitch.checked;

      const azChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const digitChars = '0123456789';
      const symbolChars = '!@#$%?&*';

      let password = '';
      let availableSets = 0;

      if (azEnabled) availableSets++;
      if (digitsEnabled) availableSets++;
      if (symbolsEnabled) availableSets++;

      const lengthPerSet = Math.floor(totalLength / availableSets);

      if (azEnabled) {
         for (let i = 0; i < lengthPerSet; i++) {
            password += azChars[Math.floor(Math.random() * azChars.length)];
         }
      }

      if (digitsEnabled) {
         for (let i = 0; i < lengthPerSet; i++) {
            password += digitChars[Math.floor(Math.random() * digitChars.length)];
         }
      }

      if (symbolsEnabled) {
         for (let i = 0; i < lengthPerSet; i++) {
            password += symbolChars[Math.floor(Math.random() * symbolChars.length)];
         }
      }

      while (password.length < totalLength) {
         password += azChars[Math.floor(Math.random() * azChars.length)];
      }

      passwordField.value = password.split('').sort(() => Math.random() - 0.5).join('');

   }

   toggleVisibility.addEventListener('click', () => {
      passwordVisible = !passwordVisible;
      passwordField.type = passwordVisible ? 'text' : 'password';
      toggleVisibility.classList.toggle('fa-eye-slash', passwordVisible);
      toggleVisibility.classList.toggle('fa-eye', !passwordVisible);
   });

   usePasswordButton.addEventListener('click', () => {
      passwordInput.value = passwordField.value; // Set the generated password to the Add Password section's password input
      addPasswordSection.style.display = 'block'; // Show Add Password section
      passwordGeneratorSection.style.display = 'none'; // Hide Password Generator section
   });

   cancelGenButton.addEventListener('click', () => {
      passwordGeneratorSection.style.display = 'none'; // Hide Password Generator section
      addPasswordSection.style.display = 'none';
      statsContainer.style.display = "block";
      mainHeaderAp.style.display = "flex";
      todoListContainer.style.display = "block";
      restoreStyles();

   });

   let passwordCount = 0;
   function updatePasswordCount() {
      const totalPasswords = document.querySelector('.stat-box h2');
      totalPasswords.textContent = `${passwordCount} / 100`;
   }

   cancelGenButton1.addEventListener('click', () => { // Clear generated password
      statsContainer.style.display = "block";
      mainHeaderAp.style.display = "flex";
      passwordGeneratorSection.style.display = 'none'; // Hide Password Generator section
      addPasswordSection.style.display = 'none';
      todoListContainer.style.display = "block";
      restoreStyles();

   });

   showBtn.addEventListener("click", () => {
      addPasswordSection.style.display = "none";
      passwordGeneratorSection.style.display = "block";



   });

   generatePassword();


   // When the "Add" button is clicked, show the Add Password section and apply styles
   addButton.addEventListener('click', () => {
      addPasswordSection.style.display = 'block';
      statsContainer.style.display = "none";
      mainHeaderAp.style.display = "none";
      todoListContainer.style.display = "none";// Show Add Password section
      applyStyles();
      // Apply the styles
   });

   // When the "Cancel" button is clicked, hide the Add Password section
   cancelGenButton.addEventListener('click', () => {
      addPasswordSection.style.display = 'none';  // Hide Add Password section
   });




   apAddButton.addEventListener('click', () => {

      const website = websiteInput.value;
      const username = usernameInput.value;
      const password = passwordInput.value;
      const description = descriptionInput.value;

      // Only add if all fields are filled
      if (website && username && password && description) {

         if (isEditMode) {
            // If we're in edit mode, update the todo item
            updateTodoItem(website, username, password, description);
         } else {
            // If we're adding a new todo item
            addTodoItem(website, username, password, description);
         }
         showToast('Password successfully added!');

         // Clear the inputs
         websiteInput.value = '';
         usernameInput.value = '';
         passwordInput.value = '';
         descriptionInput.value = '';
         statsContainer.style.display = "block";
         mainHeaderAp.style.display = "flex";
         todoListContainer.style.display = "block";
         restoreStyles();
         addPasswordSection.style.display = 'none';


      } else {
         alert('Please fill out all fields!');
      }



   });

   let isEditMode = false;
   let editingItem = null;




   function addTodoItem(website, username, password, description) {
      const todoItem = document.createElement('div');
      todoItem.classList.add('todo-item');


      const encryptedPassword = encrypt(password);

      // Encrypt the password

      if (!encryptedPassword) {
         alert('Failed to encrypt password. Please try again.');
         return;
      }

      // Start measuring decryption time
      const startTime = performance.now();

      // Decrypt the password here (this is where you measure the decryption time)
      const decryptedPassword = decrypt(encryptedPassword);

      // End the timer and calculate time taken for decryption
      const endTime = performance.now();
      const timeTaken = (endTime - startTime).toFixed(2); // Calculate time in ms and round to 2 decimals

      // Log the decryption time and password for debugging purposes
      if (decryptedPassword === 'Invalid data') {
         alert('Failed to decrypt password. Data may be corrupted.');
         console.error(`Decryption failed for: ${encryptedPassword}`);
      }


      const todoLeft = document.createElement('div');
      todoLeft.classList.add('todo-left');
      todoLeft.innerHTML = `
        <span>${website}</span>
        <span>${username}</span>
    `;



      const todoRight = document.createElement('div');
      todoRight.classList.add('todo-right');
      todoRight.innerHTML = `
        <i class="fa fa-user" title="Username" onclick="copyUsername('${username}')"></i>
        <i class="fa fa-key" title="Key" onclick="copyPassword('${encryptedPassword}')"></i>
        <i class="fa fa-edit" title="Edit" onclick="editTodoItem(this)"></i>
        <i class="fa fa-trash" title="Delete" onclick="deleteTodoItem(this)"></i>
    `;

      todoItem.appendChild(todoLeft);
      todoItem.appendChild(todoRight);
      console.log(todoRight);

      // Store the password and description as data attributes (for future use when editing)
      todoItem.dataset.password = encryptedPassword;
      todoItem.dataset.description = description;

      todoListContainer.appendChild(todoItem);

      passwordCount++;
      updatePasswordCount();
   }

   function updateTodoItem(website, username, password, description) {
      const encryptedPassword = encrypt(password);
      // Find the todo item that is being edited
      const todoLeft = editingItem.querySelector('.todo-left');
      const todoRight = editingItem.querySelector('.todo-right');

      // Update the left part with the new values (website and username)
      todoLeft.innerHTML = `
        <span>${website}</span>
        <span>${username}</span>
    `;

      // Update the right part with the icons (username, password, edit, delete)
      todoRight.innerHTML = `
        <i class="fa fa-user" title="Username" onclick="copyUsername('${username}')"></i>
        <i class="fa fa-key" title="Key" onclick="copyPassword('${encryptedPassword}')"></i>
        <i class="fa fa-edit" title="Edit" onclick="editTodoItem(this)"></i>
        <i class="fa fa-trash" title="Delete" onclick="deleteTodoItem(this)"></i>
    `;

      // Update the data-attributes for password and description
      editingItem.dataset.password = encryptedPassword;
      editingItem.dataset.description = description;

      // Reset the flag and clear the editing item
      isEditMode = false;
      editingItem = null;

      // Hide the Add Password section after updating
      addPasswordSection.style.display = 'none';
      statsContainer.style.display = "block";
      mainHeaderAp.style.display = "flex";
      todoListContainer.style.display = "block";

      // Restore the default styles
      restoreStyles();
      apAddButton.textContent = 'Add';
   }

   // Function to edit a To-Do item
   function editTodoItem(element) {
      const todoItem = element.closest('.todo-item');  // Find the closest .todo-item to the clicked element
      const todoLeft = todoItem.querySelector('.todo-left');  // Find the .todo-left section
      const todoRight = todoItem.querySelector('.todo-right');  // Find the .todo-right section

      console.log(todoItem);
      // Get the website and username directly from the left side
      const website = todoLeft.querySelector('span:nth-child(1)').textContent.replace('Website:', '').trim();
      const username = todoLeft.querySelector('span:nth-child(2)').textContent.replace('Username:', '').trim();

      // For password and description, use data stored in the todoItem element
      const password = todoItem.dataset.password || '';  // Use stored password from data-attribute
      const description = todoItem.dataset.description || '';  // Use stored description from data-attribute



      // Pre-fill the input fields with the current values
      websiteInput.value = website;
      usernameInput.value = username;
      passwordInput.value = password;
      descriptionInput.value = description;

      // Set the flag for edit mode and save the item being edited
      isEditMode = true;
      editingItem = todoItem;

      apAddButton.textContent = 'Update';

      // Show the Add Password section to allow editing
      addPasswordSection.style.display = 'block';
      applyStyles();
      statsContainer.style.display = "none";
      mainHeaderAp.style.display = "none";
      todoListContainer.style.display = "none";  // Hide the todo list container
   }

   // Delete Todo Item
   function deleteTodoItem(element) {
      const todoItem = element.closest('.todo-item');
      todoItem.remove();
      passwordCount--;
      updatePasswordCount();
   }

   function copyUsername(username) {
      const tempInput = document.createElement('input');
      tempInput.value = username;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      alert('Username copied to clipboard!');
   }



   // Copy Password Function (With Decryption Time)
   function copyPassword(encryptedPassword) {
      const password = decrypt(encryptedPassword);
      const tempInput = document.createElement('input');
      tempInput.value = password;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);

      alert('Password copied to clipboard!');


   }



   // Get the toast element
   const toast = document.getElementById('toast');

   // Function to show the toast
   function showToast(message) {
      toast.textContent = message;
      toast.classList.add('show');

      setTimeout(() => {
         toast.classList.remove('show');
      }, 3000);
   }






   // Helper functions for encryption and decryption
   function encrypt(text) {
      try {
         return btoa(unescape(encodeURIComponent(text))); // Proper encoding for Base64
      } catch (e) {
         console.error('Encryption error:', e);
         return null;
      }
   }

   function decrypt(encodedText) {
      try {
         return decodeURIComponent(escape(atob(encodedText))); // Proper decoding for Base64
      } catch (e) {
         console.error('Decryption error:', e);
         return 'Invalid data'; // Return a placeholder for invalid data
      }
   }

})


// Function to apply the theme based on the selected theme name
function applyTheme(theme) {
   const root = document.documentElement;

   // Set CSS properties based on the selected theme
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

document.addEventListener("DOMContentLoaded", function () {
   // Retrieve the stored theme (if any) from localStorage
   const storedTheme = localStorage.getItem("theme");
   if (storedTheme) {
      applyTheme(storedTheme);
   } else {
      applyTheme("dark"); // Default theme
   }

});

