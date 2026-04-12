import {
  authGuard,
  loginWithEmail,
  loginWithGoogle,
  resetPassword
} from './firebase-autho.js';

// ── Kama mtu ameingia tayari — mpeleke dashboard ──
authGuard();

// ── Toggle Password ──
const togglePw = document.getElementById('togglePw');
const pwInput  = document.getElementById('password');

if (togglePw && pwInput) {
  togglePw.addEventListener('click', () => {
    const isHidden   = pwInput.type === 'password';
    pwInput.type     = isHidden ? 'text' : 'password';
    togglePw.textContent = isHidden ? '🙈' : '👁️';
  });
}

// ── Remember Me ──
const rememberCheckbox = document.getElementById('remember');

if (rememberCheckbox) {
  window.addEventListener('load', () => {
    const savedEmail = localStorage.getItem('rememberedEmail');
    if (savedEmail) {
      document.getElementById('email').value = savedEmail;
      rememberCheckbox.checked = true;
    }
  });

  rememberCheckbox.addEventListener('change', () => {
    if (rememberCheckbox.checked) {
      localStorage.setItem('rememberedEmail', document.getElementById('email').value);
    } else {
      localStorage.removeItem('rememberedEmail');
    }
  });
}

// ── Show Error ──
function showError(inputId, message) {
  const input    = document.getElementById(inputId);
  const existing = input.parentElement.parentElement.querySelector('.error-msg');
  if (existing) existing.remove();

  input.style.borderColor = '#e53e3e';
  input.style.boxShadow   = '0 0 0 3px rgba(229,62,62,0.12)';

  const err = document.createElement('span');
  err.className   = 'error-msg';
  err.textContent = message;
  err.style.cssText = 'font-size:12px;color:#e53e3e;margin-top:4px;display:block;';
  input.parentElement.insertAdjacentElement('afterend', err);
}

// ── Clear Errors ──
function clearErrors() {
  document.querySelectorAll('.error-msg').forEach(e => e.remove());
  ['email', 'password'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.style.borderColor = ''; el.style.boxShadow = ''; }
  });
}

// ── Validate Email ──
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ── Show Success ──
function showSuccess() {
  const btn        = document.querySelector('.btn-login');
  btn.textContent  = '✅ Signing in...';
  btn.style.background = 'linear-gradient(135deg, #38a169, #276749)';
  btn.disabled     = true;
  setTimeout(() => { window.location.href = 'dashboard.html'; }, 1500);
}

// ── Handle Login ──
window.handleLogin = async function () {
  clearErrors();

  const email    = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  let   hasError = false;

  if (!email) {
    showError('email', 'Email inahitajika');
    hasError = true;
  } else if (!isValidEmail(email)) {
    showError('email', 'Email si sahihi — mfano: student@gmail.com');
    hasError = true;
  }

  if (!password) {
    showError('password', 'Password inahitajika');
    hasError = true;
  } else if (password.length < 6) {
    showError('password', 'Password lazima iwe angalau herufi 6');
    hasError = true;
  }

  if (hasError) return;

  // Save email if remember me
  if (rememberCheckbox?.checked) {
    localStorage.setItem('rememberedEmail', email);
  }

  // Disable button wakati inasubiri
  const btn    = document.querySelector('.btn-login');
  btn.textContent = '⏳ Inaingia...';
  btn.disabled    = true;

  const result = await loginWithEmail(email, password);

  if (result.success) {
    showSuccess();
  } else {
    btn.textContent = 'Log In';
    btn.disabled    = false;
    showError('password', result.error);
  }
};

// ── Handle Google ──
window.handleGoogle = async function () {
  const result = await loginWithGoogle();
  if (result.success) {
    showSuccess();
  } else {
    alert(result.error);
  }
};

// ── Clear error on focus ──
['email', 'password'].forEach(id => {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener('focus', () => {
      el.style.borderColor = '';
      el.style.boxShadow   = '';
      const err = el.parentElement.parentElement.querySelector('.error-msg');
      if (err) err.remove();
    });
  }
});

// ── Handle Forgot Password ──
document.querySelector('.forgot')?.addEventListener('click', async (e) => {
  e.preventDefault();
 
  // Chukua email iliyopo kwenye input kama ipo
  const emailInput = document.getElementById('email').value.trim();
  const email = prompt('Enter your email address to reset your password:', emailInput);
 
  if (!email) return;
 
  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }
 
  const result = await resetPassword(email);
 
  if (result.success) {
    alert('✅ Password reset email sent! Check your inbox.');
  } else {
    alert('❌ ' + result.error);
  }

});