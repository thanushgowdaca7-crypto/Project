// supabaseClient.js
// Initialize Supabase Client

const SUPABASE_URL = 'https://nepznzuyeezoxhqwekfz.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lcHpuenV5ZWV6b3hocXdla2Z6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcyMDY2NDQsImV4cCI6MjA5Mjc4MjY0NH0.mTqdn8vdwuC2B2I5F37Pk5JO5EKcngbqU55XD9epp0c';

try {
  if (typeof window !== 'undefined') {
    if (!window.supabase) {
      console.error("Supabase CDN failed to load. window.supabase is undefined.");
      // Provide a clear global error state
      window.SUPABASE_INIT_ERROR = "Supabase library not found from CDN. Check your network connection.";
    } else {
      // Create a single supabase client for interacting with your database
      window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    }
  }
} catch (err) {
  console.error("Failed to initialize Supabase client:", err);
  window.SUPABASE_INIT_ERROR = err.message;
}
