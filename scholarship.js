const scholarships = [
  {
    id: 1,
    name: "ICCR Scholarship",
    org: "Indian Council for Cultural Relations",
    country: "india", flag: "🇮🇳",
    type: "full", typeLabel: "Fully Funded",
    level: ["undergraduate", "postgraduate", "phd"],
    deadline: "June 30, 2026", deadlineStatus: "ok",
    deadlineProgress: 65,
    covers: ["Tuition", "Accommodation", "Stipend", "Medical"],
    desc: "The ICCR Scholarship is one of the most prestigious scholarships offered by the Indian government for international students. It covers all major expenses and provides a monthly stipend for students pursuing undergraduate, postgraduate, or PhD programs in India.",
    benefits: [
      { icon: "bi-mortarboard", text: "Full Tuition" },
      { icon: "bi-house", text: "Accommodation" },
      { icon: "bi-cash", text: "Monthly Stipend" },
      { icon: "bi-heart-pulse", text: "Medical Cover" },
      { icon: "bi-airplane", text: "Air Ticket (Once)" },
      { icon: "bi-book", text: "Study Materials" }
    ],
    details: {
      value: "Full Funded",
      duration: "3–5 Years",
      slots: "Limited",
      level: "UG / PG / PhD",
      country: "🇮🇳 India",
      university: "Multiple Universities"
    },
    requirements: [
      "Age between 18–30 years",
      "Minimum GPA of 3.0 / 60% in last qualification",
      "Valid passport",
      "Medical fitness certificate",
      "No criminal record",
      "Not currently holding another scholarship"
    ],
    documents: ["Passport Copy", "Academic Transcripts", "Medical Certificate", "Birth Certificate", "Recommendation Letter x2", "SOP (500 words)", "Application Form"],
    website: "https://www.iccr.gov.in"
  },
  {
    id: 2,
    name: "DAAD Scholarship",
    org: "German Academic Exchange Service",
    country: "germany", flag: "🇩🇪",
    type: "full", typeLabel: "Fully Funded",
    level: ["postgraduate", "phd"],
    deadline: "October 15, 2026", deadlineStatus: "ok",
    deadlineProgress: 30,
    covers: ["Tuition", "Monthly Stipend", "Health Insurance", "Travel"],
    desc: "DAAD is Germany's internationally renowned scholarship program offering opportunities to study or conduct research at German universities. It is one of the world's largest funding organizations for international academic exchange.",
    benefits: [
      { icon: "bi-mortarboard", text: "Full Tuition" },
      { icon: "bi-cash", text: "€934/month Stipend" },
      { icon: "bi-heart-pulse", text: "Health Insurance" },
      { icon: "bi-airplane", text: "Travel Allowance" },
      { icon: "bi-house", text: "Housing Subsidy" },
      { icon: "bi-translate", text: "Language Course" }
    ],
    details: {
      value: "€934/month + Benefits",
      duration: "1–3 Years",
      slots: "Competitive",
      level: "PG / PhD / Research",
      country: "🇩🇪 Germany",
      university: "All German Universities"
    },
    requirements: [
      "Bachelor's degree with strong academic record",
      "IELTS 6.5+ or German B2 level",
      "Research proposal (for PhD)",
      "Motivation letter",
      "2 years work experience (some programs)",
      "Age limit varies by program"
    ],
    documents: ["CV (Europass format)", "Academic Transcripts", "Motivation Letter", "Research Proposal", "IELTS/TOEFL Certificate", "Recommendation Letters x2", "Passport"],
    website: "https://www.daad.de/en/"
  },
  {
    id: 3,
    name: "Italian Government Scholarship",
    org: "Ministry of Foreign Affairs — Italy",
    country: "italy", flag: "🇮🇹",
    type: "full", typeLabel: "Fully Funded",
    level: ["undergraduate", "postgraduate", "phd"],
    deadline: "March 15, 2027", deadlineStatus: "ok",
    deadlineProgress: 20,
    covers: ["Tuition", "Monthly Allowance", "Accommodation", "Language Course"],
    desc: "The Italian Government Scholarship (offered through MAECI) supports international students wishing to study in Italy. It covers tuition fees, provides a monthly allowance, and often includes a free Italian language course.",
    benefits: [
      { icon: "bi-mortarboard", text: "Full Tuition Waiver" },
      { icon: "bi-cash", text: "€900/month Allowance" },
      { icon: "bi-house", text: "Accommodation Help" },
      { icon: "bi-translate", text: "Italian Language Course" },
      { icon: "bi-heart-pulse", text: "Health Insurance" },
      { icon: "bi-journal", text: "Study Materials" }
    ],
    details: {
      value: "€900/month + Tuition",
      duration: "1–3 Years",
      slots: "Limited by Country",
      level: "UG / PG / PhD / Art",
      country: "🇮🇹 Italy",
      university: "All Italian Universities"
    },
    requirements: [
      "Valid passport",
      "Academic transcripts with minimum 70%",
      "Age under 28 (UG), under 35 (PG)",
      "IELTS 6.0+ or Italian B1",
      "Motivation letter",
      "No previous Italian scholarship"
    ],
    documents: ["Passport", "Academic Certificates", "Motivation Letter", "Language Certificate", "Birth Certificate", "Recommendation Letter", "Application Form"],
    website: "https://www.esteri.it/en/opportunities/scholarships/"
  },
  {
    id: 4,
    name: "Türkiye Bursları Scholarship",
    org: "Turkish Government",
    country: "turkey", flag: "🇹🇷",
    type: "full", typeLabel: "Fully Funded",
    level: ["undergraduate", "postgraduate", "phd"],
    deadline: "February 20, 2027", deadlineStatus: "ok",
    deadlineProgress: 15,
    covers: ["Tuition", "Accommodation", "Stipend", "Health", "Flight", "Turkish Course"],
    desc: "Türkiye Bursları is one of the most generous government scholarship programs in the world. It covers everything — tuition, accommodation, health insurance, monthly stipend, return flights, and even a free Turkish language course before your studies begin.",
    benefits: [
      { icon: "bi-mortarboard", text: "Full Tuition" },
      { icon: "bi-house", text: "Free Accommodation" },
      { icon: "bi-cash", text: "Monthly Stipend" },
      { icon: "bi-heart-pulse", text: "Full Health Insurance" },
      { icon: "bi-airplane", text: "Return Flight Ticket" },
      { icon: "bi-translate", text: "Turkish Language Course" }
    ],
    details: {
      value: "Full + Stipend $300–$800/month",
      duration: "4–5 Years (UG), 2 Years (PG)",
      slots: "5,000+ worldwide",
      level: "UG / PG / PhD",
      country: "🇹🇷 Turkey",
      university: "All Turkish Universities"
    },
    requirements: [
      "Age: Under 21 (UG), Under 30 (PG), Under 35 (PhD)",
      "Minimum 70% (UG) or 75% (PG) academic score",
      "Valid passport",
      "Good health condition",
      "No current enrollment in Turkish university",
      "Motivation and future plans essay"
    ],
    documents: ["Passport", "High School/University Diploma", "Transcripts", "Language Certificate", "Motivation Letter", "Medical Report", "Photo"],
    website: "https://turkiyeburslari.gov.tr/en"
  },
  {
    id: 5,
    name: "Saudi Government Scholarship",
    org: "Ministry of Education — Saudi Arabia",
    country: "saudi", flag: "🇸🇦",
    type: "full", typeLabel: "Fully Funded",
    level: ["undergraduate", "postgraduate", "phd"],
    deadline: "May 1, 2026", deadlineStatus: "urgent",
    deadlineProgress: 90,
    covers: ["Tuition", "Accommodation", "Stipend", "Health", "Flight"],
    desc: "The Saudi Government Scholarship program offers comprehensive support for international students studying in Saudi Arabia. Known for its strong focus on STEM, Islamic studies, and Arabic language programs.",
    benefits: [
      { icon: "bi-mortarboard", text: "Full Tuition" },
      { icon: "bi-house", text: "University Housing" },
      { icon: "bi-cash", text: "Monthly Stipend" },
      { icon: "bi-heart-pulse", text: "Medical Care" },
      { icon: "bi-airplane", text: "Annual Flight Ticket" },
      { icon: "bi-book", text: "Books Allowance" }
    ],
    details: {
      value: "Full Funded + Stipend",
      duration: "4–6 Years",
      slots: "Selective",
      level: "UG / PG / PhD",
      country: "🇸🇦 Saudi Arabia",
      university: "KAU, KFUPM, KSU & more"
    },
    requirements: [
      "Muslim applicants preferred for some programs",
      "Minimum 80% academic score",
      "Age under 25 (UG)",
      "Arabic proficiency or willingness to learn",
      "Valid passport with 2+ years validity",
      "Medical fitness certificate"
    ],
    documents: ["Passport", "Academic Certificates", "Birth Certificate", "Medical Report", "Good Conduct Certificate", "Recommendation Letters x2", "Photos"],
    website: "https://www.moe.gov.sa/en/Pages/default.aspx"
  },
  {
    id: 6,
    name: "Kuwait Government Scholarship",
    org: "Kuwait Cultural Office",
    country: "kuwait", flag: "🇰🇼",
    type: "full", typeLabel: "Fully Funded",
    level: ["undergraduate", "postgraduate"],
    deadline: "June 1, 2026", deadlineStatus: "soon",
    deadlineProgress: 75,
    covers: ["Tuition", "Accommodation", "Stipend", "Health", "Flight"],
    desc: "Kuwait offers government-funded scholarships for international students to study at Kuwaiti universities. The program is known for generous financial support and excellent living conditions.",
    benefits: [
      { icon: "bi-mortarboard", text: "Full Tuition" },
      { icon: "bi-house", text: "Free Housing" },
      { icon: "bi-cash", text: "Monthly Allowance" },
      { icon: "bi-heart-pulse", text: "Health Coverage" },
      { icon: "bi-airplane", text: "Flight Ticket" },
      { icon: "bi-award", text: "Book Allowance" }
    ],
    details: {
      value: "Full Funded",
      duration: "4 Years",
      slots: "Limited",
      level: "UG / PG",
      country: "🇰🇼 Kuwait",
      university: "Kuwait University & others"
    },
    requirements: [
      "Minimum 75% in high school",
      "Age under 22 years",
      "Valid passport",
      "Medical certificate",
      "Good conduct certificate",
      "Arabic language basic knowledge"
    ],
    documents: ["Passport", "High School Certificate", "Transcripts", "Medical Report", "Good Conduct", "Birth Certificate", "Passport Photos"],
    website: "https://www.kuwaitculture.org"
  },
  {
    id: 7,
    name: "Aga Khan Foundation Scholarship",
    org: "Aga Khan Foundation International",
    country: "international", flag: "🌍",
    type: "partial", typeLabel: "Partial Funded",
    level: ["postgraduate"],
    deadline: "March 31, 2027", deadlineStatus: "ok",
    deadlineProgress: 25,
    covers: ["Partial Tuition", "Living Allowance", "Loan Component"],
    desc: "The Aga Khan Foundation International Scholarship provides partial scholarships to exceptional students from developing countries, including Tanzania. It's a combination of grant and loan. Particularly strong in development, health, and education fields.",
    benefits: [
      { icon: "bi-mortarboard", text: "Partial Tuition" },
      { icon: "bi-cash", text: "Living Allowance" },
      { icon: "bi-graph-up", text: "Career Support" },
      { icon: "bi-people", text: "Alumni Network" }
    ],
    details: {
      value: "50% Grant + 50% Loan",
      duration: "1–2 Years",
      slots: "Very Competitive",
      level: "Postgraduate Only",
      country: "🌍 Multiple Countries",
      university: "Top World Universities"
    },
    requirements: [
      "From a developing country (Tanzania qualifies)",
      "Exceptional academic record (First Class / GPA 3.5+)",
      "Minimum 2 years professional work experience",
      "Admission letter from a recognized university",
      "Demonstrated financial need",
      "Strong commitment to community development"
    ],
    documents: ["University Admission Letter", "CV", "Transcripts", "Work Experience Proof", "Recommendation Letters x3", "Personal Statement", "Financial Documents"],
    website: "https://www.akdn.org/our-agencies/aga-khan-foundation/social-development/scholarships"
  },
  {
    id: 8,
    name: "AfDB Scholarship Program",
    org: "African Development Bank",
    country: "international", flag: "🌍",
    type: "full", typeLabel: "Fully Funded",
    level: ["postgraduate"],
    deadline: "April 30, 2026", deadlineStatus: "soon",
    deadlineProgress: 80,
    covers: ["Tuition", "Accommodation", "Stipend", "Books", "Health"],
    desc: "The African Development Bank Scholarship Program targets high achieving African students with demonstrated potential for leadership. It funds postgraduate studies at top African and international institutions.",
    benefits: [
      { icon: "bi-mortarboard", text: "Full Tuition" },
      { icon: "bi-house", text: "Accommodation" },
      { icon: "bi-cash", text: "Monthly Stipend" },
      { icon: "bi-book", text: "Books & Supplies" },
      { icon: "bi-heart-pulse", text: "Health Insurance" },
      { icon: "bi-airplane", text: "Travel Support" }
    ],
    details: {
      value: "Full Funded",
      duration: "1–2 Years",
      slots: "Around 300/year",
      level: "Postgraduate Only",
      country: "🌍 Africa & International",
      university: "Partner Universities"
    },
    requirements: [
      "African citizen (Tanzania qualifies)",
      "Under 40 years of age",
      "First class or upper second class degree",
      "Employed or self-employed (preference given)",
      "Must return to Africa after studies",
      "Strong leadership track record"
    ],
    documents: ["Passport", "University Degree Certificate", "Transcripts", "Employment Letter", "Recommendation Letters x2", "Motivation Letter", "CV"],
    website: "https://www.afdb.org/en/topics-and-sectors/initiatives-partnerships/african-development-bank-scholarship-program"
  },
  {
    id: 9,
    name: "Erasmus Mundus Scholarship",
    org: "European Commission",
    country: "international", flag: "🇪🇺",
    type: "full", typeLabel: "Fully Funded",
    level: ["postgraduate", "phd"],
    deadline: "January 10, 2027", deadlineStatus: "ok",
    deadlineProgress: 10,
    covers: ["Tuition", "Stipend", "Travel", "Insurance", "Installation"],
    desc: "Erasmus Mundus Joint Masters Degrees are prestigious, integrated international study programs delivered by an international consortium of universities. Students study in at least two European countries and receive a generous scholarship.",
    benefits: [
      { icon: "bi-mortarboard", text: "Full Tuition" },
      { icon: "bi-cash", text: "€1,400/month Stipend" },
      { icon: "bi-airplane", text: "Travel Allowance" },
      { icon: "bi-heart-pulse", text: "Health Insurance" },
      { icon: "bi-house", text: "Installation Allowance" },
      { icon: "bi-globe", text: "Study in 2+ Countries" }
    ],
    details: {
      value: "€1,400/month + Full Tuition",
      duration: "1–2 Years",
      slots: "Varies by Program",
      level: "Masters / PhD",
      country: "🇪🇺 Multiple EU Countries",
      university: "Consortium Universities"
    },
    requirements: [
      "Bachelor's degree in relevant field",
      "IELTS 6.5+ or equivalent",
      "Strong academic record (GPA 3.0+)",
      "Motivation letter tailored to the program",
      "Research interests statement (PhD)",
      "2 recommendation letters from professors"
    ],
    documents: ["Passport", "Bachelor's Degree", "Transcripts", "IELTS Certificate", "Motivation Letter", "CV", "Recommendation Letters x2", "Research Proposal (PhD)"],
    website: "https://www.eacea.ec.europa.eu/scholarships/emjmd-catalogue_en"
  }
];

// ── State ──
let currentWebsite = '';
let currentSchId   = null;

// ── Deadline helper ──
function getDeadlineClass(status) {
  if (status === 'urgent') return 'deadline-urgent';
  if (status === 'soon')   return 'deadline-soon';
  return 'deadline-ok';
}

function getDeadlineIcon(status) {
  if (status === 'urgent') return 'bi-exclamation-circle-fill';
  if (status === 'soon')   return 'bi-clock-fill';
  return 'bi-calendar-check';
}

// ── Type pill helper ──
function getTypePill(type, label) {
  if (type === 'full')    return `<span class="sch-type-pill pill-full">${label}</span>`;
  if (type === 'partial') return `<span class="sch-type-pill pill-partial">${label}</span>`;
  return `<span class="sch-type-pill pill-merit">${label}</span>`;
}

// ── Render cards ──
function renderScholarships(list) {
  const container = document.getElementById('scholarshipsContainer');
  document.getElementById('resultCount').textContent = list.length;

  if (list.length === 0) {
    container.innerHTML = `
      <div class="no-results">
        <i class="bi bi-search"></i>
        No scholarships found. Try a different search.
      </div>`;
    return;
  }

  container.innerHTML = list.map((s, i) => `
    <div class="sch-card" onclick="openModal(${s.id})" style="animation-delay:${i * 0.05}s">
      <div class="sch-card-top">
        <div class="sch-flag-wrap">${s.flag}</div>
        <div class="sch-card-title-wrap">
          <div class="sch-card-name">${s.name}</div>
          <div class="sch-card-org">${s.org}</div>
        </div>
        ${getTypePill(s.type, s.typeLabel)}
      </div>

      <p class="sch-card-desc">${s.desc}</p>

      <div class="sch-covers">
        ${s.covers.map(c => `<span class="cover-tag"><i class="bi bi-check2"></i> ${c}</span>`).join('')}
      </div>

      <div class="sch-card-footer">
        <div class="sch-deadline-wrap">
          <span class="sch-deadline-label">Deadline</span>
          <span class="sch-deadline-val ${getDeadlineClass(s.deadlineStatus)}">
            <i class="bi ${getDeadlineIcon(s.deadlineStatus)}"></i>
            ${s.deadline}
          </span>
          <div class="progress-wrap">
            <div class="progress-bar">
              <div class="progress-fill" style="width:${s.deadlineProgress}%"></div>
            </div>
            <span class="progress-label">${s.deadlineProgress}% filled</span>
          </div>
        </div>
        <button class="btn-view-sch">View Details</button>
      </div>
    </div>
  `).join('');
}

// ── Open Modal ──
function openModal(id) {
  const s = scholarships.find(x => x.id === id);
  if (!s) return;

  currentWebsite = s.website;
  currentSchId   = s.id;

  // Banner
  document.getElementById('mFlag').textContent = s.flag;
  document.getElementById('mName').textContent = s.name;
  document.getElementById('mOrg').textContent  = s.org;

  const typeBadge = document.getElementById('mTypeBadge');
  typeBadge.textContent  = s.typeLabel;
  typeBadge.className    = 'modal-type-badge ' +
    (s.type === 'full' ? 'mb-green' : s.type === 'partial' ? 'mb-amber' : 'mb-blue');

  // Badges
  document.getElementById('mBadges').innerHTML = `
    <span class="m-badge mb-blue"><i class="bi bi-globe"></i> ${s.details.country}</span>
    <span class="m-badge mb-amber"><i class="bi bi-clock"></i> Deadline: ${s.deadline}</span>
    <span class="m-badge mb-purple"><i class="bi bi-mortarboard"></i> ${s.details.level}</span>
    <span class="m-badge mb-green"><i class="bi bi-award"></i> ${s.details.value}</span>
  `;

  // Desc
  document.getElementById('mDesc').textContent = s.desc;

  // Benefits
  document.getElementById('mBenefits').innerHTML = s.benefits.map(b => `
    <div class="benefit-item">
      <i class="bi ${b.icon} benefit-icon"></i>
      <span class="benefit-text">${b.text}</span>
    </div>
  `).join('');

  // Info grid
  document.getElementById('mInfoGrid').innerHTML = `
    <div class="modal-info-item"><div class="modal-info-label">Value</div><div class="modal-info-value">${s.details.value}</div></div>
    <div class="modal-info-item"><div class="modal-info-label">Duration</div><div class="modal-info-value">${s.details.duration}</div></div>
    <div class="modal-info-item"><div class="modal-info-label">Slots</div><div class="modal-info-value">${s.details.slots}</div></div>
    <div class="modal-info-item"><div class="modal-info-label">Level</div><div class="modal-info-value">${s.details.level}</div></div>
    <div class="modal-info-item"><div class="modal-info-label">University</div><div class="modal-info-value">${s.details.university}</div></div>
    <div class="modal-info-item"><div class="modal-info-label">Country</div><div class="modal-info-value">${s.details.country}</div></div>
  `;

  // Requirements
  document.getElementById('mReqs').innerHTML = s.requirements.map(r => `
    <li><i class="bi bi-check-circle-fill"></i>${r}</li>
  `).join('');

  // Documents
  document.getElementById('mDocs').innerHTML = s.documents.map(d => `
    <span class="doc-tag"><i class="bi bi-file-earmark"></i>${d}</span>
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

// ── Actions ──
function visitWebsite() {
  window.open(currentWebsite, '_blank');
}

function applyNow() {
  window.location.href = 'application.html';
}

function handleLogout() {
  if (confirm('Una uhakika unataka kutoka?')) {
    window.location.href = 'login.html';
  }
}

// ── Filter Logic ──
function filterScholarships() {
  const search  = document.getElementById('searchInput').value.toLowerCase();
  const country = document.getElementById('countryFilter').value;
  const type    = document.getElementById('typeFilter').value;
  const level   = document.getElementById('levelFilter').value;

  const filtered = scholarships.filter(s => {
    const matchSearch  = !search ||
      s.name.toLowerCase().includes(search) ||
      s.org.toLowerCase().includes(search) ||
      s.desc.toLowerCase().includes(search);
    const matchCountry = country === 'all' || s.country === country;
    const matchType    = type === 'all' || s.type === type;
    const matchLevel   = level === 'all' || s.level.includes(level);
    return matchSearch && matchCountry && matchType && matchLevel;
  });

  renderScholarships(filtered);
}

// ── Event Listeners ──
document.getElementById('searchInput').addEventListener('input', filterScholarships);
document.getElementById('countryFilter').addEventListener('change', filterScholarships);
document.getElementById('typeFilter').addEventListener('change', filterScholarships);
document.getElementById('levelFilter').addEventListener('change', filterScholarships);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ── Initial render ──
renderScholarships(scholarships);