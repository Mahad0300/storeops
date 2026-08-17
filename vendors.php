<?php
$pageTitle = "Certified Vendors Directory - StoreOps CRM";
$activePage = "vendors";
$pageScript = "vendors";
require_once "includes/header.php";
?>

<div id="vendorsView" class="page-view-section active">
  <div class="hero-header-row">
    <div>
      <h1 class="hero-title">Certified Vendors Directory</h1>
      <p class="hero-subtitle">
        Manage contractor partners, contact numbers, trade disciplines,
        and vendor remarks.
      </p>
    </div>
    <button
      class="crm-btn-primary main-create-btn"
      onclick="openCRMModal('vendor')"
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
      ADD NEW VENDOR
    </button>
  </div>

  <!-- Master Vendors Data Table Panel -->
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
          id="vendorsTableFilterSearch"
          placeholder="Filter by vendor name, number, trade, location..."
          class="toolbar-search-input"
        />
      </div>

      <div class="toolbar-filters-group">
        <!-- Comprehensive Vendor Type Filter Dropdown -->
        <select id="filterVendorTypeSelect" class="toolbar-select">
          <option value="ALL">All Types</option>
          <option value="Anything">Anything</option>
          <option value="Awnings Replacement">
            Awnings Replacement
          </option>
          <option value="Carpet / Duct / Tiles Cleaning">
            Carpet / Duct / Tiles Cleaning
          </option>
          <option value="Carpet Cleaner">Carpet Cleaner</option>
          <option value="Carpet Tiles Replacement">
            Carpet Tiles Replacement
          </option>
          <option value="Electrician">Electrician</option>
          <option value="Fences / Roll up Gates / Doors">
            Fences / Roll up Gates / Doors
          </option>
          <option value="Fire Inspection & Extinguisher">
            Fire Inspection & Extinguisher
          </option>
          <option value="Fire Protection">Fire Protection</option>
          <option value="Glass Replacement">Glass Replacement</option>
          <option value="Handyman">Handyman</option>
          <option value="Handyman / Electrician">
            Handyman / Electrician
          </option>
          <option value="HVAC">HVAC</option>
          <option value="Locksmith">Locksmith</option>
          <option value="Locksmith & Glass Work">
            Locksmith & Glass Work
          </option>
          <option value="Locksmith, HVAC, Plumbing, Cleaner">
            Locksmith, HVAC, Plumbing, Cleaner
          </option>
          <option value="Painter">Painter</option>
          <option value="Plumbing">Plumbing</option>
          <option value="Roofing">Roofing</option>
          <option value="Signage Cleaning">Signage Cleaning</option>
          <option value="Signage Company">Signage Company</option>
          <option value="Snow Removing">Snow Removing</option>
          <option value="Tint Removal">Tint Removal</option>
          <option value="Window Cleaner">Window Cleaner</option>
          <option value="Window Cleaner / Handyman">
            Window Cleaner / Handyman
          </option>
          <option value="Window Cleaning">Window Cleaning</option>
          <option value="Window Replacement">Window Replacement</option>
          <option value="Windows Cleaning">Windows Cleaning</option>
        </select>

        <!-- Dedicated Location Search Input -->
        <div class="toolbar-left-search toolbar-min-170">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
            ></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <input
            type="text"
            id="filterVendorLocationInput"
            placeholder="Filter by location..."
            class="toolbar-search-input"
          />
        </div>

        <!-- Reset / Refresh Button -->
        <button
          class="icon-btn refresh-btn"
          id="btnResetVendorsFilters"
          title="Reset Vendor Filters"
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

    <!-- Comprehensive Vendors Table -->
    <div class="table-responsive">
      <table class="crm-table master-jobs-table">
        <thead>
          <tr>
            <th>VENDOR NAME</th>
            <th>VENDOR NUMBER(S)</th>
            <th>VENDOR TYPE</th>
            <th>LOCATION</th>
            <th>REMARK</th>
            <th class="text-right">ACTIONS</th>
          </tr>
        </thead>
        <tbody id="masterVendorsTableBody">
          <!-- Dynamically populated by vendors.js -->
        </tbody>
      </table>
    </div>

    <!-- Table Pagination Footer (Max 10 per page) -->
    <div class="table-pagination-footer">
      <span class="pagination-info" id="vendorPaginationInfo"
        >Showing 1 to 10 of 10 Vendors</span
      >
      <div class="pagination-controls">
        <button class="pagination-btn" id="btnPrevVendorsPage" disabled>
          ‹ Prev
        </button>
        <span class="pagination-page-num" id="vendorCurrentPageNum"
          >1</span
        >
        <button class="pagination-btn" id="btnNextVendorsPage" disabled>
          Next ›
        </button>
      </div>
    </div>
  </div>
</div>

<!-- Interactive Remark Add/Edit Modal -->
<div id="remarkModalBackdrop" class="modal-backdrop">
  <div class="modal-content modal-sm-480">
    <div class="modal-header">
      <h3 class="modal-title" id="remarkModalTitle">
        Add / Edit Vendor Remark
      </h3>
      <span class="modal-close-btn" id="closeRemarkModalBtn">&times;</span>
    </div>
    <form id="remarkForm">
      <div class="modal-body">
        <div class="form-group">
          <label class="form-label">Vendor Remark / Comment</label>
          <textarea
            id="txtVendorRemark"
            class="form-control modal-textarea"
            rows="3"
            placeholder="e.g. Good Vendor, Fast Response, W9 Certified..."
            required
          ></textarea>
        </div>

        <div class="form-group">
          <label class="form-label">Quick Presets</label>
          <div class="remark-presets-group">
            <button
              type="button"
              class="remark-chip-btn"
              data-preset-val="Good Vendor"
            >
              Good Vendor
            </button>
            <button
              type="button"
              class="remark-chip-btn"
              data-preset-val="Fast Response"
            >
              Fast Response
            </button>
            <button
              type="button"
              class="remark-chip-btn"
              data-preset-val="Preferred Partner"
            >
              Preferred Partner
            </button>
            <button
              type="button"
              class="remark-chip-btn"
              data-preset-val="W9 Pending"
            >
              W9 Pending
            </button>
            <button
              type="button"
              class="remark-chip-btn"
              data-preset-val="Highly Recommended"
            >
              Highly Recommended
            </button>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="submit" class="btn-primary-action">
          Save Remark
        </button>
      </div>
    </form>
  </div>
</div>

<?php require_once "includes/footer.php"; ?>
