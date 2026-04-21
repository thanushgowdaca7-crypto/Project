import { Menu, ArrowRight } from 'lucide-react';
import { NavLink, Link, Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="relative min-h-screen w-full bg-black font-inter selection:bg-white/20 text-white">
      {/* Navigation */}
      <nav className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 relative z-50">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white">
              <div className="h-3 w-3 rounded-full bg-white"></div>
            </div>
            <span className="text-xl font-semibold text-white">VVCE Connect</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center rounded-full border border-gray-700 bg-[#121212]/50 px-4 py-2 backdrop-blur-md">
            <div className="flex items-center gap-6 text-sm text-white/80">
              <NavLink to="/" className={({ isActive }) => `transition-colors hover:text-white ${isActive ? 'text-white font-medium' : ''}`}>Home</NavLink>
              <NavLink to="/directory" className={({ isActive }) => `transition-colors hover:text-white ${isActive ? 'text-white font-medium' : ''}`}>Directory</NavLink>
              <NavLink to="/departments" className={({ isActive }) => `transition-colors hover:text-white ${isActive ? 'text-white font-medium' : ''}`}>Departments</NavLink>
              <NavLink to="/campus-map" className={({ isActive }) => `transition-colors hover:text-white ${isActive ? 'text-white font-medium' : ''}`}>Campus Map</NavLink>
              <NavLink to="/schedules" className={({ isActive }) => `transition-colors hover:text-white ${isActive ? 'text-white font-medium' : ''}`}>Schedules</NavLink>
              <NavLink to="/faq" className={({ isActive }) => `transition-colors hover:text-white ${isActive ? 'text-white font-medium' : ''}`}>FAQ</NavLink>
            </div>
            <div className="mx-4 h-4 w-[1px] bg-gray-700"></div>
            <a href="#" className="group flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white">
              Help block
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden text-white cursor-pointer">
            <Menu className="h-6 w-6" />
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <Outlet />
    </div>
  );
};

export default MainLayout;
