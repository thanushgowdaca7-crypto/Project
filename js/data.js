const facultyData = [
  // New ECE Staff from the provided list
  { id: 'ece1', name: 'Dr. Chandrashekar M Patil', department: 'Electronics & Communication Engineering', role: 'Professor & Head', cabin: 'ECE Block, Room Head-1', status: 'Available', email: 'chandrashekar.mp@vvce.ac.in' },
  { id: 'ece2', name: 'Dr. T P Surekha', department: 'Electronics & Communication Engineering', role: 'Professor & Dean(Student Welfare)', cabin: 'ECE Block, Room Dean-1', status: 'Meeting', email: 'surekha.tp@vvce.ac.in' },
  { id: 'ece3', name: 'Dr. Suchitra M', department: 'Electronics & Communication Engineering', role: 'Professor', cabin: 'ECE Block, Room 201', status: 'In Class', email: 'suchitra.m@vvce.ac.in' },
  { id: 'ece4', name: 'Dr. Shilpa R', department: 'Electronics & Communication Engineering', role: 'Associate Professor', cabin: 'ECE Block, Room 202', status: 'Available', email: 'shilpa.r@vvce.ac.in' },
  { id: 'ece5', name: 'Dr. Geethashree A', department: 'Electronics & Communication Engineering', role: 'Associate Professor', cabin: 'ECE Block, Room 203', status: 'On Leave', email: 'geethashree.a@vvce.ac.in' },
  { id: 'ece6', name: 'Dr. Geetha M N', department: 'Electronics & Communication Engineering', role: 'Assistant Professor', cabin: 'ECE Block, Room 204', status: 'Available', email: 'geetha.mn@vvce.ac.in' },
  { id: 'ece7', name: 'Dr. Sudheesh K V', department: 'Electronics & Communication Engineering', role: 'Associate Professor & Dy. COE', cabin: 'ECE Block, Room 205', status: 'In Class', email: 'sudheesh.kv@vvce.ac.in' },
  { id: 'ece8', name: 'Dr. Jagadeesh B', department: 'Electronics & Communication Engineering', role: 'Associate Professor', cabin: 'ECE Block, Room 206', status: 'Available', email: 'jagadeesh.b@vvce.ac.in' },
  { id: 'ece9', name: 'Dr. Mahadevaswamy', department: 'Electronics & Communication Engineering', role: 'Associate Professor', cabin: 'ECE Block, Room 207', status: 'Meeting', email: 'mahadevaswamy@vvce.ac.in' },
  { id: 'ece10', name: 'Dr. Sharath Kumar A J', department: 'Electronics & Communication Engineering', role: 'Associate Professor', cabin: 'ECE Block, Room 208', status: 'Available', email: 'sharath.aj@vvce.ac.in' },
  { id: 'ece11', name: 'Dr. Naveen Kumar H N', department: 'Electronics & Communication Engineering', role: 'Associate Professor', cabin: 'ECE Block, Room 209', status: 'In Class', email: 'naveen.hn@vvce.ac.in' },
  { id: 'ece12', name: 'Dr. Nagaraja B G', department: 'Electronics & Communication Engineering', role: 'Associate Professor & Associate Dean', cabin: 'ECE Block, Room 301', status: 'Available', email: 'nagaraja.bg@vvce.ac.in' },
  { id: 'ece13', name: 'Dr. Kiran', department: 'Electronics & Communication Engineering', role: 'Assistant Professor', cabin: 'ECE Block, Room 302', status: 'On Leave', email: 'kiran@vvce.ac.in' },
  { id: 'ece14', name: 'Dr. Vinay B K', department: 'Electronics & Communication Engineering', role: 'Assistant Professor', cabin: 'ECE Block, Room 303', status: 'Available', email: 'vinay.bk@vvce.ac.in' },
  { id: 'ece15', name: 'Dr. Kavya A P', department: 'Electronics & Communication Engineering', role: 'Assistant Professor', cabin: 'ECE Block, Room 304', status: 'In Class', email: 'kavya.ap@vvce.ac.in' },
  { id: 'ece16', name: 'Girijamba D L', department: 'Electronics & Communication Engineering', role: 'Assistant Professor', cabin: 'ECE Block, Room 305', status: 'Available', email: 'girijamba.dl@vvce.ac.in' },
  { id: 'ece17', name: 'Kavyashree B', department: 'Electronics & Communication Engineering', role: 'Assistant Professor', cabin: 'ECE Block, Room 306', status: 'Meeting', email: 'kavyashree.b@vvce.ac.in' },
  { id: 'ece18', name: 'Dr. Alfred Vivek D\'Souza', department: 'Electronics & Communication Engineering', role: 'Assistant Professor', cabin: 'ECE Block, Room 307', status: 'Available', email: 'alfred.dsouza@vvce.ac.in' },
  { id: 'ece19', name: 'Bhargavi K', department: 'Electronics & Communication Engineering', role: 'Assistant Professor', cabin: 'ECE Block, Room 308', status: 'Available', email: 'bhargavi.k@vvce.ac.in' },
  { id: 'ece20', name: 'Sahana M S', department: 'Electronics & Communication Engineering', role: 'Assistant Professor', cabin: 'ECE Block, Room 309', status: 'In Class', email: 'sahana.ms@vvce.ac.in' },
  { id: 'ece21', name: 'Praveena K S', department: 'Electronics & Communication Engineering', role: 'Assistant Professor', cabin: 'ECE Block, Room 310', status: 'Available', email: 'praveena.ks@vvce.ac.in' },
  { id: 'ece22', name: 'Audre Arlene A', department: 'Electronics & Communication Engineering', role: 'Assistant Professor', cabin: 'ECE Block, Room 311', status: 'Meeting', email: 'audre.a@vvce.ac.in' },
  { id: 'ece23', name: 'Kirankumar Humse', department: 'Electronics & Communication Engineering', role: 'Assistant Professor', cabin: 'ECE Block, Room 312', status: 'Available', email: 'kirankumar.h@vvce.ac.in' },

  // Computer Science Department Staff
  { id: 'cs1', name: 'Dr. Pooja M R', department: 'Computer Science', role: 'Professor and HOD', cabin: 'CSE Block, Room 101', status: 'Available', email: 'pooja.mr@vvce.ac.in' },
  { id: 'cs2', name: 'Dr. Ravi Kumar V', department: 'Computer Science', role: 'Professor & Dean: Training & Placement', cabin: 'CSE Block, Room 102', status: 'In Class', email: 'ravikumar.v@vvce.ac.in' },
  { id: 'cs3', name: 'Dr. A B Rajendra', department: 'Computer Science', role: 'Professor, Associate Dean: Students Research', cabin: 'CSE Block, Room 103', status: 'Meeting', email: 'ab.rajendra@vvce.ac.in' },
  { id: 'cs4', name: 'Dr. K. Paramesha', department: 'Computer Science', role: 'Professor', cabin: 'CSE Block, Room 104', status: 'Available', email: 'k.paramesha@vvce.ac.in' },
  { id: 'cs5', name: 'Dr. Natesh. M', department: 'Computer Science', role: 'Associate Professor', cabin: 'CSE Block, Room 105', status: 'On Leave', email: 'natesh.m@vvce.ac.in' },
  { id: 'cs6', name: 'Dr. Janhavi. V', department: 'Computer Science', role: 'Associate Professor', cabin: 'CSE Block, Room 106', status: 'Available', email: 'janhavi.v@vvce.ac.in' },
  { id: 'cs7', name: 'Dr. Ayesha Taranum', department: 'Computer Science', role: 'Associate Professor', cabin: 'CSE Block, Room 107', status: 'Meeting', email: 'ayesha.taranum@vvce.ac.in' },
  { id: 'cs8', name: 'Dr. Prasad M R', department: 'Computer Science', role: 'Associate Professor', cabin: 'CSE Block, Room 108', status: 'Available', email: 'prasad.mr@vvce.ac.in' },
  { id: 'cs9', name: 'Dr. Madhusdhan H S', department: 'Computer Science', role: 'Associate Professor', cabin: 'CSE Block, Room 109', status: 'In Class', email: 'madhusdhan.hs@vvce.ac.in' },
  { id: 'cs10', name: 'Dr. Chethana H T', department: 'Computer Science', role: 'Associate Professor', cabin: 'CSE Block, Room 110', status: 'Available', email: 'chethana.ht@vvce.ac.in' },
  { id: 'cs11', name: 'Dr. Vartika Sharma', department: 'Computer Science', role: 'Associate Professor', cabin: 'CSE Block, Room 111', status: 'On Leave', email: 'vartika.sharma@vvce.ac.in' },
  { id: 'cs12', name: 'Dr. Divya C D', department: 'Computer Science', role: 'Associate Professor', cabin: 'CSE Block, Room 112', status: 'Available', email: 'divya.cd@vvce.ac.in' },
  { id: 'cs13', name: 'Dr. Vedavathi N', department: 'Computer Science', role: 'Associate Professor', cabin: 'CSE Block, Room 113', status: 'In Class', email: 'vedavathi.n@vvce.ac.in' },
  { id: 'cs14', name: 'Dr. Hamsaveni M', department: 'Computer Science', role: 'Associate Professor', cabin: 'CSE Block, Room 114', status: 'Meeting', email: 'hamsaveni.m@vvce.ac.in' },
  { id: 'cs15', name: 'Dr. Nithin Kumar', department: 'Computer Science', role: 'Associate Professor', cabin: 'CSE Block, Room 115', status: 'Available', email: 'nithin.kumar@vvce.ac.in' },
  { id: 'cs16', name: 'Dr. Tanuja K', department: 'Computer Science', role: 'Associate Professor', cabin: 'CSE Block, Room 116', status: 'In Class', email: 'tanuja.k@vvce.ac.in' },
  { id: 'cs17', name: 'Dr. Vidyashree K P', department: 'Computer Science', role: 'Associate Professor', cabin: 'CSE Block, Room 117', status: 'Available', email: 'vidyashree.kp@vvce.ac.in' },
  { id: 'cs18', name: 'Dr. Ramanuja N Simha', department: 'Computer Science', role: 'Associate Professor', cabin: 'CSE Block, Room 118', status: 'Available', email: 'ramanuja.ns@vvce.ac.in' },
  { id: 'cs19', name: 'Dr. Arun Kumar N', department: 'Computer Science', role: 'Associate Professor', cabin: 'CSE Block, Room 119', status: 'On Leave', email: 'arunkumar.n@vvce.ac.in' },
  { id: 'cs20', name: 'Dr. Tej C Hiremath', department: 'Computer Science', role: 'Associate Professor', cabin: 'CSE Block, Room 120', status: 'Available', email: 'tej.hiremath@vvce.ac.in' },
  { id: 'cs21', name: 'Dr. Sachin D N', department: 'Computer Science', role: 'Assistant Professor', cabin: 'CSE Block, Room 121', status: 'Meeting', email: 'sachin.dn@vvce.ac.in' },
  { id: 'cs22', name: 'Dr. Shruthi PS', department: 'Computer Science', role: 'Assistant Professor', cabin: 'CSE Block, Room 122', status: 'Available', email: 'shruthi.ps@vvce.ac.in' },
  { id: 'cs23', name: 'Dr. Shraddha.C', department: 'Computer Science', role: 'Assistant Professor', cabin: 'CSE Block, Room 123', status: 'In Class', email: 'shraddha.c@vvce.ac.in' },
  { id: 'cs24', name: 'Shashank N', department: 'Computer Science', role: 'Assistant Professor', cabin: 'CSE Block, Room 124', status: 'Available', email: 'shashank.n@vvce.ac.in' },
  { id: 'cs25', name: 'Harshitha K', department: 'Computer Science', role: 'Assistant Professor', cabin: 'CSE Block, Room 125', status: 'In Class', email: 'harshitha.k@vvce.ac.in' },
  { id: 'cs26', name: 'Chaya Kumari H A', department: 'Computer Science', role: 'Assistant Professor', cabin: 'CSE Block, Room 126', status: 'Available', email: 'chaya.ha@vvce.ac.in' },
  { id: 'cs27', name: 'Anusha K S', department: 'Computer Science', role: 'Assistant Professor', cabin: 'CSE Block, Room 127', status: 'Meeting', email: 'anusha.ks@vvce.ac.in' },
  { id: 'cs28', name: 'Swathi B H', department: 'Computer Science', role: 'Assistant Professor', cabin: 'CSE Block, Room 128', status: 'Available', email: 'swathi.bh@vvce.ac.in' },
  { id: 'cs29', name: 'Pruthvi P R', department: 'Computer Science', role: 'Assistant Professor', cabin: 'CSE Block, Room 129', status: 'On Leave', email: 'pruthvi.pr@vvce.ac.in' },
  { id: 'cs30', name: 'Kavana M D', department: 'Computer Science', role: 'Assistant Professor', cabin: 'CSE Block, Room 130', status: 'Available', email: 'kavana.md@vvce.ac.in' },
  { id: 'cs31', name: 'Manasvi J Maasthi', department: 'Computer Science', role: 'Assistant Professor', cabin: 'CSE Block, Room 131', status: 'Available', email: 'manasvi.jm@vvce.ac.in' },
  { id: 'cs32', name: 'Lakshmi B S', department: 'Computer Science', role: 'Assistant Professor', cabin: 'CSE Block, Room 132', status: 'In Class', email: 'lakshmi.bs@vvce.ac.in' },
  { id: 'cs33', name: 'Kavitha D N', department: 'Computer Science', role: 'Assistant Professor', cabin: 'CSE Block, Room 133', status: 'Available', email: 'kavitha.dn@vvce.ac.in' },
  { id: 'cs34', name: 'Aishwarya M', department: 'Computer Science', role: 'Assistant Professor', cabin: 'CSE Block, Room 134', status: 'Meeting', email: 'aishwarya.m@vvce.ac.in' },
  { id: 'cs35', name: 'Suraksha P', department: 'Computer Science', role: 'Assistant Professor', cabin: 'CSE Block, Room 135', status: 'Available', email: 'suraksha.p@vvce.ac.in' },
  { id: 'cs36', name: 'Anil Kumar B H', department: 'Computer Science', role: 'Assistant Professor', cabin: 'CSE Block, Room 136', status: 'Available', email: 'anilkumar.bh@vvce.ac.in' },
  { id: 'cs37', name: 'Harshitha Suresh', department: 'Computer Science', role: 'Assistant Professor', cabin: 'CSE Block, Room 137', status: 'In Class', email: 'harshitha.suresh@vvce.ac.in' },
  { id: 'cs38', name: 'Susan Shaju', department: 'Computer Science', role: 'Assistant Professor', cabin: 'CSE Block, Room 138', status: 'Available', email: 'susan.shaju@vvce.ac.in' },
  { id: 'cs39', name: 'Amruthesh S M', department: 'Computer Science', role: 'pursuing Ph.D programme at NITK, Surathkal', cabin: 'CSE Block, Room 139', status: 'On Leave', email: 'amruthesh.sm@vvce.ac.in' },
  { id: 'cs40', name: 'Priya H P', department: 'Computer Science', role: 'Assistant Professor', cabin: 'CSE Block, Room 140', status: 'Available', email: 'priya.hp@vvce.ac.in' },
  { id: 'cs41', name: 'Harsha K G', department: 'Computer Science', role: 'Assistant Professor', cabin: 'CSE Block, Room 141', status: 'In Class', email: 'harsha.kg@vvce.ac.in' },
  { id: 'cs42', name: 'Priyanka R', department: 'Computer Science', role: 'Assistant Professor', cabin: 'CSE Block, Room 142', status: 'Available', email: 'priyanka.r@vvce.ac.in' },
  { id: 'cs43', name: 'Abdul Latif Saleem', department: 'Computer Science', role: 'Assistant Professor', cabin: 'CSE Block, Room 143', status: 'Meeting', email: 'abdul.ls@vvce.ac.in' },
  { id: 'cs44', name: 'Sireesha G', department: 'Computer Science', role: 'Assistant Professor', cabin: 'CSE Block, Room 144', status: 'Available', email: 'sireesha.g@vvce.ac.in' },
  { id: 'cs45', name: 'Shilpa B V', department: 'Computer Science', role: 'Assistant Professor', cabin: 'CSE Block, Room 145', status: 'Available', email: 'shilpa.bv@vvce.ac.in' },
  { id: 'cs46', name: 'Shilpa R', department: 'Computer Science', role: 'Assistant Professor', cabin: 'CSE Block, Room 146', status: 'In Class', email: 'shilpa.r2@vvce.ac.in' },
  { id: 'cs47', name: 'Shivani T J', department: 'Computer Science', role: 'Assistant Professor', cabin: 'CSE Block, Room 147', status: 'Available', email: 'shivani.tj@vvce.ac.in' },
  { id: 'cs48', name: 'Dayananda K J', department: 'Computer Science', role: 'Assistant Professor', cabin: 'CSE Block, Room 148', status: 'Meeting', email: 'dayananda.kj@vvce.ac.in' },
  { id: 'cs49', name: 'Vineetha B Y', department: 'Computer Science', role: 'Assistant Professor', cabin: 'CSE Block, Room 149', status: 'Available', email: 'vineetha.by@vvce.ac.in' },
  { id: 'cs50', name: 'Kavyashree G', department: 'Computer Science', role: 'Assistant Professor', cabin: 'CSE Block, Room 150', status: 'Available', email: 'kavyashree.g@vvce.ac.in' },
  { id: 'cs51', name: 'Bhuvaneswari B', department: 'Computer Science', role: 'Assistant Professor', cabin: 'CSE Block, Room 151', status: 'In Class', email: 'bhuvaneswari.b@vvce.ac.in' },
  { id: 'cs52', name: 'Likhitha B', department: 'Computer Science', role: 'Assistant Professor', cabin: 'CSE Block, Room 152', status: 'Available', email: 'likhitha.b@vvce.ac.in' },
  { id: 'cs53', name: 'Noor Fathima', department: 'Computer Science', role: 'Assistant Professor', cabin: 'CSE Block, Room 153', status: 'On Leave', email: 'noor.fathima@vvce.ac.in' },
  { id: 'cs54', name: 'Manasa M R', department: 'Computer Science', role: 'Assistant Professor', cabin: 'CSE Block, Room 154', status: 'Available', email: 'manasa.mr@vvce.ac.in' },
  { id: 'cs55', name: 'Dharmaraj K B', department: 'Computer Science', role: 'Assistant Professor', cabin: 'CSE Block, Room 155', status: 'Meeting', email: 'dharmaraj.kb@vvce.ac.in' },
  { id: 'cs56', name: 'Somashekar A S', department: 'Computer Science', role: 'Assistant Professor', cabin: 'CSE Block, Room 156', status: 'Available', email: 'somashekar.as@vvce.ac.in' },
  { id: 'cs57', name: 'Tejakshi N S', department: 'Computer Science', role: 'Assistant Professor', cabin: 'CSE Block, Room 157', status: 'In Class', email: 'tejakshi.ns@vvce.ac.in' },
  { id: 'cs58', name: 'Rakshitha S', department: 'Computer Science', role: 'Assistant Professor', cabin: 'CSE Block, Room 158', status: 'Available', email: 'rakshitha.s@vvce.ac.in' },
  { id: 'cs59', name: 'Varshini V', department: 'Computer Science', role: 'Assistant Professor', cabin: 'CSE Block, Room 159', status: 'Available', email: 'varshini.v@vvce.ac.in' },
  { id: 'cs60', name: 'Honnika K', department: 'Computer Science', role: 'Assistant Professor', cabin: 'CSE Block, Room 160', status: 'In Class', email: 'honnika.k@vvce.ac.in' },
  { id: 'cs61', name: 'Shruthi V P', department: 'Computer Science', role: 'Assistant Professor', cabin: 'CSE Block, Room 161', status: 'Available', email: 'shruthi.vp@vvce.ac.in' },
  { id: 'cs62', name: 'Manjunatha G B', department: 'Computer Science', role: 'Assistant Professor', cabin: 'CSE Block, Room 162', status: 'Meeting', email: 'manjunatha.gb@vvce.ac.in' },
  { id: 'cs63', name: 'Chandra Shekar M B', department: 'Computer Science', role: 'Assistant Professor', cabin: 'CSE Block, Room 163', status: 'Available', email: 'chandrashekar.mb@vvce.ac.in' },
  { id: 'cs64', name: 'Mahendra M K', department: 'Computer Science', role: 'Assistant Professor', cabin: 'CSE Block, Room 164', status: 'Available', email: 'mahendra.mk@vvce.ac.in' },
  { id: 'cs65', name: 'Pavan Kumar S P', department: 'Computer Science', role: 'Assistant Professor', cabin: 'CSE Block, Room 165', status: 'In Class', email: 'pavankumar.sp@vvce.ac.in' },
  { id: 'cs66', name: 'Kotreshi SN', department: 'Computer Science', role: 'Assistant Professor', cabin: 'CSE Block, Room 166', status: 'Available', email: 'kotreshi.sn@vvce.ac.in' }
];

const departmentsData = [
  'Computer Science',
  'Information Science',
  'Electronics & Communication Engineering',
  'Mechanical',
  'Civil Engineering',
  'Electrical & Elecs'
];

const clubsData = [
  {
    "name": "The Mind Mesh",
    "description": "Collective Minds. Limitless Intelligence. Vision The vision of THE MIND MESH is to create a dynamic and inclusive ecosystem where students can explore ideas, develop...",
    "iconName": "Brain",
    "id": "the-mind-mesh",
    "category": "Technical",
    "foundedYear": "2015",
    "memberCount": 50,
    "recruitmentStatus": "Closed",
    "vision": [
      "To foster innovation and excellence among students.",
      "To build a strong community of like-minded individuals."
    ],
    "mission": [
      "Organize workshops, hackathons, and seminars.",
      "Provide hands-on experience and industry exposure."
    ],
    "facultyCoordinators": [
      {
        "name": "Dr. Jane Doe",
        "role": "Chief Coordinator"
      }
    ],
    "studentCoordinators": [
      {
        "name": "John Smith",
        "role": "President",
        "semester": "6th Sem",
        "branch": "CSE"
      },
      {
        "name": "Alice Johnson",
        "role": "Vice President",
        "semester": "6th Sem",
        "branch": "ISE"
      }
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/vvce_the-mind-mesh",
      "linkedin": "https://linkedin.com/company/the-mind-mesh",
      "whatsapp": "https://chat.whatsapp.com/example"
    }
  },
  {
    "name": "FORGE NEXUS",
    "description": "INTRODUCTION OF THE CLUB Forge Nexus is a Student R&D Club that provides a multidisciplinary platform to empower students and faculty to collaborate across all...",
    "iconName": "Hammer",
    "id": "forge-nexus",
    "category": "Cultural",
    "foundedYear": "2016",
    "memberCount": 62,
    "recruitmentStatus": "Open",
    "vision": [
      "To foster innovation and excellence among students.",
      "To build a strong community of like-minded individuals."
    ],
    "mission": [
      "Organize workshops, hackathons, and seminars.",
      "Provide hands-on experience and industry exposure."
    ],
    "facultyCoordinators": [
      {
        "name": "Dr. Jane Doe",
        "role": "Chief Coordinator"
      }
    ],
    "studentCoordinators": [
      {
        "name": "John Smith",
        "role": "President",
        "semester": "6th Sem",
        "branch": "CSE"
      },
      {
        "name": "Alice Johnson",
        "role": "Vice President",
        "semester": "6th Sem",
        "branch": "ISE"
      }
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/vvce_forge-nexus",
      "linkedin": "https://linkedin.com/company/forge-nexus",
      "whatsapp": "https://chat.whatsapp.com/example"
    }
  },
  {
    "name": "Shiksha Club",
    "description": "Shiksha is a venture of VVCE, to spread social awareness to young budding minds through Inspiring hearts. It is the ability to take the perspective...",
    "iconName": "BookOpen",
    "id": "shiksha-club",
    "category": "Sports",
    "foundedYear": "2017",
    "memberCount": 74,
    "recruitmentStatus": "Open",
    "vision": [
      "To foster innovation and excellence among students.",
      "To build a strong community of like-minded individuals."
    ],
    "mission": [
      "Organize workshops, hackathons, and seminars.",
      "Provide hands-on experience and industry exposure."
    ],
    "facultyCoordinators": [
      {
        "name": "Dr. Jane Doe",
        "role": "Chief Coordinator"
      }
    ],
    "studentCoordinators": [
      {
        "name": "John Smith",
        "role": "President",
        "semester": "6th Sem",
        "branch": "CSE"
      },
      {
        "name": "Alice Johnson",
        "role": "Vice President",
        "semester": "6th Sem",
        "branch": "ISE"
      }
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/vvce_shiksha-club",
      "linkedin": "https://linkedin.com/company/shiksha-club",
      "whatsapp": "https://chat.whatsapp.com/example"
    }
  },
  {
    "name": "VVCE IEEE IES SBC",
    "description": "(Vidyavardhaka College of Engineering Institute of Electrical and Electronics Engineers Industrial Electronics Society Student Branch Chapter) The effective date of this Student Branch Chapter formation...",
    "iconName": "Cpu",
    "id": "vvce-ieee-ies-sbc",
    "category": "Social",
    "foundedYear": "2018",
    "memberCount": 86,
    "recruitmentStatus": "Closed",
    "vision": [
      "To foster innovation and excellence among students.",
      "To build a strong community of like-minded individuals."
    ],
    "mission": [
      "Organize workshops, hackathons, and seminars.",
      "Provide hands-on experience and industry exposure."
    ],
    "facultyCoordinators": [
      {
        "name": "Dr. Jane Doe",
        "role": "Chief Coordinator"
      }
    ],
    "studentCoordinators": [
      {
        "name": "John Smith",
        "role": "President",
        "semester": "6th Sem",
        "branch": "CSE"
      },
      {
        "name": "Alice Johnson",
        "role": "Vice President",
        "semester": "6th Sem",
        "branch": "ISE"
      }
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/vvce_vvce-ieee-ies-sbc",
      "linkedin": "https://linkedin.com/company/vvce-ieee-ies-sbc",
      "whatsapp": "https://chat.whatsapp.com/example"
    }
  },
  {
    "name": "Entrepreneurship Cell-ASPERA",
    "description": "About Entrepreneurship Cell - ASPERA The Entrepreneurship Cell - E Cell ASPERA of Vidyavardhaka College of Engineering, Mysuru is set up to encourage entrepreneurship among...",
    "iconName": "Lightbulb",
    "id": "entrepreneurship-cell-aspera",
    "category": "R&D",
    "foundedYear": "2019",
    "memberCount": 98,
    "recruitmentStatus": "Open",
    "vision": [
      "To foster innovation and excellence among students.",
      "To build a strong community of like-minded individuals."
    ],
    "mission": [
      "Organize workshops, hackathons, and seminars.",
      "Provide hands-on experience and industry exposure."
    ],
    "facultyCoordinators": [
      {
        "name": "Dr. Jane Doe",
        "role": "Chief Coordinator"
      }
    ],
    "studentCoordinators": [
      {
        "name": "John Smith",
        "role": "President",
        "semester": "6th Sem",
        "branch": "CSE"
      },
      {
        "name": "Alice Johnson",
        "role": "Vice President",
        "semester": "6th Sem",
        "branch": "ISE"
      }
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/vvce_entrepreneurship-cell-aspera",
      "linkedin": "https://linkedin.com/company/entrepreneurship-cell-aspera",
      "whatsapp": "https://chat.whatsapp.com/example"
    }
  },
  {
    "name": "Nirvaaha - The VVCE Management Excellence Club",
    "description": "Nirvaaha is the official Management Excellence Club of Vidyavardhaka College of Engineering (VVCE), launched with a mission to nurture leadership, innovation, and professional excellence among...",
    "iconName": "TrendingUp",
    "id": "nirvaaha-the-vvce-management-excellence-club",
    "category": "Technical",
    "foundedYear": "2020",
    "memberCount": 110,
    "recruitmentStatus": "Open",
    "vision": [
      "To foster innovation and excellence among students.",
      "To build a strong community of like-minded individuals."
    ],
    "mission": [
      "Organize workshops, hackathons, and seminars.",
      "Provide hands-on experience and industry exposure."
    ],
    "facultyCoordinators": [
      {
        "name": "Dr. Jane Doe",
        "role": "Chief Coordinator"
      }
    ],
    "studentCoordinators": [
      {
        "name": "John Smith",
        "role": "President",
        "semester": "6th Sem",
        "branch": "CSE"
      },
      {
        "name": "Alice Johnson",
        "role": "Vice President",
        "semester": "6th Sem",
        "branch": "ISE"
      }
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/vvce_nirvaaha-the-vvce-management-excellence-club",
      "linkedin": "https://linkedin.com/company/nirvaaha-the-vvce-management-excellence-club",
      "whatsapp": "https://chat.whatsapp.com/example"
    }
  },
  {
    "name": "Research Studio- Discovering New Knowledge",
    "description": "Research Studio at VVCE is a hub dedicated to igniting the spirit of inquiry and fostering a culture of discovery among students. The club organizes...",
    "iconName": "Microscope",
    "id": "research-studio-discovering-new-knowledge",
    "category": "Cultural",
    "foundedYear": "2021",
    "memberCount": 122,
    "recruitmentStatus": "Closed",
    "vision": [
      "To foster innovation and excellence among students.",
      "To build a strong community of like-minded individuals."
    ],
    "mission": [
      "Organize workshops, hackathons, and seminars.",
      "Provide hands-on experience and industry exposure."
    ],
    "facultyCoordinators": [
      {
        "name": "Dr. Jane Doe",
        "role": "Chief Coordinator"
      }
    ],
    "studentCoordinators": [
      {
        "name": "John Smith",
        "role": "President",
        "semester": "6th Sem",
        "branch": "CSE"
      },
      {
        "name": "Alice Johnson",
        "role": "Vice President",
        "semester": "6th Sem",
        "branch": "ISE"
      }
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/vvce_research-studio-discovering-new-knowledge",
      "linkedin": "https://linkedin.com/company/research-studio-discovering-new-knowledge",
      "whatsapp": "https://chat.whatsapp.com/example"
    }
  },
  {
    "name": "Susthiraa Club- A Centre for Sustainable Development",
    "description": "Susthiraa, VVCE's Centre for Sustainable Development, fosters a deep understanding and commitment to environmental responsibility among students. The club actively promotes the UN's Sustainable Development...",
    "iconName": "Leaf",
    "id": "susthiraa-club-a-centre-for-sustainable-development",
    "category": "Sports",
    "foundedYear": "2022",
    "memberCount": 134,
    "recruitmentStatus": "Open",
    "vision": [
      "To foster innovation and excellence among students.",
      "To build a strong community of like-minded individuals."
    ],
    "mission": [
      "Organize workshops, hackathons, and seminars.",
      "Provide hands-on experience and industry exposure."
    ],
    "facultyCoordinators": [
      {
        "name": "Dr. Jane Doe",
        "role": "Chief Coordinator"
      }
    ],
    "studentCoordinators": [
      {
        "name": "John Smith",
        "role": "President",
        "semester": "6th Sem",
        "branch": "CSE"
      },
      {
        "name": "Alice Johnson",
        "role": "Vice President",
        "semester": "6th Sem",
        "branch": "ISE"
      }
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/vvce_susthiraa-club-a-centre-for-sustainable-development",
      "linkedin": "https://linkedin.com/company/susthiraa-club-a-centre-for-sustainable-development",
      "whatsapp": "https://chat.whatsapp.com/example"
    }
  },
  {
    "name": "Nirmaan Club-Build With nature",
    "description": "Nirmaan, the \"Build With Nature\" civil club at VVCE, serves as a dynamic platform forstudents to delve into the practical aspects of their field. The...",
    "iconName": "Building",
    "id": "nirmaan-club-build-with-nature",
    "category": "Social",
    "foundedYear": "2015",
    "memberCount": 146,
    "recruitmentStatus": "Open",
    "vision": [
      "To foster innovation and excellence among students.",
      "To build a strong community of like-minded individuals."
    ],
    "mission": [
      "Organize workshops, hackathons, and seminars.",
      "Provide hands-on experience and industry exposure."
    ],
    "facultyCoordinators": [
      {
        "name": "Dr. Jane Doe",
        "role": "Chief Coordinator"
      }
    ],
    "studentCoordinators": [
      {
        "name": "John Smith",
        "role": "President",
        "semester": "6th Sem",
        "branch": "CSE"
      },
      {
        "name": "Alice Johnson",
        "role": "Vice President",
        "semester": "6th Sem",
        "branch": "ISE"
      }
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/vvce_nirmaan-club-build-with-nature",
      "linkedin": "https://linkedin.com/company/nirmaan-club-build-with-nature",
      "whatsapp": "https://chat.whatsapp.com/example"
    }
  },
  {
    "name": "ESPIN",
    "description": "ESPIN - Electrical Students Project Inventory Network Objectives of ESPIN - Electrical Students Project Innovative Network Activities Conducted during 2023-24 2. Organized Barcamp on \"Innovative...",
    "iconName": "Zap",
    "id": "espin",
    "category": "R&D",
    "foundedYear": "2016",
    "memberCount": 158,
    "recruitmentStatus": "Closed",
    "vision": [
      "To foster innovation and excellence among students.",
      "To build a strong community of like-minded individuals."
    ],
    "mission": [
      "Organize workshops, hackathons, and seminars.",
      "Provide hands-on experience and industry exposure."
    ],
    "facultyCoordinators": [
      {
        "name": "Dr. Jane Doe",
        "role": "Chief Coordinator"
      }
    ],
    "studentCoordinators": [
      {
        "name": "John Smith",
        "role": "President",
        "semester": "6th Sem",
        "branch": "CSE"
      },
      {
        "name": "Alice Johnson",
        "role": "Vice President",
        "semester": "6th Sem",
        "branch": "ISE"
      }
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/vvce_espin",
      "linkedin": "https://linkedin.com/company/espin",
      "whatsapp": "https://chat.whatsapp.com/example"
    }
  },
  {
    "name": "Yuvaa Club",
    "description": "Mission: To empower students by providing a supportive environment where they can explore, develop and showcase their talents, fostering personal growth and enhancing essential life...",
    "iconName": "Users",
    "id": "yuvaa-club",
    "category": "Technical",
    "foundedYear": "2017",
    "memberCount": 170,
    "recruitmentStatus": "Open",
    "vision": [
      "To foster innovation and excellence among students.",
      "To build a strong community of like-minded individuals."
    ],
    "mission": [
      "Organize workshops, hackathons, and seminars.",
      "Provide hands-on experience and industry exposure."
    ],
    "facultyCoordinators": [
      {
        "name": "Dr. Jane Doe",
        "role": "Chief Coordinator"
      }
    ],
    "studentCoordinators": [
      {
        "name": "John Smith",
        "role": "President",
        "semester": "6th Sem",
        "branch": "CSE"
      },
      {
        "name": "Alice Johnson",
        "role": "Vice President",
        "semester": "6th Sem",
        "branch": "ISE"
      }
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/vvce_yuvaa-club",
      "linkedin": "https://linkedin.com/company/yuvaa-club",
      "whatsapp": "https://chat.whatsapp.com/example"
    }
  },
  {
    "name": "Vector flow",
    "description": "Aim: Aim of Vector flow club is to promote self learning and skill development through live project implementations, codeathons or learnathons. Club also aims in...",
    "iconName": "Activity",
    "id": "vector-flow",
    "category": "Cultural",
    "foundedYear": "2018",
    "memberCount": 182,
    "recruitmentStatus": "Open",
    "vision": [
      "To foster innovation and excellence among students.",
      "To build a strong community of like-minded individuals."
    ],
    "mission": [
      "Organize workshops, hackathons, and seminars.",
      "Provide hands-on experience and industry exposure."
    ],
    "facultyCoordinators": [
      {
        "name": "Dr. Jane Doe",
        "role": "Chief Coordinator"
      }
    ],
    "studentCoordinators": [
      {
        "name": "John Smith",
        "role": "President",
        "semester": "6th Sem",
        "branch": "CSE"
      },
      {
        "name": "Alice Johnson",
        "role": "Vice President",
        "semester": "6th Sem",
        "branch": "ISE"
      }
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/vvce_vector-flow",
      "linkedin": "https://linkedin.com/company/vector-flow",
      "whatsapp": "https://chat.whatsapp.com/example"
    }
  },
  {
    "name": "ELEVATE U",
    "description": "The ElevateU Club, established under the Department of CSE-AIML, is dedicated to enhancing personality development, networking, soft skills, confidence-building, and talent recognition among students. It...",
    "iconName": "Award",
    "id": "elevate-u",
    "category": "Sports",
    "foundedYear": "2019",
    "memberCount": 194,
    "recruitmentStatus": "Closed",
    "vision": [
      "To foster innovation and excellence among students.",
      "To build a strong community of like-minded individuals."
    ],
    "mission": [
      "Organize workshops, hackathons, and seminars.",
      "Provide hands-on experience and industry exposure."
    ],
    "facultyCoordinators": [
      {
        "name": "Dr. Jane Doe",
        "role": "Chief Coordinator"
      }
    ],
    "studentCoordinators": [
      {
        "name": "John Smith",
        "role": "President",
        "semester": "6th Sem",
        "branch": "CSE"
      },
      {
        "name": "Alice Johnson",
        "role": "Vice President",
        "semester": "6th Sem",
        "branch": "ISE"
      }
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/vvce_elevate-u",
      "linkedin": "https://linkedin.com/company/elevate-u",
      "whatsapp": "https://chat.whatsapp.com/example"
    }
  },
  {
    "name": "Orators Club",
    "description": "OBJECTIVES SHORT TERM GOALS LONG TERM GOALS BENEFITS TO THE STUDENTS It caters to help the students to express themselves confidently and realize their hidden...",
    "iconName": "Mic",
    "id": "orators-club",
    "category": "Social",
    "foundedYear": "2020",
    "memberCount": 56,
    "recruitmentStatus": "Open",
    "vision": [
      "To foster innovation and excellence among students.",
      "To build a strong community of like-minded individuals."
    ],
    "mission": [
      "Organize workshops, hackathons, and seminars.",
      "Provide hands-on experience and industry exposure."
    ],
    "facultyCoordinators": [
      {
        "name": "Dr. Jane Doe",
        "role": "Chief Coordinator"
      }
    ],
    "studentCoordinators": [
      {
        "name": "John Smith",
        "role": "President",
        "semester": "6th Sem",
        "branch": "CSE"
      },
      {
        "name": "Alice Johnson",
        "role": "Vice President",
        "semester": "6th Sem",
        "branch": "ISE"
      }
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/vvce_orators-club",
      "linkedin": "https://linkedin.com/company/orators-club",
      "whatsapp": "https://chat.whatsapp.com/example"
    }
  },
  {
    "name": "Advika",
    "description": "The inaugural event of the Advika Club was conducted on 16-08-2023 . The club aimed to celebrate Kannada language and culture, promote cultural exchange. Logo...",
    "iconName": "Globe",
    "id": "advika",
    "category": "R&D",
    "foundedYear": "2021",
    "memberCount": 68,
    "recruitmentStatus": "Open",
    "vision": [
      "To foster innovation and excellence among students.",
      "To build a strong community of like-minded individuals."
    ],
    "mission": [
      "Organize workshops, hackathons, and seminars.",
      "Provide hands-on experience and industry exposure."
    ],
    "facultyCoordinators": [
      {
        "name": "Dr. Jane Doe",
        "role": "Chief Coordinator"
      }
    ],
    "studentCoordinators": [
      {
        "name": "John Smith",
        "role": "President",
        "semester": "6th Sem",
        "branch": "CSE"
      },
      {
        "name": "Alice Johnson",
        "role": "Vice President",
        "semester": "6th Sem",
        "branch": "ISE"
      }
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/vvce_advika",
      "linkedin": "https://linkedin.com/company/advika",
      "whatsapp": "https://chat.whatsapp.com/example"
    }
  },
  {
    "name": "Hitha Srushti",
    "description": "An outreach activity club The Department of CSE (Artificial Intelligence & Machine Learning) inaugurated an outreach activity club Hitha Srushti on 07th December, 2022 The...",
    "iconName": "Heart",
    "id": "hitha-srushti",
    "category": "Technical",
    "foundedYear": "2022",
    "memberCount": 80,
    "recruitmentStatus": "Closed",
    "vision": [
      "To foster innovation and excellence among students.",
      "To build a strong community of like-minded individuals."
    ],
    "mission": [
      "Organize workshops, hackathons, and seminars.",
      "Provide hands-on experience and industry exposure."
    ],
    "facultyCoordinators": [
      {
        "name": "Dr. Jane Doe",
        "role": "Chief Coordinator"
      }
    ],
    "studentCoordinators": [
      {
        "name": "John Smith",
        "role": "President",
        "semester": "6th Sem",
        "branch": "CSE"
      },
      {
        "name": "Alice Johnson",
        "role": "Vice President",
        "semester": "6th Sem",
        "branch": "ISE"
      }
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/vvce_hitha-srushti",
      "linkedin": "https://linkedin.com/company/hitha-srushti",
      "whatsapp": "https://chat.whatsapp.com/example"
    }
  },
  {
    "name": "ISHRAE",
    "description": "Objective Spread awareness about Heating, Ventilation, Refrigeration and Air conditioning ISHRAE VVCE Mysore Students Chapter celebrated \"Students Day\" on the occasion of 'Engineer's Day' on...",
    "iconName": "Wind",
    "id": "ishrae",
    "category": "Cultural",
    "foundedYear": "2015",
    "memberCount": 92,
    "recruitmentStatus": "Open",
    "vision": [
      "To foster innovation and excellence among students.",
      "To build a strong community of like-minded individuals."
    ],
    "mission": [
      "Organize workshops, hackathons, and seminars.",
      "Provide hands-on experience and industry exposure."
    ],
    "facultyCoordinators": [
      {
        "name": "Dr. Jane Doe",
        "role": "Chief Coordinator"
      }
    ],
    "studentCoordinators": [
      {
        "name": "John Smith",
        "role": "President",
        "semester": "6th Sem",
        "branch": "CSE"
      },
      {
        "name": "Alice Johnson",
        "role": "Vice President",
        "semester": "6th Sem",
        "branch": "ISE"
      }
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/vvce_ishrae",
      "linkedin": "https://linkedin.com/company/ishrae",
      "whatsapp": "https://chat.whatsapp.com/example"
    }
  },
  {
    "name": "Astronomy and Space Science Club",
    "description": "Objective Spread awareness about astronomy, astrophysics, observational astronomy Activities On the occasion of National Space Day Nearly 320 students from various schools and PU colleges...",
    "iconName": "Star",
    "id": "astronomy-and-space-science-club",
    "category": "Sports",
    "foundedYear": "2016",
    "memberCount": 104,
    "recruitmentStatus": "Open",
    "vision": [
      "To foster innovation and excellence among students.",
      "To build a strong community of like-minded individuals."
    ],
    "mission": [
      "Organize workshops, hackathons, and seminars.",
      "Provide hands-on experience and industry exposure."
    ],
    "facultyCoordinators": [
      {
        "name": "Dr. Jane Doe",
        "role": "Chief Coordinator"
      }
    ],
    "studentCoordinators": [
      {
        "name": "John Smith",
        "role": "President",
        "semester": "6th Sem",
        "branch": "CSE"
      },
      {
        "name": "Alice Johnson",
        "role": "Vice President",
        "semester": "6th Sem",
        "branch": "ISE"
      }
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/vvce_astronomy-and-space-science-club",
      "linkedin": "https://linkedin.com/company/astronomy-and-space-science-club",
      "whatsapp": "https://chat.whatsapp.com/example"
    }
  },
  {
    "name": "Rotaract Club",
    "description": "Objective To spread awareness about Social Service...",
    "iconName": "Activity",
    "id": "rotaract-club",
    "category": "Social",
    "foundedYear": "2017",
    "memberCount": 116,
    "recruitmentStatus": "Closed",
    "vision": [
      "To foster innovation and excellence among students.",
      "To build a strong community of like-minded individuals."
    ],
    "mission": [
      "Organize workshops, hackathons, and seminars.",
      "Provide hands-on experience and industry exposure."
    ],
    "facultyCoordinators": [
      {
        "name": "Dr. Jane Doe",
        "role": "Chief Coordinator"
      }
    ],
    "studentCoordinators": [
      {
        "name": "John Smith",
        "role": "President",
        "semester": "6th Sem",
        "branch": "CSE"
      },
      {
        "name": "Alice Johnson",
        "role": "Vice President",
        "semester": "6th Sem",
        "branch": "ISE"
      }
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/vvce_rotaract-club",
      "linkedin": "https://linkedin.com/company/rotaract-club",
      "whatsapp": "https://chat.whatsapp.com/example"
    }
  },
  {
    "name": "Rocketry Club",
    "description": "Objective - Students gain and understand the meaning of rocket science, as well as build connections between physics, mathematics and engineering and get to apply...",
    "iconName": "Rocket",
    "id": "rocketry-club",
    "category": "R&D",
    "foundedYear": "2018",
    "memberCount": 128,
    "recruitmentStatus": "Open",
    "vision": [
      "To foster innovation and excellence among students.",
      "To build a strong community of like-minded individuals."
    ],
    "mission": [
      "Organize workshops, hackathons, and seminars.",
      "Provide hands-on experience and industry exposure."
    ],
    "facultyCoordinators": [
      {
        "name": "Dr. Jane Doe",
        "role": "Chief Coordinator"
      }
    ],
    "studentCoordinators": [
      {
        "name": "John Smith",
        "role": "President",
        "semester": "6th Sem",
        "branch": "CSE"
      },
      {
        "name": "Alice Johnson",
        "role": "Vice President",
        "semester": "6th Sem",
        "branch": "ISE"
      }
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/vvce_rocketry-club",
      "linkedin": "https://linkedin.com/company/rocketry-club",
      "whatsapp": "https://chat.whatsapp.com/example"
    }
  },
  {
    "name": "SAE BAJA CLUB",
    "description": "Objective: Highlights: ...",
    "iconName": "Wrench",
    "id": "sae-baja-club",
    "category": "Technical",
    "foundedYear": "2019",
    "memberCount": 140,
    "recruitmentStatus": "Open",
    "vision": [
      "To foster innovation and excellence among students.",
      "To build a strong community of like-minded individuals."
    ],
    "mission": [
      "Organize workshops, hackathons, and seminars.",
      "Provide hands-on experience and industry exposure."
    ],
    "facultyCoordinators": [
      {
        "name": "Dr. Jane Doe",
        "role": "Chief Coordinator"
      }
    ],
    "studentCoordinators": [
      {
        "name": "John Smith",
        "role": "President",
        "semester": "6th Sem",
        "branch": "CSE"
      },
      {
        "name": "Alice Johnson",
        "role": "Vice President",
        "semester": "6th Sem",
        "branch": "ISE"
      }
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/vvce_sae-baja-club",
      "linkedin": "https://linkedin.com/company/sae-baja-club",
      "whatsapp": "https://chat.whatsapp.com/example"
    }
  },
  {
    "name": "Vruthanth Club",
    "description": "CLUB OBJECTIVES The initiative to establish this club is to promote healthy adventure activities, especially camping, trekking, and climbing etc. through following objectives: Club Activities...",
    "iconName": "Mountain",
    "id": "vruthanth-club",
    "category": "Cultural",
    "foundedYear": "2020",
    "memberCount": 152,
    "recruitmentStatus": "Closed",
    "vision": [
      "To foster innovation and excellence among students.",
      "To build a strong community of like-minded individuals."
    ],
    "mission": [
      "Organize workshops, hackathons, and seminars.",
      "Provide hands-on experience and industry exposure."
    ],
    "facultyCoordinators": [
      {
        "name": "Dr. Jane Doe",
        "role": "Chief Coordinator"
      }
    ],
    "studentCoordinators": [
      {
        "name": "John Smith",
        "role": "President",
        "semester": "6th Sem",
        "branch": "CSE"
      },
      {
        "name": "Alice Johnson",
        "role": "Vice President",
        "semester": "6th Sem",
        "branch": "ISE"
      }
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/vvce_vruthanth-club",
      "linkedin": "https://linkedin.com/company/vruthanth-club",
      "whatsapp": "https://chat.whatsapp.com/example"
    }
  },
  {
    "name": "IEEE - Information Theory Society",
    "description": "The IEEE Information Theory Society is the premier professional society dedicated to the advancement of the mathematical underpinnings of information technology for the benefit of...",
    "iconName": "Cpu",
    "id": "ieee-information-theory-society",
    "category": "Sports",
    "foundedYear": "2021",
    "memberCount": 164,
    "recruitmentStatus": "Open",
    "vision": [
      "To foster innovation and excellence among students.",
      "To build a strong community of like-minded individuals."
    ],
    "mission": [
      "Organize workshops, hackathons, and seminars.",
      "Provide hands-on experience and industry exposure."
    ],
    "facultyCoordinators": [
      {
        "name": "Dr. Jane Doe",
        "role": "Chief Coordinator"
      }
    ],
    "studentCoordinators": [
      {
        "name": "John Smith",
        "role": "President",
        "semester": "6th Sem",
        "branch": "CSE"
      },
      {
        "name": "Alice Johnson",
        "role": "Vice President",
        "semester": "6th Sem",
        "branch": "ISE"
      }
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/vvce_ieee-information-theory-society",
      "linkedin": "https://linkedin.com/company/ieee-information-theory-society",
      "whatsapp": "https://chat.whatsapp.com/example"
    }
  },
  {
    "name": "Open-Source Community",
    "description": "An open-source community club fosters collaboration, innovation, learning, and growth within the student community. Here are some common objectives that the OSC club aims for...",
    "iconName": "Code",
    "id": "open-source-community",
    "category": "Social",
    "foundedYear": "2022",
    "memberCount": 176,
    "recruitmentStatus": "Open",
    "vision": [
      "To foster innovation and excellence among students.",
      "To build a strong community of like-minded individuals."
    ],
    "mission": [
      "Organize workshops, hackathons, and seminars.",
      "Provide hands-on experience and industry exposure."
    ],
    "facultyCoordinators": [
      {
        "name": "Dr. Jane Doe",
        "role": "Chief Coordinator"
      }
    ],
    "studentCoordinators": [
      {
        "name": "John Smith",
        "role": "President",
        "semester": "6th Sem",
        "branch": "CSE"
      },
      {
        "name": "Alice Johnson",
        "role": "Vice President",
        "semester": "6th Sem",
        "branch": "ISE"
      }
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/vvce_open-source-community",
      "linkedin": "https://linkedin.com/company/open-source-community",
      "whatsapp": "https://chat.whatsapp.com/example"
    }
  },
  {
    "name": "Shristi",
    "description": "This club is to serve the mankind and cherish the life Highlights Activities: Cleanliness and Plantation drive on Environmental Day: The Department of Information Science...",
    "iconName": "Flower",
    "id": "shristi",
    "category": "R&D",
    "foundedYear": "2015",
    "memberCount": 188,
    "recruitmentStatus": "Closed",
    "vision": [
      "To foster innovation and excellence among students.",
      "To build a strong community of like-minded individuals."
    ],
    "mission": [
      "Organize workshops, hackathons, and seminars.",
      "Provide hands-on experience and industry exposure."
    ],
    "facultyCoordinators": [
      {
        "name": "Dr. Jane Doe",
        "role": "Chief Coordinator"
      }
    ],
    "studentCoordinators": [
      {
        "name": "John Smith",
        "role": "President",
        "semester": "6th Sem",
        "branch": "CSE"
      },
      {
        "name": "Alice Johnson",
        "role": "Vice President",
        "semester": "6th Sem",
        "branch": "ISE"
      }
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/vvce_shristi",
      "linkedin": "https://linkedin.com/company/shristi",
      "whatsapp": "https://chat.whatsapp.com/example"
    }
  },
  {
    "name": "Anveshan Club",
    "description": "Objective To inculcate technical and learning activities which are present trend in the software field Highlights The members of this club will be able to...",
    "iconName": "Search",
    "id": "anveshan-club",
    "category": "Technical",
    "foundedYear": "2016",
    "memberCount": 50,
    "recruitmentStatus": "Open",
    "vision": [
      "To foster innovation and excellence among students.",
      "To build a strong community of like-minded individuals."
    ],
    "mission": [
      "Organize workshops, hackathons, and seminars.",
      "Provide hands-on experience and industry exposure."
    ],
    "facultyCoordinators": [
      {
        "name": "Dr. Jane Doe",
        "role": "Chief Coordinator"
      }
    ],
    "studentCoordinators": [
      {
        "name": "John Smith",
        "role": "President",
        "semester": "6th Sem",
        "branch": "CSE"
      },
      {
        "name": "Alice Johnson",
        "role": "Vice President",
        "semester": "6th Sem",
        "branch": "ISE"
      }
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/vvce_anveshan-club",
      "linkedin": "https://linkedin.com/company/anveshan-club",
      "whatsapp": "https://chat.whatsapp.com/example"
    }
  },
  {
    "name": "Vcode",
    "description": "This club is initiated to explore the world of programming languages by enjoying creative learning Objectives Outcome Activities Technical talk on \"Cyber Security and ethical...",
    "iconName": "Terminal",
    "id": "vcode",
    "category": "Cultural",
    "foundedYear": "2017",
    "memberCount": 62,
    "recruitmentStatus": "Open",
    "vision": [
      "To foster innovation and excellence among students.",
      "To build a strong community of like-minded individuals."
    ],
    "mission": [
      "Organize workshops, hackathons, and seminars.",
      "Provide hands-on experience and industry exposure."
    ],
    "facultyCoordinators": [
      {
        "name": "Dr. Jane Doe",
        "role": "Chief Coordinator"
      }
    ],
    "studentCoordinators": [
      {
        "name": "John Smith",
        "role": "President",
        "semester": "6th Sem",
        "branch": "CSE"
      },
      {
        "name": "Alice Johnson",
        "role": "Vice President",
        "semester": "6th Sem",
        "branch": "ISE"
      }
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/vvce_vcode",
      "linkedin": "https://linkedin.com/company/vcode",
      "whatsapp": "https://chat.whatsapp.com/example"
    }
  },
  {
    "name": "Ecliptic Creators Hub",
    "description": "Ecliptic Creators Hub (Established on 19.01.2024) where the convergence of culture, literature, and art fosters a nurturing environment for creativity to thrive. This student club...",
    "iconName": "Palette",
    "id": "ecliptic-creators-hub",
    "category": "Sports",
    "foundedYear": "2018",
    "memberCount": 74,
    "recruitmentStatus": "Closed",
    "vision": [
      "To foster innovation and excellence among students.",
      "To build a strong community of like-minded individuals."
    ],
    "mission": [
      "Organize workshops, hackathons, and seminars.",
      "Provide hands-on experience and industry exposure."
    ],
    "facultyCoordinators": [
      {
        "name": "Dr. Jane Doe",
        "role": "Chief Coordinator"
      }
    ],
    "studentCoordinators": [
      {
        "name": "John Smith",
        "role": "President",
        "semester": "6th Sem",
        "branch": "CSE"
      },
      {
        "name": "Alice Johnson",
        "role": "Vice President",
        "semester": "6th Sem",
        "branch": "ISE"
      }
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/vvce_ecliptic-creators-hub",
      "linkedin": "https://linkedin.com/company/ecliptic-creators-hub",
      "whatsapp": "https://chat.whatsapp.com/example"
    }
  },
  {
    "name": "VVCE IEEE PELS SBC",
    "description": "(Vidyavardhaka College of Engineering Institute of Electrical and Electronics Engineers Power Electronics Society Student Branch Chapter) This Professional Chapter was established in the year 2022...",
    "iconName": "Zap",
    "id": "vvce-ieee-pels-sbc",
    "category": "Social",
    "foundedYear": "2019",
    "memberCount": 86,
    "recruitmentStatus": "Open",
    "vision": [
      "To foster innovation and excellence among students.",
      "To build a strong community of like-minded individuals."
    ],
    "mission": [
      "Organize workshops, hackathons, and seminars.",
      "Provide hands-on experience and industry exposure."
    ],
    "facultyCoordinators": [
      {
        "name": "Dr. Jane Doe",
        "role": "Chief Coordinator"
      }
    ],
    "studentCoordinators": [
      {
        "name": "John Smith",
        "role": "President",
        "semester": "6th Sem",
        "branch": "CSE"
      },
      {
        "name": "Alice Johnson",
        "role": "Vice President",
        "semester": "6th Sem",
        "branch": "ISE"
      }
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/vvce_vvce-ieee-pels-sbc",
      "linkedin": "https://linkedin.com/company/vvce-ieee-pels-sbc",
      "whatsapp": "https://chat.whatsapp.com/example"
    }
  },
  {
    "name": "VVCE IEEE PES SBC",
    "description": "(Vidyavardhaka College of Engineering Institute of Electrical and Electronics Engineers Power and Energy Society Student Branch Chapter) This Professional Chapter was established in the year...",
    "iconName": "Battery",
    "id": "vvce-ieee-pes-sbc",
    "category": "R&D",
    "foundedYear": "2020",
    "memberCount": 98,
    "recruitmentStatus": "Open",
    "vision": [
      "To foster innovation and excellence among students.",
      "To build a strong community of like-minded individuals."
    ],
    "mission": [
      "Organize workshops, hackathons, and seminars.",
      "Provide hands-on experience and industry exposure."
    ],
    "facultyCoordinators": [
      {
        "name": "Dr. Jane Doe",
        "role": "Chief Coordinator"
      }
    ],
    "studentCoordinators": [
      {
        "name": "John Smith",
        "role": "President",
        "semester": "6th Sem",
        "branch": "CSE"
      },
      {
        "name": "Alice Johnson",
        "role": "Vice President",
        "semester": "6th Sem",
        "branch": "ISE"
      }
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/vvce_vvce-ieee-pes-sbc",
      "linkedin": "https://linkedin.com/company/vvce-ieee-pes-sbc",
      "whatsapp": "https://chat.whatsapp.com/example"
    }
  },
  {
    "name": "VEEE-SPARC",
    "description": "Vidyavardhaka Electrical and Electronics Engineering Students' Project and Research Club (VEEE-SPARC) The purpose of the club is to promote: Activities Conducted during 2023-24...",
    "iconName": "Compass",
    "id": "veee-sparc",
    "category": "Technical",
    "foundedYear": "2021",
    "memberCount": 110,
    "recruitmentStatus": "Closed",
    "vision": [
      "To foster innovation and excellence among students.",
      "To build a strong community of like-minded individuals."
    ],
    "mission": [
      "Organize workshops, hackathons, and seminars.",
      "Provide hands-on experience and industry exposure."
    ],
    "facultyCoordinators": [
      {
        "name": "Dr. Jane Doe",
        "role": "Chief Coordinator"
      }
    ],
    "studentCoordinators": [
      {
        "name": "John Smith",
        "role": "President",
        "semester": "6th Sem",
        "branch": "CSE"
      },
      {
        "name": "Alice Johnson",
        "role": "Vice President",
        "semester": "6th Sem",
        "branch": "ISE"
      }
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/vvce_veee-sparc",
      "linkedin": "https://linkedin.com/company/veee-sparc",
      "whatsapp": "https://chat.whatsapp.com/example"
    }
  },
  {
    "name": "Cultural Club of VVCE",
    "description": "Official Cultural Club of VVCE focusing on promoting arts, music, dance, and extracurricular creative activities across the campus.",
    "iconName": "Music",
    "id": "cultural-club-of-vvce",
    "category": "Cultural",
    "foundedYear": "2022",
    "memberCount": 122,
    "recruitmentStatus": "Open",
    "vision": [
      "To foster innovation and excellence among students.",
      "To build a strong community of like-minded individuals."
    ],
    "mission": [
      "Organize workshops, hackathons, and seminars.",
      "Provide hands-on experience and industry exposure."
    ],
    "facultyCoordinators": [
      {
        "name": "Dr. Jane Doe",
        "role": "Chief Coordinator"
      }
    ],
    "studentCoordinators": [
      {
        "name": "John Smith",
        "role": "President",
        "semester": "6th Sem",
        "branch": "CSE"
      },
      {
        "name": "Alice Johnson",
        "role": "Vice President",
        "semester": "6th Sem",
        "branch": "ISE"
      }
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/vvce_cultural-club-of-vvce",
      "linkedin": "https://linkedin.com/company/cultural-club-of-vvce",
      "whatsapp": "https://chat.whatsapp.com/example"
    }
  },
  {
    "name": "Literature Club of VVCE - The Book-Ads",
    "description": "The Literature Club focuses on reading, debating, and fostering a love for books and literature among the student community.",
    "iconName": "Book",
    "id": "literature-club-of-vvce-the-book-ads",
    "category": "Sports",
    "foundedYear": "2015",
    "memberCount": 134,
    "recruitmentStatus": "Open",
    "vision": [
      "To foster innovation and excellence among students.",
      "To build a strong community of like-minded individuals."
    ],
    "mission": [
      "Organize workshops, hackathons, and seminars.",
      "Provide hands-on experience and industry exposure."
    ],
    "facultyCoordinators": [
      {
        "name": "Dr. Jane Doe",
        "role": "Chief Coordinator"
      }
    ],
    "studentCoordinators": [
      {
        "name": "John Smith",
        "role": "President",
        "semester": "6th Sem",
        "branch": "CSE"
      },
      {
        "name": "Alice Johnson",
        "role": "Vice President",
        "semester": "6th Sem",
        "branch": "ISE"
      }
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/vvce_literature-club-of-vvce-the-book-ads",
      "linkedin": "https://linkedin.com/company/literature-club-of-vvce-the-book-ads",
      "whatsapp": "https://chat.whatsapp.com/example"
    }
  }
];

window.facultyData = facultyData;
window.departmentsData = departmentsData;
window.clubsData = clubsData;
