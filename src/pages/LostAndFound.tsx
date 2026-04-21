import { Search, PackageOpen, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const dummyLostFound = [
  { id: 1, type: 'Lost', item: 'Blue Water Bottle', department: 'CSE Block', date: '2026-04-19', details: 'Milton bottle left near Lab 3', status: 'Unresolved' },
  { id: 2, type: 'Found', item: 'Calculator (Casio fx-991EX)', department: 'ECE Block', date: '2026-04-20', details: 'Found on the 2nd-floor stairs. Handed over to HOD office.', status: 'Claimable' },
  { id: 3, type: 'Lost', item: 'ID Card (4VV22CS...)', department: 'Canteen', date: '2026-04-18', details: 'Lost somewhere between Library and Canteen.', status: 'Unresolved' },
];

const LostAndFound = () => {
  const { t } = useLanguage();

  return (
    <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 flex-1 flex flex-col pt-8">
      <div className="mb-12 md:flex md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-white mb-4">{t('nav_lost_found')}</h1>
          <p className="text-white/60 text-lg">Report lost items or help return found ones on campus.</p>
        </div>
        
        <div className="mt-6 md:mt-0 flex gap-4">
          <button className="btn-61 !px-6 !py-3">
            <span>+ Report Item</span>
          </button>
        </div>
      </div>

      <div className="mb-8 relative w-full md:max-w-md">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full rounded-2xl border-0 py-3 pl-10 pr-4 bg-[#121212]/60 backdrop-blur-md ring-1 ring-inset ring-white/10 text-white focus:ring-2 focus:ring-inset focus:ring-[#64CEFB] sm:text-sm transition-all"
          placeholder="Search by item, location, or department..."
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {dummyLostFound.map((item) => (
          <div key={item.id} className="rounded-2xl border border-white/10 bg-[#121212]/40 backdrop-blur-sm p-6 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold border ${item.type === 'Lost' ? 'bg-red-500/10 text-red-400 border-red-500/20' : 'bg-green-500/10 text-green-400 border-green-500/20'}`}>
                {item.type === 'Lost' ? <HelpCircle className="w-3 h-3 mr-1" /> : <PackageOpen className="w-3 h-3 mr-1" />}
                {item.type}
              </span>
              <span className="text-xs text-white/40">{item.date}</span>
            </div>
            
            <h3 className="text-lg font-bold text-white mb-1">{item.item}</h3>
            <p className="text-sm font-medium text-[#64CEFB] mb-3">{item.department}</p>
            
            <p className="text-white/60 text-sm mb-6 flex-1">{item.details}</p>
            
            <div className="pt-4 border-t border-white/10 flex justify-between items-center">
              <span className="text-xs text-white/40">Status: {item.status}</span>
              <button className="text-sm text-purple-400 hover:text-purple-300 font-medium">Contact Finder</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LostAndFound;
