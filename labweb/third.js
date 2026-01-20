/**
 * 1. COST CALCULATION LOGIC
 * Calculates the sum of all checked items and updates the UI
 */
function calculateTotal() {
    const checkboxes = document.querySelectorAll('.shoe-select');
    const totalElement = document.getElementById('total-price');
    const itemsList = document.getElementById('selected-items');
    
    let total = 0;
    let selected = [];

    checkboxes.forEach(box => {
        if (box.checked) {
            total += parseFloat(box.getAttribute('data-price'));
            selected.push(box.value);
        }
    });

    // Update Total Display
    totalElement.innerText = `$${total.toFixed(2)}`;

    // Update Selected Items List
    if (selected.length > 0) {
        itemsList.innerText = "Selected: " + selected.join(", ");
    } else {
        itemsList.innerText = "No items selected yet.";
    }
}

/**
 * FEEDBACK FORM VALIDATION
 * Validates name, email, mobile number, and message
 */
document.getElementById('feedbackForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const message = document.getElementById('message').value.trim();

    // Regex patterns
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[6-9]\d{9}$/; // Indian-style 10-digit mobile (customize if needed)

    if (name.length < 2) {
        showStatus("Please enter your full name.", "red");

    } else if (!mobileRegex.test(mobile)) {
        showStatus("Please enter a valid 10-digit mobile number.", "red");

    } else if (!emailRegex.test(email)) {
        showStatus("Please enter a valid email address.", "red");

    } else if (message.length < 10) {
        showStatus("Message must be at least 10 characters long.", "red");

    } else {
        showStatus("Thank you! Your feedback has been submitted successfully.", "green");
        this.reset();
    }
});

/**
 * Helper function to show form status messages
 */
function showStatus(text, color) {
    const statusMsg = document.getElementById('formStatus');
    statusMsg.innerText = text;
    statusMsg.style.color = color;
}
