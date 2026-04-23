import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useClubs } from '../context/ClubContext';
import { useAuth } from '../context/AuthContext';
import { 
  ArrowLeft, Edit2, Save, X, Calendar, Users, ArrowRight,
  MessageCircle, ExternalLink, ShieldCheck, 
  BookOpen, Brain, Hammer, Cpu, Lightbulb, TrendingUp, Microscope, 
  Leaf, Building, Zap, Activity, Award, Mic, Globe, Heart, Wind, Star, 
  Rocket, Wrench, Mountain, Code, Flower, Search, Terminal, Palette, Battery, 
  Compass, Music, Book
} from 'lucide-react';
import type { Club } from '../data/dummyData';

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

const getInitials = (name: string) => {
  return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
};

const ClubProfile = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { clubs, updateClub } = useClubs();
  const { user } = useAuth();
  
  const originalClub = clubs.find(c => c.id === id);
  const [isEditing, setIsEditing] = useState(false);
  const [editedClub, setEditedClub] = useState<Club | null>(originalClub || null);

  if (!originalClub || !editedClub) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl text-white mb-4">Club not found</h2>
        <button onClick={() => navigate('/clubs')} className="text-[#64CEFB] hover:underline">
          Return to Clubs
        </button>
      </div>
    );
  }

  const Icon = iconMap[editedClub.iconName] || BookOpen;

  const handleSave = () => {
    updateClub(editedClub);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedClub(originalClub);
    setIsEditing(false);
  };

  // Helper functions to update nested state
  const updateFaculty = (index: number, field: string, value: string) => {
    const newFaculty = [...editedClub.facultyCoordinators];
    newFaculty[index] = { ...newFaculty[index], [field]: value };
    setEditedClub({ ...editedClub, facultyCoordinators: newFaculty });
  };

  const updateStudent = (index: number, field: string, value: string) => {
    const newStudents = [...editedClub.studentCoordinators];
    newStudents[index] = { ...newStudents[index], [field]: value };
    setEditedClub({ ...editedClub, studentCoordinators: newStudents });
  };

  return (
    <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 flex-1 flex flex-col pt-8">
      
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <button onClick={() => navigate('/clubs')} className="flex items-center text-white/60 hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Clubs
        </button>
        
        {/* Only show edit if logged in (in a real app, check if admin or club leader) */}
        {user && !isEditing && (
          <button onClick={() => setIsEditing(true)} className="flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
            <Edit2 className="w-4 h-4 mr-2" />
            Edit Profile
          </button>
        )}
        {isEditing && (
          <div className="flex gap-3">
            <button onClick={handleCancel} className="flex items-center px-4 py-2 bg-red-500/20 text-red-400 hover:bg-red-500/30 rounded-lg transition-colors">
              <X className="w-4 h-4 mr-2" />
              Cancel
            </button>
            <button onClick={handleSave} className="flex items-center px-4 py-2 bg-green-500/20 text-green-400 hover:bg-green-500/30 rounded-lg transition-colors">
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </button>
          </div>
        )}
      </div>

      {/* Hero Section */}
      <div className="relative rounded-3xl border border-white/10 bg-[#121212]/60 backdrop-blur-md p-8 mb-8 overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-[#7a49e6] rounded-full mix-blend-multiply filter blur-[80px] opacity-40"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-[#64CEFB] rounded-full mix-blend-multiply filter blur-[80px] opacity-20"></div>
        
        <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex items-center justify-center h-32 w-32 rounded-3xl bg-[#1a1a1a] border border-white/10 shadow-2xl shrink-0">
            <Icon className="h-16 w-16 text-[#64CEFB]" />
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2 justify-center md:justify-start">
              <h1 className="text-4xl font-bold text-white tracking-tight">{editedClub.name}</h1>
              <span className={`text-xs uppercase tracking-wider font-bold px-3 py-1 rounded-full border w-max mx-auto md:mx-0 ${categoryColors[editedClub.category] || 'bg-white/10 text-white border-white/20'}`}>
                {editedClub.category}
              </span>
            </div>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 text-sm text-white/60 mb-6">
              <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Est. {editedClub.foundedYear}</div>
              <div className="flex items-center gap-1.5"><Users className="w-4 h-4" /> {editedClub.memberCount}+ Members</div>
              <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full ${editedClub.recruitmentStatus === 'Open' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                <ShieldCheck className="w-4 h-4" /> 
                Recruitment: {editedClub.recruitmentStatus}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start gap-3">
              {editedClub.socialLinks.instagram && (
                <a href={editedClub.socialLinks.instagram} target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-pink-500/20 hover:text-pink-400 text-white/60 transition-all border border-white/5">
                  <Globe className="w-5 h-5" />
                </a>
              )}
              {editedClub.socialLinks.linkedin && (
                <a href={editedClub.socialLinks.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-blue-500/20 hover:text-blue-400 text-white/60 transition-all border border-white/5">
                  <Globe className="w-5 h-5" />
                </a>
              )}
              {editedClub.socialLinks.whatsapp && (
                <a href={editedClub.socialLinks.whatsapp} target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-green-500/20 hover:text-green-400 text-white/60 transition-all border border-white/5">
                  <MessageCircle className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* About / Description */}
          <section className="bg-[#121212]/40 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#64CEFB]" /> About Us
            </h3>
            {isEditing ? (
              <textarea 
                value={editedClub.description} 
                onChange={e => setEditedClub({...editedClub, description: e.target.value})}
                className="w-full bg-black/40 border border-white/20 rounded-xl p-4 text-white/80 focus:outline-none focus:border-[#64CEFB] min-h-[150px]"
              />
            ) : (
              <p className="text-white/80 leading-relaxed whitespace-pre-wrap">{editedClub.description}</p>
            )}
          </section>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="bg-[#121212]/40 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-yellow-400" /> Vision
              </h3>
              <ul className="space-y-2">
                {editedClub.vision.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
            
            <section className="bg-[#121212]/40 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Rocket className="w-5 h-5 text-red-400" /> Mission
              </h3>
              <ul className="space-y-2">
                {editedClub.mission.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Photo Gallery (Placeholder) */}
          <section className="bg-[#121212]/40 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5 text-green-400" /> Club Gallery
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="aspect-video bg-white/5 rounded-lg border border-white/10 flex items-center justify-center overflow-hidden group">
                  <span className="text-white/20 group-hover:scale-110 transition-transform">Event Photo {i}</span>
                </div>
              ))}
            </div>
          </section>
          
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          
          {/* Upcoming Events Link */}
          <Link to="/events" className="group flex items-center justify-between bg-gradient-to-r from-[#7a49e6]/20 to-[#64CEFB]/20 border border-[#7a49e6]/30 p-6 rounded-2xl hover:border-[#64CEFB]/50 transition-all">
            <div>
              <h3 className="text-white font-bold mb-1">Upcoming Events</h3>
              <p className="text-white/60 text-xs">See what {editedClub.name} is hosting next.</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </Link>

          {/* Faculty Coordinators */}
          <section className="bg-[#121212]/40 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <h3 className="text-lg font-bold text-white mb-4">Faculty Coordinators</h3>
            <div className="space-y-4">
              {editedClub.facultyCoordinators.map((faculty, idx) => (
                <div key={idx} className="flex flex-col gap-2 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors relative">
                  {isEditing ? (
                    <>
                      <input 
                        className="bg-black/50 border border-white/20 rounded p-1 text-sm text-white focus:outline-none" 
                        value={faculty.name} 
                        onChange={e => updateFaculty(idx, 'name', e.target.value)} 
                        placeholder="Faculty Name"
                      />
                      <input 
                        className="bg-black/50 border border-white/20 rounded p-1 text-xs text-white/60 focus:outline-none" 
                        value={faculty.role} 
                        onChange={e => updateFaculty(idx, 'role', e.target.value)} 
                        placeholder="Role"
                      />
                    </>
                  ) : (
                    <>
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-white font-medium text-sm">{faculty.name}</p>
                          <p className="text-[#64CEFB] text-xs">{faculty.role}</p>
                        </div>
                        <Link to={`/directory?q=${encodeURIComponent(faculty.name)}`} className="text-white/40 hover:text-white" title="Find Faculty Cabin">
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Student Coordinators */}
          <section className="bg-[#121212]/40 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <h3 className="text-lg font-bold text-white mb-4">Student Core Team</h3>
            <div className="space-y-4">
              {editedClub.studentCoordinators.map((student, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7a49e6] to-[#64CEFB] flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {getInitials(student.name)}
                  </div>
                  
                  {isEditing ? (
                    <div className="flex flex-col gap-1 w-full">
                      <input 
                        className="bg-black/50 border border-white/20 rounded px-2 py-0.5 text-sm text-white w-full focus:outline-none" 
                        value={student.name} 
                        onChange={e => updateStudent(idx, 'name', e.target.value)} 
                        placeholder="Student Name"
                      />
                      <input 
                        className="bg-black/50 border border-white/20 rounded px-2 py-0.5 text-xs text-white/60 w-full focus:outline-none" 
                        value={student.role} 
                        onChange={e => updateStudent(idx, 'role', e.target.value)} 
                        placeholder="Role"
                      />
                      <div className="flex gap-2">
                        <input 
                          className="bg-black/50 border border-white/20 rounded px-2 py-0.5 text-xs text-white/60 w-1/2 focus:outline-none" 
                          value={student.branch} 
                          onChange={e => updateStudent(idx, 'branch', e.target.value)} 
                          placeholder="Branch"
                        />
                        <input 
                          className="bg-black/50 border border-white/20 rounded px-2 py-0.5 text-xs text-white/60 w-1/2 focus:outline-none" 
                          value={student.semester} 
                          onChange={e => updateStudent(idx, 'semester', e.target.value)} 
                          placeholder="Sem"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col">
                      <p className="text-white font-medium text-sm leading-tight">{student.name}</p>
                      <p className="text-[#64CEFB] text-xs leading-tight mb-1">{student.role}</p>
                      <p className="text-white/40 text-[10px] uppercase tracking-wider">{student.branch} • {student.semester}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
      
    </div>
  );
};

export default ClubProfile;
