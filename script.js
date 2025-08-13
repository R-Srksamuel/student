function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let dept = document.getElementById("department").value;
  let year = document.getElementById("year").value;
  let project = document.getElementById("project").value.trim();
  let errorMsg = document.getElementById("errorMsg");

  if (!name || !email || !dept || !year || !project) {
    errorMsg.textContent = "⚠ Please fill all fields.";
    return;
  }

  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
  if (!emailPattern.test(email)) {
    errorMsg.textContent = "⚠ Please enter a valid email.";
    return;
  }

  errorMsg.textContent = "";
  alert("✅ Registration Successful!");
  document.getElementById("regForm").reset();
}

// Create Card functionality
document.getElementById("createCardBtn").addEventListener("click", function() {
  const cardContainer = document.getElementById("cardContainer");

  // Create new card div
  const card = document.createElement("div");
  card.className = "card";
  card.textContent = "This is a new card.";

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "deleteBtn";
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = function() {
    card.remove();
  };

  // Add button to card
  card.appendChild(deleteBtn);
  
  // Add card to container
  cardContainer.appendChild(card);
});
