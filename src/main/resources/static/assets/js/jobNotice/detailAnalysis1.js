/**
 * Job Posting Detail JavaScript
 * Compiled from TypeScript for browser compatibility
 */

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get tab buttons
    var tabButtons = document.querySelectorAll(".tab-button");
    var tabIndicator = document.querySelector(".tab-indicator");

    // Get action buttons
    var starButton = document.querySelector(".star-button");
    var applyButton = document.querySelector(".apply-button");
    var backButton = document.querySelector(".back-button");

    // Initialize favorite state
    var isFavorite = false;

    // Tab navigation functionality
    tabButtons.forEach(function (button, index) {
        button.addEventListener("click", function () {
            // Remove active class from all buttons
            tabButtons.forEach(function (btn) {
                return btn.classList.remove("active");
            });

            // Add active class to clicked button
            button.classList.add("active");

            // Move tab indicator
            if (tabIndicator) {
                var leftPosition = index === 0 ? "0" : "115px";
                tabIndicator.style.left = leftPosition;
            }
        });
    });

    // Star button functionality
    if (starButton) {
        starButton.addEventListener("click", function () {
            isFavorite = !isFavorite;

            // Toggle star fill color
            var starPath = starButton.querySelector("path:nth-child(2)");
            if (starPath) {
                if (isFavorite) {
                    starPath.setAttribute("fill", "#FFE376");
                } else {
                    starPath.setAttribute("fill", "none");
                }
            }
        });
    }

    // Apply button functionality
    if (applyButton) {
        applyButton.addEventListener("click", function () {
            // In a real application, this would submit an application
            alert("지원서가 제출되었습니다."); // Application has been submitted
        });
    }

    // Back button functionality
    if (backButton) {
        backButton.addEventListener("click", function () {
            // In a real application, this would navigate back
            window.history.back();
        });
    }
});
