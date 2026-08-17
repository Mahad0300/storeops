<?php
$pageTitle = "Operations Dashboard - StoreOps CRM";
$activePage = "dashboard";
$pageScript = "dashboard";
require_once "includes/header.php";
?>

<!-- Welcome Greeting & Title Section -->
<section class="hero-metrics-section">
  <div class="hero-header-row">
    <div>
      <h1 class="hero-title">Operations Dashboard</h1>
      <p class="hero-subtitle">
        Key metrics and pending assignments at a glance
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
      CREATE WORK ORDER
    </button>
  </div>

  <!-- 5 Rich Summary KPI Cards -->
  <div class="storeops-kpi-row">
    <!-- Card 1: Total Jobs -->
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
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
        </div>
        <span class="kpi-trend-pill up">+12.4% ↗</span>
      </div>
      <div class="kpi-bottom-content">
        <span class="kpi-card-title">TOTAL JOBS</span>
        <span id="kpiTotalJobs" class="kpi-card-number">153</span>
      </div>
      <svg
        class="kpi-watermark-bg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    </div>

    <!-- Card 2: New -->
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
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="16"></line>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
        </div>
        <span class="kpi-trend-pill blue">+24.0% ↗</span>
      </div>
      <div class="kpi-bottom-content">
        <span class="kpi-card-title">NEW ORDERS</span>
        <span id="kpiNewJobs" class="kpi-card-number">4</span>
      </div>
      <svg
        class="kpi-watermark-bg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="16"></line>
        <line x1="8" y1="12" x2="16" y2="12"></line>
      </svg>
    </div>

    <!-- Card 3: Pending -->
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
        <span class="kpi-trend-pill down">-8.2% ↘</span>
      </div>
      <div class="kpi-bottom-content">
        <span class="kpi-card-title">PENDING SLA</span>
        <span id="kpiPendingJobs" class="kpi-card-number">1</span>
      </div>
      <svg
        class="kpi-watermark-bg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    </div>

    <!-- Card 4: In Progress -->
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
            <polygon
              points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
            ></polygon>
          </svg>
        </div>
        <span class="kpi-trend-pill up">+15.5% ↗</span>
      </div>
      <div class="kpi-bottom-content">
        <span class="kpi-card-title">IN PROGRESS</span>
        <span id="kpiProgressJobs" class="kpi-card-number">10</span>
      </div>
      <svg
        class="kpi-watermark-bg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
      >
        <polygon
          points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
        ></polygon>
      </svg>
    </div>

    <!-- Card 5: Done -->
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
            <path
              d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
            ></path>
            <polyline points="9 12 11 14 15 10"></polyline>
          </svg>
        </div>
        <span class="kpi-trend-pill up">+35.8% ↗</span>
      </div>
      <div class="kpi-bottom-content">
        <span class="kpi-card-title">COMPLETED</span>
        <span id="kpiDoneJobs" class="kpi-card-number">133</span>
      </div>
      <svg
        class="kpi-watermark-bg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    </div>
  </div>
</section>

<!-- Main 3-Column Dashboard Layout -->
<div class="dashboard-grid">
  <!-- COLUMN 1: Profile & Accordion Menu -->
  <section class="left-col">
    <!-- Team Member Hero Portrait Card -->
    <div class="profile-card">
      <img
        src="assets/images/avatar.png"
        alt="Sophia Martinez"
        class="profile-img"
      />
      <div class="profile-overlay">
        <div class="profile-info">
          <h3 class="profile-name">Sophia Martinez</h3>
          <p class="profile-role">Lead Field Engineer</p>
        </div>
        <div class="profile-badge">$1,200</div>
      </div>
    </div>

    <!-- Collapsible Accordion List -->
    <div class="accordion-card">
      <div class="accordion-item">
        <div class="accordion-header">
          <span>Vendor Contracts</span>
          <i>▼</i>
        </div>
        <div class="accordion-content">
          <p class="stat-subtext">
            Active Vendors: 18 Certified Trades.
          </p>
        </div>
      </div>

      <div class="accordion-item expanded">
        <div class="accordion-header">
          <span>Assigned Equipment</span>
          <i>▲</i>
        </div>
        <div class="accordion-content">
          <div class="device-item">
            <img
              src="assets/images/macbook_air.png"
              alt="MacBook Air"
              class="device-img-thumb"
            />
            <div class="device-details">
              <div class="device-name">MacBook Air</div>
              <div class="device-spec">Version M1 - Field Ops</div>
            </div>
            <button class="more-btn">⋮</button>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <div class="accordion-header">
          <span>Payment Summary</span>
          <i>▼</i>
        </div>
        <div class="accordion-content">
          <p class="stat-subtext">
            Completed Work Invoices: $42,500.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- COLUMN 2: Weekly Progress & Dual Circular Dotted Clocks -->
  <section class="middle-col">
    <!-- Top Split Cards -->
    <div class="middle-top-row">
      <!-- Progress Chart -->
      <div class="dash-card">
        <div class="card-header">
          <h2 class="card-title">Weekly Progress</h2>
          <button class="arrow-circle-btn">↗</button>
        </div>
        <div>
          <span class="big-stat-val">6.1 h</span>
          <span class="stat-subtext">Work Time this week</span>
        </div>
        <div class="chart-container">
          <div class="floating-tooltip-pill">5h 23m</div>
          <div class="bars-wrapper">
            <div class="bar-col">
              <div class="bar-track">
                <div class="bar-fill dashed bar-fill-35"></div>
              </div>
              <div class="bar-dot"></div>
              <span class="bar-day-label">S</span>
            </div>
            <div class="bar-col">
              <div class="bar-track">
                <div class="bar-fill bar-fill-75"></div>
              </div>
              <div class="bar-dot"></div>
              <span class="bar-day-label">M</span>
            </div>
            <div class="bar-col">
              <div class="bar-track">
                <div class="bar-fill bar-fill-50"></div>
              </div>
              <div class="bar-dot"></div>
              <span class="bar-day-label">T</span>
            </div>
            <div class="bar-col">
              <div class="bar-track">
                <div class="bar-fill bar-fill-60"></div>
              </div>
              <div class="bar-dot"></div>
              <span class="bar-day-label">W</span>
            </div>
            <div class="bar-col">
              <div class="bar-track">
                <div class="bar-fill bar-fill-85"></div>
              </div>
              <div class="bar-dot"></div>
              <span class="bar-day-label">T</span>
            </div>
            <div class="bar-col">
              <div class="bar-track">
                <div class="bar-fill highlight bar-fill-95"></div>
              </div>
              <div class="bar-dot"></div>
              <span class="bar-day-label">F</span>
            </div>
            <div class="bar-col">
              <div class="bar-track">
                <div class="bar-fill dashed bar-fill-25"></div>
              </div>
              <div class="bar-dot"></div>
              <span class="bar-day-label">S</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Time tracker Card with 2 DUAL CIRCULAR DOTTED DIAL CLOCKS -->
      <div class="dash-card time-tracker-card">
        <div class="card-header">
          <h2 class="card-title">Time tracker</h2>
          <button class="arrow-circle-btn">↗</button>
        </div>

        <div class="circular-clocks-row">
          <div class="clock-dial-item">
            <div class="timer-display-box">
              <svg class="radial-timer-svg" viewBox="0 0 140 140">
                <circle
                  class="timer-circle-bg"
                  cx="70"
                  cy="70"
                  r="55"
                ></circle>
                <circle
                  class="timer-circle-progress"
                  cx="70"
                  cy="70"
                  r="55"
                ></circle>
              </svg>
              <div class="timer-center-info">
                <div id="usTimeDigits" class="timer-digits">
                  07:25 PM
                </div>
                <div class="timer-sublabel">US Eastern</div>
              </div>
            </div>
          </div>

          <div class="clock-dial-item">
            <div class="timer-display-box">
              <svg class="radial-timer-svg" viewBox="0 0 140 140">
                <circle
                  class="timer-circle-bg"
                  cx="70"
                  cy="70"
                  r="55"
                ></circle>
                <circle
                  class="timer-circle-progress"
                  cx="70"
                  cy="70"
                  r="55"
                ></circle>
              </svg>
              <div class="timer-center-info">
                <div id="pkTimeDigits" class="timer-digits">
                  04:25 AM
                </div>
                <div class="timer-sublabel">PK Pakistan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Active Jobs Table Container -->
    <div class="jobs-table-card">
      <div class="table-card-header">
        <div>
          <h2 class="card-title">Recent Active Jobs</h2>
          <p class="stat-subtext">
            Latest work orders across the platform
          </p>
        </div>
        <a href="jobs.php" class="view-all-link">View all jobs →</a>
      </div>

      <div class="table-responsive">
        <table class="crm-table">
          <thead>
            <tr>
              <th>STORE / LOCATION</th>
              <th>DESIGNATION</th>
              <th>STATUS</th>
              <th>URGENCY</th>
            </tr>
          </thead>
          <tbody id="activeJobsTableBody">
            <!-- Dashboard Jobs Table Rows -->
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- COLUMN 3: Unified Outer Single Container Card -->
  <section class="right-col">
    <div class="right-unified-card">
      <div class="onboarding-overview-section">
        <div class="overview-header">
          <h2 class="card-title">Onboarding</h2>
          <span class="percent-large">18%</span>
        </div>

        <div class="progress-metrics-row">
          <span>30%</span>
          <span>25%</span>
          <span>0%</span>
        </div>

        <div class="multi-color-bar">
          <div class="segment-pill yellow">Task</div>
          <div class="segment-pill dark"></div>
          <div class="segment-pill gray"></div>
        </div>
      </div>

      <div class="dark-task-panel">
        <div class="dark-panel-header">
          <h2 class="panel-title">Onboarding Task</h2>
          <span id="taskCounterBadge" class="task-count-badge"
            >2/8</span
          >
        </div>

        <div class="tasks-list">
          <div class="task-item-row">
            <div class="task-left-info">
              <div class="task-icon-circle">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <rect
                    x="2"
                    y="3"
                    width="20"
                    height="14"
                    rx="2"
                    ry="2"
                  ></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div>
                <div class="task-item-name">Interview</div>
                <div class="task-item-time">Sep 13, 08:30</div>
              </div>
            </div>
            <button class="task-check-btn checked">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3.5"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </button>
          </div>

          <div class="task-item-row">
            <div class="task-left-info">
              <div class="task-icon-circle">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <polygon
                    points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
                  ></polygon>
                </svg>
              </div>
              <div>
                <div class="task-item-name">Team Meeting</div>
                <div class="task-item-time">Sep 13, 10:30</div>
              </div>
            </div>
            <button class="task-check-btn checked">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3.5"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </button>
          </div>

          <div class="task-item-row">
            <div class="task-left-info">
              <div class="task-icon-circle">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                  ></path>
                </svg>
              </div>
              <div>
                <div class="task-item-name">Project Update</div>
                <div class="task-item-time">Sep 13, 13:00</div>
              </div>
            </div>
            <button class="task-check-btn unchecked"></button>
          </div>

          <div class="task-item-row">
            <div class="task-left-info">
              <div class="task-icon-circle">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M12 20h9"></path>
                  <path
                    d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
                  ></path>
                </svg>
              </div>
              <div>
                <div class="task-item-name">Discuss Q3 Goals</div>
                <div class="task-item-time">Sep 13, 14:45</div>
              </div>
            </div>
            <button class="task-check-btn unchecked"></button>
          </div>

          <div class="task-item-row">
            <div class="task-left-info">
              <div class="task-icon-circle">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
                  ></path>
                  <path
                    d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                  ></path>
                </svg>
              </div>
              <div>
                <div class="task-item-name">HR Policy Review</div>
                <div class="task-item-time">Sep 13, 16:30</div>
              </div>
            </div>
            <button class="task-check-btn unchecked"></button>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

<?php require_once "includes/footer.php"; ?>
