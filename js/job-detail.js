/**
 * StoreOps CRM - Work Order Detail Spec Sheet & Comments (job-detail.js)
 * Configuration Pills, Status Buttons, Comment Logger Feed, General/W9 Attachment Handlers
 */

document.addEventListener("DOMContentLoaded", () => {
  initWorkOrderConfigControls();
});

/* Work Order Detail Configuration Controls Interactive Toggles */
function initWorkOrderConfigControls() {
  // 1. Radio Pill Groups (Urgency & W9 Clearance)
  const radioGroups = document.querySelectorAll(".radio-pill-group");
  radioGroups.forEach((group) => {
    const pills = group.querySelectorAll(".radio-pill");
    pills.forEach((pill) => {
      pill.addEventListener("click", () => {
        const radio = pill.querySelector('input[type="radio"]');
        pills.forEach((p) => p.classList.remove("active"));
        pill.classList.add("active");
        if (radio) {
          radio.checked = true;
        }
        showToast(`Updated: ${radio ? radio.value : pill.innerText.trim()}`);
      });
    });
  });

  // 2. Status Position Buttons Grid
  const statusButtons = document.querySelectorAll(".status-pos-btn");
  const specStatusBadge = document.querySelector(
    ".spec-card-header .status-pill-badge",
  );
  statusButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      statusButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const newStatus = btn.innerText.trim();
      showToast(`Work Order Status set to: ${newStatus}`);

      if (specStatusBadge) {
        specStatusBadge.textContent = newStatus;
        const cls = getStatusClass(newStatus);
        if (cls === "done") {
          specStatusBadge.className = "status-pill-badge done-badge";
        } else {
          specStatusBadge.className = `status-pill-badge badge-status ${cls}`;
        }
      }
    });
  });

  // 3. Save Changes Button
  const saveBtn = document.querySelector(".btn-save-changes");
  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      showToast("Work order configuration changes saved successfully!");
    });
  }

  // 4. Delete Work Order Button
  const deleteBtn = document.querySelector(".btn-delete-order");
  if (deleteBtn) {
    deleteBtn.addEventListener("click", () => {
      if (
        confirm("Are you sure you want to permanently delete this work order?")
      ) {
        showToast("Work Order WO-2026-00109 deleted");
        setTimeout(() => {
          window.location.href = "jobs.php";
        }, 1200);
      }
    });
  }

  initCommentsAndAttachments();
}

/* Comments & Attachments System with Reactions and W9 Auto-Linking */
function initCommentsAndAttachments() {
  let pendingAttachment = null; // { type: 'general' | 'w9', name: string }

  const btnAttachGen = document.getElementById("btnAttachGeneral");
  const btnAttachW9 = document.getElementById("btnAttachW9Doc");
  const genInput = document.getElementById("commentGeneralAttachmentInput");
  const w9Input = document.getElementById("commentW9FileInput");
  const previewBox = document.getElementById("attachedFilePreviewBox");
  const btnPost = document.getElementById("btnPostComment");
  const textarea = document.getElementById("commentTextarea");
  const commentsList = document.getElementById("commentsList");
  const w9Container = document.getElementById("w9FormCardContainer");

  if (!btnPost || !textarea || !commentsList) return;

  // Auto-expand textarea height dynamically with smooth scrolling after 220px
  textarea.addEventListener("input", () => {
    textarea.style.height = "auto";
    textarea.style.height = Math.min(textarea.scrollHeight, 220) + "px";
  });

  // General Attachment Button (📎)
  if (btnAttachGen && genInput) {
    btnAttachGen.addEventListener("click", () => genInput.click());
    genInput.addEventListener("change", (e) => {
      if (e.target.files && e.target.files[0]) {
        const name = e.target.files[0].name;
        pendingAttachment = { type: "general", name: name };
        renderAttachmentPreview(`📎 ${name}`);
        showToast(`General file attached: ${name}`);
      }
    });
  }

  // W9 Attachment Button (📄 Attach W9 Doc)
  if (btnAttachW9 && w9Input) {
    btnAttachW9.addEventListener("click", () => w9Input.click());
    w9Input.addEventListener("change", (e) => {
      if (e.target.files && e.target.files[0]) {
        const name = e.target.files[0].name;
        pendingAttachment = { type: "w9", name: name };
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

    const removeW9Btn = document.getElementById("btnRemoveW9Doc");
    if (removeW9Btn) {
      removeW9Btn.addEventListener("click", () => {
        w9Container.innerHTML = `
          <div class="w9-dropzone-box">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
            <p>No W9 form attached yet.<br>Use the 📄 doc icon in the comment box to attach.</p>
          </div>
        `;
        showToast("W9 document removed.");
      });
    }
  }

  function renderAttachmentPreview(label) {
    if (!previewBox) return;
    previewBox.innerHTML = `
      <span>${escapeHTML(label)}</span>
      <span class="preview-remove-btn" id="btnRemovePreview">✕</span>
    `;
    previewBox.classList.add("active");

    const removeBtn = document.getElementById("btnRemovePreview");
    if (removeBtn) {
      removeBtn.addEventListener("click", () => {
        pendingAttachment = null;
        previewBox.classList.remove("active");
        previewBox.innerHTML = "";
        if (genInput) genInput.value = "";
        if (w9Input) w9Input.value = "";
      });
    }
  }

  // Post Comment Handler
  btnPost.addEventListener("click", () => {
    const text = textarea.value.trim();
    if (!text && !pendingAttachment) {
      showToast("Please enter a comment or attach a file!");
      return;
    }

    // Handle W9 Attachment (Routes ONLY to W9 Sidebar Card!)
    if (pendingAttachment && pendingAttachment.type === "w9") {
      updateW9SidebarCard(pendingAttachment.name);

      // If user typed comment text alongside W9 doc, post text comment without W9 badge
      if (text) {
        postCommentToFeed(text, null);
      } else {
        showToast(
          `W9 Form "${pendingAttachment.name}" uploaded to W9 Form card!`,
        );
      }
    } else {
      // General Attachment or text comment (Routes ONLY to Comments Feed!)
      postCommentToFeed(text, pendingAttachment);
      showToast("Comment posted successfully!");
    }

    // Reset Form
    textarea.value = "";
    textarea.style.height = "auto";
    pendingAttachment = null;
    if (previewBox) {
      previewBox.classList.remove("active");
      previewBox.innerHTML = "";
    }
    if (genInput) genInput.value = "";
    if (w9Input) w9Input.value = "";
  });

  function postCommentToFeed(text, attachment) {
    const commentItem = document.createElement("div");
    commentItem.className = "comment-item";

    let attachmentMarkup = "";
    if (attachment && attachment.type === "general") {
      attachmentMarkup = `<div class="comment-attached-badge">📎 ${escapeHTML(attachment.name)}</div>`;
    }

    commentItem.innerHTML = `
      <div class="comment-item-avatar">AD</div>
      <div class="comment-item-body">
        <div class="comment-item-header">
          <span class="comment-author-name">Administrator</span>
          <span class="comment-time-tag">Just now</span>
        </div>
        ${text ? `<p class="comment-item-text">${escapeHTML(text)}</p>` : ""}
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
    const likeBtns = container.querySelectorAll(".like-btn");
    const dislikeBtns = container.querySelectorAll(".dislike-btn");

    likeBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        let count = parseInt(btn.getAttribute("data-count") || "0", 10);
        if (btn.classList.contains("reacted")) {
          count--;
          btn.classList.remove("reacted");
        } else {
          count++;
          btn.classList.add("reacted");
        }
        btn.setAttribute("data-count", count);
        const counterSpan = btn.querySelector(".like-count");
        if (counterSpan) counterSpan.textContent = count;
      });
    });

    dislikeBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        let count = parseInt(btn.getAttribute("data-count") || "0", 10);
        if (btn.classList.contains("reacted")) {
          count--;
          btn.classList.remove("reacted");
        } else {
          count++;
          btn.classList.add("reacted");
        }
        btn.setAttribute("data-count", count);
        const counterSpan = btn.querySelector(".dislike-count");
        if (counterSpan) counterSpan.textContent = count;
      });
    });
  }

  // Bind reactions for initial pre-filled comments
  bindReactionButtons(commentsList);
}
