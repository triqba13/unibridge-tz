
const themes = {
  dark: {
    label: 'Dark',
    icon:  '🌙',
    vars: {
      '--bg':          '#0b0f1a',
      '--bg2':         '#111827',
      '--bg3':         '#1a2235',
      '--sidebar':     '#0d1320',
      '--text':        '#f1f5f9',
      '--muted':       '#64748b',
      '--border':      'rgba(255,255,255,0.07)',
      '--glass':       'rgba(255,255,255,0.04)',
      '--glass-hover': 'rgba(255,255,255,0.08)',
    }
  },
  milk: {
    label: 'Milk White',
    icon:  '🌤️',
    vars: {
      '--bg':          '#f5f0e8',
      '--bg2':         '#ede8df',
      '--bg3':         '#e8e2d8',
      '--sidebar':     '#f0ebe2',
      '--text':        '#1e2a3a',
      '--muted':       '#7a8a9a',
      '--border':      'rgba(0,0,0,0.08)',
      '--glass':       'rgba(0,0,0,0.03)',
      '--glass-hover': 'rgba(0,0,0,0.06)',
    }
  },
  white: {
    label: 'Pure White',
    icon:  '☀️',
    vars: {
      '--bg':          '#f8fafc',
      '--bg2':         '#f1f5f9',
      '--bg3':         '#e2e8f0',
      '--sidebar':     '#ffffff',
      '--text':        '#0f172a',
      '--muted':       '#64748b',
      '--border':      'rgba(0,0,0,0.08)',
      '--glass':       'rgba(0,0,0,0.02)',
      '--glass-hover': 'rgba(0,0,0,0.05)',
    }
  }
};

// ── Apply theme ──
function applyTheme(themeKey) {
  const theme = themes[themeKey];
  if (!theme) return;

  const root = document.documentElement;
  Object.entries(theme.vars).forEach(([key, val]) => {
    root.style.setProperty(key, val);
  });

  // Update active state in dropdown
  document.querySelectorAll('.theme-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.theme === themeKey);
  });

  // Update button icon
  const btn = document.getElementById('themeToggleBtn');
  if (btn) btn.querySelector('.theme-btn-icon').textContent = theme.icon;

  // Save to localStorage
  localStorage.setItem('ubTheme', themeKey);
}

// ── Toggle dropdown ──
function toggleThemeDropdown(e) {
  e.stopPropagation();
  const dropdown = document.getElementById('themeDropdown');
  if (!dropdown) return;
  dropdown.classList.toggle('open');
}

// ── Close dropdown when clicking outside ──
document.addEventListener('click', () => {
  const dropdown = document.getElementById('themeDropdown');
  if (dropdown) dropdown.classList.remove('open');
});

// ── Inject theme switcher HTML into topbar ──
function injectThemeSwitcher() {
  // Find topbar-right or topbar — inject there
  const topbarRight = document.querySelector('.topbar-right') || document.querySelector('.topbar');
  if (!topbarRight) return;

  const currentTheme = localStorage.getItem('ubTheme') || 'dark';
  const currentIcon  = themes[currentTheme]?.icon || '🌙';

  const html = `
    <div class="theme-switcher" id="themeSwitcher">
      <button class="theme-toggle-btn" id="themeToggleBtn" onclick="toggleThemeDropdown(event)" title="Change Theme">
        <span class="theme-btn-icon">${currentIcon}</span>
        <span class="theme-btn-label">Theme</span>
        <i class="bi bi-chevron-down theme-chevron"></i>
      </button>
      <div class="theme-dropdown" id="themeDropdown">
        <p class="theme-dropdown-title">Choose Theme</p>
        ${Object.entries(themes).map(([key, t]) => `
          <div class="theme-option ${key === currentTheme ? 'active' : ''}"
               data-theme="${key}"
               onclick="applyTheme('${key}'); document.getElementById('themeDropdown').classList.remove('open');">
            <span class="theme-opt-icon">${t.icon}</span>
            <span class="theme-opt-label">${t.label}</span>
            ${key === currentTheme ? '<i class="bi bi-check2 theme-opt-check"></i>' : ''}
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Insert before last child of topbar-right, or append
  const target = document.querySelector('.topbar-right') || document.querySelector('.topbar');
  target.insertAdjacentHTML('beforeend', html);
}

// ── Inject CSS styles ──
function injectThemeStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .theme-switcher {
      position: relative;
    }

    .theme-toggle-btn {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 8px 14px;
      background: var(--glass);
      border: 1px solid var(--border);
      border-radius: 10px;
      color: var(--text);
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      font-family: 'DM Sans', sans-serif;
      transition: all 0.2s;
    }

    .theme-toggle-btn:hover {
      background: var(--glass-hover);
      border-color: rgba(59,130,246,0.3);
    }

    .theme-btn-icon  { font-size: 15px; }
    .theme-btn-label { color: var(--text); }

    .theme-chevron {
      font-size: 11px;
      color: var(--muted);
      transition: transform 0.2s;
    }

    .theme-dropdown.open ~ * .theme-chevron,
    #themeSwitcher:has(.theme-dropdown.open) .theme-chevron {
      transform: rotate(180deg);
    }

    .theme-dropdown {
      position: absolute;
      top: calc(100% + 8px);
      right: 0;
      width: 180px;
      background: var(--bg2);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 8px;
      box-shadow: 0 12px 40px rgba(0,0,0,0.3);
      opacity: 0;
      pointer-events: none;
      transform: translateY(-8px);
      transition: all 0.2s ease;
      z-index: 999;
    }

    .theme-dropdown.open {
      opacity: 1;
      pointer-events: all;
      transform: translateY(0);
    }

    .theme-dropdown-title {
      font-size: 10px;
      font-weight: 700;
      color: var(--muted);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      padding: 4px 8px 8px;
      border-bottom: 1px solid var(--border);
      margin-bottom: 6px;
    }

    .theme-option {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 9px 10px;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.15s;
      font-size: 13px;
      color: var(--text);
    }

    .theme-option:hover {
      background: var(--glass-hover);
    }

    .theme-option.active {
      background: rgba(59,130,246,0.1);
      color: #3b82f6;
    }

    .theme-opt-icon  { font-size: 16px; }
    .theme-opt-label { flex: 1; font-weight: 500; }

    .theme-opt-check {
      color: #3b82f6;
      font-size: 14px;
    }
  `;
  document.head.appendChild(style);
}

// ── Initialize on page load ──
window.addEventListener('DOMContentLoaded', () => {
  injectThemeStyles();
  injectThemeSwitcher();

  // Apply saved theme
  const saved = localStorage.getItem('ubTheme') || 'dark';
  applyTheme(saved);

  // Remove old topbar buttons (notification & message) if they exist
  document.querySelectorAll('.topbar-btn').forEach(btn => btn.remove());
});