/**
 * StoreOps CRM - Login Authentication Screen (login.js)
 * Password Visibility Toggle & Authentication Handler
 */

document.addEventListener("DOMContentLoaded", () => {
  initLoginPage();
});

function initLoginPage() {
  const loginForm = document.getElementById("storeopsLoginForm");
  const toggleBtn = document.getElementById("passwordToggleBtn");
  const passInput = document.getElementById("loginPassword");

  if (toggleBtn && passInput) {
    toggleBtn.addEventListener("click", () => {
      const isPassword = passInput.type === "password";
      passInput.type = isPassword ? "text" : "password";
      showToast(isPassword ? "Password text visible" : "Password hidden");
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast("Welcome back, Administrator! Authenticating credentials...");
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1200);
    });
  }
}
