// ══════════════════════════════════════
//  UniBridge — Route Protection
//  Weka kwenye: dashboard, universities,
//  scholarships, campus-connect,
//  application, profile
// ══════════════════════════════════════

import {
  protectPage,
  handleLogout
} from './firebase-autho.js';

// ── Linda page — mtu asiyeingia aende login ──
protectPage();

// ── Logout function iwe globally accessible ──
window.handleLogout = handleLogout;