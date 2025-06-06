class JobSearchApp {
    constructor() {
        // Initialize elements
        this.tabButtons = document.querySelectorAll(".tab-button");

        // Set up event listeners
        this.setupEventListeners();
    }

    // Set up event listeners for interactive elements
    setupEventListeners() {
        // Tab switching functionality
        this.tabButtons.forEach((button) => {
            button.addEventListener("click", (e) => this.handleTabClick(e));
        });

        // Search bar functionality
        const searchBar = document.querySelector(".search-bar");
        if (searchBar) {
            searchBar.addEventListener("click", () => {
                alert("검색 기능이 구현될 예정입니다.");
            });
        }

        // Job card click functionality
        const jobCards = document.querySelectorAll(".job-card");
        jobCards.forEach((card) => {
            card.addEventListener("click", () => {
                alert("공고 상세 페이지로 이동할 예정입니다.");
            });
        });
    }

    // Handle tab button clicks
    handleTabClick(event) {
        const clickedButton = event.currentTarget;

        // Remove active class from all tabs
        this.tabButtons.forEach((button) => {
            button.classList.remove("tab-active");
            button.classList.add("tab-inactive");
        });

        // Add active class to clicked tab
        clickedButton.classList.add("tab-active");
        clickedButton.classList.remove("tab-inactive");

        // In a real application, we would load different content based on the selected tab
        const tabText = clickedButton.querySelector(".tab-text")?.textContent;
        console.log(`Selected tab: ${tabText}`);
    }
}


document.addEventListener("DOMContentLoaded", () => {
    fetch("/assets/html/footer.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("footer-container").innerHTML = data;

            const navItems = document.querySelectorAll(".nav-item");
            navItems.forEach(item => {
                item.addEventListener("click", (e) => {
                    navItems.forEach(i => i.classList.remove("nav-active"));
                    item.classList.add("nav-active");

                    const text = item.querySelector(".nav-text")?.textContent;
                    console.log("클릭됨:", text);
                });
            });
        });
});