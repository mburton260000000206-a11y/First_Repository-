
/* automatic copyright year */
const yearSpan = document.getElementById("year");

if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

/* dark mode toggle */
const themeButton = document.getElementById("theme-btn");
const themeLabel = document.getElementById("theme-label");
const themeIcon = document.getElementById("theme-icon");

if (themeButton) {
    themeButton.addEventListener("click", function () {
        // turn dark mode on or off
        document.body.classList.toggle("dark-mode");

        // check if dark mode is on
        const isDarkMode =
            document.body.classList.contains("dark-mode");

        // update the button's accessibility state
        themeButton.setAttribute(
            "aria-pressed",
            String(isDarkMode)
        );

        // update the button text
        if (themeLabel) {
            themeLabel.textContent = isDarkMode
                ? "Light Mode"
                : "Toggle Dark Mode";
        }

        // update the button icon
        if (themeIcon) {
            themeIcon.textContent = isDarkMode ? "☾" : "☀";
        }
    });
}

/* contact button */
const contactButton = document.getElementById("contact-btn");

if (contactButton) {
    contactButton.addEventListener("click", function () {
        alert("Thank you for reaching out! Contact form coming soon.");
    });
}

/* active navigation link */
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        // remove the active style from every navigation link
        navLinks.forEach(function (navLink) {
            navLink.classList.remove("active");
        });

        // highlight the link that was clicked
        link.classList.add("active");
    });
});
