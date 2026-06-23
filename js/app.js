// Main Application Logic
document.addEventListener('DOMContentLoaded', () => {
  // Initialize State
  window.State.init();

  // Scroll Listener for Navbar visual styling
  window.addEventListener('scroll', () => {
    const navEl = document.querySelector('header nav');
    if (navEl) {
      if (window.scrollY > 60) {
        navEl.classList.add('nav-scrolled');
      } else {
        navEl.classList.remove('nav-scrolled');
      }
    }
  });

  const headerEl = document.getElementById('header');
  const contentEl = document.getElementById('content');
  let isMobileMenuOpen = false;

  const getNotifications = () => {
    const allAnnouncements = JSON.parse(localStorage.getItem('vvce_announcements') || '{}');
    let announcementNotifs = [];
    Object.keys(allAnnouncements).forEach(facultyId => {
      const faculty = window.facultyData?.find(f => f.id === facultyId) || { name: facultyId };
      allAnnouncements[facultyId].forEach(a => {
        announcementNotifs.push({
          type: 'announcement',
          facultyId: facultyId,
          facultyName: faculty.name,
          ...a
        });
      });
    });
    // Sort by date descending
    announcementNotifs.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Existing mock notifications
    const mockNotifs = [
      {
        title: 'FUSIONX 1.0 Hackathon',
        text: 'Registrations are now open! Join the 24 HRS National-Level Hackathon. Prize Pool: ₹85,000+',
        time: 'Just now',
        icon: 'calendar',
        bgClass: 'bg-[rgba(62,207,142,0.1)] text-[var(--success)]',
        link: '#events'
      },
      {
        title: 'Hackathon Registration',
        text: 'Only 2 days left to request attendance authorization for the Global Hackathon.',
        time: '5 hours ago',
        icon: 'alert-circle',
        bgClass: 'bg-[rgba(240,82,82,0.1)] text-[var(--danger)]',
        link: '#events'
      }
    ];

    let notifHTML = announcementNotifs.map(n => `
      <a href="#faculty/${n.facultyId}" class="p-4 border-b border-[var(--border)] hover:bg-[var(--surface-2)] transition-colors flex gap-3 cursor-pointer">
        <div class="w-8 h-8 rounded-full bg-[#64CEFB]/10 flex items-center justify-center text-[#64CEFB] shrink-0">
          <i data-lucide="bell" class="w-4 h-4"></i>
        </div>
        <div class="flex flex-col">
          <p class="font-dm-sans text-[13px] text-[var(--text-primary)] font-medium">Announcement from ${n.facultyName}</p>
          <p class="font-dm-sans text-[12px] text-[var(--text-secondary)] mt-1 line-clamp-2">${n.text}</p>
          <div class="flex justify-between items-center mt-2">
            <span class="font-ibm-mono text-[10px] text-[var(--text-muted)]">${new Date(n.date).toLocaleDateString()}</span>
            ${n.audience ? `<span class="font-ibm-mono text-[9px] text-[var(--accent)] border border-[var(--accent)]/30 px-1 rounded">${n.audience}</span>` : ''}
          </div>
        </div>
      </a>
    `).join('');

    notifHTML += mockNotifs.map(n => `
      <a href="${n.link}" class="p-4 border-b border-[var(--border)] hover:bg-[var(--surface-2)] transition-colors flex gap-3 cursor-pointer">
        <div class="w-8 h-8 rounded-full ${n.bgClass} flex items-center justify-center shrink-0">
          <i data-lucide="${n.icon}" class="w-4 h-4"></i>
        </div>
        <div class="flex flex-col">
          <p class="font-dm-sans text-[13px] text-[var(--text-primary)] font-medium">${n.title}</p>
          <p class="font-dm-sans text-[12px] text-[var(--text-secondary)] mt-1">${n.text}</p>
          <span class="font-ibm-mono text-[10px] text-[var(--text-muted)] mt-2">${n.time}</span>
        </div>
      </a>
    `).join('');

    return { html: notifHTML, count: announcementNotifs.length + mockNotifs.length };
  };

  const hasUnreadNotifications = () => {
    const notifs = getNotifications();
    if (notifs.count === 0) return false;
    const lastRead = parseInt(localStorage.getItem('vvce_notifications_read_count') || '0', 10);
    return notifs.count > lastRead;
  };

  const markNotificationsAsRead = () => {
    const notifs = getNotifications();
    localStorage.setItem('vvce_notifications_read_count', notifs.count.toString());

    // Remove the red dots directly from the DOM without re-rendering the header
    const deskDot = document.querySelector('#notifications-btn span.bg-\\[var\\(--danger\\)\\]');
    if (deskDot) deskDot.remove();
    const mobDot = document.querySelector('#mobile-notifications-btn span.bg-\\[var\\(--danger\\)\\]');
    if (mobDot) mobDot.remove();
  };

  function renderHeader() {
    const user = window.State.user;
    const t = (key) => window.State.t(key);
    const hash = window.location.hash || '#login';
    const isAuth = !!user;
    
    const [pathString] = hash.substring(1).split('?');
    const footerEl = document.querySelector('footer');
    if (pathString === 'login') {
      headerEl.style.display = 'none';
      if (footerEl) footerEl.style.display = 'none';
      return;
    } else {
      headerEl.style.display = 'block';
      if (footerEl) footerEl.style.display = 'block';
    }

    const navLinks = [
      { id: 'home', label: t('nav_home') },
      { id: 'departments', label: t('nav_departments') },
      { id: 'campus-map', label: t('nav_campus_map') },
      { id: 'events', label: t('nav_events') },
      { id: 'lost-and-found', label: t('nav_lost_found') },
      { id: 'notes', label: 'Study Hub' },
      { id: 'https://ioncudos.in/vvce_lms_student/', label: 'Ioncudos', external: true }
    ];

    const desktopNavLinks = navLinks.map(link => `
      <a href="${link.external ? link.id : '#' + link.id}" ${link.external ? 'target="_blank" rel="noopener noreferrer"' : ''} class="nav-link relative font-dm-sans text-[14px] transition-colors ${hash === '#' + link.id ? 'active text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}">
        ${link.label}
      </a>
    `).join('');

    const mobileNavLinks = navLinks.map(link => `
      <a href="${link.external ? link.id : '#' + link.id}" ${link.external ? 'target="_blank" rel="noopener noreferrer"' : ''} class="mobile-stagger mobile-nav-link block font-dm-sans text-[24px] py-4 border-b border-[var(--border)] transition-colors ${hash === '#' + link.id ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}">
        ${link.label}
      </a>
    `).join('');

    headerEl.innerHTML = `
      <nav class="fixed top-0 left-0 w-full h-[64px] border-b border-[var(--border)] z-50 transition-all duration-300 backdrop-blur-md" style="background-color: rgba(0, 0, 0, 0.5) !important;">
        <div class="mx-auto w-full max-w-[1280px] h-full px-6 lg:px-8 flex items-center justify-between">
          
          <!-- Logo -->
          <a href="#home" class="flex items-center gap-2">
            <span class="w-[4px] h-[4px] rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981] shrink-0"></span>
            <span class="font-syne font-extrabold text-[16px] text-gradient-emerald">VVCE Connect</span>
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
                <div class="relative" id="notification-dropdown-container">
                  <button id="notifications-btn" class="btn-icon relative" title="Notifications">
                    <i data-lucide="bell" class="w-[18px] h-[18px]"></i>
                    ${hasUnreadNotifications() ? '<span class="absolute top-[6px] right-[6px] w-2 h-2 bg-[var(--danger)] rounded-full animate-pulse border border-[var(--bg)]"></span>' : ''}
                  </button>
                  
                  <div id="notifications-dropdown" class="absolute right-0 mt-2 w-80 bg-[var(--surface)] border border-[var(--border)] rounded-2xl shadow-xl overflow-hidden z-[100] hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    <div class="p-4 border-b border-[var(--border)] flex justify-between items-center bg-[var(--surface-2)]">
                      <h3 class="font-syne font-semibold text-[16px] text-[var(--text-primary)]">Notifications</h3>
                      <span class="text-[11px] font-ibm-mono text-[var(--accent)] bg-[var(--accent)]/10 px-2 py-1 rounded-md">${getNotifications().count} New</span>
                    </div>
                    <div class="flex flex-col max-h-[300px] overflow-y-auto">
                      ${getNotifications().html}
                    </div>
                  </div>
                </div>
                
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
              <a href="#login" class="nav-cta-btn">
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
                  <div class="flex items-center gap-3">
                    <div class="relative">
                      <button id="mobile-notifications-btn" class="flex items-center justify-center p-3 rounded-xl border border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--surface)] transition-colors relative">
                        <i data-lucide="bell" class="w-5 h-5"></i>
                        ${hasUnreadNotifications() ? '<span class="absolute top-[8px] right-[8px] w-2 h-2 bg-[var(--danger)] rounded-full animate-pulse"></span>' : ''}
                      </button>
                      <div id="mobile-notifications-dropdown" class="absolute right-0 bottom-[120%] w-[85vw] max-w-[320px] bg-[var(--surface)] border border-[var(--border)] rounded-2xl shadow-xl overflow-hidden z-[100] hidden animate-in fade-in slide-in-from-bottom-2 duration-200 origin-bottom-right">
                        <div class="p-4 border-b border-[var(--border)] flex justify-between items-center bg-[var(--surface-2)]">
                          <h3 class="font-syne font-semibold text-[16px] text-[var(--text-primary)]">Notifications</h3>
                          <span class="text-[11px] font-ibm-mono text-[var(--accent)] bg-[var(--accent)]/10 px-2 py-1 rounded-md">${getNotifications().count} New</span>
                        </div>
                        <div class="flex flex-col max-h-[300px] overflow-y-auto">
                          ${getNotifications().html}
                        </div>
                      </div>
                    </div>
                    <button id="mobile-logout-btn" class="flex items-center justify-center p-3 rounded-xl border border-[var(--danger)] text-[var(--danger)] hover:bg-[rgba(240,82,82,0.1)] transition-colors">
                      <i data-lucide="log-out" class="w-5 h-5"></i>
                    </button>
                  </div>
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

    const notifBtn = document.getElementById('notifications-btn');
    const notifDropdown = document.getElementById('notifications-dropdown');

    if (notifBtn && notifDropdown) {
      notifBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        notifDropdown.classList.toggle('hidden');
        if (!notifDropdown.classList.contains('hidden')) {
          markNotificationsAsRead();
        }
      });
      // Clicking links inside the dropdown should close it
      notifDropdown.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          notifDropdown.classList.add('hidden');
        });
      });
    }

    const mobileNotifBtn = document.getElementById('mobile-notifications-btn');
    const mobileNotifDropdown = document.getElementById('mobile-notifications-dropdown');

    if (mobileNotifBtn && mobileNotifDropdown) {
      mobileNotifBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileNotifDropdown.classList.toggle('hidden');
        if (!mobileNotifDropdown.classList.contains('hidden')) {
          markNotificationsAsRead();
        }
      });
      mobileNotifDropdown.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          mobileNotifDropdown.classList.add('hidden');
          isMobileMenuOpen = false;
          renderHeader();
        });
      });
    }

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

      // 3D Card Tilt Effect for Features Section
      const featureCards = document.querySelectorAll('.feature-card-3d');
      featureCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          const rotateX = ((y - centerY) / centerY) * -10; // Max tilt: 10deg
          const rotateY = ((x - centerX) / centerX) * 10;

          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });

        card.addEventListener('mouseleave', () => {
          card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
        });
      });
    } else if (page === 'schedules') {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });
      document.querySelectorAll('.reveal-card').forEach(card => observer.observe(card));
    } else if (page === 'events') {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });
      document.querySelectorAll('.reveal-card').forEach(card => observer.observe(card));

      // 3D Card Tilt Effect for Event Cards
      // wait a bit for dynamic events to load before attaching listeners
      setTimeout(() => {
        const eventCards = document.querySelectorAll('.event-card-3d');
        eventCards.forEach(card => {
          card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -6; // Max tilt: 6deg
            const rotateY = ((x - centerX) / centerX) * 6;

            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
          });

          card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
          });
        });
      }, 1000);
    } else if (page === 'login') {
      const loginForm = document.getElementById('loginForm');
      if (loginForm) {
        const idInputEl = document.getElementById('id-input');
        const pwWrapper = document.getElementById('passwordWrapper');

        idInputEl.addEventListener('input', (e) => {
          if (e.target.value.trim().toUpperCase() === 'ADMIN') {
            pwWrapper.classList.remove('hidden');
          } else {
            pwWrapper.classList.add('hidden');
          }
        });

        loginForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const idInput = idInputEl.value.trim();
          const pwInput = document.getElementById('password-input')?.value;
          const errorEl = document.getElementById('loginError');
          const submitBtn = loginForm.querySelector('button[type="submit"]');

          const originalBtnContent = submitBtn.innerHTML;
          submitBtn.disabled = true;

          const showError = (msg) => {
            errorEl.querySelector('p').textContent = msg;
            errorEl.classList.remove('hidden');
            errorEl.classList.add('flex');
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnContent;
          };

          const handleSuccessfulLogin = () => {
            const success = window.State.login(idInput);
            if (success) {
              errorEl.classList.add('hidden');
              errorEl.classList.remove('flex');
              window.location.hash = '#home';
            } else {
              showError("Invalid Credentials. For students, use IDs starting with 4VV. For faculty, use their short ID (e.g., ece1, cs1, me1).");
            }
          };

          if (idInput.toUpperCase() === 'ADMIN') {
            if (pwInput === '1234') {
              handleSuccessfulLogin();
            } else {
              showError("Invalid admin password.");
            }
            return; // Skip geolocation for admin
          }

          // Temporary bypass: allow Faculty to login from anywhere to test live tracking
          if (idInput.toUpperCase().startsWith('FAC')) {
            handleSuccessfulLogin();
            return;
          }

          submitBtn.innerHTML = `<span>Verifying Location...</span> <i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i>`;
          if (window.lucide) window.lucide.createIcons();

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
                handleSuccessfulLogin();
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
        switch (status) {
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
        const normalize = (s) => s.toLowerCase().replace(/^(prof\.?|dr\.?|mr\.?|ms\.?)\s+/i, '').replace(/[^a-z0-9]/g, '');
        const normalizedQ = normalize(query);
        const lowerQ = query.toLowerCase();
        const filtered = window.facultyData.filter(f =>
          normalize(f.name).includes(normalizedQ) ||
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
      const searchResultsGrid = document.getElementById('faculty-search-results');
      const searchInput = document.getElementById('global-faculty-search');
      const banner = document.getElementById('departments-clubs-banner');

      const getStatusBadge = (status) => {
        let colorClass = '';
        let dotClass = '';
        switch (status) {
          case 'Available':
            colorClass = 'bg-[rgba(62,207,142,0.1)] text-[var(--success)]';
            dotClass = 'bg-[var(--success)] animate-pulse-success';
            break;
          case 'In Class':
            colorClass = 'bg-[rgba(240,162,42,0.1)] text-[var(--accent)]';
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

      const renderGlobalFaculty = (query) => {
        if (!query || query.trim() === '') {
          grid.classList.remove('hidden');
          searchResultsGrid.classList.add('hidden');
          return;
        }

        grid.classList.add('hidden');
        searchResultsGrid.classList.remove('hidden');

        const lowerQ = query.toLowerCase();
        const filtered = (window.facultyData || []).filter(f =>
          f.name.toLowerCase().includes(lowerQ) ||
          f.department.toLowerCase().includes(lowerQ) ||
          f.cabin.toLowerCase().includes(lowerQ)
        );

        if (filtered.length === 0) {
          searchResultsGrid.innerHTML = '<div class="col-span-full text-center py-12 text-[var(--text-muted)]">No faculty members found matching your search.</div>';
        } else {
          searchResultsGrid.innerHTML = filtered.map(f => `
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

      if (searchInput) {
        searchInput.addEventListener('input', (e) => renderGlobalFaculty(e.target.value));
      }

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

      const deptImages = {
        'Computer Science': 'LOGOS/CSE.png',
        'Information Science': 'LOGOS/ISE.png',
        'Electronics & Communication Engineering': 'LOGOS/ECE.png',
        'Mechanical': 'LOGOS/Mech.png',
        'Civil Engineering': 'LOGOS/CIVIL.png',
        'Electrical & Elecs': 'LOGOS/EEE.png'
      };

      if (grid && window.departmentsData) {
        grid.innerHTML = window.departmentsData.map(dept => {
          const abbr = deptAbbr[dept] || dept.substring(0, 3).toUpperCase();
          const colorClass = deptColors[dept] || 'text-[var(--text-primary)] bg-[var(--surface-2)]';
          const imageUrl = deptImages[dept];
          const facultyCount = (window.facultyData || []).filter(f => f.department === dept).length;

          const logoContent = imageUrl
            ? '<img src="' + imageUrl + '" alt="' + abbr + ' Logo" class="w-10 h-10 object-contain drop-shadow-md" />'
            : '<span class="font-syne font-bold text-xl">' + abbr + '</span>';

          return `
            <a href="#directory?q=${encodeURIComponent(dept)}" class="card-global flex flex-col p-6 rounded-[20px] cursor-pointer">
              <div class="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${colorClass}">
                ${logoContent}
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

      const grid = document.getElementById('dynamic-events-grid');
      const timeline = document.getElementById('dynamic-events-timeline');
      const viewGridBtn = document.getElementById('view-grid');
      const viewTimelineBtn = document.getElementById('view-timeline');
      
      let currentView = 'grid'; // grid or timeline

      if (viewGridBtn && viewTimelineBtn && grid && timeline) {
        viewGridBtn.addEventListener('click', () => {
          if(currentView === 'grid') return;
          currentView = 'grid';
          viewGridBtn.classList.add('bg-[var(--surface)]', 'text-[var(--accent)]');
          viewGridBtn.classList.remove('text-[var(--text-muted)]', 'hover:text-[var(--text-primary)]', 'hover:bg-[var(--surface)]');
          viewTimelineBtn.classList.remove('bg-[var(--surface)]', 'text-[var(--accent)]');
          viewTimelineBtn.classList.add('text-[var(--text-muted)]', 'hover:text-[var(--text-primary)]', 'hover:bg-[var(--surface)]');
          grid.classList.remove('hidden');
          timeline.classList.add('hidden');
          timeline.classList.remove('flex');
        });

        viewTimelineBtn.addEventListener('click', () => {
          if(currentView === 'timeline') return;
          currentView = 'timeline';
          viewTimelineBtn.classList.add('bg-[var(--surface)]', 'text-[var(--accent)]');
          viewTimelineBtn.classList.remove('text-[var(--text-muted)]', 'hover:text-[var(--text-primary)]', 'hover:bg-[var(--surface)]');
          viewGridBtn.classList.remove('bg-[var(--surface)]', 'text-[var(--accent)]');
          viewGridBtn.classList.add('text-[var(--text-muted)]', 'hover:text-[var(--text-primary)]', 'hover:bg-[var(--surface)]');
          grid.classList.add('hidden');
          timeline.classList.remove('hidden');
          timeline.classList.add('flex');
        });
      }
      const addBtn = document.getElementById('btn-add-event');
      const addModal = document.getElementById('add-event-modal');
      const addForm = document.getElementById('add-event-form');

      if (addBtn && addModal) {
        addBtn.addEventListener('click', () => {
          addModal.classList.remove('hidden');
          addModal.classList.add('flex');
        });
        const closeEls = ['close-add-event-modal-btn', 'close-add-event-modal-bg'];
        closeEls.forEach(id => {
          const el = document.getElementById(id);
          if (el) el.addEventListener('click', () => {
            addModal.classList.add('hidden');
            addModal.classList.remove('flex');
          });
        });
      }

      window.deleteEvent = async (id) => {
        if (confirm('Are you sure you want to delete this event? This action cannot be undone.')) {
          try {
            const { error } = await window.supabaseClient.from('events').delete().eq('id', id);
            if (error) throw error;
            // Refresh events list
            if (typeof fetchEvents === 'function') fetchEvents();
          } catch (err) {
            console.error('Error deleting event:', err);
            alert('Failed to delete event: ' + err.message);
          }
        }
      };

      const fetchEvents = async () => {
        if (!grid) return;
        
        let data = [];
        try {
          if (window.supabaseClient) {
            const fetchPromise = window.supabaseClient.from('events').select('*').order('created_at', { ascending: false });
            const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Supabase fetch timeout')), 3000));
            const res = await Promise.race([fetchPromise, timeoutPromise]);
            if (res.error) throw res.error;
            data = res.data || [];
          } else {
            throw new Error('Supabase client not initialized');
          }
        } catch (e) {
          console.error("Error fetching events:", e);
        }

        const featuredContainer = document.getElementById('featured-event-container');

        const mockFeatured = {
          id: 'featured-steelwool',
          title: 'SteelWool Photography',
          description: 'Ignite your creativity! Step into a night filled with sparks, motion, and breathtaking visuals. Capture stunning long-exposure shots and experience the magic of painting with light.',
          date: 'May 25th 2026',
          time: '5:30 PM Onwards',
          venue: 'Basketball Court',
          duration: '',
          poster_url: 'LOGOS/Pixel.jpeg',
          registration_link: 'https://forms.gle/p86xdWU9DHSd1NXE8'
        };

        const otherEvents = data;

        if (otherEvents.length > 0) {
          const dynamicGridHTML = otherEvents.map((event, index) => {
            let pUrl = event.poster_url;
            if (event.title && event.title.toLowerCase().includes('fusion') && !pUrl) {
              pUrl = 'LOGOS/fusion.jpeg';
            }
            return `
              <div class="card-global flex flex-col group hover:border-[var(--accent)]/50 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4" style="animation-delay: ${index * 100}ms">
                <div class="w-full h-[250px] relative overflow-hidden bg-[var(--surface-2)]">
                  ${pUrl
              ? `<img src="${pUrl}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />`
              : `<div class="absolute inset-0 flex flex-col items-center justify-center text-[var(--text-muted)]"><i data-lucide="image" class="w-10 h-10 mb-2"></i><span>No Poster</span></div>`
            }
                  <div class="absolute inset-0 bg-gradient-to-t from-[#000]/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  
                  <div class="absolute top-4 right-4 flex gap-2">
                    <button class="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-[var(--accent)] border border-white/10 hover:border-[var(--accent)]/50 transition-colors shadow-lg">
                      <i data-lucide="share-2" class="w-4 h-4"></i>
                    </button>
                    <button onclick="window.deleteEvent('${event.id}')" class="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-[#ff4b4b] border border-white/10 hover:border-[#ff4b4b]/50 transition-colors shadow-lg">
                      <i data-lucide="trash-2" class="w-4 h-4"></i>
                    </button>
                  </div>
                </div>
                
                <div class="p-6 flex flex-col flex-1 relative">
                  <div class="absolute -top-6 left-6 bg-[var(--surface)] border border-[var(--border)] px-4 py-2 rounded-[12px] shadow-lg flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse"></span>
                    <span class="font-ibm-mono text-[11px] font-bold text-[var(--text-primary)] tracking-wider uppercase">Upcoming</span>
                  </div>
                  
                  <h3 class="font-syne font-bold text-[22px] text-[var(--text-primary)] mb-3 mt-2 line-clamp-2 group-hover:text-[var(--accent)] transition-colors">${event.title}</h3>
                  <p class="font-dm-sans text-[14px] text-[var(--text-secondary)] line-clamp-3 mb-6 flex-1">
                    ${event.description || 'No description available.'}
                  </p>

                  <div class="space-y-3 mb-6">
                    ${event.date ? `<div class="flex items-center gap-3 text-[13px] text-[var(--text-secondary)]"><i data-lucide="calendar" class="w-4 h-4 text-[var(--accent)]"></i><span class="font-medium">${event.date}</span></div>` : ''}
                    ${event.time ? `<div class="flex items-center gap-3 text-[13px] text-[var(--text-secondary)]"><i data-lucide="clock" class="w-4 h-4 text-[var(--purple)]"></i><span class="font-medium">${event.time}</span></div>` : ''}
                    ${event.venue ? `<div class="flex items-center gap-3 text-[13px] text-[var(--text-secondary)]"><i data-lucide="map-pin" class="w-4 h-4 text-[var(--warning)]"></i><span class="font-medium">${event.venue}</span></div>` : ''}
                  </div>

                  <div class="pt-4 border-t border-[var(--border)] mt-auto flex items-center justify-between">
                    ${event.registration_link ? `
                      <a href="${event.registration_link}" target="_blank" class="text-[13px] font-bold text-[var(--text-primary)] hover:text-[var(--accent)] uppercase tracking-wider flex items-center gap-2 transition-colors pointer-events-auto relative z-20">
                        Register <i data-lucide="arrow-right" class="w-4 h-4"></i>
                      </a>
                    ` : '<span class="text-[13px] text-[var(--text-muted)] italic">No link</span>'}
                    
                    <span class="font-ibm-mono text-[10px] text-[var(--text-muted)] border border-[var(--border)] px-2 py-1 rounded-[6px] bg-[var(--surface-2)]">Event #${event.id?.toString().slice(0, 4) || '0000'}</span>
                  </div>
                </div>
              </div>
            `;
          }).join('');
          
          grid.innerHTML = dynamicGridHTML + grid.innerHTML;
          
          if (timeline) {
              const dynamicTimelineHTML = otherEvents.map((event, index) => {
                  let pUrl = event.poster_url;
                  if (event.title && event.title.toLowerCase().includes('fusion') && !pUrl) {
                    pUrl = 'LOGOS/fusion.jpeg';
                  }
                  const isEven = index % 2 === 0;
                  return `
                    <div class="reveal-card relative flex flex-col md:flex-row items-center justify-between w-full mb-8 z-10 group" style="animation-delay: ${index * 100}ms">
                      <!-- Node -->
                      <div class="absolute left-[32px] md:left-[50%] w-4 h-4 rounded-full bg-[var(--accent)] shadow-[0_0_15px_var(--accent-glow)] md:-translate-x-1/2 border-4 border-[#0d121f] z-20 transition-transform group-hover:scale-150"></div>
                      
                      <div class="${isEven ? 'md:w-5/12 md:pr-12 md:text-right' : 'md:w-5/12 md:pl-12 md:order-last'} w-full pl-16 md:pl-0">
                          <div class="glass-card p-6 rounded-2xl hover:border-[var(--accent)] transition-all hover:shadow-[0_10px_30px_var(--accent-glow)] group-hover:-translate-y-1">
                            <div class="flex items-center gap-2 mb-3 ${isEven ? 'md:justify-end' : ''}">
                              <span class="text-[var(--accent)] font-ibm-mono text-[12px] font-bold tracking-widest uppercase bg-[var(--accent)]/10 px-3 py-1 rounded-md border border-[var(--accent)]/20">${event.date || 'TBA'}</span>
                            </div>
                            <h3 class="font-syne text-[22px] font-bold text-white mb-2">${event.title}</h3>
                            <p class="font-dm-sans text-sm text-[var(--text-secondary)] line-clamp-2 mb-4">${event.description || ''}</p>
                            <div class="flex flex-wrap items-center gap-4 text-xs text-[var(--text-muted)] font-dm-sans ${isEven ? 'md:justify-end' : ''}">
                              ${event.time ? `<span class="flex items-center gap-1"><i data-lucide="clock" class="w-3 h-3 text-[var(--accent)]"></i> ${event.time}</span>` : ''}
                              ${event.venue ? `<span class="flex items-center gap-1"><i data-lucide="map-pin" class="w-3 h-3 text-[var(--purple)]"></i> ${event.venue}</span>` : ''}
                            </div>
                          </div>
                      </div>
                    </div>
                  `;
              }).join('');
              
              // Find the vertical line div and insert the dynamic events right after it so they appear above the static one
              const lineHTML = `<div class="absolute left-[32px] md:left-[50%] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--accent)] via-[var(--purple)] to-transparent opacity-30 md:-translate-x-1/2 rounded-full hidden md:block"></div>`;
              timeline.innerHTML = lineHTML + dynamicTimelineHTML + timeline.innerHTML.replace(/<div class="absolute left-\[32px\].*?<\/div>/, '');
          }
        }
        if (window.lucide) window.lucide.createIcons();
        
        setTimeout(() => {
          const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                obs.unobserve(entry.target);
              }
            });
          }, { threshold: 0.15 });
          document.querySelectorAll('.reveal-card').forEach(card => observer.observe(card));

          const eventCards = document.querySelectorAll('.event-card-3d');
          eventCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              const centerX = rect.width / 2;
              const centerY = rect.height / 2;
              const rotateX = ((y - centerY) / centerY) * -6;
              const rotateY = ((x - centerX) / centerX) * 6;
              card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
            });
            card.addEventListener('mouseleave', () => {
              card.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
            });
          });
        }, 100);
      };

      fetchEvents();

      if (addForm) {
        const fileInput = document.getElementById('event-poster-file');
        const imgPreview = document.getElementById('event-poster-preview');

        if (fileInput && imgPreview) {
          fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
              const url = URL.createObjectURL(file);
              imgPreview.src = url;
              imgPreview.classList.remove('hidden');
            } else {
              imgPreview.classList.add('hidden');
              imgPreview.src = '';
            }
          });
        }

        addForm.addEventListener('submit', async (e) => {
          e.preventDefault();
          const submitBtn = document.getElementById('submit-event-btn');
          const originalText = submitBtn.innerHTML;
          submitBtn.innerHTML = '<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i> Adding Event...';
          submitBtn.disabled = true;

          try {
            const title = document.getElementById('event-title').value;
            const desc = document.getElementById('event-desc').value;
            const date = document.getElementById('event-date').value;
            const time = document.getElementById('event-time').value;
            const duration = document.getElementById('event-duration').value;
            const venue = document.getElementById('event-venue').value;
            const link = document.getElementById('event-link').value;

            let posterUrl = '';

            if (fileInput.files && fileInput.files[0]) {
              const file = fileInput.files[0];
              const fileExt = file.name.split('.').pop();
              const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
              const { data: uploadData, error: uploadError } = await window.supabaseClient.storage.from('event_posters').upload(fileName, file);
              if (uploadError) throw uploadError;
              const { data: publicUrlData } = window.supabaseClient.storage.from('event_posters').getPublicUrl(fileName);
              posterUrl = publicUrlData.publicUrl;
            }

            const { error: insertError } = await window.supabaseClient.from('events').insert([
              { title, description: desc, date, time, duration, venue, registration_link: link, poster_url: posterUrl }
            ]);

            if (insertError) throw insertError;

            addForm.reset();
            if (imgPreview) imgPreview.classList.add('hidden');
            addModal.classList.add('hidden');
            addModal.classList.remove('flex');
            fetchEvents();
          } catch (err) {
            console.error("Error adding event:", err);
            alert("Failed to add event: " + err.message);
          } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            if (window.lucide) window.lucide.createIcons();
          }
        });
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
            <a href="#clubs/${c.id}" class="card-global flex flex-col p-6 rounded-[20px] cursor-pointer block">
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
            </a>
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
              if (msg) msg.classList.add('confirm-out');
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

      if (trackerContainer) {
        // Find the map container inside the tracker
        const mapEl = document.getElementById('faculty-live-map');

        if (mapEl) {
          if (!window.L) {
            mapEl.innerHTML = `<div class="p-4 text-red-500">Error: Leaflet library (window.L) failed to load.</div>`;
            return;
          }

          // Check if faculty is tracking
          const checkTrackingStatus = async () => {
            try {
              if (!window.supabaseClient) {
                const reason = window.SUPABASE_INIT_ERROR || "Failed to load library";
                mapEl.innerHTML = `<div class="p-4 text-red-500 font-ibm-mono text-sm h-full flex flex-col justify-center">
                    <h4 class="font-bold mb-2">Connection Error</h4>
                    <p>Error: ${reason}</p>
                 </div>`;
                return;
              }

              // Get current faculty location from DB
              const { data, error } = await window.supabaseClient
                .from('faculty')
                .select('latitude, longitude, is_tracking, last_updated')
                .eq('id', 'cs1') // The hardcoded ID we use for tracking demo
                .single();

              if (error && error.code !== 'PGRST116') {
                console.error("Supabase fetch error:", error);
                // We won't block the map load if it's just a row not found error (PGRST116)
                // But if it's another error, we might want to log it
              }

              // Remove loading overlay
              const overlay = document.getElementById('map-loading-overlay');
              if (overlay) overlay.style.display = 'none';

              let lat = 12.3361; // Default VVCE Latitude
              let lng = 76.6186; // Default VVCE Longitude
              let isTracking = false;

              if (data && data.is_tracking && data.latitude && data.longitude) {
                lat = data.latitude;
                lng = data.longitude;
                isTracking = true;
              }

              // Cleanup old map if it exists
              if (window.__currentLeafletMap) {
                window.__currentLeafletMap.remove();
              }

              // Initialize Leaflet Map
              const map = L.map('faculty-live-map', {
                zoomControl: false // Minimalist UI
              }).setView([lat, lng], 17);

              window.__currentLeafletMap = map;

              // Add dark mode tile layer for premium aesthetic
              L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                subdomains: 'abcd',
                maxZoom: 20
              }).addTo(map);

              // Add custom styled marker
              const markerHtml = `
                <div style="width:20px;height:20px;border-radius:50%;background-color:var(--accent);box-shadow:0 0 15px var(--accent-glow);border:2px solid var(--surface-2);position:relative;">
                  ${isTracking ? '<div style="position:absolute;inset:0;border-radius:50%;background-color:var(--accent);animation:ping 1.5s cubic-bezier(0,0,0.2,1) infinite;"></div>' : ''}
                </div>
              `;

              const customIcon = L.divIcon({
                className: 'custom-leaflet-icon',
                html: markerHtml,
                iconSize: [20, 20],
                iconAnchor: [10, 10]
              });

              const marker = L.marker([lat, lng], { icon: customIcon }).addTo(map);

              if (!isTracking) {
                // Add a dim overlay if not currently broadcasting
                const stopOverlay = document.createElement('div');
                stopOverlay.className = 'absolute inset-0 bg-black/60 flex items-center justify-center z-[400] backdrop-blur-[2px]';
                stopOverlay.innerHTML = `
                  <div class="text-center">
                    <i data-lucide="map-pin-off" class="h-8 w-8 text-white/30 mx-auto mb-3"></i>
                    <p class="text-white/70 text-sm font-medium">Tracking Disabled by Faculty.</p>
                  </div>
                `;
                mapEl.appendChild(stopOverlay);
                if (window.lucide) window.lucide.createIcons();
              } else {
                // Setup Realtime Subscription
                // Use a unique channel name to prevent "already subscribed" errors on page re-entry
                const channelName = 'faculty-location-' + Date.now();
                const subscription = window.supabaseClient
                  .channel(channelName)
                  .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'faculty', filter: "id=eq.cs1" }, (payload) => {
                    console.log('Realtime location update received:', payload);
                    const newLat = payload.new.latitude;
                    const newLng = payload.new.longitude;
                    const newTracking = payload.new.is_tracking;

                    if (newTracking && newLat && newLng) {
                      // Animate marker to new position
                      marker.setLatLng([newLat, newLng]);
                      map.setView([newLat, newLng], map.getZoom(), { animate: true, duration: 1 });
                    } else {
                      // Faculty stopped tracking, refresh the UI
                      handleRoute();
                    }
                  })
                  .subscribe();

                // Clean up subscription when leaving the page
                const cleanup = () => {
                  window.supabaseClient.removeChannel(subscription);
                  window.removeEventListener('hashchange', cleanup);
                };
                window.addEventListener('hashchange', cleanup);
              }
            } catch (err) {
              console.error("Map rendering error:", err);
              mapEl.innerHTML = `<div class="p-4 text-red-500 font-ibm-mono text-xs overflow-auto h-full w-full">Error: ${err.message}<br/>${err.stack}</div>`;
            }
          };

          checkTrackingStatus();
        }
      }

      // Announcements Logic
      const btnAddAnnouncement = document.getElementById('btn-add-announcement');
      const modalAnnouncement = document.getElementById('modal-post-announcement');
      const formAnnouncement = document.getElementById('announcement-form');
      const listAnnouncement = document.getElementById('faculty-announcements-list');

      let allAnnouncements = JSON.parse(localStorage.getItem('vvce_announcements') || '{}');

      // Seed a demo announcement if empty
      if (!allAnnouncements[params]) {
        allAnnouncements[params] = [
          {
            id: 'demo-ann-1',
            date: new Date().toISOString(),
            text: "Reminder: Tomorrow's class will be held in the main auditorium for a guest lecture on IoT. Attendance is mandatory.",
            audience: '4th Sem ECE'
          }
        ];
        localStorage.setItem('vvce_announcements', JSON.stringify(allAnnouncements));
      }

      const renderAnnouncements = () => {
        if (!listAnnouncement) return;
        const facultyAnnouncements = allAnnouncements[params] || [];
        if (facultyAnnouncements.length === 0) {
          listAnnouncement.innerHTML = '<p class="font-dm-sans text-[13px] text-[var(--text-muted)] italic">No announcements posted yet.</p>';
          return;
        }

        listAnnouncement.innerHTML = facultyAnnouncements.map(a => `
          <div class="bg-[var(--surface-2)] border border-[var(--border)] rounded-xl p-4 flex flex-col gap-2 relative group hover:border-[var(--accent)] transition-colors">
            <div class="flex justify-between items-center">
              ${a.audience ? `<span class="font-ibm-mono text-[10px] uppercase tracking-wider text-[var(--accent)] bg-[var(--accent-dim)] px-2 py-1 rounded-full border border-[var(--accent-glow)]">${a.audience}</span>` : '<div></div>'}
              <span class="font-ibm-mono text-[10px] text-[var(--text-muted)]">${new Date(a.date).toLocaleDateString()}</span>
            </div>
            <p class="font-dm-sans text-[14px] text-[var(--text-primary)] mt-1 whitespace-pre-wrap">${a.text}</p>
          </div>
        `).reverse().join('');
      };

      renderAnnouncements();

      if (btnAddAnnouncement) {
        btnAddAnnouncement.addEventListener('click', () => {
          modalAnnouncement.classList.remove('hidden');
          modalAnnouncement.classList.add('flex');
        });
      }

      ['close-announcement-modal-btn', 'close-announcement-modal-bg', 'btn-cancel-announcement'].forEach(btnId => {
        const el = document.getElementById(btnId);
        if (el) el.addEventListener('click', () => {
          modalAnnouncement.classList.add('hidden');
          modalAnnouncement.classList.remove('flex');
        });
      });

      if (formAnnouncement) {
        formAnnouncement.addEventListener('submit', (e) => {
          e.preventDefault();
          const text = document.getElementById('announcement-text').value;
          const sem = document.getElementById('announcement-sem').value;
          const branch = document.getElementById('announcement-branch').value;
          const section = document.getElementById('announcement-section').value;

          let audienceParts = [];
          if (sem !== 'All') audienceParts.push(sem);
          if (branch !== 'All') audienceParts.push(branch);
          if (section !== 'All') audienceParts.push('Sec ' + section);

          const audience = audienceParts.length > 0 ? audienceParts.join(' ') : 'All Students';

          if (!allAnnouncements[params]) allAnnouncements[params] = [];
          allAnnouncements[params].push({
            id: Date.now().toString(),
            date: new Date().toISOString(),
            text,
            audience
          });

          localStorage.setItem('vvce_announcements', JSON.stringify(allAnnouncements));

          formAnnouncement.reset();
          modalAnnouncement.classList.add('hidden');
          modalAnnouncement.classList.remove('flex');
          renderAnnouncements();
        });
      }
    } else if (page === 'lost-and-found') {
      const grid = document.getElementById('lf-grid');
      const addModal = document.getElementById('add-lf-modal');
      const viewModal = document.getElementById('view-lf-modal');
      const searchInput = document.getElementById('lf-search');

      let allItems = [];

      const renderItems = (query = '') => {
        if (!grid) return;
        const filtered = allItems.filter(item =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.location.toLowerCase().includes(query.toLowerCase())
        );

        if (filtered.length === 0) {
          grid.innerHTML = '<div class="col-span-full py-12 text-center text-[var(--text-muted)] font-dm-sans">No items found.</div>';
          return;
        }

        grid.innerHTML = filtered.map(item => {
          const typeColor = item.type === 'lost' ? 'bg-[rgba(240,82,82,0.1)] text-[var(--danger)]' : 'bg-[rgba(62,207,142,0.1)] text-[var(--success)]';
          const dateStr = new Date(item.created_at).toLocaleDateString();
          return `
            <div class="card-global p-6 flex flex-col cursor-pointer hover:border-[var(--accent)] transition-colors lf-card" data-id="${item.id}">
              <div class="flex justify-between items-center mb-6">
                <span class="font-dm-sans text-[12px] px-[10px] py-[4px] rounded-full uppercase tracking-wider font-semibold ${typeColor}">${item.type}</span>
                <span class="font-ibm-mono text-[11px] text-[var(--text-muted)]">${dateStr}</span>
              </div>
              <h3 class="font-syne font-semibold text-[18px] text-[var(--text-primary)] mb-1">${item.title}</h3>
              <p class="font-dm-sans text-[13px] text-[var(--accent)] mb-4 flex items-center gap-1"><i data-lucide="map-pin" class="w-3 h-3"></i> ${item.location}</p>
              <p class="font-dm-sans text-[14px] text-[var(--text-secondary)] leading-relaxed flex-1 mb-8 line-clamp-2">${item.description}</p>
              
              <div class="flex justify-between items-center pt-4 border-t border-[var(--border)]">
                <span class="font-ibm-mono text-[11px] text-[var(--text-muted)] uppercase tracking-wider">Status: ${item.status}</span>
                <span class="font-dm-sans text-[13px] font-medium text-[var(--purple)]">View Details &rarr;</span>
              </div>
            </div>
          `;
        }).join('');

        if (window.lucide) window.lucide.createIcons();

        // Add click listeners to cards
        document.querySelectorAll('.lf-card').forEach(card => {
          card.addEventListener('click', () => {
            const id = card.getAttribute('data-id');
            const item = allItems.find(i => i.id === id);
            if (item && viewModal) {
              document.getElementById('view-lf-title').textContent = item.title;
              document.getElementById('view-lf-desc').textContent = item.description;
              document.getElementById('view-lf-location').querySelector('span').textContent = item.location;

              const typeSpan = document.getElementById('view-lf-type');
              typeSpan.textContent = item.type;
              typeSpan.className = 'font-dm-sans text-[12px] px-[10px] py-[4px] rounded-full uppercase tracking-wider font-semibold ' + (item.type === 'lost' ? 'bg-[rgba(240,82,82,0.1)] text-[var(--danger)]' : 'bg-[rgba(62,207,142,0.1)] text-[var(--success)]');

              document.getElementById('view-lf-date').textContent = new Date(item.created_at).toLocaleDateString();

              document.getElementById('view-lf-contact-name').textContent = item.contact_name;
              const contactNumEl = document.getElementById('view-lf-contact-number');
              contactNumEl.textContent = item.contact_number;
              contactNumEl.href = 'tel:' + item.contact_number;

              const imgContainer = document.getElementById('view-lf-image-container');
              const imgEl = document.getElementById('view-lf-image');
              if (item.image_url) {
                const { data: pubData } = window.supabaseClient.storage.from('lost_and_found_images').getPublicUrl(item.image_url);
                imgEl.src = pubData.publicUrl;
                imgContainer.classList.remove('hidden');
                document.getElementById('view-lf-close-btn').classList.add('hidden');
              } else {
                imgContainer.classList.add('hidden');
                document.getElementById('view-lf-close-btn').classList.remove('hidden');
              }

              viewModal.classList.remove('hidden');
            }
          });
        });
      };

      const fetchItems = async () => {
        if (!window.supabaseClient) {
          if (grid) grid.innerHTML = '<div class="col-span-full py-12 text-center text-red-500 font-ibm-mono text-sm">Database connection error.</div>';
          return;
        }
        try {
          const { data, error } = await window.supabaseClient.from('lost_and_found').select('*').order('created_at', { ascending: false });
          if (!error && data) {
            allItems = data;
            renderItems(searchInput?.value || '');
          } else if (error) {
            console.error("Supabase Error:", error);
          }
        } catch (err) {
          console.error("Error fetching lost and found:", err);
        }
      };

      fetchItems();

      if (searchInput) {
        searchInput.addEventListener('input', (e) => renderItems(e.target.value));
      }

      // Modal Logic
      const btnReport = document.getElementById('btn-report-lf');
      const lfForm = document.getElementById('lf-form');
      const imgInput = document.getElementById('lf-image');
      const imgPreview = document.getElementById('lf-image-preview');
      const imgPlaceholder = document.getElementById('lf-image-placeholder');

      if (btnReport) {
        btnReport.addEventListener('click', () => {
          if (!window.State.user) {
            alert('Please login as a Student or Faculty to report an item.');
            window.location.hash = '#login';
            return;
          }
          addModal.classList.remove('hidden');
        });
      }

      if (imgInput) {
        imgInput.addEventListener('change', (e) => {
          const file = e.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = (ev) => {
              imgPreview.src = ev.target.result;
              imgPreview.classList.remove('hidden');
              imgPlaceholder.classList.add('hidden');
            };
            reader.readAsDataURL(file);
          }
        });
      }

      if (lfForm) {
        lfForm.addEventListener('submit', async (e) => {
          e.preventDefault();
          const btnSubmit = document.getElementById('lf-submit-btn');
          const originalText = btnSubmit.textContent;
          btnSubmit.textContent = 'Submitting...';
          btnSubmit.disabled = true;

          try {
            let imagePath = null;
            if (imgInput.files && imgInput.files.length > 0) {
              const file = imgInput.files[0];
              const fileExt = file.name.split('.').pop();
              const fileName = Date.now() + '-' + Math.random().toString(36).substring(2) + '.' + fileExt;

              const { data: uploadData, error: uploadError } = await window.supabaseClient.storage
                .from('lost_and_found_images')
                .upload(fileName, file);

              if (uploadError) throw uploadError;
              imagePath = uploadData.path;
            }

            const type = document.querySelector('input[name="type"]:checked').value;
            const newItem = {
              type,
              title: document.getElementById('lf-title').value,
              location: document.getElementById('lf-location').value,
              description: document.getElementById('lf-desc').value,
              contact_name: document.getElementById('lf-name').value,
              contact_number: document.getElementById('lf-number').value,
              image_url: imagePath,
              status: 'unresolved'
            };

            const { error } = await window.supabaseClient.from('lost_and_found').insert([newItem]);
            if (error) throw error;

            addModal.classList.add('hidden');
            lfForm.reset();
            imgPreview.classList.add('hidden');
            imgPreview.src = '';
            imgPlaceholder.classList.remove('hidden');

            await fetchItems();
          } catch (err) {
            console.error("Error submitting report:", err);
            alert("Failed to submit report. Please try again.");
          } finally {
            btnSubmit.textContent = originalText;
            btnSubmit.disabled = false;
          }
        });
      }
    } else if (page === 'notes') {
      const grid = document.getElementById('notes-grid');
      const searchInput = document.getElementById('notes-search');
      const semesterSelect = document.getElementById('notes-semester');
      const btnUpload = document.getElementById('btn-upload-notes');
      const modalUpload = document.getElementById('modal-upload-notes');
      const modalClose = document.getElementById('modal-upload-notes-close');
      const formUpload = document.getElementById('notes-upload-form');
      const fileInput = document.getElementById('note-file');
      const fileDisplay = document.getElementById('file-name-display');

      let allNotes = [];

      const renderNotes = () => {
        if (!grid) return;
        const query = (searchInput?.value || '').toLowerCase();
        const sem = semesterSelect?.value || '';

        const filtered = allNotes.filter(n => {
          const matchQuery = n.title.toLowerCase().includes(query) ||
            n.subject.toLowerCase().includes(query) ||
            n.department.toLowerCase().includes(query);
          const matchSem = sem ? n.semester.toString() === sem : true;
          return matchQuery && matchSem;
        });

        if (filtered.length === 0) {
          grid.innerHTML = '<div class="col-span-full py-12 text-center text-[var(--text-muted)] font-dm-sans">No notes found.</div>';
          return;
        }

        grid.innerHTML = filtered.map(n => {
          const dateStr = new Date(n.created_at).toLocaleDateString();
          return `
            <div class="card-global p-6 flex flex-col hover:border-[var(--accent)] transition-colors">
              <div class="flex justify-between items-start mb-4">
                <span class="font-dm-sans text-[11px] px-[8px] py-[2px] rounded-full bg-[var(--accent-dim)] text-[var(--accent)] uppercase tracking-wider font-semibold border border-[var(--accent-glow)]">Sem ${n.semester}</span>
                <span class="font-ibm-mono text-[11px] text-[var(--text-muted)]">${dateStr}</span>
              </div>
              <h3 class="font-syne font-semibold text-[18px] text-[var(--text-primary)] mb-1">${n.title}</h3>
              <p class="font-dm-sans text-[14px] text-[var(--text-secondary)] mb-4">${n.subject}</p>
              
              <div class="mt-auto pt-4 border-t border-[var(--border)] flex justify-between items-center">
                <div class="flex flex-col">
                  <span class="font-ibm-mono text-[10px] text-[var(--text-muted)] uppercase">Dept: ${n.department}</span>
                  ${n.uploader_name ? `<span class="font-ibm-mono text-[10px] text-[var(--text-muted)]">By: ${n.uploader_name}</span>` : ''}
                </div>
                <a href="${n.file_url}" target="_blank" class="btn-icon bg-[rgba(62,207,142,0.1)] text-[var(--success)] hover:bg-[rgba(62,207,142,0.2)] w-8 h-8 rounded-full flex items-center justify-center transition-colors">
                  <i data-lucide="download" class="w-4 h-4"></i>
                </a>
              </div>
            </div>
          `;
        }).join('');

        if (window.lucide) window.lucide.createIcons();
      };

      const fetchNotes = async () => {
        if (!window.supabaseClient) return;
        try {
          const { data, error } = await window.supabaseClient.from('notes').select('*').order('created_at', { ascending: false });
          if (!error && data) {
            allNotes = data;
            renderNotes();
          }
        } catch (err) {
          console.error("Error fetching notes:", err);
        }
      };

      fetchNotes();

      if (searchInput) searchInput.addEventListener('input', renderNotes);
      if (semesterSelect) semesterSelect.addEventListener('change', renderNotes);

      // Modal Logic
      if (btnUpload) {
        btnUpload.addEventListener('click', () => {
          if (!window.State.user) {
            alert('Please login as a Student or Faculty to upload notes.');
            window.location.hash = '#login';
            return;
          }
          modalUpload.classList.remove('hidden');
        });
      }

      if (modalClose) {
        modalClose.addEventListener('click', () => {
          modalUpload.classList.add('hidden');
        });
      }

      if (fileInput) {
        fileInput.addEventListener('change', (e) => {
          const file = e.target.files[0];
          if (file) {
            fileDisplay.innerHTML = `<span class="font-medium text-[var(--text-primary)]">${file.name}</span>`;
          } else {
            fileDisplay.innerHTML = '<span class="font-medium text-[var(--accent)]">Click to upload</span> or drag and drop';
          }
        });
      }

      if (formUpload) {
        formUpload.addEventListener('submit', async (e) => {
          e.preventDefault();
          const btnSubmit = document.getElementById('btn-submit-note');
          const originalText = btnSubmit.textContent;
          btnSubmit.textContent = 'Uploading...';
          btnSubmit.disabled = true;

          try {
            let fileUrl = null;
            if (fileInput.files && fileInput.files.length > 0) {
              const file = fileInput.files[0];
              const fileExt = file.name.split('.').pop();
              const fileName = Date.now() + '-' + Math.random().toString(36).substring(2) + '.' + fileExt;

              const { data: uploadData, error: uploadError } = await window.supabaseClient.storage
                .from('study_notes')
                .upload(fileName, file);

              if (uploadError) throw uploadError;

              const { data: publicUrlData } = window.supabaseClient.storage
                .from('study_notes')
                .getPublicUrl(fileName);

              fileUrl = publicUrlData.publicUrl;
            } else {
              throw new Error("File is required");
            }

            const newNote = {
              title: document.getElementById('note-title').value,
              subject: document.getElementById('note-subject').value,
              department: document.getElementById('note-department').value,
              semester: parseInt(document.getElementById('note-semester').value, 10),
              uploader_name: window.State.user?.id || 'Anonymous',
              file_url: fileUrl
            };

            const { error } = await window.supabaseClient.from('notes').insert([newNote]);
            if (error) throw error;

            modalUpload.classList.add('hidden');
            formUpload.reset();
            fileDisplay.innerHTML = '<span class="font-medium text-[var(--accent)]">Click to upload</span> or drag and drop';

            await fetchNotes();
          } catch (err) {
            console.error("Error submitting note:", err);
            alert("Failed to upload note. Please try again.");
          } finally {
            btnSubmit.textContent = originalText;
            btnSubmit.disabled = false;
          }
        });
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

  // Close notifications if clicked outside
  document.addEventListener('click', (e) => {
    const dropdown = document.getElementById('notifications-dropdown');
    const btn = document.getElementById('notifications-btn');
    if (dropdown && !dropdown.classList.contains('hidden')) {
      if (!dropdown.contains(e.target) && (!btn || !btn.contains(e.target))) {
        dropdown.classList.add('hidden');
      }
    }
  });

  // Initial load
  handleRoute();
});
