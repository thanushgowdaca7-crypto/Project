import { useState, useMemo } from 'react';
import { useClubs } from '../context/ClubContext';
import { 
  BookOpen, Brain, Hammer, Cpu, Lightbulb, TrendingUp, Microscope, 
  Leaf, Building, Zap, Users, Activity, Award, Mic, Globe, Heart, Wind, Star, 
  Rocket, Wrench, Mountain, Code, Flower, Search, Terminal, Palette, Battery, 
  Compass, Music, Book, Filter
} from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap: Record<string, React.FC<any>> = {
  Brain, Hammer, BookOpen, Cpu, Lightbulb, TrendingUp, Microscope, Leaf, Building,
  Zap, Users, Activity, Award, Mic, Globe, Heart, Wind, Star, Rocket, Wrench,
  Mountain, Code, Flower, Search, Terminal, Palette, Battery, Compass, Music, Book
};

const categoryColors: Record<string, string> = {
  Technical: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  Cultural: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
  Sports: 'bg-green-500/20 text-green-400 border-green-500/30',
  Social: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  'R&D': 'bg-purple-500/20 text-purple-400 border-purple-500/30'
};

const Clubs = () => {
  const { clubs } = useClubs();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Technical', 'Cultural', 'Sports', 'Social', 'R&D'];

  const filteredClubs = useMemo(() => {
    return clubs.filter(club => {
      const matchesSearch = club.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || club.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [clubs, searchQuery, activeCategory]);

  return (
    <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 flex-1 flex flex-col pt-8">
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Student Clubs & Chapters</h1>
        <p className="text-white/60 text-sm">Discover and join the vibrant student clubs shaping the ecosystem at VVCE.</p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 items-start md:items-center justify-between">
        <div className="relative w-full md:max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-white/40" />
          </div>
          <input
            type="text"
            placeholder="Search clubs by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-white/10 rounded-xl leading-5 bg-[#121212]/50 text-white placeholder-white/40 focus:outline-none focus:bg-[#121212] focus:ring-1 focus:ring-[#64CEFB] focus:border-[#64CEFB] sm:text-sm backdrop-blur-md transition-all"
          />
        </div>
        
        <div className="flex flex-wrap items-center gap-2">
          <Filter className="w-4 h-4 text-white/40 mr-2" />
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeCategory === cat 
                  ? 'bg-[#7a49e6] text-white shadow-lg shadow-[#7a49e6]/20' 
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Club Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredClubs.map((club) => {
          const Icon = iconMap[club.iconName] || BookOpen;
          return (
            <div 
              key={club.id} 
              className="group flex flex-col p-6 rounded-3xl border border-white/10 bg-[#7a49e6]/5 backdrop-blur-md hover:border-[#7a49e6]/50 hover:bg-[#7a49e6]/10 transition-all cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-24 h-24 bg-[#7a49e6] rounded-full mix-blend-multiply filter blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-[#121212] border border-white/10 group-hover:border-[#64CEFB]/50 transition-colors shadow-lg">
                  <Icon className="h-7 w-7 text-[#64CEFB]" />
                </div>
                <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full border ${categoryColors[club.category] || 'bg-white/10 text-white border-white/20'}`}>
                  {club.category}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#64CEFB] transition-colors line-clamp-2 min-h-[3.5rem]">{club.name}</h3>
              
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-4 h-4 text-white/40" />
                <span className="text-xs text-white/60">{club.memberCount}+ Members</span>
              </div>
              
              <p className="text-white/60 text-sm line-clamp-3 flex-1 mb-6">
                {club.description}
              </p>

              <div className="mt-auto pt-4 border-t border-white/10">
                <Link to={`/clubs/${club.id}`} className="w-full text-center py-2 rounded-xl bg-white/5 hover:bg-[#7a49e6] text-white text-sm font-semibold transition-all block">
                  View Profile
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      
      {filteredClubs.length === 0 && (
        <div className="text-center py-20">
          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-white/20" />
          </div>
          <h3 className="text-xl font-medium text-white mb-2">No clubs found</h3>
          <p className="text-white/40 text-sm">Try adjusting your search or category filter.</p>
        </div>
      )}
    </div>
  );
};

export default Clubs;
