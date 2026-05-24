const fs = require('fs');

const SUPABASE_URL = 'https://nepznzuyeezoxhqwekfz.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lcHpuenV5ZWV6b3hocXdla2Z6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcyMDY2NDQsImV4cCI6MjA5Mjc4MjY0NH0.mTqdn8vdwuC2B2I5F37Pk5JO5EKcngbqU55XD9epp0c';

async function pushClubsToDB() {
  const content = fs.readFileSync('js/data.js', 'utf8');
  
  const clubsStart = content.indexOf('const clubsData = [');
  const endMarker = content.indexOf('const allNotifications = [');
  if (clubsStart === -1) {
    console.error("Could not find clubsData in js/data.js");
    return;
  }
  // Extract clubsData array
  const match = content.match(/const clubsData = (\[[\s\S]*?\n\]);/);
  if (!match) {
    console.error("Could not parse array");
    return;
  }
  const clubsStr = match[1];
  
  let clubsData;
  try {
    clubsData = eval('(' + clubsStr + ')');
  } catch (e) {
    console.error("Failed to parse clubsData:", e);
    return;
  }
  
  console.log(`Pushing ${clubsData.length} clubs to Supabase...`);

  // Normalize all objects
  const normalizedData = clubsData.map(c => {
    return {
      id: c.id || null,
      name: c.name || null,
      description: c.description || null,
      icon_name: c.iconName || null,
      category: c.category || null,
      founded_year: c.foundedYear || null,
      member_count: c.memberCount || 0,
      recruitment_status: c.recruitmentStatus || null,
      vision: c.vision || [],
      mission: c.mission || [],
      // objectives: c.objectives || [], // Missing in DB
      faculty_coordinators: c.facultyCoordinators || [],
      student_coordinators: c.studentCoordinators || [],
      social_links: c.socialLinks || {}
    };
  });

  const response = await fetch(`${SUPABASE_URL}/rest/v1/clubs`, {
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
    console.log("Successfully upserted all clubs to Supabase!");
  }
}

pushClubsToDB();
