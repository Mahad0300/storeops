<?php
$pageTitle = "All Work Orders & Jobs - StoreOps CRM";
$activePage = "jobs";
$pageScript = "jobs";
require_once "includes/header.php";
?>

<div id="jobsView" class="page-view-section active">
  <section class="hero-metrics-section">
    <div class="hero-header-row">
      <div>
        <h1 class="hero-title">All Work Orders & Jobs</h1>
        <p class="hero-subtitle">
          Comprehensive tracking of store locations, vendor charges,
          revenues, and net margins
        </p>
      </div>
      <button
        class="crm-btn-primary main-create-btn"
        onclick="openCRMModal('job')"
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
        NEW WORK ORDER
      </button>
    </div>

    <!-- 4 Financial & Job Metrics Cards -->
    <div class="storeops-kpi-row jobs-page-kpis">
      <div class="kpi-card">
        <div class="kpi-top-row">
          <div class="kpi-icon-box">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
              ></path>
            </svg>
          </div>
          <span class="kpi-trend-pill up">+14.2% ↗</span>
        </div>
        <div class="kpi-bottom-content">
          <span class="kpi-card-title">TOTAL ORDERS</span>
          <span id="jobsPageTotalCount" class="kpi-card-number"
            >153</span
          >
        </div>
        <svg
          class="kpi-watermark-bg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
        >
          <path
            d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
          ></path>
        </svg>
      </div>

      <div class="kpi-card">
        <div class="kpi-top-row">
          <div class="kpi-icon-box blue">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <line x1="12" y1="1" x2="12" y2="23"></line>
              <path
                d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
              ></path>
            </svg>
          </div>
          <span class="kpi-trend-pill blue">+22.5% ↗</span>
        </div>
        <div class="kpi-bottom-content">
          <span class="kpi-card-title">TOTAL REVENUE</span>
          <span id="jobsPageTotalRevenue" class="kpi-card-number"
            >$148,200</span
          >
        </div>
        <svg
          class="kpi-watermark-bg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
        >
          <line x1="12" y1="1" x2="12" y2="23"></line>
          <path
            d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
          ></path>
        </svg>
      </div>

      <div class="kpi-card">
        <div class="kpi-top-row">
          <div class="kpi-icon-box coral">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <rect
                x="1"
                y="4"
                width="22"
                height="16"
                rx="2"
                ry="2"
              ></rect>
              <line x1="1" y1="10" x2="23" y2="10"></line>
            </svg>
          </div>
          <span class="kpi-trend-pill down">-5.1% ↘</span>
        </div>
        <div class="kpi-bottom-content">
          <span class="kpi-card-title">VENDOR CHARGES</span>
          <span id="jobsPageTotalVendorCharges" class="kpi-card-number"
            >$52,400</span
          >
        </div>
        <svg
          class="kpi-watermark-bg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
        >
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
          <line x1="1" y1="10" x2="23" y2="10"></line>
        </svg>
      </div>

      <div class="kpi-card highlight-green">
        <div class="kpi-top-row">
          <div class="kpi-icon-box green">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <polyline
                points="23 6 13.5 15.5 8.5 10.5 1 18"
              ></polyline>
              <polyline points="17 6 23 6 23 12"></polyline>
            </svg>
          </div>
          <span class="kpi-trend-pill up">+38.2% ↗</span>
        </div>
        <div class="kpi-bottom-content">
          <span class="kpi-card-title">NET MARGIN PROFIT</span>
          <span id="jobsPageTotalNetProfit" class="kpi-card-number"
            >$95,800</span
          >
        </div>
        <svg
          class="kpi-watermark-bg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
        >
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
          <polyline points="17 6 23 6 23 12"></polyline>
        </svg>
      </div>
    </div>
  </section>

  <!-- Master Glassmorphic All Jobs Data Table Container -->
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
          id="jobsTableFilterSearch"
          placeholder="Filter by store, user, designation..."
          class="toolbar-search-input"
        />
      </div>

      <div class="toolbar-filters-group">
        <!-- Custom Checkbox Status Dropdown -->
        <div class="custom-dropdown-wrapper">
          <button
            type="button"
            id="btnStatusDropdown"
            class="toolbar-select-btn"
          >
            <span id="lblStatusFilter">All Statuses</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>

          <div id="statusDropdownMenu" class="custom-popover-menu">
            <label class="popover-checkbox-item"
              ><input
                type="checkbox"
                value="Scheduled"
                class="filter-status-cb"
              />
              <span>Scheduled</span></label
            >
            <label class="popover-checkbox-item"
              ><input
                type="checkbox"
                value="In Progress"
                class="filter-status-cb"
              />
              <span>Work In Progress</span></label
            >
            <label class="popover-checkbox-item"
              ><input
                type="checkbox"
                value="Pending"
                class="filter-status-cb"
              />
              <span>Pending</span></label
            >
            <label class="popover-checkbox-item"
              ><input
                type="checkbox"
                value="Done"
                class="filter-status-cb"
              />
              <span>Done</span></label
            >
          </div>
        </div>

        <!-- Priorities Filter -->
        <select id="filterUrgencySelect" class="toolbar-select">
          <option value="ALL">All Priorities</option>
          <option value="Within SLA">Within SLA</option>
          <option value="Urgent">Urgent</option>
        </select>

        <!-- Users Filter -->
        <select id="filterUserSelect" class="toolbar-select">
          <option value="ALL">All Users</option>
          <option value="Sophia Martinez">Sophia Martinez</option>
          <option value="Alex Morgan">Alex Morgan</option>
          <option value="Marcus Vance">Marcus Vance</option>
          <option value="Unassigned">Unassigned</option>
        </select>

        <!-- Payments Filter -->
        <select id="filterPaymentSelect" class="toolbar-select">
          <option value="ALL">All Payments</option>
          <option value="Unpaid">Unpaid</option>
          <option value="Partially Paid">Partially Paid</option>
          <option value="Fully Paid">Fully Paid</option>
        </select>

        <!-- Date Picker Popover Button -->
        <div class="custom-dropdown-wrapper">
          <button
            type="button"
            id="btnDatePickerToggle"
            class="toolbar-icon-select-btn"
            title="Filter by Date Range"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <rect
                x="3"
                y="4"
                width="18"
                height="18"
                rx="2"
                ry="2"
              ></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </button>

          <div
            id="datePickerPopoverMenu"
            class="custom-popover-menu calendar-popover"
          >
            <div class="calendar-sidebar-presets">
              <button
                type="button"
                class="calendar-preset-btn active"
                data-preset="all"
              >
                All Dates
              </button>
              <button
                type="button"
                class="calendar-preset-btn"
                data-preset="current-month"
              >
                Current Month
              </button>
              <button
                type="button"
                class="calendar-preset-btn"
                data-preset="today"
              >
                Today
              </button>
              <button
                type="button"
                class="calendar-preset-btn"
                data-preset="yesterday"
              >
                Yesterday
              </button>
              <button
                type="button"
                class="calendar-preset-btn"
                data-preset="week"
              >
                Last week
              </button>
              <button
                type="button"
                class="calendar-preset-btn"
                data-preset="month"
              >
                Last month
              </button>
              <button
                type="button"
                class="calendar-preset-btn"
                data-preset="quarter"
              >
                Last quarter
              </button>
              <button
                type="button"
                class="calendar-preset-btn text-muted"
                id="btnResetCalendar"
              >
                Reset
              </button>
            </div>
            <div class="calendar-grid-view">
              <div class="calendar-header-month">
                <span class="cal-nav-prev">‹</span>
                <span class="cal-month-title">August 2026</span>
                <span class="cal-nav-next">›</span>
              </div>
              <div class="calendar-days-header">
                <span>SUN</span><span>MON</span><span>TUE</span
                ><span>WED</span><span>THU</span><span>FRI</span
                ><span>SAT</span>
              </div>
              <div class="calendar-days-grid">
                <span class="muted">26</span
                ><span class="muted">27</span
                ><span class="muted">28</span
                ><span class="muted">29</span
                ><span class="muted">30</span
                ><span class="muted">31</span><span>1</span>
                <span>2</span><span>3</span><span>4</span><span>5</span
                ><span>6</span><span>7</span><span>8</span>
                <span>9</span><span>10</span><span>11</span
                ><span>12</span><span>13</span
                ><span class="active-day">14</span><span>15</span>
                <span>16</span><span>17</span><span>18</span
                ><span>19</span><span>20</span><span>21</span
                ><span>22</span> <span>23</span><span>24</span
                ><span>25</span><span>26</span><span>27</span
                ><span>28</span><span>29</span> <span>30</span
                ><span>31</span><span class="muted">1</span
                ><span class="muted">2</span><span class="muted">3</span
                ><span class="muted">4</span
                ><span class="muted">5</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Reset / Refresh Button -->
        <button
          class="icon-btn refresh-btn"
          id="btnResetAllFilters"
          title="Reset Filters & Refresh"
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

    <!-- Comprehensive Jobs Table -->
    <div class="table-responsive">
      <table class="crm-table master-jobs-table">
        <thead>
          <tr>
            <th>STORE / LOCATION</th>
            <th>DESIGNATION</th>
            <th>ASSIGNED USER</th>
            <th>ADDED DATE</th>
            <th>VENDOR CHARGES</th>
            <th>JOB REVENUE</th>
            <th>NET REVENUE</th>
            <th>URGENCY</th>
            <th>JOB STATUS</th>
            <th class="text-right">ACTIONS</th>
          </tr>
        </thead>
        <tbody id="masterJobsTableBody">
          <!-- Master Jobs Rows Rendered Dynamically via JS -->
        </tbody>
      </table>
    </div>

    <!-- Table Pagination Footer -->
    <div class="table-pagination-footer">
      <span class="pagination-info" id="jobsPaginationInfo"
        >Showing 1 to 10 of 10 Work Orders</span
      >
      <div class="pagination-controls">
        <button class="pagination-btn" id="btnPrevJobsPage" disabled>
          ‹ Prev
        </button>
        <span class="pagination-page-num" id="jobsCurrentPageNum"
          >1</span
        >
        <button class="pagination-btn" id="btnNextJobsPage" disabled>
          Next ›
        </button>
      </div>
    </div>
  </div>
</div>

<?php require_once "includes/footer.php"; ?>
