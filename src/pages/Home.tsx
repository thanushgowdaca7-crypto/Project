import { ArrowRight } from 'lucide-react';
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
        className="absolute inset-0 h-full w-full object-cover z-0"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4" type="video/mp4" />
      </video>

      {/* Content Overlay */}
      <div className="relative z-10 flex h-[calc(100vh-88px)] flex-col">
        {/* Top Content Section */}
        <div className="mx-auto mt-8 lg:mt-12 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="order-2 lg:order-1">
              <p className="max-w-md text-sm text-white/80 md:text-base">
                Instantly find cabin locations, current availability statuses, and contact details for all faculty members across the Vidyavardhaka College of Engineering campus.
              </p>
            </div>
            <div className="order-1 flex lg:order-2 lg:justify-end">
              <p className="max-w-[200px] text-sm text-white/80 md:text-base lg:text-right">
                Serving 5000+ VVCE Students !
              </p>
            </div>
          </div>
        </div>

        {/* Center Hero Section */}
        <main className="mx-auto flex flex-1 w-full max-w-7xl flex-col items-center justify-center px-4 pb-24 sm:px-6 lg:px-8">
          <div className="flex w-full flex-col items-center text-center">
            <p className="mb-6 text-xs font-medium uppercase tracking-tight text-white/80 sm:text-sm">
              Easily navigate the VVCE campus
            </p>
            
            <h1 className="flex flex-col items-center justify-center font-medium leading-[0.85] tracking-tighter">
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
    </>
  );
};

export default Home;
