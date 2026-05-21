const fs = require('fs');

const SUPABASE_URL = 'https://nepznzuyeezoxhqwekfz.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lcHpuenV5ZWV6b3hocXdla2Z6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcyMDY2NDQsImV4cCI6MjA5Mjc4MjY0NH0.mTqdn8vdwuC2B2I5F37Pk5JO5EKcngbqU55XD9epp0c';

async function pushToDB() {
  const content = fs.readFileSync('js/data.js', 'utf8');
  
  const facultyStart = content.indexOf('const facultyData = [');
  const departmentsStart = content.indexOf('const departmentsData = [');
  const facultyStr = content.substring(facultyStart + 'const facultyData = '.length, departmentsStart).trim().replace(/;$/, '');
  
  let facultyData;
  try {
    facultyData = eval('(' + facultyStr + ')');
  } catch (e) {
    console.error("Failed to parse facultyData:", e);
    return;
  }
  
  console.log(`Pushing ${facultyData.length} faculties to Supabase...`);

  // Normalize all objects to only include columns that exist in Supabase
  const normalizedData = facultyData.map(f => {
    return {
      id: f.id,
      name: f.name,
      department: f.department,
      role: f.role || f.title,
      cabin: f.cabin,
      status: f.status || 'Available',
      email: f.email
    };
  });

  const response = await fetch(`${SUPABASE_URL}/rest/v1/faculty`, {
    method: 'POST',
    headers: {
      'apikey': SUPABASE_ANON_KEY,
      'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      'Content-Type': 'application/json',
      'Prefer': 'resolution=merge-duplicates'
    },
    body: JSON.stringify(normalizedData)
  });

  if (!response.ok) {
    const err = await response.text();
    console.error("Failed to upsert:", response.status, err);
  } else {
    console.log("Successfully upserted all faculties including their updated cabins to Supabase!");
  }
}

pushToDB();
