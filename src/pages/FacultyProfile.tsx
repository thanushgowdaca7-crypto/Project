import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Mail, User, Clock, Building2, Calendar, FileCheck, Send, CheckCircle2 } from 'lucide-react';
import { facultyData } from '../data/dummyData';
import { useAuth } from '../context/AuthContext';

const FacultyProfile = () => {
  const { id } = useParams<{ id: string }>();
  const [fileName, setFileName] = useState<string | null>(null);
  const [requestSent, setRequestSent] = useState(false);
  const [isBroadcasting, setIsBroadcasting] = useState(() => {
    return localStorage.getItem(`broadcast_${id}`) === 'true';
  });
  
  const navigate = useNavigate();
  const { user } = useAuth();
  const faculty = facultyData.find(f => f.id === id);

  // Poll for location updates if student
  useEffect(() => {
    if (user?.role !== 'STUDENT') return;
    
    const interval = setInterval(() => {
      const active = localStorage.getItem(`broadcast_${id}`) === 'true';
      if (active !== isBroadcasting) setIsBroadcasting(active);
    }, 2000);
    return () => clearInterval(interval);
  }, [id, user, isBroadcasting]);

  const toggleBroadcast = () => {
    const newState = !isBroadcasting;
    setIsBroadcasting(newState);
    if (newState) {
      localStorage.setItem(`broadcast_${id}`, 'true');
    } else {
      localStorage.removeItem(`broadcast_${id}`);
    }
  };

  if (!faculty) {
    return (
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center pt-8 text-center text-white">
        <h1 className="text-3xl font-bold mb-4">Faculty Not Found</h1>
        <p className="text-white/60 mb-8">The profile you are looking for does not exist.</p>
        <button onClick={() => navigate('/directory')} className="btn-61">
          <span>Return to Directory</span>
        </button>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Available': return 'bg-green-500/20 text-green-400 border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.3)]';
      case 'In Class': return 'bg-blue-500/20 text-blue-400 border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.3)]';
      case 'On Leave': return 'bg-red-500/20 text-red-400 border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.3)]';
      case 'Meeting': return 'bg-orange-500/20 text-orange-400 border-orange-500/30 shadow-[0_0_15px_rgba(249,115,22,0.3)]';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="relative z-10 mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8 flex-1 flex flex-col">
      <Link 
        to="/directory" 
        className="inline-flex items-center text-sm font-medium text-white/60 hover:text-[#64CEFB] transition-colors mb-8 w-fit"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Directory
      </Link>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Profile Sidebar */}
        <div className="w-full md:w-1/3 shrink-0 flex flex-col gap-6">
          <div className="rounded-3xl border border-white/10 bg-[#121212]/60 backdrop-blur-md p-8 flex flex-col items-center text-center shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold border backdrop-blur-md transition-all ${getStatusColor(faculty.status)}`}>
                <Clock className="w-3 h-3 mr-1.5" />
                {faculty.status}
              </span>
            </div>
            
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#64CEFB]/20 to-purple-500/20 border-2 border-white/10 flex items-center justify-center mb-6 shadow-inner relative z-10 mt-6">
              <User className="h-16 w-16 text-white/50" strokeWidth={1} />
            </div>
            
            <h1 className="text-2xl font-bold tracking-tight text-white mb-2">{faculty.name}</h1>
            <p className="text-[#64CEFB] font-medium mb-1">{faculty.role}</p>
            <p className="text-sm text-white/50">{faculty.department}</p>
          </div>

          {/* FACULTY CONTROL POINT: Broadcast Location */}
          {user?.role === 'FACULTY' && (
            <div className="rounded-3xl border border-rose-500/30 bg-rose-500/5 backdrop-blur-md p-6 mt-[-10px]">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-white font-bold flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${isBroadcasting ? 'bg-rose-500 animate-pulse' : 'bg-gray-500'}`}></span>
                  Live GPS
                </h3>
                <button 
                  onClick={toggleBroadcast}
                  className={`px-4 py-2 rounded-lg font-bold text-[10px] transition-colors uppercase ${isBroadcasting ? 'bg-rose-500 text-white shadow-[0_0_15px_rgba(244,63,94,0.4)]' : 'bg-white/10 text-white hover:bg-white/20'}`}
                >
                  {isBroadcasting ? 'Stop Broadcast' : 'Start Broadcast'}
                </button>
              </div>
              <p className="text-xs text-white/60 leading-relaxed">
                {isBroadcasting 
                  ? "Transmitting live Uber-style coordinates. Students viewing your profile can currently track your position on campus."
                  : "Enable if walking to a lab or event. Students will track your live ETA on the grid."}
              </p>
            </div>
          )}
        </div>

        {/* Details Content */}
        <div className="w-full md:w-2/3 flex flex-col gap-6">
          {/* Location Block */}
          <div className="rounded-3xl border border-white/10 bg-[#121212]/40 backdrop-blur-md p-8 relative overflow-hidden group hover:border-white/20 transition-all">
            <div className="absolute inset-0 bg-gradient-to-br from-[#64CEFB]/0 to-[#64CEFB]/5 group-hover:to-[#64CEFB]/10 transition-colors pointer-events-none" />
            
            <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <Building2 className="h-5 w-5 text-[#64CEFB]" />
              Cabin Block Location
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col">
                <span className="text-xs text-white/40 uppercase tracking-wider mb-2">Primary Location</span>
                <div className="flex items-start text-white/90">
                  <MapPin className="h-5 w-5 mr-3 mt-0.5 text-[#64CEFB]" />
                  <span className="font-medium text-lg">{faculty.cabin}</span>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col">
                <span className="text-xs text-white/40 uppercase tracking-wider mb-2">Campus Map Link</span>
                <Link to="/campus-map" className="inline-flex items-center text-sm font-medium text-[#64CEFB] hover:text-white transition-colors bg-[#64CEFB]/10 hover:bg-[#64CEFB]/20 p-3 rounded-xl justify-center w-full mt-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  View on Map
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="rounded-3xl border border-white/10 bg-[#121212]/40 backdrop-blur-md p-8 relative overflow-hidden group hover:border-white/20 transition-all">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/5 group-hover:to-purple-500/10 transition-colors pointer-events-none" />
            
            <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <User className="h-5 w-5 text-purple-400" />
              Contact Information
            </h2>
            
            <div className="space-y-4 relative z-10 col-span-2">
              <div className="flex items-center p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-xs text-white/40">Official Email</p>
                  <p className="text-white font-medium">{faculty.email}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hackathon Approval & Certification Module (Universally Visible for Prototype) */}
          <div className="rounded-3xl border border-[#64CEFB]/30 bg-gradient-to-br from-[#121212]/40 to-[#64CEFB]/5 backdrop-blur-md p-8 relative overflow-hidden">
              <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <FileCheck className="h-5 w-5 text-[#64CEFB]" />
                Hackathon Authorization Request
              </h2>
              
              <div className="space-y-4">
                <p className="text-sm text-white/70">
                  Request authorization from {faculty.name} to attend upcoming fest activities. Upload any necessary pre-requisites below.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  {requestSent ? (
                    <div className="flex-1 bg-green-500/10 border border-green-500/20 text-green-400 p-4 rounded-xl flex items-center justify-center gap-3">
                      <CheckCircle2 className="w-5 h-5" />
                      Request & Certificate sent successfully!
                    </div>
                  ) : (
                    <>
                      <label className="flex-1 w-full border-2 border-dashed border-white/20 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:border-[#64CEFB]/50 transition-colors cursor-pointer bg-white/5 relative">
                        <input 
                          type="file" 
                          className="hidden" 
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                              setFileName(e.target.files[0].name);
                            }
                          }}
                        />
                        <FileCheck className="h-6 w-6 text-white/40 mb-2" />
                        <span className="text-xs font-medium text-white/50">
                          {fileName ? fileName : 'Click to Upload Certification'}
                        </span>
                      </label>
                      
                      <button 
                        onClick={() => {
                          setRequestSent(true);
                          setTimeout(() => setRequestSent(false), 3000);
                        }}
                        className="btn-61 !h-full !px-6 !py-0 flex-1 flex items-center justify-center rounded-xl bg-[#64CEFB] hover:bg-[#64CEFB]/80 transition-colors"
                      >
                        <span>
                           <div className="flex items-center gap-2">
                             <Send className="w-4 h-4" />
                             Send Request
                           </div>
                        </span>
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          {/* Schedule/Meeting (Placeholder layout) */}
          <div className="rounded-3xl border border-white/10 bg-[#121212]/40 backdrop-blur-md p-8">
            <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-green-400" />
              Office Hours Snapshot
            </h2>
            <div className="text-center py-6 border border-dashed border-white/20 rounded-xl bg-white/5">
              <p className="text-white/50 text-sm">Detailed availability schedules are coming soon.</p>
            </div>
          </div>

          {/* STUDENT VIEWER: Uber-Style Tracker */}
          {user?.role === 'STUDENT' && (
            <div className="rounded-3xl border border-white/10 bg-[#121212]/40 backdrop-blur-md p-8 overflow-hidden relative transition-all">
              <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-rose-400" />
                Live Uber-Style Tracker
              </h2>
              
              {isBroadcasting ? (
                <div className="space-y-4">
                  <div className="bg-rose-500/10 text-rose-400 border border-rose-500/30 rounded-lg p-3 text-xs font-semibold flex items-center gap-2 mb-4">
                   <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping"></span>
                   GPS SIGNAL FOUND: ESTIMATED 240 METERS AWAY
                  </div>
                  <div className="w-full h-80 rounded-2xl border-2 border-white/10 overflow-hidden relative shadow-[0_0_40px_rgba(244,63,94,0.15)] group">
                    <div className="absolute inset-0 bg-rose-500/10 mix-blend-color pointer-events-none group-hover:opacity-0 transition-opacity z-10" />
                    <iframe
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      src={`https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&q=Vidyavardhaka+College+of+Engineering,Mysuru`}
                    ></iframe>
                  </div>
                </div>
              ) : (
                <div className="text-center py-10 border border-dashed border-white/20 rounded-xl bg-white/5 opacity-50 grayscale">
                  <MapPin className="h-8 w-8 text-white/30 mx-auto mb-3" />
                  <p className="text-white/70 text-sm font-medium">Tracking Disabled by Faculty.</p>
                  <p className="text-white/40 text-xs mt-1">Live location map is only available during active broadcasts.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FacultyProfile;
