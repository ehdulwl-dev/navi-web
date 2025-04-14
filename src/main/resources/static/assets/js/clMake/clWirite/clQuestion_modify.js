/**
 * Question Modification Interface JavaScript
 * Compiled from TypeScript
 */

// Main class to handle the question modification functionality
class QuestionModifier {
    constructor() {
        this.questions = [];
        this.nextId = 1;
        // Initialize DOM elements
        this.questionSection = document.querySelector(".question-section");
        this.questionInput = document.querySelector(".question-input");
        this.addButton = document.querySelector(".add-button");
        this.completeButton = document.querySelector(".complete-button");
        // Initialize existing questions from DOM
        this.initializeExistingQuestions();
        // Set up event listeners
        this.setupEventListeners();
    }
    initializeExistingQuestions() {
        // Get all question items from the DOM
        const questionItems = document.querySelectorAll(".question-item");
        questionItems.forEach((item, index) => {
            const questionContent = item.querySelector(".question-content");
            if (questionContent) {
                this.questions.push({
                    id: this.nextId++,
                    text: questionContent.textContent || "",
                });
                // Add data-id attribute to the question item for reference
                item.setAttribute("data-id", (index + 1).toString());
            }
        });
    }
    setupEventListeners() {
        // Add question button
        this.addButton.addEventListener("click", () => this.addQuestion());
        // Complete modification button
        this.completeButton.addEventListener("click", () =>
            this.completeModification(),
        );
        // Delete question buttons
        document.querySelectorAll(".delete-icon").forEach((icon) => {
            icon.addEventListener("click", (e) => this.deleteQuestion(e));
        });
        // Enter key in input field
        this.questionInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                this.addQuestion();
            }
        });
    }
    addQuestion() {
        const questionText = this.questionInput.value.trim();
        if (questionText) {
            // Create new question object
            const newQuestion = {
                id: this.nextId++,
                text: questionText,
            };
            this.questions.push(newQuestion);
            // Create and add new question element to DOM
            const questionItem = document.createElement("div");
            questionItem.className = "question-item";
            questionItem.setAttribute("data-id", newQuestion.id.toString());
            questionItem.innerHTML = `
        <div class="question-text">
          <p class="question-content">${newQuestion.text}</p>
        </div>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1208b0ffc155bc90ee547656d82cc812c68c8860?placeholderIfAbsent=true&apiKey=005c88254743412a8fbdeef29d674822" alt="Delete" class="delete-icon">
      `;
            // Insert before the input field
            this.questionSection.insertBefore(questionItem, this.questionInput);
            // Add event listener to the new delete icon
            const deleteIcon = questionItem.querySelector(".delete-icon");
            if (deleteIcon) {
                deleteIcon.addEventListener("click", (e) => this.deleteQuestion(e));
            }
            // Clear input field
            this.questionInput.value = "";
        }
    }
    deleteQuestion(event) {
        const target = event.currentTarget;
        const questionItem = target.closest(".question-item");
        if (questionItem) {
            const questionId = parseInt(questionItem.getAttribute("data-id") || "0");
            // Remove from questions array
            this.questions = this.questions.filter((q) => q.id !== questionId);
            // Remove from DOM
            questionItem.remove();
        }
    }
    completeModification() {
        // Here you would typically send the updated questions to a server
        // For now, we'll just log them to the console
        console.log("Questions after modification:", this.questions);
        alert("질문 수정이 완료되었습니다.");
    }
}
// Initialize the application when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    new QuestionModifier();
});
