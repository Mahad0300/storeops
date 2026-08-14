/**
 * StoreOps CRM - Analytics & Financial Metrics Workspace (analytics.js)
 * Chart.js Visualizations, Staff Performance Leaderboard, Financial Ledger Activity Feed
 */

const initialStaffPerformanceData = [
  {
    member: "Alex Morgan",
    avatar: "AM",
    role: "Team Lead",
    assigned: 65,
    completed: 59,
    ratio: "91%",
    vendorPaid: "$19,040.85",
  },
  {
    member: "Marcus Vance",
    avatar: "MV",
    role: "Team Lead",
    assigned: 48,
    completed: 45,
    ratio: "94%",
    vendorPaid: "$14,210.00",
  },
  {
    member: "Sophia Martinez",
    avatar: "SM",
    role: "User",
    assigned: 33,
    completed: 32,
    ratio: "97%",
    vendorPaid: "$10,657.13",
  },
  {
    member: "Sarah Jenkins",
    avatar: "SJ",
    role: "User",
    assigned: 24,
    completed: 23,
    ratio: "96%",
    vendorPaid: "$8,400.00",
  },
  {
    member: "Mahad Bukhari",
    avatar: "MB",
    role: "Administrator",
    assigned: 7,
    completed: 7,
    ratio: "100%",
    vendorPaid: "$0.00",
  },
];

const initialLedgerActivityData = [
  {
    amount: "$300.00",
    workOrder: "#WO-2026-00082",
    type: "CLIENT",
    clearStatus: "FULL",
    date: "Jul 18, 2026, 06:15 UTC",
    method: "ACH Transfer",
  },
  {
    amount: "$95.00",
    workOrder: "#WO-2026-00090",
    type: "VENDOR",
    clearStatus: "FULL",
    date: "Jul 16, 2026, 22:35 UTC",
    method: "Zelle",
  },
  {
    amount: "$411.00",
    workOrder: "#WO-2026-00091",
    type: "VENDOR",
    clearStatus: "FULL",
    date: "Jul 16, 2026, 22:34 UTC",
    method: "Zelle",
  },
  {
    amount: "$400.00",
    workOrder: "#WO-2026-00093",
    type: "VENDOR",
    clearStatus: "FULL",
    date: "Jul 16, 2026, 22:32 UTC",
    method: "Zelle",
  },
  {
    amount: "$302.50",
    workOrder: "#WO-2026-00098",
    type: "VENDOR",
    clearStatus: "FULL",
    date: "Jul 16, 2026, 22:30 UTC",
    method: "Zelle",
  },
];

let statusDoughnutChartInstance = null;
let monthlyBarChartInstance = null;
let tradeAreaLineChartInstance = null;

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("analyticsView")) {
    renderAnalyticsPage();
  }
});

function renderAnalyticsPage() {
  initStatusDoughnutChart();
  initMonthlyBarChart();
  initTradeAreaLineChart();
  renderStaffLeaderboard();
  renderLedgerActivityFeed();

  const rangeSelect = document.getElementById("analyticsDateRangeSelect");
  if (rangeSelect) {
    rangeSelect.addEventListener("change", () => {
      showToast(
        `Analytics filter updated: ${rangeSelect.options[rangeSelect.selectedIndex].text}`,
      );
    });
  }

  const globalSearch = document.getElementById("globalSearchInput");
  if (globalSearch) {
    globalSearch.addEventListener("input", (e) => {
      filterAnalyticsBySearch(e.target.value.toLowerCase().trim());
    });
  }
}

function initTradeAreaLineChart() {
  const ctx = document.getElementById("tradeAreaLineChart");
  if (!ctx || typeof Chart === "undefined") return;

  if (tradeAreaLineChartInstance) {
    tradeAreaLineChartInstance.destroy();
  }

  const context = ctx.getContext("2d");

  // Gradient Fill for Series 1 (Blue)
  const gradientBlue = context.createLinearGradient(0, 0, 0, 320);
  gradientBlue.addColorStop(0, "rgba(26, 115, 232, 0.28)");
  gradientBlue.addColorStop(1, "rgba(26, 115, 232, 0.01)");

  // Gradient Fill for Series 2 (Gold / Yellow)
  const gradientGold = context.createLinearGradient(0, 0, 0, 320);
  gradientGold.addColorStop(0, "rgba(247, 201, 72, 0.38)");
  gradientGold.addColorStop(1, "rgba(247, 201, 72, 0.01)");

  tradeAreaLineChartInstance = new Chart(ctx, {
    type: "line",
    data: {
      labels: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
      ],
      datasets: [
        {
          label: "Total Dispatch Volume",
          data: [400, 400, 640, 500, 890, 750, 840, 600, 940, 500, 640, 700],
          borderColor: "#1A73E8",
          borderWidth: 3.5,
          backgroundColor: gradientBlue,
          fill: true,
          tension: 0.45,
          pointRadius: 0,
          pointHoverRadius: 6,
          pointHoverBackgroundColor: "#1A73E8",
          pointHoverBorderColor: "#FFFFFF",
          pointHoverBorderWidth: 2,
        },
        {
          label: "Revenue Target Growth",
          data: [350, 350, 410, 370, 490, 400, 540, 410, 590, 440, 540, 400],
          borderColor: "#F7C948",
          borderWidth: 3.5,
          backgroundColor: gradientGold,
          fill: true,
          tension: 0.45,
          pointRadius: 0,
          pointHoverRadius: 6,
          pointHoverBackgroundColor: "#F7C948",
          pointHoverBorderColor: "#FFFFFF",
          pointHoverBorderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 10,
          right: 15,
          top: 10,
          bottom: 5,
        },
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "#1E2022",
          titleFont: { family: "Plus Jakarta Sans", size: 12, weight: "700" },
          bodyFont: { family: "Plus Jakarta Sans", size: 12 },
          padding: 12,
          cornerRadius: 12,
          displayColors: true,
        },
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: {
            font: { family: "Plus Jakarta Sans", size: 11, weight: "600" },
            color: "#787A7D",
          },
        },
        y: {
          grid: {
            color: "rgba(0, 0, 0, 0.04)",
            drawBorder: false,
          },
          ticks: {
            font: { family: "Plus Jakarta Sans", size: 10 },
            color: "#787A7D",
            stepSize: 200,
          },
          min: 200,
          max: 1000,
        },
      },
    },
  });
}

function initStatusDoughnutChart() {
  const ctx = document.getElementById("statusDoughnutChart");
  if (!ctx || typeof Chart === "undefined") return;

  if (statusDoughnutChartInstance) {
    statusDoughnutChartInstance.destroy();
  }

  statusDoughnutChartInstance = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: [
        "Done (Completed)",
        "In Progress",
        "Pending Approval",
        "Scheduled",
        "Cancelled",
      ],
      datasets: [
        {
          data: [104, 28, 12, 6, 3],
          backgroundColor: [
            "#34D399",
            "#1A73E8",
            "#D97706",
            "#7C3AED",
            "#E53E3E",
          ],
          hoverBackgroundColor: [
            "#2AD59B",
            "#1565C0",
            "#B45309",
            "#6D28D9",
            "#C53030",
          ],
          borderWidth: 0,
          borderRadius: 6,
          spacing: 3,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "76%",
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "#1E2022",
          titleFont: { family: "Plus Jakarta Sans", size: 12, weight: "700" },
          bodyFont: { family: "Plus Jakarta Sans", size: 12 },
          padding: 10,
          cornerRadius: 10,
          displayColors: true,
          callbacks: {
            label: function (context) {
              const val = context.raw;
              const total = 153;
              const pct = ((val / total) * 100).toFixed(1);
              return ` ${context.label}: ${val} (${pct}%)`;
            },
          },
        },
      },
    },
  });
}

function initMonthlyBarChart() {
  const ctx = document.getElementById("monthlyJobsBarChart");
  if (!ctx || typeof Chart === "undefined") return;

  if (monthlyBarChartInstance) {
    monthlyBarChartInstance.destroy();
  }

  monthlyBarChartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "Jan '26",
        "Feb '26",
        "Mar '26",
        "Apr '26",
        "May '26",
        "Jun '26",
        "Jul '26",
        "Aug '26",
      ],
      datasets: [
        {
          label: "Work Orders Created",
          data: [12, 18, 24, 19, 28, 70, 34, 15],
          backgroundColor: [
            "#1E2022",
            "#1E2022",
            "#1E2022",
            "#1E2022",
            "#1E2022",
            "#F7C948",
            "#1E2022",
            "#1E2022",
          ],
          hoverBackgroundColor: [
            "#313438",
            "#313438",
            "#313438",
            "#313438",
            "#313438",
            "#E5B837",
            "#313438",
            "#313438",
          ],
          borderRadius: 14,
          borderSkipped: false,
          barThickness: 28,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "#1E2022",
          titleFont: { family: "Plus Jakarta Sans", size: 12, weight: "700" },
          bodyFont: { family: "Plus Jakarta Sans", size: 12 },
          padding: 10,
          cornerRadius: 10,
          callbacks: {
            label: function (context) {
              return ` ${context.raw} Work Orders Created`;
            },
          },
        },
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: {
            font: { family: "Plus Jakarta Sans", size: 11, weight: "600" },
            color: "#787A7D",
          },
        },
        y: {
          grid: { color: "rgba(0,0,0,0.04)" },
          ticks: {
            font: { family: "Plus Jakarta Sans", size: 10 },
            color: "#787A7D",
            stepSize: 20,
          },
          beginAtZero: true,
        },
      },
    },
  });
}

function updateMonthlyBarChart() {
  initMonthlyBarChart();
  showToast("Monthly Jobs trend updated");
}

function renderStaffLeaderboard() {
  const tbody = document.getElementById("analyticsLeaderboardBody");
  if (!tbody) return;

  tbody.innerHTML = initialStaffPerformanceData
    .map((st) => {
      const roleClass =
        st.role === "Administrator"
          ? "administrator"
          : st.role === "Team Lead"
            ? "team-lead"
            : "user";
      return `
      <tr>
        <td>
          <div class="user-assigned-badge">
            <span class="mini-avatar-circle">${escapeHTML(st.avatar)}</span>
            <span class="member-name-bold">${escapeHTML(st.member)}</span>
          </div>
        </td>
        <td><span class="user-role-tag-pill ${roleClass}">${escapeHTML(st.role)}</span></td>
        <td><span class="num-val-bold">${st.assigned}</span></td>
        <td><span class="num-val-completed">${st.completed}</span></td>
        <td>
          <div class="staff-ratio-cell-wrap">
            <div class="staff-progress-bar-track">
              <div class="staff-progress-bar-fill" style="width: ${escapeHTML(st.ratio)};"></div>
            </div>
            <span class="staff-ratio-badge num-val-bold">${escapeHTML(st.ratio)}</span>
          </div>
        </td>
        <td><span class="vendor-charge-text">${escapeHTML(st.vendorPaid)}</span></td>
      </tr>
    `;
    })
    .join("");
}

function renderLedgerActivityFeed() {
  const container = document.getElementById("analyticsLedgerFeed");
  if (!container) return;

  container.innerHTML = initialLedgerActivityData
    .map(
      (tx) => `
    <div class="ledger-transaction-card">
      <div class="ledger-item-left">
        <span class="ledger-amount">${escapeHTML(tx.amount)}</span>
        <a href="jobs.html" class="notif-workorder-link">
          <span>${escapeHTML(tx.workOrder)}</span>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>
        <span class="ledger-type-badge ${tx.type.toLowerCase()}">${escapeHTML(tx.type)}</span>
        <span class="action-badge created ledger-status-tag">${escapeHTML(tx.clearStatus)}</span>
      </div>

      <div class="ledger-meta-text">
        <span>${escapeHTML(tx.method)} • ${escapeHTML(tx.date)}</span>
      </div>
    </div>
  `,
    )
    .join("");
}

function filterAnalyticsBySearch(query) {
  const tbody = document.getElementById("analyticsLeaderboardBody");
  if (!tbody) return;

  const filteredStaff = initialStaffPerformanceData.filter(
    (st) =>
      !query ||
      st.member.toLowerCase().includes(query) ||
      st.role.toLowerCase().includes(query),
  );

  tbody.innerHTML = filteredStaff
    .map((st) => {
      const roleClass =
        st.role === "Administrator"
          ? "administrator"
          : st.role === "Team Lead"
            ? "team-lead"
            : "user";
      return `
      <tr>
        <td>
          <div class="user-assigned-badge">
            <span class="mini-avatar-circle">${escapeHTML(st.avatar)}</span>
            <span class="member-name-bold">${escapeHTML(st.member)}</span>
          </div>
        </td>
        <td><span class="user-role-tag-pill ${roleClass}">${escapeHTML(st.role)}</span></td>
        <td><span class="num-val-bold">${st.assigned}</span></td>
        <td><span class="num-val-completed">${st.completed}</span></td>
        <td>
          <div class="staff-ratio-cell-wrap">
            <div class="staff-progress-bar-track">
              <div class="staff-progress-bar-fill" style="width: ${escapeHTML(st.ratio)};"></div>
            </div>
            <span class="staff-ratio-badge num-val-bold">${escapeHTML(st.ratio)}</span>
          </div>
        </td>
        <td><span class="vendor-charge-text">${escapeHTML(st.vendorPaid)}</span></td>
      </tr>
    `;
    })
    .join("");
}

function exportAnalyticsReport(type) {
  showToast(
    `Exporting analytics performance report as ${type.toUpperCase()}...`,
  );
}
