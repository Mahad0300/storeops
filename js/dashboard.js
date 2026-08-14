/**
 * StoreOps CRM - Dashboard Workspace Logic (dashboard.js)
 * Render Top Active Jobs & Quick Counter Summaries
 */

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("activeJobsTableBody")) {
    renderDashboardActiveJobs();
  }
});

/* Render Dashboard Active Jobs Table */
function renderDashboardActiveJobs() {
  const tbody = document.getElementById("activeJobsTableBody");
  if (!tbody) return;

  const topJobs = masterJobsDataset.slice(0, 5);
  tbody.innerHTML = topJobs
    .map(
      (job) => `
    <tr>
      <td>
        <div class="location-name">${escapeHTML(job.storeName)}</div>
        <div class="location-address">${escapeHTML(job.storeAddress)}</div>
      </td>
      <td><span class="designation-text">${escapeHTML(job.designation)}</span></td>
      <td><span class="badge-status ${getStatusClass(job.status)}">${escapeHTML(job.status)}</span></td>
      <td><span class="badge-urgency ${job.urgency === "Urgent" ? "urgent" : "sla"}">${escapeHTML(job.urgency)}</span></td>
    </tr>
  `,
    )
    .join("");
}
