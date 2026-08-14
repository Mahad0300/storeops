/**
 * StoreOps CRM - Core & Shared Application Logic (common.js)
 * Master Datasets, Global State, Modal Engines, Toast Notifications, Dual Header Clocks, Mobile Drawer
 */

// Initial Master Jobs Dataset
const initialJobsData = [
  {
    id: 101,
    storeName: "CORAL SPRINGS",
    storeAddress: "N University Dr, Ste 1313, Coral Springs, FL",
    designation: "Fire Protection",
    assignedUser: "Sophia Martinez",
    assignedAvatar: "SM",
    addedDate: "Aug 12, 2026",
    vendorCharges: 450.0,
    jobRevenue: 1200.0,
    urgency: "Within SLA",
    status: "Pending",
  },
  {
    id: 102,
    storeName: "NILES",
    storeAddress: "Milwaukee Ave, Niles, IL",
    designation: "Electrician",
    assignedUser: "Alex Morgan",
    assignedAvatar: "AM",
    addedDate: "Aug 11, 2026",
    vendorCharges: 320.0,
    jobRevenue: 850.0,
    urgency: "Within SLA",
    status: "New",
  },
  {
    id: 103,
    storeName: "EVANSTON",
    storeAddress: "Chicago Ave, Evanston, IL",
    designation: "Electrician",
    assignedUser: "Sophia Martinez",
    assignedAvatar: "SM",
    addedDate: "Aug 10, 2026",
    vendorCharges: 280.0,
    jobRevenue: 750.0,
    urgency: "Within SLA",
    status: "New",
  },
  {
    id: 104,
    storeName: "WEST BLOOMFIELD",
    storeAddress: "Orchard Lake Rd, West Bloomfield, MI",
    designation: "Window Cleaning",
    assignedUser: "John Doe",
    assignedAvatar: "JD",
    addedDate: "Aug 09, 2026",
    vendorCharges: 150.0,
    jobRevenue: 500.0,
    urgency: "Within SLA",
    status: "New",
  },
  {
    id: 105,
    storeName: "KENDALLVILLE",
    storeAddress: "Main St, Kendallville, IN",
    designation: "HVAC",
    assignedUser: "Marcus Vance",
    assignedAvatar: "MV",
    addedDate: "Aug 08, 2026",
    vendorCharges: 680.0,
    jobRevenue: 1800.0,
    urgency: "Urgent",
    status: "Done",
  },
  {
    id: 106,
    storeName: "CHICAGO LOOP",
    storeAddress: "Michigan Ave, Chicago, IL",
    designation: "Plumbing Service",
    assignedUser: "Sarah Jenkins",
    assignedAvatar: "SJ",
    addedDate: "Aug 07, 2026",
    vendorCharges: 510.0,
    jobRevenue: 1400.0,
    urgency: "Urgent",
    status: "In Progress",
  },
  {
    id: 107,
    storeName: "SCHAUMBURG",
    storeAddress: "Golf Rd, Schaumburg, IL",
    designation: "Roofing Repair",
    assignedUser: "Alex Morgan",
    assignedAvatar: "AM",
    addedDate: "Aug 06, 2026",
    vendorCharges: 890.0,
    jobRevenue: 2500.0,
    urgency: "Within SLA",
    status: "Done",
  },
  {
    id: 108,
    storeName: "NAPERVILLE",
    storeAddress: "Route 59, Naperville, IL",
    designation: "Security System",
    assignedUser: "Sophia Martinez",
    assignedAvatar: "SM",
    addedDate: "Aug 05, 2026",
    vendorCharges: 210.0,
    jobRevenue: 650.0,
    urgency: "Within SLA",
    status: "In Progress",
  },
  {
    id: 109,
    storeName: "OAK BROOK",
    storeAddress: "22nd St, Oak Brook, IL",
    designation: "Elevator Maint.",
    assignedUser: "Marcus Vance",
    assignedAvatar: "MV",
    addedDate: "Aug 04, 2026",
    vendorCharges: 1100.0,
    jobRevenue: 3200.0,
    urgency: "Within SLA",
    status: "Done",
  },
  {
    id: 110,
    storeName: "AURORA",
    storeAddress: "New York St, Aurora, IL",
    designation: "HVAC Maintenance",
    assignedUser: "Sarah Jenkins",
    assignedAvatar: "SJ",
    addedDate: "Aug 03, 2026",
    vendorCharges: 420.0,
    jobRevenue: 1150.0,
    urgency: "Within SLA",
    status: "Pending",
  },
  {
    id: 111,
    storeName: "NAPERVILLE WEST",
    storeAddress: "75th St, Naperville, IL",
    designation: "Glass Replacement",
    assignedUser: "Alex Morgan",
    assignedAvatar: "AM",
    addedDate: "Aug 02, 2026",
    vendorCharges: 340.0,
    jobRevenue: 920.0,
    urgency: "Within SLA",
    status: "New",
  },
  {
    id: 112,
    storeName: "JOLIET CENTRAL",
    storeAddress: "Jefferson St, Joliet, IL",
    designation: "Painter",
    assignedUser: "Sophia Martinez",
    assignedAvatar: "SM",
    addedDate: "Aug 01, 2026",
    vendorCharges: 480.0,
    jobRevenue: 1300.0,
    urgency: "Within SLA",
    status: "In Progress",
  },
  {
    id: 113,
    storeName: "ELGIN TOWN",
    storeAddress: "Dundee Ave, Elgin, IL",
    designation: "Awnings Replacement",
    assignedUser: "Marcus Vance",
    assignedAvatar: "MV",
    addedDate: "Jul 30, 2026",
    vendorCharges: 620.0,
    jobRevenue: 1750.0,
    urgency: "Within SLA",
    status: "Done",
  },
  {
    id: 114,
    storeName: "SKOKIE PLAZA",
    storeAddress: "Touhy Ave, Skokie, IL",
    designation: "Handyman",
    assignedUser: "Sarah Jenkins",
    assignedAvatar: "SJ",
    addedDate: "Jul 28, 2026",
    vendorCharges: 250.0,
    jobRevenue: 700.0,
    urgency: "Urgent",
    status: "Pending",
  },
  {
    id: 115,
    storeName: "DES PLAINES",
    storeAddress: "Miner St, Des Plaines, IL",
    designation: "Carpet Cleaner",
    assignedUser: "Alex Morgan",
    assignedAvatar: "AM",
    addedDate: "Jul 26, 2026",
    vendorCharges: 290.0,
    jobRevenue: 820.0,
    urgency: "Within SLA",
    status: "Done",
  },
  {
    id: 116,
    storeName: "HIGHLAND PARK",
    storeAddress: "Central Ave, Highland Park, IL",
    designation: "Fire Inspection",
    assignedUser: "Sophia Martinez",
    assignedAvatar: "SM",
    addedDate: "Jul 24, 2026",
    vendorCharges: 390.0,
    jobRevenue: 1100.0,
    urgency: "Within SLA",
    status: "New",
  },
];

let masterJobsDataset = [...initialJobsData];

// Initial System Users Dataset
const initialUsersData = [
  {
    id: 1,
    loginName: "admin_mahad",
    fullName: "Mahad Bukhari",
    password: "••••••••",
    systemRole: "Administrator",
    accountStatus: "Active / Operational",
    avatar: "MB",
  },
  {
    id: 2,
    loginName: "alex_morgan",
    fullName: "Alex Morgan",
    password: "••••••••",
    systemRole: "Team Lead",
    accountStatus: "Active / Operational",
    avatar: "AM",
  },
  {
    id: 3,
    loginName: "sophia_martinez",
    fullName: "Sophia Martinez",
    password: "••••••••",
    systemRole: "User",
    accountStatus: "Active / Operational",
    avatar: "SM",
  },
  {
    id: 4,
    loginName: "marcus_vance",
    fullName: "Marcus Vance",
    password: "••••••••",
    systemRole: "Team Lead",
    accountStatus: "Active / Operational",
    avatar: "MV",
  },
  {
    id: 5,
    loginName: "sarah_jenkins",
    fullName: "Sarah Jenkins",
    password: "••••••••",
    systemRole: "User",
    accountStatus: "Active / Operational",
    avatar: "SJ",
  },
  {
    id: 6,
    loginName: "john_doe",
    fullName: "John Doe",
    password: "••••••••",
    systemRole: "User",
    accountStatus: "Suspended / Blocked",
    avatar: "JD",
  },
  {
    id: 7,
    loginName: "robert_smith",
    fullName: "Robert Smith",
    password: "••••••••",
    systemRole: "User",
    accountStatus: "Active / Operational",
    avatar: "RS",
  },
  {
    id: 8,
    loginName: "elena_rodriguez",
    fullName: "Elena Rodriguez",
    password: "••••••••",
    systemRole: "Administrator",
    accountStatus: "Active / Operational",
    avatar: "ER",
  },
];

let masterUsersDataset = [...initialUsersData];

// Global Initialization
document.addEventListener("DOMContentLoaded", () => {
  initLiveClocks();
  initAccordions();
  initTaskList();
  initModals();
  initLogout();
  initMobileSidebar();
});

/* ==========================================================================
   1. Live Dual Clocks (US Eastern & PK Pakistan Time)
   ========================================================================== */
function initLiveClocks() {
  const usClockEl =
    document.getElementById("usTimeDigits") ||
    document.getElementById("usTime");
  const pkClockEl =
    document.getElementById("pkTimeDigits") ||
    document.getElementById("pkTime");

  function updateClocks() {
    const now = new Date();

    const usTimeString = now.toLocaleTimeString("en-US", {
      timeZone: "America/New_York",
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    const pkTimeString = now.toLocaleTimeString("en-US", {
      timeZone: "Asia/Karachi",
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    if (usClockEl) usClockEl.textContent = usTimeString;
    if (pkClockEl) pkClockEl.textContent = pkTimeString;
  }

  updateClocks();
  setInterval(updateClocks, 1000);
}

function initLogout() {
  const logoutBtn = document.getElementById("sidebarLogoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      showToast("Logged out of Administrator account");
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1000);
    });
  }
}

function initMobileSidebar() {
  const toggleBtn =
    document.getElementById("mobileSidebarToggle") ||
    document.getElementById("sidebarToggleBtn");
  const sidebar = document.querySelector(".crm-sidebar");
  let backdrop = document.getElementById("sidebarBackdrop");

  if (!backdrop && sidebar) {
    backdrop = document.createElement("div");
    backdrop.id = "sidebarBackdrop";
    backdrop.className = "sidebar-backdrop";
    document.body.appendChild(backdrop);
  }

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("sidebar-active");
      sidebar.classList.toggle("active");
      if (backdrop) backdrop.classList.toggle("active");
    });
  }

  if (backdrop) {
    backdrop.addEventListener("click", () => {
      if (sidebar) {
        sidebar.classList.remove("sidebar-active");
        sidebar.classList.remove("active");
      }
      backdrop.classList.remove("active");
    });
  }
}

/* ==========================================================================
   2. UI Accordions, Task Lists, Modals, Toast Alerts & Helpers
   ========================================================================== */
function initAccordions() {
  const headers = document.querySelectorAll(".accordion-header");
  headers.forEach((header) => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      if (item) {
        item.classList.toggle("active");
      }
    });
  });
}

function initTaskList() {
  const checkableItems = document.querySelectorAll(
    ".task-item input[type='checkbox']",
  );
  checkableItems.forEach((input) => {
    input.addEventListener("change", () => {
      const label = input.closest(".task-item");
      if (label) {
        if (input.checked) {
          label.classList.add("completed");
        } else {
          label.classList.remove("completed");
        }
      }
    });
  });
}

function initModals() {
  const closeBtns = document.querySelectorAll(
    ".modal-close-btn, .modal-cancel-btn",
  );
  closeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".crm-modal-backdrop");
      if (modal) modal.classList.remove("active");
    });
  });

  const backdrops = document.querySelectorAll(".crm-modal-backdrop");
  backdrops.forEach((backdrop) => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        backdrop.classList.remove("active");
      }
    });
  });
}

function showToast(message) {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
    <span>${escapeHTML(message)}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function escapeHTML(str) {
  return String(str).replace(/[&<>"']/g, function (m) {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    }[m];
  });
}

function getStatusClass(status) {
  switch (status) {
    case "Done":
    case "Completed":
      return "done";
    case "In Progress":
      return "in-progress";
    case "Pending":
    case "Pending Approval":
      return "pending";
    case "New":
      return "new";
    case "Cancelled":
      return "cancelled";
    default:
      return "new";
  }
}

/* ==========================================================================
   3. Dynamic Modal Generator (Jobs, Vendors, Users, Payments)
   ========================================================================== */
function openCRMModal(type, editData = null) {
  let backdrop = document.getElementById("dynamicCRMModalBackdrop");
  if (!backdrop) {
    backdrop = document.createElement("div");
    backdrop.id = "dynamicCRMModalBackdrop";
    backdrop.className = "crm-modal-backdrop";
    document.body.appendChild(backdrop);
  }

  let title = "Create New Record";
  let content = "";

  const userOptions = masterUsersDataset
    .map(
      (u) =>
        `<option value="${escapeHTML(u.fullName)}">${escapeHTML(u.fullName)} (${escapeHTML(u.systemRole)})</option>`,
    )
    .join("");

  if (type === "job" || type === "edit-job") {
    const isEdit = type === "edit-job" && editData;
    title = isEdit
      ? `Edit Work Order #${editData.id}`
      : "Create New Work Order";

    content = `
      <form id="crmModalForm" data-type="${type}" ${isEdit ? `data-edit-id="${editData.id}"` : ""}>
        <div class="form-group">
          <label class="form-label">Store Location Name</label>
          <input type="text" id="mStoreName" class="form-input" required placeholder="e.g. CORAL SPRINGS" value="${isEdit ? escapeHTML(editData.storeName) : ""}" />
        </div>
        <div class="form-group">
          <label class="form-label">Full Street Address</label>
          <input type="text" id="mStoreAddress" class="form-input" required placeholder="e.g. N University Dr, Ste 1313, Coral Springs, FL" value="${isEdit ? escapeHTML(editData.storeAddress) : ""}" />
        </div>
        <div class="form-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div class="form-group">
            <label class="form-label">Trade / Designation</label>
            <select id="mDesignation" class="form-select">
              <option ${isEdit && editData.designation === "Electrician" ? "selected" : ""}>Electrician</option>
              <option ${isEdit && editData.designation === "HVAC" ? "selected" : ""}>HVAC</option>
              <option ${isEdit && editData.designation === "Plumbing Service" ? "selected" : ""}>Plumbing Service</option>
              <option ${isEdit && editData.designation === "Fire Protection" ? "selected" : ""}>Fire Protection</option>
              <option ${isEdit && editData.designation === "Window Cleaning" ? "selected" : ""}>Window Cleaning</option>
              <option ${isEdit && editData.designation === "Roofing Repair" ? "selected" : ""}>Roofing Repair</option>
              <option ${isEdit && editData.designation === "Security System" ? "selected" : ""}>Security System</option>
              <option ${isEdit && editData.designation === "Elevator Maint." ? "selected" : ""}>Elevator Maint.</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Assigned Operations Staff</label>
            <select id="mAssignedUser" class="form-select">
              ${userOptions}
            </select>
          </div>
        </div>
        <div class="form-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div class="form-group">
            <label class="form-label">Est. Revenue ($)</label>
            <input type="number" step="0.01" id="mJobRevenue" class="form-input" required placeholder="1200.00" value="${isEdit ? editData.jobRevenue : "850.00"}" />
          </div>
          <div class="form-group">
            <label class="form-label">Urgency Level</label>
            <select id="mUrgency" class="form-select">
              <option value="Within SLA" ${isEdit && editData.urgency === "Within SLA" ? "selected" : ""}>Within SLA</option>
              <option value="Urgent" ${isEdit && editData.urgency === "Urgent" ? "selected" : ""}>Urgent Priority</option>
            </select>
          </div>
        </div>
        <div class="modal-footer" style="margin-top: 24px; display: flex; justify-content: flex-end; gap: 12px;">
          <button type="button" class="btn btn-secondary modal-cancel-btn" onclick="closeModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">${isEdit ? "Save Changes" : "Create Work Order"}</button>
        </div>
      </form>
    `;
  } else if (type === "vendor" || type === "edit-vendor") {
    const isEdit = type === "edit-vendor" && editData;
    title = isEdit
      ? `Edit Vendor "${editData.name}"`
      : "Register Certified Vendor";

    const phonesList = isEdit
      ? [
          editData.phone,
          ...(editData.secondaryPhone
            ? editData.secondaryPhone.split(" / ")
            : []),
        ]
      : [""];

    const phoneRowsHtml = phonesList
      .map(
        (ph, idx) => `
      <div class="vendor-phone-row" style="display: flex; gap: 8px; margin-bottom: 8px;">
        <input type="text" class="form-input vendor-phone-input" placeholder="${idx === 0 ? "+1 (800) 555-0199 (Primary)" : "+1 (312) 555-0144 (Secondary)"}" value="${escapeHTML(ph)}" required />
        ${idx > 0 ? `<button type="button" class="btn btn-secondary" onclick="removePhoneRow(this)">✕</button>` : `<button type="button" class="btn btn-secondary" onclick="addVendorPhoneRow()">+ Add</button>`}
      </div>
    `,
      )
      .join("");

    content = `
      <form id="crmModalForm" data-type="${type}" ${isEdit ? `data-edit-id="${editData.id}"` : ""}>
        <div class="form-group">
          <label class="form-label">Vendor Company Name</label>
          <input type="text" id="mVendorName" class="form-input" required placeholder="e.g. Apex Electrical Solutions" value="${isEdit ? escapeHTML(editData.name) : ""}" />
        </div>
        <div class="form-group">
          <label class="form-label">Trade / Specialty Discipline</label>
          <select id="mVendorType" class="form-select">
            <option ${isEdit && editData.type === "Electrician" ? "selected" : ""}>Electrician</option>
            <option ${isEdit && editData.type === "HVAC" ? "selected" : ""}>HVAC</option>
            <option ${isEdit && editData.type === "Plumbing" ? "selected" : ""}>Plumbing</option>
            <option ${isEdit && editData.type === "Fire Protection" ? "selected" : ""}>Fire Protection</option>
            <option ${isEdit && editData.type === "Window Cleaning" ? "selected" : ""}>Window Cleaning</option>
            <option ${isEdit && editData.type === "Roofing" ? "selected" : ""}>Roofing</option>
            <option ${isEdit && editData.type === "Locksmith" ? "selected" : ""}>Locksmith</option>
            <option ${isEdit && editData.type === "Glass Replacement" ? "selected" : ""}>Glass Replacement</option>
            <option ${isEdit && editData.type === "Painter" ? "selected" : ""}>Painter</option>
            <option ${isEdit && editData.type === "Awnings Replacement" ? "selected" : ""}>Awnings Replacement</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Contact Phone Number(s)</label>
          <div id="vendorPhoneInputsContainer">
            ${phoneRowsHtml}
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Primary Service Location / HQ</label>
          <input type="text" id="mVendorLocation" class="form-input" required placeholder="e.g. Chicago, IL" value="${isEdit ? escapeHTML(editData.location) : ""}" />
        </div>
        <div class="form-group">
          <label class="form-label">Remarks / Badges</label>
          <input type="text" id="mVendorRemark" class="form-input" placeholder="e.g. Good Vendor, Fast Response" value="${isEdit ? escapeHTML(editData.remark || "") : ""}" />
        </div>
        <div class="modal-footer" style="margin-top: 24px; display: flex; justify-content: flex-end; gap: 12px;">
          <button type="button" class="btn btn-secondary modal-cancel-btn" onclick="closeModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">${isEdit ? "Save Vendor Changes" : "Register Vendor"}</button>
        </div>
      </form>
    `;
  } else if (type === "user" || type === "edit-user") {
    const isEdit = type === "edit-user" && editData;
    title = isEdit
      ? `Edit User "${editData.fullName}"`
      : "Create System User Account";

    content = `
      <form id="crmModalForm" data-type="${type}" ${isEdit ? `data-edit-id="${editData.id}"` : ""}>
        <div class="form-group">
          <label class="form-label">System Username</label>
          <input type="text" id="mUserLogin" class="form-input" required placeholder="e.g. alex_morgan" value="${isEdit ? escapeHTML(editData.loginName) : ""}" />
        </div>
        <div class="form-group">
          <label class="form-label">Full Name</label>
          <input type="text" id="mUserName" class="form-input" required placeholder="e.g. Alex Morgan" value="${isEdit ? escapeHTML(editData.fullName) : ""}" />
        </div>
        <div class="form-group">
          <label class="form-label">Password</label>
          <input type="password" id="mUserPassword" class="form-input" required placeholder="••••••••" value="${isEdit ? escapeHTML(editData.password) : "••••••••"}" />
        </div>
        <div class="form-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div class="form-group">
            <label class="form-label">System Role</label>
            <select id="mUserRole" class="form-select">
              <option ${isEdit && editData.systemRole === "Administrator" ? "selected" : ""}>Administrator</option>
              <option ${isEdit && editData.systemRole === "Team Lead" ? "selected" : ""}>Team Lead</option>
              <option ${isEdit && editData.systemRole === "User" ? "selected" : ""}>User</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Account Status</label>
            <select id="mUserStatus" class="form-select">
              <option value="Active / Operational" ${isEdit && editData.accountStatus === "Active / Operational" ? "selected" : ""}>Active / Operational</option>
              <option value="Suspended / Blocked" ${isEdit && editData.accountStatus === "Suspended / Blocked" ? "selected" : ""}>Suspended / Blocked</option>
            </select>
          </div>
        </div>
        <div class="modal-footer" style="margin-top: 24px; display: flex; justify-content: flex-end; gap: 12px;">
          <button type="button" class="btn btn-secondary modal-cancel-btn" onclick="closeModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">${isEdit ? "Save User Changes" : "Create Account"}</button>
        </div>
      </form>
    `;
  }

  backdrop.innerHTML = `
    <div class="crm-modal-container modal-sm-480">
      <div class="modal-header">
        <h3 class="modal-title">${escapeHTML(title)}</h3>
        <button class="modal-close-btn" onclick="closeModal()">✕</button>
      </div>
      <div class="modal-body">
        ${content}
      </div>
    </div>
  `;

  backdrop.classList.add("active");

  const form = document.getElementById("crmModalForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      handleModalSubmit(type, form);
      closeModal();
    });
  }
}

function closeModal() {
  const backdrop = document.getElementById("dynamicCRMModalBackdrop");
  if (backdrop) backdrop.classList.remove("active");
}

function addVendorPhoneRow() {
  const container = document.getElementById("vendorPhoneInputsContainer");
  if (!container) return;
  const div = document.createElement("div");
  div.className = "vendor-phone-row";
  div.style.cssText = "display: flex; gap: 8px; margin-bottom: 8px;";
  div.innerHTML = `
    <input type="text" class="form-input vendor-phone-input" placeholder="+1 (312) 555-0144 (Secondary)" required />
    <button type="button" class="btn btn-secondary" onclick="removePhoneRow(this)">✕</button>
  `;
  container.appendChild(div);
}

function removePhoneRow(btn) {
  const row = btn.closest(".vendor-phone-row");
  if (row) row.remove();
}

function handleModalSubmit(type, form) {
  if (type === "job" || type === "edit-job") {
    const storeName = document.getElementById("mStoreName").value.trim();
    const storeAddress = document.getElementById("mStoreAddress").value.trim();
    const designation = document.getElementById("mDesignation").value;
    const assignedUser = document.getElementById("mAssignedUser").value;
    const jobRevenue =
      parseFloat(document.getElementById("mJobRevenue").value) || 850.0;
    const urgency = document.getElementById("mUrgency").value;

    const initials = assignedUser
      ? assignedUser
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase()
          .slice(0, 2)
      : "OP";

    if (type === "edit-job" && form) {
      const editId = parseInt(form.getAttribute("data-edit-id"), 10);
      const existingJob = masterJobsDataset.find((j) => j.id === editId);
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
        addedDate: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
        vendorCharges: 450.0,
        jobRevenue,
        urgency,
        status: "New",
      };
      masterJobsDataset.unshift(newJob);
      showToast(`New Work Order for ${storeName} created successfully!`);
    }

    if (typeof renderDashboardActiveJobs === "function")
      renderDashboardActiveJobs();
    if (typeof renderAllJobsMasterTable === "function")
      renderAllJobsMasterTable();
  } else if (type === "vendor" || type === "edit-vendor") {
    const vName = document.getElementById("mVendorName").value.trim();
    const vType = document.getElementById("mVendorType").value;
    const vLocation = document.getElementById("mVendorLocation").value.trim();
    const vRemark = document.getElementById("mVendorRemark").value.trim();

    const phoneInputs = Array.from(
      document.querySelectorAll(".vendor-phone-input"),
    )
      .map((input) => input.value.trim())
      .filter((val) => val.length > 0);

    const primaryPhone = phoneInputs[0] || "+1 (800) 555-0000";
    const secondaryPhone = phoneInputs.slice(1).join(" / ");

    const initials =
      vName
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2) || "VN";

    if (type === "edit-vendor" && form) {
      const editId = parseInt(form.getAttribute("data-edit-id"), 10);
      if (typeof masterVendorsDataset !== "undefined") {
        const existingVendor = masterVendorsDataset.find(
          (v) => v.id === editId,
        );
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
        remark: vRemark,
      };
      if (typeof masterVendorsDataset !== "undefined") {
        masterVendorsDataset.unshift(newVendor);
      }
      showToast(`Vendor "${vName}" added successfully!`);
    }

    if (typeof renderMasterVendorsTable === "function")
      renderMasterVendorsTable();
  } else if (type === "user" || type === "edit-user") {
    const uLogin = document.getElementById("mUserLogin").value.trim();
    const uName = document.getElementById("mUserName").value.trim();
    const uPass = document.getElementById("mUserPassword").value;
    const uRole = document.getElementById("mUserRole").value;
    const uStatus = document.getElementById("mUserStatus").value;

    const initials =
      uName
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2) || "US";

    if (type === "edit-user" && form) {
      const editId = parseInt(form.getAttribute("data-edit-id"), 10);
      const existingUser = masterUsersDataset.find((u) => u.id === editId);
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
        avatar: initials,
      };
      masterUsersDataset.unshift(newUser);
      showToast(`User account "${uName}" created successfully!`);
    }

    if (typeof renderMasterUsersCards === "function") renderMasterUsersCards();
  }
}
