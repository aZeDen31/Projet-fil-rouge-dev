document.addEventListener("DOMContentLoaded", function() {
    const placeholder = document.getElementById("header-placeholder");
    if (!placeholder) return;

    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            placeholder.innerHTML = data;
            highlightActiveLink();
        })
        .catch(error => console.error("Error loading header:", error));

    function highlightActiveLink() {
        const currentPage = window.location.pathname.split("/").pop() || "index.html";
        const navLinks = document.querySelectorAll("header nav a, header .header-actions a");
        
        navLinks.forEach(link => {
            const linkPage = link.getAttribute("data-page");
            if (linkPage === currentPage) {
                link.classList.add("active");
            }
        });
    }
});
