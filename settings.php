<?php
$pageTitle = "System & Account Settings - StoreOps CRM";
$activePage = "settings";
$pageScript = "settings";
require_once "includes/header.php";
?>

<div id="settingsView" class="page-view-section active">
  <!-- Hero Section -->
  <section class="hero-metrics-section">
    <div class="hero-header-row">
      <div>
        <h1 class="hero-title">System & Account Settings</h1>
        <p class="hero-subtitle">
          Manage your account profile, operational defaults, notification alerts, and security preferences
        </p>
      </div>
    </div>
  </section>

  <!-- Settings Grid Layout -->
  <div class="settings-container-grid">
    <!-- Left Navigation Tabs -->
    <div class="settings-tabs-card">
      <button type="button" class="settings-tab-btn active" data-tab="profile">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
        <span>My Profile</span>
      </button>

      <button type="button" class="settings-tab-btn" data-tab="operations">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
        <span>Operations Defaults</span>
      </button>

      <button type="button" class="settings-tab-btn" data-tab="notifications">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
        <span>Notifications</span>
      </button>

      <button type="button" class="settings-tab-btn" data-tab="security">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
        <span>Security & Sessions</span>
      </button>
    </div>

    <!-- Right Tab Content Panel -->
    <div class="settings-content-card">
      
      <!-- Panel 1: Profile & Credentials -->
      <div id="panel-profile" class="settings-tab-panel active">
        <h2 class="settings-section-title">My Profile & Account Credentials</h2>
        <p class="settings-section-sub">Update your personal account details, system display role, and login password.</p>

        <form id="profileSettingsForm">
          <div class="modal-form-grid-2col">
            <div class="form-group">
              <label class="form-label">Full Name</label>
              <input type="text" id="setFullName" class="form-control" value="Michael Carter" required />
            </div>
            <div class="form-group">
              <label class="form-label">System Username</label>
              <input type="text" id="setLoginName" class="form-control" value="michael_carter" required />
            </div>
          </div>

          <div class="modal-form-grid-2col mt-14">
            <div class="form-group">
              <label class="form-label">Email Address</label>
              <input type="email" id="setEmail" class="form-control" value="m.carter@storeops.com" required />
            </div>
            <div class="form-group">
              <label class="form-label">System Access Role</label>
              <input type="text" class="form-control input-disabled-muted" value="Administrator" disabled />
            </div>
          </div>

          <hr class="divider-line" />

          <h3 class="settings-sub-heading">Change Account Password</h3>
          
          <div class="modal-form-grid-2col">
            <div class="form-group">
              <label class="form-label">Current Password</label>
              <input type="password" id="setCurrentPassword" class="form-control" placeholder="••••••••" />
            </div>
            <div class="form-group">
              <label class="form-label">New Password</label>
              <input type="password" id="setNewPassword" class="form-control" placeholder="Enter new password" />
            </div>
          </div>

          <div class="form-actions-row">
            <button type="submit" class="btn-primary-action">
              Save Profile Changes
            </button>
          </div>
        </form>
      </div>

      <!-- Panel 2: Operations Defaults -->
      <div id="panel-operations" class="settings-tab-panel">
        <h2 class="settings-section-title">Work Order & Operational Defaults</h2>
        <p class="settings-section-sub">Configure system defaults for work order creation, currency, and table displays.</p>

        <form id="operationsSettingsForm">
          <div class="modal-form-grid-2col">
            <div class="form-group">
              <label class="form-label">Work Order Prefix</label>
              <input type="text" id="setWorkOrderPrefix" class="form-control" value="WO-2026-" required />
            </div>
            <div class="form-group">
              <label class="form-label">Default System Currency</label>
              <select id="setDefaultCurrency" class="form-control">
                <option value="USD">USD ($) - US Dollar</option>
                <option value="EUR">EUR (€) - Euro</option>
                <option value="GBP">GBP (£) - British Pound</option>
                <option value="CAD">CAD ($) - Canadian Dollar</option>
              </select>
            </div>
          </div>

          <div class="modal-form-grid-2col mt-14">
            <div class="form-group">
              <label class="form-label">Default Priority SLA Threshold</label>
              <select id="setDefaultSLA" class="form-control">
                <option value="24">24 Hours (Urgent)</option>
                <option value="48" selected>48 Hours (Standard SLA)</option>
                <option value="72">72 Hours (Extended)</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Default Table Items Per Page</label>
              <select id="setRowsPerPage" class="form-control">
                <option value="10" selected>10 Rows Per Page</option>
                <option value="20">20 Rows Per Page</option>
                <option value="50">50 Rows Per Page</option>
              </select>
            </div>
          </div>

          <div class="form-actions-row-lg">
            <button type="submit" class="btn-primary-action">
              Save Operational Settings
            </button>
          </div>
        </form>
      </div>

      <!-- Panel 3: Notification Alerts -->
      <div id="panel-notifications" class="settings-tab-panel">
        <h2 class="settings-section-title">Notification & Alert Channels</h2>
        <p class="settings-section-sub">Choose which real-time alerts, email digests, and popups you want to receive.</p>

        <form id="notificationSettingsForm">
          <div class="setting-item-row">
            <div class="setting-item-info">
              <span class="setting-item-title">Urgent Work Order Popups</span>
              <span class="setting-item-desc">Show immediate toast notifications when high priority or urgent jobs are logged</span>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" id="notifUrgentAlerts" checked />
              <span class="toggle-slider"></span>
            </label>
          </div>

          <div class="setting-item-row">
            <div class="setting-item-info">
              <span class="setting-item-title">Vendor Assignment Status Updates</span>
              <span class="setting-item-desc">Notify when a certified vendor updates job status to In Progress or Completed</span>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" id="notifVendorUpdates" checked />
              <span class="toggle-slider"></span>
            </label>
          </div>

          <div class="setting-item-row">
            <div class="setting-item-info">
              <span class="setting-item-title">Daily Summary Digest Email</span>
              <span class="setting-item-desc">Receive a daily executive summary email of active work order metrics and revenue</span>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" id="notifDailyDigest" />
              <span class="toggle-slider"></span>
            </label>
          </div>

          <div class="setting-item-row">
            <div class="setting-item-info">
              <span class="setting-item-title">In-App Sound Effects</span>
              <span class="setting-item-desc">Play a subtle alert tone when new notifications arrive</span>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" id="notifSoundEffects" checked />
              <span class="toggle-slider"></span>
            </label>
          </div>

          <div class="form-actions-row-lg">
            <button type="submit" class="btn-primary-action">
              Save Notification Preferences
            </button>
          </div>
        </form>
      </div>

      <!-- Panel 4: Security & Active Sessions -->
      <div id="panel-security" class="settings-tab-panel">
        <h2 class="settings-section-title">Security & Active Sessions</h2>
        <p class="settings-section-sub">Monitor your logged-in devices and configure two-factor authentication security.</p>

        <div class="mb-24">
          <h3 class="setting-item-title mb-24">Active Device Sessions</h3>

          <div class="session-device-card">
            <div class="session-device-info">
              <div class="session-device-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div>
                <div class="session-device-title">Chrome on Windows 11 <span class="badge-session-current">CURRENT SESSION</span></div>
                <div class="session-device-sub">Chicago, USA • 172.16.32.118 • Active Now</div>
              </div>
            </div>
          </div>

          <div class="session-device-card" id="mobileSessionCard">
            <div class="session-device-info">
              <div class="session-device-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
              </div>
              <div>
                <div class="session-device-title">StoreOps App on iPhone 15 Pro</div>
                <div class="session-device-sub">Chicago, USA • 172.16.32.204 • 2 hours ago</div>
              </div>
            </div>
            <button type="button" class="btn-remove-phone btn-icon-sm" onclick="terminateSession('mobileSessionCard')" title="Revoke Access">✕</button>
          </div>
        </div>

        <div class="security-terminate-box">
          <div>
            <div class="setting-item-title">Terminate All Other Sessions</div>
            <div class="setting-item-desc">Sign out from all devices except this current browser</div>
          </div>
          <button type="button" class="btn-secondary btn-danger-outline" onclick="terminateAllOtherSessions()">
            Sign Out Other Devices
          </button>
        </div>
      </div>

    </div>
  </div>
</div>

<?php require_once "includes/footer.php"; ?>
