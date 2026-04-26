<div align="center">
🎓 VVCE Connect
Your Digital Campus Companion



<p align="center">
  <img src="https://img.shields.io/badge/Status-Active%20Development-brightgreen?style=flat-square" />
  <img src="https://img.shields.io/badge/Version-1.0.0-blue?style=flat-square" />
  <img src="https://img.shields.io/badge/License-MIT-orange?style=flat-square" />
</p>
A modern, responsive Single Page Application (SPA) serving as the comprehensive campus portal for Vidyavardhaka College of Engineering (VVCE).
Explore the Docs · Report Bug · Request Feature
</div>
📸 Preview
Campus navigation, faculty directory, event management, club exploration, and lost-and-found — all in one place.
<div align="center">
  <img src="./public/preview-home.png" alt="VVCE Connect Preview" width="800" />
</div>
📋 Table of Contents
About The Project
Features
Tech Stack
Architecture
Getting Started
Project Structure
Roadmap
Contributing
License
Acknowledgments
🎯 About The Project
VVCE Connect is designed to bridge the gap between students, faculty, and campus resources. Built with a focus on performance, aesthetics, and user experience, it completely bypasses heavy JavaScript frameworks in favor of a lightweight Vanilla JS implementation — making it blazing fast and highly portable.
Whether you need to:
🗺️ Navigate the campus
👨‍🏫 Find faculty cabin locations & availability
📅 Discover upcoming hackathons & fests
🏛️ Explore student clubs
🔍 Report or find lost items
VVCE Connect has you covered.
✨ Features
Table
Feature	Description
🗺️ Campus Navigation	Interactive maps and directions to key locations
👨‍🏫 Faculty Directory	Searchable profiles with real-time availability status & cabin locations
📅 Event Management	Browse, filter, and track upcoming technical fests and hackathons
🏛️ Club Explorer	Discover clubs, view member counts, and check recruitment status
🔍 Lost & Found	Report missing items or browse found items with status tracking
🌐 Multi-language Support	Switch between English and Kannada seamlessly
📱 Fully Responsive	Optimized for mobile, tablet, and desktop experiences
⚡ Lightning Fast	Zero framework overhead — pure Vanilla JS performance
🛠️ Tech Stack
Frontend
<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
</p>
Core: HTML5, CSS3, Vanilla JavaScript (ES6+)
Styling: Tailwind CSS (CDN) + Custom CSS Variables for design system consistency
Typography: Google Fonts (Syne, DM Sans, IBM Plex Mono)
Icons: Lucide Icons
Animations: CSS transitions & keyframe animations (fade-up, reveal-card)
Backend (Simulated)
Data Layer: In-memory JavaScript objects (js/data.js)
API: Simulated CRUD operations on structured JSON-like data
Auth: Hardcoded credential simulation (Student / Faculty / Admin roles)
Deployment
Build: Custom Node.js build script (build.js)
Hosting: Vercel (Serverless) with SPA routing rules
🏗️ Architecture
Frontend Architecture
plain
Copy
┌─────────────────────────────────────────┐
│           index.html (Shell)            │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐ │
│  │  app.js │  │ pages.js│  │ state.js│ │
│  │ (Router)│  │ (Views) │  │ (Store) │ │
│  └────┬────┘  └────┬────┘  └────┬────┘ │
│       └─────────────┴─────────────┘      │
│              translations.js             │
└─────────────────────────────────────────┘
app.js — Core SPA engine handling client-side routing via URL hash changes, DOM injection, and event delegation.
pages.js — View templates for each route (Login, Home, Directory, Events, Clubs, etc.).
state.js — Custom state management for user sessions and role-based UI updates.
translations.js — Multi-language support (English, Kannada).
Backend Architecture (Simulated)
plain
Copy
┌─────────────────────────────────────────┐
│            js/data.js                   │
│  ┌──────────┐ ┌──────────┐ ┌─────────┐ │
│  │ faculty  │ │  clubs   │ │ events  │ │
│  │  Data    │ │  Data    │ │  Data   │ │
│  └──────────┘ └──────────┘ └─────────┘ │
│  ┌──────────┐ ┌──────────┐             │
│  │ lostAnd  │ │  users   │             │
│  │ FoundData│ │ (Auth)   │             │
│  └──────────┘ └──────────┘             │
└─────────────────────────────────────────┘
In-Memory Database — Structured JS objects simulate database tables.
Simulated API — Direct CRUD operations on arrays, easily replaceable with fetch()/axios calls.
Authentication — Role-based access (Student, Faculty, Admin) with simulated JWT sessions.
🚀 Getting Started
Prerequisites
A modern web browser (Chrome, Firefox, Safari, Edge)
Node.js (v14+ recommended for build script)
Git
Installation
Clone the repository
bash
Copy
git clone https://github.com/yourusername/vvce-connect.git
cd vvce-connect
Open directly (Development)
bash
Copy
# Simply open index.html in your browser
open index.html
OR use a live server:
bash
Copy
npx live-server
Build for Production
bash
Copy
node build.js
This cleans the dist/ directory and copies all static assets ready for deployment.
Deploy to Vercel
bash
Copy
vercel --prod
📁 Project Structure
plain
Copy
vvce-connect/
│
├── 📄 index.html              # Main entry point (SPA shell)
├── 📄 vercel.json             # Vercel deployment config
├── 📄 build.js                # Custom Node.js build script
│
├── 📂 css/
│   └── style.css              # Custom CSS variables & animations
│
├── 📂 js/
│   ├── app.js                 # Core router & DOM engine
│   ├── pages.js               # Page view templates
│   ├── state.js               # Session & state management
│   ├── data.js                # Simulated backend database
│   └── translations.js        # i18n language support
│
├── 📂 public/
│   ├── images/                # Static images & assets
│   └── preview-home.png       # README preview image
│
└── 📂 dist/                   # Production build output
🔮 Roadmap
[x] Vanilla JS SPA architecture
[x] Tailwind CSS responsive design
[x] Simulated backend with role-based auth
[x] Multi-language support (EN / ಕನ್ನಡ)
[ ] 🔌 REST API Integration — Replace simulated backend with Node.js/Express
[ ] 🗄️ Persistent Database — PostgreSQL or MongoDB integration
[ ] 🔐 Real Authentication — OAuth 2.0 / JWT (Firebase Auth / Auth0)
[ ] 📱 PWA Support — Service workers & offline capability
[ ] 🔔 Push Notifications — Event reminders & lost-found alerts
[ ] 🗺️ Interactive Campus Map — SVG/Canvas-based navigation
See the open issues for a full list of proposed features and known issues.
🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.
Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request
📄 License
Distributed under the MIT License. See LICENSE for more information.
🙏 Acknowledgments
Vidyavardhaka College of Engineering (VVCE) — For the opportunity to build for the campus community
Tailwind CSS — For the incredible utility-first framework
Lucide Icons — For the beautiful, consistent icon set
Google Fonts — For Syne, DM Sans, and IBM Plex Mono
<div align="center">
⬆ Back to Top
Made with ❤️ by the VVCE Connect Team
</div>