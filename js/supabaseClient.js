// supabaseClient.js
// Initialize Supabase Client

const SUPABASE_URL = 'https://nepznzuyeezoxhqwekfz.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lcHpuenV5ZWV6b3hocXdla2Z6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcyMDY2NDQsImV4cCI6MjA5Mjc4MjY0NH0.mTqdn8vdwuC2B2I5F37Pk5JO5EKcngbqU55XD9epp0c';

// Create a single supabase client for interacting with your database
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Example: Expose it globally to use in other files (like data.js or app.js)
window.supabaseClient = supabase;
