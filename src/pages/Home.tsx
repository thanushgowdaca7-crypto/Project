import { ArrowRight, Search, MapPin, CalendarCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import ShinyText from '../components/ShinyText';

const Home = () => {
  return (
    <>
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 h-full w-full object-cover z-0"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4" type="video/mp4" />
      </video>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Hero Section (Full Viewport Height) */}
        <div className="flex flex-col min-h-[calc(100vh-88px)]">
          {/* Top Content Section */}
          <div className="mx-auto mt-8 lg:mt-12 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
              <div className="order-2 lg:order-1">
                <p className="max-w-md text-sm text-white/80 md:text-base bg-black/20 p-4 rounded-xl backdrop-blur-sm border border-white/5">
                  Instantly find cabin locations, current availability statuses, and contact details for all faculty members across the Vidyavardhaka College of Engineering campus.
                </p>
              </div>
              <div className="order-1 flex lg:order-2 lg:justify-end">
                <p className="max-w-[200px] text-sm font-medium text-white md:text-base lg:text-right bg-black/20 p-4 rounded-xl backdrop-blur-sm border border-white/5">
                  Serving 5000+ VVCE Students !
                </p>
              </div>
            </div>
          </div>

          {/* Center Hero Section */}
          <main className="mx-auto flex flex-1 w-full max-w-7xl flex-col items-center justify-center px-4 pb-24 sm:px-6 lg:px-8">
            <div className="flex w-full flex-col items-center text-center">
              <p className="mb-6 text-xs font-medium uppercase tracking-widest text-white/80 sm:text-sm bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                Easily navigate the VVCE campus
              </p>
              
              <h1 className="flex flex-col items-center justify-center font-medium leading-[0.85] tracking-tighter drop-shadow-2xl">
                <span className="text-5xl text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
                  Locate Your
                </span>
                <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl relative block mt-2 lg:mt-3">
                  <ShinyText text="Professor." />
                </span>
              </h1>

              <div className="mt-12 sm:mt-16 z-20 pointer-events-auto cursor-pointer">
                <Link to="/directory" className="btn-61">
                  <span>
                    <div className="flex items-center gap-2">
                      Search Faculty Cabin
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </span>
                </Link>
              </div>
            </div>
          </main>
        </div>

        {/* How It Works Section */}
        <div className="w-full bg-black/80 backdrop-blur-2xl py-24 sm:py-32 relative border-t border-white/10 mt-auto">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-sm font-bold tracking-widest uppercase text-[#64CEFB]">Workflow</h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">How It Works</p>
              <p className="mt-6 text-lg leading-8 text-white/60">
                Finding and connecting with faculty members across the campus has never been easier. Just follow these three simple steps.
              </p>
            </div>
            
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                
                {/* Step 1 */}
                <div className="flex flex-col items-center text-center group bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors duration-500 hover:-translate-y-2">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#64CEFB]/10 ring-1 ring-[#64CEFB]/20 group-hover:bg-[#64CEFB]/20 group-hover:ring-[#64CEFB]/50 transition-all duration-300 group-hover:scale-110">
                    <Search className="h-10 w-10 text-[#64CEFB]" />
                  </div>
                  <h3 className="text-xl font-semibold leading-7 text-white">1. Search Directory</h3>
                  <p className="mt-4 flex-auto text-base leading-7 text-white/60">
                    Quickly look up any faculty member by name, department, or cabin number using our real-time smart directory.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center text-center group bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors duration-500 hover:-translate-y-2">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#64CEFB]/10 ring-1 ring-[#64CEFB]/20 group-hover:bg-[#64CEFB]/20 group-hover:ring-[#64CEFB]/50 transition-all duration-300 group-hover:scale-110">
                    <MapPin className="h-10 w-10 text-[#64CEFB]" />
                  </div>
                  <h3 className="text-xl font-semibold leading-7 text-white">2. Locate Cabin</h3>
                  <p className="mt-4 flex-auto text-base leading-7 text-white/60">
                    View the exact floor plan and room number on the interactive campus map to easily navigate to their office.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center text-center group bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors duration-500 hover:-translate-y-2">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#64CEFB]/10 ring-1 ring-[#64CEFB]/20 group-hover:bg-[#64CEFB]/20 group-hover:ring-[#64CEFB]/50 transition-all duration-300 group-hover:scale-110">
                    <CalendarCheck className="h-10 w-10 text-[#64CEFB]" />
                  </div>
                  <h3 className="text-xl font-semibold leading-7 text-white">3. Check Availability</h3>
                  <p className="mt-4 flex-auto text-base leading-7 text-white/60">
                    See their current schedule, active classes, and free slots instantly to know exactly when to meet them.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Home;
