// Form Submission
document.getElementById("infoForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  alert("Thank you, " + name + "! Your information has been submitted.\nWe will contact you at " + email);

  // Clear form after submission
  this.reset();
});