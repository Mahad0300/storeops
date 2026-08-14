/**
 * StoreOps CRM - All Jobs Workspace & Custom Calendar (jobs.js)
 * Master Jobs Table, Search, Multi-Select Status, Urgency, Payment, Calendar Date Popover, Pagination, Financial KPIs
 */

let currentJobPage = 1;
const JOBS_PER_PAGE = 10;

// Date Filter Global State
let currentDateFilterState = {
  type: "ALL", // 'ALL', 'PRESET', 'MONTH', 'EXACT'
  preset: "all",
  monthIndex: 7, // August (0-indexed: 7 = Aug)
  year: 2026,
  exactDay: null,
};

const monthNamesArr = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const monthAbbrArr = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("masterJobsTableBody")) {
    renderAllJobsMasterTable();
    initJobsTableFilters();
  }
  updateFinancialSummaryKPIs();
});

function renderAllJobsMasterTable() {
  const tbody = document.getElementById("masterJobsTableBody");
  if (!tbody) return;

  const searchInput = document.getElementById("jobsTableFilterSearch");
  const urgencySelect = document.getElementById("filterUrgencySelect");
  const userSelect = document.getElementById("filterUserSelect");
  const paymentSelect = document.getElementById("filterPaymentSelect");

  const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : "";
  const urgencyFilter = urgencySelect ? urgencySelect.value : "ALL";
  const userFilter = userSelect ? userSelect.value : "ALL";
  const paymentFilter = paymentSelect ? paymentSelect.value : "ALL";

  const selectedStatusCBs = Array.from(
    document.querySelectorAll(".filter-status-cb:checked"),
  ).map((cb) => cb.value);

  const filteredJobs = masterJobsDataset.filter((job) => {
    const matchesSearch =
      !searchTerm ||
      job.storeName.toLowerCase().includes(searchTerm) ||
      job.storeAddress.toLowerCase().includes(searchTerm) ||
      job.designation.toLowerCase().includes(searchTerm) ||
      job.assignedUser.toLowerCase().includes(searchTerm);

    const matchesStatus =
      selectedStatusCBs.length === 0 || selectedStatusCBs.includes(job.status);
    const matchesUrgency =
      urgencyFilter === "ALL" || job.urgency === urgencyFilter;
    const matchesUser = userFilter === "ALL" || job.assignedUser === userFilter;

    let matchesPayment = true;
    if (paymentFilter === "Unpaid") {
      matchesPayment = job.vendorCharges > 0;
    } else if (paymentFilter === "Fully Paid") {
      matchesPayment = job.jobRevenue > 0;
    }

    // Date Filter Logic
    let matchesDate = true;
    if (currentDateFilterState.type === "PRESET") {
      const preset = currentDateFilterState.preset;
      if (preset === "today") {
        matchesDate = job.addedDate === "Aug 14, 2026";
      } else if (preset === "yesterday") {
        matchesDate = job.addedDate === "Aug 13, 2026";
      } else if (preset === "current-month") {
        matchesDate =
          job.addedDate.includes("Aug") && job.addedDate.includes("2026");
      } else if (preset === "month") {
        matchesDate =
          job.addedDate.includes("Jul") && job.addedDate.includes("2026");
      } else if (preset === "week") {
        const d = new Date(job.addedDate);
        const ref = new Date("2026-08-14");
        const diff = Math.abs(ref - d) / (1000 * 60 * 60 * 24);
        matchesDate = diff <= 7;
      } else if (preset === "quarter") {
        const d = new Date(job.addedDate);
        const ref = new Date("2026-08-14");
        const diff = Math.abs(ref - d) / (1000 * 60 * 60 * 24);
        matchesDate = diff <= 90;
      }
    } else if (currentDateFilterState.type === "MONTH") {
      const targetMonthAbbr = monthAbbrArr[currentDateFilterState.monthIndex];
      matchesDate =
        job.addedDate.includes(targetMonthAbbr) &&
        job.addedDate.includes(String(currentDateFilterState.year));
    } else if (currentDateFilterState.type === "EXACT") {
      matchesDate = job.addedDate === currentDateFilterState.exactDay;
    }

    return (
      matchesSearch &&
      matchesStatus &&
      matchesUrgency &&
      matchesUser &&
      matchesPayment &&
      matchesDate
    );
  });

  const totalFiltered = filteredJobs.length;
  const totalPages = Math.ceil(totalFiltered / JOBS_PER_PAGE) || 1;

  if (currentJobPage > totalPages) {
    currentJobPage = totalPages;
  }

  const startIndex = (currentJobPage - 1) * JOBS_PER_PAGE;
  const endIndex = Math.min(startIndex + JOBS_PER_PAGE, totalFiltered);
  const pagedJobs = filteredJobs.slice(startIndex, endIndex);

  // Update Pagination Controls UI for Jobs
  const pagInfo = document.getElementById("jobsPaginationInfo");
  const pagPageNum = document.getElementById("jobsCurrentPageNum");
  const btnPrev = document.getElementById("btnPrevJobsPage");
  const btnNext = document.getElementById("btnNextJobsPage");

  if (pagInfo) {
    pagInfo.textContent =
      totalFiltered > 0
        ? `Showing ${startIndex + 1} to ${endIndex} of ${totalFiltered} Work Orders`
        : `Showing 0 of 0 Work Orders`;
  }
  if (pagPageNum) pagPageNum.textContent = currentJobPage;
  if (btnPrev) btnPrev.disabled = currentJobPage <= 1;
  if (btnNext) btnNext.disabled = currentJobPage >= totalPages;

  if (pagedJobs.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="10" style="text-align: center; padding: 24px; color: var(--text-muted);">
          No work orders found matching your filters.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = pagedJobs
    .map((job) => {
      const netRevenue = job.jobRevenue - job.vendorCharges;
      return `
      <tr>
        <td>
          <div class="location-name">${escapeHTML(job.storeName)}</div>
          <div class="location-address">${escapeHTML(job.storeAddress)}</div>
        </td>
        <td><span class="designation-text">${escapeHTML(job.designation)}</span></td>
        <td>
          <div class="user-assigned-badge">
            <span class="mini-avatar-circle">${escapeHTML(job.assignedAvatar)}</span>
            <span>${escapeHTML(job.assignedUser)}</span>
          </div>
        </td>
        <td style="color: var(--text-muted); font-size: 12px;">${escapeHTML(job.addedDate)}</td>
        <td><span class="vendor-charge-text">$${job.vendorCharges.toFixed(2)}</span></td>
        <td><span class="job-revenue-text">$${job.jobRevenue.toFixed(2)}</span></td>
        <td><span class="net-profit-pill">+$${netRevenue.toFixed(2)}</span></td>
        <td><span class="badge-urgency ${job.urgency === "Urgent" ? "urgent" : "sla"}">${escapeHTML(job.urgency)}</span></td>
        <td><span class="badge-status ${getStatusClass(job.status)}">${escapeHTML(job.status)}</span></td>
        <td style="text-align: right;">
          <div class="table-actions-cell">
            <button class="table-action-btn" onclick="editJobOrder(${job.id})">Edit</button>
            <button class="table-action-btn" onclick="viewJobDetails(${job.id})">View</button>
            <button class="table-action-btn" onclick="deleteJobOrder(${job.id})">Delete</button>
          </div>
        </td>
      </tr>
    `;
    })
    .join("");

  updateFinancialSummaryKPIs();
}

function resetAllJobsFilters() {
  currentJobPage = 1;
  const searchInput = document.getElementById("jobsTableFilterSearch");
  const urgencySelect = document.getElementById("filterUrgencySelect");
  const userSelect = document.getElementById("filterUserSelect");
  const paymentSelect = document.getElementById("filterPaymentSelect");
  const statusLabel = document.getElementById("lblStatusFilter");

  if (searchInput) searchInput.value = "";
  if (urgencySelect) urgencySelect.value = "ALL";
  if (userSelect) userSelect.value = "ALL";
  if (paymentSelect) paymentSelect.value = "ALL";

  document
    .querySelectorAll(".filter-status-cb")
    .forEach((cb) => (cb.checked = false));
  if (statusLabel) statusLabel.textContent = "All Statuses";

  currentDateFilterState = {
    type: "ALL",
    preset: "all",
    monthIndex: 7,
    year: 2026,
    exactDay: null,
  };
  document
    .querySelectorAll(".calendar-preset-btn")
    .forEach((b) => b.classList.remove("active"));
  const allBtn = document.querySelector(
    '.calendar-preset-btn[data-preset="all"]',
  );
  if (allBtn) allBtn.classList.add("active");

  renderCalendarGrid();
  renderAllJobsMasterTable();
  showToast("Filters reset successfully");
}

function renderCalendarGrid() {
  const monthTitle = document.querySelector(".cal-month-title");
  const gridContainer = document.querySelector(".calendar-days-grid");
  if (!monthTitle || !gridContainer) return;

  const monthName = monthNamesArr[currentDateFilterState.monthIndex];
  monthTitle.textContent = `${monthName} ${currentDateFilterState.year}`;

  const daysInMonth = new Date(
    currentDateFilterState.year,
    currentDateFilterState.monthIndex + 1,
    0,
  ).getDate();
  const firstDayIndex = new Date(
    currentDateFilterState.year,
    currentDateFilterState.monthIndex,
    1,
  ).getDay();

  let gridHtml = "";
  for (let i = firstDayIndex - 1; i >= 0; i--) {
    gridHtml += `<span class="muted">${31 - i}</span>`;
  }

  const targetMonthAbbr = monthAbbrArr[currentDateFilterState.monthIndex];
  for (let day = 1; day <= daysInMonth; day++) {
    const formattedDay = day < 10 ? `0${day}` : `${day}`;
    const dateStr = `${targetMonthAbbr} ${formattedDay}, ${currentDateFilterState.year}`;
    const isSelected =
      currentDateFilterState.type === "EXACT" &&
      currentDateFilterState.exactDay === dateStr;
    const isToday =
      day === 14 &&
      currentDateFilterState.monthIndex === 7 &&
      currentDateFilterState.year === 2026;

    const classNames = [isSelected || isToday ? "active-day" : ""]
      .filter(Boolean)
      .join(" ");

    gridHtml += `<span class="${classNames}" data-day="${formattedDay}">${day}</span>`;
  }

  const totalCells = firstDayIndex + daysInMonth;
  const remainingCells = (7 - (totalCells % 7)) % 7;
  for (let i = 1; i <= remainingCells; i++) {
    gridHtml += `<span class="muted">${i}</span>`;
  }

  gridContainer.innerHTML = gridHtml;

  gridContainer.querySelectorAll("span:not(.muted)").forEach((cell) => {
    cell.addEventListener("click", () => {
      const dayNum = cell.getAttribute("data-day");
      const dateStr = `${targetMonthAbbr} ${dayNum}, ${currentDateFilterState.year}`;
      currentDateFilterState = {
        type: "EXACT",
        preset: null,
        monthIndex: currentDateFilterState.monthIndex,
        year: currentDateFilterState.year,
        exactDay: dateStr,
      };

      document
        .querySelectorAll(".calendar-preset-btn")
        .forEach((b) => b.classList.remove("active"));
      renderCalendarGrid();
      currentJobPage = 1;
      renderAllJobsMasterTable();
    });
  });
}

function initJobsTableFilters() {
  const searchInput = document.getElementById("jobsTableFilterSearch");
  const urgencySelect = document.getElementById("filterUrgencySelect");
  const userSelect = document.getElementById("filterUserSelect");
  const paymentSelect = document.getElementById("filterPaymentSelect");

  const btnStatus = document.getElementById("btnStatusDropdown");
  const statusMenu = document.getElementById("statusDropdownMenu");
  const statusLabel = document.getElementById("lblStatusFilter");

  const btnCalendar = document.getElementById("btnDatePickerToggle");
  const calendarMenu = document.getElementById("datePickerPopoverMenu");
  const btnReset = document.getElementById("btnResetAllFilters");

  const btnPrevJobs = document.getElementById("btnPrevJobsPage");
  const btnNextJobs = document.getElementById("btnNextJobsPage");

  if (btnPrevJobs)
    btnPrevJobs.addEventListener("click", () => {
      if (currentJobPage > 1) {
        currentJobPage--;
        renderAllJobsMasterTable();
      }
    });
  if (btnNextJobs)
    btnNextJobs.addEventListener("click", () => {
      currentJobPage++;
      renderAllJobsMasterTable();
    });

  if (searchInput)
    searchInput.addEventListener("input", () => {
      currentJobPage = 1;
      renderAllJobsMasterTable();
    });
  if (urgencySelect)
    urgencySelect.addEventListener("change", () => {
      currentJobPage = 1;
      renderAllJobsMasterTable();
    });
  if (userSelect)
    userSelect.addEventListener("change", () => {
      currentJobPage = 1;
      renderAllJobsMasterTable();
    });
  if (paymentSelect)
    paymentSelect.addEventListener("change", () => {
      currentJobPage = 1;
      renderAllJobsMasterTable();
    });
  if (btnReset) btnReset.addEventListener("click", resetAllJobsFilters);

  // Status Dropdown Toggle & Checkbox handling
  if (btnStatus && statusMenu) {
    btnStatus.addEventListener("click", (e) => {
      e.stopPropagation();
      if (calendarMenu) calendarMenu.classList.remove("open");
      statusMenu.classList.toggle("open");
    });

    document.querySelectorAll(".filter-status-cb").forEach((cb) => {
      cb.addEventListener("change", () => {
        const checked = Array.from(
          document.querySelectorAll(".filter-status-cb:checked"),
        ).map((c) => c.value);
        if (statusLabel) {
          statusLabel.textContent =
            checked.length > 0 ? `${checked.length} Selected` : "All Statuses";
        }
        renderAllJobsMasterTable();
      });
    });
  }

  // Calendar Popover Toggle & Navigation
  if (btnCalendar && calendarMenu) {
    btnCalendar.addEventListener("click", (e) => {
      e.stopPropagation();
      if (statusMenu) statusMenu.classList.remove("open");
      calendarMenu.classList.toggle("open");
    });

    const prevMonthBtn = calendarMenu.querySelector(".cal-nav-prev");
    const nextMonthBtn = calendarMenu.querySelector(".cal-nav-next");

    if (prevMonthBtn) {
      prevMonthBtn.addEventListener("click", () => {
        if (currentDateFilterState.monthIndex === 0) {
          currentDateFilterState.monthIndex = 11;
          currentDateFilterState.year -= 1;
        } else {
          currentDateFilterState.monthIndex -= 1;
        }
        currentDateFilterState.type = "MONTH";
        currentDateFilterState.preset = null;
        document
          .querySelectorAll(".calendar-preset-btn")
          .forEach((b) => b.classList.remove("active"));
        renderCalendarGrid();
        renderAllJobsMasterTable();
      });
    }

    if (nextMonthBtn) {
      nextMonthBtn.addEventListener("click", () => {
        if (currentDateFilterState.monthIndex === 11) {
          currentDateFilterState.monthIndex = 0;
          currentDateFilterState.year += 1;
        } else {
          currentDateFilterState.monthIndex += 1;
        }
        currentDateFilterState.type = "MONTH";
        currentDateFilterState.preset = null;
        document
          .querySelectorAll(".calendar-preset-btn")
          .forEach((b) => b.classList.remove("active"));
        renderCalendarGrid();
        renderAllJobsMasterTable();
      });
    }
  }

  // Close Popovers on Click Outside
  document.addEventListener("click", (e) => {
    if (
      statusMenu &&
      !statusMenu.contains(e.target) &&
      btnStatus &&
      !btnStatus.contains(e.target)
    ) {
      statusMenu.classList.remove("open");
    }
    if (
      calendarMenu &&
      !calendarMenu.contains(e.target) &&
      btnCalendar &&
      !btnCalendar.contains(e.target)
    ) {
      calendarMenu.classList.remove("open");
    }
  });

  // Calendar Preset Buttons
  document.querySelectorAll(".calendar-preset-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".calendar-preset-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const preset = btn.getAttribute("data-preset");
      if (preset === "all") {
        currentDateFilterState = {
          type: "ALL",
          preset: "all",
          monthIndex: 7,
          year: 2026,
          exactDay: null,
        };
      } else {
        currentDateFilterState = {
          type: "PRESET",
          preset: preset,
          monthIndex: 7,
          year: 2026,
          exactDay: null,
        };
      }

      renderCalendarGrid();
      renderAllJobsMasterTable();
    });
  });

  const resetCalBtn = document.getElementById("btnResetCalendar");
  if (resetCalBtn) {
    resetCalBtn.addEventListener("click", () => {
      currentDateFilterState = {
        type: "ALL",
        preset: "all",
        monthIndex: 7,
        year: 2026,
        exactDay: null,
      };
      document
        .querySelectorAll(".calendar-preset-btn")
        .forEach((b) => b.classList.remove("active"));
      const allBtn = document.querySelector(
        '.calendar-preset-btn[data-preset="all"]',
      );
      if (allBtn) allBtn.classList.add("active");
      renderCalendarGrid();
      renderAllJobsMasterTable();
    });
  }

  renderCalendarGrid();

  const globalSearch = document.getElementById("globalSearchInput");
  if (globalSearch) {
    globalSearch.addEventListener("input", (e) => {
      if (searchInput) {
        searchInput.value = e.target.value;
        renderAllJobsMasterTable();
      }
    });
  }
}

function updateFinancialSummaryKPIs() {
  const totalCount = masterJobsDataset.length;
  const totalRevenue = masterJobsDataset.reduce(
    (sum, j) => sum + j.jobRevenue,
    0,
  );
  const totalVendorCharges = masterJobsDataset.reduce(
    (sum, j) => sum + j.vendorCharges,
    0,
  );
  const totalNetProfit = totalRevenue - totalVendorCharges;

  const countBadge = document.getElementById("jobsCountBadge");
  const jobsPageCount = document.getElementById("jobsPageTotalCount");
  const kpiTotal = document.getElementById("kpiTotalJobs");
  const kpiNew = document.getElementById("kpiNewJobs");
  const kpiPending = document.getElementById("kpiPendingJobs");
  const kpiProgress = document.getElementById("kpiProgressJobs");
  const kpiDone = document.getElementById("kpiDoneJobs");

  if (countBadge) countBadge.textContent = totalCount;
  if (jobsPageCount) jobsPageCount.textContent = totalCount;
  if (kpiTotal) kpiTotal.textContent = totalCount;

  const newCount = masterJobsDataset.filter((j) => j.status === "New").length;
  const pendingCount = masterJobsDataset.filter(
    (j) => j.status === "Pending",
  ).length;
  const progressCount = masterJobsDataset.filter(
    (j) => j.status === "In Progress",
  ).length;
  const doneCount = masterJobsDataset.filter((j) => j.status === "Done").length;

  if (kpiNew) kpiNew.textContent = newCount;
  if (kpiPending) kpiPending.textContent = pendingCount;
  if (kpiProgress) kpiProgress.textContent = progressCount;
  if (kpiDone) kpiDone.textContent = doneCount;

  const revEl = document.getElementById("jobsPageTotalRevenue");
  const vendorEl = document.getElementById("jobsPageTotalVendorCharges");
  const profitEl = document.getElementById("jobsPageTotalNetProfit");

  if (revEl)
    revEl.textContent = `$${totalRevenue.toLocaleString("en-US", { minimumFractionDigits: 0 })}`;
  if (vendorEl)
    vendorEl.textContent = `$${totalVendorCharges.toLocaleString("en-US", { minimumFractionDigits: 0 })}`;
  if (profitEl)
    profitEl.textContent = `$${totalNetProfit.toLocaleString("en-US", { minimumFractionDigits: 0 })}`;
}

function deleteJobOrder(id) {
  if (confirm(`Are you sure you want to remove Work Order #${id}?`)) {
    masterJobsDataset = masterJobsDataset.filter((j) => j.id !== id);
    renderAllJobsMasterTable();
    showToast(`Work Order #${id} removed`);
  }
}

function viewJobDetails(id) {
  window.location.href = "job-detail.html";
}

function editJobOrder(id) {
  const job = masterJobsDataset.find((j) => j.id === id);
  if (!job) return;
  openCRMModal("edit-job", job);
}
