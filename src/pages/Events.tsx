import { useState } from 'react';
import { CalendarDays, MapPin, Clock, Trophy, FileCheck, Send, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';

const Events = () => {
  const { t } = useLanguage();
  const { user } = useAuth();
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [requestSent, setRequestSent] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleSendRequest = () => {
    setRequestSent(true);
    setTimeout(() => {
      setShowRequestForm(false);
      setRequestSent(false);
    }, 3000);
  };

  return (
    <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 flex-1 flex flex-col pt-8">
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-white mb-4">{t('nav_events')}</h1>
        <p className="text-white/60 text-lg">Stay updated with ongoing technical fests, hackathons, and campus activities.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Promotion Banner */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Trophy className="w-6 h-6 text-[#64CEFB]" />
            Featured Fest: Vidyut 2026
          </h2>
          <div className="rounded-3xl border border-[#64CEFB]/30 bg-gradient-to-br from-[#64CEFB]/10 to-purple-500/10 backdrop-blur-xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-[#64CEFB] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
            
            <h3 className="text-3xl font-black text-white mb-4">Tech-A-Thon 24hrs</h3>
            <p className="text-white/80 mb-6 leading-relaxed">Join the biggest state-level Hackathon hosted by VVCE. Build solutions for smart cities, healthcare, and educational empowerment!</p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-sm font-medium text-white/90 bg-black/40 w-fit px-4 py-2 rounded-lg border border-white/5">
                <CalendarDays className="w-4 h-4 mr-3 text-[#64CEFB]" />
                Next Friday, 9:00 AM - Saturday, 9:00 AM
              </div>
              <div className="flex items-center text-sm font-medium text-white/90 bg-black/40 w-fit px-4 py-2 rounded-lg border border-white/5">
                <MapPin className="w-4 h-4 mr-3 text-purple-400" />
                Main CSE Block, Lab 2 & 3
              </div>
            </div>

            {!showRequestForm ? (
              <button 
                onClick={() => setShowRequestForm(true)} 
                className="btn-61 !px-8 !py-3"
              >
                <span>{user?.role === 'STUDENT' ? 'Request Attendance & Register' : 'Register Now'}</span>
              </button>
            ) : (
              <div className="mt-8 border-t border-white/10 pt-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-[#64CEFB]" />
                  Attendance Authorization
                </h4>
                
                {requestSent ? (
                  <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-4 rounded-xl flex items-center justify-center gap-3">
                    <CheckCircle2 className="w-5 h-5" />
                    Request sent to Faculty successfully!
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-sm text-white/70">
                      As a student, you must request permission from your assigned faculty and upload any required pre-hackathon certificates (e.g. valid ID, consent form).
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <label className="flex-1 border-2 border-dashed border-[#64CEFB]/30 bg-[#64CEFB]/5 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:border-[#64CEFB]/50 hover:bg-[#64CEFB]/10 transition-colors cursor-pointer relative">
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
                        <FileCheck className="h-6 w-6 text-[#64CEFB]/50 mb-2" />
                        <span className="text-xs font-medium text-[#64CEFB]">
                          {fileName ? fileName : 'Click to Upload Certificate'}
                        </span>
                        {!fileName && <span className="text-[10px] text-white/30 mt-1">PDF or JPG up to 5MB</span>}
                      </label>
                      
                      <select className="flex-1 bg-[#121212] border border-white/10 rounded-xl text-white text-sm px-4 py-3 outline-none focus:border-[#64CEFB]">
                        <option>Select Faculty to Request...</option>
                        <option>Dr. Pooja M R (HOD)</option>
                        <option>Dr. Ravi Kumar (Dean)</option>
                        <option>Dr. Natesh (Assoc. Prof)</option>
                      </select>
                    </div>

                    <button 
                      onClick={handleSendRequest}
                      className="w-full bg-[#64CEFB] hover:bg-[#64CEFB]/80 text-black font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 mt-4"
                    >
                      <Send className="w-4 h-4" />
                      Submit Request & Certificate
                    </button>
                    
                    <button 
                      onClick={() => setShowRequestForm(false)}
                      className="w-full text-white/40 hover:text-white/80 text-xs py-2 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Clock className="w-6 h-6 text-purple-400" />
            Hackathon Timeline
          </h2>
          
          <div className="relative border-l-2 border-white/10 ml-4 space-y-8 pb-4">
            
            <div className="relative pl-8">
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-[#64CEFB] shadow-[0_0_10px_#64cefb]"></div>
              <h3 className="text-lg font-semibold text-white">Opening Ceremony</h3>
              <p className="text-[#64CEFB] text-sm font-medium mb-2">9:00 AM - Auditorium</p>
              <p className="text-white/50 text-sm">Keynote speech, team formations, and problem statement reveals.</p>
            </div>

            <div className="relative pl-8">
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-[#64CEFB] bg-black"></div>
              <h3 className="text-lg font-semibold text-white">Coding Phase Begins</h3>
              <p className="text-white/70 text-sm font-medium mb-2">11:00 AM - CSE Labs</p>
              <p className="text-white/50 text-sm">Teams transition to their designated lab venues and begin architecture planning.</p>
            </div>

            <div className="relative pl-8">
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-purple-500 bg-black"></div>
              <h3 className="text-lg font-semibold text-white">First Evaluation</h3>
              <p className="text-white/70 text-sm font-medium mb-2">6:00 PM - Respective Labs</p>
              <p className="text-white/50 text-sm">Judges will visit each team's venue to check on initial prototypes.</p>
            </div>

            <div className="relative pl-8">
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-white/20 bg-black"></div>
              <h3 className="text-lg font-semibold text-white/50">Final Presentation</h3>
              <p className="text-white/30 text-sm font-medium mb-2">Day 2, 10:00 AM - Seminar Hall</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
