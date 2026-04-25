// Main Application Logic
document.addEventListener('DOMContentLoaded', () => {
  // Initialize State
  window.State.init();

  const headerEl = document.getElementById('header');
  const contentEl = document.getElementById('content');
  let isMobileMenuOpen = false;

  function renderHeader() {
    const user = window.State.user;
    const t = (key) => window.State.t(key);
    const hash = window.location.hash || '#login';
    const isAuth = !!user;

    const navLinks = [
      { id: 'home', label: t('nav_home') },
      { id: 'directory', label: t('nav_directory') },
      { id: 'departments', label: t('nav_departments') },
      { id: 'campus-map', label: t('nav_campus_map') },
      { id: 'events', label: t('nav_events') },
      { id: 'lost-and-found', label: t('nav_lost_found') }
    ];

    const desktopNavLinks = navLinks.map(link => `
      <a href="#${link.id}" class="nav-link relative font-dm-sans text-[14px] transition-colors ${hash === '#' + link.id ? 'active text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}">
        ${link.label}
      </a>
    `).join('');

    const mobileNavLinks = navLinks.map(link => `
      <a href="#${link.id}" class="mobile-stagger mobile-nav-link block font-dm-sans text-[24px] py-4 border-b border-[var(--border)] transition-colors ${hash === '#' + link.id ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}">
        ${link.label}
      </a>
    `).join('');

    headerEl.innerHTML = `
      <nav class="fixed top-0 left-0 w-full h-[64px] bg-[rgba(8,8,8,0.85)] backdrop-blur-[16px] border-b border-[var(--border)] z-50 transition-all duration-300">
        <div class="mx-auto w-full max-w-[1280px] h-full px-6 lg:px-8 flex items-center justify-between">
          
          <!-- Logo -->
          <a href="#home" class="flex items-center gap-3">
            <div class="flex h-[28px] w-[28px] items-center justify-center rounded-full border-[1.5px] border-[var(--accent)]">
              <div class="h-[6px] w-[6px] rounded-full bg-[var(--accent)]"></div>
            </div>
            <span class="font-syne font-semibold text-[16px] text-[var(--text-primary)]">VVCE Connect</span>
          </a>

          <!-- Desktop Navigation -->
          <div class="hidden lg:flex items-center gap-[32px]">
            ${desktopNavLinks}
          </div>
          
          <!-- Desktop Right -->
          <div class="hidden lg:flex items-center gap-4">
            <div class="relative group flex items-center btn-icon cursor-pointer">
              <i data-lucide="globe" class="w-[18px] h-[18px]"></i>
              <select id="lang-select" class="appearance-none bg-transparent text-[var(--text-secondary)] font-dm-sans text-[14px] font-medium border-0 focus:ring-0 cursor-pointer pl-2 outline-none group-hover:text-[var(--text-primary)] transition-colors">
                <option value="en" class="bg-[var(--surface)] text-[var(--text-primary)]" ${window.State.language === 'en' ? 'selected' : ''}>EN</option>
                <option value="hi" class="bg-[var(--surface)] text-[var(--text-primary)]" ${window.State.language === 'hi' ? 'selected' : ''}>HI</option>
                <option value="kn" class="bg-[var(--surface)] text-[var(--text-primary)]" ${window.State.language === 'kn' ? 'selected' : ''}>KN</option>
              </select>
            </div>

            <div class="h-[16px] w-[1px] bg-[var(--border)] mx-2"></div>

            ${user ? `
              <div class="flex items-center gap-2">
                <button class="btn-icon relative">
                  <i data-lucide="bell" class="w-[18px] h-[18px]"></i>
                  ${user.role === 'STUDENT' ? '<span class="absolute top-[6px] right-[6px] w-2 h-2 bg-[var(--danger)] rounded-full animate-pulse border border-[var(--bg)]"></span>' : ''}
                </button>
                
                <div class="flex items-center gap-2 mx-1">
                  <span class="font-ibm-mono text-[12px] text-[var(--accent)] uppercase px-2 py-1 bg-[var(--accent-dim)] rounded-md border border-[var(--accent-glow)]">
                    ${user.role}
                  </span>
                </div>
                
                <button id="logout-btn" class="btn-icon" title="Logout">
                  <i data-lucide="log-out" class="w-[18px] h-[18px] hover:text-[var(--danger)] transition-colors"></i>
                </button>
              </div>
            ` : `
              <a href="#login" class="font-dm-sans text-[14px] text-[var(--text-primary)] font-medium hover:text-[var(--accent)] transition-colors">
                Login
              </a>
            `}
          </div>

          <!-- Mobile Hamburger -->
          <div id="mobile-menu-btn" class="lg:hidden text-[var(--text-primary)] cursor-pointer z-[60]">
            <i data-lucide="${isMobileMenuOpen ? 'x' : 'menu'}" class="h-6 w-6"></i>
          </div>
        </div>
      </nav>

      <!-- Spacer for fixed nav -->
      <div class="h-[64px] w-full"></div>

      <!-- Mobile Menu -->
      ${isMobileMenuOpen ? `
        <div class="mobile-menu lg:hidden fixed inset-0 z-50 bg-[var(--bg)] pt-[100px] px-6 flex flex-col overflow-y-auto">
          <div class="flex flex-col">
            ${mobileNavLinks}
          </div>
          
          <div class="mt-8 flex flex-col gap-6 pb-12">
            <div class="mobile-stagger flex items-center gap-3 py-4 border-b border-[var(--border)]">
              <i data-lucide="globe" class="w-5 h-5 text-[var(--text-secondary)]"></i>
              <select id="mobile-lang-select" class="appearance-none bg-transparent text-[var(--text-primary)] font-dm-sans text-lg border-0 focus:ring-0 cursor-pointer outline-none flex-1">
                <option value="en" class="bg-[var(--surface)] text-[var(--text-primary)]" ${window.State.language === 'en' ? 'selected' : ''}>English (EN)</option>
                <option value="hi" class="bg-[var(--surface)] text-[var(--text-primary)]" ${window.State.language === 'hi' ? 'selected' : ''}>हिंदी (HI)</option>
                <option value="kn" class="bg-[var(--surface)] text-[var(--text-primary)]" ${window.State.language === 'kn' ? 'selected' : ''}>ಕನ್ನಡ (KN)</option>
              </select>
            </div>

            ${user ? `
              <div class="mobile-stagger flex flex-col gap-4">
                <div class="flex items-center justify-between py-2">
                  <div class="flex flex-col">
                    <span class="font-dm-sans text-[16px] text-[var(--text-primary)]">${user.id}</span>
                    <span class="font-ibm-mono text-[12px] text-[var(--accent)] mt-1">${user.role}</span>
                  </div>
                  <button id="mobile-logout-btn" class="flex items-center justify-center p-3 rounded-xl border border-[var(--danger)] text-[var(--danger)] hover:bg-[rgba(240,82,82,0.1)] transition-colors">
                    <i data-lucide="log-out" class="w-5 h-5"></i>
                  </button>
                </div>
              </div>
            ` : `
              <a href="#login" class="mobile-stagger mobile-nav-link flex items-center justify-center w-full py-4 bg-[var(--accent)] text-[#000] font-dm-sans font-semibold text-[16px] rounded-[10px] transition-transform active:scale-95 mt-4">
                Login to Campus
              </a>
            `}
          </div>
        </div>
      ` : ''}
    `;

    // Re-render Lucide icons
    if (window.lucide) window.lucide.createIcons();
    attachHeaderEvents();
  }

  function attachHeaderEvents() {
    const langSelect = document.getElementById('lang-select');
    const mobileLangSelect = document.getElementById('mobile-lang-select');
    const logoutBtn = document.getElementById('logout-btn');
    const mobileLogoutBtn = document.getElementById('mobile-logout-btn');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    
    const handleLangChange = (e) => {
      window.State.setLanguage(e.target.value);
    };

    if (langSelect) langSelect.addEventListener('change', handleLangChange);
    if (mobileLangSelect) mobileLangSelect.addEventListener('change', handleLangChange);
    
    const handleLogout = () => {
      window.State.logout();
      window.location.hash = '#login';
    };

    if (logoutBtn) logoutBtn.addEventListener('click', handleLogout);
    if (mobileLogoutBtn) mobileLogoutBtn.addEventListener('click', handleLogout);

    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', () => {
        isMobileMenuOpen = !isMobileMenuOpen;
        renderHeader();
      });
    }

    // Close mobile menu on link click
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        isMobileMenuOpen = false;
        renderHeader();
      });
    });
  }

  // Router
  function handleRoute() {
    let fullHash = window.location.hash.substring(1) || 'login';
    let [pathString, queryString] = fullHash.split('?');
    
    // Redirect unauthenticated users
    if (!window.State.user && pathString !== 'login') {
      window.location.hash = '#login';
      return;
    }
    
    // Redirect authenticated users away from login
    if (window.State.user && pathString === 'login') {
      window.location.hash = '#home';
      return;
    }

    // Parse Dynamic Routes
    let page = pathString;
    let params = null;
    if (pathString.startsWith('faculty/')) {
      page = 'facultyProfile';
      params = pathString.split('/')[1];
    } else if (pathString.startsWith('clubs/')) {
      page = 'clubProfile';
      params = pathString.split('/')[1];
    }

    // Render header (to update active link state)
    renderHeader();

    // Render page function
    const renderPageContent = () => {
      if (window.Pages[page]) {
        contentEl.innerHTML = window.Pages[page](params);
      } else {
        contentEl.innerHTML = `
          <div class="flex-1 flex items-center justify-center">
            <div class="text-center">
              <h1 class="font-syne text-[40px] font-bold text-[var(--text-primary)] mb-4">404</h1>
              <p class="font-dm-sans text-[var(--text-secondary)] mb-8">Page not found or not yet implemented.</p>
              <a href="#home" class="text-[var(--accent)] hover:underline">Go Home</a>
            </div>
          </div>
        `;
      }
  
      contentEl.style.opacity = '';
      
      // Add page transition class
      contentEl.classList.remove('page-enter');
      void contentEl.offsetWidth; // Trigger reflow
      contentEl.classList.add('page-enter');
  
      if (window.lucide) window.lucide.createIcons();
      attachPageEvents(page, params, queryString);
    };

    if (contentEl.innerHTML.trim() !== '') {
      contentEl.style.transition = 'opacity 80ms ease';
      contentEl.style.opacity = '0';
      setTimeout(renderPageContent, 80);
    } else {
      renderPageContent();
    }
  }

  function attachPageEvents(page, params, queryString) {
    if (page === 'home') {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });
      document.querySelectorAll('.reveal-card').forEach(card => observer.observe(card));
    } else if (page === 'login') {
      const loginForm = document.getElementById('loginForm');
      if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const idInput = document.getElementById('id-input').value.trim();
          const errorEl = document.getElementById('loginError');
          const submitBtn = loginForm.querySelector('button[type="submit"]');
          
          const originalBtnContent = submitBtn.innerHTML;
          submitBtn.disabled = true;
          submitBtn.innerHTML = `<span>Verifying Location...</span> <i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i>`;
          if (window.lucide) window.lucide.createIcons();

          const showError = (msg) => {
            errorEl.querySelector('p').textContent = msg;
            errorEl.classList.remove('hidden');
            errorEl.classList.add('flex');
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnContent;
          };

          if (!navigator.geolocation) {
            return showError("Geolocation is not supported by your browser.");
          }

          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              const CAMPUS_LAT = 12.336020874953986;
              const CAMPUS_LNG = 76.61954671307276;
              const MAX_RADIUS_KM = 1.0;

              const distance = window.State.calculateDistance(latitude, longitude, CAMPUS_LAT, CAMPUS_LNG);
              
              if (distance <= MAX_RADIUS_KM) {
                const success = window.State.login(idInput);
                if (success) {
                  errorEl.classList.add('hidden');
                  errorEl.classList.remove('flex');
                  window.location.hash = '#home';
                } else {
                  showError("Invalid ID format or credentials.");
                }
              } else {
                showError("Access Denied: You are not within the 1km campus radius.");
              }
            },
            (error) => {
              showError("Location access is required to login.");
            },
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
          );
        });
      }
    } else if (page === 'directory') {
      const searchInput = document.getElementById('faculty-search');
      const grid = document.getElementById('faculty-grid');
      
      const getStatusBadge = (status) => {
        let colorClass = '';
        let dotClass = '';
        switch(status) {
          case 'Available': 
            colorClass = 'bg-[rgba(62,207,142,0.1)] text-[var(--success)]';
            dotClass = 'bg-[var(--success)] animate-pulse-success';
            break;
          case 'In Class': 
            colorClass = 'bg-[var(--accent-dim)] text-[var(--accent)]';
            dotClass = 'bg-[var(--accent)]';
            break;
          case 'On Leave': 
            colorClass = 'bg-[rgba(240,82,82,0.1)] text-[var(--danger)]';
            dotClass = 'bg-[var(--danger)]';
            break;
          case 'Meeting': 
            colorClass = 'bg-[rgba(240,162,42,0.1)] text-[var(--warning)]';
            dotClass = 'bg-[var(--warning)]';
            break;
          default: 
            colorClass = 'bg-[rgba(136,136,136,0.1)] text-[var(--text-secondary)]';
            dotClass = 'bg-[var(--text-secondary)]';
        }
        return `<span class="inline-flex items-center gap-[6px] rounded-full px-[10px] py-[4px] text-[12px] font-dm-sans ${colorClass}"><span class="w-[6px] h-[6px] rounded-full ${dotClass}"></span><span class="font-ibm-mono">${status}</span></span>`;
      };

      const renderFaculty = (query) => {
        const lowerQ = query.toLowerCase();
        const filtered = window.facultyData.filter(f => 
          f.name.toLowerCase().includes(lowerQ) || 
          f.department.toLowerCase().includes(lowerQ)
        );
        
        if (filtered.length === 0) {
          grid.innerHTML = '<div class="col-span-full text-center py-20 text-white/50">No faculty members found matching your search.</div>';
        } else {
          grid.innerHTML = filtered.map(f => `
            <a href="#faculty/${f.id}" class="card-global block relative group p-6 cursor-pointer">
              <div class="flex justify-between items-start mb-2">
                <h3 class="font-syne font-semibold text-[18px] text-[var(--text-primary)]">${f.name}</h3>
                ${getStatusBadge(f.status)}
              </div>
              
              ${f.role ? `<p class="font-dm-sans text-[13px] text-[var(--accent)] mb-1">${f.role}</p>` : ''}
              <p class="font-dm-sans text-[12px] text-[var(--text-muted)]">${f.department}</p>
              
              <div class="h-[1px] w-full bg-[var(--border)] my-[14px]"></div>
              
              <div class="space-y-2">
                <div class="flex items-center text-[13px] text-[var(--text-secondary)] font-dm-sans">
                  <i data-lucide="map-pin" class="h-[14px] w-[14px] mr-2 text-[var(--text-muted)]"></i>
                  ${f.cabin}
                </div>
                <div class="flex items-center text-[13px] text-[var(--text-secondary)] font-dm-sans">
                  <i data-lucide="mail" class="h-[14px] w-[14px] mr-2 text-[var(--text-muted)]"></i>
                  ${f.email}
                </div>
              </div>

              <div class="mt-4">
                <span class="card-link block text-[13px] text-[var(--accent)] font-medium font-dm-sans">
                  View profile &rarr;
                </span>
              </div>
            </a>
          `).join('');
          if (window.lucide) window.lucide.createIcons();
        }
      };
      
      let initialQuery = '';
      if (queryString) {
         const urlParams = new URLSearchParams('?' + queryString);
         initialQuery = urlParams.get('q') || '';
         if (searchInput) searchInput.value = initialQuery;
      }
      renderFaculty(initialQuery);
      if (searchInput) {
        searchInput.addEventListener('input', (e) => renderFaculty(e.target.value));
      }
    } else if (page === 'departments') {
      const grid = document.getElementById('departments-grid');
      const banner = document.getElementById('departments-clubs-banner');
      
      const deptAbbr = {
        'Computer Science': 'CSE',
        'Information Science': 'ISE',
        'Electronics & Communication Engineering': 'ECE',
        'Mechanical': 'ME',
        'Civil Engineering': 'CV',
        'Electrical & Elecs': 'EEE'
      };
      const deptColors = {
        'Computer Science': 'text-[#64CEFB] bg-[#64CEFB]/10',
        'Information Science': 'text-[#8B6CF7] bg-[#8B6CF7]/10',
        'Electronics & Communication Engineering': 'text-[#F0A22A] bg-[#F0A22A]/10',
        'Mechanical': 'text-[#F05252] bg-[#F05252]/10',
        'Civil Engineering': 'text-[#3ECF8E] bg-[#3ECF8E]/10',
        'Electrical & Elecs': 'text-[#FF66CC] bg-[#FF66CC]/10'
      };

      if (grid && window.departmentsData) {
        grid.innerHTML = window.departmentsData.map(dept => {
          const abbr = deptAbbr[dept] || dept.substring(0,3).toUpperCase();
          const colorClass = deptColors[dept] || 'text-[var(--text-primary)] bg-[var(--surface-2)]';
          const facultyCount = (window.facultyData || []).filter(f => f.department === dept).length;
          
          return `
            <a href="#directory?q=${encodeURIComponent(dept)}" class="card-global flex flex-col p-6 rounded-[20px] cursor-pointer">
              <div class="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${colorClass}">
                <span class="font-syne font-bold text-xl">${abbr}</span>
              </div>
              
              <h3 class="font-syne font-bold text-[20px] text-[var(--text-primary)] mb-2">${dept}</h3>
              
              <div class="flex items-center gap-2 mb-8">
                <i data-lucide="users" class="w-4 h-4 text-[var(--text-muted)]"></i>
                <span class="font-dm-sans text-[14px] text-[var(--text-muted)]">${facultyCount > 0 ? facultyCount : '0'} Faculty Members</span>
              </div>
              
              <div class="mt-auto">
                <span class="card-link block text-[13px] text-[var(--accent)] font-medium font-dm-sans">
                  View Directory &rarr;
                </span>
              </div>
            </a>
          `;
        }).join('');
      }
      
      if (banner) {
        banner.innerHTML = `
          <a href="#clubs" class="card-global relative overflow-hidden flex flex-col md:flex-row items-center justify-between p-8 rounded-[24px] cursor-pointer border border-[var(--purple)]/30 hover:border-[var(--purple)]">
            <div class="absolute inset-0 bg-gradient-to-r from-[rgba(139,108,247,0.05)] to-transparent pointer-events-none"></div>
            <div class="relative z-10 text-center md:text-left mb-6 md:mb-0">
              <h3 class="font-syne font-bold text-[24px] text-white mb-2">Student Clubs & Chapters</h3>
              <p class="font-dm-sans text-[15px] text-[var(--text-secondary)]">Discover technical, cultural, and sports clubs on campus.</p>
            </div>
            <div class="relative z-10">
              <span class="btn-primary !bg-[var(--purple)] hover:!bg-[#9d83f9] text-white font-bold py-3 px-6 rounded-xl transition-colors inline-flex items-center gap-2">
                Explore Clubs <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </span>
            </div>
          </a>
        `;
      }
      if (window.lucide) window.lucide.createIcons();
    } else if (page === 'events') {
      const titleEl = document.getElementById('events-title');
      if (titleEl) {
        titleEl.textContent = window.State.t('nav_events');
      }

      const container = document.getElementById('events-req-btn-container');
      if (container) {
        const renderDefaultBtn = () => {
          container.innerHTML = `
            <button id="show-req-btn" class="btn-primary !px-8 !py-3">
              <span>${window.State.user?.role === 'STUDENT' ? 'Request Attendance & Register' : 'Register Now'}</span>
            </button>
          `;
          document.getElementById('show-req-btn').addEventListener('click', renderForm);
        };

        const renderForm = () => {
          container.innerHTML = `
            <div class="mt-8 border-t border-white/10 pt-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h4 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <i data-lucide="file-check" class="w-5 h-5 text-[#64CEFB]"></i>
                Attendance Authorization
              </h4>
              <div class="space-y-4" id="req-form-content">
                <p class="text-sm text-white/70">
                  As a student, you must request permission from your assigned faculty and upload any required pre-hackathon certificates (e.g. valid ID, consent form).
                </p>
                
                <div class="flex flex-col sm:flex-row gap-4">
                  <label class="flex-1 border-2 border-dashed border-[#64CEFB]/30 bg-[#64CEFB]/5 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:border-[#64CEFB]/50 hover:bg-[#64CEFB]/10 transition-colors cursor-pointer relative">
                    <input type="file" class="hidden" accept=".pdf,.jpg,.jpeg,.png" id="cert-upload" />
                    <i data-lucide="file-check" class="h-6 w-6 text-[#64CEFB]/50 mb-2"></i>
                    <span class="text-xs font-medium text-[#64CEFB]" id="cert-upload-label">
                      Click to Upload Certificate
                    </span>
                    <span class="text-[10px] text-white/30 mt-1" id="cert-upload-hint">PDF or JPG up to 5MB</span>
                  </label>
                  
                  <select class="flex-1 bg-[#121212] border border-white/10 rounded-xl text-white text-sm px-4 py-3 outline-none focus:border-[#64CEFB]">
                    <option>Select Faculty to Request...</option>
                    <option>Dr. Pooja M R (HOD)</option>
                    <option>Dr. Ravi Kumar (Dean)</option>
                    <option>Dr. Natesh (Assoc. Prof)</option>
                  </select>
                </div>

                <button id="submit-req-btn" class="w-full bg-[#64CEFB] hover:bg-[#64CEFB]/80 text-black font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 mt-4">
                  <i data-lucide="send" class="w-4 h-4"></i>
                  Submit Request & Certificate
                </button>
                
                <button id="cancel-req-btn" class="w-full text-white/40 hover:text-white/80 text-xs py-2 transition-colors">
                  Cancel
                </button>
              </div>
            </div>
          `;
          if (window.lucide) window.lucide.createIcons();

          document.getElementById('cert-upload').addEventListener('change', (e) => {
            if (e.target.files && e.target.files[0]) {
              document.getElementById('cert-upload-label').textContent = e.target.files[0].name;
              const hint = document.getElementById('cert-upload-hint');
              if (hint) hint.remove();
            }
          });

          document.getElementById('cancel-req-btn').addEventListener('click', renderDefaultBtn);

          document.getElementById('submit-req-btn').addEventListener('click', () => {
            const reqContent = document.getElementById('req-form-content');
            reqContent.innerHTML = `
              <div class="confirm-msg bg-[rgba(62,207,142,0.1)] border border-[rgba(62,207,142,0.3)] text-[var(--success)] p-4 rounded-xl flex items-center justify-center gap-3">
                <i data-lucide="check-circle-2" class="w-5 h-5"></i>
                Request sent to Faculty successfully!
              </div>
            `;
            if (window.lucide) window.lucide.createIcons();
            setTimeout(() => {
              const msg = reqContent.querySelector('.confirm-msg');
              if(msg) msg.classList.add('confirm-out');
            }, 2700);
            setTimeout(renderDefaultBtn, 3000);
          });
        };

        renderDefaultBtn();
      }
    } else if (page === 'clubs') {
      const searchInput = document.getElementById('clubs-search');
      const grid = document.getElementById('clubs-grid');
      const filtersContainer = document.getElementById('clubs-filters');
      
      const categories = ['All', 'Technical', 'Cultural', 'Sports', 'Social', 'R&D'];
      let activeCategory = 'All';
      
      const renderFilters = () => {
        const btns = categories.map(cat => {
          const isActive = activeCategory === cat;
          return `<button data-cat="${cat}" class="filter-pill font-ibm-mono text-[11px] uppercase px-[14px] py-[6px] rounded-full ${isActive ? 'active bg-[var(--accent)] text-[#000] border border-[var(--accent)]' : 'bg-transparent text-[var(--text-muted)] border border-[var(--border)] hover:border-[var(--border-hover)]'}">${cat}</button>`;
        }).join('');
        filtersContainer.innerHTML = btns;
        if (window.lucide) window.lucide.createIcons();
        
        filtersContainer.querySelectorAll('button').forEach(b => {
          b.addEventListener('click', (e) => {
            activeCategory = e.target.getAttribute('data-cat');
            renderFilters();
            renderClubs();
          });
        });
      };
      
      const categoryColors = {
        Technical: 'text-[var(--accent)]',
        Cultural: 'text-[var(--purple)]',
        Sports: 'text-[var(--success)]',
        Social: 'text-[var(--warning)]',
        'R&D': 'text-[var(--danger)]'
      };

      const renderClubs = () => {
        const query = searchInput.value.toLowerCase();
        const filtered = (window.clubsData || []).filter(c => {
          const mSearch = c.name.toLowerCase().includes(query);
          const mCat = activeCategory === 'All' || c.category === activeCategory;
          return mSearch && mCat;
        });
        
        if (filtered.length === 0) {
          grid.innerHTML = `
            <div class="col-span-full text-center py-20">
              <div class="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                <i data-lucide="search" class="w-8 h-8 text-white/20"></i>
              </div>
              <h3 class="text-xl font-medium text-white mb-2">No clubs found</h3>
              <p class="text-white/40 text-sm">Try adjusting your search or category filter.</p>
            </div>
          `;
        } else {
          grid.innerHTML = filtered.map(c => `
            <div class="card-global flex flex-col p-6 rounded-[20px] cursor-pointer">
              <div class="flex items-start justify-between mb-4">
                <div class="flex items-center justify-center h-[48px] w-[48px] rounded-[12px] bg-[var(--surface-2)] border border-[var(--border)]">
                  <i data-lucide="${c.iconName || 'book-open'}" class="h-[22px] w-[22px] ${categoryColors[c.category] || 'text-[var(--accent)]'}"></i>
                </div>
                <span class="font-ibm-mono text-[10px] text-[var(--text-muted)] uppercase">
                  ${c.category}
                </span>
              </div>
              
              <h3 class="font-syne font-bold text-[17px] text-[var(--text-primary)] mb-1">${c.name}</h3>
              
              <div class="flex items-center gap-1 mb-3">
                <i data-lucide="users" class="w-[12px] h-[12px] text-[var(--text-muted)]"></i>
                <span class="font-dm-sans text-[12px] text-[var(--text-muted)]">${c.memberCount}+ Members</span>
              </div>
              
              <p class="font-dm-sans text-[13px] text-[var(--text-secondary)] line-clamp-3 mb-6 flex-1">${c.description}</p>
              
              <div class="mt-auto pt-4">
                <span class="card-link block text-[13px] text-[var(--accent)] font-medium font-dm-sans">
                  View Profile &rarr;
                </span>
              </div>
            </div>
          `).join('');
        }
        if (window.lucide) window.lucide.createIcons();
      };
      
      if (searchInput && grid && filtersContainer) {
        renderFilters();
        renderClubs();
        searchInput.addEventListener('input', renderClubs);
      }
    } else if (page === 'facultyProfile') {
      const user = window.State.user;
      const broadcastContainer = document.getElementById('faculty-broadcast-container');
      const formContainer = document.getElementById('faculty-req-form');
      const trackerContainer = document.getElementById('faculty-student-tracker');
      
      if (formContainer) {
        const renderDefaultBtn = () => {
          formContainer.innerHTML = `
            <div class="flex-1 border-2 border-dashed border-white/20 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:border-[#64CEFB]/50 transition-colors cursor-pointer bg-white/5 relative">
              <i data-lucide="file-check" class="h-6 w-6 text-white/40 mb-2"></i>
              <span class="text-xs font-medium text-white/50">Click to Upload Certification</span>
            </div>
            <button id="send-req" class="btn-primary !h-full !px-6 !py-0 flex-1 flex items-center justify-center rounded-xl bg-[#64CEFB] hover:bg-[#64CEFB]/80 transition-colors">
              <span>
                <div class="flex items-center gap-2">
                  <i data-lucide="send" class="w-4 h-4"></i> Send Request
                </div>
              </span>
            </button>
          `;
          if (window.lucide) window.lucide.createIcons();
          document.getElementById('send-req').addEventListener('click', () => {
            formContainer.innerHTML = `
              <div class="confirm-msg flex-1 bg-[rgba(62,207,142,0.1)] border border-[rgba(62,207,142,0.3)] text-[var(--success)] p-4 rounded-xl flex items-center justify-center gap-3">
                <i data-lucide="check-circle-2" class="w-5 h-5"></i>
                Request & Certificate sent successfully!
              </div>
            `;
            if (window.lucide) window.lucide.createIcons();
            setTimeout(() => {
              const msg = formContainer.querySelector('.confirm-msg');
              if(msg) msg.classList.add('confirm-out');
            }, 2700);
            setTimeout(renderDefaultBtn, 3000);
          });
        };
        renderDefaultBtn();
      }

      let isBroadcasting = localStorage.getItem('broadcast_' + params) === 'true';

      if (user?.role === 'FACULTY' && broadcastContainer) {
        const renderBroadcast = () => {
          broadcastContainer.innerHTML = `
            <div class="rounded-3xl border border-rose-500/30 bg-rose-500/5 backdrop-blur-md p-6 mt-[-10px]">
              <div class="flex justify-between items-start mb-4">
                <h3 class="text-white font-bold flex items-center gap-2">
                  <span class="w-[8px] h-[8px] rounded-full ${isBroadcasting ? 'bg-[var(--danger)] animate-pulse-danger' : 'bg-[var(--text-secondary)]'}"></span>
                  Live GPS
                </h3>
                <button id="toggle-broadcast" class="px-4 py-2 rounded-lg font-bold text-[10px] transition-colors uppercase ${isBroadcasting ? 'bg-rose-500 text-white shadow-[0_0_15px_rgba(244,63,94,0.4)]' : 'bg-white/10 text-white hover:bg-white/20'}">
                  ${isBroadcasting ? 'Stop Broadcast' : 'Start Broadcast'}
                </button>
              </div>
              <p class="text-xs text-white/60 leading-relaxed">
                ${isBroadcasting 
                  ? "Transmitting live Uber-style coordinates. Students viewing your profile can currently track your position on campus."
                  : "Enable if walking to a lab or event. Students will track your live ETA on the grid."}
              </p>
            </div>
          `;
          document.getElementById('toggle-broadcast').addEventListener('click', () => {
            isBroadcasting = !isBroadcasting;
            if (isBroadcasting) localStorage.setItem('broadcast_' + params, 'true');
            else localStorage.removeItem('broadcast_' + params);
            renderBroadcast();
          });
        };
        renderBroadcast();
      }

      if (user?.role === 'STUDENT' && trackerContainer) {
        const renderTracker = () => {
          const active = localStorage.getItem('broadcast_' + params) === 'true';
          trackerContainer.innerHTML = `
            <div class="rounded-3xl border border-white/10 bg-[#121212]/40 backdrop-blur-md p-8 overflow-hidden relative transition-all mt-6">
              <h2 class="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <i data-lucide="map-pin" class="h-5 w-5 text-rose-400"></i>
                Live Uber-Style Tracker
              </h2>
              
              ${active ? `
                <div class="space-y-4">
                  <div class="bg-[rgba(240,82,82,0.1)] text-[var(--danger)] border border-[rgba(240,82,82,0.3)] rounded-lg p-3 text-xs font-semibold flex items-center gap-2 mb-4">
                   <span class="w-[8px] h-[8px] rounded-full bg-[var(--danger)] animate-pulse-danger"></span>
                   GPS SIGNAL FOUND: ESTIMATED 240 METERS AWAY
                  </div>
                  <div class="w-full h-80 rounded-2xl border-2 border-white/10 overflow-hidden relative shadow-[0_0_40px_rgba(244,63,94,0.15)] group">
                    <div class="absolute inset-0 bg-rose-500/10 mix-blend-color pointer-events-none group-hover:opacity-0 transition-opacity z-10"></div>
                    <iframe
                      width="100%" height="100%" style="border:0;" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade"
                      src="https://www.google.com/maps/embed/v1/place?key=MOCK_API_KEY&q=Vidyavardhaka+College+of+Engineering,Mysuru"
                    ></iframe>
                  </div>
                </div>
              ` : `
                <div class="text-center py-10 border border-dashed border-white/20 rounded-xl bg-white/5 opacity-50 grayscale">
                  <i data-lucide="map-pin" class="h-8 w-8 text-white/30 mx-auto mb-3"></i>
                  <p class="text-white/70 text-sm font-medium">Tracking Disabled by Faculty.</p>
                  <p class="text-white/40 text-xs mt-1">Live location map is only available during active broadcasts.</p>
                </div>
              `}
            </div>
          `;
          if (window.lucide) window.lucide.createIcons();
        };
        renderTracker();
        const interval = setInterval(() => {
          if (window.location.hash !== '#faculty/' + params) {
            clearInterval(interval);
            return;
          }
          const active = localStorage.getItem('broadcast_' + params) === 'true';
          const currentText = trackerContainer.textContent || '';
          const currentlyActive = currentText.includes('GPS SIGNAL FOUND');
          if (active !== currentlyActive) renderTracker();
        }, 2000);
      }
    }
  }

  // Subscribe to state changes (to re-render header if language changes)
  window.State.subscribe(() => {
    renderHeader();
    // In a full SPA, we might want to re-render the page too if translations are used in the page body
    handleRoute(); 
  });

  // Listen for hash changes
  window.addEventListener('hashchange', handleRoute);
  
  // Initial load
  handleRoute();
});
