/**
 * StoreOps CRM - Certified Vendors Directory (vendors.js)
 * Master Vendors Directory Table, Multi-Trade & Location Filters, Pagination, Remarks Modal System
 */

const initialVendorsData = [
  {
    id: 201,
    name: "Apex Electrical Solutions",
    avatar: "AE",
    phone: "+1 (800) 555-0199",
    secondaryPhone: "+1 (312) 555-0144",
    type: "Electrician",
    location: "Chicago, IL",
    remark: "Good Vendor",
  },
  {
    id: 202,
    name: "ProClean Facilities",
    avatar: "PF",
    phone: "+1 (800) 555-0288",
    secondaryPhone: "+1 (312) 555-0211",
    type: "Window Cleaning",
    location: "Niles, IL",
    remark: "",
  },
  {
    id: 203,
    name: "Precision Plumbing Corp",
    avatar: "PP",
    phone: "+1 (800) 555-0377",
    secondaryPhone: "+1 (312) 555-0322",
    type: "Plumbing",
    location: "Evanston, IL",
    remark: "Preferred Partner",
  },
  {
    id: 204,
    name: "Titan HVAC Systems",
    avatar: "TH",
    phone: "+1 (800) 555-0466",
    secondaryPhone: "+1 (248) 555-0433",
    type: "HVAC",
    location: "West Bloomfield, MI",
    remark: "",
  },
  {
    id: 205,
    name: "Shield Fire Protection",
    avatar: "SF",
    phone: "+1 (800) 555-0555",
    secondaryPhone: "+1 (954) 555-0588",
    type: "Fire Protection",
    location: "Coral Springs, FL",
    remark: "Fast Response",
  },
  {
    id: 206,
    name: "Apex Roofing & Repair",
    avatar: "AR",
    phone: "+1 (800) 555-0644",
    secondaryPhone: "+1 (312) 555-0677",
    type: "Roofing",
    location: "Schaumburg, IL",
    remark: "",
  },
  {
    id: 207,
    name: "Benchmark Locksmiths",
    avatar: "BL",
    phone: "+1 (800) 555-0722",
    secondaryPhone: "+1 (312) 555-0799",
    type: "Locksmith",
    location: "Oak Brook, IL",
    remark: "Available 24/7",
  },
  {
    id: 208,
    name: "Allied Carpentry & Doors",
    avatar: "AC",
    phone: "+1 (800) 555-0811",
    secondaryPhone: "+1 (630) 555-0844",
    type: "Fences / Roll up Gates / Doors",
    location: "Aurora, IL",
    remark: "Good Vendor",
  },
  {
    id: 209,
    name: "Metro Glass Replacement",
    avatar: "MG",
    phone: "+1 (800) 555-0933",
    secondaryPhone: "+1 (630) 555-0966",
    type: "Glass Replacement",
    location: "Naperville, IL",
    remark: "",
  },
  {
    id: 210,
    name: "Vantage Painting & Decor",
    avatar: "VP",
    phone: "+1 (800) 555-1044",
    secondaryPhone: "+1 (815) 555-1077",
    type: "Painter",
    location: "Joliet, IL",
    remark: "Preferred Partner",
  },
  {
    id: 211,
    name: "CleanTech Carpet & Tile",
    avatar: "CC",
    phone: "+1 (800) 555-1155",
    secondaryPhone: "+1 (847) 555-1188",
    type: "Carpet / Duct / Tiles Cleaning",
    location: "Des Plaines, IL",
    remark: "Fast Response",
  },
  {
    id: 212,
    name: "Midwest Awnings Corp",
    avatar: "MA",
    phone: "+1 (800) 555-1266",
    secondaryPhone: "+1 (847) 555-1299",
    type: "Awnings Replacement",
    location: "Elgin, IL",
    remark: "",
  },
  {
    id: 213,
    name: "Guardian Fire Inspection",
    avatar: "GF",
    phone: "+1 (800) 555-1377",
    secondaryPhone: "+1 (312) 555-1322",
    type: "Fire Inspection & Extinguisher",
    location: "Schaumburg, IL",
    remark: "Highly Recommended",
  },
  {
    id: 214,
    name: "Polar Chill HVAC Solutions",
    avatar: "PC",
    phone: "+1 (800) 555-1488",
    secondaryPhone: "+1 (847) 555-1411",
    type: "HVAC",
    location: "Highland Park, IL",
    remark: "",
  },
  {
    id: 215,
    name: "Quick Fix Handyman Services",
    avatar: "QF",
    phone: "+1 (800) 555-1599",
    secondaryPhone: "+1 (847) 555-1533",
    type: "Handyman / Electrician",
    location: "Skokie, IL",
    remark: "Good Vendor",
  },
];

let masterVendorsDataset = [...initialVendorsData];
let currentEditingRemarkVendorId = null;
let currentVendorPage = 1;
const VENDORS_PER_PAGE = 10;

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("masterVendorsTableBody")) {
    renderMasterVendorsTable();
    initVendorFilters();
    initRemarkModal();
  }
});

function renderMasterVendorsTable() {
  const tbody = document.getElementById("masterVendorsTableBody");
  if (!tbody) return;

  const searchInput = document.getElementById("vendorsTableFilterSearch");
  const typeSelect = document.getElementById("filterVendorTypeSelect");
  const locationInput = document.getElementById("filterVendorLocationInput");

  const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : "";
  const typeFilter = typeSelect ? typeSelect.value : "ALL";
  const locationFilter = locationInput
    ? locationInput.value.toLowerCase().trim()
    : "";

  const filteredVendors = masterVendorsDataset.filter((v) => {
    const matchesSearch =
      !searchTerm ||
      v.name.toLowerCase().includes(searchTerm) ||
      v.phone.toLowerCase().includes(searchTerm) ||
      v.type.toLowerCase().includes(searchTerm) ||
      v.location.toLowerCase().includes(searchTerm);

    const matchesType = typeFilter === "ALL" || v.type === typeFilter;
    const matchesLocation =
      !locationFilter || v.location.toLowerCase().includes(locationFilter);

    return matchesSearch && matchesType && matchesLocation;
  });

  const countBadge = document.getElementById("vendorsCountBadge");
  const kpiTotal = document.getElementById("kpiTotalVendors");
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
  const pagInfo = document.getElementById("vendorPaginationInfo");
  const pagPageNum = document.getElementById("vendorCurrentPageNum");
  const btnPrev = document.getElementById("btnPrevVendorsPage");
  const btnNext = document.getElementById("btnNextVendorsPage");

  if (pagInfo) {
    pagInfo.textContent =
      totalFiltered > 0
        ? `Showing ${startIndex + 1} to ${endIndex} of ${totalFiltered} Vendors`
        : `Showing 0 of 0 Vendors`;
  }
  if (pagPageNum) pagPageNum.textContent = currentVendorPage;
  if (btnPrev) btnPrev.disabled = currentVendorPage <= 1;
  if (btnNext) btnNext.disabled = currentVendorPage >= totalPages;

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
  const activeVendorTrades = Array.from(
    new Set(masterVendorsDataset.map((item) => item.type)),
  ).sort();

  tbody.innerHTML = pagedVendors
    .map((v) => {
      const hasRemark = v.remark && v.remark.trim().length > 0;
      const remarkBtnMarkup = hasRemark
        ? `<button type="button" class="remark-btn has-remark" onclick="openRemarkModal(${v.id})">
           <span>${escapeHTML(v.remark)}</span>
           <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
         </button>`
        : `<button type="button" class="remark-btn add-remark" onclick="openRemarkModal(${v.id})">Add Remark</button>`;

      const vendorTradesList = Array.from(
        new Set([...activeVendorTrades, v.type]),
      ).sort();
      const typeOptions = vendorTradesList
        .map(
          (trade) => `
      <option value="${escapeHTML(trade)}" ${v.type === trade ? "selected" : ""}>${escapeHTML(trade)}</option>
    `,
        )
        .join("");

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
    })
    .join("");
}

function updateVendorType(vendorId, newType) {
  const v = masterVendorsDataset.find((item) => item.id === vendorId);
  if (v) {
    v.type = newType;
    showToast(`Vendor "${v.name}" trade updated to ${newType}!`);
    renderMasterVendorsTable();
  }
}

function initVendorFilters() {
  const searchInput = document.getElementById("vendorsTableFilterSearch");
  const typeSelect = document.getElementById("filterVendorTypeSelect");
  const locationInput = document.getElementById("filterVendorLocationInput");
  const resetBtn = document.getElementById("btnResetVendorsFilters");

  const btnPrev = document.getElementById("btnPrevVendorsPage");
  const btnNext = document.getElementById("btnNextVendorsPage");

  if (searchInput)
    searchInput.addEventListener("input", () => {
      currentVendorPage = 1;
      renderMasterVendorsTable();
    });
  if (typeSelect)
    typeSelect.addEventListener("change", () => {
      currentVendorPage = 1;
      renderMasterVendorsTable();
    });
  if (locationInput)
    locationInput.addEventListener("input", () => {
      currentVendorPage = 1;
      renderMasterVendorsTable();
    });

  if (btnPrev) {
    btnPrev.addEventListener("click", () => {
      if (currentVendorPage > 1) {
        currentVendorPage--;
        renderMasterVendorsTable();
      }
    });
  }

  if (btnNext) {
    btnNext.addEventListener("click", () => {
      currentVendorPage++;
      renderMasterVendorsTable();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      if (typeSelect) typeSelect.value = "ALL";
      if (locationInput) locationInput.value = "";
      currentVendorPage = 1;
      renderMasterVendorsTable();
      showToast("Vendor filters reset");
    });
  }

  const globalSearch = document.getElementById("globalSearchInput");
  if (globalSearch) {
    globalSearch.addEventListener("input", (e) => {
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
  const backdrop = document.getElementById("remarkModalBackdrop");
  const closeBtn = document.getElementById("closeRemarkModalBtn");
  const cancelBtn = document.getElementById("cancelRemarkModalBtn");
  const form = document.getElementById("remarkForm");

  if (closeBtn) closeBtn.addEventListener("click", closeRemarkModal);
  if (cancelBtn) cancelBtn.addEventListener("click", closeRemarkModal);
  if (backdrop) {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) closeRemarkModal();
    });
  }

  // Preset Chips
  document.querySelectorAll(".remark-chip-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const val = btn.getAttribute("data-preset-val");
      const textarea = document.getElementById("txtVendorRemark");
      if (textarea) textarea.value = val;
    });
  });

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const txt = document.getElementById("txtVendorRemark").value.trim();
      if (currentEditingRemarkVendorId) {
        const v = masterVendorsDataset.find(
          (item) => item.id === currentEditingRemarkVendorId,
        );
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
  const v = masterVendorsDataset.find((item) => item.id === vendorId);
  if (!v) return;

  currentEditingRemarkVendorId = vendorId;
  const backdrop = document.getElementById("remarkModalBackdrop");
  const textarea = document.getElementById("txtVendorRemark");
  const title = document.getElementById("remarkModalTitle");

  if (textarea) textarea.value = v.remark || "";
  if (title) title.textContent = `Remark for ${v.name}`;
  if (backdrop) backdrop.classList.add("active");
}

function closeRemarkModal() {
  const backdrop = document.getElementById("remarkModalBackdrop");
  if (backdrop) backdrop.classList.remove("active");
  currentEditingRemarkVendorId = null;
}

function deleteVendor(id) {
  const v = masterVendorsDataset.find((item) => item.id === id);
  if (!v) return;
  if (confirm(`Are you sure you want to remove vendor "${v.name}"?`)) {
    masterVendorsDataset = masterVendorsDataset.filter(
      (item) => item.id !== id,
    );
    renderMasterVendorsTable();
    showToast(`Vendor "${v.name}" removed`);
  }
}

function editVendor(id) {
  const v = masterVendorsDataset.find((item) => item.id === id);
  if (!v) return;
  openCRMModal("edit-vendor", v);
}
