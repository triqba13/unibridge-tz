
//  UniBridge — Firebase Auth


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail  
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// ── Config ──
const firebaseConfig = {
  apiKey:            "AIzaSyB0iZ6vSTAGngdUMPBp_f8UUhV1u9u7IMU",
  authDomain:        "unibridge-project-f7ade.firebaseapp.com",
  projectId:         "unibridge-project-f7ade",
  storageBucket:     "unibridge-project-f7ade.firebasestorage.app",
  messagingSenderId: "639787355422",
  appId:             "1:639787355422:web:b09f6171134dc175c60d0f",
  measurementId:     "G-BKG9T4CQ13"
};

// ── Initialize ──
const app      = initializeApp(firebaseConfig);
const auth     = getAuth(app);
const provider = new GoogleAuthProvider();

// ══════════════════════════════════════
//  ROUTE PROTECTION
//  Weka kwenye: dashboard, universities,
//  scholarships, campus-connect,
//  application, profile
// ══════════════════════════════════════
export function protectPage() {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      // Mtu hajaingia — rudi login
      window.location.href = 'login.html';
    } else {
      // Mtu ameingia — onyesha jina lake
      updateUserUI(user);
    }
  });
}

// ══════════════════════════════════════
//  AUTH GUARD KWA LOGIN/SIGNUP
//  Mtu akiwa logged in tayari —
//  mpeleke dashboard moja kwa moja
// ══════════════════════════════════════
export function authGuard() {
  onAuthStateChanged(auth, (user) => {
    if (sessionStorage.getItem('loggingOut')) return;  // ← HAPA
    if (user) {
      window.location.href = 'dashboard.html';
    }
  });
}

// ══════════════════════════════════════
//  UPDATE USER UI
//  Inabadilisha jina, initials kwenye
//  sidebar na topbar
// ══════════════════════════════════════
export function updateUserUI(user) {
  if (!user) return;

  const displayName = user.displayName || user.email.split('@')[0];
  const initials    = displayName
    .split(' ')
    .map(n => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  // Sidebar name
  const sidebarName = document.getElementById('sidebarName');
  if (sidebarName) sidebarName.textContent = displayName;

  // Sidebar avatar initials
  const sidebarAvatar = document.getElementById('sidebarAvatar');
  if (sidebarAvatar) sidebarAvatar.textContent = initials;

  // Welcome name kwenye dashboard
  const welcomeName = document.getElementById('welcomeName');
  if (welcomeName) {
    const firstName = displayName.split(' ')[0];
    welcomeName.textContent = firstName;
  }

  // Profile page fields
  const profileName = document.getElementById('profileName');
  if (profileName) profileName.textContent = displayName;

  const profileAvatar = document.getElementById('profileAvatar');
  if (profileAvatar && !profileAvatar.querySelector('img')) {
    profileAvatar.textContent = initials;
  }

  const fieldName  = document.getElementById('fieldName');
  const fieldEmail = document.getElementById('fieldEmail');
  if (fieldName)  fieldName.value  = displayName;
  if (fieldEmail) fieldEmail.value = user.email;
}

// ══════════════════════════════════════
//  LOGIN — Email/Password
// ══════════════════════════════════════
export async function loginWithEmail(email, password) {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return { success: true, user: result.user };
  } catch (error) {
    let msg = 'Login imeshindwa. Jaribu tena.';
    if (error.code === 'auth/user-not-found')   msg = 'Hakuna account na email hii.';
    if (error.code === 'auth/wrong-password')   msg = 'Password si sahihi.';
    if (error.code === 'auth/invalid-email')    msg = 'Email si sahihi.';
    if (error.code === 'auth/too-many-requests') msg = 'Umejaribu mara nyingi. Subiri kidogo.';
    if (error.code === 'auth/invalid-credential') msg = 'Email au password si sahihi.';
    return { success: false, error: msg };
  }
}

// ══════════════════════════════════════
//  LOGIN — Google
// ══════════════════════════════════════
export async function loginWithGoogle() {
  try {
    const result = await signInWithPopup(auth, provider);
    return { success: true, user: result.user };
  } catch (error) {
    return { success: false, error: 'Google Sign In imeshindwa. Jaribu tena.' };
  }
}

// ══════════════════════════════════════
//  SIGNUP — Email/Password
// ══════════════════════════════════════
export async function signupWithEmail(name, email, password) {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(result.user, { displayName: name });
    return { success: true, user: result.user };
  } catch (error) {
    let msg = 'Usajili umeshindwa. Jaribu tena.';
    if (error.code === 'auth/email-already-in-use') msg = 'Email hii tayari imetumika. Ingia badala yake.';
    if (error.code === 'auth/weak-password')        msg = 'Password ni dhaifu sana. Tumia angalau herufi 6.';
    if (error.code === 'auth/invalid-email')        msg = 'Email si sahihi.';
    return { success: false, error: msg };
  }
}

// ══════════════════════════════════════
//  LOGOUT
// ══════════════════════════════════════
export async function handleLogout() {
  if (!confirm('Are you sure you want to log out?')) return;
  try {
    // Weka alama ili authGuard isimrudishe dashboard
    sessionStorage.setItem('loggingOut', 'true');
    await signOut(auth);
    window.location.href = 'login.html';
  } catch (error) {
    sessionStorage.removeItem('loggingOut');
    alert('Something went wrong. Please try again.');
  }
}

// ══════════════════════════════════════
//  RESET PASSWORD
//  Inatuma email ya reset kwa mtumiaji
// ══════════════════════════════════════
export async function resetPassword(email) {
  try {
    await sendPasswordResetEmail(auth, email);
    return { success: true };
  } catch (error) {
    let msg = 'Failed to send reset email. Please try again.';
    if (error.code === 'auth/user-not-found') msg = 'No account found with this email.';
    if (error.code === 'auth/invalid-email')  msg = 'Invalid email address.';
    return { success: false, error: msg };
  }
}

// ── Export auth kwa matumizi mengine ──
export { auth, onAuthStateChanged };