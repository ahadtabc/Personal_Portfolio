/**
 * EmailJS Form Submission
 * Connects the contact form to EmailJS
 */

function sendEmail(event) {
  if (event) event.preventDefault();

  const form = document.querySelector(".php-email-form");
  if (!form) return;

  const loading = form.querySelector(".loading");
  const errorMessage = form.querySelector(".error-message");
  const sentMessage = form.querySelector(".sent-message");

  // Show loading indicator and hide previous messages
  loading.classList.add("d-block");
  errorMessage.classList.remove("d-block");
  sentMessage.classList.remove("d-block");

  const templateParams = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    subject: document.querySelector("#subject").value,
    message: document.querySelector("#message").value,
  };

  emailjs
    .send("service_9085nuq", "template_1db1ddu", templateParams)
    .then(() => {
      loading.classList.remove("d-block");
      sentMessage.classList.add("d-block");
      alert("Email sent successfully!");
      form.reset();
    })
    .catch((error) => {
      loading.classList.remove("d-block");
      console.log("Error sending email:", error);
      errorMessage.textContent = "Failed to send email. Please try again.";
      errorMessage.classList.add("d-block");
      alert("Failed to send email. Please try again.");
    });
}

// Attach event listener when DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".php-email-form");
  if (form) {
    form.addEventListener("submit", sendEmail);
  }
});
