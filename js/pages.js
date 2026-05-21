// Page Templates returning HTML strings

window.Pages = {
  login: () => `
    <div class="relative z-10 flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 h-full min-h-screen">
      <!-- Subtle Grid Background -->
      <div class="absolute inset-0 grid-bg opacity-30 pointer-events-none z-[-1]"></div>
      
      <div class="w-full max-w-[440px] flex flex-col items-center">
        <!-- Content Card -->
        <div class="w-full bg-[var(--surface)] border border-[var(--border)] rounded-[20px] p-[48px] shadow-2xl relative">
          
          <!-- Header -->
          <div class="flex flex-col items-center text-center mb-10">
            <i data-lucide="lock" class="h-[32px] w-[32px] text-[var(--accent)] mb-6"></i>
            <h2 class="font-syne font-bold text-[32px] text-[var(--text-primary)] mb-2">Campus Login</h2>
            <p class="font-dm-sans text-[14px] text-[var(--text-secondary)]">Authenticate with your Institutional ID.</p>
          </div>

          <!-- Form -->
          <form id="loginForm" class="flex flex-col">
            <div class="flex flex-col mb-6">
              <label for="id-input" class="font-dm-sans text-[12px] uppercase tracking-widest text-[var(--text-muted)] mb-[8px] font-medium">
                Identity Number
              </label>
              <input
                id="id-input"
                name="id"
                type="text"
                required
                class="input-global uppercase"
                placeholder="4VV... or FAC..."
              />
              
              <!-- Error State -->
              <div id="loginError" class="hidden items-center mt-3 border-l-[3px] border-[var(--danger)] pl-3">
                <p class="font-dm-sans text-[13px] text-[var(--danger)]">Invalid ID format.</p>
              </div>
            </div>

            <div id="passwordWrapper" class="flex flex-col mb-6 hidden">
              <label for="password-input" class="font-dm-sans text-[12px] uppercase tracking-widest text-[var(--text-muted)] mb-[8px] font-medium">
                Password
              </label>
              <input
                id="password-input"
                name="password"
                type="password"
                class="input-global"
                placeholder="Enter password"
              />
            </div>

            <button type="submit" class="btn-primary w-full justify-between items-center px-6">
              <span>Sign In</span>
              <span>&rarr;</span>
            </button>
          </form>

          <!-- Footer -->
          <div class="mt-10 pt-6 border-t border-[var(--border)] flex flex-col items-center gap-2">
            <span class="font-dm-sans text-[11px] text-[var(--text-muted)]">Test credentials:</span>
            <div class="flex items-center gap-2 font-ibm-mono text-[12px] text-[var(--accent)]">
              <span>4VV22CS</span>
              <span class="text-[var(--text-muted)]">&bull;</span>
              <span>FAC123</span>
              <span class="text-[var(--text-muted)]">&bull;</span>
              <span>ADMIN</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,

  home: () => `
    <div class="relative z-10 flex flex-col min-h-[calc(100vh-64px)] overflow-x-hidden">
      
      <!-- Subtle Grid & Radial Glow & Floating Orbs -->
      <div class="absolute inset-0 grid-bg opacity-100 pointer-events-none z-[-2]"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--accent)] opacity-[0.05] blur-[100px] pointer-events-none z-[-1]"></div>
      <div class="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-[#64CEFB] opacity-[0.08] blur-[80px] pointer-events-none z-[-1] animate-float-1"></div>
      <div class="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#8B6CF7] opacity-[0.08] blur-[100px] pointer-events-none z-[-1] animate-float-2"></div>
      
      <!-- Hero Section -->
      <main class="flex flex-1 flex-col items-center justify-center text-center px-6 w-full h-full min-h-[85vh] relative z-10 pt-10">
        
        <div class="hero-item inline-flex items-center gap-2 px-[16px] py-[8px] border border-[var(--border)] bg-[var(--surface)]/50 backdrop-blur-md rounded-full mb-8 shadow-lg">
          <span class="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse shadow-[0_0_8px_var(--accent-glow)]"></span>
          <span class="font-dm-sans text-[11px] md:text-[12px] uppercase tracking-[0.15em] text-[var(--text-secondary)] font-semibold">VVCE Campus Navigator</span>
        </div>
        
        <h1 class="hero-item block font-syne font-bold text-[46px] md:text-[64px] lg:text-[88px] leading-[1.05] text-[var(--text-primary)] tracking-tight">
          Locate Your
        </h1>
        <h1 class="hero-item block font-syne font-bold text-[46px] md:text-[64px] lg:text-[88px] leading-[1.05] text-[var(--accent)] shiny-text mb-6 md:mb-8 tracking-tight">
          Professor.
        </h1>

        <p class="hero-item font-dm-sans text-[15px] md:text-[18px] text-[var(--text-secondary)] max-w-[500px] mx-auto mb-10 md:mb-12 leading-relaxed px-4">
          Instantly find cabin locations, check availability, and get contact details for all VVCE faculty in one smart portal.
        </p>

        <div class="hero-item flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-12 w-full max-w-[400px] md:max-w-none mx-auto">
          <a href="#departments" class="w-full md:w-auto btn-primary text-[16px] py-4 px-8 shadow-[0_0_20px_var(--accent-glow)] hover:shadow-[0_0_30px_var(--accent-glow)] group">
            <span class="flex items-center justify-center gap-2">Search Faculty <i data-lucide="arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform"></i></span>
          </a>
          <a href="#campus-map" class="w-full md:w-auto btn-outline text-[16px] py-4 px-8 bg-[var(--surface)] hover:bg-[var(--surface-2)]">
            <span class="flex items-center justify-center gap-2"><i data-lucide="map" class="w-4 h-4"></i> View Map</span>
          </a>
        </div>
      </main>

      <!-- 1. Live Campus Statistics -->
      <section class="w-full border-t border-[var(--border)] bg-[var(--surface)] relative z-10 py-12">
        <div class="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 divide-x divide-[var(--border)]">
            <div class="flex flex-col items-center text-center px-4">
              <span class="font-syne font-bold text-[36px] text-[var(--accent)] mb-1">250+</span>
              <span class="font-dm-sans text-[13px] text-[var(--text-secondary)] uppercase tracking-wider font-medium">Expert Faculty</span>
            </div>
            <div class="flex flex-col items-center text-center px-4">
              <span class="font-syne font-bold text-[36px] text-[var(--accent)] mb-1">7+</span>
              <span class="font-dm-sans text-[13px] text-[var(--text-secondary)] uppercase tracking-wider font-medium">Departments</span>
            </div>
            <div class="flex flex-col items-center text-center px-4">
              <span class="font-syne font-bold text-[36px] text-[var(--accent)] mb-1">10k+</span>
              <span class="font-dm-sans text-[13px] text-[var(--text-secondary)] uppercase tracking-wider font-medium">Study Notes</span>
            </div>
            <div class="flex flex-col items-center text-center px-4">
              <span class="font-syne font-bold text-[36px] text-[var(--accent)] mb-1">15+</span>
              <span class="font-dm-sans text-[13px] text-[var(--text-secondary)] uppercase tracking-wider font-medium">Student Clubs</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. Campus Buzz -->
      <section class="w-full border-t border-[var(--border)] bg-[var(--bg)] relative z-10 py-24">
        <div class="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div class="mb-12 flex justify-between items-end">
            <div>
              <h2 class="font-syne font-semibold text-[13px] uppercase tracking-[0.12em] text-[var(--accent)] mb-4">Campus Buzz</h2>
              <p class="font-syne font-semibold text-[32px] md:text-[40px] text-[var(--text-primary)]">Upcoming Events.</p>
            </div>
            <a href="#events" class="hidden md:flex items-center gap-2 text-[14px] font-dm-sans text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
              View all events <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </a>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="card-global p-8 rounded-[24px] relative overflow-hidden group">
              <div class="absolute top-0 right-0 w-32 h-32 bg-[var(--accent)]/10 rounded-full blur-[40px] -mr-10 -mt-10"></div>
              <div class="flex justify-between items-start mb-6 relative z-10">
                <span class="px-3 py-1 bg-[rgba(62,207,142,0.1)] text-[var(--success)] text-[11px] uppercase tracking-wider font-ibm-mono rounded-full border border-[rgba(62,207,142,0.2)]">Hackathon</span>
                <span class="text-[13px] font-dm-sans text-[var(--text-muted)] flex items-center gap-2"><i data-lucide="calendar" class="w-4 h-4"></i> Next Week</span>
              </div>
              <h3 class="font-syne font-bold text-[24px] text-[var(--text-primary)] mb-3 relative z-10">FUSION X 1.0</h3>
              <p class="font-dm-sans text-[15px] text-[var(--text-secondary)] mb-8 relative z-10 line-clamp-2">The ultimate 24-hour national level hackathon. Build, innovate, and conquer.</p>
              <a href="#events" class="inline-flex items-center gap-2 text-[14px] font-dm-sans text-[var(--accent)] font-medium group-hover:underline relative z-10">Register Now &rarr;</a>
            </div>

            <div class="card-global p-8 rounded-[24px] relative overflow-hidden group">
              <div class="absolute top-0 right-0 w-32 h-32 bg-[var(--purple)]/10 rounded-full blur-[40px] -mr-10 -mt-10"></div>
              <div class="flex justify-between items-start mb-6 relative z-10">
                <span class="px-3 py-1 bg-[rgba(139,108,247,0.1)] text-[var(--purple)] text-[11px] uppercase tracking-wider font-ibm-mono rounded-full border border-[rgba(139,108,247,0.2)]">Workshop</span>
                <span class="text-[13px] font-dm-sans text-[var(--text-muted)] flex items-center gap-2"><i data-lucide="calendar" class="w-4 h-4"></i> In 2 Days</span>
              </div>
              <h3 class="font-syne font-bold text-[24px] text-[var(--text-primary)] mb-3 relative z-10">AI & Web3 Seminar</h3>
              <p class="font-dm-sans text-[15px] text-[var(--text-secondary)] mb-8 relative z-10 line-clamp-2">Learn about the future of artificial intelligence and decentralized web technologies.</p>
              <a href="#events" class="inline-flex items-center gap-2 text-[14px] font-dm-sans text-[var(--accent)] font-medium group-hover:underline relative z-10">Register Now &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. Quick Access Portals -->
      <section class="w-full border-t border-[var(--border)] bg-[var(--surface)] relative z-10 py-24">
        <div class="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div class="mb-12">
            <h2 class="font-syne font-semibold text-[13px] uppercase tracking-[0.12em] text-[var(--accent)] mb-4">Quick Links</h2>
            <p class="font-syne font-semibold text-[32px] md:text-[40px] text-[var(--text-primary)]">Explore the Campus.</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="#notes" class="card-global p-8 flex flex-col group hover:border-[var(--accent)] transition-all hover:-translate-y-1">
              <div class="w-12 h-12 rounded-xl bg-[rgba(62,207,142,0.1)] text-[var(--success)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i data-lucide="book-open" class="w-6 h-6"></i>
              </div>
              <h3 class="font-syne font-bold text-[20px] text-[var(--text-primary)] mb-2">Study Hub</h3>
              <p class="font-dm-sans text-[14px] text-[var(--text-secondary)] mb-6 flex-1">Access thousands of PDF notes shared by top students.</p>
              <span class="text-[13px] font-dm-sans text-[var(--accent)] font-medium">Browse Notes &rarr;</span>
            </a>
            
            <a href="#lost-and-found" class="card-global p-8 flex flex-col group hover:border-[var(--accent)] transition-all hover:-translate-y-1">
              <div class="w-12 h-12 rounded-xl bg-[rgba(240,82,82,0.1)] text-[var(--danger)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i data-lucide="search" class="w-6 h-6"></i>
              </div>
              <h3 class="font-syne font-bold text-[20px] text-[var(--text-primary)] mb-2">Lost & Found</h3>
              <p class="font-dm-sans text-[14px] text-[var(--text-secondary)] mb-6 flex-1">Report or claim lost items across the college campus instantly.</p>
              <span class="text-[13px] font-dm-sans text-[var(--accent)] font-medium">Check Items &rarr;</span>
            </a>
            
            <a href="#campus-map" class="card-global p-8 flex flex-col group hover:border-[var(--accent)] transition-all hover:-translate-y-1">
              <div class="w-12 h-12 rounded-xl bg-[rgba(139,108,247,0.1)] text-[var(--purple)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i data-lucide="map" class="w-6 h-6"></i>
              </div>
              <h3 class="font-syne font-bold text-[20px] text-[var(--text-primary)] mb-2">Campus Map</h3>
              <p class="font-dm-sans text-[14px] text-[var(--text-secondary)] mb-6 flex-1">Find any block, lab, or faculty cabin effortlessly.</p>
              <span class="text-[13px] font-dm-sans text-[var(--accent)] font-medium">View Map &rarr;</span>
            </a>
          </div>
        </div>
      </section>

      <!-- 3. Featured Clubs -->
      <section class="w-full border-t border-[var(--border)] bg-[var(--bg)] relative z-10 py-24">
        <div class="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div class="mb-12 flex justify-between items-end">
            <div>
              <h2 class="font-syne font-semibold text-[13px] uppercase tracking-[0.12em] text-[var(--accent)] mb-4">Student Life</h2>
              <p class="font-syne font-semibold text-[32px] md:text-[40px] text-[var(--text-primary)]">Featured Clubs.</p>
            </div>
            <a href="#departments" class="hidden md:flex items-center gap-2 text-[14px] font-dm-sans text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
              Explore all clubs <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </a>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="#clubs/shiksha" class="card-global flex flex-col p-6 cursor-pointer group">
              <div class="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-[rgba(62,207,142,0.1)] text-[var(--success)] group-hover:scale-110 transition-transform">
                <i data-lucide="heart" class="w-6 h-6"></i>
              </div>
              <h3 class="font-syne font-bold text-[20px] text-[var(--text-primary)] mb-2">Shiksha</h3>
              <p class="font-dm-sans text-[14px] text-[var(--text-secondary)] line-clamp-2 mb-6 flex-1">A venture of VVCE to spread social awareness to young budding minds through inspiring hearts.</p>
              <div class="flex items-center justify-between mt-auto pt-4 border-t border-[var(--border)]">
                <span class="font-ibm-mono text-[11px] text-[var(--text-muted)] uppercase tracking-wider">Social Service</span>
                <span class="text-[13px] text-[var(--accent)] font-medium font-dm-sans">View &rarr;</span>
              </div>
            </a>
            
            <a href="#clubs/ieee" class="card-global flex flex-col p-6 cursor-pointer group">
              <div class="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-[rgba(66,133,244,0.1)] text-[#4285F4] group-hover:scale-110 transition-transform">
                <i data-lucide="zap" class="w-6 h-6"></i>
              </div>
              <h3 class="font-syne font-bold text-[20px] text-[var(--text-primary)] mb-2">IEEE VVCE</h3>
              <p class="font-dm-sans text-[14px] text-[var(--text-secondary)] line-clamp-2 mb-6 flex-1">Technical activities devoted to the application of electronics and electrical sciences.</p>
              <div class="flex items-center justify-between mt-auto pt-4 border-t border-[var(--border)]">
                <span class="font-ibm-mono text-[11px] text-[var(--text-muted)] uppercase tracking-wider">Technical</span>
                <span class="text-[13px] text-[var(--accent)] font-medium font-dm-sans">View &rarr;</span>
              </div>
            </a>
            
            <a href="#clubs/mindmesh" class="card-global flex flex-col p-6 cursor-pointer group">
              <div class="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-[rgba(240,162,42,0.1)] text-[var(--warning)] group-hover:scale-110 transition-transform">
                <i data-lucide="cpu" class="w-6 h-6"></i>
              </div>
              <h3 class="font-syne font-bold text-[20px] text-[var(--text-primary)] mb-2">The Mind Mesh</h3>
              <p class="font-dm-sans text-[14px] text-[var(--text-secondary)] line-clamp-2 mb-6 flex-1">A dynamic ecosystem where students explore ideas and develop technical expertise.</p>
              <div class="flex items-center justify-between mt-auto pt-4 border-t border-[var(--border)]">
                <span class="font-ibm-mono text-[11px] text-[var(--text-muted)] uppercase tracking-wider">Innovation</span>
                <span class="text-[13px] text-[var(--accent)] font-medium font-dm-sans">View &rarr;</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  `,

  directory: () => `
    <div class="relative z-10 mx-auto w-full max-w-[1280px] px-6 lg:px-8 py-12 flex-1 flex flex-col mt-4">
      <div class="mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <h1 class="font-syne font-bold text-[32px] text-[var(--text-primary)]">Faculty Directory</h1>
        
        <div class="relative w-full md:max-w-[360px]">
          <div class="absolute inset-y-0 left-0 pl-[16px] flex items-center pointer-events-none">
            <i data-lucide="search" class="h-[18px] w-[18px] text-[var(--text-muted)]"></i>
          </div>
          <input
            id="faculty-search"
            type="text"
            class="input-global !pl-[42px]"
            placeholder="Search by name or department..."
          />
        </div>
      </div>
      
      <div id="faculty-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="skeleton"></div>
        <div class="skeleton"></div>
        <div class="skeleton"></div>
        <div class="skeleton"></div>
        <div class="skeleton"></div>
        <div class="skeleton"></div>
      </div>
    </div>
  `,

  departments: () => `
    <div class="relative z-10 mx-auto w-full max-w-[1280px] px-6 lg:px-8 py-12 flex-1 flex flex-col mt-4">
      <div class="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6 fade-up" style="animation-delay: 0ms;">
        <div>
          <h1 class="font-syne font-bold text-[32px] text-[var(--text-primary)] mb-2">Departments & Branches</h1>
          <p class="font-dm-sans text-[14px] text-[var(--text-secondary)]">Browse faculty by their specific engineering departments.</p>
        </div>
        
        <div class="relative w-full md:max-w-[360px]">
          <div class="absolute inset-y-0 left-0 pl-[16px] flex items-center pointer-events-none">
            <i data-lucide="search" class="h-[18px] w-[18px] text-[var(--text-muted)]"></i>
          </div>
          <input
            id="global-faculty-search"
            type="text"
            class="input-global !pl-[42px]"
            placeholder="Search all faculty by name..."
          />
        </div>
      </div>
      
      <!-- Global Search Results Container (Hidden by default) -->
      <div id="faculty-search-results" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-up hidden mb-10" style="animation-delay: 50ms;">
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-up" style="animation-delay: 100ms;" id="departments-grid">
        <div class="skeleton"></div>
        <div class="skeleton"></div>
        <div class="skeleton"></div>
        <div class="skeleton"></div>
        <div class="skeleton"></div>
        <div class="skeleton"></div>
      </div>
      
      <div id="departments-clubs-banner" class="mt-12 fade-up" style="animation-delay: 200ms;">
        <!-- Populated by app.js -->
      </div>
    </div>
  `,

  'campus-map': () => `
    <div class="relative z-10 mx-auto w-full max-w-[1280px] px-6 lg:px-8 py-12 flex-1 flex flex-col mt-4">
      <div class="mb-10">
        <h1 class="font-syne font-bold text-[32px] text-[var(--text-primary)] mb-2">Campus Map</h1>
        <p class="font-dm-sans text-[14px] text-[var(--text-secondary)]">Visual directory of VVCE blocks and facilities.</p>
      </div>

      <div class="w-full h-[560px] rounded-[16px] overflow-hidden border border-[var(--border)] bg-[var(--surface)]">
        <iframe
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=8JP9+JF%20Mysuru,%20Karnataka,P.B.%20No.206,%20Kannada%20Sahithya%20Parishath%20Rd,%20III%20Stage,%20Gokulam,%20Mysuru,%20Karnataka%20570017+(Vidyavardhaka%20College)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          class="w-full h-full border-0"
          allowfullscreen
          loading="lazy"
          title="VVCE Campus Map"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  `,

  events: () => `
    <div class="relative z-10 mx-auto w-full max-w-[1280px] px-6 lg:px-8 py-16 flex-1 flex flex-col">
      
      <!-- Hero Header -->
      <div class="relative w-full rounded-[32px] overflow-hidden bg-gradient-to-br from-[var(--surface-2)] to-[var(--bg)] border border-[var(--border)] p-10 md:p-16 mb-12 flex flex-col md:flex-row items-center justify-between gap-8 group shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--accent)]/10 rounded-full blur-[120px] pointer-events-none transform translate-x-1/2 -translate-y-1/2 transition-transform duration-1000 group-hover:scale-110"></div>
        
        <div class="relative z-10 max-w-[600px] text-center md:text-left">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-[var(--accent)] text-sm font-ibm-mono mb-6 backdrop-blur-md">
            <span class="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse shadow-[0_0_8px_var(--accent-glow)]"></span>
            Campus Buzz
          </div>
          <h1 class="font-syne font-bold text-[48px] md:text-[64px] text-[var(--text-primary)] leading-[1.1] mb-6 tracking-tight" id="events-title">Events & Fest</h1>
          <p class="font-dm-sans text-[16px] md:text-[18px] text-[var(--text-secondary)] leading-relaxed mb-8 max-w-[480px] mx-auto md:mx-0">Stay in the loop with the latest technical fests, hackathons, seminars, and vibrant campus activities happening at VVCE.</p>
          <button id="btn-add-event" class="btn-primary shadow-[0_0_20px_var(--accent-glow)] hover:shadow-[0_0_30px_var(--accent-glow)] px-8 py-4 text-[16px] flex items-center justify-center gap-2 md:justify-start mx-auto md:mx-0 transition-all hover:-translate-y-1">
            <i data-lucide="calendar-plus" class="w-5 h-5"></i> Host an Event
          </button>
        </div>
        
        <div class="relative z-10 hidden md:block">
           <div class="w-[280px] h-[280px] relative">
              <div class="absolute inset-0 border border-[var(--accent)]/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div class="absolute inset-4 border border-[var(--purple)]/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              <div class="absolute inset-8 border border-[#64CEFB]/10 rounded-full animate-[spin_8s_linear_infinite]"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                 <div class="w-24 h-24 bg-gradient-to-br from-[var(--surface-2)] to-[var(--bg)] border border-[var(--border)] rounded-2xl flex items-center justify-center shadow-2xl rotate-12 hover:rotate-0 transition-transform duration-500 backdrop-blur-md">
                    <i data-lucide="sparkles" class="w-10 h-10 text-[var(--accent)] drop-shadow-[0_0_10px_var(--accent-glow)]"></i>
                 </div>
              </div>
           </div>
        </div>
      </div>

      <!-- Featured Event Container -->
      <div id="featured-event-container" class="mb-16">
         <!-- Injected by app.js -->
      </div>

      <!-- Upcoming Events Grid -->
      <div class="flex items-center justify-between mb-8 border-b border-[var(--border)] pb-4">
        <h2 class="font-syne font-semibold text-[28px] text-[var(--text-primary)] flex items-center gap-3">
          <i data-lucide="compass" class="w-6 h-6 text-[var(--purple)]"></i> Explore More
        </h2>
      </div>

      <div id="dynamic-events-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-[100px]">
        <!-- Skeletons while loading -->
        <div class="card-global p-6 animate-pulse">
           <div class="w-full h-40 bg-[var(--surface-2)] rounded-lg mb-6"></div>
           <div class="h-6 bg-[var(--surface-2)] rounded w-3/4 mb-4"></div>
           <div class="h-4 bg-[var(--surface-2)] rounded w-full mb-2"></div>
           <div class="h-4 bg-[var(--surface-2)] rounded w-5/6 mb-8"></div>
           <div class="h-10 bg-[var(--surface-2)] rounded-xl w-full"></div>
        </div>
        <div class="card-global p-6 animate-pulse" style="animation-delay: 150ms">
           <div class="w-full h-40 bg-[var(--surface-2)] rounded-lg mb-6"></div>
           <div class="h-6 bg-[var(--surface-2)] rounded w-3/4 mb-4"></div>
           <div class="h-4 bg-[var(--surface-2)] rounded w-full mb-2"></div>
           <div class="h-4 bg-[var(--surface-2)] rounded w-5/6 mb-8"></div>
           <div class="h-10 bg-[var(--surface-2)] rounded-xl w-full"></div>
        </div>
        <div class="card-global p-6 animate-pulse hidden lg:block" style="animation-delay: 300ms">
           <div class="w-full h-40 bg-[var(--surface-2)] rounded-lg mb-6"></div>
           <div class="h-6 bg-[var(--surface-2)] rounded w-3/4 mb-4"></div>
           <div class="h-4 bg-[var(--surface-2)] rounded w-full mb-2"></div>
           <div class="h-4 bg-[var(--surface-2)] rounded w-5/6 mb-8"></div>
           <div class="h-10 bg-[var(--surface-2)] rounded-xl w-full"></div>
        </div>
      </div>
      </div>

      <!-- Upcoming Club Events -->
      <!-- Upcoming Club Events -->
      <div class="mt-[120px] relative">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[var(--accent)]/5 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div class="flex items-center justify-between mb-8 pb-4 border-b border-[var(--border)] relative z-10">
          <h2 class="font-syne font-bold text-[28px] text-[var(--text-primary)] flex items-center gap-4">
            <div class="w-10 h-10 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center shadow-md">
              <i data-lucide="users-2" class="w-5 h-5 text-[#64CEFB]"></i>
            </div>
            Club Events
          </h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
          
          <!-- Card 1 -->
          <div class="group card-global p-8 flex flex-col h-full min-h-[280px] border border-[var(--border)] hover:border-[var(--accent)]/40 hover:shadow-[0_8px_30px_rgba(62,207,142,0.1)] transition-all duration-300 hover:-translate-y-1 relative overflow-hidden bg-gradient-to-b from-[var(--surface-2)] to-transparent">
            <div class="absolute top-0 right-0 w-24 h-24 bg-[var(--accent)]/10 blur-[40px] rounded-full pointer-events-none group-hover:bg-[var(--accent)]/20 transition-colors"></div>
            
            <div class="flex flex-col mb-5 relative z-10">
              <div class="w-12 h-12 rounded-[12px] bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-inner">
                <i data-lucide="code" class="w-6 h-6"></i>
              </div>
              <span class="font-ibm-mono text-[11px] font-bold tracking-widest uppercase text-[var(--accent)] mb-2 flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></span> Technical
              </span>
              <h3 class="font-syne font-bold text-[22px] text-[var(--text-primary)] leading-[1.3] group-hover:text-[var(--accent)] transition-colors">Open Source Contribution Bootcamp</h3>
            </div>
            
            <div class="flex flex-col gap-2 mt-auto pt-6 border-t border-[var(--border)] relative z-10">
              <div class="flex items-center gap-3 text-[14px] text-[var(--text-secondary)]">
                <i data-lucide="calendar-clock" class="w-4 h-4 text-[var(--text-muted)]"></i>
                <span class="font-dm-sans font-medium">Next Wednesday, 4:00 PM</span>
              </div>
              <div class="flex items-center gap-3 text-[14px] text-[var(--text-secondary)]">
                <i data-lucide="map-pin" class="w-4 h-4 text-[var(--text-muted)]"></i>
                <span class="font-dm-sans font-medium">Lab 1, CS Block</span>
              </div>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="group card-global p-8 flex flex-col h-full min-h-[280px] border border-[var(--border)] hover:border-[var(--danger)]/40 hover:shadow-[0_8px_30px_rgba(240,82,82,0.1)] transition-all duration-300 hover:-translate-y-1 relative overflow-hidden bg-gradient-to-b from-[var(--surface-2)] to-transparent">
            <div class="absolute top-0 right-0 w-24 h-24 bg-[var(--danger)]/10 blur-[40px] rounded-full pointer-events-none group-hover:bg-[var(--danger)]/20 transition-colors"></div>
            
            <div class="flex flex-col mb-5 relative z-10">
              <div class="w-12 h-12 rounded-[12px] bg-[var(--danger)]/10 text-[var(--danger)] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-inner">
                <i data-lucide="rocket" class="w-6 h-6"></i>
              </div>
              <span class="font-ibm-mono text-[11px] font-bold tracking-widest uppercase text-[var(--danger)] mb-2 flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-[var(--danger)]"></span> R&D
              </span>
              <h3 class="font-syne font-bold text-[22px] text-[var(--text-primary)] leading-[1.3] group-hover:text-[var(--danger)] transition-colors">Model Rocketry Workshop</h3>
            </div>
            
            <div class="flex flex-col gap-2 mt-auto pt-6 border-t border-[var(--border)] relative z-10">
              <div class="flex items-center gap-3 text-[14px] text-[var(--text-secondary)]">
                <i data-lucide="calendar-clock" class="w-4 h-4 text-[var(--text-muted)]"></i>
                <span class="font-dm-sans font-medium">Friday, 2:00 PM</span>
              </div>
              <div class="flex items-center gap-3 text-[14px] text-[var(--text-secondary)]">
                <i data-lucide="map-pin" class="w-4 h-4 text-[var(--text-muted)]"></i>
                <span class="font-dm-sans font-medium">Mechanical Block</span>
              </div>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="group card-global p-8 flex flex-col h-full min-h-[280px] border border-[var(--border)] hover:border-[var(--purple)]/40 hover:shadow-[0_8px_30px_rgba(139,108,247,0.1)] transition-all duration-300 hover:-translate-y-1 relative overflow-hidden bg-gradient-to-b from-[var(--surface-2)] to-transparent">
            <div class="absolute top-0 right-0 w-24 h-24 bg-[var(--purple)]/10 blur-[40px] rounded-full pointer-events-none group-hover:bg-[var(--purple)]/20 transition-colors"></div>
            
            <div class="flex flex-col mb-5 relative z-10">
              <div class="w-12 h-12 rounded-[12px] bg-[var(--purple)]/10 text-[var(--purple)] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-inner">
                <i data-lucide="users" class="w-6 h-6"></i>
              </div>
              <span class="font-ibm-mono text-[11px] font-bold tracking-widest uppercase text-[var(--purple)] mb-2 flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-[var(--purple)]"></span> Social
              </span>
              <h3 class="font-syne font-bold text-[22px] text-[var(--text-primary)] leading-[1.3] group-hover:text-[var(--purple)] transition-colors">Ideathon: Smart Campus Solutions</h3>
            </div>
            
            <div class="flex flex-col gap-2 mt-auto pt-6 border-t border-[var(--border)] relative z-10">
              <div class="flex items-center gap-3 text-[14px] text-[var(--text-secondary)]">
                <i data-lucide="calendar-clock" class="w-4 h-4 text-[var(--text-muted)]"></i>
                <span class="font-dm-sans font-medium">Saturday, 10:00 AM</span>
              </div>
              <div class="flex items-center gap-3 text-[14px] text-[var(--text-secondary)]">
                <i data-lucide="map-pin" class="w-4 h-4 text-[var(--text-muted)]"></i>
                <span class="font-dm-sans font-medium">Seminar Hall</span>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <!-- Add Event Modal -->
      <div id="add-event-modal" class="fixed inset-0 z-[9999] hidden flex-col overflow-y-auto">
        <div id="close-add-event-modal-bg" class="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer transition-opacity"></div>
        
        <div class="w-full flex min-h-full items-center justify-center p-4 sm:p-6 relative z-10 pointer-events-none">
          <div class="relative w-full max-w-2xl mx-auto bg-[#0d121f] border border-white/10 rounded-[24px] p-8 shadow-[0_0_50px_rgba(0,0,0,0.6)] pointer-events-auto my-8">
            <div class="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
              <h2 class="font-syne font-bold text-[26px] text-white flex items-center gap-3">
                <i data-lucide="calendar-plus" class="w-6 h-6 text-[var(--accent)]"></i>
                Host an Event
              </h2>
              <button id="close-add-event-modal-btn" class="text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-2 transition-all">
                <i data-lucide="x" class="w-5 h-5"></i>
              </button>
            </div>
            
            <form id="add-event-form" class="space-y-6">
              <!-- Poster Upload -->
              <div>
                <label class="block text-sm font-dm-sans text-gray-300 mb-2">Event Poster</label>
                <div class="relative w-full h-[180px] border-2 border-dashed border-white/20 rounded-xl flex flex-col items-center justify-center hover:border-[var(--accent)] transition-colors bg-black/40 cursor-pointer overflow-hidden group">
                  <input type="file" id="event-poster-file" accept="image/*" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                  <div class="flex flex-col items-center pointer-events-none text-gray-400 group-hover:text-[var(--accent)] transition-colors">
                    <i data-lucide="upload-cloud" class="w-10 h-10 mb-3"></i>
                    <span class="text-sm font-medium">Click or drag poster to upload</span>
                    <span class="text-xs text-gray-500 mt-1">16:9 ratio recommended</span>
                  </div>
                  <img id="event-poster-preview" class="absolute inset-0 w-full h-full object-cover hidden pointer-events-none" />
                </div>
              </div>

              <!-- Title & Venue -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-dm-sans text-gray-300 mb-2">Event Title *</label>
                  <input type="text" id="event-title" required class="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] focus:outline-none transition-all" placeholder="E.g. Hackathon 2026">
                </div>
                <div>
                  <label class="block text-sm font-dm-sans text-gray-300 mb-2">Venue</label>
                  <input type="text" id="event-venue" class="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] focus:outline-none transition-all" placeholder="E.g. Main Auditorium">
                </div>
              </div>

              <!-- Date, Time, Duration -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label class="block text-sm font-dm-sans text-gray-300 mb-2">Date</label>
                  <input type="date" id="event-date" class="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] focus:outline-none transition-all text-sm [color-scheme:dark]">
                </div>
                <div>
                  <label class="block text-sm font-dm-sans text-gray-300 mb-2">Time</label>
                  <input type="time" id="event-time" class="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] focus:outline-none transition-all text-sm [color-scheme:dark]">
                </div>
                <div>
                  <label class="block text-sm font-dm-sans text-gray-300 mb-2">Duration</label>
                  <input type="text" id="event-duration" class="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] focus:outline-none transition-all" placeholder="E.g. 2 Hours">
                </div>
              </div>

              <!-- Registration Link -->
              <div>
                <label class="block text-sm font-dm-sans text-gray-300 mb-2">Registration Link <span class="text-gray-500">(Google Form / Website)</span></label>
                <div class="relative">
                  <i data-lucide="link" class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"></i>
                  <input type="url" id="event-link" class="w-full bg-black/50 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] focus:outline-none transition-all" placeholder="https://forms.gle/...">
                </div>
              </div>

              <!-- Description -->
              <div>
                <label class="block text-sm font-dm-sans text-gray-300 mb-2">Description</label>
                <textarea id="event-desc" rows="4" class="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] focus:outline-none transition-all resize-y" placeholder="Describe your event..."></textarea>
              </div>

              <!-- Submit -->
              <div class="pt-6 mt-6 border-t border-white/10 flex justify-end">
                <button type="submit" id="submit-event-btn" class="btn-primary px-8 py-3.5 text-[16px] font-bold flex items-center gap-2 shadow-[0_0_20px_var(--accent-glow)] hover:shadow-[0_0_30px_var(--accent-glow)] hover:-translate-y-1 transition-all">
                  <i data-lucide="check-circle" class="w-5 h-5"></i> Publish Event
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  `,

  'lost-and-found': () => `
    <div class="relative z-10 mx-auto w-full max-w-[1280px] px-6 lg:px-8 py-12 flex-1 flex flex-col mt-4">
      <div class="mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <h1 class="font-syne font-bold text-[36px] text-[var(--text-primary)]">Lost & Found</h1>
        
        <button id="btn-report-lf" class="btn-outline px-6">
          + Report Item
        </button>
      </div>

      <div class="mb-10 relative w-full md:max-w-[360px]">
        <div class="absolute inset-y-0 left-0 pl-[16px] flex items-center pointer-events-none">
          <i data-lucide="search" class="h-[18px] w-[18px] text-[var(--text-muted)]"></i>
        </div>
        <input
          type="text"
          id="lf-search"
          class="input-global !pl-[42px]"
          placeholder="Search items..."
        />
      </div>

      <!-- Dynamic Grid -->
      <div id="lf-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="col-span-full py-12 flex flex-col items-center justify-center text-[var(--text-muted)]">
          <i data-lucide="loader-2" class="w-8 h-8 animate-spin mb-4"></i>
          <p class="font-dm-sans text-sm">Loading items...</p>
        </div>
      </div>
    </div>

    <!-- Add Report Modal -->
    <div id="add-lf-modal" class="fixed inset-0 z-[100] hidden flex items-center justify-center p-4">
      <div class="absolute inset-0 bg-black/60 backdrop-blur-sm modal-backdrop" onclick="document.getElementById('add-lf-modal').classList.add('hidden')"></div>
      <div class="bg-[var(--surface)] border border-[var(--border)] rounded-[20px] w-full max-w-[500px] relative z-10 overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        <div class="p-6 border-b border-[var(--border)] flex justify-between items-center">
          <h3 class="font-syne font-semibold text-[20px] text-[var(--text-primary)]">Report Item</h3>
          <button type="button" class="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors" onclick="document.getElementById('add-lf-modal').classList.add('hidden')">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>
        
        <div class="p-6 overflow-y-auto">
          <form id="lf-form" class="flex flex-col gap-5">
            <div class="flex gap-4 p-1 bg-[var(--surface-2)] rounded-[12px] border border-[var(--border)] w-full">
              <label class="flex-1 text-center relative cursor-pointer">
                <input type="radio" name="type" value="lost" class="peer sr-only" checked>
                <div class="py-2 px-4 rounded-[10px] font-dm-sans text-[14px] font-medium text-[var(--text-secondary)] peer-checked:bg-[rgba(240,82,82,0.1)] peer-checked:text-[var(--danger)] transition-all">
                  I Lost Something
                </div>
              </label>
              <label class="flex-1 text-center relative cursor-pointer">
                <input type="radio" name="type" value="found" class="peer sr-only">
                <div class="py-2 px-4 rounded-[10px] font-dm-sans text-[14px] font-medium text-[var(--text-secondary)] peer-checked:bg-[rgba(62,207,142,0.1)] peer-checked:text-[var(--success)] transition-all">
                  I Found Something
                </div>
              </label>
            </div>

            <div>
              <label class="block font-dm-sans text-[13px] font-medium text-[var(--text-secondary)] mb-2">Item Name</label>
              <input type="text" id="lf-title" required class="input-global" placeholder="e.g. Blue Water Bottle">
            </div>

            <div>
              <label class="block font-dm-sans text-[13px] font-medium text-[var(--text-secondary)] mb-2">Location</label>
              <input type="text" id="lf-location" required class="input-global" placeholder="e.g. CSE Block, 3rd Floor">
            </div>

            <div>
              <label class="block font-dm-sans text-[13px] font-medium text-[var(--text-secondary)] mb-2">Description</label>
              <textarea id="lf-desc" required class="input-global min-h-[100px] resize-y py-3" placeholder="Provide more details about the item..."></textarea>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block font-dm-sans text-[13px] font-medium text-[var(--text-secondary)] mb-2">Your Name</label>
                <input type="text" id="lf-name" required class="input-global" placeholder="Name">
              </div>
              <div>
                <label class="block font-dm-sans text-[13px] font-medium text-[var(--text-secondary)] mb-2">Contact Number</label>
                <input type="tel" id="lf-number" required class="input-global" placeholder="Phone Number">
              </div>
            </div>

            <div>
              <label class="block font-dm-sans text-[13px] font-medium text-[var(--text-secondary)] mb-2">Upload Photo</label>
              <div class="relative w-full h-[120px] rounded-[12px] border-2 border-dashed border-[var(--border)] hover:border-[var(--accent)] transition-colors overflow-hidden group cursor-pointer bg-[var(--surface-2)]">
                <input type="file" id="lf-image" accept="image/*" capture="environment" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20">
                <div class="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-10" id="lf-image-placeholder">
                  <i data-lucide="camera" class="w-6 h-6 text-[var(--text-muted)] group-hover:text-[var(--accent)] mb-2 transition-colors"></i>
                  <span class="font-dm-sans text-[12px] text-[var(--text-secondary)]">Take a photo or choose from gallery</span>
                </div>
                <img id="lf-image-preview" class="absolute inset-0 w-full h-full object-cover hidden z-15" />
              </div>
            </div>

            <div class="pt-2">
              <button type="submit" id="lf-submit-btn" class="btn-primary w-full">Submit Report</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- View Details Modal -->
    <div id="view-lf-modal" class="fixed inset-0 z-[100] hidden flex items-center justify-center p-4">
      <div class="absolute inset-0 bg-black/60 backdrop-blur-sm modal-backdrop" onclick="document.getElementById('view-lf-modal').classList.add('hidden')"></div>
      <div class="bg-[var(--surface)] border border-[var(--border)] rounded-[20px] w-full max-w-[400px] relative z-10 overflow-hidden shadow-2xl flex flex-col">
        <div id="view-lf-image-container" class="w-full h-[250px] bg-[var(--surface-2)] hidden relative">
           <img id="view-lf-image" class="w-full h-full object-cover" src="" alt="Item Image" />
           <button class="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/70 transition-colors" onclick="document.getElementById('view-lf-modal').classList.add('hidden')">
             <i data-lucide="x" class="w-4 h-4"></i>
           </button>
        </div>
        <div class="p-6 relative">
          <button id="view-lf-close-btn" class="absolute top-4 right-4 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors hidden" onclick="document.getElementById('view-lf-modal').classList.add('hidden')">
             <i data-lucide="x" class="w-5 h-5"></i>
          </button>
          
          <div class="flex items-center gap-3 mb-4">
            <span id="view-lf-type" class="font-dm-sans text-[12px] px-[10px] py-[4px] rounded-full uppercase tracking-wider font-semibold"></span>
            <span id="view-lf-date" class="font-ibm-mono text-[11px] text-[var(--text-muted)]"></span>
          </div>
          
          <h3 id="view-lf-title" class="font-syne font-bold text-[24px] text-[var(--text-primary)] mb-1"></h3>
          <p id="view-lf-location" class="font-dm-sans text-[14px] text-[var(--accent)] mb-4 flex items-center gap-1">
            <i data-lucide="map-pin" class="w-4 h-4"></i> <span></span>
          </p>
          
          <p id="view-lf-desc" class="font-dm-sans text-[14px] text-[var(--text-secondary)] leading-relaxed mb-6 pb-6 border-b border-[var(--border)]"></p>
          
          <h4 class="font-syne font-semibold text-[14px] text-[var(--text-primary)] mb-3">Contact Details</h4>
          <div class="flex items-center gap-4 bg-[var(--surface-2)] p-4 rounded-[12px] border border-[var(--border)]">
             <div class="w-10 h-10 rounded-full bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)]">
               <i data-lucide="user" class="w-5 h-5"></i>
             </div>
             <div class="flex-1">
               <p id="view-lf-contact-name" class="font-dm-sans font-medium text-[14px] text-[var(--text-primary)] mb-0.5"></p>
               <a id="view-lf-contact-number" href="#" class="font-ibm-mono text-[13px] text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"></a>
             </div>
          </div>
        </div>
      </div>
    </div>
  `,

  clubs: () => `
    <div class="relative z-10 mx-auto w-full max-w-[1280px] px-6 lg:px-8 py-12 flex-1 flex flex-col mt-4">
      <div class="mb-10">
        <h1 class="font-syne font-bold text-[32px] text-[var(--text-primary)] mb-2">Student Clubs</h1>
        <p class="font-dm-sans text-[14px] text-[var(--text-secondary)]">Discover and join the vibrant student clubs shaping the ecosystem at VVCE.</p>
      </div>

      <div class="flex flex-col md:flex-row gap-6 mb-10 items-start md:items-center justify-between border-b border-[var(--border)] pb-8">
        
        <div class="flex flex-wrap items-center gap-2" id="clubs-filters">
          <!-- Populated by app.js -->
        </div>

        <div class="relative w-full md:max-w-[320px]">
          <div class="absolute inset-y-0 left-0 pl-[16px] flex items-center pointer-events-none">
            <i data-lucide="search" class="h-[16px] w-[16px] text-[var(--text-muted)]"></i>
          </div>
          <input
            id="clubs-search"
            type="text"
            placeholder="Search clubs..."
            class="input-global !pl-[40px] !py-[10px]"
          />
        </div>

      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="clubs-grid">
        <div class="skeleton"></div>
        <div class="skeleton"></div>
        <div class="skeleton"></div>
        <div class="skeleton"></div>
      </div>
    </div>
  `,

  clubProfile: (id) => {
    const club = window.clubsData?.find(c => c.id === id);
    if (!club) return `<div class="p-10 text-center"><h2 class="text-white text-2xl font-syne">Club not found</h2></div>`;

    return `
      <div class="relative z-10 mx-auto w-full max-w-[1280px] px-6 lg:px-8 py-12 flex-1 flex flex-col mt-4">
        
        <div class="mb-8">
          <a href="#clubs" class="font-dm-sans text-[14px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-2">
            &larr; Back to Clubs
          </a>
        </div>

        <div class="w-full bg-[var(--surface)] border border-[var(--border)] rounded-[20px] p-[40px] mb-8 flex flex-col md:flex-row items-start gap-8">
          <div class="w-[96px] h-[96px] rounded-[16px] bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center shrink-0">
             <i data-lucide="${club.iconName || 'book-open'}" class="h-[40px] w-[40px] text-[var(--accent)]"></i>
          </div>
          
          <div class="flex flex-col justify-center min-h-[96px]">
            <h1 class="font-syne font-bold text-[36px] text-[var(--text-primary)] mb-2 leading-tight">${club.name}</h1>
            <div class="flex items-center gap-3 mb-4">
               <span class="font-ibm-mono text-[10px] text-[var(--text-muted)] uppercase border border-[var(--border)] rounded-[4px] px-[6px] py-[2px]">${club.category}</span>
            </div>
            
            <div class="flex items-center gap-6 font-dm-sans text-[13px] text-[var(--text-secondary)]">
              <span>Est. ${club.foundedYear}</span>
              <span class="w-[4px] h-[4px] bg-[var(--border)] rounded-full"></span>
              <span>${club.memberCount}+ Members</span>
              <span class="w-[4px] h-[4px] bg-[var(--border)] rounded-full"></span>
              <span class="${club.recruitmentStatus === 'Open' ? 'text-[var(--success)]' : 'text-[var(--danger)]'}">Recruitment: ${club.recruitmentStatus}</span>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div class="lg:col-span-2 flex flex-col gap-8">
            <div class="card-global p-[32px]">
              <h3 class="font-syne font-semibold text-[18px] text-[var(--text-primary)] mb-4 flex items-center gap-3">
                <i data-lucide="info" class="w-[18px] h-[18px] text-[var(--text-muted)]"></i> About Us
              </h3>
              <p class="font-dm-sans text-[15px] text-[var(--text-secondary)] leading-relaxed whitespace-pre-wrap">${club.description}</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="card-global p-[24px]">
                <h3 class="font-syne font-semibold text-[16px] text-[var(--text-primary)] mb-4">Vision</h3>
                <ul class="flex flex-col gap-3">
                  ${club.vision.map(v => `
                    <li class="flex items-start gap-3">
                      <span class="w-[6px] h-[6px] rounded-full bg-[var(--accent)] shrink-0 mt-[6px]"></span>
                      <span class="font-dm-sans text-[14px] text-[var(--text-secondary)] leading-relaxed">${v}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
              <div class="card-global p-[24px]">
                <h3 class="font-syne font-semibold text-[16px] text-[var(--text-primary)] mb-4">Mission</h3>
                <ul class="flex flex-col gap-3">
                  ${club.mission.map(m => `
                    <li class="flex items-start gap-3">
                      <span class="w-[6px] h-[6px] rounded-full bg-[var(--danger)] shrink-0 mt-[6px]"></span>
                      <span class="font-dm-sans text-[14px] text-[var(--text-secondary)] leading-relaxed">${m}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            </div>
          </div>

          <div class="lg:col-span-1 flex flex-col gap-6">
            <div class="card-global p-[24px]">
              <h3 class="font-syne font-semibold text-[16px] text-[var(--text-primary)] mb-6">Faculty Coordinators</h3>
              <div class="flex flex-col gap-4">
                ${club.facultyCoordinators.map(f => `
                  <div class="flex items-center justify-between">
                    <div class="flex flex-col">
                      <span class="font-syne font-medium text-[14px] text-[var(--text-primary)]">${f.name}</span>
                      <span class="font-dm-sans text-[12px] text-[var(--accent)]">${f.role}</span>
                    </div>
                    <a href="#directory?q=${encodeURIComponent(f.name)}" class="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
                      <i data-lucide="external-link" class="w-[16px] h-[16px]"></i>
                    </a>
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="card-global p-[24px]">
              <h3 class="font-syne font-semibold text-[16px] text-[var(--text-primary)] mb-6">Student Core Team</h3>
              <div class="flex flex-col gap-6">
                ${club.studentCoordinators.map(s => `
                  <div class="flex items-center gap-4">
                    <div class="w-[24px] h-[24px] rounded-full bg-gradient-to-tr from-[var(--purple)] to-[var(--accent)] flex items-center justify-center shrink-0">
                      <span class="font-ibm-mono text-[8px] font-bold text-[#000]">${s.name.substring(0,2).toUpperCase()}</span>
                    </div>
                    <div class="flex flex-col flex-1">
                      <span class="font-syne font-medium text-[14px] text-[var(--text-primary)]">${s.name}</span>
                      <div class="flex items-center justify-between mt-1">
                        <span class="font-dm-sans text-[12px] text-[var(--accent)]">${s.role}</span>
                        <span class="font-ibm-mono text-[10px] text-[var(--text-muted)] uppercase">${s.branch}/${s.semester}</span>
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

        </div>
      </div>
    `;
  },

  facultyProfile: (id) => {
    const faculty = window.facultyData?.find(f => f.id === id);
    if (!faculty) return `<div class="p-10 text-center"><h2 class="text-white text-2xl font-syne">Not found</h2></div>`;

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

    return `
      <div class="relative z-10 mx-auto w-full max-w-[1280px] px-6 lg:px-8 py-12 flex-1 flex flex-col mt-4">
        
        <div class="mb-8">
          <a href="#directory" class="font-dm-sans text-[14px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-2">
            &larr; Back to Directory
          </a>
        </div>

        <div class="flex flex-col lg:flex-row items-start gap-8">
          
          <!-- Sidebar -->
          <div class="w-full lg:w-[320px] flex flex-col gap-6 shrink-0">
            <div class="card-global p-[32px] flex flex-col items-center text-center relative">
              <div class="absolute top-[24px] right-[24px]">
                ${getStatusBadge(faculty.status)}
              </div>

              <div class="w-[96px] h-[96px] rounded-full bg-[var(--surface-2)] border-[2px] border-[var(--border)] flex items-center justify-center mb-6 mt-4">
                <i data-lucide="user" class="w-[40px] h-[40px] text-[var(--text-muted)]"></i>
              </div>

              <h1 class="font-syne font-bold text-[24px] text-[var(--text-primary)] mb-1">${faculty.name}</h1>
              <p class="font-dm-sans text-[14px] text-[var(--accent)] mb-2">${faculty.role}</p>
              <p class="font-dm-sans text-[13px] text-[var(--text-muted)]">${faculty.department}</p>
            </div>

            <div id="faculty-broadcast-container"></div>
          </div>

          <!-- Content -->
          <div class="flex-1 flex flex-col gap-6 w-full">
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="card-global p-[32px]">
                <h3 class="font-syne font-semibold text-[16px] text-[var(--text-primary)] mb-6 flex items-center gap-2">
                  <i data-lucide="building-2" class="w-[18px] h-[18px] text-[var(--text-muted)]"></i>
                  Cabin Location
                </h3>
                <div class="flex flex-col gap-6">
                  <div>
                    <span class="block font-ibm-mono text-[10px] text-[var(--text-muted)] uppercase mb-2">Primary Location</span>
                    <div class="flex items-center gap-3">
                      <i data-lucide="map-pin" class="w-[16px] h-[16px] text-[var(--accent)]"></i>
                      <span class="font-ibm-mono text-[16px] text-[var(--text-primary)]">${faculty.cabin}</span>
                    </div>
                  </div>
                  <a href="#campus-map" class="btn-outline w-full text-[13px]">
                    View on Map
                  </a>
                </div>
              </div>

              <div class="card-global p-[32px]">
                <h3 class="font-syne font-semibold text-[16px] text-[var(--text-primary)] mb-6 flex items-center gap-2">
                  <i data-lucide="contact" class="w-[18px] h-[18px] text-[var(--text-muted)]"></i>
                  Contact
                </h3>
                <div class="flex flex-col gap-4">
                  <div class="flex items-center gap-4 p-3 rounded-[12px] hover:bg-[var(--surface-2)] border border-transparent transition-colors cursor-pointer group">
                    <i data-lucide="mail" class="w-[18px] h-[18px] text-[var(--text-muted)] group-hover:text-[var(--text-primary)]"></i>
                    <span class="font-dm-sans text-[14px] text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]">${faculty.email}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="card-global p-[32px]">
              <h3 class="font-syne font-semibold text-[16px] text-[var(--text-primary)] mb-6 flex items-center gap-2">
                <i data-lucide="file-check" class="w-[18px] h-[18px] text-[var(--accent)]"></i>
                Hackathon Authorization Request
              </h3>
              <p class="font-dm-sans text-[14px] text-[var(--text-secondary)] mb-6 leading-relaxed">
                Request authorization from ${faculty.name} to attend upcoming fest activities. Upload any necessary pre-requisites below.
              </p>
              <div id="faculty-req-form" class="flex flex-col sm:flex-row gap-4">
                <!-- Rendered by app.js -->
              </div>
            </div>

            <div id="faculty-student-tracker" class="card-global p-[32px] overflow-hidden">
              <h3 class="font-syne font-semibold text-[16px] text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <i data-lucide="map" class="w-[18px] h-[18px] text-[var(--accent)]"></i>
                Live Tracking (Prototype)
              </h3>
              <p class="font-dm-sans text-[13px] text-[var(--text-secondary)] mb-6">Real-time GPS location powered by Supabase.</p>
              
              <div id="faculty-live-map" class="w-full h-[300px] rounded-[12px] bg-[var(--surface-2)] border border-[var(--border)] overflow-hidden relative z-0">
                <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-10" id="map-loading-overlay">
                  <span class="font-dm-sans text-[13px] text-[var(--text-muted)] animate-pulse">Initializing Realtime Connection...</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    `;
  },

  faq: () => `
    <div class="relative z-10 mx-auto w-full max-w-[1280px] px-6 lg:px-8 py-12 flex-1 flex flex-col mt-4">
      <div class="mb-10">
        <h1 class="font-syne font-bold text-[32px] text-[var(--text-primary)] mb-2">FAQ</h1>
      </div>
      <div class="card-global p-12 text-center flex flex-col items-center">
         <i data-lucide="help-circle" class="w-[48px] h-[48px] text-[var(--text-muted)] mb-6"></i>
         <p class="font-dm-sans text-[15px] text-[var(--text-secondary)]">Knowledge base is currently being updated.</p>
      </div>
    </div>
  `,

  schedules: () => `
    <div class="relative z-10 mx-auto w-full max-w-[1280px] px-6 lg:px-8 py-12 flex-1 flex flex-col mt-4">
      <div class="mb-10">
        <h1 class="font-syne font-bold text-[32px] text-[var(--text-primary)] mb-2">Schedules</h1>
      </div>
      <div class="card-global p-12 text-center flex flex-col items-center">
         <i data-lucide="calendar" class="w-[48px] h-[48px] text-[var(--text-muted)] mb-6"></i>
         <p class="font-dm-sans text-[15px] text-[var(--text-secondary)]">Scheduling synchronization in progress.</p>
      </div>
    </div>
  `,

  notes: () => `
    <div class="relative z-10 mx-auto w-full max-w-[1280px] px-6 lg:px-8 py-12 flex-1 flex flex-col mt-4">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 fade-up" style="animation-delay: 0ms;">
        <div>
          <h1 class="font-syne font-bold text-[32px] text-[var(--text-primary)] mb-2">Study Hub</h1>
          <p class="font-dm-sans text-[14px] text-[var(--text-secondary)]">Access, download, and share PDF notes for all your subjects.</p>
        </div>
        <button id="btn-upload-notes" class="btn-primary shrink-0 flex items-center gap-2">
          <i data-lucide="upload" class="w-4 h-4"></i>
          <span>Upload Notes</span>
        </button>
      </div>

      <div class="flex flex-col md:flex-row gap-4 mb-8 fade-up" style="animation-delay: 100ms;">
        <div class="relative flex-1">
          <div class="absolute inset-y-0 left-0 pl-[16px] flex items-center pointer-events-none">
            <i data-lucide="search" class="h-[18px] w-[18px] text-[var(--text-muted)]"></i>
          </div>
          <input
            id="notes-search"
            type="text"
            class="input-global !pl-[42px]"
            placeholder="Search for subject, title, or department..."
          />
        </div>
        <select id="notes-semester" class="input-global md:w-48 appearance-none bg-[var(--surface-2)] cursor-pointer">
          <option value="">All Semesters</option>
          <option value="1">1st Semester</option>
          <option value="2">2nd Semester</option>
          <option value="3">3rd Semester</option>
          <option value="4">4th Semester</option>
          <option value="5">5th Semester</option>
          <option value="6">6th Semester</option>
          <option value="7">7th Semester</option>
          <option value="8">8th Semester</option>
        </select>
      </div>

      <div id="notes-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-up" style="animation-delay: 200ms;">
        <div class="skeleton"></div>
        <div class="skeleton"></div>
        <div class="skeleton"></div>
      </div>
    </div>

    <!-- Upload Notes Modal -->
    <div id="modal-upload-notes" class="fixed inset-0 z-[100] hidden items-center justify-center">
      <div class="absolute inset-0 bg-black/60 backdrop-blur-sm modal-backdrop" id="modal-upload-notes-backdrop"></div>
      <div class="relative bg-[var(--surface)] border border-[var(--border)] rounded-[24px] p-8 w-full max-w-lg shadow-2xl mx-4 modal-content">
        <button id="modal-upload-notes-close" class="absolute top-6 right-6 btn-icon">
          <i data-lucide="x" class="w-5 h-5 text-[var(--text-muted)] hover:text-[var(--text-primary)]"></i>
        </button>
        
        <h3 class="font-syne font-bold text-[24px] text-[var(--text-primary)] mb-2">Upload Notes</h3>
        <p class="font-dm-sans text-[14px] text-[var(--text-secondary)] mb-8">Share resources with the community.</p>

        <form id="notes-upload-form" class="space-y-5">
          <div class="space-y-2">
            <label class="font-dm-sans text-[12px] uppercase tracking-widest text-[var(--text-muted)] font-medium">Title</label>
            <input id="note-title" type="text" class="input-global" required placeholder="e.g. Module 1 - Array Basics" />
          </div>
          
          <div class="space-y-2">
            <label class="font-dm-sans text-[12px] uppercase tracking-widest text-[var(--text-muted)] font-medium">Subject Name</label>
            <input id="note-subject" type="text" class="input-global" required placeholder="e.g. Data Structures" />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-2">
              <label class="font-dm-sans text-[12px] uppercase tracking-widest text-[var(--text-muted)] font-medium">Department</label>
              <select id="note-department" class="input-global appearance-none bg-[var(--surface-2)]" required>
                <option value="">Select Dept</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Information Science">Information Science</option>
                <option value="Electronics">Electronics</option>
                <option value="Mechanical">Mechanical</option>
                <option value="Civil">Civil</option>
                <option value="Electrical">Electrical</option>
                <option value="Basic Science">Basic Science</option>
              </select>
            </div>
            
            <div class="space-y-2">
              <label class="font-dm-sans text-[12px] uppercase tracking-widest text-[var(--text-muted)] font-medium">Semester</label>
              <select id="note-semester" class="input-global appearance-none bg-[var(--surface-2)]" required>
                <option value="">Select Sem</option>
                <option value="1">1st Semester</option>
                <option value="2">2nd Semester</option>
                <option value="3">3rd Semester</option>
                <option value="4">4th Semester</option>
                <option value="5">5th Semester</option>
                <option value="6">6th Semester</option>
                <option value="7">7th Semester</option>
                <option value="8">8th Semester</option>
              </select>
            </div>
          </div>

          <div class="space-y-2">
            <label class="font-dm-sans text-[12px] uppercase tracking-widest text-[var(--text-muted)] font-medium">PDF File</label>
            <label for="note-file" class="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-[var(--border)] rounded-xl cursor-pointer hover:bg-[var(--surface-2)] transition-colors">
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <i data-lucide="file-text" class="w-8 h-8 mb-3 text-[var(--text-muted)]"></i>
                <p class="font-dm-sans text-[13px] text-[var(--text-secondary)] mb-1" id="file-name-display"><span class="font-medium text-[var(--accent)]">Click to upload</span> or drag and drop</p>
                <p class="font-ibm-mono text-[11px] text-[var(--text-muted)]">PDF files only (Max 20MB)</p>
              </div>
              <input id="note-file" type="file" class="hidden" accept=".pdf" required />
            </label>
          </div>

          <button type="submit" id="btn-submit-note" class="btn-primary w-full justify-center">
            Upload Note
          </button>
        </form>
      </div>
    </div>
  `
};
