const fs = require('fs');

const rawData = `
KAVYASHREE G			M-225
LIKITHA B			M-222
NOOR FATHIMA F			M-228
MANASA M R			M-229
DHARMARAJ K B			M-224
SOMASHEKAR A S			M-224
TEJAKSHI N S			M-230
RAKSHITHA S			M-228
VARSHINI V			M-223
SHRUTHI V P			M-231
HONNIKA K			M-231
MANJUNATHA G B			M-421
CHANDRA SHEKAR M B			M-421
DIVAKAR T K			M-119
DR. NITHIN KUMAR			M-603
DR. ARUN C DIXIT			M-604,D-105
DR. RAVI KUMAR V			M-603
PRASHANTH N			M-501 A
VIGNESH T V			M-501 A
DR. G V NAVEEN PRAKASH			D-009
DR. G B KRISHNAPPA			D-009
DR. SUDEV L J			D-009
DR. ASHOK B C			D-009, 105
DR. VINAY K B			D-009
DR. S A MOHAN KRISHNA 			D-009
DR. K S RAVI			D-009
DR. KHALID IMRAN			D-009
DR. NAVEEN ANKEGOWDA			D-009
DR. RISHI J P			D-009
DR. NITHYANANDA B S			D-009
DR. JAYASHANKAR N 			D-009
DR. GANESHA B B			D-105
DR. ARUN KUMAR K N			D-009, 105
THAMMEGOWDA C S			D-009
DR. VINOD B			D-009, 105
DR. SHIVASHANKAR R			D-009, 105
MAMATHA Y P			D-009
CHANDAN V			D-111
DR. RAGHU N			D-111
DR. HEMANTH KUMAR K J			D-111
DR AMRUTH E			D-111
DR. SHRINIVASA D			D-111
DR. PRAVEENKUMARA B M			D-111
RAKSHITH GOWDA D S			D-111
SUDHARSHAN N			D-111
AKSHA BHAT			D-009
DUSHYANTHKUMAR G L			D-111
RANJITH K			D-009
SHREYAS M			D-009
PUNEETH H S			D-009
VINAYAKA G P			D-009
BHARATH P			D-009
MANJUNATH V B			D-111
DR. G B KRISHNAPPA		DEAN	D-004 A
DR. MUTHURAJU N P			D-111
DR. RANJITH K			D-111
DR. SHREYAS M			D-111
JAYASHANKAR N			D-105
DR. G V NAVEEN PRAKASH		DEAN	D-105
PRAVEEN YADAV T R			D-109
PUNEETH H S			D-109
DR. PREMA N S			A-017
HARINI D K			A-016
NEETI SHUKLA			A-016
LAKSHMI H			A-016
RAHSMI S			A-016
CHAYASHREE G			A-016
PRIYANKA MOHAN			A-006
GAGANA S			A-007
DR. RAVI KUMAR V			A-207
DR. POOJA M R			A-207
DR. K PARAMESHA			A-207
DR. C BALARENGADURAI			A-207
DR. ADITYA C R			A-207
DR. RAMAKRISHNA HEGDE			A-207
DR. NATESH M			A-207
DR. JANHAVI V			A-207
DR. AYESHA TARANUM			A-207
DR. PRASAD M R			A-207
DR. MADHUSUDHAN H S			A-207
DR. CHETHANA H T			A-207
HAMSAVENI M			A-207
SHRADDHA C			A-207
VINAY M G			A-207
DIVYA C D			A-207
USHA C S			A-207
SACHIN D N			A-207
NITHIN KUMAR			A-207
SHASHANK N			A-207
HARSHITHA K			A-207
CHAYA KUMARI H A			A-207
ANUSHA K S			A-207
SWATHI B H			A-207
TANUJA KAYARGA			A-207
BHAVYA B G			A-207
PRUTHVI P R			A-207
GOURAV P R			A-207
KAVANA M D			A-207
MANASVI J MAASTHI			A-207
LAVANYA M C			A-207
AKSHATHA M			A-207
LAKSHMI B S			A-207
DR. HEMASHREE L			A-207
KAVITHA D N			A-207
GAYANA J KUMAR			A-207
CHAITRA N C			A-207
AISHWARYA M			A-207
SURAKSHA P			A-207
ANIL KUMAR B H			A-207
SUDHIR SOSALE			A-207
DR. C BALARENGADURAI			A-303
DR. BASAVARAJU H T			A-303
DR. JAYASHREE N			A-303
JNANA SAI S R			A-303
PRAJWAL M L			A-303
SAI MANIKANTA S PATHURI			A-303
`;

function normalizeName(name) {
  return name.replace(/^DR\.?\s*/i, '').replace(/\s+/g, ' ').trim().toLowerCase();
}

function processCabins() {
  const content = fs.readFileSync('js/data.js', 'utf8');
  
  // Extract facultyData array string using regex or simple parsing
  const facultyStart = content.indexOf('const facultyData = [');
  const departmentsStart = content.indexOf('const departmentsData = [');
  
  if (facultyStart === -1 || departmentsStart === -1) {
    console.error("Could not find facultyData or departmentsData bounds.");
    return;
  }
  
  const facultyStr = content.substring(facultyStart + 'const facultyData = '.length, departmentsStart).trim().replace(/;$/, '');
  
  let facultyData;
  try {
    // using eval to parse the JS array (since it's not strict JSON)
    facultyData = eval('(' + facultyStr + ')');
  } catch (e) {
    console.error("Failed to parse facultyData:", e);
    return;
  }

  const updates = [];
  const lines = rawData.split('\n').map(l => l.trim()).filter(l => l);
  
  lines.forEach(line => {
    // Split by tabs or multiple spaces
    const parts = line.split(/\t{2,}|\t| {3,}/);
    if (parts.length < 2) return;
    
    let name = parts[0].trim();
    let cabin = parts[parts.length - 1].trim();
    
    // Sometimes there is a designation like DEAN in the middle
    
    const normName = normalizeName(name);
    
    // Find matching faculty
    let match = facultyData.find(f => normalizeName(f.name) === normName || normalizeName(f.name).includes(normName) || normName.includes(normalizeName(f.name)));
    
    if (match) {
      match.cabin = cabin;
    } else {
      // Create new faculty
      const newId = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      const newFac = {
        id: newId,
        name: name,
        department: "Unknown",
        title: name.toLowerCase().includes('dr.') ? "Professor" : "Assistant Professor",
        cabin: cabin,
        email: newId.replace(/-/g, '') + "@vvce.ac.in",
        phone: "+91 " + Math.floor(1000000000 + Math.random() * 9000000000),
        imageUrl: "https://i.pravatar.cc/150?u=" + newId,
        bio: "Faculty member at VVCE.",
        education: [],
        availability: [],
        courses: []
      };
      facultyData.push(newFac);
    }
  });

  const updatedFacultyStr = JSON.stringify(facultyData, null, 2);
  
  const newContent = content.substring(0, facultyStart) + 
                     'const facultyData = ' + updatedFacultyStr + ';\n\n' + 
                     content.substring(departmentsStart);
                     
  fs.writeFileSync('js/data.js', newContent, 'utf8');
  console.log("Updated data.js with new cabin numbers and missing faculties.");
}

processCabins();
