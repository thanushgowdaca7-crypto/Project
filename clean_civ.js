const url = 'https://nepznzuyeezoxhqwekfz.supabase.co/rest/v1/faculty?department=eq.Civil%20Engineering';
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lcHpuenV5ZWV6b3hocXdla2Z6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcyMDY2NDQsImV4cCI6MjA5Mjc4MjY0NH0.mTqdn8vdwuC2B2I5F37Pk5JO5EKcngbqU55XD9epp0c';

fetch(url, {
  method: 'DELETE',
  headers: {
    'apikey': key,
    'Authorization': 'Bearer ' + key
  }
}).then(async res => {
  console.log("Status:", res.status);
  console.log("Text:", await res.text());
}).catch(console.error);
