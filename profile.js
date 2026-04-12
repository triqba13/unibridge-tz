// ── Edit Mode ──
let isEditing = false;

function toggleEdit() {
  isEditing = !isEditing;

  const fields   = ['fieldName','fieldEmail','fieldPhone','fieldLocation','fieldCountry','fieldCourse'];
  const saveWrap = document.getElementById('saveWrap');
  const editBtn  = document.getElementById('editBtnText');

  fields.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.disabled = !isEditing;
  });

  saveWrap.style.display = isEditing ? 'flex' : 'none';
  editBtn.textContent    = isEditing ? 'Editing...' : 'Edit Profile';
}

function saveProfile() {
  const name = document.getElementById('fieldName').value.trim();

  if (!name) {
    alert('Jina haliwezi kuwa tupu!');
    return;
  }

  // Update sidebar name & avatar initials
  const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  document.getElementById('sidebarName').textContent  = name;
  document.getElementById('profileName').textContent  = name;
  document.getElementById('sidebarAvatar').textContent = initials;

  // Update avatar if still showing initials
  const avatarEl = document.getElementById('profileAvatar');
  if (!avatarEl.querySelector('img')) {
    avatarEl.textContent = initials;
  }

  // Save to localStorage
  localStorage.setItem('profileName',  name);
  localStorage.setItem('profileEmail', document.getElementById('fieldEmail').value);
  localStorage.setItem('profilePhone', document.getElementById('fieldPhone').value);

  // Exit edit mode
  isEditing = false;
  toggleEdit();

  // Show success
  showToast('Profile saved successfully! ✅');
}

function cancelEdit() {
  // Restore saved values
  const savedName  = localStorage.getItem('profileName');
  const savedEmail = localStorage.getItem('profileEmail');
  const savedPhone = localStorage.getItem('profilePhone');

  if (savedName)  document.getElementById('fieldName').value  = savedName;
  if (savedEmail) document.getElementById('fieldEmail').value = savedEmail;
  if (savedPhone) document.getElementById('fieldPhone').value = savedPhone;

  isEditing = false;
  const fields = ['fieldName','fieldEmail','fieldPhone','fieldLocation','fieldCountry','fieldCourse'];
  fields.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.disabled = true;
  });

  document.getElementById('saveWrap').style.display = 'none';
  document.getElementById('editBtnText').textContent = 'Edit Profile';
}

// ── Avatar Upload ──
function triggerImageUpload() {
  document.getElementById('avatarInput').click();
}

function handleAvatarChange(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const avatarEl = document.getElementById('profileAvatar');
    avatarEl.innerHTML = `<img src="${e.target.result}" alt="Profile Photo">`;
    showToast('Profile photo updated! ✅');
  };
  reader.readAsDataURL(file);
}

// ── Quick WhatsApp Message ──
function sendQuickMessage() {
  const msg = document.getElementById('quickMsg').value.trim();

  if (!msg) {
    alert('Andika message kwanza!');
    return;
  }

  const encoded = encodeURIComponent(`Hi UniBridge Support! I need help:\n\n${msg}`);
  window.open(`https://wa.me/255744588248?text=${encoded}`, '_blank');
  document.getElementById('quickMsg').value = '';
  showToast('Opening WhatsApp... 📱');
}

// ── Toast Notification ──
function showToast(message) {
  const existing = document.getElementById('toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'toast';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 28px;
    right: 28px;
    background: linear-gradient(135deg, #10b981, #059669);
    color: white;
    padding: 12px 20px;
    border-radius: 10px;
    font-size: 13px;
    font-weight: 600;
    font-family: 'DM Sans', sans-serif;
    box-shadow: 0 8px 24px rgba(16,185,129,0.3);
    z-index: 9999;
    animation: slideInToast 0.3s ease both;
  `;

  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideInToast {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ── Logout ──
function handleLogout() {
  if (confirm('Una uhakika unataka kutoka?')) {
    window.location.href = 'login.html';
  }
}

// ── Load saved data on page load ──
window.addEventListener('load', () => {
  const savedName  = localStorage.getItem('profileName');
  const savedEmail = localStorage.getItem('profileEmail');
  const savedPhone = localStorage.getItem('profilePhone');

  if (savedName) {
    document.getElementById('fieldName').value       = savedName;
    document.getElementById('profileName').textContent = savedName;
    document.getElementById('sidebarName').textContent = savedName;
    const initials = savedName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    document.getElementById('sidebarAvatar').textContent = initials;
    const avatarEl = document.getElementById('profileAvatar');
    if (!avatarEl.querySelector('img')) avatarEl.textContent = initials;
  }

  if (savedEmail) document.getElementById('fieldEmail').value = savedEmail;
  if (savedPhone) document.getElementById('fieldPhone').value = savedPhone;
});