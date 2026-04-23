import { departmentsData } from '../data/dummyData';
import { BookOpen, ChevronRight, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Departments = () => {
  const navigate = useNavigate();
  return (
    <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 flex-1 flex flex-col pt-8 space-y-24">
      
      {/* Departments Section */}
      <section>
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Departments & Branches</h1>
          <p className="text-white/60 text-sm">Browse faculty members by their specific engineering departments, or explore student clubs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departmentsData.map((dept, i) => (
            <div 
              key={i} 
              onClick={() => navigate(`/directory?q=${encodeURIComponent(dept)}`)}
              className="group flex items-center justify-between p-6 rounded-2xl border border-white/10 bg-[#121212]/40 backdrop-blur-sm hover:border-[#64CEFB]/50 hover:bg-white/5 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-white/5 text-white/70 group-hover:bg-[#64CEFB]/20 group-hover:text-[#64CEFB] transition-colors">
                  <BookOpen className="h-5 w-5" />
                </div>
                <span className="text-lg font-medium text-white/90 group-hover:text-white transition-colors">{dept}</span>
              </div>
              <ChevronRight className="h-5 w-5 text-white/30 group-hover:text-[#64CEFB] transition-colors group-hover:translate-x-1" />
            </div>
          ))}

          {/* Dedicated Clubs Card */}
          <div 
            onClick={() => navigate('/clubs')}
            className="group flex items-center justify-between p-6 rounded-2xl border border-white/10 bg-[#121212]/40 backdrop-blur-sm hover:border-[#7a49e6]/50 hover:bg-[#7a49e6]/5 transition-all cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-white/5 text-white/70 group-hover:bg-[#7a49e6]/20 group-hover:text-[#7a49e6] transition-colors">
                <Users className="h-5 w-5" />
              </div>
              <span className="text-lg font-medium text-white/90 group-hover:text-white transition-colors">Student Clubs & Chapters</span>
            </div>
            <ChevronRight className="h-5 w-5 text-white/30 group-hover:text-[#7a49e6] transition-colors group-hover:translate-x-1" />
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Departments;
