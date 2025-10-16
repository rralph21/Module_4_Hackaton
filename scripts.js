const $ = (s) => document.querySelector(s);

const rules = {
  username: (v) => {
    if (!v) return "Username is required.";
    if (!/^[A-Za-z0-9_]{3,20}$/.test(v)) return "3–20 letters, numbers, or _.";
    return "";
  },
  password: (v) => {
    if (!v) return "Password is required.";
    if (v.length < 8) return "At least 8 characters.";
    if (!/[A-Za-z]/.test(v) || !/\d/.test(v)) return "Include 1 letter and 1 number.";
    return "";
  },
  email: (v) => {
    if (!v) return "Email is required."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return "Enter a valid email.";
    return "";
  },
  phone: (v) => {
    if (!v) return ""; 
    if (!/^(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/.test(v)) return "Use 204-555-1234 format.";
    return "";
  },
};

function setError(input, msg) {
  const err = document.getElementById(input.id + "Error");
  input.setAttribute("aria-invalid", msg ? "true" : "false");
  if (err) err.textContent = msg || "";
}

function validateField(input) {
  const key = input.id;
  const val = input.value.trim();
  const rule = rules[key];
  if (!rule) return true;
  const msg = rule(val);
  setError(input, msg);
  return !msg;
}

["username", "password", "email", "phone"].forEach((id) => {
  const el = document.getElementById(id);
  el.addEventListener("input", () => validateField(el));
  el.addEventListener("blur", () => validateField(el));
});

$("#userForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = ["username", "password", "email", "phone"].map((id) => document.getElementById(id));
  let firstInvalid = null;

  inputs.forEach((el) => {
    if (!validateField(el) && !firstInvalid) firstInvalid = el;
  });

  if (firstInvalid) {
    firstInvalid.focus();
    $("#formAlert").textContent = "Please fix the highlighted fields.";
    return;
  }

  $("#formAlert").textContent = "";
  alert("Form submitted successfully!");
});