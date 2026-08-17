<?php
$pageTitle = "System & Performance Analytics - StoreOps CRM";
$activePage = "analytics";
$pageScript = "analytics";
$extraHead = '<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>';
require_once "includes/header.php";
?>

<div id="analyticsView" class="page-view-section active">
  <!-- Hero Header Row with Range Controls & Export Actions -->
  <div class="hero-header-row">
    <div>
      <div class="hero-title-group">
        <h1 class="hero-title">System & Performance Analytics</h1>
        <span class="analytics-status-pill">
          <span class="status-pulse-dot"></span>
          <span>Live System Operational</span>
        </span>
      </div>
      <p class="hero-subtitle">
        Executive review of financial ledger performance, work orders
        status, trade categories, and staff metrics.
      </p>
    </div>

    <div class="hero-actions-group">
      <select id="analyticsDateRangeSelect" class="toolbar-select">
        <option value="7days">Last 7 Days</option>
        <option value="30days" selected>Last 30 Days</option>
        <option value="quarter">This Quarter</option>
        <option value="ytd">Year to Date (YTD)</option>
      </select>
      <button
        class="crm-btn-primary"
        onclick="exportAnalyticsReport('pdf')"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        Export Report
      </button>
    </div>
  </div>

  <!-- 5 Rich Financial & Operational KPI Cards Grid -->
  <div class="storeops-kpi-row">
    <!-- KPI 1: Total Revenue -->
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
            <line x1="12" y1="1" x2="12" y2="23"></line>
            <path
              d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
            ></path>
          </svg>
        </div>
        <span class="kpi-trend-pill up">+14.2% ↗</span>
      </div>
      <div class="kpi-bottom-content">
        <span class="kpi-card-title">TOTAL REVENUE</span>
        <span id="anKpiTotalRevenue" class="kpi-card-number"
          >$27,604.70</span
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

    <!-- KPI 2: Vendor Obligations Paid -->
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
            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
            <path d="M12 11h4"></path>
            <path d="M12 15h4"></path>
            <path d="M8 11h.01"></path>
            <path d="M8 15h.01"></path>
          </svg>
        </div>
        <span class="kpi-trend-pill blue">Cleared</span>
      </div>
      <div class="kpi-bottom-content">
        <span class="kpi-card-title">VENDOR PAID</span>
        <span id="anKpiVendorPaid" class="kpi-card-number"
          >$18,450.00</span
        >
      </div>
      <svg
        class="kpi-watermark-bg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
      >
        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
      </svg>
    </div>

    <!-- KPI 3: Vendor Obligations Remaining -->
    <div class="kpi-card">
      <div class="kpi-top-row">
        <div class="kpi-icon-box amber">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
        </div>
        <span class="kpi-trend-pill down">Pending</span>
      </div>
      <div class="kpi-bottom-content">
        <span class="kpi-card-title">VENDOR REMAINING</span>
        <span id="anKpiVendorRemaining" class="kpi-card-number"
          >$4,120.00</span
        >
      </div>
      <svg
        class="kpi-watermark-bg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
      >
        <circle cx="12" cy="12" r="10"></circle>
      </svg>
    </div>

    <!-- KPI 4: Net Profit Margin -->
    <div class="kpi-card">
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
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
            <polyline points="17 6 23 6 23 12"></polyline>
          </svg>
        </div>
        <span class="kpi-trend-pill up">+33.1% Net</span>
      </div>
      <div class="kpi-bottom-content">
        <span class="kpi-card-title">NET REVENUE MARGIN</span>
        <span id="anKpiNetRevenue" class="kpi-card-number"
          >+$9,154.70</span
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
      </svg>
    </div>

    <!-- KPI 5: SLA Completion Rate -->
    <div class="kpi-card">
      <div class="kpi-top-row">
        <div class="kpi-icon-box purple">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <span class="kpi-trend-pill up">94.8% SLA</span>
      </div>
      <div class="kpi-bottom-content">
        <span class="kpi-card-title">COMPLETION RATE</span>
        <span id="anKpiCompletionRate" class="kpi-card-number"
          >94.8%</span
        >
      </div>
      <svg
        class="kpi-watermark-bg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      </svg>
    </div>
  </div>

  <!-- Analytics Visualizations Grid -->
  <div class="analytics-charts-grid">
    <!-- Job Status Distribution Card -->
    <div class="dash-card analytics-chart-card">
      <div class="card-header">
        <div>
          <h3 class="card-title">Job Status Distribution</h3>
          <p class="stat-subtext">
            Concentric status completion & volume metrics
          </p>
        </div>
      </div>

      <div class="radial-gauge-wrapper">
        <div class="radial-gauge-visual-container">
          <svg class="radial-gauge-svg" viewBox="0 0 220 220">
            <!-- Background Ring Tracks -->
            <circle
              class="radial-track"
              cx="110"
              cy="110"
              r="86"
              stroke-width="8"
            ></circle>
            <circle
              class="radial-track"
              cx="110"
              cy="110"
              r="70"
              stroke-width="8"
            ></circle>
            <circle
              class="radial-track"
              cx="110"
              cy="110"
              r="54"
              stroke-width="8"
            ></circle>

            <!-- Concentric Progress Arc Rings -->
            <g class="radial-rings-group">
              <circle
                class="radial-ring ring-outer"
                cx="110"
                cy="110"
                r="86"
                stroke-width="8"
                stroke-dasharray="350 540"
                stroke-dashoffset="-12"
              ></circle>
              <circle
                class="radial-ring ring-mid"
                cx="110"
                cy="110"
                r="70"
                stroke-width="8"
                stroke-dasharray="190 440"
                stroke-dashoffset="-12"
              ></circle>
              <circle
                class="radial-ring ring-inner"
                cx="110"
                cy="110"
                r="54"
                stroke-width="8"
                stroke-dasharray="85 340"
                stroke-dashoffset="-12"
              ></circle>
            </g>

            <!-- Concentric Top Value Labels -->
            <text
              x="110"
              y="21"
              fill="#34D399"
              font-size="10.5"
              font-weight="800"
              text-anchor="middle"
              font-family="Plus Jakarta Sans, sans-serif"
            >
              104
            </text>
            <text
              x="110"
              y="37"
              fill="#1A73E8"
              font-size="10.5"
              font-weight="800"
              text-anchor="middle"
              font-family="Plus Jakarta Sans, sans-serif"
            >
              28
            </text>
            <text
              x="110"
              y="53"
              fill="#D97706"
              font-size="10.5"
              font-weight="800"
              text-anchor="middle"
              font-family="Plus Jakarta Sans, sans-serif"
            >
              12
            </text>

            <!-- Center KPI Text -->
            <text
              x="110"
              y="112"
              font-size="34"
              font-weight="800"
              fill="#1E2022"
              text-anchor="middle"
              font-family="Plus Jakarta Sans, sans-serif"
            >
              68%
            </text>
            <text
              x="110"
              y="132"
              font-size="11"
              font-weight="600"
              fill="#787A7D"
              text-anchor="middle"
              font-family="Plus Jakarta Sans, sans-serif"
            >
              153 Total Jobs
            </text>
          </svg>
        </div>

        <!-- Right Side Concentric Status Legend -->
        <div class="radial-legend-grid">
          <div class="radial-legend-card">
            <span class="radial-legend-dot ring-outer"></span>
            <div class="radial-legend-info">
              <span class="radial-legend-title">Done (Completed)</span>
              <span class="radial-legend-val">104 Jobs • 68% Rate</span>
            </div>
          </div>

          <div class="radial-legend-card">
            <span class="radial-legend-dot ring-mid"></span>
            <div class="radial-legend-info">
              <span class="radial-legend-title">In Progress</span>
              <span class="radial-legend-val"
                >28 Jobs • 18% Active</span
              >
            </div>
          </div>

          <div class="radial-legend-card">
            <span class="radial-legend-dot ring-inner"></span>
            <div class="radial-legend-info">
              <span class="radial-legend-title"
                >Pending & Scheduled</span
              >
              <span class="radial-legend-val">21 Jobs • 14% Queue</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Monthly Jobs & Revenue Trend Card -->
    <div class="dash-card analytics-chart-card">
      <div class="card-header">
        <div>
          <h3 class="card-title">Monthly Jobs & Cashflow Trend</h3>
          <p class="stat-subtext">
            Month-wise job creation history and billing volume
          </p>
        </div>

        <div class="trend-date-filters">
          <span class="trend-filter-label">FROM:</span>
          <select id="trendFromMonth" class="toolbar-select">
            <option value="2025-09">Sep 2025</option>
            <option value="2026-01">Jan 2026</option>
            <option value="2026-05">May 2026</option>
          </select>
          <span class="trend-filter-label">TO:</span>
          <select id="trendToMonth" class="toolbar-select">
            <option value="2026-08" selected>Aug 2026</option>
          </select>
          <button
            class="crm-btn-primary apply-month-btn"
            onclick="updateMonthlyBarChart()"
          >
            APPLY
          </button>
        </div>
      </div>

      <!-- Chart.js Real Canvas Bar Chart -->
      <div class="chart-canvas-wrapper">
        <canvas id="monthlyJobsBarChart"></canvas>
      </div>
    </div>
  </div>

  <!-- Trade Discipline Breakdown & Staff Performance Row -->
  <div class="analytics-secondary-grid">
    <!-- Trade Discipline & Volume Trends Smooth Area Chart -->
    <div class="dash-card">
      <div class="card-header">
        <div>
          <h3 class="card-title">Trade Discipline & Volume Trends</h3>
          <p class="stat-subtext">
            Comparative daily work order dispatch & revenue trend
            history
          </p>
        </div>
        <div class="trend-date-filters">
          <span class="legend-dot volume"></span>
          <span class="trend-filter-label margin-right"
            >Total Volume</span
          >
          <span class="legend-dot target"></span>
          <span class="trend-filter-label">Revenue Target</span>
        </div>
      </div>

      <div class="chart-canvas-wrapper trade-chart-canvas">
        <canvas id="tradeAreaLineChart"></canvas>
      </div>
    </div>

    <!-- Staff Performance Leaderboard Table -->
    <div class="dash-card">
      <div class="card-header">
        <div>
          <h3 class="card-title">Staff Performance Leaderboard</h3>
          <p class="stat-subtext">
            Activity and financial clearance stats by team member
          </p>
        </div>
      </div>

      <div class="table-responsive">
        <table class="crm-table leaderboard-table">
          <thead>
            <tr>
              <th>TEAM MEMBER</th>
              <th>ROLE</th>
              <th>ASSIGNED</th>
              <th>COMPLETED</th>
              <th>SLA RATIO</th>
              <th>VENDOR PAID</th>
            </tr>
          </thead>
          <tbody id="analyticsLeaderboardBody">
            <!-- Rendered via JS -->
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- Recent Financial Ledger Activity Feed -->
  <div class="dash-card ledger-activity-card">
    <div class="card-header">
      <div>
        <h3 class="card-title">Recent Financial Ledger Activity</h3>
        <p class="stat-subtext">
          Latest 5 billing transactions and vendor payouts executed
        </p>
      </div>
    </div>

    <div class="ledger-transactions-grid" id="analyticsLedgerFeed">
      <!-- Rendered via JS -->
    </div>
  </div>
</div>

<?php require_once "includes/footer.php"; ?>
