import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { KeyRound, AlertCircle } from 'lucide-react';

const Login = () => {
  const [idInput, setIdInput] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!idInput) {
      setError('Please enter your Campus ID.');
      return;
    }

    const success = login(idInput);
    if (success) {
      navigate('/');
    } else {
      setError('Invalid ID format. Use 4VV... (Student) or FAC... (Faculty) or ADMIN.');
    }
  };

  return (
    <div className="relative z-10 flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#64CEFB]/10 mb-4">
            <KeyRound className="h-8 w-8 text-[#64CEFB]" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white mb-2">Campus Login</h2>
          <p className="text-sm text-white/50">Authenticate using your valid Institutional ID.</p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#121212]/60 backdrop-blur-xl p-8 shadow-2xl">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="id-input" className="block text-sm font-medium leading-6 text-white/80 mb-2">
                Identity Number (USN / Faculty ID)
              </label>
              <div className="relative">
                <input
                  id="id-input"
                  name="id"
                  type="text"
                  required
                  value={idInput}
                  onChange={(e) => setIdInput(e.target.value.toUpperCase())}
                  className="block w-full rounded-xl border-0 bg-white/5 py-4 pl-4 pr-10 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[#64CEFB] sm:text-sm sm:leading-6 placeholder:text-white/20 transition-all uppercase"
                  placeholder="e.g. 4VV20CS001 or FAC001"
                />
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <p>{error}</p>
              </div>
            )}

            <button type="submit" className="btn-61 w-full flex justify-center !px-0 rounded-xl">
              <span>Sign In Securely</span>
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-xs text-white/40 mb-2">Developer Mock Testing Examples:</p>
            <div className="flex justify-center gap-4 text-xs font-mono text-[#64CEFB]">
              <span>🎓 4VV22CS</span>
              <span>👨‍🏫 FAC123</span>
              <span>🛡️ ADMIN</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
