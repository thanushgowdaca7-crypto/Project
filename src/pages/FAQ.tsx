import { HelpCircle } from 'lucide-react';

const FAQ = () => {
  return (
    <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 flex-1 flex flex-col pt-8 h-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Frequently Asked Questions</h1>
        <p className="text-white/60 text-sm">Find answers around locating and interacting with faculty members.</p>
      </div>

      <div className="flex-1 min-h-[400px] w-full rounded-2xl border border-white/10 bg-[#121212]/40 flex flex-col items-center justify-center p-8 text-center backdrop-blur-sm">
        <HelpCircle className="h-16 w-16 text-white/20 mb-4" />
        <h2 className="text-xl font-medium text-white mb-2">Knowledge Base Building</h2>
        <p className="text-white/50 max-w-md">We are compiling standard operating questions regarding cabin appointments, department blocks mapping, and contact protocols.</p>
      </div>
    </div>
  );
};

export default FAQ;
