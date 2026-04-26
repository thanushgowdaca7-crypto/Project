
<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:6366f1,100:a855f7&height=200&section=header&text=VVCE%20Connect&fontSize=60&fontColor=ffffff&animation=fadeIn&fontAlignY=35&desc=Your%20Digital%20Campus%20Companion&descAlignY=55&descSize=18"/>

<img src="https://img.shields.io/badge/⚡_Vanilla_JS-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black&labelColor=1a1a2e"/>
<img src="https://img.shields.io/badge/🎨_Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white&labelColor=1a1a2e"/>
<img src="https://img.shields.io/badge/🚀_Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white&labelColor=1a1a2e"/>
<img src="https://img.shields.io/badge/📱_Responsive-100%25-10B981?style=for-the-badge&labelColor=1a1a2e"/>


<img src="https://img.shields.io/badge/status-active%20development-brightgreen?style=flat-square"/>
<img src="https://img.shields.io/badge/version-1.0.0-blue?style=flat-square"/>
<img src="https://img.shields.io/badge/license-MIT-orange?style=flat-square"/>
</div>

<div align="center">
🖼️ Preview
<img src="./public/preview-home.png" width="85%" style="border-radius: 16px; box-shadow: 0 20px 60px rgba(0,0,0,0.3);" alt="VVCE Connect Dashboard"/>
</div>


<div align="center">
✨ Features
</div>

<table align="center">
  <tr>
    <td align="center" width="20%">
      <img src="https://img.icons8.com/fluency/96/map.png" width="48"/><br><br>
      <b>🗺️ Campus Map</b><br>
      <sub>Interactive navigation</sub>
    </td>
    <td align="center" width="20%">
      <img src="https://img.icons8.com/fluency/96/conference-call.png" width="48"/><br><br>
      <b>👨‍🏫 Faculty</b><br>
      <sub>Directory & availability</sub>
    </td>
    <td align="center" width="20%">
      <img src="https://img.icons8.com/fluency/96/today.png" width="48"/><br><br>
      <b>📅 Events</b><br>
      <sub>Hackathons & fests</sub>
    </td>
    <td align="center" width="20%">
      <img src="https://img.icons8.com/fluency/96/people-working-together.png" width="48"/><br><br>
      <b>🏛️ Clubs</b><br>
      <sub>Explore & recruit</sub>
    </td>
    <td align="center" width="20%">
      <img src="https://img.icons8.com/fluency/96/search.png" width="48"/><br><br>
      <b>🔍 Lost & Found</b><br>
      <sub>Report & recover</sub>
    </td>
  </tr>
</table>


<div align="center">
🛠️ Tech Stack

<img src="https://skillicons.dev/icons?i=html,css,js,tailwind,nodejs,vercel&theme=dark&perline=6"/>


Table
Layer	Technology
⚡ Core	HTML5 · CSS3 · Vanilla JS (ES6+)
🎨 Styling	Tailwind CSS + Custom CSS Variables
🔤 Fonts	Syne · DM Sans · IBM Plex Mono
🎯 Icons	Lucide Icons
🗄️ Data	In-Memory JS Objects (Simulated DB)
🚀 Deploy	Vercel (Serverless)
</div>


<div align="center">
🏗️ Architecture
</div>

plain
Copy
┌─────────────────────────────────────────────────────────────┐
│                     🎨 FRONTEND                              │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌─────────────┐    ┌─────────────┐    ┌─────────────┐    │
│   │  index.html │───▶│   app.js    │───▶│  pages.js   │    │
│   │   (Shell)   │    │   Router    │    │   Views     │    │
│   └─────────────┘    └──────┬──────┘    └─────────────┘    │
│                             │                               │
│                    ┌────────┴────────┐                      │
│                    ▼                 ▼                      │
│            ┌─────────────┐   ┌─────────────┐               │
│            │  state.js   │   │translations │               │
│            │   (Store)   │   │    (i18n)   │               │
│            └─────────────┘   └─────────────┘               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                   ⚙️ SIMULATED BACKEND                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│   │ faculty  │  │  clubs   │  │  events  │  │  lost &  │  │
│   │  data    │  │  data    │  │  data    │  │  found   │  │
│   └──────────┘  └──────────┘  └──────────┘  └──────────┘  │
│                                                             │
│   ┌─────────────────────────────────────────────────────┐  │
│   │              Auth (Student/Faculty/Admin)            │  │
│   └─────────────────────────────────────────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘


<div align="center">
📁 Structure
</div>

plain
Copy
vvce-connect/
│
├── 📄 index.html          ──▶  SPA Shell
├── 📄 vercel.json         ──▶  Deploy Config
├── 📄 build.js            ──▶  Build Script
│
├── 📂 css/
│   └── style.css          ──▶  Design System
│
├── 📂 js/
│   ├── app.js             ──▶  ⚡ Router Engine
│   ├── pages.js           ──▶  📄 View Templates
│   ├── state.js           ──▶  🗃️ State Store
│   ├── data.js            ──▶  🗄️ Simulated DB
│   └── translations.js    ──▶  🌐 i18n Support
│
├── 📂 public/
│   └── images/            ──▶  🖼️ Assets
│
└── 📂 dist/               ──▶  📦 Production Build


<div align="center">
🚀 Quick Start
</div>

bash
Copy
# 1️⃣ Clone
git clone https://github.com/yourusername/vvce-connect.git
cd vvce-connect

# 2️⃣ Run (no install needed!)
open index.html

# 3️⃣ Build
node build.js

# 4️⃣ Deploy
vercel --prod


<div align="center">
🔮 Roadmap
</div>

Table
Phase	Feature	Status
✅	Vanilla JS SPA + Tailwind	Done
✅	Simulated Backend + Auth	Done
✅	Multi-language (EN/ಕನ್ನಡ)	Done
🔄	REST API (Node/Express)	Planned
🔄	PostgreSQL / MongoDB	Planned
🔄	OAuth 2.0 / JWT Auth	Planned
⏳	PWA + Offline Support	Future
⏳	Push Notifications	Future


<div align="center">
🤝 Contribute

plain
Copy
Fork  →  Branch  →  Commit  →  Push  →  Pull Request

<img src="https://img.shields.io/badge/PRs-welcome-10B981?style=for-the-badge&logo=github"/>
</div>


<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:a855f7,100:6366f1&height=120&section=footer&text=Made%20with%20%E2%9D%A4%EF%B8%8F%20at%20VVCE&fontSize=24&fontColor=ffffff&animation=fadeIn"/>
</div>