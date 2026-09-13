import './styles.css';

// SVG Icons
const icons = {
  github: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>',
  external: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>',
  search: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
  arrowRight: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>',
  code: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
  award: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>',
  mail: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',
  phone: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>',
  close: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
  copy: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>',
  star: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>',
  sync: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>'
};

// SVG Placeholder generator for projects
function generateBannerSvg(title, color1, color2) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="340" viewBox="0 0 600 340"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${color1}"/><stop offset="100%" stop-color="${color2}"/></linearGradient></defs><rect width="600" height="340" fill="url(#g)"/><circle cx="500" cy="50" r="140" fill="white" opacity="0.05"/><circle cx="80" cy="280" r="100" fill="white" opacity="0.06"/><rect x="40" y="40" width="520" height="260" rx="12" fill="none" stroke="white" stroke-opacity="0.15" stroke-dasharray="8 8"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-family="sans-serif" font-weight="700" font-size="22" opacity="0.9">${title}</text></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

// REAL GitHub Projects Dataset for Nguyễn Đức Chiến Công (@conghlovt)
const projectsData = [
  {
    id: 'do-an-phat-trien-ung-dung-da-nen-tang',
    title: 'Đồ Án Phát Triển Ứng Dụng Đa Nền Tảng (Mobile Cross-Platform)',
    category: 'mobile',
    type: 'Đồ Án Môn Học',
    year: '2026',
    role: 'Trưởng Nhóm & UI/UX Frontend Developer (Auth & Admin Dashboard)',
    short: 'Phát triển luồng giao diện xác thực người dùng (Đăng ký, Đăng nhập, Đăng xuất) và xây dựng Bảng điều khiển Quản trị viên (Admin Dashboard).',
    description: 'Đồ án môn học Phát triển ứng dụng đa nền tảng chính thức trên GitHub conghlovt. Đảm nhận vai trò Trưởng nhóm phát triển, chỉ đạo kế hoạch và trực tiếp thiết kế & lập trình toàn bộ luồng xác thực người dùng (Đăng ký, Đăng nhập, Đăng xuất), lưu trữ phiên làm việc an toàn và xây dựng Bảng điều khiển Quản trị viên (Admin Dashboard).',
    highlights: [
      'Trưởng nhóm phát triển đồ án (Quản lý tiến độ & kiến trúc dự án)',
      'Repository chính thức trên GitHub: github.com/conghlovt/Do_An_Phat_Trien_Ung_Dung_Da_Nen_Tang',
      'Thiết kế & hoàn thiện giao diện Đăng ký, Đăng nhập, Đăng xuất mượt mà',
      'Phát triển Bảng điều khiển Quản trị viên (Admin Dashboard) trực quan & tối ưu UI',
      'Tích hợp luồng xác thực token / session và phân quyền truy cập hệ thống'
    ],
    tags: ['TypeScript', 'Auth UI', 'Admin Dashboard', 'Mobile App', 'GitHub Repo'],
    github: 'https://github.com/conghlovt/Do_An_Phat_Trien_Ung_Dung_Da_Nen_Tang',
    demo: 'https://github.com/conghlovt/Do_An_Phat_Trien_Ung_Dung_Da_Nen_Tang',
    banner: generateBannerSvg('Đồ Án Đa Nền Tảng (TypeScript)', '#0f172a', '#38bdf8')
  },
  {
    id: 'do-an-thi-giac-may-tinh',
    title: 'Đồ Án Thị Giác Máy Tính & Xử Lý Ảnh (Computer Vision & AI)',
    category: 'ai',
    type: 'Đồ Án Chuyên Nành AI',
    year: '2026',
    role: 'Trưởng Nhóm & Computer Vision Engineer',
    short: 'Nghiên cứu và thực nghiệm các mô hình Thị Giác Máy Tính, phân tích ảnh số trên Jupyter Notebook & OpenCV Python.',
    description: 'Đồ án nghiên cứu chuyên sâu về Thị Giác Máy Tính chính thức trên GitHub conghlovt. Đảm nhận vai trò Trưởng nhóm định hướng mô hình, thực nghiệm xử lý ảnh số, trích xuất đặc trưng vùng quan tâm ROI, phân loại ảnh và nhận diện đối tượng bằng Python.',
    highlights: [
      'Trưởng nhóm nghiên cứu (Phân công nhiệm vụ & định hướng mô hình)',
      'Repository chính thức trên GitHub: github.com/conghlovt/Do_An_Thi_Giac_May_Tinh',
      'Thực nghiệm trực tiếp với Jupyter Notebook & OpenCV Python',
      'Khử nhiễu ảnh, trích xuất biên dạng contour và nhị phân hóa ảnh thích ứng',
      'Phân tích mô hình xử lý thị giác máy tính chuẩn xác'
    ],
    tags: ['Jupyter Notebook', 'Python', 'OpenCV', 'Computer Vision', 'Image Processing'],
    github: 'https://github.com/conghlovt/Do_An_Thi_Giac_May_Tinh',
    demo: 'https://github.com/conghlovt/Do_An_Thi_Giac_May_Tinh',
    banner: generateBannerSvg('Đồ Án Thị Giác Máy Tính', '#1e1b4b', '#a855f7')
  },
  {
    id: 'do-an-xu-ly-anh-xla',
    title: 'Đồ Án Xử Lý Ảnh (Digital Image Processing - XLA)',
    category: 'ai',
    type: 'Đồ Án Môn Học',
    year: '2025',
    role: 'Trưởng Nhóm & Image Processing Engineer',
    short: 'Nghiên cứu các thuật toán lọc ảnh, nâng cao chất lượng hình ảnh, biến đổi không gian màu, phát hiện biên cạnh và phân đoạn ảnh số.',
    description: 'Đồ án môn học Xử lý ảnh (Digital Image Processing - XLA). Đảm nhận vai trò Trưởng nhóm chỉ đạo thực nghiệm lập trình các thuật toán xử lý ảnh số: khử nhiễu, cân bằng biểu đồ xám Histogram Equalization, lọc không gian, dò biên cạnh (Sobel, Canny), chuyển đổi không gian màu và phân đoạn đối tượng trong ảnh.',
    highlights: [
      'Trưởng nhóm đồ án (Lập kế hoạch & kiểm soát chất lượng mã nguồn)',
      'Thực nghiệm các thuật toán xử lý ảnh số trên Python & OpenCV',
      'Khử nhiễu, tăng cường chất lượng ảnh & cân bằng biểu đồ xám Histogram',
      'Phát hiện biên cạnh & phân đoạn vùng đặc trưng hình ảnh',
      'Tối ưu hóa tốc độ xử lý các ma trận điểm ảnh (Pixel Matrix)'
    ],
    tags: ['Python', 'OpenCV', 'Xử Lý Ảnh', 'XLA', 'Digital Image Processing', 'NumPy'],
    github: 'https://github.com/conghlovt',
    demo: 'https://github.com/conghlovt',
    banner: generateBannerSvg('Đồ Án Xử Lý Ảnh (XLA)', '#042f2e', '#14b8a6')
  }
];

// REAL Profile Info for Nguyễn Đức Chiến Công (@conghlovt)
const profileInfo = {
  name: 'Nguyễn Đức Chiến Công',
  shortName: 'Chiến Công',
  role: 'Data & AI Engineer / Software Developer',
  university: 'Trường Đại Học Xây Dựng Hà Nội (HUCE)',
  faculty: 'Khoa Công Nghệ Thông Tin — Lớp 68CS1',
  gpa: 'Sinh Viên Ngành CNTT',
  status: 'Sẵn sàng ứng tuyển Thực Tập / Junior Data & AI / Developer',
  bio: 'Sinh viên Khoa CNTT - Trường Đại Học Xây Dựng Hà Nội (Lớp 68CS1). Đam mê làm việc với dữ liệu, Machine Learning, Computer Vision và phát triển ứng dụng Web/Mobile. Luôn cẩn thận, chú trọng độ chính xác dữ liệu và liên tục học hỏi công nghệ mới.',
  githubUser: 'conghlovt',
  githubUrl: 'https://github.com/conghlovt',
  avatarUrl: 'https://avatars.githubusercontent.com/u/180565649?v=4',
  email: 'conghlovt2k5@gmail.com',
  phone: '0378143932'
};

// Render Components
function renderHeader() {
  return `
    <header class="topbar" id="topbar">
      <div class="container topbar-inner">
        <a href="#home" class="brand">
          <img src="${profileInfo.avatarUrl}" alt="${profileInfo.name}" class="brand-avatar-mini" />
          <div class="brand-title">
            <span class="brand-name">${profileInfo.name}</span>
            <span class="brand-sub">HUCE • Khoa CNTT (68CS1)</span>
          </div>
        </a>
        <nav class="desktop-nav">
          <a href="#home" class="active">Trang Chủ</a>
          <a href="#projects">3 Đồ Án GitHub (${projectsData.length})</a>
          <a href="#github-sync">GitHub Live Sync</a>
          <a href="#skills">Kỹ Năng</a>
          <a href="#journey">Học Tập</a>
          <a href="#contact">Liên Hệ</a>
        </nav>
        <a href="${profileInfo.githubUrl}" target="_blank" rel="noreferrer" class="deploy-btn-nav">
          ${icons.github} <span>@conghlovt</span>
        </a>
        <button class="menu-toggle" id="menu-toggle-btn" aria-label="Toggle menu">☰</button>
      </div>
      <div class="mobile-nav" id="mobile-nav">
        <a href="#home">Trang Chủ</a>
        <a href="#projects">3 Đồ Án GitHub</a>
        <a href="#github-sync">GitHub Live Sync</a>
        <a href="#skills">Kỹ Năng Năng Lực</a>
        <a href="#journey">Học Tập HUCE</a>
        <a href="#contact">Liên Hệ</a>
      </div>
    </header>
    <aside class="side-rail">
      <a href="${profileInfo.githubUrl}" target="_blank" rel="noreferrer" title="GitHub Profile @conghlovt">${icons.github}</a>
      <a href="mailto:${profileInfo.email}" title="Gửi Email">${icons.mail}</a>
      <a href="tel:${profileInfo.phone}" title="Gọi Điện">${icons.phone}</a>
    </aside>`;
}

function renderHero() {
  return `
    <section class="hero" id="home">
      <div class="hero-copy">
        <div class="hero-status-pill">
          <span class="status-dot"></span> ${profileInfo.status}
        </div>
        <h1>Hồ Sơ Năng Lực <br/><span class="gradient-text">${profileInfo.name}</span></h1>
        <p class="hero-description">${profileInfo.bio}</p>
        <div class="hero-stats-row">
          <div class="stat-item">
            <strong>${projectsData.length}</strong>
            <span>Đồ Án GitHub Sync</span>
          </div>
          <div class="stat-item">
            <strong>HUCE</strong>
            <span>ĐH Xây Dựng Hà Nội</span>
          </div>
          <div class="stat-item">
            <strong>68CS1</strong>
            <span>Lớp Chuyên Ngành</span>
          </div>
        </div>
        <div class="action-row">
          <a href="#projects" class="btn btn-primary">Xem 3 Đồ Án GitHub ${icons.arrowRight}</a>
          <a href="${profileInfo.githubUrl}" target="_blank" rel="noreferrer" class="btn btn-accent">${icons.github} GitHub @conghlovt</a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="hero-card-frame">
          <div class="avatar-wrapper">
            <img src="${profileInfo.avatarUrl}" alt="${profileInfo.name}" class="avatar-img-main" />
            <div class="floating-badge badge-top-right">
              ${icons.code} Data & AI
            </div>
            <div class="floating-badge badge-bottom-left">
              ${icons.award} HUCE 68CS1
            </div>
          </div>
          <div class="hero-card-info">
            <div class="info-title">
              <h3>${profileInfo.name}</h3>
              <p>${profileInfo.university}</p>
            </div>
            <span class="verified-tag">✓ GitHub Verified</span>
          </div>
        </div>
      </div>
    </section>`;
}

function renderProjectsSection() {
  return `
    <section class="section" id="projects">
      <div class="section-header">
        <span class="section-tag">${icons.code} Real GitHub Portfolio</span>
        <h2 class="section-title">3 Đồ Án Thực Tế Trên GitHub</h2>
        <p class="section-desc">Danh sách 3 đồ án chuyên ngành về Phát triển ứng dụng đa nền tảng, Thị giác máy tính và Phân tích dữ liệu được kết nối trực tiếp với GitHub @conghlovt.</p>
      </div>

      <div class="filter-controls">
        <div class="filter-tabs">
          <button class="tab-btn active" data-filter="all">Tất Cả (3)</button>
          <button class="tab-btn" data-filter="mobile">Đa Nền Tảng</button>
          <button class="tab-btn" data-filter="ai">Thị Giác Máy Tính & AI</button>
        </div>
        <div class="search-box">
          <span class="search-icon">${icons.search}</span>
          <input type="text" id="project-search-input" placeholder="Tìm kiếm đồ án (TypeScript, OpenCV...)" />
        </div>
      </div>

      <div class="projects-grid" id="projects-grid">
        ${projectsData.map(renderProjectCard).join('')}
      </div>
    </section>`;
}

function renderProjectCard(p) {
  return `
    <article class="project-card" data-category="${p.category}" data-id="${p.id}">
      <div class="card-banner">
        <img class="card-banner-img" src="${p.banner}" alt="${p.title}" loading="lazy" />
        <span class="card-type-badge">${p.type}</span>
        <span class="card-year">${p.year}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${p.title}</h3>
        <p class="card-desc">${p.short}</p>
        <div class="card-tags">
          ${p.tags.map(t => `<span class="tag-badge">${t}</span>`).join('')}
        </div>
        <div class="card-footer">
          <span class="link-btn">Xem Chi Tiết Đồ Án ${icons.arrowRight}</span>
          <a href="${p.github}" target="_blank" rel="noreferrer" class="mono-text" style="color:var(--cyan); font-size:0.78rem; text-decoration:underline;">GitHub Repo ↗</a>
        </div>
      </div>
    </article>`;
}

// GitHub Live Sync Section Component
function renderGitHubSection() {
  return `
    <section class="section" id="github-sync">
      <div class="section-header">
        <span class="section-tag">${icons.github} Live GitHub API Integration</span>
        <h2 class="section-title">Tích Hợp Đồng Bộ Tự Động Với GitHub @conghlovt</h2>
        <p class="section-desc">Truy vấn trực tiếp dữ liệu từ GitHub API hiển thị các Repository công khai thực tế của bạn.</p>
      </div>

      <div class="github-sync-card">
        <div class="github-sync-top">
          <div class="github-user-badge">
            <img src="${profileInfo.avatarUrl}" alt="${profileInfo.name}" class="github-avatar-mini" />
            <div>
              <h3 id="gh-user-display">@${profileInfo.githubUser}</h3>
              <p>GitHub Repository Sync Engine</p>
            </div>
          </div>
          <div class="github-input-group">
            <input type="text" id="github-username-input" value="${profileInfo.githubUser}" placeholder="Nhập username GitHub..." />
            <button class="btn btn-primary" id="fetch-github-btn">${icons.sync} Đồng Bộ Live</button>
          </div>
        </div>

        <div id="github-repos-container" class="github-repos-grid">
          <div class="github-loading-state">
            <p>Đang kết nối API tải Repository từ GitHub @${profileInfo.githubUser}...</p>
          </div>
        </div>
      </div>
    </section>`;
}

function renderSkillsSection() {
  return `
    <section class="section" id="skills">
      <div class="section-header">
        <span class="section-tag">Skills & Technical Competencies</span>
        <h2 class="section-title">Bộ Kỹ Năng Chuyên Môn</h2>
        <p class="section-desc">Các kiến thức và công cụ phần mềm được rèn luyện thực tế qua các môn học tại Khoa CNTT.</p>
      </div>

      <div class="skills-grid">
        <div class="skill-card">
          <div class="skill-card-icon">📊</div>
          <h3>Xử Lý Dữ Liệu & Data Labeling</h3>
          <ul class="skill-list">
            <li class="skill-item">Phân loại & Kiểm tra chất lượng dữ liệu</li>
            <li class="skill-item">Image Classification & Object Labeling</li>
            <li class="skill-item">Phân loại dữ liệu văn bản (Text Annotation)</li>
            <li class="skill-item">Excel / Google Sheets nhãn & lọc</li>
            <li class="skill-item">Tuân thủ Guideline & Quy trình kiểm soát</li>
          </ul>
        </div>
        <div class="skill-card">
          <div class="skill-card-icon">🧠</div>
          <h3>AI, Machine Learning & Computer Vision</h3>
          <ul class="skill-list">
            <li class="skill-item">Lập trình Python & Jupyter Notebook</li>
            <li class="skill-item">Pandas / NumPy / Scikit-Learn</li>
            <li class="skill-item">OpenCV & Xử lý ảnh số</li>
            <li class="skill-item">Gom cụm KMeans / PCA giảm chiều</li>
            <li class="skill-item">Google Colab thực nghiệm mô hình</li>
          </ul>
        </div>
        <div class="skill-card">
          <div class="skill-card-icon">💻</div>
          <h3>Phát Triển App & Cơ Sở Dữ Liệu</h3>
          <ul class="skill-list">
            <li class="skill-item">TypeScript & Lập trình ứng dụng đa nền tảng</li>
            <li class="skill-item">React Native / Flutter Mobile UI</li>
            <li class="skill-item">Cơ sở dữ liệu MySQL / PostgreSQL</li>
            <li class="skill-item">Thiết kế CSDL chuẩn hóa 3NF</li>
            <li class="skill-item">Quản lý mã nguồn với Git / GitHub</li>
          </ul>
        </div>
      </div>
    </section>`;
}

function renderJourneySection() {
  return `
    <section class="section" id="journey">
      <div class="section-header">
        <span class="section-tag">Education & Background</span>
        <h2 class="section-title">Hành Trình Học Tập Tại HUCE</h2>
        <p class="section-desc">Quá trình đào tạo chính quy ngành Công Nghệ Thông Tin tại Trường Đại Học Xây Dựng Hà Nội.</p>
      </div>

      <div class="timeline-container">
        <div class="timeline-box">
          <h3>🎓 Đại Học Xây Dựng Hà Nội (HUCE)</h3>
          <div class="timeline-list">
            <div class="timeline-item">
              <div class="timeline-date">Khoa Công Nghệ Thông Tin</div>
              <h4>Sinh Viên Lớp 68CS1</h4>
              <p>Theo học chương trình đào tạo chính quy ngành Công nghệ thông tin. Tiếp cận các môn học chuyên sâu về Trí tuệ nhân tạo, Xử lý dữ liệu, Machine Learning và Cơ sở dữ liệu.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-date">Các Môn Học Đã Tiếp Cận</div>
              <h4>Kiến Thức Chuyên Nành Nền Tảng</h4>
              <p>Trí tuệ nhân tạo, Xử lý & Phân tích dữ liệu, Big Data, Cơ sở dữ liệu, Lập trình Python, Machine Learning cơ bản, Xử lý ảnh / Computer Vision, Phát triển ứng dụng đa nền tảng.</p>
            </div>
          </div>
        </div>

        <div class="timeline-box">
          <h3>🎯 Định Hướng & Điểm Mạnh</h3>
          <div class="timeline-list">
            <div class="timeline-item">
              <div class="timeline-date">Phẩm Chất Làm Việc</div>
              <h4>Cẩn Thận, Tỉ Mỉ & Tinh Thần Trách Nhiệm</h4>
              <p>Có tính kiên trì cao với các tác vụ dữ liệu lặp lại yêu cầu độ chính xác cao. Chủ động kiểm tra lại kết quả trước khi hoàn tất công việc.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-date">Mục Tiêu Phát Triển</div>
              <h4>Định Hướng Chuyên Môn Long-term</h4>
              <p>Phát triển kiến thức chuyên sâu trong lĩnh vực Data, Machine Learning & Artificial Intelligence, đóng góp xây dựng các bộ dữ liệu chất lượng cao phục vụ huấn luyện mô hình AI.</p>
            </div>
          </div>
        </div>
      </div>
    </section>`;
}

function renderContactAndDeploySection() {
  return `
    <section class="section" id="contact">
      <div class="section-header">
        <span class="section-tag">Get In Touch</span>
        <h2 class="section-title">Thông Tin Liên Hệ</h2>
        <p class="section-desc">Liên hệ trực tiếp với Nguyễn Đức Chiến Công cho các cơ hội công việc, thực tập hoặc trao đổi về dự án.</p>
      </div>

      <div class="contact-grid">
        <div class="contact-card">
          <h3>Thông Tin Liên Hệ Trực Tiếp</h3>
          <div class="contact-item">
            <div class="contact-icon">${icons.mail}</div>
            <div class="contact-text">
              <label>EMAIL CHÍNH THỨC</label>
              <span>${profileInfo.email}</span>
            </div>
            <button class="copy-btn" data-copy="${profileInfo.email}">${icons.copy} Copy</button>
          </div>
          <div class="contact-item">
            <div class="contact-icon">${icons.phone}</div>
            <div class="contact-text">
              <label>SỐ ĐIỆN THOẠI / ZALO</label>
              <span>${profileInfo.phone}</span>
            </div>
            <button class="copy-btn" data-copy="${profileInfo.phone}">${icons.copy} Copy</button>
          </div>
          <div class="contact-item">
            <div class="contact-icon">${icons.github}</div>
            <div class="contact-text">
              <label>GITHUB PROFILE</label>
              <a href="${profileInfo.githubUrl}" target="_blank" rel="noreferrer">github.com/${profileInfo.githubUser}</a>
            </div>
          </div>
        </div>

        <div class="deploy-banner-card">
          <div>
            <h3>📄 Hồ Sơ Năng Lực & Mã Nguồn GitHub</h3>
            <p>Trang Profile cá nhân của <strong>Nguyễn Đức Chiến Công</strong> được xây dựng hoàn chỉnh kết nối trực tiếp với tài khoản GitHub <strong>@${profileInfo.githubUser}</strong>.</p>
            <div class="deploy-options-list">
              <span class="deploy-chip">📍 HUCE Lớp 68CS1</span>
              <span class="deploy-chip">🐙 GitHub @conghlovt</span>
            </div>
          </div>
          <a href="${profileInfo.githubUrl}" target="_blank" rel="noreferrer" class="btn btn-primary">
            ${icons.github} Truy Cập GitHub Profile @conghlovt
          </a>
        </div>
      </div>
    </section>`;
}

function renderFooter() {
  return `
    <footer class="footer">
      <div class="container">
        <p><strong>${profileInfo.name}</strong> — ${profileInfo.university} (${profileInfo.faculty})</p>
        <p>© ${new Date().getFullYear()} Profile Cá Nhân & Đồng Bộ GitHub @conghlovt.</p>
      </div>
    </footer>`;
}

function renderModals() {
  return `
    <!-- Project Detail Modal -->
    <div class="modal-overlay" id="project-modal">
      <div class="modal-content">
        <button class="modal-close" id="close-project-modal">${icons.close}</button>
        <div id="modal-project-body"></div>
      </div>
    </div>`;
}

// Fetch GitHub Repos via GitHub Public API
async function fetchGitHubRepos(username) {
  const container = document.getElementById('github-repos-container');
  if (!container) return;

  container.innerHTML = `
    <div class="github-loading-state">
      <p>⏳ Đang kết nối tới GitHub API cho user <strong>@${username}</strong>...</p>
    </div>`;

  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
    if (!response.ok) {
      throw new Error(`Không tìm thấy user GitHub @${username} (Mã lỗi ${response.status})`);
    }
    const repos = await response.json();

    if (!repos || repos.length === 0) {
      container.innerHTML = `<div class="github-empty-state"><p>Không tìm thấy Repository công khai nào cho @${username}</p></div>`;
      return;
    }

    container.innerHTML = repos.map(repo => `
      <div class="github-repo-card">
        <div class="repo-card-top">
          <a href="${repo.html_url}" target="_blank" rel="noreferrer" class="repo-name">
            ${icons.github} <span>${repo.name}</span>
          </a>
          <span class="repo-visibility">${repo.private ? 'Private' : 'Public'}</span>
        </div>
        <p class="repo-desc">${repo.description || 'Repository đồ án chuyên ngành trên GitHub.'}</p>
        <div class="repo-meta">
          ${repo.language ? `<span class="repo-lang"><span class="lang-dot"></span>${repo.language}</span>` : ''}
          <span class="repo-stars">${icons.star} ${repo.stargazers_count}</span>
          <span class="repo-updated">Cập nhật: ${new Date(repo.updated_at).toLocaleDateString('vi-VN')}</span>
        </div>
      </div>
    `).join('');

    const userDisplay = document.getElementById('gh-user-display');
    if (userDisplay) userDisplay.textContent = `@${username}`;

  } catch (err) {
    container.innerHTML = `
      <div class="github-error-state">
        <p style="color:#ef4444;">⚠️ ${err.message}</p>
        <p style="font-size:0.85rem; color:var(--text-muted); margin-top:6px;">Vui lòng kiểm tra lại Username GitHub chính xác của bạn.</p>
      </div>`;
  }
}

// Background Particle Canvas
function initParticleCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(Math.floor(window.innerWidth / 22), 60);
  const mouse = { x: null, y: null, radius: 140 };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.radius = Math.random() * 1.8 + 1;
      this.color = Math.random() > 0.5 ? 'rgba(0, 242, 254, ' : 'rgba(168, 85, 247, ';
      this.alpha = Math.random() * 0.4 + 0.2;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const angle = Math.atan2(dy, dx);
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= Math.cos(angle) * force * 2;
          this.y -= Math.sin(angle) * force * 2;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color + this.alpha + ')';
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 242, 254, ${0.12 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

// 3D Card Tilt Effect
function bind3DTilt() {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
}

// Initialize App
function initApp() {
  const appContainer = document.getElementById('app');
  appContainer.innerHTML = `
    <div class="site-wrapper">
      ${renderHeader()}
      <main class="container">
        ${renderHero()}
        ${renderProjectsSection()}
        ${renderGitHubSection()}
        ${renderSkillsSection()}
        ${renderJourneySection()}
        ${renderContactAndDeploySection()}
      </main>
      ${renderFooter()}
      ${renderModals()}
    </div>`;

  initParticleCanvas();
  bind3DTilt();

  // Fetch initial GitHub repos directly from @conghlovt
  fetchGitHubRepos(profileInfo.githubUser);

  // GitHub Sync Button Event
  const fetchGhBtn = document.getElementById('fetch-github-btn');
  const ghInput = document.getElementById('github-username-input');

  fetchGhBtn?.addEventListener('click', () => {
    const username = ghInput?.value.trim();
    if (username) {
      fetchGitHubRepos(username);
    }
  });

  // Topbar Scroll
  const topbar = document.getElementById('topbar');
  window.addEventListener('scroll', () => {
    topbar?.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });

  // Mobile Nav
  const menuBtn = document.getElementById('menu-toggle-btn');
  const mobileNav = document.getElementById('mobile-nav');
  menuBtn?.addEventListener('click', () => {
    mobileNav?.classList.toggle('open');
  });
  mobileNav?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileNav.classList.remove('open'));
  });

  // Filter Tabs
  const filterBtns = document.querySelectorAll('.tab-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      projectCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Search Input
  const searchInput = document.getElementById('project-search-input');
  searchInput?.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    projectCards.forEach(card => {
      const text = card.textContent?.toLowerCase() || '';
      if (!query || text.includes(query)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });

  // Project Detail Modal
  const projectModal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-project-body');
  const closeProjectModalBtn = document.getElementById('close-project-modal');

  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const projectId = card.dataset.id;
      const project = projectsData.find(p => p.id === projectId);
      if (project && modalBody && projectModal) {
        modalBody.innerHTML = `
          <div class="modal-header">
            <span class="card-type-badge">${project.type} • ${project.year}</span>
            <h3 class="modal-title" style="margin-top:12px;">${project.title}</h3>
            <p class="modal-subtitle"><strong>Vai Trò:</strong> ${project.role}</p>
          </div>
          <div class="modal-body">
            <div class="modal-section">
              <h4>Mục Tiêu & Mô Tả Chi Tiết</h4>
              <p>${project.description}</p>
            </div>

            <div class="modal-section">
              <h4>Các Điểm Nổi Bật Kỹ Thuật</h4>
              <ul>
                ${project.highlights.map(h => `<li>${h}</li>`).join('')}
              </ul>
            </div>

            <div class="modal-section">
              <h4>Công Nghệ Sử Dụng</h4>
              <div class="card-tags">
                ${project.tags.map(t => `<span class="tag-badge">${t}</span>`).join('')}
              </div>
            </div>

            <div class="action-row" style="margin-top:20px;">
              <a href="${project.github}" target="_blank" rel="noreferrer" class="btn btn-secondary">
                ${icons.github} Xem Repository Trên GitHub @conghlovt
              </a>
            </div>
          </div>`;
        projectModal.classList.add('active');
      }
    });
  });

  closeProjectModalBtn?.addEventListener('click', () => {
    projectModal?.classList.remove('active');
  });

  projectModal?.addEventListener('click', (e) => {
    if (e.target === projectModal) projectModal.classList.remove('active');
  });

  // Copy Buttons
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const textToCopy = btn.dataset.copy;
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy);
        const originalText = btn.innerHTML;
        btn.innerHTML = '✓ Đã Copy!';
        btn.style.background = 'var(--emerald)';
        btn.style.color = '#000';
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.style.background = '';
          btn.style.color = '';
        }, 2000);
      }
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
