/**
 * JavaScript for Job Posting Detail Analysis Page
 */

// DOM Elements
document.addEventListener("DOMContentLoaded", function () {
    // Tab navigation functionality
    var tabButtons = document.querySelectorAll(".tab-button");

    tabButtons.forEach(function (button) {
        button.addEventListener("click", function (e) {
            var target = e.target;
            var parent =
                target.closest(".tab-button-container") || target.parentElement;

            // Remove active class from all tabs
            document
                .querySelectorAll(".tab-button-container")
                .forEach(function (tab) {
                    tab.classList.remove("active");
                });

            // Add active class to clicked tab
            if (parent && parent.classList.contains("tab-button-container")) {
                parent.classList.add("active");
            } else if (target.nextElementSibling) {
                // If clicking directly on the button, find its container
                var container = document.createElement("div");
                container.classList.add("tab-button-container", "active");

                // Create indicator
                var indicator = document.createElement("div");
                indicator.classList.add("tab-indicator");

                // Restructure DOM
                target.parentNode.insertBefore(container, target);
                container.appendChild(target);
                container.appendChild(indicator);
            }
        });
    });

    // Apply button functionality
    var applyButton = document.querySelector(".apply-button");
    if (applyButton) {
        applyButton.addEventListener("click", function () {
            alert("지원 페이지로 이동합니다.");
            // In a real application, this would navigate to the application page
            // window.location.href = '/apply';
        });
    }
});
