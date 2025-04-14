/**
 * Class to handle resume functionality
 */
class ResumeManager {
    constructor(resumeData) {
        this.resumeData = resumeData;
        this.initEventListeners();
    }

    /**
     * Initialize event listeners
     */
    initEventListeners() {
        const downloadButton = document.querySelector('.download-button');

        if (downloadButton) {
            downloadButton.addEventListener('click', this.handleDownloadPdf.bind(this));
        }

        // Initialize navigation item click events
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', this.handleNavigation.bind(this));
        });
    }

    /**
     * Handle PDF download button click
     */
    handleDownloadPdf(event) {
        event.preventDefault();

        // If we have a PDF URL, download it
        if (this.resumeData.pdfUrl) {
            this.downloadPdf(this.resumeData.pdfUrl);
        } else {
            console.log('PDF URL not available');
            // In a real application, we might generate the PDF here
            alert('PDF 다운로드 준비 중입니다.');
        }
    }

    /**
     * Download PDF file
     */
    downloadPdf(url) {
        const link = document.createElement('a');
        link.href = url;
        link.download = `${this.resumeData.title}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    /**
     * Handle navigation item clicks
     */
    handleNavigation(event) {
        event.preventDefault();

        const target = event.currentTarget;

        // Remove active class from all nav items
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.classList.remove('active');
            const label = item.querySelector('.nav-label');
            if (label) {
                label.classList.remove('active-label');
            }
        });

        // Add active class to clicked item
        target.classList.add('active');
        const label = target.querySelector('.nav-label');
        if (label) {
            label.classList.add('active-label');
        }

        // In a real application, we would navigate to the appropriate page
        console.log(`Navigating to: ${target.querySelector('.nav-label')?.textContent}`);
    }
}

/**
 * Initialize the application when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', () => {
    // Sample resume data
    const resumeData = {
        title: '기본 이력서',
        creationDate: '2025.03.26 작성',
        // In a real application, this would be a real URL
        pdfUrl: '#'
    };

    // Initialize the resume manager
    new ResumeManager(resumeData);

    fetch("/assets/html/footer.html")
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
