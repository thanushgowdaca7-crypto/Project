import { Menu, ArrowRight, UserCircle, LogOut, Globe, Bell } from 'lucide-react';
import { NavLink, Link, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import type { LanguageCode } from '../context/LanguageContext';

const MainLayout = () => {
  const { user, logout } = useAuth();
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="relative min-h-screen w-full bg-black font-inter text-white selection:bg-white/20 flex flex-col">
      {/* Navigation */}
      <nav className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 relative z-50">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white">
              <div className="h-3 w-3 rounded-full bg-white"></div>
            </div>
            <span className="text-xl font-semibold text-white tracking-tight">VVCE Connect</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center rounded-full border border-white/10 bg-[#121212]/50 px-4 py-2 backdrop-blur-md shadow-xl">
            <div className="flex items-center gap-6 text-sm text-white/80">
              <NavLink to="/" className={({ isActive }) => `transition-colors hover:text-white ${isActive ? 'text-white font-medium' : ''}`}>{t('nav_home')}</NavLink>
              <NavLink to="/directory" className={({ isActive }) => `transition-colors hover:text-white ${isActive ? 'text-white font-medium' : ''}`}>{t('nav_directory')}</NavLink>
              <NavLink to="/departments" className={({ isActive }) => `transition-colors hover:text-white ${isActive ? 'text-white font-medium' : ''}`}>{t('nav_departments')}</NavLink>
              <NavLink to="/campus-map" className={({ isActive }) => `transition-colors hover:text-white ${isActive ? 'text-white font-medium' : ''}`}>{t('nav_campus_map')}</NavLink>
              <NavLink to="/events" className={({ isActive }) => `transition-colors hover:text-white ${isActive ? 'text-white font-medium' : ''}`}>{t('nav_events')}</NavLink>
              <NavLink to="/lost-and-found" className={({ isActive }) => `transition-colors hover:text-white ${isActive ? 'text-white font-medium' : ''}`}>{t('nav_lost_found')}</NavLink>
            </div>
            <div className="mx-4 h-4 w-[1px] bg-white/10"></div>
            
            {/* User Session Interface */}
            <div className="flex items-center gap-4">
              {/* Language Selector */}
              <div className="relative group flex items-center">
                <Globe className="w-4 h-4 text-white/50 group-hover:text-white transition-colors cursor-pointer" />
                <select 
                  className="appearance-none bg-transparent text-white/80 text-sm font-medium border-0 focus:ring-0 cursor-pointer pl-2 pr-4 outline-none"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as LanguageCode)}
                >
                  <option value="en" className="bg-[#121212] text-white">EN</option>
                  <option value="hi" className="bg-[#121212] text-white">HI</option>
                  <option value="kn" className="bg-[#121212] text-white">KN</option>
                </select>
              </div>

              {user ? (
                <div className="flex items-center gap-3 pl-2 border-l border-white/10">
                  <button className="relative text-white/50 hover:text-white transition-colors p-1" title="Notifications">
                    <Bell className="w-5 h-5" />
                    {user.role === 'STUDENT' && (
                      <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-pulse border border-[#121212]"></span>
                    )}
                  </button>
                  <div className="flex items-center gap-2 cursor-pointer group ml-2">
                    <UserCircle className="w-5 h-5 text-[#64CEFB]" />
                    <span className="text-sm font-medium text-white/90 group-hover:text-white">
                      {user.id} ({user.role})
                    </span>
                  </div>
                  <button onClick={logout} className="text-white/50 hover:text-red-400 transition-colors p-1" title="Logout">
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <Link to="/login" className="group flex items-center gap-2 text-sm text-[#64CEFB] font-medium transition-colors hover:text-white pl-2 border-l border-white/10">
                  Login
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              )}
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden text-white cursor-pointer hover:bg-white/10 p-2 rounded-lg transition-colors">
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
