/**
 * Class to handle the CV Main Empty component functionality
 */
class CvMainEmpty {
    constructor(config) {
        this.config = config;
        this.createResumeButton = document.querySelector('.resume-create-button');
        this.menuItems = document.querySelectorAll('.menu-item');
        this.init();
    }

    /**
     * Initialize event listeners
     */
    init() {
        // 이력서 생성 버튼
        if (this.createResumeButton) {
            this.createResumeButton.addEventListener('click', () => {
                this.config.onCreateResumeClick();
            });
        }

        // 하단 메뉴 클릭 이벤트
        this.menuItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const menuItem = e.currentTarget.classList[1].replace('menu-', '');
                this.config.onMenuItemClick(menuItem);
            });
        });
    }

    /**
     * Update job categories text like: "#의료 #간호 #요양"
     */
    updateJobCategories(categories) {
        const jobCategoriesElement = document.querySelector('.job-categories');
        if (jobCategoriesElement) {
            jobCategoriesElement.textContent = categories.map(cat => `#${cat}`).join(' ');
        }
    }

    /**
     * Set active state for bottom menu
     */
    setActiveMenuItem(menuItem) {
        this.menuItems.forEach(item => {
            item.classList.remove('active');
            if (item.classList.contains(`menu-${menuItem}`)) {
                item.classList.add('active');
            }
        });
    }
}

// Footer 삽입 및 네비게이션 이벤트 등록
document.addEventListener("DOMContentLoaded", () => {
    // footer.html을 로드하여 삽입
    fetch("/footer.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("footer-container").innerHTML = data;

            // nav-item 이벤트 연결
            const navItems = document.querySelectorAll(".nav-item");
            navItems.forEach(item => {
                item.addEventListener("click", () => {
                    navItems.forEach(i => i.classList.remove("nav-active"));
                    item.classList.add("nav-active");

                    const text = item.querySelector(".nav-text")?.textContent;
                    console.log("클릭됨:", text);
                });
            });
        });
});
