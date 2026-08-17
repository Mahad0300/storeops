<?php
$pageTitle = "Notifications & Alert Center - StoreOps CRM";
$activePage = "notifications";
$pageScript = "notifications";
require_once "includes/header.php";
?>

<div id="notificationsView" class="page-view-section active">
  <!-- Hero Title Row with Header Action Buttons -->
  <div class="hero-header-row">
    <div>
      <h1 class="hero-title">Notifications & Alert Center</h1>
      <p class="hero-subtitle">
        Stay informed with real-time system alerts, work order status
        updates, vendor compliance notices, and critical dispatches.
      </p>
    </div>
    <div class="hero-actions-group">
      <button
        class="crm-btn-secondary"
        id="btnMarkAllRead"
        onclick="markAllNotificationsAsRead()"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        Mark All as Read
      </button>
    </div>
  </div>

  <!-- Notifications Feed List -->
  <div class="notif-panel-clean mt-20">
    <!-- Glassmorphic Notifications Feed List -->
    <div id="notifFeedContainer" class="notif-feed-list">
      <!-- Notifications Rendered Dynamically via JS -->
    </div>
  </div>
</div>

<?php require_once "includes/footer.php"; ?>
