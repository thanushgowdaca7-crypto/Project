import { useState, useEffect } from 'react';
import { Search, MapPin, Mail, ChevronRight } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { facultyData } from '../data/dummyData';

const Directory = () => {
  const location = useLocation();
  const [search, setSearch] = useState(() => new URLSearchParams(location.search).get('q') || '');
  const navigate = useNavigate();

  useEffect(() => {
    const queryParam = new URLSearchParams(location.search).get('q');
    if (queryParam !== null) {
      setSearch(queryParam);
    }
  }, [location.search]);

  const filteredFaculty = facultyData.filter((f) => 
    f.name.toLowerCase().includes(search.toLowerCase()) || 
    f.department.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Available': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'In Class': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'On Leave': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'Meeting': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 flex-1 flex flex-col pt-8">
      <div className="mb-8 md:flex md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Faculty Directory</h1>
          <p className="text-white/60 text-sm">Search and locate faculty members across the campus.</p>
        </div>
        
        <div className="mt-6 md:mt-0 relative w-full md:max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full rounded-full border-0 py-3 pl-10 pr-4 bg-white/5 ring-1 ring-inset ring-white/10 text-white focus:ring-2 focus:ring-inset focus:ring-[#64CEFB] sm:text-sm transition-all"
            placeholder="Search by name or department..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFaculty.map((faculty) => (
          <div 
            key={faculty.id} 
            onClick={() => navigate(`/directory/${faculty.id}`)}
            className="relative group rounded-2xl border border-white/10 bg-[#121212]/40 backdrop-blur-sm p-6 hover:border-[#64CEFB]/50 transition-all cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#64CEFB]/0 to-[#64CEFB]/5 group-hover:to-[#64CEFB]/10 transition-colors pointer-events-none" />
            
            <div className="relative z-10 flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-medium text-white">{faculty.name}</h3>
                {faculty.role && <p className="text-sm text-[#64CEFB] mb-1">{faculty.role}</p>}
                <p className="text-xs text-white/50">{faculty.department}</p>
              </div>
              <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold border ${getStatusColor(faculty.status)}`}>
                {faculty.status}
              </span>
            </div>
            
            <div className="relative z-10 space-y-3 mt-6">
              <div className="flex items-center text-sm text-white/70">
                <MapPin className="h-4 w-4 mr-2 text-white/40" />
                {faculty.cabin}
              </div>
              <div className="flex items-center text-sm text-white/70">
                <Mail className="h-4 w-4 mr-2 text-white/40" />
                {faculty.email}
              </div>
            </div>

            <div className="relative z-10 mt-6 pt-4 border-t border-white/5 flex justify-between items-center text-sm text-[#64CEFB] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              View full profile
              <ChevronRight className="h-4 w-4" />
            </div>
          </div>
        ))}
      </div>
      
      {filteredFaculty.length === 0 && (
        <div className="text-center py-20 text-white/50">
          No faculty members found matching your search.
        </div>
      )}
    </div>
  );
};

export default Directory;
