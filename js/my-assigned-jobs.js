/**
 * StoreOps CRM - My Assigned Jobs Workspace (js/my-assigned-jobs.js)
 * My Assigned Jobs Table, Personal Filters, Multi-Select Status, Urgency, Payment, Calendar Date Popover, Pagination, Financial KPIs
 */

let currentMyJobPage = 1;
const MY_JOBS_PER_PAGE = 10;

// Date Filter Global State for My Assigned Jobs
let currentMyDateFilterState = {
  type: "ALL", // 'ALL', 'PRESET', 'MONTH', 'EXACT'
  preset: "all",
  monthIndex: 7, // August (0-indexed: 7 = Aug)
  year: 2026,
  exactDay: null,
};

const myMonthNamesArr = [
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
const myMonthAbbrArr = [
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
  if (document.getElementById("myJobsMasterTableBody")) {
    renderMyJobsMasterTable();
    initMyJobsTableFilters();
  }
  updateMyJobsFinancialSummaryKPIs();
});

function getMyFilteredJobs() {
  const searchInput = document.getElementById("myJobsTableFilterSearch");
  const urgencySelect = document.getElementById("myFilterUrgencySelect");
  const userSelect = document.getElementById("myFilterUserSelect");
  const paymentSelect = document.getElementById("myFilterPaymentSelect");

  const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : "";
  const urgencyFilter = urgencySelect ? urgencySelect.value : "ALL";
  const userFilter = userSelect ? userSelect.value : "ALL";
  const paymentFilter = paymentSelect ? paymentSelect.value : "ALL";

  const selectedStatusCBs = Array.from(
    document.querySelectorAll(".my-filter-status-cb:checked")
  ).map((cb) => cb.value);

  return masterJobsDataset.filter((job) => {
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

    // User filter matching (Default: Alex Morgan & Sophia Martinez for demo assigned jobs)
    let matchesUser = true;
    if (userFilter === "ALL") {
      matchesUser = job.assignedUser === "Alex Morgan" || job.assignedUser === "Sophia Martinez";
    } else {
      matchesUser = job.assignedUser === userFilter;
    }

    let matchesPayment = true;
    if (paymentFilter === "Unpaid") {
      matchesPayment = job.vendorCharges > 0;
    } else if (paymentFilter === "Fully Paid") {
      matchesPayment = job.jobRevenue > 0;
    }

    // Date Filter Logic
    let matchesDate = true;
    if (currentMyDateFilterState.type === "PRESET") {
      const preset = currentMyDateFilterState.preset;
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
    } else if (currentMyDateFilterState.type === "MONTH") {
      const targetMonthAbbr = myMonthAbbrArr[currentMyDateFilterState.monthIndex];
      matchesDate =
        job.addedDate.includes(targetMonthAbbr) &&
        job.addedDate.includes(String(currentMyDateFilterState.year));
    } else if (currentMyDateFilterState.type === "EXACT") {
      matchesDate = job.addedDate === currentMyDateFilterState.exactDay;
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
}

function renderMyJobsMasterTable() {
  const tbody = document.getElementById("myJobsMasterTableBody");
  if (!tbody) return;

  const filteredJobs = getMyFilteredJobs();
  const totalFiltered = filteredJobs.length;
  const totalPages = Math.ceil(totalFiltered / MY_JOBS_PER_PAGE) || 1;

  if (currentMyJobPage > totalPages) {
    currentMyJobPage = totalPages;
  }

  const startIndex = (currentMyJobPage - 1) * MY_JOBS_PER_PAGE;
  const endIndex = Math.min(startIndex + MY_JOBS_PER_PAGE, totalFiltered);
  const pagedJobs = filteredJobs.slice(startIndex, endIndex);

  // Update Pagination Controls UI
  const pagInfo = document.getElementById("myJobsPaginationInfo");
  const pagPageNum = document.getElementById("myJobsCurrentPageNum");
  const btnPrev = document.getElementById("btnPrevMyJobsPage");
  const btnNext = document.getElementById("btnNextMyJobsPage");

  if (pagInfo) {
    pagInfo.textContent =
      totalFiltered > 0
        ? `Showing ${startIndex + 1} to ${endIndex} of ${totalFiltered} Assigned Work Orders`
        : `Showing 0 of 0 Assigned Work Orders`;
  }
  if (pagPageNum) pagPageNum.textContent = currentMyJobPage;
  if (btnPrev) btnPrev.disabled = currentMyJobPage <= 1;
  if (btnNext) btnNext.disabled = currentMyJobPage >= totalPages;

  if (pagedJobs.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="9" class="table-empty-cell">
          No assigned work orders found matching your filters.
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
          <a href="job-detail.php" class="location-cell-link" onclick="viewJobDetails(${job.id}); return false;">
            <div class="location-name">${escapeHTML(job.storeName)}</div>
            <div class="location-address">${escapeHTML(job.storeAddress)}</div>
          </a>
        </td>
        <td><span class="designation-text">${escapeHTML(job.designation)}</span></td>
        <td>
          <div class="user-assigned-badge">
            <span class="mini-avatar-circle">${escapeHTML(job.assignedAvatar)}</span>
            <span>${escapeHTML(job.assignedUser)}</span>
          </div>
        </td>
        <td class="cell-muted-sm">${escapeHTML(job.addedDate)}</td>
        <td><span class="vendor-charge-text">$${job.vendorCharges.toFixed(2)}</span></td>
        <td><span class="job-revenue-text">$${job.jobRevenue.toFixed(2)}</span></td>
        <td><span class="net-profit-pill">+$${netRevenue.toFixed(2)}</span></td>
        <td><span class="badge-urgency ${job.urgency === "Urgent" ? "urgent" : "sla"}">${escapeHTML(job.urgency)}</span></td>
        <td><span class="badge-status ${getStatusClass(job.status)}">${escapeHTML(job.status)}</span></td>
      </tr>
    `;
    })
    .join("");

  updateMyJobsFinancialSummaryKPIs();
}

function resetMyJobsFilters() {
  currentMyJobPage = 1;
  const searchInput = document.getElementById("myJobsTableFilterSearch");
  const urgencySelect = document.getElementById("myFilterUrgencySelect");
  const userSelect = document.getElementById("myFilterUserSelect");
  const paymentSelect = document.getElementById("myFilterPaymentSelect");
  const statusLabel = document.getElementById("myLblStatusFilter");

  if (searchInput) searchInput.value = "";
  if (urgencySelect) urgencySelect.value = "ALL";
  if (userSelect) userSelect.value = "ALL";
  if (paymentSelect) paymentSelect.value = "ALL";

  document
    .querySelectorAll(".my-filter-status-cb")
    .forEach((cb) => (cb.checked = false));
  if (statusLabel) statusLabel.textContent = "All Statuses";

  currentMyDateFilterState = {
    type: "ALL",
    preset: "all",
    monthIndex: 7,
    year: 2026,
    exactDay: null,
  };
  const popover = document.getElementById("myDatePickerPopoverMenu");
  if (popover) {
    popover.querySelectorAll(".calendar-preset-btn").forEach((b) => b.classList.remove("active"));
    const allBtn = popover.querySelector('.calendar-preset-btn[data-preset="all"]');
    if (allBtn) allBtn.classList.add("active");
  }

  renderMyCalendarGrid();
  renderMyJobsMasterTable();
  showToast("My Assigned Jobs filters reset successfully");
}

function renderMyCalendarGrid() {
  const popover = document.getElementById("myDatePickerPopoverMenu");
  if (!popover) return;

  const monthTitle = popover.querySelector(".cal-month-title");
  const gridContainer = popover.querySelector(".calendar-days-grid");
  if (!monthTitle || !gridContainer) return;

  const monthName = myMonthNamesArr[currentMyDateFilterState.monthIndex];
  monthTitle.textContent = `${monthName} ${currentMyDateFilterState.year}`;

  const daysInMonth = new Date(
    currentMyDateFilterState.year,
    currentMyDateFilterState.monthIndex + 1,
    0
  ).getDate();
  const firstDayIndex = new Date(
    currentMyDateFilterState.year,
    currentMyDateFilterState.monthIndex,
    1
  ).getDay();

  let gridHtml = "";
  for (let i = firstDayIndex - 1; i >= 0; i--) {
    gridHtml += `<span class="muted">${31 - i}</span>`;
  }

  const targetMonthAbbr = myMonthAbbrArr[currentMyDateFilterState.monthIndex];
  for (let day = 1; day <= daysInMonth; day++) {
    const formattedDay = day < 10 ? `0${day}` : `${day}`;
    const dateStr = `${targetMonthAbbr} ${formattedDay}, ${currentMyDateFilterState.year}`;
    const isSelected =
      currentMyDateFilterState.type === "EXACT" &&
      currentMyDateFilterState.exactDay === dateStr;
    const isToday =
      day === 14 &&
      currentMyDateFilterState.monthIndex === 7 &&
      currentMyDateFilterState.year === 2026;

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
      const dateStr = `${targetMonthAbbr} ${dayNum}, ${currentMyDateFilterState.year}`;
      currentMyDateFilterState = {
        type: "EXACT",
        preset: null,
        monthIndex: currentMyDateFilterState.monthIndex,
        year: currentMyDateFilterState.year,
        exactDay: dateStr,
      };

      popover
        .querySelectorAll(".calendar-preset-btn")
        .forEach((b) => b.classList.remove("active"));
      renderMyCalendarGrid();
      currentMyJobPage = 1;
      renderMyJobsMasterTable();
    });
  });
}

function initMyJobsTableFilters() {
  const searchInput = document.getElementById("myJobsTableFilterSearch");
  const urgencySelect = document.getElementById("myFilterUrgencySelect");
  const userSelect = document.getElementById("myFilterUserSelect");
  const paymentSelect = document.getElementById("myFilterPaymentSelect");

  const btnStatus = document.getElementById("myBtnStatusDropdown");
  const statusMenu = document.getElementById("myStatusDropdownMenu");
  const statusLabel = document.getElementById("myLblStatusFilter");

  const btnCalendar = document.getElementById("myBtnDatePickerToggle");
  const calendarMenu = document.getElementById("myDatePickerPopoverMenu");
  const btnReset = document.getElementById("myBtnResetAllFilters");

  const btnPrevJobs = document.getElementById("btnPrevMyJobsPage");
  const btnNextJobs = document.getElementById("btnNextMyJobsPage");

  if (btnPrevJobs)
    btnPrevJobs.addEventListener("click", () => {
      if (currentMyJobPage > 1) {
        currentMyJobPage--;
        renderMyJobsMasterTable();
      }
    });
  if (btnNextJobs)
    btnNextJobs.addEventListener("click", () => {
      currentMyJobPage++;
      renderMyJobsMasterTable();
    });

  if (searchInput)
    searchInput.addEventListener("input", () => {
      currentMyJobPage = 1;
      renderMyJobsMasterTable();
    });
  if (urgencySelect)
    urgencySelect.addEventListener("change", () => {
      currentMyJobPage = 1;
      renderMyJobsMasterTable();
    });
  if (userSelect)
    userSelect.addEventListener("change", () => {
      currentMyJobPage = 1;
      renderMyJobsMasterTable();
    });
  if (paymentSelect)
    paymentSelect.addEventListener("change", () => {
      currentMyJobPage = 1;
      renderMyJobsMasterTable();
    });
  if (btnReset) btnReset.addEventListener("click", resetMyJobsFilters);

  // Status Dropdown Toggle & Checkbox handling
  if (btnStatus && statusMenu) {
    btnStatus.addEventListener("click", (e) => {
      e.stopPropagation();
      if (calendarMenu) calendarMenu.classList.remove("open");
      statusMenu.classList.toggle("open");
    });

    document.querySelectorAll(".my-filter-status-cb").forEach((cb) => {
      cb.addEventListener("change", () => {
        const checked = Array.from(
          document.querySelectorAll(".my-filter-status-cb:checked")
        ).map((c) => c.value);
        if (statusLabel) {
          statusLabel.textContent =
            checked.length > 0 ? `${checked.length} Selected` : "All Statuses";
        }
        renderMyJobsMasterTable();
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
        if (currentMyDateFilterState.monthIndex === 0) {
          currentMyDateFilterState.monthIndex = 11;
          currentMyDateFilterState.year -= 1;
        } else {
          currentMyDateFilterState.monthIndex -= 1;
        }
        currentMyDateFilterState.type = "MONTH";
        currentMyDateFilterState.preset = null;
        calendarMenu
          .querySelectorAll(".calendar-preset-btn")
          .forEach((b) => b.classList.remove("active"));
        renderMyCalendarGrid();
        renderMyJobsMasterTable();
      });
    }

    if (nextMonthBtn) {
      nextMonthBtn.addEventListener("click", () => {
        if (currentMyDateFilterState.monthIndex === 11) {
          currentMyDateFilterState.monthIndex = 0;
          currentMyDateFilterState.year += 1;
        } else {
          currentMyDateFilterState.monthIndex += 1;
        }
        currentMyDateFilterState.type = "MONTH";
        currentMyDateFilterState.preset = null;
        calendarMenu
          .querySelectorAll(".calendar-preset-btn")
          .forEach((b) => b.classList.remove("active"));
        renderMyCalendarGrid();
        renderMyJobsMasterTable();
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
  if (calendarMenu) {
    calendarMenu.querySelectorAll(".calendar-preset-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        calendarMenu
          .querySelectorAll(".calendar-preset-btn")
          .forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const preset = btn.getAttribute("data-preset");
        if (preset === "all") {
          currentMyDateFilterState = {
            type: "ALL",
            preset: "all",
            monthIndex: 7,
            year: 2026,
            exactDay: null,
          };
        } else {
          currentMyDateFilterState = {
            type: "PRESET",
            preset: preset,
            monthIndex: 7,
            year: 2026,
            exactDay: null,
          };
        }

        renderMyCalendarGrid();
        renderMyJobsMasterTable();
      });
    });
  }

  const resetCalBtn = document.getElementById("myBtnResetCalendar");
  if (resetCalBtn && calendarMenu) {
    resetCalBtn.addEventListener("click", () => {
      currentMyDateFilterState = {
        type: "ALL",
        preset: "all",
        monthIndex: 7,
        year: 2026,
        exactDay: null,
      };
      calendarMenu
        .querySelectorAll(".calendar-preset-btn")
        .forEach((b) => b.classList.remove("active"));
      const allBtn = calendarMenu.querySelector(
        '.calendar-preset-btn[data-preset="all"]'
      );
      if (allBtn) allBtn.classList.add("active");
      renderMyCalendarGrid();
      renderMyJobsMasterTable();
    });
  }

  renderMyCalendarGrid();

  const globalSearch = document.getElementById("globalSearchInput");
  if (globalSearch) {
    globalSearch.addEventListener("input", (e) => {
      if (searchInput) {
        searchInput.value = e.target.value;
        renderMyJobsMasterTable();
      }
    });
  }
}

function updateMyJobsFinancialSummaryKPIs() {
  const filteredJobs = getMyFilteredJobs();
  const totalCount = filteredJobs.length;
  const totalRevenue = filteredJobs.reduce(
    (sum, j) => sum + j.jobRevenue,
    0
  );
  const totalVendorCharges = filteredJobs.reduce(
    (sum, j) => sum + j.vendorCharges,
    0
  );
  const totalNetProfit = totalRevenue - totalVendorCharges;

  const countBadge = document.getElementById("myJobsCountBadge");
  const myJobsPageCount = document.getElementById("myJobsPageTotalCount");

  if (countBadge) countBadge.textContent = totalCount;
  if (myJobsPageCount) myJobsPageCount.textContent = totalCount;

  const revEl = document.getElementById("myJobsPageTotalRevenue");
  const vendorEl = document.getElementById("myJobsPageTotalVendorCharges");
  const profitEl = document.getElementById("myJobsPageTotalNetProfit");

  if (revEl)
    revEl.textContent = `$${totalRevenue.toLocaleString("en-US", { minimumFractionDigits: 0 })}`;
  if (vendorEl)
    vendorEl.textContent = `$${totalVendorCharges.toLocaleString("en-US", { minimumFractionDigits: 0 })}`;
  if (profitEl)
    profitEl.textContent = `$${totalNetProfit.toLocaleString("en-US", { minimumFractionDigits: 0 })}`;
}

function deleteMyJobOrder(id) {
  masterJobsDataset = masterJobsDataset.filter((j) => j.id !== id);
  renderMyJobsMasterTable();
  showToast(`Work Order #${id} removed successfully`);
}

function viewJobDetails(id) {
  window.location.href = "job-detail.php";
}
