/* ----------------------------
   Scroll-to-top button behavior
   ---------------------------- */
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  if (!scrollTopBtn) return;
  if (document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});
if (scrollTopBtn) {
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ----------------------------
   Contact form (client-side only)
   ---------------------------- */
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Basic validation (HTML5 handles required attribute too)
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const alertBox = document.getElementById("formAlert");

    if (!name || !email || !message) {
      alertBox.style.display = "block";
      alertBox.className = "alert alert-danger";
      alertBox.innerText = "Please fill in all required fields.";
      return;
    }

    // Simulate successful send (no backend)
    alertBox.style.display = "block";
    alertBox.className = "alert alert-success";
    alertBox.innerText = "Thank you — your message has been received. We will contact you shortly.";

    // Clear form
    contactForm.reset();

    // If you'd like to actually send data to your email:
    // * Use Formspree, Netlify Forms, or a small backend endpoint (I can help integrate).
  });
}