const universities = [
  // ── INDIA ──
  {
    id: 1, country: "india", countryName: "India", flag: "🇮🇳",
    name: "SRM Institute of Science & Technology",
    abbr: "SRM", city: "Chennai, Tamil Nadu",
    rating: "4.5", fees: "$3,000/yr",
    tags: ["Engineering", "CS", "Business", "Medicine"],
    courses: ["B.Tech CS", "B.Tech ECE", "MBA", "B.Sc Medicine", "B.Tech Mechanical", "BCA"],
    desc: "SRM Institute is one of India's top private universities with world-class facilities, research centers, and strong industry connections. Known for excellent placement records and diverse programs.",
    established: "1985", students: "52,000+", ranking: "Top 10 Private",
    deadline: "June 30, 2026", scholarships: "Yes — Merit Based",
    requirements: ["O-Level / A-Level Certificate", "English Proficiency (IELTS 6.0+)", "Passport Copy", "Medical Certificate", "Filled Application Form"],
    website: "https://www.srmist.edu.in",
    images: [
      "https://picsum.photos/seed/srm1/800/400",
      "https://picsum.photos/seed/srm2/800/400",
      "https://picsum.photos/seed/srm3/800/400",
      "https://picsum.photos/seed/srm4/800/400"
    ]
  },
  {
    id: 2, country: "india", countryName: "India", flag: "🇮🇳",
    name: "Lovely Professional University",
    abbr: "LPU", city: "Phagwara, Punjab",
    rating: "4.4", fees: "$2,500/yr",
    tags: ["Engineering", "Business", "Arts", "CS"],
    courses: ["B.Tech CS", "BBA", "B.Arch", "B.Design", "MBA", "B.Sc Nursing"],
    desc: "LPU is Asia's largest university campus, offering 200+ programs with state-of-the-art infrastructure, international collaborations, and vibrant student life.",
    established: "2005", students: "30,000+", ranking: "Top 15 Overall",
    deadline: "July 15, 2026", scholarships: "Yes — Need & Merit",
    requirements: ["O-Level Certificate", "English Proficiency", "Passport", "SOP Letter", "Application Form"],
    website: "https://www.lpu.in",
    images: [
      "https://picsum.photos/seed/lpu1/800/400",
      "https://picsum.photos/seed/lpu2/800/400",
      "https://picsum.photos/seed/lpu3/800/400"
    ]
  },
  {
    id: 3, country: "india", countryName: "India", flag: "🇮🇳",
    name: "Chandigarh University",
    abbr: "CU", city: "Chandigarh, Punjab",
    rating: "4.4", fees: "$2,800/yr",
    tags: ["Engineering", "CS", "Business", "Law"],
    courses: ["B.Tech CS", "B.Com", "LLB", "MBA", "B.Tech AI/ML", "BCA"],
    desc: "Chandigarh University is a NAAC A+ accredited institution known for innovation, entrepreneurship, and high placement rates. Strong international student community.",
    established: "2012", students: "28,000+", ranking: "Top 20 Overall",
    deadline: "June 1, 2026", scholarships: "Yes — Merit Based",
    requirements: ["O-Level Certificate", "IELTS 6.0 / TOEFL", "Passport Copy", "Medical Report", "Application Form"],
    website: "https://www.cuchd.in",
    images: [
      "https://picsum.photos/seed/cu1/800/400",
      "https://picsum.photos/seed/cu2/800/400",
      "https://picsum.photos/seed/cu3/800/400",
      "https://picsum.photos/seed/cu4/800/400"
    ]
  },
  {
    id: 4, country: "india", countryName: "India", flag: "🇮🇳",
    name: "Nirma University",
    abbr: "NU", city: "Ahmedabad, Gujarat",
    rating: "4.3", fees: "$2,600/yr",
    tags: ["Engineering", "Business", "Pharmacy", "Law"],
    courses: ["B.Tech", "MBA", "B.Pharm", "LLB", "BBA", "B.Sc"],
    desc: "Nirma University is a prestigious institution in Gujarat known for quality education, strong alumni network, and excellent industry partnerships in western India.",
    established: "1995", students: "15,000+", ranking: "Top 30 Overall",
    deadline: "May 30, 2026", scholarships: "Yes — Merit Based",
    requirements: ["High School Certificate", "English Proficiency", "Passport", "SOP", "Recommendation Letter"],
    website: "https://www.nirmauni.ac.in",
    images: [
      "https://picsum.photos/seed/nirma1/800/400",
      "https://picsum.photos/seed/nirma2/800/400",
      "https://picsum.photos/seed/nirma3/800/400"
    ]
  },
  {
    id: 5, country: "india", countryName: "India", flag: "🇮🇳",
    name: "SVKM's NMIMS University",
    abbr: "NMIMS", city: "Mumbai, Maharashtra",
    rating: "4.5", fees: "$4,000/yr",
    tags: ["Business", "Engineering", "Pharmacy", "Law"],
    courses: ["MBA", "B.Tech", "B.Pharm", "BBA", "LLB", "B.Sc Data Science"],
    desc: "NMIMS is one of Mumbai's most reputed universities with a legacy of producing business and technology leaders. Strong corporate connections and placement network.",
    established: "1981", students: "16,000+", ranking: "Top 10 Business",
    deadline: "April 30, 2026", scholarships: "Limited",
    requirements: ["O-Level / A-Level", "IELTS 6.5+", "Passport", "Bank Statement", "Medical Certificate"],
    website: "https://www.nmims.edu",
    images: [
      "https://picsum.photos/seed/nmims1/800/400",
      "https://picsum.photos/seed/nmims2/800/400",
      "https://picsum.photos/seed/nmims3/800/400"
    ]
  },
  {
    id: 6, country: "india", countryName: "India", flag: "🇮🇳",
    name: "University of Delhi",
    abbr: "DU", city: "New Delhi",
    rating: "4.6", fees: "$1,500/yr",
    tags: ["Arts", "Science", "Commerce", "Law"],
    courses: ["B.A. Economics", "B.Com", "B.Sc", "LLB", "MA", "MBA"],
    desc: "University of Delhi is one of India's oldest and most prestigious universities. Known for academic excellence, diverse student community, and vibrant campus life in the capital.",
    established: "1922", students: "300,000+", ranking: "#4 India Overall",
    deadline: "June 15, 2026", scholarships: "Yes — Government",
    requirements: ["O-Level Certificate", "English Proficiency", "Passport", "Equivalency Certificate", "Application Form"],
    website: "https://www.du.ac.in",
    images: [
      "https://picsum.photos/seed/du1/800/400",
      "https://picsum.photos/seed/du2/800/400",
      "https://picsum.photos/seed/du3/800/400",
      "https://picsum.photos/seed/du4/800/400"
    ]
  },
  {
    id: 7, country: "india", countryName: "India", flag: "🇮🇳",
    name: "IIT Delhi",
    abbr: "IITD", city: "New Delhi",
    rating: "4.9", fees: "$2,000/yr",
    tags: ["Engineering", "CS", "Research", "Science"],
    courses: ["B.Tech CS", "B.Tech ECE", "B.Tech Civil", "M.Tech", "PhD", "B.Sc Research"],
    desc: "IIT Delhi is one of India's premier engineering institutions, globally recognized for research, innovation, and producing world-class engineers and scientists.",
    established: "1961", students: "8,000+", ranking: "#1 Engineering",
    deadline: "March 31, 2026", scholarships: "Yes — Merit",
    requirements: ["A-Level or equivalent", "Mathematics & Physics", "IELTS 7.0+", "Passport", "SOP", "Recommendation Letters x2"],
    website: "https://home.iitd.ac.in",
    images: [
      "https://picsum.photos/seed/iitd1/800/400",
      "https://picsum.photos/seed/iitd2/800/400",
      "https://picsum.photos/seed/iitd3/800/400"
    ]
  },
  {
    id: 8, country: "india", countryName: "India", flag: "🇮🇳",
    name: "University of Mumbai",
    abbr: "MU", city: "Mumbai, Maharashtra",
    rating: "4.3", fees: "$1,800/yr",
    tags: ["Commerce", "Arts", "Science", "Law"],
    courses: ["B.Com", "B.Sc", "B.A", "LLB", "MBA", "B.Tech"],
    desc: "University of Mumbai is one of the oldest and largest universities in Asia, offering diverse programs across arts, commerce, science, and professional fields.",
    established: "1857", students: "700,000+", ranking: "Top 5 Mumbai",
    deadline: "July 31, 2026", scholarships: "Yes — Need Based",
    requirements: ["O-Level Certificate", "English Proficiency", "Passport Copy", "Transfer Certificate", "Application Form"],
    website: "https://mu.ac.in",
    images: [
      "https://picsum.photos/seed/mu1/800/400",
      "https://picsum.photos/seed/mu2/800/400",
      "https://picsum.photos/seed/mu3/800/400"
    ]
  },
  // ── SAUDI ARABIA ──
  {
    id: 9, country: "saudi", countryName: "Saudi Arabia", flag: "🇸🇦",
    name: "King Abdulaziz University",
    abbr: "KAU", city: "Jeddah",
    rating: "4.5", fees: "$2,200/yr",
    tags: ["Engineering", "Medicine", "Business", "Science"],
    courses: ["B.Sc Engineering", "MBBS", "BBA", "B.Sc CS", "B.Sc Nursing", "MBA"],
    desc: "King Abdulaziz University is one of the top ranked universities in the Arab world, renowned for research, modern facilities, and strong scholarship programs for international students.",
    established: "1967", students: "100,000+", ranking: "#1 Saudi Arabia",
    deadline: "May 15, 2026", scholarships: "Yes — Full Scholarship Available",
    requirements: ["High School Certificate", "IELTS 6.0+ or TOEFL 80+", "Passport", "Medical Certificate", "Good Conduct Certificate"],
    website: "https://www.kau.edu.sa",
    images: [
      "https://picsum.photos/seed/kau1/800/400",
      "https://picsum.photos/seed/kau2/800/400",
      "https://picsum.photos/seed/kau3/800/400"
    ]
  },
  {
    id: 10, country: "saudi", countryName: "Saudi Arabia", flag: "🇸🇦",
    name: "King Fahd University of Petroleum",
    abbr: "KFUPM", city: "Dhahran",
    rating: "4.7", fees: "Free (Scholarship)",
    tags: ["Engineering", "Science", "Petroleum", "CS"],
    courses: ["B.Sc Petroleum Eng", "B.Sc CS", "B.Sc Mechanical", "B.Sc Chemical", "B.Sc Math", "MBA"],
    desc: "KFUPM is a world-class technical university with a strong focus on engineering and petroleum sciences. Offers generous scholarships including free tuition, accommodation, and stipend.",
    established: "1963", students: "9,000+", ranking: "Top 200 World",
    deadline: "February 28, 2026", scholarships: "Yes — Full + Stipend",
    requirements: ["A-Level or equivalent", "Strong Maths & Science", "IELTS 6.5+", "Passport", "Medical", "Financial Proof"],
    website: "https://www.kfupm.edu.sa",
    images: [
      "https://picsum.photos/seed/kfupm1/800/400",
      "https://picsum.photos/seed/kfupm2/800/400",
      "https://picsum.photos/seed/kfupm3/800/400"
    ]
  },
  // ── UAE ──
  {
    id: 11, country: "uae", countryName: "UAE", flag: "🇦🇪",
    name: "University of Sharjah",
    abbr: "UOS", city: "Sharjah",
    rating: "4.4", fees: "$5,500/yr",
    tags: ["Engineering", "Business", "Medicine", "Arts"],
    courses: ["B.Eng", "MBBS", "BBA", "B.Arch", "B.Sc Nursing", "LLB"],
    desc: "University of Sharjah is one of the UAE's leading universities, offering internationally accredited programs with a diverse student body from over 100 countries.",
    established: "1997", students: "16,000+", ranking: "Top 5 UAE",
    deadline: "August 1, 2026", scholarships: "Yes — Merit Based",
    requirements: ["High School Certificate", "IELTS 6.0+", "Passport", "Medical Certificate", "Application Essay"],
    website: "https://www.sharjah.ac.ae",
    images: [
      "https://picsum.photos/seed/uos1/800/400",
      "https://picsum.photos/seed/uos2/800/400",
      "https://picsum.photos/seed/uos3/800/400"
    ]
  },
  {
    id: 12, country: "uae", countryName: "UAE", flag: "🇦🇪",
    name: "American University of Dubai",
    abbr: "AUD", city: "Dubai",
    rating: "4.5", fees: "$14,000/yr",
    tags: ["Business", "Engineering", "Arts", "Media"],
    courses: ["BBA", "B.Eng", "B.A Media", "B.Arch", "MBA", "B.Sc IT"],
    desc: "AUD is a prestigious American-style university in Dubai offering internationally recognized degrees in a modern campus environment with strong global career networks.",
    established: "1995", students: "4,000+", ranking: "Top 3 UAE",
    deadline: "July 30, 2026", scholarships: "Yes — Merit & Need",
    requirements: ["High School Certificate", "IELTS 6.5+", "SAT/ACT Scores", "Passport", "SOP", "Recommendation Letters"],
    website: "https://www.aud.edu",
    images: [
      "https://picsum.photos/seed/aud1/800/400",
      "https://picsum.photos/seed/aud2/800/400",
      "https://picsum.photos/seed/aud3/800/400"
    ]
  },
  // ── GERMANY ──
  {
    id: 13, country: "germany", countryName: "Germany", flag: "🇩🇪",
    name: "Technical University of Munich",
    abbr: "TUM", city: "Munich",
    rating: "4.8", fees: "€300/semester",
    tags: ["Engineering", "Science", "CS", "Research"],
    courses: ["B.Sc CS", "B.Eng Mechanical", "B.Sc Data Science", "B.Eng Electrical", "M.Sc", "PhD"],
    desc: "TUM is Germany's top technical university and one of Europe's elite institutions. Known for cutting-edge research, strong industry partnerships, and nearly free tuition.",
    established: "1868", students: "50,000+", ranking: "Top 50 World",
    deadline: "May 31, 2026", scholarships: "Yes — DAAD Available",
    requirements: ["A-Level / Abitur equivalent", "IELTS 6.5+ or German B2", "Passport", "Motivation Letter", "CV", "Transcripts"],
    website: "https://www.tum.de",
    images: [
      "https://picsum.photos/seed/tum1/800/400",
      "https://picsum.photos/seed/tum2/800/400",
      "https://picsum.photos/seed/tum3/800/400",
      "https://picsum.photos/seed/tum4/800/400"
    ]
  },
  {
    id: 14, country: "germany", countryName: "Germany", flag: "🇩🇪",
    name: "Heidelberg University",
    abbr: "HU", city: "Heidelberg",
    rating: "4.7", fees: "€300/semester",
    tags: ["Medicine", "Science", "Arts", "Law"],
    courses: ["MBBS", "B.Sc Biology", "B.A History", "LLM", "B.Sc Chemistry", "PhD Medicine"],
    desc: "Germany's oldest university with over 635 years of academic excellence. Renowned for medicine, natural sciences, and humanities. Beautiful historic campus.",
    established: "1386", students: "30,000+", ranking: "Top 75 World",
    deadline: "June 15, 2026", scholarships: "Yes — DAAD & Own",
    requirements: ["A-Level equivalent", "German B2 or IELTS 6.5", "Passport", "Motivation Letter", "Health Insurance"],
    website: "https://www.uni-heidelberg.de",
    images: [
      "https://picsum.photos/seed/hd1/800/400",
      "https://picsum.photos/seed/hd2/800/400",
      "https://picsum.photos/seed/hd3/800/400"
    ]
  },
  // ── ITALY ──
  {
    id: 15, country: "italy", countryName: "Italy", flag: "🇮🇹",
    name: "University of Bologna",
    abbr: "UNIBO", city: "Bologna",
    rating: "4.6", fees: "€1,500/yr",
    tags: ["Law", "Medicine", "Arts", "Engineering"],
    courses: ["LLB", "MBBS", "B.A Arts", "B.Eng", "MBA", "B.Sc Economics"],
    desc: "The oldest university in the world, founded in 1088. Offers world-class programs with rich academic tradition, vibrant student life, and affordable tuition fees.",
    established: "1088", students: "87,000+", ranking: "Top 200 World",
    deadline: "July 31, 2026", scholarships: "Yes — Regional & Merit",
    requirements: ["High School Certificate", "IELTS 6.0+ or Italian B2", "Passport", "Declaration of Value", "Health Insurance"],
    website: "https://www.unibo.it",
    images: [
      "https://picsum.photos/seed/unibo1/800/400",
      "https://picsum.photos/seed/unibo2/800/400",
      "https://picsum.photos/seed/unibo3/800/400"
    ]
  },
  {
    id: 16, country: "italy", countryName: "Italy", flag: "🇮🇹",
    name: "Politecnico di Milano",
    abbr: "POLIMI", city: "Milan",
    rating: "4.7", fees: "€2,500/yr",
    tags: ["Engineering", "Design", "Architecture", "CS"],
    courses: ["B.Eng Computer", "B.Arch", "B.Sc Design", "B.Eng Mechanical", "M.Eng", "M.Arch"],
    desc: "Italy's top technical university, globally recognized for engineering, architecture, and design. Located in Milan, Europe's fashion and design capital.",
    established: "1863", students: "44,000+", ranking: "Top 150 World",
    deadline: "April 30, 2026", scholarships: "Yes — Erasmus & Merit",
    requirements: ["A-Level equivalent", "IELTS 6.5+", "Passport", "Portfolio (Design programs)", "SOP", "Transcripts"],
    website: "https://www.polimi.it",
    images: [
      "https://picsum.photos/seed/polimi1/800/400",
      "https://picsum.photos/seed/polimi2/800/400",
      "https://picsum.photos/seed/polimi3/800/400",
      "https://picsum.photos/seed/polimi4/800/400"
    ]
  }
];
 
// Group by country
const countryOrder = [
  { key: "india",   label: "India",        flag: "🇮🇳" },
  { key: "saudi",   label: "Saudi Arabia", flag: "🇸🇦" },
  { key: "uae",     label: "UAE",          flag: "🇦🇪" },
  { key: "germany", label: "Germany",      flag: "🇩🇪" },
  { key: "italy",   label: "Italy",        flag: "🇮🇹" }
];
 
let currentGalleryIndex = 0;
let currentGalleryImages = [];
let currentWebsite = '';
 
function renderUniversities(filtered) {
  const container = document.getElementById('universitiesContainer');
  document.getElementById('resultCount').textContent = filtered.length;
 
  if (filtered.length === 0) {
    container.innerHTML = `<div class="no-results"><i class="bi bi-search"></i>No universities found. Try a different search.</div>`;
    return;
  }
 
  let html = '';
  countryOrder.forEach(c => {
    const group = filtered.filter(u => u.country === c.key);
    if (group.length === 0) return;
 
    html += `
      <div class="country-section">
        <div class="country-header">
          <span class="country-flag">${c.flag}</span>
          <span class="country-name">${c.label}</span>
          <span class="country-count">${group.length} universities</span>
        </div>
        <div class="uni-grid">
          ${group.map(u => `
            <div class="uni-card" onclick="openModal(${u.id})">
              <div class="uni-card-img-wrap">
                <img class="uni-card-img" src="${u.images[0]}" alt="${u.name}" loading="lazy">
                <span class="uni-country-badge">${u.flag} ${u.countryName}</span>
                <span class="uni-rating-badge">⭐ ${u.rating}</span>
              </div>
              <div class="uni-card-body">
                <div class="uni-card-name">${u.name}</div>
                <div class="uni-card-location"><i class="bi bi-geo-alt"></i>${u.city}</div>
                <div class="uni-tags">
                  ${u.tags.map(t => `<span class="uni-tag">${t}</span>`).join('')}
                </div>
                <div class="uni-card-footer">
                  <div class="uni-fees">Fees: <span>${u.fees}</span></div>
                  <button class="btn-view">View Details</button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  });
 
  container.innerHTML = html;
}
 
function openModal(id) {
  const u = universities.find(x => x.id === id);
  if (!u) return;
 
  currentWebsite = u.website;
  currentGalleryImages = u.images;
  currentGalleryIndex = 0;
 
  // Gallery
  document.getElementById('gallerySlides').innerHTML =
    u.images.map(img => `<img class="gallery-slide" src="${img}" alt="${u.name}">`).join('');
 
  document.getElementById('galleryDots').innerHTML =
    u.images.map((_, i) => `<div class="gallery-dot ${i===0?'active':''}" onclick="goToSlide(${i})"></div>`).join('');
 
  updateGallery();
 
  // Info
  document.getElementById('mName').textContent = u.name;
  document.getElementById('mLocation').textContent = `${u.city}, ${u.countryName} ${u.flag}`;
  document.getElementById('mDesc').textContent = u.desc;
 
  document.getElementById('mBadges').innerHTML = `
    <span class="m-badge mb-amber">⭐ ${u.rating}</span>
    <span class="m-badge mb-green">🎓 Scholarships: ${u.scholarships}</span>
  `;
 
  document.getElementById('mInfoGrid').innerHTML = `
    <div class="modal-info-item"><div class="modal-info-label">Established</div><div class="modal-info-value">${u.established}</div></div>
    <div class="modal-info-item"><div class="modal-info-label">Students</div><div class="modal-info-value">${u.students}</div></div>
    <div class="modal-info-item"><div class="modal-info-label">Annual Fees</div><div class="modal-info-value">${u.fees}</div></div>
    <div class="modal-info-item"><div class="modal-info-label">Ranking</div><div class="modal-info-value">${u.ranking}</div></div>
    <div class="modal-info-item"><div class="modal-info-label">Deadline</div><div class="modal-info-value">${u.deadline}</div></div>
    <div class="modal-info-item"><div class="modal-info-label">Country</div><div class="modal-info-value">${u.flag} ${u.countryName}</div></div>
  `;
 
  document.getElementById('mCourses').innerHTML =
    u.courses.map(c => `<span class="course-tag">${c}</span>`).join('');
 
  document.getElementById('mReqs').innerHTML =
    u.requirements.map(r => `<li><i class="bi bi-check-circle-fill"></i>${r}</li>`).join('');
 
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
 
function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
 
function closeModalOutside(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
}
 
function slideGallery(dir) {
  currentGalleryIndex = (currentGalleryIndex + dir + currentGalleryImages.length) % currentGalleryImages.length;
  updateGallery();
}
 
function goToSlide(i) {
  currentGalleryIndex = i;
  updateGallery();
}
 
function updateGallery() {
  document.getElementById('gallerySlides').style.transform = `translateX(-${currentGalleryIndex * 100}%)`;
  document.querySelectorAll('.gallery-dot').forEach((d, i) => {
    d.classList.toggle('active', i === currentGalleryIndex);
  });
}
 
function visitWebsite() {
  window.open(currentWebsite, '_blank');
}
 
function applyNow() {
  window.location.href = 'application.html';
}
 
function handleLogout() {
  if (confirm('Una uhakika unataka kutoka?')) window.location.href = 'login.html';
}
 
// Search & Filter
function filterUniversities() {
  const search  = document.getElementById('searchInput').value.toLowerCase();
  const country = document.getElementById('countryFilter').value;
  const course  = document.getElementById('courseFilter').value;
 
  const filtered = universities.filter(u => {
    const matchSearch  = !search || u.name.toLowerCase().includes(search) || u.city.toLowerCase().includes(search) || u.tags.some(t => t.toLowerCase().includes(search));
    const matchCountry = country === 'all' || u.country === country;
    const matchCourse  = course === 'all' || u.tags.some(t => t.toLowerCase().includes(course.toLowerCase())) || u.courses.some(c => c.toLowerCase().includes(course.toLowerCase()));
    return matchSearch && matchCountry && matchCourse;
  });
 
  renderUniversities(filtered);
}
 
document.getElementById('searchInput').addEventListener('input', filterUniversities);
document.getElementById('countryFilter').addEventListener('change', filterUniversities);
document.getElementById('courseFilter').addEventListener('change', filterUniversities);
 
// Keyboard close
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
 
// Initial render
renderUniversities(universities);