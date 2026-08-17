<?php
$pageTitle = "User & Staff Management - StoreOps CRM";
$activePage = "manage-users";
$pageScript = "manage-users";
require_once "includes/header.php";
?>

<div id="usersView" class="page-view-section active">
  <div class="hero-header-row">
    <div>
      <h1 class="hero-title">User & Staff Management</h1>
      <p class="hero-subtitle">
        Manage platform accounts, authentication credentials, system
        roles, and operational account statuses.
      </p>
    </div>
    <button
      class="crm-btn-primary main-create-btn"
      onclick="openCRMModal('user')"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
      >
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
      ADD NEW USER
    </button>
  </div>

  <!-- Master Users Filter Toolbar & Cards Panel Container -->
  <div class="users-panel-clean">
    <!-- Filter Controls Toolbar Header -->
    <div class="jobs-filter-toolbar users-filter-toolbar">
      <div class="toolbar-left-search">
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input
          type="text"
          id="usersFilterSearch"
          placeholder="Filter by login name, full name, role..."
          class="toolbar-search-input"
        />
      </div>

      <div class="toolbar-filters-group">
        <!-- System Role Filter -->
        <select id="filterUserRoleSelect" class="toolbar-select">
          <option value="ALL">All System Roles</option>
          <option value="User">User</option>
          <option value="Team Lead">Team Lead</option>
          <option value="Administrator">Administrator</option>
        </select>

        <!-- Account Status Filter -->
        <select id="filterUserStatusSelect" class="toolbar-select">
          <option value="ALL">All Account Statuses</option>
          <option value="Active / Operational">
            Active / Operational
          </option>
          <option value="Suspended / Blocked">
            Suspended / Blocked
          </option>
        </select>

        <!-- Reset / Refresh Button -->
        <button
          class="icon-btn refresh-btn"
          id="btnResetUsersFilters"
          title="Reset User Filters"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <polyline points="23 4 23 10 17 10"></polyline>
            <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- User Cards Grid (NON-TABLE LAYOUT) -->
    <div id="masterUsersGrid" class="users-cards-grid">
      <!-- User Cards Rendered Dynamically via JS -->
    </div>
  </div>
</div>

<?php require_once "includes/footer.php"; ?>
