function validate() {
    const phoneInput = document.getElementById('phoneInput').value;
    const regex = /^\d{10}$/;

    if (regex.test(phoneInput)) {
        showValidationResult("Valid phone number!", true);
    } else {
        showValidationResult("Invalid phone number. Please enter a 10-digit number.", false);
    }
}

function showValidationResult(message, isValid) {
    const validationResult = document.getElementById('validationResult');
    validationResult.textContent = message;

    if (isValid) {
        validationResult.classList.add('valid');
    } else {
        validationResult.classList.remove('valid');
    }

    validationResult.style.opacity = 1;
    validationResult.style.transform = 'translateY(0)';
}

function resetValidation() {
    const validationResult = document.getElementById('validationResult');
    validationResult.style.opacity = 0;
    validationResult.style.transform = 'translateY(20px)';
    document.getElementById('phoneInput').value = '';
}

function resetButtonAnimation() {
    const resetButton = document.getElementById('resetButton');
    resetButton.style.animation = 'none';
    resetButton.offsetHeight; /* trigger reflow */
    resetButton.style.animation = null; 
}
