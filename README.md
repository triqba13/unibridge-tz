# 🌍 UniBridge — Your Bridge to Global Education

> Connecting Tanzanian students with international universities, scholarships, and expert guidance.

**Live Site:** [unibridge-tz.online](https://unibridge-tz.online) · [unibridge-tz.netlify.app](https://unibridge-tz.netlify.app)

---

## 📌 About

UniBridge is a web platform built to make international education accessible, affordable, and transparent for Tanzanian students. It eliminates the need for expensive agents by providing verified university information, scholarship listings, and a real student community — all in one place.

---

## ✨ Features

- 🏫 **Universities** — Browse 50+ international universities across India, Germany, Italy, UAE, Saudi Arabia and more
- 🎓 **Scholarships** — Discover 200+ fully funded and partial scholarships with deadlines and requirements
- 👥 **Campus Connect** — Connect via WhatsApp with Tanzanian students already studying abroad
- 📄 **Applications** — Apply directly or through our verified partner MtishbiScholars (TCU & KBS certified)
- 🔐 **Authentication** — Secure login and signup with Firebase (Email/Password + Google)
- 🌙 **Theme Switcher** — Dark, Milk White, and Pure White themes
- 📱 **Responsive** — Mobile-friendly design with hamburger menu

---

## 🛠️ Built With

| Technology | Usage |
|------------|-------|
| HTML5 | Structure |
| CSS3 | Styling |
| Vanilla JavaScript | Logic & Interactivity |
| Firebase Auth | Authentication |
| Firebase Firestore | Database |
| Netlify | Hosting & Deployment |

> ⚡ Built entirely with **Vanilla HTML, CSS & JavaScript** — no React, no Bootstrap, no Tailwind.

---

## 📁 Project Structure

```
unibridge-tz/
├── index.html              # Home page
├── login.html              # Login page
├── signup.html             # Signup page
├── dashboard.html          # Student dashboard
├── universities.html       # Universities listing
├── scholarships.html       # Scholarships listing
├── campus-connect.html     # Student community
├── application.html        # Applications page
├── profile.html            # User profile & support
├── style.css               # Main stylesheet
├── login.css               # Login page styles
├── signup.css              # Signup page styles
├── dashboard.css           # Dashboard styles
├── universities.css        # Universities styles
├── scholarships.css        # Scholarships styles
├── campus-connect.css      # Campus Connect styles
├── application.css         # Application styles
├── profile.css             # Profile styles
├── responsive.css          # Mobile responsive styles
├── main.js                 # Login page JS
├── dashboard.js            # Dashboard JS
├── universities.js         # Universities JS
├── scholarships.js         # Scholarships JS
├── campus-connect.js       # Campus Connect JS
├── application.js          # Application JS
├── profile.js              # Profile JS
├── theme.js                # Theme switcher
├── hamburger.js            # Mobile menu
├── firebase-auth.js        # Firebase auth logic
├── auth-protect.js         # Route protection
├── login-firebase.js       # Login Firebase integration
├── signup-firebase.js      # Signup Firebase integration
└── images/                 # Images & assets
    ├── favicon_io/         # Favicon files
    ├── mtishbi/            # MtishbiScholars photos
    └── ceo.jpeg            # Founder photo
```

---

## 🚀 Getting Started

Since this is a vanilla HTML/CSS/JS project, no installation is required.

**Option 1 — Open directly:**
```
Just open index.html in your browser
```

**Option 2 — Use Live Server (recommended):**
```bash
# Install Live Server VS Code extension
# Right-click index.html → Open with Live Server
```

**Option 3 — Local server:**
```bash
npx serve .
# Then open http://localhost:3000
```

---

## 🔥 Firebase Setup

The project uses Firebase for authentication. To run with full auth functionality:

1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable **Email/Password** and **Google** authentication
3. Replace the config in `firebase-auth.js` with your own config
4. Add your domain to Firebase **Authorized Domains**

---

## 🤝 Partner — MtishbiScholars

UniBridge partners with **MtishbiScholars** — a verified education consultancy based in Dar es Salaam, Tanzania.

- ✅ TCU Verified
- ✅ KBS Certified
- 📍 Dar es Salaam, Tanzania
- 📱 +255 615 324 294
- 📸 @mtishbischolars

Services: University applications, scholarships, visa & passport assistance, airport pickup.

---

## 📄 Pages Overview

| Page | Description | Access |
|------|-------------|--------|
| Home | Landing page with features overview | Public |
| Login | Firebase authentication | Public |
| Signup | Create new account | Public |
| Dashboard | Student overview with stats | Protected |
| Universities | Browse & filter universities | Protected |
| Scholarships | Browse & filter scholarships | Protected |
| Campus Connect | Connect with students via WhatsApp | Protected |
| Applications | Apply via partner or official website | Protected |
| Profile | Edit profile & get support | Protected |

---

## 👨‍💻 Developer

**Tariq Hamza Ahmad**
- Founder & Full Stack Developer
- 🌍 Dar es Salaam, Tanzania
- 📧 info@unibridge.com
- 📱 +255 744 588 248

---

## 📜 License

© 2026 UniBridge. All rights reserved.

---

<div align="center">
  <p>Built with ❤️ in Tanzania 🇹🇿</p>
  <p>
    <a href="https://unibridge-tz.online">🌐 Website</a> ·
    <a href="https://unibridge-tz.netlify.app">🚀 Netlify</a>
  </p>
</div>