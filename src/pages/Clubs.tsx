import { clubsData } from '../data/dummyData';
import { 
  BookOpen, Brain, Hammer, Cpu, Lightbulb, TrendingUp, Microscope, 
  Leaf, Building, Zap, Users, Activity, Award, Mic, Globe, Heart, Wind, Star, 
  Rocket, Wrench, Mountain, Code, Flower, Search, Terminal, Palette, Battery, 
  Compass, Music, Book, ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap: Record<string, React.FC<any>> = {
  Brain, Hammer, BookOpen, Cpu, Lightbulb, TrendingUp, Microscope, Leaf, Building,
  Zap, Users, Activity, Award, Mic, Globe, Heart, Wind, Star, Rocket, Wrench,
  Mountain, Code, Flower, Search, Terminal, Palette, Battery, Compass, Music, Book
};

const Clubs = () => {
  return (
    <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 flex-1 flex flex-col pt-8">
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Student Clubs & Chapters</h1>
        <p className="text-white/60 text-sm">Discover and join the various vibrant student clubs shaping the ecosystem at VVCE.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {clubsData.map((club, i) => {
          const Icon = iconMap[club.iconName] || BookOpen;
          return (
            <div 
              key={i} 
              className="group flex flex-col p-6 rounded-3xl border border-white/10 bg-[#7a49e6]/5 backdrop-blur-md hover:border-[#7a49e6]/50 hover:bg-[#7a49e6]/10 transition-all cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-24 h-24 bg-[#7a49e6] rounded-full mix-blend-multiply filter blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              
              <div className="mb-4 flex items-center gap-4">
                <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-[#121212] border border-white/10 group-hover:border-[#64CEFB]/50 transition-colors shadow-lg">
                  <Icon className="h-7 w-7 text-[#64CEFB]" />
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#64CEFB] transition-colors line-clamp-2 min-h-[3.5rem]">{club.name}</h3>
              
              <p className="text-white/60 text-sm line-clamp-4 flex-1 mb-6">
                {club.description}
              </p>

              <div className="mt-auto">
                <Link to="/events" className="text-sm font-semibold text-white group-hover:text-[#64CEFB] flex items-center gap-2 transition-colors">
                  Learn more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
  );
};

export default Clubs;
