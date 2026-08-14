/**
 * StoreOps CRM - Application Logic (Dashboard & All Jobs Workspace)
 */

// Initial Master Jobs Dataset with all requested fields
const initialJobsData = [
  {
    id: 101,
    storeName: "CORAL SPRINGS",
    storeAddress: "N University Dr, Ste 1313, Coral Springs, FL",
    designation: "Fire Protection",
    assignedUser: "Sophia Martinez",
    assignedAvatar: "SM",
    addedDate: "Aug 12, 2026",
    vendorCharges: 450.00,
    jobRevenue: 1200.00,
    urgency: "Within SLA",
    status: "Pending"
  },
  {
    id: 102,
    storeName: "NILES",
    storeAddress: "Milwaukee Ave, Niles, IL",
    designation: "Electrician",
    assignedUser: "Alex Morgan",
    assignedAvatar: "AM",
    addedDate: "Aug 11, 2026",
    vendorCharges: 320.00,
    jobRevenue: 850.00,
    urgency: "Within SLA",
    status: "New"
  },
  {
    id: 103,
    storeName: "EVANSTON",
    storeAddress: "Chicago Ave, Evanston, IL",
    designation: "Electrician",
    assignedUser: "Sophia Martinez",
    assignedAvatar: "SM",
    addedDate: "Aug 10, 2026",
    vendorCharges: 280.00,
    jobRevenue: 750.00,
    urgency: "Within SLA",
    status: "New"
  },
  {
    id: 104,
    storeName: "WEST BLOOMFIELD",
    storeAddress: "Orchard Lake Rd, West Bloomfield, MI",
    designation: "Window Cleaning",
    assignedUser: "John Doe",
    assignedAvatar: "JD",
    addedDate: "Aug 09, 2026",
    vendorCharges: 150.00,
    jobRevenue: 500.00,
    urgency: "Within SLA",
    status: "New"
  },
  {
    id: 105,
    storeName: "KENDALLVILLE",
    storeAddress: "Main St, Kendallville, IN",
    designation: "HVAC",
    assignedUser: "Marcus Vance",
    assignedAvatar: "MV",
    addedDate: "Aug 08, 2026",
    vendorCharges: 680.00,
    jobRevenue: 1800.00,
    urgency: "Urgent",
    status: "Done"
  },
  {
    id: 106,
    storeName: "CHICAGO LOOP",
    storeAddress: "Michigan Ave, Chicago, IL",
    designation: "Plumbing Service",
    assignedUser: "Sarah Jenkins",
    assignedAvatar: "SJ",
    addedDate: "Aug 07, 2026",
    vendorCharges: 510.00,
    jobRevenue: 1400.00,
    urgency: "Urgent",
    status: "In Progress"
  },
  {
    id: 107,
    storeName: "SCHAUMBURG",
    storeAddress: "Golf Rd, Schaumburg, IL",
    designation: "Roofing Repair",
    assignedUser: "Alex Morgan",
    assignedAvatar: "AM",
    addedDate: "Aug 06, 2026",
    vendorCharges: 890.00,
    jobRevenue: 2500.00,
    urgency: "Within SLA",
    status: "Done"
  },
  {
    id: 108,
    storeName: "NAPERVILLE",
    storeAddress: "Route 59, Naperville, IL",
    designation: "Security System",
    assignedUser: "Sophia Martinez",
    assignedAvatar: "SM",
    addedDate: "Aug 05, 2026",
    vendorCharges: 210.00,
    jobRevenue: 650.00,
    urgency: "Within SLA",
    status: "In Progress"
  },
  {
    id: 109,
    storeName: "OAK BROOK",
    storeAddress: "22nd St, Oak Brook, IL",
    designation: "Elevator Maint.",
    assignedUser: "Marcus Vance",
    assignedAvatar: "MV",
    addedDate: "Aug 04, 2026",
    vendorCharges: 1100.00,
    jobRevenue: 3200.00,
    urgency: "Within SLA",
    status: "Done"
  },
  {
    id: 110,
    storeName: "AURORA",
    storeAddress: "New York St, Aurora, IL",
    designation: "HVAC Maintenance",
    assignedUser: "Sarah Jenkins",
    assignedAvatar: "SJ",
    addedDate: "Aug 03, 2026",
    vendorCharges: 420.00,
    jobRevenue: 1150.00,
    urgency: "Within SLA",
    status: "Pending"
  },
  {
    id: 111,
    storeName: "NAPERVILLE WEST",
    storeAddress: "75th St, Naperville, IL",
    designation: "Glass Replacement",
    assignedUser: "Alex Morgan",
    assignedAvatar: "AM",
    addedDate: "Aug 02, 2026",
    vendorCharges: 340.00,
    jobRevenue: 920.00,
    urgency: "Within SLA",
    status: "New"
  },
  {
    id: 112,
    storeName: "JOLIET CENTRAL",
    storeAddress: "Jefferson St, Joliet, IL",
    designation: "Painter",
    assignedUser: "Sophia Martinez",
    assignedAvatar: "SM",
    addedDate: "Aug 01, 2026",
    vendorCharges: 480.00,
    jobRevenue: 1300.00,
    urgency: "Within SLA",
    status: "In Progress"
  },
  {
    id: 113,
    storeName: "ELGIN TOWN",
    storeAddress: "Dundee Ave, Elgin, IL",
    designation: "Awnings Replacement",
    assignedUser: "Marcus Vance",
    assignedAvatar: "MV",
    addedDate: "Jul 30, 2026",
    vendorCharges: 620.00,
    jobRevenue: 1750.00,
    urgency: "Within SLA",
    status: "Done"
  },
  {
    id: 114,
    storeName: "SKOKIE PLAZA",
    storeAddress: "Touhy Ave, Skokie, IL",
    designation: "Handyman",
    assignedUser: "Sarah Jenkins",
    assignedAvatar: "SJ",
    addedDate: "Jul 28, 2026",
    vendorCharges: 250.00,
    jobRevenue: 700.00,
    urgency: "Urgent",
    status: "Pending"
  },
  {
    id: 115,
    storeName: "DES PLAINES",
    storeAddress: "Miner St, Des Plaines, IL",
    designation: "Carpet Cleaner",
    assignedUser: "Alex Morgan",
    assignedAvatar: "AM",
    addedDate: "Jul 26, 2026",
    vendorCharges: 290.00,
    jobRevenue: 820.00,
    urgency: "Within SLA",
    status: "Done"
  },
  {
    id: 116,
    storeName: "HIGHLAND PARK",
    storeAddress: "Central Ave, Highland Park, IL",
    designation: "Fire Inspection",
    assignedUser: "Sophia Martinez",
    assignedAvatar: "SM",
    addedDate: "Jul 24, 2026",
    vendorCharges: 390.00,
    jobRevenue: 1100.00,
    urgency: "Within SLA",
    status: "New"
  }
];

let masterJobsDataset = [...initialJobsData];
let currentJobPage = 1;
const JOBS_PER_PAGE = 10;

// Initial System Users Dataset
const initialUsersData = [
  {
    id: 1,
    loginName: "admin_mahad",
    fullName: "Mahad Bukhari",
    password: "••••••••",
    systemRole: "Administrator",
    accountStatus: "Active / Operational",
    avatar: "MB"
  },
  {
    id: 2,
    loginName: "alex_morgan",
    fullName: "Alex Morgan",
    password: "••••••••",
    systemRole: "Team Lead",
    accountStatus: "Active / Operational",
    avatar: "AM"
  },
  {
    id: 3,
    loginName: "sophia_martinez",
    fullName: "Sophia Martinez",
    password: "••••••••",
    systemRole: "User",
    accountStatus: "Active / Operational",
    avatar: "SM"
  },
  {
    id: 4,
    loginName: "marcus_vance",
    fullName: "Marcus Vance",
    password: "••••••••",
    systemRole: "Team Lead",
    accountStatus: "Active / Operational",
    avatar: "MV"
  },
  {
    id: 5,
    loginName: "sarah_jenkins",
    fullName: "Sarah Jenkins",
    password: "••••••••",
    systemRole: "User",
    accountStatus: "Active / Operational",
    avatar: "SJ"
  },
  {
    id: 6,
    loginName: "john_doe",
    fullName: "John Doe",
    password: "••••••••",
    systemRole: "User",
    accountStatus: "Suspended / Blocked",
    avatar: "JD"
  },
  {
    id: 7,
    loginName: "robert_smith",
    fullName: "Robert Smith",
    password: "••••••••",
    systemRole: "User",
    accountStatus: "Active / Operational",
    avatar: "RS"
  },
  {
    id: 8,
    loginName: "elena_rodriguez",
    fullName: "Elena Rodriguez",
    password: "••••••••",
    systemRole: "Administrator",
    accountStatus: "Active / Operational",
    avatar: "ER"
  }
];

let masterUsersDataset = [...initialUsersData];

document.addEventListener('DOMContentLoaded', () => {
  initLiveClocks();
  initAccordions();
  initTaskList();
  initModals();
  initJobsTableFilters();
  initLogout();
  initMobileSidebar();
  initWorkOrderConfigControls();
  initLoginPage();
  
  // Page Route Handling
  if (document.getElementById('masterJobsTableBody')) {
    renderAllJobsMasterTable();
  }
  if (document.getElementById('activeJobsTableBody')) {
    renderDashboardActiveJobs();
  }
  if (document.getElementById('masterVendorsTableBody')) {
    renderMasterVendorsTable();
    initVendorFilters();
    initRemarkModal();
  }
  if (document.getElementById('masterUsersGrid')) {
    renderMasterUsersCards();
    initUserFilters();
  }
  if (document.getElementById('masterAuditTableBody')) {
    renderMasterAuditLogsTable();
    initAuditFilters();
  }
  if (document.getElementById('notifFeedContainer')) {
    renderNotificationsFeed();
    initNotifEvents();
  }
  if (document.getElementById('analyticsView')) {
    renderAnalyticsPage();
  }
  updateFinancialSummaryKPIs();
});

/* ==========================================================================
   1. Live Dual Clocks (US Eastern & PK Pakistan Time)
   ========================================================================== */
function initLiveClocks() {
  const usClockEl = document.getElementById('usTimeDigits') || document.getElementById('usTime');
  const pkClockEl = document.getElementById('pkTimeDigits') || document.getElementById('pkTime');

  function updateClocks() {
    const now = new Date();

    const usTimeString = now.toLocaleTimeString('en-US', {
      timeZone: 'America/New_York',
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });

    const pkTimeString = now.toLocaleTimeString('en-US', {
      timeZone: 'Asia/Karachi',
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });

    if (usClockEl) usClockEl.textContent = usTimeString;
    if (pkClockEl) pkClockEl.textContent = pkTimeString;
  }

  updateClocks();
  setInterval(updateClocks, 1000);
}

function initLogout() {
  const logoutBtn = document.getElementById('sidebarLogoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      showToast('Logged out of Administrator account');
    });
  }
}

function initMobileSidebar() {
  const toggleBtn = document.getElementById('mobileSidebarToggle');
  const sidebar = document.querySelector('.crm-sidebar');
  const backdrop = document.getElementById('sidebarBackdrop');

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('sidebar-active');
      if (backdrop) backdrop.classList.toggle('active');
    });
  }

  if (backdrop) {
    backdrop.addEventListener('click', () => {
      if (sidebar) sidebar.classList.remove('sidebar-active');
      backdrop.classList.remove('active');
    });
  }
}

/* ==========================================================================
   2. Render Dashboard Active Jobs Table
   ========================================================================== */
function renderDashboardActiveJobs() {
  const tbody = document.getElementById('activeJobsTableBody');
  if (!tbody) return;

  const topJobs = masterJobsDataset.slice(0, 5);
  tbody.innerHTML = topJobs.map(job => `
    <tr>
      <td>
        <div class="location-name">${escapeHTML(job.storeName)}</div>
        <div class="location-address">${escapeHTML(job.storeAddress)}</div>
      </td>
      <td><span class="designation-text">${escapeHTML(job.designation)}</span></td>
      <td><span class="badge-status ${getStatusClass(job.status)}">${escapeHTML(job.status)}</span></td>
      <td><span class="badge-urgency ${job.urgency === 'Urgent' ? 'urgent' : 'sla'}">${escapeHTML(job.urgency)}</span></td>
    </tr>
  `).join('');
}

/* ==========================================================================
   3. Render All Jobs Master Table with All Required Columns
   ========================================================================== */
// Date Filter Global State
let currentDateFilterState = {
  type: 'ALL', // 'ALL', 'PRESET', 'MONTH', 'EXACT'
  preset: 'all',
  monthIndex: 7, // August (0-indexed: 7 = Aug)
  year: 2026,
  exactDay: null
};

const monthNamesArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthAbbrArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function renderAllJobsMasterTable() {
  const tbody = document.getElementById('masterJobsTableBody');
  if (!tbody) return;

  const searchInput = document.getElementById('jobsTableFilterSearch');
  const urgencySelect = document.getElementById('filterUrgencySelect');
  const userSelect = document.getElementById('filterUserSelect');
  const paymentSelect = document.getElementById('filterPaymentSelect');

  const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
  const urgencyFilter = urgencySelect ? urgencySelect.value : 'ALL';
  const userFilter = userSelect ? userSelect.value : 'ALL';
  const paymentFilter = paymentSelect ? paymentSelect.value : 'ALL';

  const selectedStatusCBs = Array.from(document.querySelectorAll('.filter-status-cb:checked')).map(cb => cb.value);

  const filteredJobs = masterJobsDataset.filter(job => {
    const matchesSearch = !searchTerm ||
      job.storeName.toLowerCase().includes(searchTerm) ||
      job.storeAddress.toLowerCase().includes(searchTerm) ||
      job.designation.toLowerCase().includes(searchTerm) ||
      job.assignedUser.toLowerCase().includes(searchTerm);

    const matchesStatus = (selectedStatusCBs.length === 0) || selectedStatusCBs.includes(job.status);
    const matchesUrgency = (urgencyFilter === 'ALL') || (job.urgency === urgencyFilter);
    const matchesUser = (userFilter === 'ALL') || (job.assignedUser === userFilter);

    let matchesPayment = true;
    if (paymentFilter === 'Unpaid') {
      matchesPayment = job.vendorCharges > 0;
    } else if (paymentFilter === 'Fully Paid') {
      matchesPayment = job.jobRevenue > 0;
    }

    // Date Filter Logic
    let matchesDate = true;
    if (currentDateFilterState.type === 'PRESET') {
      const preset = currentDateFilterState.preset;
      if (preset === 'today') {
        matchesDate = job.addedDate === 'Aug 14, 2026';
      } else if (preset === 'yesterday') {
        matchesDate = job.addedDate === 'Aug 13, 2026';
      } else if (preset === 'current-month') {
        matchesDate = job.addedDate.includes('Aug') && job.addedDate.includes('2026');
      } else if (preset === 'month') {
        matchesDate = job.addedDate.includes('Jul') && job.addedDate.includes('2026');
      } else if (preset === 'week') {
        const d = new Date(job.addedDate);
        const ref = new Date('2026-08-14');
        const diff = Math.abs(ref - d) / (1000 * 60 * 60 * 24);
        matchesDate = diff <= 7;
      } else if (preset === 'quarter') {
        const d = new Date(job.addedDate);
        const ref = new Date('2026-08-14');
        const diff = Math.abs(ref - d) / (1000 * 60 * 60 * 24);
        matchesDate = diff <= 90;
      }
    } else if (currentDateFilterState.type === 'MONTH') {
      const targetMonthAbbr = monthAbbrArr[currentDateFilterState.monthIndex];
      matchesDate = job.addedDate.includes(targetMonthAbbr) && job.addedDate.includes(String(currentDateFilterState.year));
    } else if (currentDateFilterState.type === 'EXACT') {
      matchesDate = job.addedDate === currentDateFilterState.exactDay;
    }

    return matchesSearch && matchesStatus && matchesUrgency && matchesUser && matchesPayment && matchesDate;
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
  const pagInfo = document.getElementById('jobsPaginationInfo');
  const pagPageNum = document.getElementById('jobsCurrentPageNum');
  const btnPrev = document.getElementById('btnPrevJobsPage');
  const btnNext = document.getElementById('btnNextJobsPage');

  if (pagInfo) {
    pagInfo.textContent = totalFiltered > 0
      ? `Showing ${startIndex + 1} to ${endIndex} of ${totalFiltered} Work Orders`
      : `Showing 0 of 0 Work Orders`;
  }
  if (pagPageNum) pagPageNum.textContent = currentJobPage;
  if (btnPrev) btnPrev.disabled = (currentJobPage <= 1);
  if (btnNext) btnNext.disabled = (currentJobPage >= totalPages);

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

  tbody.innerHTML = pagedJobs.map(job => {
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
        <td><span class="badge-urgency ${job.urgency === 'Urgent' ? 'urgent' : 'sla'}">${escapeHTML(job.urgency)}</span></td>
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
  }).join('');

  updateFinancialSummaryKPIs();
}

function resetAllJobsFilters() {
  currentJobPage = 1;
  const searchInput = document.getElementById('jobsTableFilterSearch');
  const urgencySelect = document.getElementById('filterUrgencySelect');
  const userSelect = document.getElementById('filterUserSelect');
  const paymentSelect = document.getElementById('filterPaymentSelect');
  const statusLabel = document.getElementById('lblStatusFilter');

  if (searchInput) searchInput.value = '';
  if (urgencySelect) urgencySelect.value = 'ALL';
  if (userSelect) userSelect.value = 'ALL';
  if (paymentSelect) paymentSelect.value = 'ALL';

  document.querySelectorAll('.filter-status-cb').forEach(cb => cb.checked = false);
  if (statusLabel) statusLabel.textContent = 'All Statuses';

  currentDateFilterState = { type: 'ALL', preset: 'all', monthIndex: 7, year: 2026, exactDay: null };
  document.querySelectorAll('.calendar-preset-btn').forEach(b => b.classList.remove('active'));
  const allBtn = document.querySelector('.calendar-preset-btn[data-preset="all"]');
  if (allBtn) allBtn.classList.add('active');

  renderCalendarGrid();
  renderAllJobsMasterTable();
  showToast('Filters reset successfully');
}

function renderCalendarGrid() {
  const monthTitle = document.querySelector('.cal-month-title');
  const gridContainer = document.querySelector('.calendar-days-grid');
  if (!monthTitle || !gridContainer) return;

  const monthName = monthNamesArr[currentDateFilterState.monthIndex];
  monthTitle.textContent = `${monthName} ${currentDateFilterState.year}`;

  const daysInMonth = new Date(currentDateFilterState.year, currentDateFilterState.monthIndex + 1, 0).getDate();
  const firstDayIndex = new Date(currentDateFilterState.year, currentDateFilterState.monthIndex, 1).getDay();

  let gridHtml = '';
  for (let i = firstDayIndex - 1; i >= 0; i--) {
    gridHtml += `<span class="muted">${31 - i}</span>`;
  }

  const targetMonthAbbr = monthAbbrArr[currentDateFilterState.monthIndex];
  for (let day = 1; day <= daysInMonth; day++) {
    const formattedDay = day < 10 ? `0${day}` : `${day}`;
    const dateStr = `${targetMonthAbbr} ${formattedDay}, ${currentDateFilterState.year}`;
    const isSelected = currentDateFilterState.type === 'EXACT' && currentDateFilterState.exactDay === dateStr;
    const isToday = day === 14 && currentDateFilterState.monthIndex === 7 && currentDateFilterState.year === 2026;

    const classNames = [
      isSelected || isToday ? 'active-day' : ''
    ].filter(Boolean).join(' ');

    gridHtml += `<span class="${classNames}" data-day="${formattedDay}">${day}</span>`;
  }

  const totalCells = firstDayIndex + daysInMonth;
  const remainingCells = (7 - (totalCells % 7)) % 7;
  for (let i = 1; i <= remainingCells; i++) {
    gridHtml += `<span class="muted">${i}</span>`;
  }

  gridContainer.innerHTML = gridHtml;

  gridContainer.querySelectorAll('span:not(.muted)').forEach(cell => {
    cell.addEventListener('click', () => {
      const dayNum = cell.getAttribute('data-day');
      const dateStr = `${targetMonthAbbr} ${dayNum}, ${currentDateFilterState.year}`;
      currentDateFilterState = {
        type: 'EXACT',
        preset: null,
        monthIndex: currentDateFilterState.monthIndex,
        year: currentDateFilterState.year,
        exactDay: dateStr
      };

      document.querySelectorAll('.calendar-preset-btn').forEach(b => b.classList.remove('active'));
      renderCalendarGrid();
      currentJobPage = 1;
      renderAllJobsMasterTable();
    });
  });
}

function initJobsTableFilters() {
  const searchInput = document.getElementById('jobsTableFilterSearch');
  const urgencySelect = document.getElementById('filterUrgencySelect');
  const userSelect = document.getElementById('filterUserSelect');
  const paymentSelect = document.getElementById('filterPaymentSelect');

  const btnStatus = document.getElementById('btnStatusDropdown');
  const statusMenu = document.getElementById('statusDropdownMenu');
  const statusLabel = document.getElementById('lblStatusFilter');

  const btnCalendar = document.getElementById('btnDatePickerToggle');
  const calendarMenu = document.getElementById('datePickerPopoverMenu');
  const btnReset = document.getElementById('btnResetAllFilters');

  const btnPrevJobs = document.getElementById('btnPrevJobsPage');
  const btnNextJobs = document.getElementById('btnNextJobsPage');

  if (btnPrevJobs) btnPrevJobs.addEventListener('click', () => { if (currentJobPage > 1) { currentJobPage--; renderAllJobsMasterTable(); } });
  if (btnNextJobs) btnNextJobs.addEventListener('click', () => { currentJobPage++; renderAllJobsMasterTable(); });

  if (searchInput) searchInput.addEventListener('input', () => { currentJobPage = 1; renderAllJobsMasterTable(); });
  if (urgencySelect) urgencySelect.addEventListener('change', () => { currentJobPage = 1; renderAllJobsMasterTable(); });
  if (userSelect) userSelect.addEventListener('change', () => { currentJobPage = 1; renderAllJobsMasterTable(); });
  if (paymentSelect) paymentSelect.addEventListener('change', () => { currentJobPage = 1; renderAllJobsMasterTable(); });
  if (btnReset) btnReset.addEventListener('click', resetAllJobsFilters);

  // Status Dropdown Toggle & Checkbox handling
  if (btnStatus && statusMenu) {
    btnStatus.addEventListener('click', (e) => {
      e.stopPropagation();
      if (calendarMenu) calendarMenu.classList.remove('open');
      statusMenu.classList.toggle('open');
    });

    document.querySelectorAll('.filter-status-cb').forEach(cb => {
      cb.addEventListener('change', () => {
        const checked = Array.from(document.querySelectorAll('.filter-status-cb:checked')).map(c => c.value);
        if (statusLabel) {
          statusLabel.textContent = checked.length > 0 ? `${checked.length} Selected` : 'All Statuses';
        }
        renderAllJobsMasterTable();
      });
    });
  }

  // Calendar Popover Toggle & Navigation
  if (btnCalendar && calendarMenu) {
    btnCalendar.addEventListener('click', (e) => {
      e.stopPropagation();
      if (statusMenu) statusMenu.classList.remove('open');
      calendarMenu.classList.toggle('open');
    });

    const prevMonthBtn = calendarMenu.querySelector('.cal-nav-prev');
    const nextMonthBtn = calendarMenu.querySelector('.cal-nav-next');

    if (prevMonthBtn) {
      prevMonthBtn.addEventListener('click', () => {
        if (currentDateFilterState.monthIndex === 0) {
          currentDateFilterState.monthIndex = 11;
          currentDateFilterState.year -= 1;
        } else {
          currentDateFilterState.monthIndex -= 1;
        }
        currentDateFilterState.type = 'MONTH';
        currentDateFilterState.preset = null;
        document.querySelectorAll('.calendar-preset-btn').forEach(b => b.classList.remove('active'));
        renderCalendarGrid();
        renderAllJobsMasterTable();
      });
    }

    if (nextMonthBtn) {
      nextMonthBtn.addEventListener('click', () => {
        if (currentDateFilterState.monthIndex === 11) {
          currentDateFilterState.monthIndex = 0;
          currentDateFilterState.year += 1;
        } else {
          currentDateFilterState.monthIndex += 1;
        }
        currentDateFilterState.type = 'MONTH';
        currentDateFilterState.preset = null;
        document.querySelectorAll('.calendar-preset-btn').forEach(b => b.classList.remove('active'));
        renderCalendarGrid();
        renderAllJobsMasterTable();
      });
    }
  }

  // Close Popovers on Click Outside
  document.addEventListener('click', (e) => {
    if (statusMenu && !statusMenu.contains(e.target) && btnStatus && !btnStatus.contains(e.target)) {
      statusMenu.classList.remove('open');
    }
    if (calendarMenu && !calendarMenu.contains(e.target) && btnCalendar && !btnCalendar.contains(e.target)) {
      calendarMenu.classList.remove('open');
    }
  });

  // Calendar Preset Buttons
  document.querySelectorAll('.calendar-preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.calendar-preset-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const preset = btn.getAttribute('data-preset');
      if (preset === 'all') {
        currentDateFilterState = { type: 'ALL', preset: 'all', monthIndex: 7, year: 2026, exactDay: null };
      } else {
        currentDateFilterState = { type: 'PRESET', preset: preset, monthIndex: 7, year: 2026, exactDay: null };
      }

      renderCalendarGrid();
      renderAllJobsMasterTable();
    });
  });

  const resetCalBtn = document.getElementById('btnResetCalendar');
  if (resetCalBtn) {
    resetCalBtn.addEventListener('click', () => {
      currentDateFilterState = { type: 'ALL', preset: 'all', monthIndex: 7, year: 2026, exactDay: null };
      document.querySelectorAll('.calendar-preset-btn').forEach(b => b.classList.remove('active'));
      const allBtn = document.querySelector('.calendar-preset-btn[data-preset="all"]');
      if (allBtn) allBtn.classList.add('active');
      renderCalendarGrid();
      renderAllJobsMasterTable();
    });
  }

  renderCalendarGrid();

  const globalSearch = document.getElementById('globalSearchInput');
  if (globalSearch) {
    globalSearch.addEventListener('input', (e) => {
      if (searchInput) {
        searchInput.value = e.target.value;
        renderAllJobsMasterTable();
      }
    });
  }
}

/* ==========================================================================
   4. Calculate Financial & KPI Summaries
   ========================================================================== */
function updateFinancialSummaryKPIs() {
  const totalCount = masterJobsDataset.length;
  const totalRevenue = masterJobsDataset.reduce((sum, j) => sum + j.jobRevenue, 0);
  const totalVendorCharges = masterJobsDataset.reduce((sum, j) => sum + j.vendorCharges, 0);
  const totalNetProfit = totalRevenue - totalVendorCharges;

  const countBadge = document.getElementById('jobsCountBadge');
  const jobsPageCount = document.getElementById('jobsPageTotalCount');
  const kpiTotal = document.getElementById('kpiTotalJobs');
  const kpiNew = document.getElementById('kpiNewJobs');
  const kpiPending = document.getElementById('kpiPendingJobs');
  const kpiProgress = document.getElementById('kpiProgressJobs');
  const kpiDone = document.getElementById('kpiDoneJobs');

  if (countBadge) countBadge.textContent = totalCount;
  if (jobsPageCount) jobsPageCount.textContent = totalCount;
  if (kpiTotal) kpiTotal.textContent = totalCount;

  const newCount = masterJobsDataset.filter(j => j.status === 'New').length;
  const pendingCount = masterJobsDataset.filter(j => j.status === 'Pending').length;
  const progressCount = masterJobsDataset.filter(j => j.status === 'In Progress').length;
  const doneCount = masterJobsDataset.filter(j => j.status === 'Done').length;

  if (kpiNew) kpiNew.textContent = newCount;
  if (kpiPending) kpiPending.textContent = pendingCount;
  if (kpiProgress) kpiProgress.textContent = progressCount;
  if (kpiDone) kpiDone.textContent = doneCount;

  const revEl = document.getElementById('jobsPageTotalRevenue');
  const vendorEl = document.getElementById('jobsPageTotalVendorCharges');
  const profitEl = document.getElementById('jobsPageTotalNetProfit');

  if (revEl) revEl.textContent = `$${totalRevenue.toLocaleString('en-US', { minimumFractionDigits: 0 })}`;
  if (vendorEl) vendorEl.textContent = `$${totalVendorCharges.toLocaleString('en-US', { minimumFractionDigits: 0 })}`;
  if (profitEl) profitEl.textContent = `$${totalNetProfit.toLocaleString('en-US', { minimumFractionDigits: 0 })}`;
}

/* Helper Actions */
function deleteJobOrder(id) {
  if (confirm(`Are you sure you want to remove Work Order #${id}?`)) {
    masterJobsDataset = masterJobsDataset.filter(j => j.id !== id);
    renderAllJobsMasterTable();
    renderDashboardActiveJobs();
    showToast(`Work Order #${id} removed`);
  }
}

function viewJobDetails(id) {
  window.location.href = 'job-detail.html';
}

function getStatusClass(status) {
  switch (status) {
    case 'Pending': return 'pending';
    case 'New': return 'new';
    case 'Scheduled': return 'scheduled';
    case 'In Progress': return 'in-progress';
    case 'Done': return 'done';
    case 'Cancelled': return 'cancelled';
    default: return 'new';
  }
}

/* Accordions Component */
function initAccordions() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const parentItem = header.parentElement;
      const isOpen = parentItem.classList.contains('expanded');
      if (isOpen) {
        parentItem.classList.remove('expanded');
      } else {
        parentItem.classList.add('expanded');
      }
    });
  });
}

/* Onboarding Task List Toggle */
function initTaskList() {
  const checkBtns = document.querySelectorAll('.task-check-btn');
  const badgeEl = document.getElementById('taskCounterBadge');

  checkBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('checked');
      btn.classList.toggle('unchecked');

      if (btn.classList.contains('checked')) {
        btn.innerHTML = `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
      } else {
        btn.innerHTML = '';
      }

      const totalTasks = checkBtns.length;
      const checkedTasks = document.querySelectorAll('.task-check-btn.checked').length;
      if (badgeEl) badgeEl.textContent = `${checkedTasks}/${totalTasks}`;
    });
  });
}

/* Dynamic CRM Modal System */
function initModals() {
  const backdrop = document.getElementById('crmModalBackdrop');
  const closeBtn = document.getElementById('closeModalBtn');
  const cancelBtn = document.getElementById('cancelModalBtn');
  const form = document.getElementById('crmModalForm');

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (cancelBtn) cancelBtn.addEventListener('click', closeModal);
  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeModal();
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const modalType = form.getAttribute('data-modal-type') || 'job';
      handleModalSubmit(modalType);
      closeModal();
    });
  }
}

function editJobOrder(id) {
  const job = masterJobsDataset.find(j => j.id === id);
  if (!job) return;
  openCRMModal('edit-job', job);
}

function openCRMModal(type, data = null) {
  const backdrop = document.getElementById('crmModalBackdrop');
  const title = document.getElementById('modalTitle');
  const fieldsContainer = document.getElementById('modalDynamicFields');
  const form = document.getElementById('crmModalForm');
  const submitBtn = document.getElementById('modalSubmitBtn');

  if (!backdrop || !fieldsContainer) return;
  form.setAttribute('data-modal-type', type);
  if (data && data.id) {
    form.setAttribute('data-edit-id', data.id);
  } else {
    form.removeAttribute('data-edit-id');
  }

  if (type === 'job' || type === 'edit-job') {
    const isEdit = type === 'edit-job';
    title.textContent = isEdit ? 'Edit Work Order' : 'Create New Work Order';
    if (submitBtn) submitBtn.textContent = isEdit ? 'Update Work Order' : 'Save Entry';

    const storeName = data ? data.storeName : '';
    const location = data ? (data.location || 'Dallas, TX') : '';
    const storeAddress = data ? data.storeAddress : '';
    const issueDesc = data ? (data.issueDescription || 'Describe technical issue in complete paragraphs...') : '';
    const designation = data ? data.designation : '';
    const assignedUser = data ? data.assignedUser : '';
    const jobRevenue = data ? data.jobRevenue : '';
    const createdAt = data ? (data.createdAt || new Date().toISOString().slice(0, 16)) : new Date().toISOString().slice(0, 16);
    const slaDate = data ? (data.slaDate || '') : '';
    const urgency = data ? data.urgency : 'Within SLA';
    const w9Mandatory = data ? (data.w9Mandatory || 'No') : 'No';

    fieldsContainer.innerHTML = `
      <div class="modal-form-grid-2col">
        <div class="form-group">
          <label class="form-label">STORE NAME *</label>
          <input type="text" id="mStoreName" class="form-control" value="${escapeHTML(storeName)}" placeholder="e.g. Target Store #2401" required>
        </div>
        <div class="form-group">
          <label class="form-label">LOCATION *</label>
          <input type="text" id="mLocation" class="form-control" value="${escapeHTML(location)}" placeholder="e.g. Dallas, TX" required>
        </div>

        <div class="form-group modal-form-full">
          <label class="form-label">FULL ADDRESS *</label>
          <input type="text" id="mStoreAddress" class="form-control" value="${escapeHTML(storeAddress)}" placeholder="e.g. 1400 Low Street, Dallas, TX 75201" required>
        </div>

        <div class="form-group modal-form-full">
          <label class="form-label">ISSUE DESCRIPTION *</label>
          <textarea id="mIssueDescription" class="form-control modal-textarea" rows="3" placeholder="Describe technical issue in complete paragraphs..." required>${escapeHTML(issueDesc)}</textarea>
        </div>

        <div class="modal-form-grid-3col">
          <div class="form-group">
            <label class="form-label">DESIGNATION SCOPE *</label>
            <input type="text" id="mDesignation" class="form-control" value="${escapeHTML(designation)}" placeholder="e.g. Lead HVAC Tech" required>
          </div>
          <div class="form-group">
            <label class="form-label">ASSIGN STAFF TO</label>
            <select id="mAssignedUser" class="form-control">
              <option value="" ${!assignedUser ? 'selected' : ''}>-- Leave Unassigned --</option>
              <option value="Sophia Martinez" ${assignedUser === 'Sophia Martinez' ? 'selected' : ''}>Sophia Martinez</option>
              <option value="Alex Morgan" ${assignedUser === 'Alex Morgan' ? 'selected' : ''}>Alex Morgan</option>
              <option value="Marcus Vance" ${assignedUser === 'Marcus Vance' ? 'selected' : ''}>Marcus Vance</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">TOTAL JOB AMOUNT ($)</label>
            <input type="number" step="0.01" id="mJobRevenue" class="form-control" value="${jobRevenue}" placeholder="0.00">
          </div>
        </div>

        <hr class="modal-section-divider">

        <div class="form-group">
          <label class="form-label">JOB ADD DATE (CREATED AT)</label>
          <input type="datetime-local" id="mCreatedAt" class="form-control" value="${createdAt}">
        </div>
        <div class="form-group">
          <label class="form-label">JOB SLA DATE</label>
          <input type="datetime-local" id="mSlaDate" class="form-control" value="${slaDate}">
        </div>

        <hr class="modal-section-divider">

        <div class="form-group">
          <label class="form-label">URGENCY PRIORITY</label>
          <div class="modal-radio-group">
            <label class="modal-radio-label"><input type="radio" name="mUrgencyRadio" value="Within SLA" ${urgency === 'Within SLA' ? 'checked' : ''}> <span>Within SLA</span></label>
            <label class="modal-radio-label urgent"><input type="radio" name="mUrgencyRadio" value="Urgent" ${urgency === 'Urgent' ? 'checked' : ''}> <span>Urgent</span></label>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">W9 CLEARANCE MANDATORY</label>
          <div class="modal-radio-group">
            <label class="modal-radio-label"><input type="radio" name="mW9MandatoryRadio" value="No" ${w9Mandatory === 'No' ? 'checked' : ''}> <span>No</span></label>
            <label class="modal-radio-label"><input type="radio" name="mW9MandatoryRadio" value="Yes" ${w9Mandatory === 'Yes' ? 'checked' : ''}> <span>Yes</span></label>
          </div>
        </div>

        <hr class="modal-section-divider">

        <div class="form-group modal-form-full">
          <label class="form-label">ATTACHED PICTURES (MAX 10, JPG/PNG, MAX 5MB EACH)</label>
          <div class="modal-dropzone-box" id="modalDropzoneBtn">
            <input type="file" id="modalFilesInput" multiple accept="image/png,image/jpeg,image/webp" style="display:none;">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#787A7D" stroke-width="1.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
            <p class="dropzone-text"><strong>Upload multiple files</strong> or drag and drop them here<br><span class="dropzone-sub">PNG, JPG, WEBP up to 5MB</span></p>
            <div id="modalFilesPreview" class="modal-files-preview-grid"></div>
          </div>
        </div>
      </div>
    `;

    setTimeout(() => {
      const dropzone = document.getElementById('modalDropzoneBtn');
      const fileInput = document.getElementById('modalFilesInput');
      const previewGrid = document.getElementById('modalFilesPreview');

      if (dropzone && fileInput) {
        dropzone.addEventListener('click', (e) => {
          if (e.target.tagName !== 'INPUT') fileInput.click();
        });

        fileInput.addEventListener('change', (e) => {
          if (e.target.files && previewGrid) {
            previewGrid.innerHTML = '';
            Array.from(e.target.files).slice(0, 10).forEach(file => {
              const chip = document.createElement('span');
              chip.className = 'modal-file-chip';
              chip.innerHTML = `🖼️ ${escapeHTML(file.name)}`;
              previewGrid.appendChild(chip);
            });
          }
        });
      }
    }, 50);
  } else if (type === 'vendor' || type === 'edit-vendor') {
    const isEdit = type === 'edit-vendor';
    title.textContent = isEdit ? 'Edit Vendor Partner' : 'Add Certified Vendor Partner';
    if (submitBtn) submitBtn.textContent = isEdit ? 'Update Vendor' : 'Save Entry';

    const vName = data ? data.name : '';
    const vType = data ? data.type : 'Electrician';
    const vLocation = data ? data.location : '';
    const vPhone = data ? data.phone : '';
    const vSecondaryPhone = data ? data.secondaryPhone : '';
    const vRemark = data ? (data.remark || '') : '';

    const allTradesList = [
      "Electrician", "HVAC", "Plumbing", "Fire Protection", "Roofing", "Window Cleaning",
      "Anything", "Awnings Replacement", "Carpet / Duct / Tiles Cleaning", "Carpet Cleaner",
      "Carpet Tiles Replacement", "Fences / Roll up Gates / Doors", "Fire Inspection & Extinguisher",
      "Glass Replacement", "Handyman", "Handyman / Electrician", "Locksmith", "Locksmith & Glass Work",
      "Locksmith, HVAC, Plumbing, Cleaner", "Painter", "Signage Cleaning", "Signage Company",
      "Snow Removing", "Tint Removal", "Window Cleaner", "Window Cleaner / Handyman", "Window Replacement", "Windows Cleaning"
    ];

    const tradeSelectOptions = allTradesList.map(t =>
      `<option value="${escapeHTML(t)}" ${vType === t ? 'selected' : ''}>${escapeHTML(t)}</option>`
    ).join('');

    fieldsContainer.innerHTML = `
      <div class="modal-form-grid-2col">
        <div class="form-group modal-form-full">
          <label class="form-label">VENDOR NAME *</label>
          <input type="text" id="mVendorName" class="form-control" value="${escapeHTML(vName)}" placeholder="e.g. Apex Electrical Solutions" required>
        </div>

        <div class="form-group">
          <label class="form-label">VENDOR TYPE *</label>
          <select id="mVendorType" class="form-control" required>
            ${tradeSelectOptions}
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">LOCATION *</label>
          <input type="text" id="mVendorLocation" class="form-control" value="${escapeHTML(vLocation)}" placeholder="e.g. Chicago, IL" required>
        </div>

        <div class="form-group modal-form-full">
          <label class="form-label">VENDOR PHONE NUMBER(S) *</label>
          <div id="vendorPhoneNumbersContainer" style="display:flex; flex-direction:column; gap:10px;">
            <div class="vendor-phone-card-row">
              <div class="phone-field-wrapper">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <input type="text" class="form-control vendor-phone-input" value="${escapeHTML(vPhone)}" placeholder="Primary Phone e.g. +1 (800) 555-0199" required>
              </div>
              <button type="button" class="btn-add-phone-icon" onclick="addVendorPhoneRow()" title="Add Another Phone Number">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              </button>
              <button type="button" class="btn-remove-phone-row" onclick="removePhoneRow(this)" title="Remove Number">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
              </button>
            </div>
            ${vSecondaryPhone ? `
              <div class="vendor-phone-card-row">
                <div class="phone-field-wrapper">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <input type="text" class="form-control vendor-phone-input" value="${escapeHTML(vSecondaryPhone)}" placeholder="Secondary Phone e.g. +1 (312) 555-0144">
                </div>
                <button type="button" class="btn-add-phone-icon" onclick="addVendorPhoneRow()" title="Add Another Phone Number">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </button>
                <button type="button" class="btn-remove-phone-row" onclick="removePhoneRow(this)" title="Remove Number">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                </button>
              </div>
            ` : ''}
          </div>
        </div>

        <div class="form-group modal-form-full">
          <label class="form-label">OVERALL REMARK / COMMENT</label>
          <textarea id="mVendorRemark" class="form-control modal-textarea" rows="2" placeholder="e.g. Good Vendor, Fast Response, W9 Certified...">${escapeHTML(vRemark)}</textarea>
        </div>
      </div>
    `;
  } else if (type === 'user' || type === 'edit-user') {
    const isEdit = type === 'edit-user';
    title.textContent = isEdit ? 'Edit User Account' : 'Add System User / Contractor';
    if (submitBtn) submitBtn.textContent = isEdit ? 'Update Account' : 'Save Entry';

    const uLogin = data ? data.loginName : '';
    const uName = data ? data.fullName : '';
    const uPass = data ? data.password : '';
    const uRole = data ? data.systemRole : 'User / Field Contractor';
    const uStatus = data ? data.accountStatus : 'Active / Operational';

    fieldsContainer.innerHTML = `
      <div class="modal-form-grid-2col">
        <div class="form-group">
          <label class="form-label">LOGIN NAME *</label>
          <input type="text" id="mUserLogin" class="form-control" value="${escapeHTML(uLogin)}" placeholder="e.g. alex_morgan" required>
        </div>
        <div class="form-group">
          <label class="form-label">FULL NAME *</label>
          <input type="text" id="mUserName" class="form-control" value="${escapeHTML(uName)}" placeholder="e.g. Alex Morgan" required>
        </div>
        <div class="form-group">
          <label class="form-label">PASSWORD *</label>
          <input type="password" id="mUserPassword" class="form-control" value="${escapeHTML(uPass)}" placeholder="••••••••" required>
        </div>
        <div class="form-group">
          <label class="form-label">SYSTEM ROLE *</label>
          <select id="mUserRole" class="form-control" required>
            <option value="User" ${uRole === 'User' ? 'selected' : ''}>User</option>
            <option value="Team Lead" ${uRole === 'Team Lead' ? 'selected' : ''}>Team Lead</option>
            <option value="Administrator" ${uRole === 'Administrator' ? 'selected' : ''}>Administrator</option>
          </select>
        </div>
        <div class="form-group modal-form-full">
          <label class="form-label">INITIAL ACCOUNT STATUS *</label>
          <select id="mUserStatus" class="form-control" required>
            <option value="Active / Operational" ${uStatus === 'Active / Operational' ? 'selected' : ''}>Active / Operational</option>
            <option value="Suspended / Blocked" ${uStatus === 'Suspended / Blocked' ? 'selected' : ''}>Suspended / Blocked</option>
          </select>
        </div>
      </div>
    `;
  } else if (type === 'payment') {
    title.textContent = 'Record Job Invoice Payment';
    if (submitBtn) submitBtn.textContent = 'Save Entry';
    fieldsContainer.innerHTML = `
      <div class="form-group">
        <label class="form-label">Select Work Order</label>
        <select id="mPaymentJobId" class="form-control">
          ${masterJobsDataset.map(j => `<option value="${j.id}">#${j.id} - ${j.storeName} (${j.designation})</option>`).join('')}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Payment Amount ($)</label>
        <input type="number" step="0.01" id="mPaymentAmount" class="form-control" placeholder="750.00" required>
      </div>
      <div class="form-group">
        <label class="form-label">Payment Method</label>
        <select id="mPaymentMethod" class="form-control">
          <option value="ACH Transfer">ACH Direct Deposit</option>
          <option value="Credit Card">Corporate Credit Card</option>
          <option value="Wire">Wire Transfer</option>
        </select>
      </div>
    `;
  }

  backdrop.classList.add('active');
}

function addVendorPhoneRow(value = '') {
  const container = document.getElementById('vendorPhoneNumbersContainer');
  if (!container) return;
  const count = container.querySelectorAll('.vendor-phone-card-row').length + 1;
  const row = document.createElement('div');
  row.className = 'vendor-phone-card-row';
  row.innerHTML = `
    <div class="phone-field-wrapper">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
      <input type="text" class="form-control vendor-phone-input" value="${escapeHTML(value)}" placeholder="Phone #${count} e.g. +1 (800) 555-0000">
    </div>
    <button type="button" class="btn-add-phone-icon" onclick="addVendorPhoneRow()" title="Add Another Phone Number">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
    </button>
    <button type="button" class="btn-remove-phone-row" onclick="removePhoneRow(this)" title="Remove Number">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
    </button>
  `;
  container.appendChild(row);
}

function removePhoneRow(btn) {
  const container = document.getElementById('vendorPhoneNumbersContainer');
  if (container && container.querySelectorAll('.vendor-phone-card-row').length > 1) {
    btn.parentElement.remove();
  } else {
    showToast('At least one phone number is required!');
  }
}

function closeModal() {
  const backdrop = document.getElementById('crmModalBackdrop');
  if (backdrop) backdrop.classList.remove('active');
}

function handleModalSubmit(type) {
  const form = document.getElementById('crmModalForm');

  if (type === 'job' || type === 'edit-job') {
    const storeName = document.getElementById('mStoreName').value;
    const storeAddress = document.getElementById('mStoreAddress').value;
    const designation = document.getElementById('mDesignation').value;
    const assignedUser = document.getElementById('mAssignedUser').value || 'Unassigned';
    const jobRevenue = parseFloat(document.getElementById('mJobRevenue').value) || 0;
    const urgencyRadio = document.querySelector('input[name="mUrgencyRadio"]:checked');
    const urgency = urgencyRadio ? urgencyRadio.value : 'Within SLA';

    const initials = assignedUser !== 'Unassigned'
      ? assignedUser.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
      : 'OP';

    if (type === 'edit-job' && form) {
      const editId = parseInt(form.getAttribute('data-edit-id'), 10);
      const existingJob = masterJobsDataset.find(j => j.id === editId);
      if (existingJob) {
        existingJob.storeName = storeName;
        existingJob.storeAddress = storeAddress;
        existingJob.designation = designation;
        existingJob.assignedUser = assignedUser;
        existingJob.assignedAvatar = initials;
        existingJob.jobRevenue = jobRevenue;
        existingJob.urgency = urgency;
        showToast(`Work Order #${editId} updated successfully!`);
      }
    } else {
      const newJob = {
        id: Date.now() % 10000,
        storeName,
        storeAddress,
        designation,
        assignedUser,
        assignedAvatar: initials,
        addedDate: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
        vendorCharges: 450.00,
        jobRevenue,
        urgency,
        status: 'New'
      };
      masterJobsDataset.unshift(newJob);
      showToast(`New Work Order for ${storeName} created successfully!`);
    }

    renderDashboardActiveJobs();
    renderAllJobsMasterTable();
  } else if (type === 'vendor' || type === 'edit-vendor') {
    const vName = document.getElementById('mVendorName').value.trim();
    const vType = document.getElementById('mVendorType').value;
    const vLocation = document.getElementById('mVendorLocation').value.trim();
    const vRemark = document.getElementById('mVendorRemark').value.trim();

    const phoneInputs = Array.from(document.querySelectorAll('.vendor-phone-input'))
      .map(input => input.value.trim())
      .filter(val => val.length > 0);

    const primaryPhone = phoneInputs[0] || '+1 (800) 555-0000';
    const secondaryPhone = phoneInputs.slice(1).join(' / ');

    const initials = vName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) || 'VN';

    if (type === 'edit-vendor' && form) {
      const editId = parseInt(form.getAttribute('data-edit-id'), 10);
      const existingVendor = masterVendorsDataset.find(v => v.id === editId);
      if (existingVendor) {
        existingVendor.name = vName;
        existingVendor.avatar = initials;
        existingVendor.type = vType;
        existingVendor.location = vLocation;
        existingVendor.phone = primaryPhone;
        existingVendor.secondaryPhone = secondaryPhone;
        existingVendor.remark = vRemark;
        showToast(`Vendor "${vName}" updated successfully!`);
      }
    } else {
      const newVendor = {
        id: Date.now() % 10000,
        name: vName,
        avatar: initials,
        phone: primaryPhone,
        secondaryPhone: secondaryPhone,
        type: vType,
        location: vLocation,
        remark: vRemark
      };
      masterVendorsDataset.unshift(newVendor);
      showToast(`Vendor "${vName}" added successfully!`);
    }

    renderMasterVendorsTable();
  } else if (type === 'user' || type === 'edit-user') {
    const uLogin = document.getElementById('mUserLogin').value.trim();
    const uName = document.getElementById('mUserName').value.trim();
    const uPass = document.getElementById('mUserPassword').value;
    const uRole = document.getElementById('mUserRole').value;
    const uStatus = document.getElementById('mUserStatus').value;

    const initials = uName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) || 'US';

    if (type === 'edit-user' && form) {
      const editId = parseInt(form.getAttribute('data-edit-id'), 10);
      const existingUser = masterUsersDataset.find(u => u.id === editId);
      if (existingUser) {
        existingUser.loginName = uLogin;
        existingUser.fullName = uName;
        existingUser.password = uPass;
        existingUser.systemRole = uRole;
        existingUser.accountStatus = uStatus;
        existingUser.avatar = initials;
        showToast(`User account "${uName}" updated!`);
      }
    } else {
      const newUser = {
        id: Date.now() % 10000,
        loginName: uLogin,
        fullName: uName,
        password: uPass,
        systemRole: uRole,
        accountStatus: uStatus,
        avatar: initials
      };
      masterUsersDataset.unshift(newUser);
      showToast(`User account "${uName}" created successfully!`);
    }

    renderMasterUsersCards();
  } else if (type === 'payment') {
    const amt = document.getElementById('mPaymentAmount').value;
    showToast(`Payment of $${amt} recorded successfully!`);
  }
}

function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
    <span>${escapeHTML(message)}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function escapeHTML(str) {
  return String(str).replace(/[&<>"']/g, function (m) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[m];
  });
}

/* Work Order Detail Configuration Controls Interactive Toggles */
function initWorkOrderConfigControls() {
  // 1. Radio Pill Groups (Urgency & W9 Clearance)
  const radioGroups = document.querySelectorAll('.radio-pill-group');
  radioGroups.forEach(group => {
    const pills = group.querySelectorAll('.radio-pill');
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        const radio = pill.querySelector('input[type="radio"]');
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        if (radio) {
          radio.checked = true;
        }
        showToast(`Updated: ${radio ? radio.value : pill.innerText.trim()}`);
      });
    });
  });

  // 2. Status Position Buttons Grid
  const statusButtons = document.querySelectorAll('.status-pos-btn');
  const specStatusBadge = document.querySelector('.spec-card-header .status-pill-badge');
  statusButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      statusButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const newStatus = btn.innerText.trim();
      showToast(`Work Order Status set to: ${newStatus}`);

      if (specStatusBadge) {
        specStatusBadge.textContent = newStatus;
        const cls = getStatusClass(newStatus);
        if (cls === 'done') {
          specStatusBadge.className = 'status-pill-badge done-badge';
        } else {
          specStatusBadge.className = `status-pill-badge badge-status ${cls}`;
        }
      }
    });
  });

  // 3. Save Changes Button
  const saveBtn = document.querySelector('.btn-save-changes');
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      showToast('Work order configuration changes saved successfully!');
    });
  }

  // 4. Delete Work Order Button
  const deleteBtn = document.querySelector('.btn-delete-order');
  if (deleteBtn) {
    deleteBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to permanently delete this work order?')) {
        showToast('Work Order WO-2026-00109 deleted');
        setTimeout(() => {
          window.location.href = 'jobs.html';
        }, 1200);
      }
    });
  }

  initCommentsAndAttachments();
}

/* Comments & Attachments System with Reactions and W9 Auto-Linking */
function initCommentsAndAttachments() {
  let pendingAttachment = null; // { type: 'general' | 'w9', name: string }

  const btnAttachGen = document.getElementById('btnAttachGeneral');
  const btnAttachW9 = document.getElementById('btnAttachW9Doc');
  const genInput = document.getElementById('commentGeneralAttachmentInput');
  const w9Input = document.getElementById('commentW9FileInput');
  const previewBox = document.getElementById('attachedFilePreviewBox');
  const btnPost = document.getElementById('btnPostComment');
  const textarea = document.getElementById('commentTextarea');
  const commentsList = document.getElementById('commentsList');
  const w9Container = document.getElementById('w9FormCardContainer');

  if (!btnPost || !textarea || !commentsList) return;

  // Auto-expand textarea height dynamically with smooth scrolling after 220px
  textarea.addEventListener('input', () => {
    textarea.style.height = 'auto';
    textarea.style.height = Math.min(textarea.scrollHeight, 220) + 'px';
  });

  // General Attachment Button (📎)
  if (btnAttachGen && genInput) {
    btnAttachGen.addEventListener('click', () => genInput.click());
    genInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        const name = e.target.files[0].name;
        pendingAttachment = { type: 'general', name: name };
        renderAttachmentPreview(`📎 ${name}`);
        showToast(`General file attached: ${name}`);
      }
    });
  }

  // W9 Attachment Button (📄 Attach W9 Doc)
  if (btnAttachW9 && w9Input) {
    btnAttachW9.addEventListener('click', () => w9Input.click());
    w9Input.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        const name = e.target.files[0].name;
        pendingAttachment = { type: 'w9', name: name };
        renderAttachmentPreview(`📄 [W9 Doc] ${name}`);
        updateW9SidebarCard(name);
      }
    });
  }

  function updateW9SidebarCard(docName) {
    if (!w9Container) return;
    w9Container.innerHTML = `
      <div class="w9-doc-attached-card">
        <div class="w9-doc-top">
          <div class="w9-doc-icon">📄</div>
          <div class="w9-doc-info">
            <span class="w9-doc-name">${escapeHTML(docName)}</span>
            <span class="w9-doc-meta">Uploaded by Administrator • Just now</span>
          </div>
        </div>
        <div class="w9-doc-status-row">
          <span class="w9-status-pill">✓ Verified & Cleared</span>
          <span class="w9-action-link" id="btnRemoveW9Doc">Remove</span>
        </div>
      </div>
    `;
    showToast(`W9 Form "${docName}" attached to sidebar card!`);

    const removeW9Btn = document.getElementById('btnRemoveW9Doc');
    if (removeW9Btn) {
      removeW9Btn.addEventListener('click', () => {
        w9Container.innerHTML = `
          <div class="w9-dropzone-box">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
            <p>No W9 form attached yet.<br>Use the 📄 doc icon in the comment box to attach.</p>
          </div>
        `;
        showToast('W9 document removed.');
      });
    }
  }

  function renderAttachmentPreview(label) {
    if (!previewBox) return;
    previewBox.innerHTML = `
      <span>${escapeHTML(label)}</span>
      <span class="preview-remove-btn" id="btnRemovePreview">✕</span>
    `;
    previewBox.classList.add('active');

    const removeBtn = document.getElementById('btnRemovePreview');
    if (removeBtn) {
      removeBtn.addEventListener('click', () => {
        pendingAttachment = null;
        previewBox.classList.remove('active');
        previewBox.innerHTML = '';
        if (genInput) genInput.value = '';
        if (w9Input) w9Input.value = '';
      });
    }
  }

  // Post Comment Handler
  btnPost.addEventListener('click', () => {
    const text = textarea.value.trim();
    if (!text && !pendingAttachment) {
      showToast('Please enter a comment or attach a file!');
      return;
    }

    // Handle W9 Attachment (Routes ONLY to W9 Sidebar Card!)
    if (pendingAttachment && pendingAttachment.type === 'w9') {
      updateW9SidebarCard(pendingAttachment.name);

      // If user typed comment text alongside W9 doc, post text comment without W9 badge
      if (text) {
        postCommentToFeed(text, null);
      } else {
        showToast(`W9 Form "${pendingAttachment.name}" uploaded to W9 Form card!`);
      }
    } else {
      // General Attachment or text comment (Routes ONLY to Comments Feed!)
      postCommentToFeed(text, pendingAttachment);
      showToast('Comment posted successfully!');
    }

    // Reset Form
    textarea.value = '';
    textarea.style.height = 'auto';
    pendingAttachment = null;
    if (previewBox) {
      previewBox.classList.remove('active');
      previewBox.innerHTML = '';
    }
    if (genInput) genInput.value = '';
    if (w9Input) w9Input.value = '';
  });

  function postCommentToFeed(text, attachment) {
    const commentItem = document.createElement('div');
    commentItem.className = 'comment-item';

    let attachmentMarkup = '';
    if (attachment && attachment.type === 'general') {
      attachmentMarkup = `<div class="comment-attached-badge">📎 ${escapeHTML(attachment.name)}</div>`;
    }

    commentItem.innerHTML = `
      <div class="comment-item-avatar">AD</div>
      <div class="comment-item-body">
        <div class="comment-item-header">
          <span class="comment-author-name">Administrator</span>
          <span class="comment-time-tag">Just now</span>
        </div>
        ${text ? `<p class="comment-item-text">${escapeHTML(text)}</p>` : ''}
        ${attachmentMarkup}
        <div class="comment-item-reactions">
          <button class="reaction-btn like-btn" data-count="0">👍 <span class="like-count">0</span></button>
          <button class="reaction-btn dislike-btn" data-count="0">👎 <span class="dislike-count">0</span></button>
          <span class="comment-reply-link">Reply</span>
        </div>
      </div>
    `;

    commentsList.prepend(commentItem);
    bindReactionButtons(commentItem);
  }

  // Reaction Click Binding Function
  function bindReactionButtons(container) {
    const likeBtns = container.querySelectorAll('.like-btn');
    const dislikeBtns = container.querySelectorAll('.dislike-btn');

    likeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        let count = parseInt(btn.getAttribute('data-count') || '0', 10);
        if (btn.classList.contains('reacted')) {
          count--;
          btn.classList.remove('reacted');
        } else {
          count++;
          btn.classList.add('reacted');
        }
        btn.setAttribute('data-count', count);
        const counterSpan = btn.querySelector('.like-count');
        if (counterSpan) counterSpan.textContent = count;
      });
    });

    dislikeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        let count = parseInt(btn.getAttribute('data-count') || '0', 10);
        if (btn.classList.contains('reacted')) {
          count--;
          btn.classList.remove('reacted');
        } else {
          count++;
          btn.classList.add('reacted');
        }
        btn.setAttribute('data-count', count);
        const counterSpan = btn.querySelector('.dislike-count');
        if (counterSpan) counterSpan.textContent = count;
      });
    });
  }

  // Bind reactions for initial pre-filled comments
  bindReactionButtons(commentsList);
}

/* ==========================================================================
   Vendor Management Workspace Logic & Remark Modal System
   ========================================================================== */
const initialVendorsData = [
  {
    id: 201,
    name: "Apex Electrical Solutions",
    avatar: "AE",
    phone: "+1 (800) 555-0199",
    secondaryPhone: "+1 (312) 555-0144",
    type: "Electrician",
    location: "Chicago, IL",
    remark: "Good Vendor"
  },
  {
    id: 202,
    name: "ProClean Facilities",
    avatar: "PF",
    phone: "+1 (800) 555-0288",
    secondaryPhone: "+1 (312) 555-0211",
    type: "Window Cleaning",
    location: "Niles, IL",
    remark: ""
  },
  {
    id: 203,
    name: "Precision Plumbing Corp",
    avatar: "PP",
    phone: "+1 (800) 555-0377",
    secondaryPhone: "+1 (312) 555-0322",
    type: "Plumbing",
    location: "Evanston, IL",
    remark: "Preferred Partner"
  },
  {
    id: 204,
    name: "Titan HVAC Systems",
    avatar: "TH",
    phone: "+1 (800) 555-0466",
    secondaryPhone: "+1 (248) 555-0433",
    type: "HVAC",
    location: "West Bloomfield, MI",
    remark: ""
  },
  {
    id: 205,
    name: "Shield Fire Protection",
    avatar: "SF",
    phone: "+1 (800) 555-0555",
    secondaryPhone: "+1 (954) 555-0588",
    type: "Fire Protection",
    location: "Coral Springs, FL",
    remark: "Fast Response"
  },
  {
    id: 206,
    name: "Apex Roofing & Repair",
    avatar: "AR",
    phone: "+1 (800) 555-0644",
    secondaryPhone: "+1 (312) 555-0677",
    type: "Roofing",
    location: "Schaumburg, IL",
    remark: ""
  },
  {
    id: 207,
    name: "Benchmark Locksmiths",
    avatar: "BL",
    phone: "+1 (800) 555-0722",
    secondaryPhone: "+1 (312) 555-0799",
    type: "Locksmith",
    location: "Oak Brook, IL",
    remark: "Available 24/7"
  },
  {
    id: 208,
    name: "Allied Carpentry & Doors",
    avatar: "AC",
    phone: "+1 (800) 555-0811",
    secondaryPhone: "+1 (630) 555-0844",
    type: "Fences / Roll up Gates / Doors",
    location: "Aurora, IL",
    remark: "Good Vendor"
  },
  {
    id: 209,
    name: "Metro Glass Replacement",
    avatar: "MG",
    phone: "+1 (800) 555-0933",
    secondaryPhone: "+1 (630) 555-0966",
    type: "Glass Replacement",
    location: "Naperville, IL",
    remark: ""
  },
  {
    id: 210,
    name: "Vantage Painting & Decor",
    avatar: "VP",
    phone: "+1 (800) 555-1044",
    secondaryPhone: "+1 (815) 555-1077",
    type: "Painter",
    location: "Joliet, IL",
    remark: "Preferred Partner"
  },
  {
    id: 211,
    name: "CleanTech Carpet & Tile",
    avatar: "CC",
    phone: "+1 (800) 555-1155",
    secondaryPhone: "+1 (847) 555-1188",
    type: "Carpet / Duct / Tiles Cleaning",
    location: "Des Plaines, IL",
    remark: "Fast Response"
  },
  {
    id: 212,
    name: "Midwest Awnings Corp",
    avatar: "MA",
    phone: "+1 (800) 555-1266",
    secondaryPhone: "+1 (847) 555-1299",
    type: "Awnings Replacement",
    location: "Elgin, IL",
    remark: ""
  },
  {
    id: 213,
    name: "Guardian Fire Inspection",
    avatar: "GF",
    phone: "+1 (800) 555-1377",
    secondaryPhone: "+1 (312) 555-1322",
    type: "Fire Inspection & Extinguisher",
    location: "Schaumburg, IL",
    remark: "Highly Recommended"
  },
  {
    id: 214,
    name: "Polar Chill HVAC Solutions",
    avatar: "PC",
    phone: "+1 (800) 555-1488",
    secondaryPhone: "+1 (847) 555-1411",
    type: "HVAC",
    location: "Highland Park, IL",
    remark: ""
  },
  {
    id: 215,
    name: "Quick Fix Handyman Services",
    avatar: "QF",
    phone: "+1 (800) 555-1599",
    secondaryPhone: "+1 (847) 555-1533",
    type: "Handyman / Electrician",
    location: "Skokie, IL",
    remark: "Good Vendor"
  }
];

let masterVendorsDataset = [...initialVendorsData];
let currentEditingRemarkVendorId = null;
let currentVendorPage = 1;
const VENDORS_PER_PAGE = 10;

function renderMasterVendorsTable() {
  const tbody = document.getElementById('masterVendorsTableBody');
  if (!tbody) return;

  const searchInput = document.getElementById('vendorsTableFilterSearch');
  const typeSelect = document.getElementById('filterVendorTypeSelect');
  const locationInput = document.getElementById('filterVendorLocationInput');

  const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
  const typeFilter = typeSelect ? typeSelect.value : 'ALL';
  const locationFilter = locationInput ? locationInput.value.toLowerCase().trim() : '';

  const filteredVendors = masterVendorsDataset.filter(v => {
    const matchesSearch = !searchTerm ||
      v.name.toLowerCase().includes(searchTerm) ||
      v.phone.toLowerCase().includes(searchTerm) ||
      v.type.toLowerCase().includes(searchTerm) ||
      v.location.toLowerCase().includes(searchTerm);

    const matchesType = (typeFilter === 'ALL') || (v.type === typeFilter);
    const matchesLocation = !locationFilter || v.location.toLowerCase().includes(locationFilter);

    return matchesSearch && matchesType && matchesLocation;
  });

  const countBadge = document.getElementById('vendorsCountBadge');
  const kpiTotal = document.getElementById('kpiTotalVendors');
  if (countBadge) countBadge.textContent = masterVendorsDataset.length;
  if (kpiTotal) kpiTotal.textContent = masterVendorsDataset.length;

  const totalFiltered = filteredVendors.length;
  const totalPages = Math.ceil(totalFiltered / VENDORS_PER_PAGE) || 1;

  if (currentVendorPage > totalPages) {
    currentVendorPage = totalPages;
  }

  const startIndex = (currentVendorPage - 1) * VENDORS_PER_PAGE;
  const endIndex = Math.min(startIndex + VENDORS_PER_PAGE, totalFiltered);
  const pagedVendors = filteredVendors.slice(startIndex, endIndex);

  // Update Pagination Controls UI
  const pagInfo = document.getElementById('vendorPaginationInfo');
  const pagPageNum = document.getElementById('vendorCurrentPageNum');
  const btnPrev = document.getElementById('btnPrevVendorsPage');
  const btnNext = document.getElementById('btnNextVendorsPage');

  if (pagInfo) {
    pagInfo.textContent = totalFiltered > 0
      ? `Showing ${startIndex + 1} to ${endIndex} of ${totalFiltered} Vendors`
      : `Showing 0 of 0 Vendors`;
  }
  if (pagPageNum) pagPageNum.textContent = currentVendorPage;
  if (btnPrev) btnPrev.disabled = (currentVendorPage <= 1);
  if (btnNext) btnNext.disabled = (currentVendorPage >= totalPages);

  if (pagedVendors.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align: center; padding: 24px; color: var(--text-muted);">
          No vendor partners found matching your search criteria.
        </td>
      </tr>
    `;
    return;
  }

  // Dynamically extract unique active trades from current dataset
  const activeVendorTrades = Array.from(new Set(masterVendorsDataset.map(item => item.type))).sort();

  tbody.innerHTML = pagedVendors.map(v => {
    const hasRemark = v.remark && v.remark.trim().length > 0;
    const remarkBtnMarkup = hasRemark
      ? `<button type="button" class="remark-btn has-remark" onclick="openRemarkModal(${v.id})">
           <span>${escapeHTML(v.remark)}</span>
           <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
         </button>`
      : `<button type="button" class="remark-btn add-remark" onclick="openRemarkModal(${v.id})">Add Remark</button>`;

    const vendorTradesList = Array.from(new Set([...activeVendorTrades, v.type])).sort();
    const typeOptions = vendorTradesList.map(trade => `
      <option value="${escapeHTML(trade)}" ${v.type === trade ? 'selected' : ''}>${escapeHTML(trade)}</option>
    `).join('');

    return `
      <tr>
        <td>
          <div class="user-assigned-badge">
            <span class="mini-avatar-circle" style="background: #25272A;">${escapeHTML(v.avatar)}</span>
            <div style="display:flex; flex-direction:column;">
              <span style="font-weight:700; color:var(--text-main);">${escapeHTML(v.name)}</span>
              <span style="font-size:11px; color:var(--text-muted);">Verified Partner</span>
            </div>
          </div>
        </td>
        <td>
          <div style="display:flex; flex-direction:column; gap:2px;">
            <span style="font-weight:600; font-size:12.5px;">${escapeHTML(v.phone)}</span>
            <span style="font-size:11px; color:var(--text-muted);">${escapeHTML(v.secondaryPhone)}</span>
          </div>
        </td>
        <td>
          <select class="badge-type-select" onchange="updateVendorType(${v.id}, this.value)">
            ${typeOptions}
          </select>
        </td>
        <td><span style="font-weight:600; font-size:12.5px; color:var(--text-main);">${escapeHTML(v.location)}</span></td>
        <td>${remarkBtnMarkup}</td>
        <td style="text-align: right;">
          <div class="table-actions-cell">
            <button class="table-action-btn" onclick="editVendor(${v.id})">Edit</button>
            <button class="table-action-btn" onclick="deleteVendor(${v.id})">Delete</button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function updateVendorType(vendorId, newType) {
  const v = masterVendorsDataset.find(item => item.id === vendorId);
  if (v) {
    v.type = newType;
    showToast(`Vendor "${v.name}" trade updated to ${newType}!`);
    renderMasterVendorsTable();
  }
}

function initVendorFilters() {
  const searchInput = document.getElementById('vendorsTableFilterSearch');
  const typeSelect = document.getElementById('filterVendorTypeSelect');
  const locationInput = document.getElementById('filterVendorLocationInput');
  const resetBtn = document.getElementById('btnResetVendorsFilters');

  const btnPrev = document.getElementById('btnPrevVendorsPage');
  const btnNext = document.getElementById('btnNextVendorsPage');

  if (searchInput) searchInput.addEventListener('input', () => { currentVendorPage = 1; renderMasterVendorsTable(); });
  if (typeSelect) typeSelect.addEventListener('change', () => { currentVendorPage = 1; renderMasterVendorsTable(); });
  if (locationInput) locationInput.addEventListener('input', () => { currentVendorPage = 1; renderMasterVendorsTable(); });

  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      if (currentVendorPage > 1) {
        currentVendorPage--;
        renderMasterVendorsTable();
      }
    });
  }

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      currentVendorPage++;
      renderMasterVendorsTable();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      if (typeSelect) typeSelect.value = 'ALL';
      if (locationInput) locationInput.value = '';
      currentVendorPage = 1;
      renderMasterVendorsTable();
      showToast('Vendor filters reset');
    });
  }

  const globalSearch = document.getElementById('globalSearchInput');
  if (globalSearch) {
    globalSearch.addEventListener('input', (e) => {
      if (searchInput) {
        searchInput.value = e.target.value;
        currentVendorPage = 1;
        renderMasterVendorsTable();
      }
    });
  }
}

/* Remark Modal Logic */
function initRemarkModal() {
  const backdrop = document.getElementById('remarkModalBackdrop');
  const closeBtn = document.getElementById('closeRemarkModalBtn');
  const cancelBtn = document.getElementById('cancelRemarkModalBtn');
  const form = document.getElementById('remarkForm');

  if (closeBtn) closeBtn.addEventListener('click', closeRemarkModal);
  if (cancelBtn) cancelBtn.addEventListener('click', closeRemarkModal);
  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeRemarkModal();
    });
  }

  // Preset Chips
  document.querySelectorAll('.remark-chip-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.getAttribute('data-preset-val');
      const textarea = document.getElementById('txtVendorRemark');
      if (textarea) textarea.value = val;
    });
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const txt = document.getElementById('txtVendorRemark').value.trim();
      if (currentEditingRemarkVendorId) {
        const v = masterVendorsDataset.find(item => item.id === currentEditingRemarkVendorId);
        if (v) {
          v.remark = txt;
          showToast(`Remark updated for "${v.name}"!`);
          renderMasterVendorsTable();
        }
      }
      closeRemarkModal();
    });
  }
}

function openRemarkModal(vendorId) {
  const v = masterVendorsDataset.find(item => item.id === vendorId);
  if (!v) return;

  currentEditingRemarkVendorId = vendorId;
  const backdrop = document.getElementById('remarkModalBackdrop');
  const textarea = document.getElementById('txtVendorRemark');
  const title = document.getElementById('remarkModalTitle');

  if (textarea) textarea.value = v.remark || '';
  if (title) title.textContent = `Remark for ${v.name}`;
  if (backdrop) backdrop.classList.add('active');
}

function closeRemarkModal() {
  const backdrop = document.getElementById('remarkModalBackdrop');
  if (backdrop) backdrop.classList.remove('active');
  currentEditingRemarkVendorId = null;
}

function deleteVendor(id) {
  const v = masterVendorsDataset.find(item => item.id === id);
  if (!v) return;
  if (confirm(`Are you sure you want to remove vendor "${v.name}"?`)) {
    masterVendorsDataset = masterVendorsDataset.filter(item => item.id !== id);
    renderMasterVendorsTable();
    showToast(`Vendor "${v.name}" removed`);
  }
}

function editVendor(id) {
  const v = masterVendorsDataset.find(item => item.id === id);
  if (!v) return;
  openCRMModal('edit-vendor', v);
}

/* ==========================================================================
   User Management Cards Grid & Account Operations (NON-TABLE GRID)
   ========================================================================== */
function renderMasterUsersCards() {
  const container = document.getElementById('masterUsersGrid');
  if (!container) return;

  const searchInput = document.getElementById('usersFilterSearch');
  const roleSelect = document.getElementById('filterUserRoleSelect');
  const statusSelect = document.getElementById('filterUserStatusSelect');

  const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
  const roleFilter = roleSelect ? roleSelect.value : 'ALL';
  const statusFilter = statusSelect ? statusSelect.value : 'ALL';

  const filteredUsers = masterUsersDataset.filter(u => {
    const matchesSearch = !searchTerm ||
      u.fullName.toLowerCase().includes(searchTerm) ||
      u.loginName.toLowerCase().includes(searchTerm) ||
      u.systemRole.toLowerCase().includes(searchTerm);

    const matchesRole = (roleFilter === 'ALL') || (u.systemRole === roleFilter);
    const matchesStatus = (statusFilter === 'ALL') || (u.accountStatus === statusFilter);

    return matchesSearch && matchesRole && matchesStatus;
  });

  const countBadge = document.getElementById('usersCountBadge');
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

  container.innerHTML = filteredUsers.map(u => {
    const isActive = u.accountStatus === 'Active / Operational';
    const roleClass = u.systemRole === 'Administrator' ? 'administrator' : (u.systemRole === 'Team Lead' ? 'team-lead' : 'user');
    const statusClass = isActive ? 'active' : 'suspended';

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
          <button type="button" class="user-card-btn toggle-btn ${isActive ? 'suspend' : 'activate'}" onclick="toggleUserStatus(${u.id})">
            ${isActive ? 'Suspend' : 'Activate'}
          </button>
          <div class="user-action-group">
            <button type="button" class="user-card-btn edit-btn" onclick="editUserAccount(${u.id})">Edit</button>
            <button type="button" class="user-card-btn delete-btn" onclick="deleteUserAccount(${u.id})">Delete</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function initUserFilters() {
  const searchInput = document.getElementById('usersFilterSearch');
  const roleSelect = document.getElementById('filterUserRoleSelect');
  const statusSelect = document.getElementById('filterUserStatusSelect');
  const resetBtn = document.getElementById('btnResetUsersFilters');

  if (searchInput) searchInput.addEventListener('input', renderMasterUsersCards);
  if (roleSelect) roleSelect.addEventListener('change', renderMasterUsersCards);
  if (statusSelect) statusSelect.addEventListener('change', renderMasterUsersCards);

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      if (roleSelect) roleSelect.value = 'ALL';
      if (statusSelect) statusSelect.value = 'ALL';
      renderMasterUsersCards();
      showToast('User filters reset');
    });
  }

  const globalSearch = document.getElementById('globalSearchInput');
  if (globalSearch && searchInput) {
    globalSearch.addEventListener('input', (e) => {
      searchInput.value = e.target.value;
      renderMasterUsersCards();
    });
  }
}

function toggleUserStatus(userId) {
  const user = masterUsersDataset.find(u => u.id === userId);
  if (!user) return;
  if (user.accountStatus === 'Active / Operational') {
    user.accountStatus = 'Suspended / Blocked';
    showToast(`User account "@${user.loginName}" has been Suspended`);
  } else {
    user.accountStatus = 'Active / Operational';
    showToast(`User account "@${user.loginName}" is now Active`);
  }
  renderMasterUsersCards();
}

function deleteUserAccount(userId) {
  const user = masterUsersDataset.find(u => u.id === userId);
  if (!user) return;
  if (confirm(`Are you sure you want to permanently delete user account "@${user.loginName}"?`)) {
    masterUsersDataset = masterUsersDataset.filter(u => u.id !== userId);
    renderMasterUsersCards();
    showToast(`User account "@${user.loginName}" deleted`);
  }
}

function editUserAccount(userId) {
  const user = masterUsersDataset.find(u => u.id === userId);
  if (!user) return;
  openCRMModal('edit-user', user);
}

/* ==========================================================================
   AUDIT & ACTIVITY LOGS DATASET & FUNCTIONS
   ========================================================================== */
const initialAuditLogsData = [
  {
    id: 1,
    timestamp: "2026-08-14 03:22:15 UTC",
    userName: "Mahad Bukhari",
    avatar: "MB",
    action: "Status Changed",
    workOrder: "#WO-2026-00101",
    details: "Changed status from Pending Approval to In Progress (Technician En Route)"
  },
  {
    id: 2,
    timestamp: "2026-08-14 02:45:10 UTC",
    userName: "Alex Morgan",
    avatar: "AM",
    action: "Created Work Order",
    workOrder: "#WO-2026-00116",
    details: "Created emergency repair dispatch for Store #554 (Miami Springs HVAC)"
  },
  {
    id: 3,
    timestamp: "2026-08-13 23:10:44 UTC",
    userName: "Sophia Martinez",
    avatar: "SM",
    action: "Attached W9 Doc",
    workOrder: "#WO-2026-00104",
    details: "Uploaded compliance document W9_Tax_2026_Ver.pdf for vendor TradeCraft"
  },
  {
    id: 4,
    timestamp: "2026-08-13 21:05:30 UTC",
    userName: "Marcus Vance",
    avatar: "MV",
    action: "Updated Vendor Trade",
    workOrder: "#WO-2026-00108",
    details: "Reassigned trade category from Plumbing to General Contracting"
  },
  {
    id: 5,
    timestamp: "2026-08-13 18:40:12 UTC",
    userName: "Sarah Jenkins",
    avatar: "SJ",
    action: "Status Changed",
    workOrder: "#WO-2026-00102",
    details: "Marked work order as Completed & Verified by store manager"
  },
  {
    id: 6,
    timestamp: "2026-08-13 16:15:00 UTC",
    userName: "Mahad Bukhari",
    avatar: "MB",
    action: "User Modified",
    workOrder: "N/A",
    details: "Promoted user account @alex_morgan to System Role 'Team Lead'"
  },
  {
    id: 7,
    timestamp: "2026-08-13 14:02:55 UTC",
    userName: "John Doe",
    avatar: "JD",
    action: "Deleted Record",
    workOrder: "#WO-2026-00095",
    details: "Removed duplicate invoice draft record #INV-8841 ($450.00)"
  },
  {
    id: 8,
    timestamp: "2026-08-13 11:30:20 UTC",
    userName: "Robert Smith",
    avatar: "RS",
    action: "Created Work Order",
    workOrder: "#WO-2026-00115",
    details: "Logged new preventive maintenance request for Store #312 (Tampa General)"
  },
  {
    id: 9,
    timestamp: "2026-08-12 22:18:05 UTC",
    userName: "Elena Rodriguez",
    avatar: "ER",
    action: "Status Changed",
    workOrder: "#WO-2026-00109",
    details: "Updated status from In Progress to Awaiting Invoice Payment"
  },
  {
    id: 10,
    timestamp: "2026-08-12 19:44:33 UTC",
    userName: "Mahad Bukhari",
    avatar: "MB",
    action: "Attached W9 Doc",
    workOrder: "#WO-2026-00111",
    details: "Attached signed vendor contract agreement agreement_final.pdf"
  },
  {
    id: 11,
    timestamp: "2026-08-12 17:12:40 UTC",
    userName: "Alex Morgan",
    avatar: "AM",
    action: "Updated Vendor Trade",
    workOrder: "#WO-2026-00103",
    details: "Updated primary contractor contact phone to (305) 555-0199"
  },
  {
    id: 12,
    timestamp: "2026-08-12 14:00:15 UTC",
    userName: "Marcus Vance",
    avatar: "MV",
    action: "Created Work Order",
    workOrder: "#WO-2026-00114",
    details: "Dispatched priority electrical inspection for Store #108"
  },
  {
    id: 13,
    timestamp: "2026-08-11 20:30:00 UTC",
    userName: "Sarah Jenkins",
    avatar: "SJ",
    action: "Status Changed",
    workOrder: "#WO-2026-00099",
    details: "Status escalated to Critical Priority due to refrigeration leak"
  },
  {
    id: 14,
    timestamp: "2026-08-11 16:22:11 UTC",
    userName: "Sophia Martinez",
    avatar: "SM",
    action: "User Modified",
    workOrder: "N/A",
    details: "Updated account status for @john_doe to 'Suspended / Blocked'"
  },
  {
    id: 15,
    timestamp: "2026-08-11 12:45:09 UTC",
    userName: "Mahad Bukhari",
    avatar: "MB",
    action: "Created Work Order",
    workOrder: "#WO-2026-00113",
    details: "Created work order for Store #402 (Orlando North Signage Repair)"
  },
  {
    id: 16,
    timestamp: "2026-08-10 09:15:30 UTC",
    userName: "Robert Smith",
    avatar: "RS",
    action: "Deleted Record",
    workOrder: "#WO-2026-00088",
    details: "Purged archived temporary log backup file #BAK-2026-08"
  }
];

let masterAuditLogsDataset = [...initialAuditLogsData];
let currentAuditPage = 1;
const AUDIT_PER_PAGE = 10;

function renderMasterAuditLogsTable() {
  const tableBody = document.getElementById('masterAuditTableBody');
  if (!tableBody) return;

  const searchInput = document.getElementById('auditFilterSearch');
  const actionSelect = document.getElementById('filterAuditActionSelect');
  const userSelect = document.getElementById('filterAuditUserSelect');

  const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
  const actionFilter = actionSelect ? actionSelect.value : 'ALL';
  const userFilter = userSelect ? userSelect.value : 'ALL';

  const filteredLogs = masterAuditLogsDataset.filter(log => {
    const matchesSearch = !searchTerm || 
      log.timestamp.toLowerCase().includes(searchTerm) ||
      log.userName.toLowerCase().includes(searchTerm) ||
      log.action.toLowerCase().includes(searchTerm) ||
      log.workOrder.toLowerCase().includes(searchTerm) ||
      log.details.toLowerCase().includes(searchTerm);

    const matchesAction = (actionFilter === 'ALL') || (log.action === actionFilter);
    const matchesUser = (userFilter === 'ALL') || (log.userName === userFilter);

    return matchesSearch && matchesAction && matchesUser;
  });

  const totalLogs = filteredLogs.length;
  const totalPages = Math.ceil(totalLogs / AUDIT_PER_PAGE) || 1;

  if (currentAuditPage > totalPages) currentAuditPage = totalPages;
  if (currentAuditPage < 1) currentAuditPage = 1;

  const startIndex = (currentAuditPage - 1) * AUDIT_PER_PAGE;
  const pageLogs = filteredLogs.slice(startIndex, startIndex + AUDIT_PER_PAGE);

  // Update Pagination Controls
  const paginationInfo = document.getElementById('auditPaginationInfo');
  const currentPageNum = document.getElementById('auditCurrentPageNum');
  const btnPrev = document.getElementById('btnPrevAuditPage');
  const btnNext = document.getElementById('btnNextAuditPage');

  if (paginationInfo) {
    const endDisplay = Math.min(startIndex + AUDIT_PER_PAGE, totalLogs);
    const startDisplay = totalLogs === 0 ? 0 : startIndex + 1;
    paginationInfo.textContent = `Showing ${startDisplay} to ${endDisplay} of ${totalLogs} Log Entries`;
  }
  if (currentPageNum) currentPageNum.textContent = currentAuditPage;
  if (btnPrev) btnPrev.disabled = (currentAuditPage <= 1);
  if (btnNext) btnNext.disabled = (currentAuditPage >= totalPages);

  if (pageLogs.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align: center; padding: 36px; color: var(--text-muted);">
          No audit log entries match your filter or search query.
        </td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = pageLogs.map(log => {
    let actionBadgeClass = 'updated';
    if (log.action.includes('Created')) actionBadgeClass = 'created';
    else if (log.action.includes('Status')) actionBadgeClass = 'status';
    else if (log.action.includes('Attached') || log.action.includes('W9')) actionBadgeClass = 'attached';
    else if (log.action.includes('Deleted')) actionBadgeClass = 'deleted';

    const woTagHtml = log.workOrder !== 'N/A' 
      ? `<a href="jobs.html" class="audit-workorder-tag">${escapeHTML(log.workOrder)}</a>`
      : `<span class="audit-workorder-tag" style="opacity: 0.6;">N/A</span>`;

    return `
      <tr>
        <td><span class="audit-timestamp">${escapeHTML(log.timestamp)}</span></td>
        <td>
          <div class="audit-user-cell">
            <div class="audit-user-avatar">${escapeHTML(log.avatar)}</div>
            <span class="audit-user-name">${escapeHTML(log.userName)}</span>
          </div>
        </td>
        <td><span class="action-badge ${actionBadgeClass}">${escapeHTML(log.action)}</span></td>
        <td>${woTagHtml}</td>
        <td><span style="font-size: 13px; color: var(--text-main);">${escapeHTML(log.details)}</span></td>
      </tr>
    `;
  }).join('');
}

function initAuditFilters() {
  const searchInput = document.getElementById('auditFilterSearch');
  const actionSelect = document.getElementById('filterAuditActionSelect');
  const userSelect = document.getElementById('filterAuditUserSelect');
  const resetBtn = document.getElementById('btnResetAuditFilters');

  const btnPrev = document.getElementById('btnPrevAuditPage');
  const btnNext = document.getElementById('btnNextAuditPage');

  if (searchInput) searchInput.addEventListener('input', () => { currentAuditPage = 1; renderMasterAuditLogsTable(); });
  if (actionSelect) actionSelect.addEventListener('change', () => { currentAuditPage = 1; renderMasterAuditLogsTable(); });
  if (userSelect) userSelect.addEventListener('change', () => { currentAuditPage = 1; renderMasterAuditLogsTable(); });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      if (actionSelect) actionSelect.value = 'ALL';
      if (userSelect) userSelect.value = 'ALL';
      currentAuditPage = 1;
      renderMasterAuditLogsTable();
      showToast('Audit filters reset to default');
    });
  }

  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      if (currentAuditPage > 1) {
        currentAuditPage--;
        renderMasterAuditLogsTable();
      }
    });
  }

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      currentAuditPage++;
      renderMasterAuditLogsTable();
    });
  }
}

/* ==========================================================================
   PREMIUM NOTIFICATIONS & ALERTS CENTER FUNCTIONS
   ========================================================================== */
const initialNotificationsData = [
  {
    id: 1,
    title: "Technician Dispatched to Store #101",
    category: "WORK ORDER",
    timeAgo: "8 mins ago",
    unread: true,
    workOrder: "#WO-2026-00101",
    description: "Technician Mahad Bukhari is en route for emergency HVAC repair at Coral Springs location.",
    iconType: "workorder"
  },
  {
    id: 2,
    title: "Critical Refrigeration Temperature Warning",
    category: "CRITICAL",
    timeAgo: "22 mins ago",
    unread: true,
    workOrder: "#WO-2026-00099",
    description: "Automated sensor alert: Walk-in freezer temperature reached 42°F at Store #099 (Miami North).",
    iconType: "critical"
  },
  {
    id: 3,
    title: "Vendor Tax Compliance W9 Uploaded",
    category: "VENDOR",
    timeAgo: "1 hour ago",
    unread: true,
    workOrder: "#WO-2026-00104",
    description: "Vendor TradeCraft Contracting uploaded updated 2026 W9 Tax Verification & Liability Certificate.",
    iconType: "vendor"
  },
  {
    id: 4,
    title: "System Role Promoted to Team Lead",
    category: "SECURITY",
    timeAgo: "3 hours ago",
    unread: true,
    workOrder: "N/A",
    description: "Administrator updated account privileges for @alex_morgan. New System Role: Team Lead.",
    iconType: "security"
  },
  {
    id: 5,
    title: "Work Order Invoice Payment Verified",
    category: "WORK ORDER",
    timeAgo: "5 hours ago",
    unread: true,
    workOrder: "#WO-2026-00102",
    description: "ACH Direct Deposit of $750.00 confirmed for Electrical Repair at Fort Lauderdale Store #102.",
    iconType: "workorder"
  },
  {
    id: 6,
    title: "Emergency Plumbing Inspection Dispatched",
    category: "CRITICAL",
    timeAgo: "8 hours ago",
    unread: false,
    workOrder: "#WO-2026-00116",
    description: "Dispatched contractor Apex Plumbing Co. for main line blockage at Store #554.",
    iconType: "critical"
  },
  {
    id: 7,
    title: "Vendor General Contractor Insurance Expiration Notice",
    category: "VENDOR",
    timeAgo: "1 day ago",
    unread: false,
    workOrder: "N/A",
    description: "General Contractor license for BuildPro Solutions is scheduled to expire in 14 days.",
    iconType: "vendor"
  },
  {
    id: 8,
    title: "Work Order Completed & Verified",
    category: "WORK ORDER",
    timeAgo: "1 day ago",
    unread: false,
    workOrder: "#WO-2026-00108",
    description: "Store Manager Sarah Jenkins verified completion of lighting installation at Tampa Store #108.",
    iconType: "workorder"
  },
  {
    id: 9,
    title: "Security Login Attempt from New IP",
    category: "SECURITY",
    timeAgo: "2 days ago",
    unread: false,
    workOrder: "N/A",
    description: "Successful login for @admin_mahad from IP Address 192.168.1.104 (Windows 11 Chrome).",
    iconType: "security"
  },
  {
    id: 10,
    title: "Preventive Maintenance Schedule Generated",
    category: "WORK ORDER",
    timeAgo: "2 days ago",
    unread: false,
    workOrder: "#WO-2026-00115",
    description: "System automatically generated quarterly AC filter replacement schedule for 12 Florida stores.",
    iconType: "workorder"
  },
  {
    id: 11,
    title: "Critical Priority Escalation Alert",
    category: "CRITICAL",
    timeAgo: "3 days ago",
    unread: false,
    workOrder: "#WO-2026-00088",
    description: "Automatic escalation triggered for unanswered service request at Store #312.",
    iconType: "critical"
  },
  {
    id: 12,
    title: "Vendor Account Active Status Confirmed",
    category: "VENDOR",
    timeAgo: "4 days ago",
    unread: false,
    workOrder: "N/A",
    description: "CoolTech Mechanical vendor status updated to 'Active / Operational'.",
    iconType: "vendor"
  }
];

let masterNotificationsDataset = [...initialNotificationsData];
let currentNotifCategory = 'ALL';

function renderNotificationsFeed() {
  const container = document.getElementById('notifFeedContainer');
  if (!container) return;

  const searchInput = document.getElementById('notifFilterSearch');
  const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';

  const filteredNotifs = masterNotificationsDataset.filter(n => {
    const matchesSearch = !searchTerm ||
      n.title.toLowerCase().includes(searchTerm) ||
      n.description.toLowerCase().includes(searchTerm) ||
      n.workOrder.toLowerCase().includes(searchTerm) ||
      n.category.toLowerCase().includes(searchTerm);

    let matchesCat = true;
    if (currentNotifCategory === 'UNREAD') matchesCat = n.unread;
    else if (currentNotifCategory === 'WORK ORDER') matchesCat = (n.category === 'WORK ORDER');
    else if (currentNotifCategory === 'CRITICAL') matchesCat = (n.category === 'CRITICAL');
    else if (currentNotifCategory === 'VENDOR') matchesCat = (n.category === 'VENDOR');
    else if (currentNotifCategory === 'SECURITY') matchesCat = (n.category === 'SECURITY');

    return matchesSearch && matchesCat;
  });

  // Update KPI Stats & Badges
  updateNotifKPIs();

  if (filteredNotifs.length === 0) {
    container.innerHTML = `
      <div class="users-empty-card" style="grid-column: span 1;">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="users-empty-icon"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
        <div class="users-empty-title">No Notifications Found</div>
        <div class="users-empty-sub">No notifications match your active search or category filter.</div>
      </div>
    `;
    return;
  }

  container.innerHTML = filteredNotifs.map(n => {
    let iconSvg = '';
    if (n.iconType === 'workorder') {
      iconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>`;
    } else if (n.iconType === 'critical') {
      iconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`;
    } else if (n.iconType === 'vendor') {
      iconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>`;
    } else {
      iconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`;
    }

    const woTag = n.workOrder !== 'N/A' 
      ? `<a href="jobs.html" class="notif-workorder-link"><span>${escapeHTML(n.workOrder)}</span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>`
      : '';

    return `
      <div class="notification-card-item ${n.unread ? 'unread' : ''}" id="notif-item-${n.id}">
        <div class="notif-item-left">
          <div class="notif-icon-circle ${n.iconType}">
            ${iconSvg}
          </div>
          <div class="notif-content-col">
            <div class="notif-title-row">
              <span class="notif-title-text">${escapeHTML(n.title)}</span>
              <span class="notif-time-text">• ${escapeHTML(n.timeAgo)}</span>
            </div>
            <div class="notif-description-text">${escapeHTML(n.description)}</div>
            ${woTag ? `<div>${woTag}</div>` : ''}
          </div>
        </div>

        <div class="notif-item-right-actions">
          ${n.unread ? `<button type="button" class="notif-action-btn" onclick="markSingleNotifAsRead(${n.id})">Mark as Read</button>` : ''}
          <button type="button" class="notif-dismiss-btn" title="Dismiss Notification" onclick="dismissNotification(${n.id})">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function updateNotifKPIs() {
  const unreadCount = masterNotificationsDataset.filter(n => n.unread).length;
  const navBadge = document.getElementById('unreadNotifNavBadge');
  const unreadTabBtn = document.querySelector('.notif-tab-btn[data-category="UNREAD"]');

  if (navBadge) navBadge.textContent = unreadCount;
  if (unreadTabBtn) unreadTabBtn.textContent = `Unread (${unreadCount})`;
}

function markSingleNotifAsRead(id) {
  const notif = masterNotificationsDataset.find(n => n.id === id);
  if (!notif || !notif.unread) return;
  notif.unread = false;
  renderNotificationsFeed();
  showToast('Notification marked as Read');
}

function dismissNotification(id) {
  const notif = masterNotificationsDataset.find(n => n.id === id);
  if (!notif) return;
  masterNotificationsDataset = masterNotificationsDataset.filter(n => n.id !== id);
  renderNotificationsFeed();
  showToast('Notification dismissed');
}

function markAllNotificationsAsRead() {
  let count = 0;
  masterNotificationsDataset.forEach(n => {
    if (n.unread) {
      n.unread = false;
      count++;
    }
  });
  renderNotificationsFeed();
  showToast(count > 0 ? `Marked ${count} notifications as Read` : 'All notifications are already read');
}

function filterNotifCategory(category, btnElement) {
  currentNotifCategory = category;
  const tabs = document.querySelectorAll('.notif-tab-btn');
  tabs.forEach(t => t.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');
  renderNotificationsFeed();
}

function resetNotifFilters() {
  const searchInput = document.getElementById('notifFilterSearch');
  if (searchInput) searchInput.value = '';
  currentNotifCategory = 'ALL';
  const tabs = document.querySelectorAll('.notif-tab-btn');
  tabs.forEach(t => t.classList.remove('active'));
  if (tabs.length > 0) tabs[0].classList.add('active');
  renderNotificationsFeed();
  showToast('Notification filters reset');
}

function initNotifEvents() {
  const searchInput = document.getElementById('notifFilterSearch');
  if (searchInput) searchInput.addEventListener('input', renderNotificationsFeed);
}

/* ==========================================================================
   SYSTEM & PERFORMANCE ANALYTICS CONTROLLERS & DATASETS
   ========================================================================== */
const initialStaffPerformanceData = [
  { member: "Alex Morgan", avatar: "AM", role: "Team Lead", assigned: 65, completed: 59, ratio: "91%", vendorPaid: "$19,040.85" },
  { member: "Marcus Vance", avatar: "MV", role: "Team Lead", assigned: 48, completed: 45, ratio: "94%", vendorPaid: "$14,210.00" },
  { member: "Sophia Martinez", avatar: "SM", role: "User", assigned: 33, completed: 32, ratio: "97%", vendorPaid: "$10,657.13" },
  { member: "Sarah Jenkins", avatar: "SJ", role: "User", assigned: 24, completed: 23, ratio: "96%", vendorPaid: "$8,400.00" },
  { member: "Mahad Bukhari", avatar: "MB", role: "Administrator", assigned: 7, completed: 7, ratio: "100%", vendorPaid: "$0.00" }
];

const initialLedgerActivityData = [
  { amount: "$300.00", workOrder: "#WO-2026-00082", type: "CLIENT", clearStatus: "FULL", date: "Jul 18, 2026, 06:15 UTC", method: "ACH Transfer" },
  { amount: "$95.00", workOrder: "#WO-2026-00090", type: "VENDOR", clearStatus: "FULL", date: "Jul 16, 2026, 22:35 UTC", method: "Zelle" },
  { amount: "$411.00", workOrder: "#WO-2026-00091", type: "VENDOR", clearStatus: "FULL", date: "Jul 16, 2026, 22:34 UTC", method: "Zelle" },
  { amount: "$400.00", workOrder: "#WO-2026-00093", type: "VENDOR", clearStatus: "FULL", date: "Jul 16, 2026, 22:32 UTC", method: "Zelle" },
  { amount: "$302.50", workOrder: "#WO-2026-00098", type: "VENDOR", clearStatus: "FULL", date: "Jul 16, 2026, 22:30 UTC", method: "Zelle" }
];

const monthlyTrendData = [
  { month: "Jan '26", jobs: 12, height: "35%" },
  { month: "Feb '26", jobs: 18, height: "48%" },
  { month: "Mar '26", jobs: 24, height: "60%" },
  { month: "Apr '26", jobs: 19, height: "52%" },
  { month: "May '26", jobs: 28, height: "72%" },
  { month: "Jun '26", jobs: 70, height: "98%", highlight: true },
  { month: "Jul '26", jobs: 34, height: "82%" },
  { month: "Aug '26", jobs: 15, height: "45%" }
];

let statusDoughnutChartInstance = null;
let monthlyBarChartInstance = null;
let tradeAreaLineChartInstance = null;

function renderAnalyticsPage() {
  initStatusDoughnutChart();
  initMonthlyBarChart();
  initTradeAreaLineChart();
  renderStaffLeaderboard();
  renderLedgerActivityFeed();

  const rangeSelect = document.getElementById('analyticsDateRangeSelect');
  if (rangeSelect) {
    rangeSelect.addEventListener('change', () => {
      showToast(`Analytics filter updated: ${rangeSelect.options[rangeSelect.selectedIndex].text}`);
    });
  }

  const globalSearch = document.getElementById('globalSearchInput');
  if (globalSearch) {
    globalSearch.addEventListener('input', (e) => {
      filterAnalyticsBySearch(e.target.value.toLowerCase().trim());
    });
  }
}

function initTradeAreaLineChart() {
  const ctx = document.getElementById('tradeAreaLineChart');
  if (!ctx || typeof Chart === 'undefined') return;

  if (tradeAreaLineChartInstance) {
    tradeAreaLineChartInstance.destroy();
  }

  const context = ctx.getContext('2d');

  // Gradient Fill for Series 1 (Blue)
  const gradientBlue = context.createLinearGradient(0, 0, 0, 320);
  gradientBlue.addColorStop(0, 'rgba(26, 115, 232, 0.28)');
  gradientBlue.addColorStop(1, 'rgba(26, 115, 232, 0.01)');

  // Gradient Fill for Series 2 (Gold / Yellow)
  const gradientGold = context.createLinearGradient(0, 0, 0, 320);
  gradientGold.addColorStop(0, 'rgba(247, 201, 72, 0.38)');
  gradientGold.addColorStop(1, 'rgba(247, 201, 72, 0.01)');

  tradeAreaLineChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
      datasets: [
        {
          label: 'Total Dispatch Volume',
          data: [400, 400, 640, 500, 890, 750, 840, 600, 940, 500, 640, 700],
          borderColor: '#1A73E8',
          borderWidth: 3.5,
          backgroundColor: gradientBlue,
          fill: true,
          tension: 0.45,
          pointRadius: 0,
          pointHoverRadius: 6,
          pointHoverBackgroundColor: '#1A73E8',
          pointHoverBorderColor: '#FFFFFF',
          pointHoverBorderWidth: 2
        },
        {
          label: 'Revenue Target Growth',
          data: [350, 350, 410, 370, 490, 400, 540, 410, 590, 440, 540, 400],
          borderColor: '#F7C948',
          borderWidth: 3.5,
          backgroundColor: gradientGold,
          fill: true,
          tension: 0.45,
          pointRadius: 0,
          pointHoverRadius: 6,
          pointHoverBackgroundColor: '#F7C948',
          pointHoverBorderColor: '#FFFFFF',
          pointHoverBorderWidth: 2
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 10,
          right: 15,
          top: 10,
          bottom: 5
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#1E2022',
          titleFont: { family: 'Plus Jakarta Sans', size: 12, weight: '700' },
          bodyFont: { family: 'Plus Jakarta Sans', size: 12 },
          padding: 12,
          cornerRadius: 12,
          displayColors: true
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: {
            font: { family: 'Plus Jakarta Sans', size: 11, weight: '600' },
            color: '#787A7D'
          }
        },
        y: {
          grid: {
            color: 'rgba(0, 0, 0, 0.04)',
            drawBorder: false
          },
          ticks: {
            font: { family: 'Plus Jakarta Sans', size: 10 },
            color: '#787A7D',
            stepSize: 200
          },
          min: 200,
          max: 1000
        }
      }
    }
  });
}

function initStatusDoughnutChart() {
  const ctx = document.getElementById('statusDoughnutChart');
  if (!ctx || typeof Chart === 'undefined') return;

  if (statusDoughnutChartInstance) {
    statusDoughnutChartInstance.destroy();
  }

  statusDoughnutChartInstance = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Done (Completed)', 'In Progress', 'Pending Approval', 'Scheduled', 'Cancelled'],
      datasets: [{
        data: [104, 28, 12, 6, 3],
        backgroundColor: ['#34D399', '#1A73E8', '#D97706', '#7C3AED', '#E53E3E'],
        hoverBackgroundColor: ['#2AD59B', '#1565C0', '#B45309', '#6D28D9', '#C53030'],
        borderWidth: 0,
        borderRadius: 6,
        spacing: 3
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '76%',
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#1E2022',
          titleFont: { family: 'Plus Jakarta Sans', size: 12, weight: '700' },
          bodyFont: { family: 'Plus Jakarta Sans', size: 12 },
          padding: 10,
          cornerRadius: 10,
          displayColors: true,
          callbacks: {
            label: function(context) {
              const val = context.raw;
              const total = 153;
              const pct = ((val / total) * 100).toFixed(1);
              return ` ${context.label}: ${val} (${pct}%)`;
            }
          }
        }
      }
    }
  });
}

function initMonthlyBarChart() {
  const ctx = document.getElementById('monthlyJobsBarChart');
  if (!ctx || typeof Chart === 'undefined') return;

  if (monthlyBarChartInstance) {
    monthlyBarChartInstance.destroy();
  }

  monthlyBarChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Jan '26", "Feb '26", "Mar '26", "Apr '26", "May '26", "Jun '26", "Jul '26", "Aug '26"],
      datasets: [{
        label: 'Work Orders Created',
        data: [12, 18, 24, 19, 28, 70, 34, 15],
        backgroundColor: [
          '#1E2022', '#1E2022', '#1E2022', '#1E2022', '#1E2022',
          '#F7C948',
          '#1E2022', '#1E2022'
        ],
        hoverBackgroundColor: [
          '#313438', '#313438', '#313438', '#313438', '#313438',
          '#E5B837',
          '#313438', '#313438'
        ],
        borderRadius: 14,
        borderSkipped: false,
        barThickness: 28
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#1E2022',
          titleFont: { family: 'Plus Jakarta Sans', size: 12, weight: '700' },
          bodyFont: { family: 'Plus Jakarta Sans', size: 12 },
          padding: 10,
          cornerRadius: 10,
          callbacks: {
            label: function(context) {
              return ` ${context.raw} Work Orders Created`;
            }
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: {
            font: { family: 'Plus Jakarta Sans', size: 11, weight: '600' },
            color: '#787A7D'
          }
        },
        y: {
          grid: { color: 'rgba(0,0,0,0.04)' },
          ticks: {
            font: { family: 'Plus Jakarta Sans', size: 10 },
            color: '#787A7D',
            stepSize: 20
          },
          beginAtZero: true
        }
      }
    }
  });
}

function updateMonthlyBarChart() {
  initMonthlyBarChart();
  showToast('Monthly Jobs trend updated');
}

function renderStaffLeaderboard() {
  const tbody = document.getElementById('analyticsLeaderboardBody');
  if (!tbody) return;

  tbody.innerHTML = initialStaffPerformanceData.map(st => {
    const roleClass = st.role === 'Administrator' ? 'administrator' : (st.role === 'Team Lead' ? 'team-lead' : 'user');
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
  }).join('');
}

function renderLedgerActivityFeed() {
  const container = document.getElementById('analyticsLedgerFeed');
  if (!container) return;

  container.innerHTML = initialLedgerActivityData.map(tx => `
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
  `).join('');
}

function filterAnalyticsBySearch(query) {
  const tbody = document.getElementById('analyticsLeaderboardBody');
  if (!tbody) return;

  const filteredStaff = initialStaffPerformanceData.filter(st =>
    !query || st.member.toLowerCase().includes(query) || st.role.toLowerCase().includes(query)
  );

  tbody.innerHTML = filteredStaff.map(st => {
    const roleClass = st.role === 'Administrator' ? 'administrator' : (st.role === 'Team Lead' ? 'team-lead' : 'user');
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
  }).join('');
}

function exportAnalyticsReport(type) {
  showToast(`Exporting analytics performance report as ${type.toUpperCase()}...`);
}

function initMobileSidebar() {
  const sidebarBtn = document.getElementById('sidebarToggleBtn');
  const sidebar = document.querySelector('.crm-sidebar');
  const backdrop = document.getElementById('sidebarBackdrop');

  if (sidebarBtn && sidebar) {
    sidebarBtn.addEventListener('click', () => {
      sidebar.classList.toggle('active');
      if (backdrop) backdrop.classList.toggle('active');
    });
  }

  if (backdrop && sidebar) {
    backdrop.addEventListener('click', () => {
      sidebar.classList.remove('active');
      backdrop.classList.remove('active');
    });
  }
}

function initLoginPage() {
  const loginForm = document.getElementById('storeopsLoginForm');
  const toggleBtn = document.getElementById('passwordToggleBtn');
  const passInput = document.getElementById('loginPassword');

  if (toggleBtn && passInput) {
    toggleBtn.addEventListener('click', () => {
      const isPassword = passInput.type === 'password';
      passInput.type = isPassword ? 'text' : 'password';
      showToast(isPassword ? 'Password text visible' : 'Password hidden');
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Welcome back, Administrator! Authenticating credentials...');
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1200);
    });
  }
}

