<?php
$pageTitle = "Work Order Detail - StoreOps CRM";
$activePage = "jobs";
$pageScript = "job-detail";
require_once "includes/header.php";
?>

<main id="jobDetailView">
  <!-- Back Navigation Link -->
  <div class="detail-back-row">
    <a href="jobs.php" class="back-link-btn">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
      </svg>
      <span>Back to Work Orders</span>
    </a>
  </div>

  <!-- Main Work Order Layout Grid -->
  <div class="workorder-detail-grid">
    <!-- LEFT COLUMN: Spec Sheet & Comments & Bottom Financial Forms -->
    <div class="detail-left-col">
      <!-- CARD 1: Work Order Spec Sheet -->
      <div class="dash-card detail-spec-card">
        <div class="spec-card-header">
          <div>
            <span class="spec-subtitle">WO-2026-00109 SPEC SHEET</span>
            <h2 class="spec-main-title">CLARKSTON</h2>
          </div>
          <span class="status-pill-badge done-badge">Done</span>
        </div>

        <div class="spec-grid-row-3col">
          <div class="spec-field-box">
            <span class="spec-label">STORE / LOCATION</span>
            <p class="spec-val-bold">CLARKSTON, MI</p>
          </div>

          <div class="spec-field-box">
            <span class="spec-label">SCOPE DESIGNATION</span>
            <p class="spec-val-bold">Locksmith</p>
          </div>

          <div class="spec-field-box">
            <span class="spec-label">TECHNICAL LOCATION ADDRESS</span>
            <p class="spec-val-bold">
              6673 DIXIE HWY, CLARKSTON, MI US 48346
            </p>
          </div>
        </div>

        <div class="spec-full-field">
          <span class="spec-label">REPORTED MAINTENANCE ISSUE</span>
          <p class="spec-val-text">Need locksmith in next 5 mins</p>
        </div>

        <div class="spec-full-field">
          <span class="spec-label"
            >JOB PICTURES ATTACHMENT GALLERY</span
          >
          <p class="spec-muted-italic">
            No visual attachments verified on this work order sheet.
          </p>
        </div>

        <div class="spec-footer-metadata">
          <p>
            Work Order Created: <strong>July 15, 2026, 7:01 am</strong>
          </p>
          <p>
            SLA Deadline:
            <strong class="text-danger">July 14, 2026, 10:02 pm</strong>
          </p>
          <p>Assigned User: <strong>Unassigned</strong></p>
        </div>
      </div>

      <!-- CARD 2: Comments & Updates -->
      <div class="dash-card comments-card">
        <div class="comments-card-header">
          <h3 class="card-title">Comments & Updates</h3>
          <p class="card-subtext">
            Add notes, status updates, and attachments for this work
            order
          </p>
        </div>

        <!-- Hidden File Attachment Inputs -->
        <input
          type="file"
          id="commentGeneralAttachmentInput"
          class="hidden-file-input"
        />
        <input
          type="file"
          id="commentW9FileInput"
          class="hidden-file-input"
          accept=".pdf,.doc,.docx,.png,.jpg"
        />

        <!-- Comment Input Box Area -->
        <div class="comment-input-area">
          <div class="comment-avatar">AD</div>
          <div class="comment-box-wrapper">
            <textarea
              id="commentTextarea"
              placeholder="Write standard text update logs on active tasks..."
              class="comment-textarea"
            ></textarea>

            <!-- Inner Bottom Footer Strip inside Text Box -->
            <div class="comment-box-inner-footer">
              <!-- File Attachment Preview Pill -->
              <div
                id="attachedFilePreviewBox"
                class="attached-file-preview-box"
              ></div>

              <!-- Inner Right Attachment Icons -->
              <div class="comment-toolbar-icons">
                <button
                  type="button"
                  id="btnAttachGeneral"
                  class="tool-icon-btn"
                  title="Attach General File (📎)"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path>
                  </svg>
                </button>

                <button
                  type="button"
                  id="btnAttachW9Doc"
                  class="tool-icon-btn"
                  title="Attach W9 Form Document (📄)"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                    ></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Submit Button Row -->
        <div class="comment-submit-row">
          <button
            type="button"
            id="btnPostComment"
            class="crm-btn-primary btn-post-comment"
          >
            Post Comment
          </button>
        </div>

        <!-- Live Posted Comments List -->
        <div id="commentsList" class="comments-list-container">
          <!-- Pre-filled Comment 1 -->
          <div class="comment-item">
            <div class="comment-item-avatar">SM</div>
            <div class="comment-item-body">
              <div class="comment-item-header">
                <span class="comment-author-name">Sophia Martinez</span>
                <span class="comment-time-tag"
                  >Aug 12, 2026, 02:14 PM</span
                >
              </div>
              <p class="comment-item-text">
                Locksmith vendor arrived on site and verified deadbolt
                clearance. Work completed cleanly within SLA time
                window.
              </p>
              <div class="comment-item-reactions">
                <button class="reaction-btn like-btn" data-count="4">
                  👍 <span class="like-count">4</span>
                </button>
                <button class="reaction-btn dislike-btn" data-count="0">
                  👎 <span class="dislike-count">0</span>
                </button>
                <span class="comment-reply-link">Reply</span>
              </div>
            </div>
          </div>

          <!-- Pre-filled Comment 2 -->
          <div class="comment-item">
            <div class="comment-item-avatar">MC</div>
            <div class="comment-item-body">
              <div class="comment-item-header">
                <span class="comment-author-name">Michael Carter</span>
                <span class="comment-time-tag"
                  >July 15, 2026, 07:01 AM</span
                >
              </div>
              <p class="comment-item-text">
                Work Order WO-2026-00109 created and dispatched to
                Clarkston location.
              </p>
              <div class="comment-item-reactions">
                <button class="reaction-btn like-btn" data-count="2">
                  👍 <span class="like-count">2</span>
                </button>
                <button class="reaction-btn dislike-btn" data-count="0">
                  👎 <span class="dislike-count">0</span>
                </button>
                <span class="comment-reply-link">Reply</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- BOTTOM FINANCIAL SECTION -->
      <div class="financial-section-wrapper">
        <!-- TOP FINANCIAL SUMMARY KPI BAR -->
        <div class="dash-card financial-summary-top-card">
          <div class="fin-summary-header">
            <div>
              <h4 class="fin-card-title">Financial Summary</h4>
              <p class="fin-card-sub">
                Real-time revenue, vendor charges, and remaining balance
                overview
              </p>
            </div>
          </div>

          <div class="fin-kpi-grid">
            <div class="fin-kpi-box">
              <span class="fin-kpi-title">TOTAL REVENUE RECORDED</span>
              <span class="fin-kpi-amount text-success">$1,200.00</span>
            </div>

            <div class="fin-kpi-box">
              <span class="fin-kpi-title">TOTAL VENDOR CHARGES</span>
              <span class="fin-kpi-amount text-danger">$450.00</span>
            </div>

            <div class="fin-kpi-box">
              <span class="fin-kpi-title">VENDOR AMOUNT PAID</span>
              <span class="fin-kpi-amount">$450.00</span>
            </div>

            <div class="fin-kpi-box">
              <span class="fin-kpi-title">REMAINING BALANCE</span>
              <span class="fin-kpi-amount">$0.00</span>
            </div>
          </div>
        </div>

        <!-- 2-COLUMN PAYMENT FORMS GRID -->
        <div class="bottom-financial-forms-grid">
          <!-- Revenue Card -->
          <div class="dash-card financial-card">
            <h4 class="fin-card-title">Revenue (Client Payments)</h4>
            <p class="fin-card-sub">
              Client payments received for this work order
            </p>

            <div class="fin-empty-box">
              No additional revenue recorded yet.
            </div>

            <div class="fin-form-section">
              <span class="fin-form-label">RECORD CLIENT REVENUE</span>

              <div class="fin-input-row">
                <div class="form-group flex-1">
                  <label class="form-label">AMOUNT ($)</label>
                  <input
                    type="number"
                    step="0.01"
                    class="form-control"
                    value="0.00"
                  />
                </div>
                <div class="form-group flex-1">
                  <label class="form-label">PAYMENT TYPE</label>
                  <select class="form-control">
                    <option value="Partial">Partial</option>
                    <option value="Full" selected>Full Payment</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">REVENUE NOTE</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Invoice #, check number..."
                />
              </div>

              <button class="btn-green-action">
                + Record Client Revenue
              </button>
            </div>
          </div>

          <!-- Vendor Payments Card -->
          <div class="dash-card financial-card">
            <h4 class="fin-card-title">Vendor Payments</h4>
            <p class="fin-card-sub">
              Payments made to assigned vendor for this work order
            </p>

            <div class="fin-empty-box">
              No vendor payments recorded yet.
            </div>

            <div class="fin-form-section">
              <span class="fin-form-label">RECORD VENDOR PAYMENT</span>

              <div class="fin-input-row">
                <div class="form-group flex-1">
                  <label class="form-label">AMOUNT ($)</label>
                  <input
                    type="number"
                    step="0.01"
                    class="form-control"
                    value="0.00"
                  />
                </div>
                <div class="form-group flex-1">
                  <label class="form-label">PAYMENT TYPE</label>
                  <select class="form-control">
                    <option value="Partial">Partial</option>
                    <option value="Full" selected>Full Payment</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">PAYMENT NOTE</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Card authorization code, check number..."
                />
              </div>

              <button class="btn-grey-action">
                Execute Vendor Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- RIGHT COLUMN: Configuration Sidebar Card & W9 Form Card -->
    <div class="detail-right-col">
      <!-- CARD 1: Work Order Configuration -->
      <div class="dash-card config-sidebar-card">
        <div class="config-card-header">
          <h3 class="config-title">Work Order Configuration</h3>
          <p class="config-sub">Administrator controls</p>
        </div>

        <div class="config-form-group">
          <label class="config-label">URGENCY STATUS</label>
          <div class="radio-pill-group">
            <label class="radio-pill">
              <input
                type="radio"
                name="urgencyStatus"
                value="Within SLA"
              />
              <span>Within SLA</span>
            </label>
            <label class="radio-pill urgent-radio active">
              <input
                type="radio"
                name="urgencyStatus"
                value="Urgent"
                checked
              />
              <span>Urgent</span>
            </label>
          </div>
        </div>

        <div class="config-form-group">
          <label class="config-label">W9 CLEARANCE MANDATORY</label>
          <div class="radio-pill-group">
            <label class="radio-pill active">
              <input
                type="radio"
                name="w9Mandatory"
                value="No"
                checked
              />
              <span>No</span>
            </label>
            <label class="radio-pill">
              <input type="radio" name="w9Mandatory" value="Yes" />
              <span>Yes</span>
            </label>
          </div>
        </div>

        <div class="config-form-group">
          <label class="config-label">ASSIGNED USER</label>
          <select class="form-control config-select">
            <option value="">-- No Assignment (Mark 'New') --</option>
            <option value="Sophia Martinez">Sophia Martinez</option>
            <option value="Alex Morgan">Alex Morgan</option>
            <option value="Sarah Jenkins">Sarah Jenkins</option>
            <option value="Marcus Vance">Marcus Vance</option>
            <option value="John Doe">John Doe</option>
          </select>
        </div>

        <div class="config-form-group">
          <label class="config-label">JOB ADD DATE (CREATED AT)</label>
          <input
            type="datetime-local"
            class="form-control config-date"
            value="2026-07-15T07:01"
          />
        </div>

        <div class="config-form-group">
          <label class="config-label">JOB SLA DATE</label>
          <input
            type="datetime-local"
            class="form-control config-date"
            value="2026-07-14T22:02"
          />
        </div>

        <div class="config-form-group">
          <label class="config-label">STATUS POSITION</label>
          <div class="status-buttons-grid">
            <button class="status-pos-btn">New</button>
            <button class="status-pos-btn">Scheduled</button>
            <button class="status-pos-btn">In Progress</button>
            <button class="status-pos-btn">Pending</button>
            <button class="status-pos-btn">Cancelled</button>
            <button class="status-pos-btn active">Done</button>
          </div>
        </div>

        <div class="config-actions-grid">
          <button class="btn-save-changes">SAVE CHANGES</button>
          <button class="btn-delete-order">DELETE WORK ORDER</button>
        </div>
      </div>

      <!-- CARD 2: W9 Form Attachment Card -->
      <div class="dash-card w9-form-card">
        <h4 class="w9-card-title">W9 Form</h4>
        <p class="w9-card-sub">
          Attached W9 document for this work order
        </p>

        <div id="w9FormCardContainer">
          <div class="w9-dropzone-box">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
              ></path>
              <polyline points="14 2 14 8 20 8"></polyline>
            </svg>
            <p>
              No W9 form attached yet.<br />Use the 📄 doc icon in the
              comment box to attach.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<?php require_once "includes/footer.php"; ?>
