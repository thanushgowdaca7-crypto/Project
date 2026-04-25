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
    <div class="relative z-10 flex flex-col min-h-[calc(100vh-64px)] overflow-hidden">
      
      <!-- Subtle Grid & Radial Glow -->
      <div class="absolute inset-0 grid-bg opacity-100 pointer-events-none z-[-2]"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--accent)] opacity-[0.05] blur-[100px] pointer-events-none z-[-1]"></div>
      
      <!-- Hero Section -->
      <main class="flex flex-1 flex-col items-center justify-center text-center px-4 w-full h-full min-h-[80vh]">
        
        <div class="hero-item inline-block px-[14px] py-[6px] border border-[var(--border)] rounded-[100px] mb-8">
          <span class="font-dm-sans text-[11px] uppercase tracking-[0.15em] text-[var(--text-muted)] font-medium">VVCE Campus Navigator</span>
        </div>
        
        <h1 class="hero-item block font-syne font-bold text-[52px] lg:text-[88px] leading-[1.1] text-[var(--text-primary)]">
          Locate Your
        </h1>
        <h1 class="hero-item block font-syne font-bold text-[52px] lg:text-[88px] leading-[1.1] text-[var(--accent)] shiny-text mb-8">
          Professor.
        </h1>

        <p class="hero-item font-dm-sans text-[16px] text-[var(--text-secondary)] max-w-[440px] mx-auto mb-10 leading-relaxed">
          Instantly find cabin locations, availability, and contact details for all VVCE faculty.
        </p>

        <div class="hero-item flex flex-wrap items-center justify-center gap-3 mb-10">
          <span class="px-4 py-2 rounded-full border border-[var(--border)] text-[var(--text-muted)] text-[12px] font-dm-sans font-medium">
            5000+ Students
          </span>
          <span class="px-4 py-2 rounded-full border border-[var(--border)] text-[var(--text-muted)] text-[12px] font-dm-sans font-medium">
            All Departments
          </span>
        </div>

        <div class="hero-item">
          <a href="#directory" class="btn-primary text-[16px]">
            <span>Search Faculty Directory &rarr;</span>
          </a>
        </div>
      </main>

      <!-- How It Works Section -->
      <section class="w-full border-t border-[var(--border)] bg-[var(--bg)] relative z-10 py-24">
        <div class="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div class="mb-16">
            <h2 class="font-syne font-semibold text-[13px] uppercase tracking-[0.12em] text-[var(--accent)] mb-4">How It Works</h2>
            <p class="font-syne font-semibold text-[40px] text-[var(--text-primary)]">Three steps to find any professor.</p>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            <div class="reveal-card card-global p-8 flex flex-col items-start text-left" style="animation-delay: 0ms;">
              <i data-lucide="search" class="w-[36px] h-[36px] text-[var(--accent)] mb-8"></i>
              <div class="font-ibm-mono text-[11px] text-[var(--text-muted)] mb-4">01 &mdash;</div>
              <h3 class="font-syne font-semibold text-[20px] text-[var(--text-primary)] mb-3">Search Directory</h3>
              <p class="font-dm-sans text-[15px] text-[var(--text-secondary)] leading-relaxed">
                Quickly look up any faculty member by name, department, or cabin number using our real-time smart directory.
              </p>
            </div>

            <div class="reveal-card card-global p-8 flex flex-col items-start text-left" style="animation-delay: 120ms;">
              <i data-lucide="map-pin" class="w-[36px] h-[36px] text-[var(--accent)] mb-8"></i>
              <div class="font-ibm-mono text-[11px] text-[var(--text-muted)] mb-4">02 &mdash;</div>
              <h3 class="font-syne font-semibold text-[20px] text-[var(--text-primary)] mb-3">Locate Cabin</h3>
              <p class="font-dm-sans text-[15px] text-[var(--text-secondary)] leading-relaxed">
                View the exact floor plan and room number on the interactive campus map to easily navigate to their office.
              </p>
            </div>

            <div class="reveal-card card-global p-8 flex flex-col items-start text-left" style="animation-delay: 240ms;">
              <i data-lucide="calendar-check" class="w-[36px] h-[36px] text-[var(--accent)] mb-8"></i>
              <div class="font-ibm-mono text-[11px] text-[var(--text-muted)] mb-4">03 &mdash;</div>
              <h3 class="font-syne font-semibold text-[20px] text-[var(--text-primary)] mb-3">Check Availability</h3>
              <p class="font-dm-sans text-[15px] text-[var(--text-secondary)] leading-relaxed">
                See their current schedule, active classes, and free slots instantly to know exactly when to meet them.
              </p>
            </div>

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
      <div class="mb-10 fade-up" style="animation-delay: 0ms;">
        <h1 class="font-syne font-bold text-[32px] text-[var(--text-primary)] mb-2">Departments & Branches</h1>
        <p class="font-dm-sans text-[14px] text-[var(--text-secondary)]">Browse faculty by their specific engineering departments.</p>
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
      
      <div class="max-w-[560px] mx-auto text-center mb-[56px]">
        <h1 class="font-syne font-bold text-[40px] text-[var(--text-primary)] mb-4" id="events-title">Events & Fest</h1>
        <p class="font-dm-sans text-[16px] text-[var(--text-secondary)]">Stay updated with ongoing technical fests, hackathons, and campus activities.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[80px]">
        
        <!-- Featured Event Card -->
        <div class="col-span-1">
          <div class="card-global p-[32px]">
            <div class="flex items-center gap-4 mb-6">
              <span class="font-ibm-mono text-[10px] text-[var(--accent)] uppercase tracking-[0.15em] border border-[var(--accent-dim)] px-[8px] py-[4px] rounded-[4px]">
                FEATURED
              </span>
              <span class="font-dm-sans text-[12px] text-[var(--text-muted)]">Organized by Vector Flow Club</span>
            </div>
            
            <h2 class="font-syne font-[800] text-[36px] text-[var(--text-primary)] leading-[1.1] mb-6">Tech-A-Thon 24hrs</h2>
            
            <p class="font-dm-sans text-[15px] text-[var(--text-secondary)] leading-relaxed mb-8">
              Join the biggest state-level Hackathon hosted by VVCE. Build solutions for smart cities, healthcare, and educational empowerment!
            </p>

            <div class="flex flex-col gap-3 mb-10">
              <div class="flex items-center gap-3">
                <i data-lucide="calendar-days" class="w-[14px] h-[14px] text-[var(--text-muted)]"></i>
                <span class="font-dm-sans text-[14px] text-[var(--text-secondary)]">Next Friday, 9:00 AM - Saturday, 9:00 AM</span>
              </div>
              <div class="flex items-center gap-3">
                <i data-lucide="map-pin" class="w-[14px] h-[14px] text-[var(--text-muted)]"></i>
                <span class="font-dm-sans text-[14px] text-[var(--text-secondary)]">Main CSE Block, Lab 2 & 3</span>
              </div>
            </div>

            <div id="events-req-btn-container" class="w-full">
              <!-- Rendered by app.js -->
            </div>
          </div>
        </div>

        <!-- Timeline Section -->
        <div class="col-span-1">
          <h2 class="font-syne font-semibold text-[22px] text-[var(--text-primary)] flex items-center gap-3 mb-8">
            <i data-lucide="clock" class="w-[20px] h-[20px] text-[var(--text-muted)]"></i>
            Hackathon Timeline
          </h2>

          <div class="relative pl-[8px]">
            <div class="absolute left-[8px] top-2 bottom-2 w-[1px] bg-[var(--border)]"></div>
            
            <div class="relative pl-[32px] pb-10">
              <div class="absolute left-[-5px] top-[6px] w-[10px] h-[10px] rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent-glow)]"></div>
              <h3 class="font-syne font-semibold text-[17px] text-[var(--text-primary)] mb-1">Opening Ceremony</h3>
              <p class="font-dm-sans text-[13px] text-[var(--text-secondary)] mb-2">9:00 AM - Auditorium</p>
              <p class="font-dm-sans text-[13px] text-[var(--text-muted)] leading-relaxed">Keynote speech, team formations, and problem statement reveals.</p>
            </div>

            <div class="relative pl-[32px] pb-10">
              <div class="absolute left-[-5px] top-[6px] w-[10px] h-[10px] rounded-full bg-[var(--bg)] border border-[var(--border)]"></div>
              <h3 class="font-syne font-semibold text-[17px] text-[var(--text-primary)] mb-1">Coding Phase Begins</h3>
              <p class="font-dm-sans text-[13px] text-[var(--text-secondary)] mb-2">11:00 AM - CSE Labs</p>
              <p class="font-dm-sans text-[13px] text-[var(--text-muted)] leading-relaxed">Teams transition to their designated lab venues and begin architecture planning.</p>
            </div>

            <div class="relative pl-[32px] pb-10">
              <div class="absolute left-[-5px] top-[6px] w-[10px] h-[10px] rounded-full bg-[var(--bg)] border border-[var(--border)]"></div>
              <h3 class="font-syne font-semibold text-[17px] text-[var(--text-primary)] mb-1">First Evaluation</h3>
              <p class="font-dm-sans text-[13px] text-[var(--text-secondary)] mb-2">6:00 PM - Respective Labs</p>
              <p class="font-dm-sans text-[13px] text-[var(--text-muted)] leading-relaxed">Judges will visit each team's venue to check on initial prototypes.</p>
            </div>

            <div class="relative pl-[32px]">
              <div class="absolute left-[-5px] top-[6px] w-[10px] h-[10px] rounded-full bg-[var(--bg)] border border-[var(--border)]"></div>
              <h3 class="font-syne font-semibold text-[17px] text-[var(--text-muted)] mb-1">Final Presentation</h3>
              <p class="font-dm-sans text-[13px] text-[var(--text-muted)]">Day 2, 10:00 AM - Seminar Hall</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Upcoming Club Events -->
      <div class="mt-[100px]">
        <div class="flex items-center justify-between mb-8 pb-4 border-b border-[var(--border)]">
          <h2 class="font-syne font-semibold text-[24px] text-[var(--text-primary)]">Upcoming Club Events</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div class="card-global p-[24px]">
            <div class="flex flex-col mb-4">
              <i data-lucide="code" class="w-[20px] h-[20px] text-[var(--accent)] mb-4"></i>
              <span class="font-ibm-mono text-[10px] uppercase text-[var(--text-muted)] mb-2">Technical</span>
              <h3 class="font-syne font-semibold text-[18px] text-[var(--text-primary)] leading-tight">Open Source Contribution Bootcamp</h3>
            </div>
            <div class="flex flex-col gap-2 mt-auto pt-6 border-t border-[var(--border)]">
              <span class="font-dm-sans text-[13px] text-[var(--text-secondary)]">Next Wednesday, 4:00 PM</span>
              <span class="font-dm-sans text-[13px] text-[var(--text-secondary)]">Lab 1</span>
            </div>
          </div>

          <div class="card-global p-[24px]">
            <div class="flex flex-col mb-4">
              <i data-lucide="rocket" class="w-[20px] h-[20px] text-[var(--danger)] mb-4"></i>
              <span class="font-ibm-mono text-[10px] uppercase text-[var(--text-muted)] mb-2">R&D</span>
              <h3 class="font-syne font-semibold text-[18px] text-[var(--text-primary)] leading-tight">Model Rocketry Workshop</h3>
            </div>
            <div class="flex flex-col gap-2 mt-auto pt-6 border-t border-[var(--border)]">
              <span class="font-dm-sans text-[13px] text-[var(--text-secondary)]">Friday, 2:00 PM</span>
              <span class="font-dm-sans text-[13px] text-[var(--text-secondary)]">Mechanical Block</span>
            </div>
          </div>

          <div class="card-global p-[24px]">
            <div class="flex flex-col mb-4">
              <i data-lucide="users" class="w-[20px] h-[20px] text-[var(--purple)] mb-4"></i>
              <span class="font-ibm-mono text-[10px] uppercase text-[var(--text-muted)] mb-2">Social</span>
              <h3 class="font-syne font-semibold text-[18px] text-[var(--text-primary)] leading-tight">Ideathon: Smart Campus Solutions</h3>
            </div>
            <div class="flex flex-col gap-2 mt-auto pt-6 border-t border-[var(--border)]">
              <span class="font-dm-sans text-[13px] text-[var(--text-secondary)]">Saturday, 10:00 AM</span>
              <span class="font-dm-sans text-[13px] text-[var(--text-secondary)]">Seminar Hall</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  `,

  'lost-and-found': () => `
    <div class="relative z-10 mx-auto w-full max-w-[1280px] px-6 lg:px-8 py-12 flex-1 flex flex-col mt-4">
      <div class="mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <h1 class="font-syne font-bold text-[36px] text-[var(--text-primary)]">Lost & Found</h1>
        
        <button class="btn-outline px-6">
          + Report Item
        </button>
      </div>

      <div class="mb-10 relative w-full md:max-w-[360px]">
        <div class="absolute inset-y-0 left-0 pl-[16px] flex items-center pointer-events-none">
          <i data-lucide="search" class="h-[18px] w-[18px] text-[var(--text-muted)]"></i>
        </div>
        <input
          type="text"
          class="input-global !pl-[42px]"
          placeholder="Search items..."
        />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <div class="card-global p-6 flex flex-col">
          <div class="flex justify-between items-center mb-6">
            <span class="font-dm-sans text-[12px] px-[10px] py-[4px] rounded-full bg-[rgba(240,82,82,0.1)] text-[var(--danger)]">Lost</span>
            <span class="font-ibm-mono text-[11px] text-[var(--text-muted)]">2026-04-19</span>
          </div>
          <h3 class="font-syne font-semibold text-[18px] text-[var(--text-primary)] mb-1">Blue Water Bottle</h3>
          <p class="font-dm-sans text-[13px] text-[var(--accent)] mb-4">CSE Block</p>
          <p class="font-dm-sans text-[14px] text-[var(--text-secondary)] leading-relaxed flex-1 mb-8">Milton bottle left near Lab 3</p>
          
          <div class="flex justify-between items-center pt-4 border-t border-[var(--border)]">
            <span class="font-ibm-mono text-[11px] text-[var(--text-muted)] uppercase tracking-wider">Status: Unresolved</span>
            <a href="#" class="font-dm-sans text-[13px] font-medium text-[var(--purple)] hover:underline">Contact</a>
          </div>
        </div>

        <div class="card-global p-6 flex flex-col">
          <div class="flex justify-between items-center mb-6">
            <span class="font-dm-sans text-[12px] px-[10px] py-[4px] rounded-full bg-[rgba(62,207,142,0.1)] text-[var(--success)]">Found</span>
            <span class="font-ibm-mono text-[11px] text-[var(--text-muted)]">2026-04-20</span>
          </div>
          <h3 class="font-syne font-semibold text-[18px] text-[var(--text-primary)] mb-1">Casio fx-991EX</h3>
          <p class="font-dm-sans text-[13px] text-[var(--accent)] mb-4">ECE Block</p>
          <p class="font-dm-sans text-[14px] text-[var(--text-secondary)] leading-relaxed flex-1 mb-8">Found on the 2nd-floor stairs. Handed over to HOD office.</p>
          
          <div class="flex justify-between items-center pt-4 border-t border-[var(--border)]">
            <span class="font-ibm-mono text-[11px] text-[var(--text-muted)] uppercase tracking-wider">Status: Claimable</span>
            <a href="#" class="font-dm-sans text-[13px] font-medium text-[var(--purple)] hover:underline">Contact</a>
          </div>
        </div>

        <div class="card-global p-6 flex flex-col">
          <div class="flex justify-between items-center mb-6">
            <span class="font-dm-sans text-[12px] px-[10px] py-[4px] rounded-full bg-[rgba(240,82,82,0.1)] text-[var(--danger)]">Lost</span>
            <span class="font-ibm-mono text-[11px] text-[var(--text-muted)]">2026-04-18</span>
          </div>
          <h3 class="font-syne font-semibold text-[18px] text-[var(--text-primary)] mb-1">ID Card (4VV22CS...)</h3>
          <p class="font-dm-sans text-[13px] text-[var(--accent)] mb-4">Canteen</p>
          <p class="font-dm-sans text-[14px] text-[var(--text-secondary)] leading-relaxed flex-1 mb-8">Lost somewhere between Library and Canteen.</p>
          
          <div class="flex justify-between items-center pt-4 border-t border-[var(--border)]">
            <span class="font-ibm-mono text-[11px] text-[var(--text-muted)] uppercase tracking-wider">Status: Unresolved</span>
            <a href="#" class="font-dm-sans text-[13px] font-medium text-[var(--purple)] hover:underline">Contact</a>
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

            <div id="faculty-student-tracker"></div>

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
  `
};
