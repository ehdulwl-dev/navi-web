// DOM Elements
document.addEventListener("DOMContentLoaded", () => {
    // Keyword selection functionality
    const keywordButtons = document.querySelectorAll(".keyword-button");
    const refreshButton = document.querySelector(".refresh-button");
    const refreshCountElement = document.querySelector(".refresh-count");
    const textInputs = document.querySelectorAll(".text-input");
    const countElements = document.querySelectorAll(".current-count");
    const voiceButtons = document.querySelectorAll(".voice-button");
    const editButton = document.querySelector(".edit-button");
    const generateButton = document.querySelector(".generate-button");

    // State variables
    let refreshCount = 3;
    let selectedKeywords = [];

    // Initialize refresh count
    refreshCountElement.textContent = `${refreshCount}회`;

    // Keyword selection
    keywordButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const isSelected = button.dataset.selected === "true";

            if (isSelected) {
                // Deselect keyword
                button.dataset.selected = "false";
                selectedKeywords = selectedKeywords.filter((k) => k !== button);
            } else {
                // Select keyword if less than 3 are selected
                if (selectedKeywords.length < 3) {
                    button.dataset.selected = "true";
                    selectedKeywords.push(button);
                } else {
                    // Alert user if they try to select more than 3 keywords
                    alert("최대 3개까지 선택할 수 있습니다.");
                }
            }
        });
    });

    // Refresh button functionality
    refreshButton.addEventListener("click", () => {
        if (refreshCount > 0) {
            refreshCount--;
            refreshCountElement.textContent = `${refreshCount}회`;

            // Reset keyword selections
            keywordButtons.forEach((button) => {
                button.dataset.selected = "false";
            });
            selectedKeywords = [];

            // Here you would typically fetch new keywords from an API
            // For this implementation, we'll just simulate by doing nothing
        } else {
            alert("더 이상 새로고침할 수 없습니다.");
        }
    });

    // Character count for text inputs
    textInputs.forEach((input, index) => {
        const countElement = countElements[index];

        input.addEventListener("input", () => {
            const length = input.value.length;
            countElement.textContent = length.toString();

            // Optional: Add visual feedback when approaching max length
            if (length >= 25) {
                countElement.style.color = "#db3a3a";
            } else {
                countElement.style.color = "#4b9ff8";
            }
        });
    });

    // Voice input buttons
    voiceButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // In a real implementation, this would trigger voice recognition
            // For this demo, we'll just toggle the active class
            button.classList.toggle("active");

            // Find the associated input field
            const container = button.closest(".question-container");
            if (container) {
                const input = container.querySelector(".text-input");
                if (input) {
                    // Focus the input when voice button is clicked
                    input.focus();
                }
            }
        });
    });

    // Form submission
    generateButton.addEventListener("click", () => {
        // Validate form
        const allInputsFilled = Array.from(textInputs).every(
            (input) => input.value.trim() !== "",
        );
        const hasSelectedKeywords = selectedKeywords.length > 0;

        if (!allInputsFilled) {
            alert("모든 질문에 답변해주세요.");
            return;
        }

        if (!hasSelectedKeywords) {
            alert("최소 1개 이상의 키워드를 선택해주세요.");
            return;
        }

        // In a real implementation, this would submit the form data
        alert("자기소개서가 생성되었습니다!");
    });

    // Edit button
    editButton.addEventListener("click", () => {
        // In a real implementation, this might navigate to a different page
        // or open a modal for editing questions
        alert("질문 수정 기능은 아직 구현되지 않았습니다.");
    });
});
