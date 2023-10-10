document.getElementById("registerButton").addEventListener("click", function () {
  var fullName = document.getElementById("fullName").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message");

  if (fullName === "") {
    showMessage("Please enter your full name.");
  } else if (!/^\d{10,11}$/.test(phoneNumber)) {
    showMessage("Phone number must have 10 or 11 digits.");
  } else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(email)) {
    showMessage("Invalid email. Please check again.");
  } else {
    showMessage("Registration successful!");
  }
});

function showMessage(msg) {
  var message = document.getElementById("message");
  message.innerText = msg;
  message.style.color = msg === "Registration successful!" ? "green" : "red";
}
