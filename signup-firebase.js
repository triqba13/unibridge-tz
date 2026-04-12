

import {
  authGuard,
  signupWithEmail,
  loginWithGoogle
} from './firebase-autho.js';

// ── Kama mtu ameingia tayari — mpeleke dashboard ──
authGuard();

// ── Toggle Password ──
document.getElementById('togglePw1')?.addEventListener('click', function () {
  const input = document.getElementById('password');
  const show  = input.type === 'password';
  input.type  = show ? 'text' : 'password';
  this.textContent = show ? '🙈' : '👁️';
});

document.getElementById('togglePw2')?.addEventListener('click', function () {
  const input = document.getElementById('confirmPassword');
  const show  = input.type === 'password';
  input.type  = show ? 'text' : 'password';
  this.textContent = show ? '🙈' : '👁️';
});

// ── Password Strength ──
document.getElementById('password')?.addEventListener('input', function () {
  const val   = this.value;
  const fill  = document.getElementById('strengthFill');
  const label = document.getElementById('strengthLabel');
  const bar   = document.getElementById('strengthBar');
  if (!bar) return;

  bar.style.display = val.length > 0 ? 'flex' : 'none';

  let strength = 0;
  if (val.length >= 6)           strength++;
  if (/[A-Z]/.test(val))         strength++;
  if (/[0-9]/.test(val))         strength++;
  if (/[^A-Za-z0-9]/.test(val)) strength++;

  const levels = ['', 'Weak', 'Fair', 'Good', 'Strong'];
  const colors = ['', '#e53e3e', '#dd6b20', '#d69e2e', '#38a169'];
  const widths = ['0%', '25%', '50%', '75%', '100%'];

  fill.style.width      = widths[strength];
  fill.style.background = colors[strength];
  label.textContent     = levels[strength];
  label.style.color     = colors[strength];
});

// ── Show Error ──
function showError(inputId, message) {
  const input    = document.getElementById(inputId);
  const existing = input.parentElement.parentElement.querySelector('.error-msg');
  if (existing) existing.remove();

  input.style.borderColor = '#e53e3e';
  input.style.boxShadow   = '0 0 0 3px rgba(229,62,62,0.15)';

  const err = document.createElement('span');
  err.className   = 'error-msg';
  err.textContent = message;
  err.style.cssText = 'font-size:12px;color:#fc8181;margin-top:4px;display:block;';
  input.parentElement.insertAdjacentElement('afterend', err);
}

// ── Clear Errors ──
function clearErrors() {
  document.querySelectorAll('.error-msg').forEach(e => e.remove());
  ['fullname', 'email', 'password', 'confirmPassword'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.style.borderColor = ''; el.style.boxShadow = ''; }
  });
}

// ── Validate Email ──
function isValidEmail(e) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

// ── Handle Signup ──
window.handleSignup = async function () {
  clearErrors();

  const name     = document.getElementById('fullname').value.trim();
  const email    = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirm  = document.getElementById('confirmPassword').value;
  const terms    = document.getElementById('terms').checked;
  let   hasError = false;

  if (!name)                     { showError('fullname', 'Jina inahitajika'); hasError = true; }
  if (!email)                    { showError('email', 'Email inahitajika'); hasError = true; }
  else if (!isValidEmail(email)) { showError('email', 'Email si sahihi'); hasError = true; }
  if (!password)                 { showError('password', 'Password inahitajika'); hasError = true; }
  else if (password.length < 6)  { showError('password', 'Password lazima iwe angalau herufi 6'); hasError = true; }
  if (!confirm)                  { showError('confirmPassword', 'Thibitisha password yako'); hasError = true; }
  else if (password !== confirm) { showError('confirmPassword', 'Passwords hazifanani'); hasError = true; }
  if (!terms)                    { alert('Kubali Terms & Conditions kwanza'); hasError = true; }

  if (hasError) return;

  // Disable button
  const btn        = document.querySelector('.btn-signup');
  btn.textContent  = '⏳ Inasajili...';
  btn.disabled     = true;

  const result = await signupWithEmail(name, email, password);

  if (result.success) {
    btn.textContent      = '✅ Account imeundwa!';
    btn.style.background = 'linear-gradient(135deg,#38a169,#276749)';
    btn.style.color      = '#fff';
    setTimeout(() => { window.location.href = 'dashboard.html'; }, 1500);
  } else {
    btn.textContent = 'Create Account →';
    btn.disabled    = false;
    showError('email', result.error);
  }
};

// ── Handle Google ──
window.handleGoogle = async function () {
  const result = await loginWithGoogle();
  if (result.success) {
    window.location.href = 'dashboard.html';
  } else {
    alert(result.error);
  }
};

// ── Terms checkbox ──
document.getElementById('terms')?.addEventListener('change', function () {
  const chk = document.getElementById('chk');
  if (chk) chk.style.color = this.checked ? '#0a0f1e' : 'transparent';
});

// ── Clear error on focus ──
['fullname', 'email', 'password', 'confirmPassword'].forEach(id => {
  document.getElementById(id)?.addEventListener('focus', () => {
    const el = document.getElementById(id);
    el.style.borderColor = '';
    el.style.boxShadow   = '';
    const err = el.parentElement.parentElement.querySelector('.error-msg');
    if (err) err.remove();
  });
});