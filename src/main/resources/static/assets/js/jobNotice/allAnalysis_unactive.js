// Compiled JavaScript from TypeScript for browsers that don't support TypeScript directly
document.addEventListener("DOMContentLoaded", () => {
    // Tab navigation functionality
    const tabItems = document.querySelectorAll(".tab-item");
    const tabIndicator = document.querySelector(".tab-indicator");

    tabItems.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            // Remove active class from all tabs
            tabItems.forEach((item) => item.classList.remove("active"));

            // Add active class to clicked tab
            tab.classList.add("active");

            // Move the indicator
            if (tabIndicator) {
                if (index === 0) {
                    tabIndicator.style.left = "95px";
                    tabIndicator.style.width = "151px";
                } else {
                    tabIndicator.style.left = "151px";
                    tabIndicator.style.width = "151px";
                }
            }
        });
    });

    // Expandable qualification items
    const chevronButtons = document.querySelectorAll(".chevron-button");

    chevronButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // This would typically toggle the visibility of additional content
            // For this implementation, we'll just rotate the chevron icon
            const icon = button.querySelector(".chevron-icon");

            if (icon.style.transform === "rotate(90deg)") {
                icon.style.transform = "rotate(0deg)";
            } else {
                icon.style.transform = "rotate(90deg)";
            }
        });
    });

    // Favorite button functionality
    const favoriteButton = document.querySelector(".favorite-button");

    favoriteButton?.addEventListener("click", () => {
        // Toggle favorite status
        const starPath = favoriteButton.querySelector("path");

        if (starPath) {
            if (starPath.getAttribute("fill") === "none") {
                starPath.setAttribute("fill", "#FFD700");
            } else {
                starPath.setAttribute("fill", "none");
            }
        }
    });

    // Apply button functionality
    const applyButton = document.querySelector(".apply-button");

    applyButton?.addEventListener("click", () => {
        // In a real application, this would navigate to an application form
        alert("지원 페이지로 이동합니다.");
    });
});
