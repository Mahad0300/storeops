/**
 * StoreOps CRM - Notifications & Security Center (notifications.js)
 * Notifications Feed, Category Filters (WORK ORDER, CRITICAL, VENDOR, SECURITY), Read/Dismiss Handlers
 */

const initialNotificationsData = [
  {
    id: 1,
    title: "Technician Dispatched to Store #101",
    category: "WORK ORDER",
    timeAgo: "8 mins ago",
    unread: true,
    workOrder: "#WO-2026-00101",
    description:
      "Technician Mahad Bukhari is en route for emergency HVAC repair at Coral Springs location.",
    iconType: "workorder",
  },
  {
    id: 2,
    title: "Critical Refrigeration Temperature Warning",
    category: "CRITICAL",
    timeAgo: "22 mins ago",
    unread: true,
    workOrder: "#WO-2026-00099",
    description:
      "Automated sensor alert: Walk-in freezer temperature reached 42°F at Store #099 (Miami North).",
    iconType: "critical",
  },
  {
    id: 3,
    title: "Vendor Tax Compliance W9 Uploaded",
    category: "VENDOR",
    timeAgo: "1 hour ago",
    unread: true,
    workOrder: "#WO-2026-00104",
    description:
      "Vendor TradeCraft Contracting uploaded updated 2026 W9 Tax Verification & Liability Certificate.",
    iconType: "vendor",
  },
  {
    id: 4,
    title: "System Role Promoted to Team Lead",
    category: "SECURITY",
    timeAgo: "3 hours ago",
    unread: true,
    workOrder: "N/A",
    description:
      "Administrator updated account privileges for @alex_morgan. New System Role: Team Lead.",
    iconType: "security",
  },
  {
    id: 5,
    title: "Work Order Invoice Payment Verified",
    category: "WORK ORDER",
    timeAgo: "5 hours ago",
    unread: true,
    workOrder: "#WO-2026-00102",
    description:
      "ACH Direct Deposit of $750.00 confirmed for Electrical Repair at Fort Lauderdale Store #102.",
    iconType: "workorder",
  },
  {
    id: 6,
    title: "Emergency Plumbing Inspection Dispatched",
    category: "CRITICAL",
    timeAgo: "8 hours ago",
    unread: false,
    workOrder: "#WO-2026-00116",
    description:
      "Dispatched contractor Apex Plumbing Co. for main line blockage at Store #554.",
    iconType: "critical",
  },
  {
    id: 7,
    title: "Vendor General Contractor Insurance Expiration Notice",
    category: "VENDOR",
    timeAgo: "1 day ago",
    unread: false,
    workOrder: "N/A",
    description:
      "General Contractor license for BuildPro Solutions is scheduled to expire in 14 days.",
    iconType: "vendor",
  },
  {
    id: 8,
    title: "Work Order Completed & Verified",
    category: "WORK ORDER",
    timeAgo: "1 day ago",
    unread: false,
    workOrder: "#WO-2026-00108",
    description:
      "Store Manager Sarah Jenkins verified completion of lighting installation at Tampa Store #108.",
    iconType: "workorder",
  },
  {
    id: 9,
    title: "Security Login Attempt from New IP",
    category: "SECURITY",
    timeAgo: "2 days ago",
    unread: false,
    workOrder: "N/A",
    description:
      "Successful login for @admin_mahad from IP Address 192.168.1.104 (Windows 11 Chrome).",
    iconType: "security",
  },
  {
    id: 10,
    title: "Preventive Maintenance Schedule Generated",
    category: "WORK ORDER",
    timeAgo: "2 days ago",
    unread: false,
    workOrder: "#WO-2026-00115",
    description:
      "System automatically generated quarterly AC filter replacement schedule for 12 Florida stores.",
    iconType: "workorder",
  },
  {
    id: 11,
    title: "Critical Priority Escalation Alert",
    category: "CRITICAL",
    timeAgo: "3 days ago",
    unread: false,
    workOrder: "#WO-2026-00088",
    description:
      "Automatic escalation triggered for unanswered service request at Store #312.",
    iconType: "critical",
  },
  {
    id: 12,
    title: "Vendor Account Active Status Confirmed",
    category: "VENDOR",
    timeAgo: "4 days ago",
    unread: false,
    workOrder: "N/A",
    description:
      "CoolTech Mechanical vendor status updated to 'Active / Operational'.",
    iconType: "vendor",
  },
];

let masterNotificationsDataset = [...initialNotificationsData];
let currentNotifCategory = "ALL";

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("notifFeedContainer")) {
    renderNotificationsFeed();
    initNotifEvents();
  }
});

function renderNotificationsFeed() {
  const container = document.getElementById("notifFeedContainer");
  if (!container) return;

  const searchInput = document.getElementById("notifFilterSearch");
  const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : "";

  const filteredNotifs = masterNotificationsDataset.filter((n) => {
    const matchesSearch =
      !searchTerm ||
      n.title.toLowerCase().includes(searchTerm) ||
      n.description.toLowerCase().includes(searchTerm) ||
      n.workOrder.toLowerCase().includes(searchTerm) ||
      n.category.toLowerCase().includes(searchTerm);

    let matchesCat = true;
    if (currentNotifCategory === "UNREAD") matchesCat = n.unread;
    else if (currentNotifCategory === "WORK ORDER")
      matchesCat = n.category === "WORK ORDER";
    else if (currentNotifCategory === "CRITICAL")
      matchesCat = n.category === "CRITICAL";
    else if (currentNotifCategory === "VENDOR")
      matchesCat = n.category === "VENDOR";
    else if (currentNotifCategory === "SECURITY")
      matchesCat = n.category === "SECURITY";

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

  container.innerHTML = filteredNotifs
    .map((n) => {
      let iconSvg = "";
      if (n.iconType === "workorder") {
        iconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>`;
      } else if (n.iconType === "critical") {
        iconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`;
      } else if (n.iconType === "vendor") {
        iconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>`;
      } else {
        iconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`;
      }

      const woTag =
        n.workOrder !== "N/A"
          ? `<a href="jobs.html" class="notif-workorder-link"><span>${escapeHTML(n.workOrder)}</span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>`
          : "";

      return `
      <div class="notification-card-item ${n.unread ? "unread" : ""}" id="notif-item-${n.id}">
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
            ${woTag ? `<div>${woTag}</div>` : ""}
          </div>
        </div>

        <div class="notif-item-right-actions">
          ${n.unread ? `<button type="button" class="notif-action-btn" onclick="markSingleNotifAsRead(${n.id})">Mark as Read</button>` : ""}
          <button type="button" class="notif-dismiss-btn" title="Dismiss Notification" onclick="dismissNotification(${n.id})">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
      </div>
    `;
    })
    .join("");
}

function updateNotifKPIs() {
  const unreadCount = masterNotificationsDataset.filter((n) => n.unread).length;
  const navBadge = document.getElementById("unreadNotifNavBadge");
  const unreadTabBtn = document.querySelector(
    '.notif-tab-btn[data-category="UNREAD"]',
  );

  if (navBadge) navBadge.textContent = unreadCount;
  if (unreadTabBtn) unreadTabBtn.textContent = `Unread (${unreadCount})`;
}

function markSingleNotifAsRead(id) {
  const notif = masterNotificationsDataset.find((n) => n.id === id);
  if (!notif || !notif.unread) return;
  notif.unread = false;
  renderNotificationsFeed();
  showToast("Notification marked as Read");
}

function dismissNotification(id) {
  const notif = masterNotificationsDataset.find((n) => n.id === id);
  if (!notif) return;
  masterNotificationsDataset = masterNotificationsDataset.filter(
    (n) => n.id !== id,
  );
  renderNotificationsFeed();
  showToast("Notification dismissed");
}

function markAllNotificationsAsRead() {
  let count = 0;
  masterNotificationsDataset.forEach((n) => {
    if (n.unread) {
      n.unread = false;
      count++;
    }
  });
  renderNotificationsFeed();
  showToast(
    count > 0
      ? `Marked ${count} notifications as Read`
      : "All notifications are already read",
  );
}

function filterNotifCategory(category, btnElement) {
  currentNotifCategory = category;
  const tabs = document.querySelectorAll(".notif-tab-btn");
  tabs.forEach((t) => t.classList.remove("active"));
  if (btnElement) btnElement.classList.add("active");
  renderNotificationsFeed();
}

function resetNotifFilters() {
  const searchInput = document.getElementById("notifFilterSearch");
  if (searchInput) searchInput.value = "";
  currentNotifCategory = "ALL";
  const tabs = document.querySelectorAll(".notif-tab-btn");
  tabs.forEach((t) => t.classList.remove("active"));
  if (tabs.length > 0) tabs[0].classList.add("active");
  renderNotificationsFeed();
  showToast("Notification filters reset");
}

function initNotifEvents() {
  const searchInput = document.getElementById("notifFilterSearch");
  if (searchInput)
    searchInput.addEventListener("input", renderNotificationsFeed);
}
