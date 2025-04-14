document.addEventListener("DOMContentLoaded", () => {
    const pdfButton = document.querySelector(".pdf-button");
    const aiGenerateButton = document.querySelector(".ai-generate-button");

    // PDF 저장
    if (pdfButton) {
        pdfButton.addEventListener("click", (e) => {
            e.preventDefault();
            savePDF();
        });
    }

    // footer.html 삽입 후 nav-item 이벤트 등록
    fetch("/assets/html/footer.html")
        .then((res) => res.text())
        .then((data) => {
            document.getElementById("footer-container").innerHTML = data;

            const navItems = document.querySelectorAll(".nav-item");
            navItems.forEach((item) => {
                item.addEventListener("click", () => {
                    navItems.forEach((i) => i.classList.remove("nav-active"));
                    item.classList.add("nav-active");

                    const text = item.querySelector(".nav-text")?.textContent;
                    console.log("클릭됨:", text);
                });
            });
        });
});

function savePDF() {
    console.log("Saving resume as PDF...");
    alert("PDF 저장 기능이 구현될 예정입니다.");
}

