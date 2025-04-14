// Job Posting Analysis Component Script

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    initTabs();
    initToggleItems();
    initApplyButton();
});

// Initialize tab navigation functionality
function initTabs() {
    const tabButtons = document.querySelectorAll(".tab-button");

    tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
            console.log(`Tab clicked: ${button.textContent}`);

            // 여기에 실제 탭 변경 로직을 넣을 수 있습니다.
        });
    });
}

// Initialize toggle functionality for analysis items
function initToggleItems() {
    const toggleIcons = document.querySelectorAll(".toggle-icon");

    toggleIcons.forEach((icon) => {
        icon.addEventListener("click", (event) => {
            const target = event.currentTarget;
            const analysisItem = target.closest(".analysis-item");

            if (analysisItem) {
                const text = analysisItem.querySelector(".analysis-text");
                console.log(`Toggle clicked for: ${text ? text.textContent : "No text"}`);

                // 여기에 실제 토글 열기/닫기 로직을 넣을 수 있습니다.
            }
        });
    });
}

// Initialize apply button functionality
function initApplyButton() {
    const applyButton = document.querySelector(".apply-button");

    if (applyButton) {
        applyButton.addEventListener("click", () => {
            console.log("Apply button clicked");

            // 실제 지원 프로세스를 여기에 작성할 수 있습니다.
        });
    }
}
