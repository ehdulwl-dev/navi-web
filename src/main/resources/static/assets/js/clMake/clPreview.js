/**
 * JavaScript for Resume Preview Component
 */
// Initialize the preview component
var ResumePreview = /** @class */ (function () {
    function ResumePreview() {
        // Get DOM elements
        this.elements = {
            previousButton: document.querySelector(".previous-button"),
            saveButton: document.querySelector(".save-button"),
            previewImage: document.querySelector(".preview-image"),
            actionIcons: document.querySelectorAll(".action-icon"),
        };
        this.initEventListeners();
    }
    ResumePreview.prototype.initEventListeners = function () {
        var _this = this;
        // Add event listener for previous button
        if (this.elements.previousButton) {
            this.elements.previousButton.addEventListener(
                "click",
                this.handlePreviousClick.bind(this),
            );
        }
        // Add event listener for save button
        if (this.elements.saveButton) {
            this.elements.saveButton.addEventListener(
                "click",
                this.handleSaveClick.bind(this),
            );
        }
        // Add event listeners for action icons
        this.elements.actionIcons.forEach(function (icon, index) {
            icon.addEventListener("click", function () {
                return _this.handleActionIconClick(index);
            });
        });
    };
    ResumePreview.prototype.handlePreviousClick = function () {
        console.log("Previous button clicked");
        // Navigate to previous page or state
        // This would be implemented based on the application's navigation requirements
    };
    ResumePreview.prototype.handleSaveClick = function () {
        console.log("Save button clicked");
        // Save the current resume template
        // This would be implemented based on the application's data saving requirements
    };
    ResumePreview.prototype.handleActionIconClick = function (index) {
        console.log("Action icon ".concat(index + 1, " clicked"));
        // Handle action icon clicks
        // This would be implemented based on what each icon is supposed to do
    };
    return ResumePreview;
})();
// Initialize the component when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    new ResumePreview();
});
