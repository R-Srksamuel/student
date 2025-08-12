function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let dept = document.getElementById("department").value;
  let year = document.getElementById("year").value;
  let project = document.getElementById("project").value.trim();
  let errorMsg = document.getElementById("errorMsg");

  // Check if all fields are filled
  if (!name || !email || !dept || !year || !project) {
    errorMsg.textContent = "⚠ Please fill all fields.";
    return;
  }

  // Email format validation
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
  if (!emailPattern.test(email)) {
    errorMsg.textContent = "⚠ Please enter a valid email.";
    return;
  }

  // If all validations pass
  errorMsg.textContent = "";
  alert("✅ Registration Successful!");
  document.getElementById("regForm").reset();
}
function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let dept = document.getElementById("department").value;
  let year = document.getElementById("year").value;
  let project = document.getElementById("project").value.trim();
  let errorMsg = document.getElementById("errorMsg");

  // Check if all fields are filled
  if (!name || !email || !dept || !year || !project) {
    errorMsg.textContent = "⚠ Please fill all fields.";
    return;
  }

  // Email format validation
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
  if (!emailPattern.test(email)) {
    errorMsg.textContent = "⚠ Please enter a valid email.";
    return;
  }

  // If all validations pass
  errorMsg.textContent = "";
  alert("✅ Registration Successful!");
  document.getElementById("regForm").reset();
}
