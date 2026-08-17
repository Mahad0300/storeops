/**
 * StoreOps CRM - System Settings Logic (js/settings.js)
 * Multi-Tab Switching, Profile Form Handler, Operations Defaults, Notification Preferences, Session Revocation
 */

document.addEventListener("DOMContentLoaded", () => {
  initSettingsTabs();
  initSettingsFormHandlers();
});

function initSettingsTabs() {
  const tabBtns = document.querySelectorAll(".settings-tab-btn");
  const tabPanels = document.querySelectorAll(".settings-tab-panel");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetTab = btn.getAttribute("data-tab");

      tabBtns.forEach((b) => b.classList.remove("active"));
      tabPanels.forEach((p) => p.classList.remove("active"));

      btn.classList.add("active");
      const targetPanel = document.getElementById(`panel-${targetTab}`);
      if (targetPanel) {
        targetPanel.classList.add("active");
      }
    });
  });
}

function initSettingsFormHandlers() {
  const profileForm = document.getElementById("profileSettingsForm");
  const opsForm = document.getElementById("operationsSettingsForm");
  const notifForm = document.getElementById("notificationSettingsForm");

  if (profileForm) {
    profileForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const newName = document.getElementById("setFullName").value.trim();
      if (newName) {
        showToast("Profile credentials & password updated successfully");
      }
    });
  }

  if (opsForm) {
    opsForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const prefix = document.getElementById("setWorkOrderPrefix").value.trim();
      showToast(`Operational settings saved (Prefix: ${prefix})`);
    });
  }

  if (notifForm) {
    notifForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast("Notification & alert preferences saved");
    });
  }
}

function terminateSession(cardId) {
  const card = document.getElementById(cardId);
  if (card) {
    card.style.transition = "all 0.3s ease";
    card.style.opacity = "0";
    card.style.transform = "translateX(20px)";
    setTimeout(() => {
      card.remove();
      showToast("Device session terminated successfully");
    }, 300);
  }
}

function terminateAllOtherSessions() {
  const mobileCard = document.getElementById("mobileSessionCard");
  if (mobileCard) {
    mobileCard.style.transition = "all 0.3s ease";
    mobileCard.style.opacity = "0";
    mobileCard.style.transform = "translateX(20px)";
    setTimeout(() => {
      mobileCard.remove();
    }, 300);
  }
  showToast("All other active device sessions signed out");
}
