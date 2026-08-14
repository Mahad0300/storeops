/**
 * StoreOps CRM - System Audit Logs Workspace (audit.js)
 * Master Audit Trail Table, Action Type & User Filters, Pagination
 */

const initialAuditLogsData = [
  {
    id: 1,
    timestamp: "2026-08-14 03:22:15 UTC",
    userName: "Michael Carter",
    avatar: "MC",
    action: "Status Changed",
    workOrder: "#WO-2026-00101",
    details:
      "Changed status from Pending Approval to In Progress (Technician En Route)",
  },
  {
    id: 2,
    timestamp: "2026-08-14 02:45:10 UTC",
    userName: "Alex Morgan",
    avatar: "AM",
    action: "Created Work Order",
    workOrder: "#WO-2026-00116",
    details:
      "Created emergency repair dispatch for Store #554 (Miami Springs HVAC)",
  },
  {
    id: 3,
    timestamp: "2026-08-13 23:10:44 UTC",
    userName: "Sophia Martinez",
    avatar: "SM",
    action: "Attached W9 Doc",
    workOrder: "#WO-2026-00104",
    details:
      "Uploaded compliance document W9_Tax_2026_Ver.pdf for vendor TradeCraft",
  },
  {
    id: 4,
    timestamp: "2026-08-13 21:05:30 UTC",
    userName: "Marcus Vance",
    avatar: "MV",
    action: "Updated Vendor Trade",
    workOrder: "#WO-2026-00108",
    details: "Reassigned trade category from Plumbing to General Contracting",
  },
  {
    id: 5,
    timestamp: "2026-08-13 18:40:12 UTC",
    userName: "Sarah Jenkins",
    avatar: "SJ",
    action: "Status Changed",
    workOrder: "#WO-2026-00102",
    details: "Marked work order as Completed & Verified by store manager",
  },
  {
    id: 6,
    timestamp: "2026-08-13 16:15:00 UTC",
    userName: "Michael Carter",
    avatar: "MC",
    action: "User Modified",
    workOrder: "N/A",
    details: "Promoted user account @alex_morgan to System Role 'Team Lead'",
  },
  {
    id: 7,
    timestamp: "2026-08-13 14:02:55 UTC",
    userName: "John Doe",
    avatar: "JD",
    action: "Deleted Record",
    workOrder: "#WO-2026-00095",
    details: "Removed duplicate invoice draft record #INV-8841 ($450.00)",
  },
  {
    id: 8,
    timestamp: "2026-08-13 11:30:20 UTC",
    userName: "Robert Smith",
    avatar: "RS",
    action: "Created Work Order",
    workOrder: "#WO-2026-00115",
    details:
      "Logged new preventive maintenance request for Store #312 (Tampa General)",
  },
  {
    id: 9,
    timestamp: "2026-08-12 22:18:05 UTC",
    userName: "Elena Rodriguez",
    avatar: "ER",
    action: "Status Changed",
    workOrder: "#WO-2026-00109",
    details: "Updated status from In Progress to Awaiting Invoice Payment",
  },
  {
    id: 10,
    timestamp: "2026-08-12 19:44:33 UTC",
    userName: "Michael Carter",
    avatar: "MC",
    action: "Attached W9 Doc",
    workOrder: "#WO-2026-00111",
    details: "Attached signed vendor contract agreement agreement_final.pdf",
  },
  {
    id: 11,
    timestamp: "2026-08-12 17:12:40 UTC",
    userName: "Alex Morgan",
    avatar: "AM",
    action: "Updated Vendor Trade",
    workOrder: "#WO-2026-00103",
    details: "Updated primary contractor contact phone to (305) 555-0199",
  },
  {
    id: 12,
    timestamp: "2026-08-12 14:00:15 UTC",
    userName: "Marcus Vance",
    avatar: "MV",
    action: "Created Work Order",
    workOrder: "#WO-2026-00114",
    details: "Dispatched priority electrical inspection for Store #108",
  },
  {
    id: 13,
    timestamp: "2026-08-11 20:30:00 UTC",
    userName: "Sarah Jenkins",
    avatar: "SJ",
    action: "Status Changed",
    workOrder: "#WO-2026-00099",
    details: "Status escalated to Critical Priority due to refrigeration leak",
  },
  {
    id: 14,
    timestamp: "2026-08-11 16:22:11 UTC",
    userName: "Sophia Martinez",
    avatar: "SM",
    action: "User Modified",
    workOrder: "N/A",
    details: "Updated account status for @john_doe to 'Suspended / Blocked'",
  },
  {
    id: 15,
    timestamp: "2026-08-11 12:45:09 UTC",
    userName: "Michael Carter",
    avatar: "MC",
    action: "Created Work Order",
    workOrder: "#WO-2026-00113",
    details: "Created work order for Store #402 (Orlando North Signage Repair)",
  },
  {
    id: 16,
    timestamp: "2026-08-10 09:15:30 UTC",
    userName: "Robert Smith",
    avatar: "RS",
    action: "Deleted Record",
    workOrder: "#WO-2026-00088",
    details: "Purged archived temporary log backup file #BAK-2026-08",
  },
];

let masterAuditLogsDataset = [...initialAuditLogsData];
let currentAuditPage = 1;
const AUDIT_PER_PAGE = 10;

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("masterAuditTableBody")) {
    renderMasterAuditLogsTable();
    initAuditFilters();
  }
});

function renderMasterAuditLogsTable() {
  const tableBody = document.getElementById("masterAuditTableBody");
  if (!tableBody) return;

  const searchInput = document.getElementById("auditFilterSearch");
  const actionSelect = document.getElementById("filterAuditActionSelect");
  const userSelect = document.getElementById("filterAuditUserSelect");

  const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : "";
  const actionFilter = actionSelect ? actionSelect.value : "ALL";
  const userFilter = userSelect ? userSelect.value : "ALL";

  const filteredLogs = masterAuditLogsDataset.filter((log) => {
    const matchesSearch =
      !searchTerm ||
      log.timestamp.toLowerCase().includes(searchTerm) ||
      log.userName.toLowerCase().includes(searchTerm) ||
      log.action.toLowerCase().includes(searchTerm) ||
      log.workOrder.toLowerCase().includes(searchTerm) ||
      log.details.toLowerCase().includes(searchTerm);

    const matchesAction = actionFilter === "ALL" || log.action === actionFilter;
    const matchesUser = userFilter === "ALL" || log.userName === userFilter;

    return matchesSearch && matchesAction && matchesUser;
  });

  const totalLogs = filteredLogs.length;
  const totalPages = Math.ceil(totalLogs / AUDIT_PER_PAGE) || 1;

  if (currentAuditPage > totalPages) currentAuditPage = totalPages;
  if (currentAuditPage < 1) currentAuditPage = 1;

  const startIndex = (currentAuditPage - 1) * AUDIT_PER_PAGE;
  const pageLogs = filteredLogs.slice(startIndex, startIndex + AUDIT_PER_PAGE);

  // Update Pagination Controls
  const paginationInfo = document.getElementById("auditPaginationInfo");
  const currentPageNum = document.getElementById("auditCurrentPageNum");
  const btnPrev = document.getElementById("btnPrevAuditPage");
  const btnNext = document.getElementById("btnNextAuditPage");

  if (paginationInfo) {
    const endDisplay = Math.min(startIndex + AUDIT_PER_PAGE, totalLogs);
    const startDisplay = totalLogs === 0 ? 0 : startIndex + 1;
    paginationInfo.textContent = `Showing ${startDisplay} to ${endDisplay} of ${totalLogs} Log Entries`;
  }
  if (currentPageNum) currentPageNum.textContent = currentAuditPage;
  if (btnPrev) btnPrev.disabled = currentAuditPage <= 1;
  if (btnNext) btnNext.disabled = currentAuditPage >= totalPages;

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

  tableBody.innerHTML = pageLogs
    .map((log) => {
      let actionBadgeClass = "updated";
      if (log.action.includes("Created")) actionBadgeClass = "created";
      else if (log.action.includes("Status")) actionBadgeClass = "status";
      else if (log.action.includes("Attached") || log.action.includes("W9"))
        actionBadgeClass = "attached";
      else if (log.action.includes("Deleted")) actionBadgeClass = "deleted";

      const woTagHtml =
        log.workOrder !== "N/A"
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
    })
    .join("");
}

function initAuditFilters() {
  const searchInput = document.getElementById("auditFilterSearch");
  const actionSelect = document.getElementById("filterAuditActionSelect");
  const userSelect = document.getElementById("filterAuditUserSelect");
  const resetBtn = document.getElementById("btnResetAuditFilters");

  const btnPrev = document.getElementById("btnPrevAuditPage");
  const btnNext = document.getElementById("btnNextAuditPage");

  if (searchInput)
    searchInput.addEventListener("input", () => {
      currentAuditPage = 1;
      renderMasterAuditLogsTable();
    });
  if (actionSelect)
    actionSelect.addEventListener("change", () => {
      currentAuditPage = 1;
      renderMasterAuditLogsTable();
    });
  if (userSelect)
    userSelect.addEventListener("change", () => {
      currentAuditPage = 1;
      renderMasterAuditLogsTable();
    });

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      if (actionSelect) actionSelect.value = "ALL";
      if (userSelect) userSelect.value = "ALL";
      currentAuditPage = 1;
      renderMasterAuditLogsTable();
      showToast("Audit filters reset to default");
    });
  }

  if (btnPrev) {
    btnPrev.addEventListener("click", () => {
      if (currentAuditPage > 1) {
        currentAuditPage--;
        renderMasterAuditLogsTable();
      }
    });
  }

  if (btnNext) {
    btnNext.addEventListener("click", () => {
      currentAuditPage++;
      renderMasterAuditLogsTable();
    });
  }
}
