const form = document.getElementById("userForm");
const username = form.elements["username"].value;

document.getElementById("userForm").addEventListener("submit", (event) => {
	event.preventDefault();
	// Form processing logic
});

const showError = (fieldName, message) => {
	const errorFieldId = `${fieldName}Error`;
	const errorField = document.getElementById(errorFieldId);

	if (!errorField) {
		console.error(`Error field with ID '${errorFieldId}' not found.`);
		return;
	}

	errorField.textContent = message;
	errorField.classList.add("error-visible");
};

const clearErrors = () => {
	const errorMessages = document.querySelectorAll(".error-message");
	errorMessages.forEach((errorField) => {
		errorField.textContent = "";
		errorField.classList.remove("error-visible");
	});
};

document
	.getElementById("userForm")
	.addEventListener("submit", function (event) {
		event.preventDefault(); // Prevent the form from submitting

		// Clear any existing error messages
		clearErrors();

		// Validate the input
		const userName = document.getElementById("userName").value.trim();
		if (userName === "") {
			showError("userName", "Name cannot be empty");
		} else {
			// If validation passes, you could submit the form or do something else
			console.log("Form submitted successfully!");
		}
	});

function validateNumericCode(code) {
	const pattern = /^\d{5}$/;
	return pattern.test(code);
}

function validateAlphanumericString(str) {
	const pattern = /^[A-Za-z0-9]+$/;
	return pattern.test(str);
}

function validateDateFormat(date) {
	const pattern = /^\d{4}-\d{2}-\d{2}$/;
	return pattern.test(date);
}