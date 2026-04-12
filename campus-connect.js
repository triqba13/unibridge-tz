const students = [
  {
    id: 1,
    name: "Amina Saleh",
    initials: "AS",
    color: "linear-gradient(135deg, #3b82f6, #06b6d4)",
    country: "india",
    countryName: "India", flag: "🇮🇳",
    university: "SRM Institute of Science & Technology",
    city: "Chennai, India",
    course: "Computer Science",
    courseTag: "cs",
    year: "3",
    yearLabel: "Year 3",
    gpa: "3.7",
    scholarship: "ICCR Scholarship",
    online: true,
    whatsapp: "255700000001",
    desc: "Hey! I'm Amina from Dar es Salaam, currently in my 3rd year of Computer Science at SRM. I love coding, AI projects, and helping new students settle in India. Feel free to reach out — I know how confusing the admission process can be!",
    canHelp: ["Admission Process", "ICCR Scholarship", "Life in Chennai", "SRM Campus Guide", "Tanzanian Community India"],
    details: {
      from: "Dar es Salaam, TZ",
      university: "SRM Institute",
      course: "B.Tech CS",
      year: "Year 3 of 4",
      scholarship: "ICCR",
      gpa: "3.7 / 4.0"
    }
  },
  {
    id: 2,
    name: "Hassan Mwamba",
    initials: "HM",
    color: "linear-gradient(135deg, #10b981, #059669)",
    country: "india",
    countryName: "India", flag: "🇮🇳",
    university: "Lovely Professional University",
    city: "Punjab, India",
    course: "Engineering",
    courseTag: "engineering",
    year: "2",
    yearLabel: "Year 2",
    gpa: "3.5",
    scholarship: "Merit Scholarship",
    online: true,
    whatsapp: "255700000002",
    desc: "Habari! Mimi ni Hassan kutoka Mwanza. Nasoma Mechanical Engineering hapa LPU. Chuo ni kikubwa sana — kama una maswali kuhusu LPU, application, au maisha India, nipigie WhatsApp!",
    canHelp: ["LPU Application", "Mechanical Engineering", "Life in Punjab", "Merit Scholarship", "Hostel Life"],
    details: {
      from: "Mwanza, TZ",
      university: "LPU",
      course: "B.Tech Mechanical Eng",
      year: "Year 2 of 4",
      scholarship: "LPU Merit",
      gpa: "3.5 / 4.0"
    }
  },
  {
    id: 3,
    name: "Fatuma Juma",
    initials: "FJ",
    color: "linear-gradient(135deg, #8b5cf6, #ec4899)",
    country: "india",
    countryName: "India", flag: "🇮🇳",
    university: "Chandigarh University",
    city: "Chandigarh, India",
    course: "Business",
    courseTag: "business",
    year: "4",
    yearLabel: "Year 4",
    gpa: "3.8",
    scholarship: "Self Funded",
    online: false,
    whatsapp: "255700000003",
    desc: "Hi! I'm Fatuma, in my final year of BBA at Chandigarh University. I help students understand the business programs here and what to expect from campus life. Currently working on my thesis about East African trade!",
    canHelp: ["BBA Program", "Chandigarh University", "Final Year Tips", "Campus Life", "Business Opportunities"],
    details: {
      from: "Zanzibar, TZ",
      university: "Chandigarh University",
      course: "BBA",
      year: "Year 4 of 4",
      scholarship: "Self Funded",
      gpa: "3.8 / 4.0"
    }
  },
  {
    id: 4,
    name: "Yusuf Rashid",
    initials: "YR",
    color: "linear-gradient(135deg, #f59e0b, #ef4444)",
    country: "germany",
    countryName: "Germany", flag: "🇩🇪",
    university: "Technical University of Munich",
    city: "Munich, Germany",
    course: "Engineering",
    courseTag: "engineering",
    year: "2",
    yearLabel: "Year 2",
    gpa: "3.9",
    scholarship: "DAAD Scholarship",
    online: true,
    whatsapp: "255700000004",
    desc: "Salaam! I'm Yusuf from Arusha, studying Mechanical Engineering at TUM Munich on a DAAD scholarship. Germany is amazing for engineering — if you want to know how to apply for DAAD or study in Germany, I'm your guy!",
    canHelp: ["DAAD Scholarship", "TUM Munich Application", "Life in Germany", "German Language Tips", "Engineering Programs"],
    details: {
      from: "Arusha, TZ",
      university: "TU Munich",
      course: "M.Sc Mechanical Eng",
      year: "Year 2 of 2",
      scholarship: "DAAD Full",
      gpa: "3.9 / 4.0"
    }
  },
  {
    id: 5,
    name: "Maryam Ally",
    initials: "MA",
    color: "linear-gradient(135deg, #06b6d4, #3b82f6)",
    country: "italy",
    countryName: "Italy", flag: "🇮🇹",
    university: "University of Bologna",
    city: "Bologna, Italy",
    course: "Medicine",
    courseTag: "medicine",
    year: "3",
    yearLabel: "Year 3",
    gpa: "3.6",
    scholarship: "Italian Gov Scholarship",
    online: true,
    whatsapp: "255700000005",
    desc: "Ciao! I'm Maryam, studying Medicine at the oldest university in the world — Bologna! I got here through the Italian Government Scholarship. Happy to guide anyone interested in studying medicine in Italy.",
    canHelp: ["Italian Gov Scholarship", "Medicine in Italy", "Bologna University", "Italian Language", "Visa Process Italy"],
    details: {
      from: "Dodoma, TZ",
      university: "University of Bologna",
      course: "MBBS Medicine",
      year: "Year 3 of 6",
      scholarship: "Italian Government",
      gpa: "3.6 / 4.0"
    }
  },
  {
    id: 6,
    name: "Omar Bakari",
    initials: "OB",
    color: "linear-gradient(135deg, #10b981, #06b6d4)",
    country: "turkey",
    countryName: "Turkey", flag: "🇹🇷",
    university: "Istanbul Technical University",
    city: "Istanbul, Turkey",
    course: "Engineering",
    courseTag: "engineering",
    year: "2",
    yearLabel: "Year 2",
    gpa: "3.7",
    scholarship: "Türkiye Bursları",
    online: false,
    whatsapp: "255700000006",
    desc: "Merhaba! Omar hapa kutoka Tanga. Nasoma Civil Engineering Istanbul kwa Türkiye Bursları scholarship — ambayo inafunika kila kitu! Istanbul ni mji mzuri sana. Ikiwa una swali kuhusu scholarship hii nipigie!",
    canHelp: ["Türkiye Bursları Application", "Life in Istanbul", "Civil Engineering", "Turkish Culture", "Free Accommodation Tips"],
    details: {
      from: "Tanga, TZ",
      university: "Istanbul Technical Uni",
      course: "B.Eng Civil Engineering",
      year: "Year 2 of 4",
      scholarship: "Türkiye Bursları Full",
      gpa: "3.7 / 4.0"
    }
  },
  {
    id: 7,
    name: "Zainab Hamisi",
    initials: "ZH",
    color: "linear-gradient(135deg, #ec4899, #8b5cf6)",
    country: "saudi",
    countryName: "Saudi Arabia", flag: "🇸🇦",
    university: "King Abdulaziz University",
    city: "Jeddah, Saudi Arabia",
    course: "Medicine",
    courseTag: "medicine",
    year: "4",
    yearLabel: "Year 4",
    gpa: "3.8",
    scholarship: "Saudi Gov Scholarship",
    online: true,
    whatsapp: "255700000007",
    desc: "Assalamu Alaikum! I'm Zainab from Dar es Salaam, 4th year Medicine student at KAU Jeddah. The Saudi Government Scholarship covers everything. I can guide you through the application and life in Saudi Arabia.",
    canHelp: ["Saudi Gov Scholarship", "Medicine at KAU", "Life in Jeddah", "Islamic Studies", "Application Documents"],
    details: {
      from: "Dar es Salaam, TZ",
      university: "King Abdulaziz Uni",
      course: "MBBS Medicine",
      year: "Year 4 of 6",
      scholarship: "Saudi Government Full",
      gpa: "3.8 / 4.0"
    }
  },
  {
    id: 8,
    name: "Idris Kombo",
    initials: "IK",
    color: "linear-gradient(135deg, #f59e0b, #10b981)",
    country: "india",
    countryName: "India", flag: "🇮🇳",
    university: "IIT Delhi",
    city: "New Delhi, India",
    course: "cs",
    courseTag: "cs",
    year: "3",
    yearLabel: "Year 3",
    gpa: "4.0",
    scholarship: "ICCR Scholarship",
    online: true,
    whatsapp: "255700000008",
    desc: "Hey! Idris here from Pemba Island. I made it into IIT Delhi — one of India's top engineering schools — through ICCR scholarship. It was a tough journey but totally worth it. Ask me anything about IIT admissions!",
    canHelp: ["IIT Delhi Admission", "ICCR Scholarship", "Computer Science", "Delhi Life", "Competitive Application Tips"],
    details: {
      from: "Pemba Island, TZ",
      university: "IIT Delhi",
      course: "B.Tech CS",
      year: "Year 3 of 4",
      scholarship: "ICCR Full",
      gpa: "4.0 / 4.0"
    }
  },
  {
    id: 9,
    name: "Rehema Msanga",
    initials: "RM",
    color: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
    country: "uae",
    countryName: "UAE", flag: "🇦🇪",
    university: "University of Sharjah",
    city: "Sharjah, UAE",
    course: "Business",
    courseTag: "business",
    year: "2",
    yearLabel: "Year 2",
    gpa: "3.5",
    scholarship: "Merit Scholarship",
    online: false,
    whatsapp: "255700000009",
    desc: "Hi! I'm Rehema from Morogoro, studying Business Administration at University of Sharjah. UAE is a great place for business exposure. I can help you understand the admission process and student life here.",
    canHelp: ["University of Sharjah", "Business Programs UAE", "Life in Sharjah", "Merit Scholarship", "UAE Visa Process"],
    details: {
      from: "Morogoro, TZ",
      university: "University of Sharjah",
      course: "BBA",
      year: "Year 2 of 4",
      scholarship: "UOS Merit",
      gpa: "3.5 / 4.0"
    }
  },
  {
    id: 10,
    name: "Salim Abdallah",
    initials: "SA",
    color: "linear-gradient(135deg, #ef4444, #f59e0b)",
    country: "germany",
    countryName: "Germany", flag: "🇩🇪",
    university: "Heidelberg University",
    city: "Heidelberg, Germany",
    course: "Medicine",
    courseTag: "medicine",
    year: "2",
    yearLabel: "Year 2",
    gpa: "3.8",
    scholarship: "DAAD Scholarship",
    online: true,
    whatsapp: "255700000010",
    desc: "Hello! Salim from Kilimanjaro region here. I'm studying Medicine at Heidelberg — one of the world's oldest universities! DAAD funded everything. Medicine in Germany is excellent and I'd love to share my experience.",
    canHelp: ["Medicine in Germany", "Heidelberg University", "DAAD Application", "German Language B2", "Medical Requirements"],
    details: {
      from: "Kilimanjaro, TZ",
      university: "Heidelberg University",
      course: "MBBS Medicine",
      year: "Year 2 of 6",
      scholarship: "DAAD Full",
      gpa: "3.8 / 4.0"
    }
  },
  {
    id: 11,
    name: "Nasra Ibrahim",
    initials: "NI",
    color: "linear-gradient(135deg, #06b6d4, #10b981)",
    country: "italy",
    countryName: "Italy", flag: "🇮🇹",
    university: "Politecnico di Milano",
    city: "Milan, Italy",
    course: "Design",
    courseTag: "design",
    year: "1",
    yearLabel: "Year 1",
    gpa: "3.6",
    scholarship: "Erasmus Mundus",
    online: true,
    whatsapp: "255700000011",
    desc: "Ciao! I'm Nasra from Dar es Salaam, first year Architecture & Design at Polimi Milan! Got here through Erasmus Mundus. Milan is the fashion and design capital of the world. Perfect for creative students!",
    canHelp: ["Erasmus Mundus Scholarship", "Design/Architecture", "Polimi Milan", "Life in Milan", "Portfolio Tips"],
    details: {
      from: "Dar es Salaam, TZ",
      university: "Politecnico di Milano",
      course: "B.Sc Design",
      year: "Year 1 of 3",
      scholarship: "Erasmus Mundus",
      gpa: "3.6 / 4.0"
    }
  },
  {
    id: 12,
    name: "Juma Selemani",
    initials: "JS",
    color: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
    country: "india",
    countryName: "India", flag: "🇮🇳",
    university: "University of Mumbai",
    city: "Mumbai, India",
    course: "Business",
    courseTag: "business",
    year: "4",
    yearLabel: "Year 4",
    gpa: "3.4",
    scholarship: "Self Funded",
    online: false,
    whatsapp: "255700000012",
    desc: "Habari! Juma hapa kutoka Mbeya. Ninakamilisha digrii yangu ya Commerce Mumbai. Mumbai ni mji mkubwa na wa biashara — kama unataka kujua kuhusu maisha Mumbai au admission, nipigie WhatsApp!",
    canHelp: ["Mumbai University", "Commerce Programs", "Life in Mumbai", "Affordable Living Tips", "Tanzanian Community Mumbai"],
    details: {
      from: "Mbeya, TZ",
      university: "University of Mumbai",
      course: "B.Com",
      year: "Year 4 of 4",
      scholarship: "Self Funded",
      gpa: "3.4 / 4.0"
    }
  }
];

// ── State ──
let currentWhatsApp = '';

// ── Avatar colors for modal ──
function getAvatarStyle(student) {
  return `background: ${student.color}`;
}

// ── Render cards ──
function renderStudents(list) {
  const container = document.getElementById('studentsContainer');
  document.getElementById('resultCount').textContent = list.length;

  if (list.length === 0) {
    container.innerHTML = `
      <div class="no-results">
        <i class="bi bi-people"></i>
        No students found. Try a different search.
      </div>`;
    return;
  }

  container.innerHTML = list.map((s, i) => `
    <div class="student-card" style="animation-delay:${i * 0.05}s">

      <div class="student-avatar" style="${getAvatarStyle(s)}">
        ${s.initials}
        <div class="online-indicator ${s.online ? 'online' : 'offline'}"></div>
      </div>

      <div class="student-name">${s.name}</div>

      <div class="student-uni">
        <i class="bi bi-building"></i> ${s.university}
      </div>

      <span class="student-course">${s.course}</span>

      <div class="student-meta">
        <span class="meta-pill">${s.flag} ${s.countryName}</span>
        <span class="meta-pill">📚 ${s.yearLabel}</span>
        <span class="meta-pill">⭐ GPA ${s.gpa}</span>
      </div>

      <div class="student-card-footer">
        <button class="btn-profile" onclick="openModal(${s.id})">
          View Profile
        </button>
        <button class="btn-wa" onclick="quickWhatsApp('${s.whatsapp}', '${s.name}', event)">
          <i class="bi bi-whatsapp"></i> Connect
        </button>
      </div>

    </div>
  `).join('');
}

// ── Open Modal ──
function openModal(id) {
  const s = students.find(x => x.id === id);
  if (!s) return;

  currentWhatsApp = s.whatsapp;

  // Avatar
  document.getElementById('mAvatar').style.cssText = getAvatarStyle(s);
  document.getElementById('mAvatar').textContent = s.initials;

  // Online dot
  const dot = document.getElementById('mOnlineDot');
  dot.className = `modal-online-dot ${s.online ? 'online' : 'offline'}`;

  // Info
  document.getElementById('mName').textContent = s.name;
  document.getElementById('mUni').textContent = s.university;
  document.getElementById('mLocation').innerHTML = `<i class="bi bi-geo-alt"></i> ${s.city}`;

  // Tags
  document.getElementById('mTags').innerHTML = `
    <span class="m-tag mt-blue">${s.flag} ${s.countryName}</span>
    <span class="m-tag mt-green">${s.course}</span>
    <span class="m-tag mt-amber">${s.yearLabel}</span>
    <span class="m-tag ${s.online ? 'mt-green' : 'mt-purple'}">${s.online ? '🟢 Online' : '⚪ Offline'}</span>
  `;

  // Desc
  document.getElementById('mDesc').textContent = s.desc;

  // Details grid
  document.getElementById('mInfoGrid').innerHTML = `
    <div class="modal-info-item"><div class="modal-info-label">From</div><div class="modal-info-value">${s.details.from}</div></div>
    <div class="modal-info-item"><div class="modal-info-label">University</div><div class="modal-info-value">${s.details.university}</div></div>
    <div class="modal-info-item"><div class="modal-info-label">Course</div><div class="modal-info-value">${s.details.course}</div></div>
    <div class="modal-info-item"><div class="modal-info-label">Year</div><div class="modal-info-value">${s.details.year}</div></div>
    <div class="modal-info-item"><div class="modal-info-label">Scholarship</div><div class="modal-info-value">${s.details.scholarship}</div></div>
    <div class="modal-info-item"><div class="modal-info-label">GPA</div><div class="modal-info-value">${s.details.gpa}</div></div>
  `;

  // Help tags
  document.getElementById('mHelpTags').innerHTML = s.canHelp.map(h => `
    <span class="help-tag"><i class="bi bi-check2-circle"></i>${h}</span>
  `).join('');

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

// ── Close Modal ──
function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOutside(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
}

// ── WhatsApp ──
function connectWhatsApp() {
  const msg = encodeURIComponent("Hi! I found your profile on UniBridge. I'd love to connect and learn about your experience studying abroad. 🎓");
  window.open(`https://wa.me/${currentWhatsApp}?text=${msg}`, '_blank');
}

function quickWhatsApp(number, name, event) {
  event.stopPropagation();
  const msg = encodeURIComponent(`Hi ${name}! I found your profile on UniBridge. I'd love to connect and learn about your experience studying abroad. 🎓`);
  window.open(`https://wa.me/${number}?text=${msg}`, '_blank');
}

// ── Logout ──
function handleLogout() {
  if (confirm('Una uhakika unataka kutoka?')) {
    window.location.href = 'login.html';
  }
}

// ── Filter ──
function filterStudents() {
  const search  = document.getElementById('searchInput').value.toLowerCase();
  const country = document.getElementById('countryFilter').value;
  const course  = document.getElementById('courseFilter').value;
  const year    = document.getElementById('yearFilter').value;

  const filtered = students.filter(s => {
    const matchSearch  = !search ||
      s.name.toLowerCase().includes(search) ||
      s.university.toLowerCase().includes(search) ||
      s.course.toLowerCase().includes(search) ||
      s.city.toLowerCase().includes(search);
    const matchCountry = country === 'all' || s.country === country;
    const matchCourse  = course === 'all' || s.courseTag === course;
    const matchYear    = year === 'all' || s.year === year;
    return matchSearch && matchCountry && matchCourse && matchYear;
  });

  renderStudents(filtered);
}

// ── Event listeners ──
document.getElementById('searchInput').addEventListener('input', filterStudents);
document.getElementById('countryFilter').addEventListener('change', filterStudents);
document.getElementById('courseFilter').addEventListener('change', filterStudents);
document.getElementById('yearFilter').addEventListener('change', filterStudents);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ── Initial render ──
renderStudents(students);