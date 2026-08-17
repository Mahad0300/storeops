<?php
$pageTitle = "System Audit & Activity Logs - StoreOps CRM";
$activePage = "audit-logs";
$pageScript = "audit-logs";
require_once "includes/header.php";
?>

<div id="auditView" class="page-view-section active">
  <div class="hero-header-row">
    <div>
      <h1 class="hero-title">System Audit & Activity Logs</h1>
      <p class="hero-subtitle">
        Track real-time system events, user security actions, work order
        mutations, and data modifications.
      </p>
    </div>
  </div>

  <!-- Master Audit Table Panel Container -->
  <div class="jobs-table-card master-jobs-panel">
    <!-- Filter Controls Toolbar Header -->
    <div class="jobs-filter-toolbar">
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
          id="auditFilterSearch"
          placeholder="Filter by user, action, work order, details..."
          class="toolbar-search-input"
        />
      </div>

      <div class="toolbar-filters-group">
        <!-- Action Type Filter -->
        <select id="filterAuditActionSelect" class="toolbar-select">
          <option value="ALL">All Actions</option>
          <option value="Created Work Order">Created Work Order</option>
          <option value="Status Changed">Status Changed</option>
          <option value="Updated Vendor Trade">
            Updated Vendor Trade
          </option>
          <option value="Attached W9 Doc">Attached W9 Doc</option>
          <option value="Deleted Record">Deleted Record</option>
          <option value="User Modified">User Modified</option>
        </select>

        <!-- User Filter -->
        <select id="filterAuditUserSelect" class="toolbar-select">
          <option value="ALL">All Users</option>
          <option value="Michael Carter">Michael Carter</option>
          <option value="Alex Morgan">Alex Morgan</option>
          <option value="Sophia Martinez">Sophia Martinez</option>
          <option value="Marcus Vance">Marcus Vance</option>
          <option value="Sarah Jenkins">Sarah Jenkins</option>
        </select>

        <!-- Reset / Refresh Button -->
        <button
          class="icon-btn refresh-btn"
          id="btnResetAuditFilters"
          title="Reset Audit Filters"
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

    <!-- Glassmorphic Master Audit Table -->
    <div class="table-responsive">
      <table class="crm-master-table master-audit-table">
        <thead>
          <tr>
            <th>TIMESTAMP (UTC)</th>
            <th>USER NAME</th>
            <th>ACTION</th>
            <th>WORK ORDER</th>
            <th>DETAILS</th>
          </tr>
        </thead>
        <tbody id="masterAuditTableBody">
          <!-- Master Audit Rows Rendered Dynamically via JS -->
        </tbody>
      </table>
    </div>

    <!-- Table Pagination Footer (Max 10 per page) -->
    <div class="table-pagination-footer">
      <span class="pagination-info" id="auditPaginationInfo"
        >Showing 1 to 10 of 16 Log Entries</span
      >
      <div class="pagination-controls">
        <button class="pagination-btn" id="btnPrevAuditPage" disabled>
          ‹ Prev
        </button>
        <span class="pagination-page-num" id="auditCurrentPageNum"
          >1</span
        >
        <button class="pagination-btn" id="btnNextAuditPage" disabled>
          Next ›
        </button>
      </div>
    </div>
  </div>
</div>

<?php require_once "includes/footer.php"; ?>
