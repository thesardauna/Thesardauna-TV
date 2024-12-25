// Example script to handle some interactivity for the website

document.addEventListener("DOMContentLoaded", function() {
    // Add event listener for the "Watch Live" button
    const liveButton = document.querySelector(".cta-btn");
    liveButton.addEventListener("click", function() {
        alert("You are now watching live!");
    });

    // Dynamic program filter (future addition)
    const searchInput = document.getElementById("search-bar");
    searchInput.addEventListener("input", function(event) {
        const query = event.target.value.toLowerCase();
        const programCards = document.querySelectorAll(".program-card");
        programCards.forEach(card => {
            const title = card.querySelector("h3").innerText.toLowerCase();
            if (title.includes(query)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});
