/**
 * StoreOps CRM - System Users & Staff Management (users.js)
 * User Profile Cards Grid, Role & Status Filtering, Account Activation & Suspension Toggles
 */

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("masterUsersGrid")) {
    renderMasterUsersCards();
    initUserFilters();
  }
});

function renderMasterUsersCards() {
  const container = document.getElementById("masterUsersGrid");
  if (!container) return;

  const searchInput = document.getElementById("usersFilterSearch");
  const roleSelect = document.getElementById("filterUserRoleSelect");
  const statusSelect = document.getElementById("filterUserStatusSelect");

  const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : "";
  const roleFilter = roleSelect ? roleSelect.value : "ALL";
  const statusFilter = statusSelect ? statusSelect.value : "ALL";

  const filteredUsers = masterUsersDataset.filter((u) => {
    const matchesSearch =
      !searchTerm ||
      u.fullName.toLowerCase().includes(searchTerm) ||
      u.loginName.toLowerCase().includes(searchTerm) ||
      u.systemRole.toLowerCase().includes(searchTerm);

    const matchesRole = roleFilter === "ALL" || u.systemRole === roleFilter;
    const matchesStatus =
      statusFilter === "ALL" || u.accountStatus === statusFilter;

    return matchesSearch && matchesRole && matchesStatus;
  });

  const countBadge = document.getElementById("usersCountBadge");
  if (countBadge) countBadge.textContent = filteredUsers.length;

  if (filteredUsers.length === 0) {
    container.innerHTML = `
      <div class="users-empty-card">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="users-empty-icon"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line></svg>
        <div class="users-empty-title">No User Accounts Found</div>
        <div class="users-empty-sub">No system accounts match your search or filter parameters.</div>
      </div>
    `;
    return;
  }

  container.innerHTML = filteredUsers
    .map((u) => {
      const isActive = u.accountStatus === "Active / Operational";
      const roleClass =
        u.systemRole === "Administrator"
          ? "administrator"
          : u.systemRole === "Team Lead"
            ? "team-lead"
            : "user";
      const statusClass = isActive ? "active" : "suspended";

      return `
      <div class="user-profile-card">
        <div class="user-card-header">
          <div class="user-avatar-wrapper">
            <span>${escapeHTML(u.avatar)}</span>
            <span class="user-status-dot ${statusClass}"></span>
          </div>
          <div class="user-details-main">
            <div class="user-full-name-title">${escapeHTML(u.fullName)}</div>
            <div class="user-login-sub">@${escapeHTML(u.loginName)}</div>
          </div>
        </div>

        <div class="user-badges-container">
          <span class="user-role-tag-pill ${roleClass}">${escapeHTML(u.systemRole)}</span>
          <span class="user-status-tag-pill ${statusClass}">${escapeHTML(u.accountStatus)}</span>
        </div>

        <div class="user-card-footer">
          <button type="button" class="user-card-btn toggle-btn ${isActive ? "suspend" : "activate"}" onclick="toggleUserStatus(${u.id})">
            ${isActive ? "Suspend" : "Activate"}
          </button>
          <div class="user-action-group">
            <button type="button" class="user-card-btn edit-btn" onclick="editUserAccount(${u.id})">Edit</button>
            <button type="button" class="user-card-btn delete-btn" onclick="deleteUserAccount(${u.id})">Delete</button>
          </div>
        </div>
      </div>
    `;
    })
    .join("");
}

function initUserFilters() {
  const searchInput = document.getElementById("usersFilterSearch");
  const roleSelect = document.getElementById("filterUserRoleSelect");
  const statusSelect = document.getElementById("filterUserStatusSelect");
  const resetBtn = document.getElementById("btnResetUsersFilters");

  if (searchInput)
    searchInput.addEventListener("input", renderMasterUsersCards);
  if (roleSelect) roleSelect.addEventListener("change", renderMasterUsersCards);
  if (statusSelect)
    statusSelect.addEventListener("change", renderMasterUsersCards);

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      if (roleSelect) roleSelect.value = "ALL";
      if (statusSelect) statusSelect.value = "ALL";
      renderMasterUsersCards();
      showToast("User filters reset");
    });
  }

  const globalSearch = document.getElementById("globalSearchInput");
  if (globalSearch && searchInput) {
    globalSearch.addEventListener("input", (e) => {
      searchInput.value = e.target.value;
      renderMasterUsersCards();
    });
  }
}

function toggleUserStatus(userId) {
  const user = masterUsersDataset.find((u) => u.id === userId);
  if (!user) return;
  if (user.accountStatus === "Active / Operational") {
    user.accountStatus = "Suspended / Blocked";
    showToast(`User account "@${user.loginName}" has been Suspended`);
  } else {
    user.accountStatus = "Active / Operational";
    showToast(`User account "@${user.loginName}" is now Active`);
  }
  renderMasterUsersCards();
}

function deleteUserAccount(userId) {
  const user = masterUsersDataset.find((u) => u.id === userId);
  if (!user) return;
  masterUsersDataset = masterUsersDataset.filter((u) => u.id !== userId);
  renderMasterUsersCards();
  showToast(`User account "@${user.loginName}" deleted successfully`);
}

function editUserAccount(userId) {
  const user = masterUsersDataset.find((u) => u.id === userId);
  if (!user) return;
  openCRMModal("edit-user", user);
}
