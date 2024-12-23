const toggleBtn = document.getElementById("toggleBtn");
const serverInput = document.getElementById("serverInput");
const serverDropdown = document.getElementById("serverDropdown");

// Default state: toggle is ON
serverInput.style.display = "none";
serverDropdown.style.display = "block";
serverInput.value = "Europe"; // Default value in the input
serverInput.disabled = true; // Disable input field when dropdown is shown

// Toggle input and dropdown visibility, and switch icons
toggleBtn.addEventListener("click", function () {
   if (toggleBtn.classList.contains("on")) {
      toggleBtn.classList.remove("on");
      toggleBtn.classList.add("off");
      serverDropdown.style.display = "none";
      serverInput.style.display = "block";
      serverInput.value = ""; // Remove value when toggle is off
      serverInput.placeholder = "Enter server name"; // Reset placeholder
      serverInput.disabled = false; // Enable input
      toggleBtn.innerHTML = '<div class="slider-slash-container"><i class="fa-solid fa-slash"></i><i class="fa-solid fa-sliders"></i></div>'; // Add slash and slider icons stacked
   } else {
      toggleBtn.classList.add("on");
      toggleBtn.classList.remove("off");
      serverInput.style.display = "none";
      serverDropdown.style.display = "block";
      serverInput.value = "Europe"; // Set value when toggle is on
      serverInput.disabled = true; // Disable input field
      toggleBtn.innerHTML = '<i class="fa-solid fa-sliders"></i>'; // Switch to "on" icon
   }
});

// Update input value when dropdown changes
serverDropdown.addEventListener("change", function () {
   serverInput.value = serverDropdown.value;
});







document.addEventListener("DOMContentLoaded", () => {
   // Toggle password visibility
   const passwordInput = document.getElementById("password");
   const passwordToggle = document.getElementById("passwordToggle");
   const showPasswordIcon = document.getElementById("showPasswordIcon");

   passwordToggle.addEventListener("click", () => {
      if (passwordInput.type === "password") {
         passwordInput.type = "text";
         showPasswordIcon.classList.remove("fa-eye");
         showPasswordIcon.classList.add("fa-eye-slash");
      } else {
         passwordInput.type = "password";
         showPasswordIcon.classList.remove("fa-eye-slash");
         showPasswordIcon.classList.add("fa-eye");
      }
   });
});



document.querySelector("form").addEventListener("submit", function (event) {
   const regionValue = serverInput.style.display === "none"
      ? serverDropdown.value
      : serverInput.value.trim();

   if (!regionValue) {
      alert("Please provide a valid region.");
      event.preventDefault(); // Prevent form submission
      return;
   }

   // Create a hidden input to add the region to the form submission
   const regionField = document.createElement("input");
   regionField.type = "hidden";
   regionField.name = "region";
   regionField.value = regionValue;

   // Append the hidden input field to the form
   this.appendChild(regionField);
});







