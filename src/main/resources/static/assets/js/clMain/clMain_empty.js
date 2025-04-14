/**
 * TypeScript functionality for the Self-Introduction Generator App
 */
// DOM Elements
var aiGenerateButton = document.querySelector(".ai-generate-button");
var navItems = document.querySelectorAll(".nav-item");
// Event Listeners
document.addEventListener("DOMContentLoaded", function () {
    setupEventListeners();

    fetch("/footer.html")
        .then(res => res.text())
        .then(data => {
            // footer 삽입
            document.getElementById("footer-container").innerHTML = data;

            // 삽입 이후 DOM이 생기므로, 그 다음 nav 이벤트 등록
            const navItems = document.querySelectorAll(".nav-item");
            navItems.forEach(item => {
                item.addEventListener("click", () => {
                    navItems.forEach(i => i.classList.remove("nav-active")); // 전체 초기화
                    item.classList.add("nav-active"); // 현재 선택에만 클래스 추가

                    const text = item.querySelector(".nav-text")?.textContent;
                    console.log("클릭됨:", text);
                });
            });
        });
});
/**
 * Set up all event listeners for the application
 */
function setupEventListeners() {
    // AI Generate Button Click
    if (aiGenerateButton) {
        aiGenerateButton.addEventListener("click", handleAiGenerateClick);
    }
    // Navigation Item Clicks
    navItems.forEach(function (item) {
        item.addEventListener("click", function (e) {
            return handleNavItemClick(e, item);
        });
    });
}
/**
 * Handle click on the AI Generate button
 */
function handleAiGenerateClick() {
    console.log("AI Generate button clicked");
    // Here you would typically trigger the AI generation process
    // For example, show a loading state, make an API call, etc.
    alert("AI 자기소개서 생성 기능이 곧 제공될 예정입니다.");
}
/**
 * Handle click on navigation items
 * @param e - The click event
 * @param item - The clicked navigation item
 */
function handleNavItemClick(e, item) {
    e.preventDefault();
    // Remove active class from all nav items
    navItems.forEach(function (navItem) {
        navItem.classList.remove("active");
        var label = navItem.querySelector(".nav-label");
        if (label) {
            label.classList.remove("active");
        }
    });
    // Add active class to clicked item
    item.classList.add("active");
    var label = item.querySelector(".nav-label");
    if (label) {
        label.classList.add("active");
    }
    console.log(
        "Navigation to: " + item.querySelector(".nav-label")?.textContent,
    );


}

/**
 * Compile TypeScript to JavaScript:
 * Run the following command in terminal:
 * tsc script.ts --target es6
 */
