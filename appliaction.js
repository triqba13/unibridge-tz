// ── My Applications (Demo Data) ──
const myApplications = [
  {
    uni: "IIT Delhi",
    course: "Computer Science",
    date: "Submitted Mar 20, 2026",
    status: "s-review",
    statusLabel: "Under Review"
  },
  {
    uni: "Mumbai University",
    course: "Business Administration",
    date: "Submitted Mar 15, 2026",
    status: "s-pending",
    statusLabel: "Pending"
  },
  {
    uni: "ICCR Scholarship 2026",
    course: "Full Scholarship",
    date: "Submitted Feb 28, 2026",
    status: "s-accept",
    statusLabel: "Accepted"
  }
];

// ── Render Applications ──
function renderApplications() {
  const list = document.getElementById('appsList');
  if (!list) return;

  list.innerHTML = myApplications.map(a => `
    <div class="app-item">
      <div class="app-item-left">
        <div class="app-item-uni">${a.uni}</div>
        <div class="app-item-course">${a.course}</div>
        <div class="app-item-date">${a.date}</div>
      </div>
      <div class="status-pill ${a.status}">
        <div class="status-dot"></div>
        ${a.statusLabel}
      </div>
    </div>
  `).join('');
}

// ── Path Selection ──
let selectedPath = null;

function selectPath(path) {
  selectedPath = path;

  // Update card styles
  document.getElementById('selfCard').classList.toggle('selected', path === 'self');
  document.getElementById('mtishbiCard').classList.toggle('selected', path === 'mtishbi');

  // Show/hide sections
  const selfSection    = document.getElementById('selfSection');
  const mtishbiSection = document.getElementById('mtishbiSection');

  if (path === 'self') {
    selfSection.style.display    = 'block';
    mtishbiSection.style.display = 'none';
    selfSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    selfSection.style.display    = 'none';
    mtishbiSection.style.display = 'block';
    renderApplications();
    mtishbiSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ── Self Apply — Open Official Website ──
function goApply(url, name) {
  if (confirm(`Utaenda kwenye website ya rasmi ya ${name}.\n\nKumbuka: UniBridge haitaweza kufuatilia application yako ukiapply mwenyewe.\n\nEndelea?`)) {
    window.open(url, '_blank');
  }
}

// ── Gallery Scroll ──
function scrollGallery(dir) {
  const track = document.getElementById('galleryTrack');
  if (!track) return;
  track.scrollBy({ left: dir * 220, behavior: 'smooth' });
}

// ── Logout ──
function handleLogout() {
  if (confirm('Una uhakika unataka kutoka?')) {
    window.location.href = 'login.html';
  }
}

// ── Auto-select MtishbiScholars on load (recommended) ──
window.addEventListener('load', () => {
  selectPath('mtishbi');
});