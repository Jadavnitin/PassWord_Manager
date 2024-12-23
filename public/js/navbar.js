function loadCSS(filename) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = filename;
    document.head.appendChild(link);

}

function loadJS(filename) {
    const script = document.createElement("script");
    script.src = filename;
    script.defer = true;
    document.body.appendChild(script);
}


// Dynamically load navbar and footer
document.addEventListener("DOMContentLoaded", function () {

    loadCSS("css/home.css");
    loadJS("js/home.js")



    document.getElementById('navbar').innerHTML = `
            <nav>
        <div class="logo">
            <img src="images/logo.webp" alt="Logo">
        </div>
        <ul class="menu" id="menu">
            <li><a href="home"         target="_blank">Home</a></li>
            <li><a href="download"     target="_blank">Download</a></li>
            <li><a href="pricing"      target="_blank">Pricing</a></li>
            <li><a href="servers"      target="_blank">Servers</a></li>
            <li><a href="donation"     target="_blank">Donation</a></li>
            <li><a href="affiliates"   target="_blank">Affiliates</a></li>
            <li><a href="contact"      target="_blank">Contact</a></li>
            <li><a href="status"       target="_blank">Status</a></li>
        </ul>
        <div class="auth">
            <a href="login" class="login" target="_blank">Log in</a>
            <a href="signup" class="signup" target="_blank">Sign up</a>
        </div>
        <div class="hamburger" id="hamburger">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </nav>
        `;

    document.getElementById('footer').innerHTML = `
           <footer>
      <div class="footer-links">
         <a href="#">Terms of Service</a>
         <a href="#">Privacy Policy</a>
         <a href="#">GDPR</a>
         <a href="#">Cookie Policy</a>
         <a href="#">Data Processing Addendum</a>
      </div>
      <div class="footer-icons">
         <a href="#"><i class="fas fa-gamepad"></i></a>
         <a href="#"><i class="fab fa-github"></i></a>
         <a href="#"><i class="fab fa-twitter"></i></a>
      </div>
      <div class="copyright">
         © 2024 <a href="#">Rabbit Company LLC</a>, All rights reserved.
      </div>
   </footer>
        `;

    const currentPage = window.location.pathname.split('/').pop(); // e.g., 'home.html'
    console.log("current page:-", currentPage);

    const menuLinks = document.querySelectorAll('.menu a');


    menuLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        console.log("all page:", linkPage);
        // Get href value, e.g., 'home.html'
        if (linkPage === currentPage) {
            link.classList.add('active'); // Add 'active' class to the matching link
        } else {
            link.classList.remove('active'); // Remove 'active' from non-matching links
        }
    })
})