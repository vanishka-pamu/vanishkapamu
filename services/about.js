function redirectTo(page) {
    window.location.href = page;
}
function redirectTo(page) {
    window.location.href = page;
}
let currentIndex = 0;
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveLink() {
    // Remove 'active' class from all links
    navLinks.forEach(link => link.classList.remove("active"));

    // Add 'active' class to the selected link
    navLinks[currentIndex].classList.add("active");
}

// Handle keyboard navigation
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowDown") {
        currentIndex = (currentIndex + 1) % navLinks.length; // Move down
        updateActiveLink();
    } else if (event.key === "ArrowUp") {
        currentIndex = (currentIndex - 1 + navLinks.length) % navLinks.length; // Move up
        updateActiveLink();
    } else if (event.key === "Enter") {
        window.location.href = "accomod.html"; // Redirect to the selected link
    }
});
document.addEventListener("keydown", function(event) {
    if (event.key === "Backspace" && !event.target.matches("input, textarea")) {
        event.preventDefault(); // Prevent default backspace behavior (like deleting text)
        window.history.back();  // Go to the previous page
    }
});

// Set initial active link
updateActiveLink();