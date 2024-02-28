document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
// Form Submission
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // You can add your email sending logic here
  // For demonstration purposes, let's just log the form data
  const formData = new FormData(this);
  formData.forEach((value, key) => {
    console.log(key, ":", value);
  });

  // Clear the form fields after submission
  this.reset();
});
