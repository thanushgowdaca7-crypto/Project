# 🎓 VVCE Connect
> A modern, responsive Single Page Application (SPA) for Vidyavardhaka College of Engineering.

---

## 📝 Overview
**VVCE Connect** is a comprehensive campus portal designed to serve the VVCE community. It facilitates campus navigation, faculty directory lookups, event management, club explorations, and a lost-and-found registry. 

The project is built with a focus on high performance, utilizing a **Vanilla JS** implementation to ensure a lightweight and snappy user experience without the overhead of heavy frameworks.

---

## 🏗️ Architecture

### 1. Frontend Architecture
* **Core Structure:** HTML5, CSS3, Vanilla JavaScript (ES6+).
* **Styling:** Tailwind CSS (via CDN) for rapid UI development and custom CSS variables for design consistency.
* **Logic Engine:**
    * `app.js`: The SPA core handling client-side routing and DOM injection.
    * `pages.js`: Functional templates for each route (Home, Directory, Events, etc.).
    * `state.js`: Manages user sessions and role-based access (Student/Faculty/Admin).

### 2. Backend Architecture (Simulated)
To ensure portability during development, the app uses a **Backend-as-a-Service** simulation:
* **In-Memory Database (`data.js`):** Structured JSON objects acting as database tables.
* **Simulated API:** Frontend functions perform CRUD operations directly on the local state.
* **Deployment:** Includes a custom `build.js` script and `vercel.json` for seamless serverless hosting.

---

## 🗺️ Development Roadmap

### 📍 Phase 1: Foundation (Current)
- [x] **Vanilla SPA Engine:** Custom hash-based routing system.
- [x] **Responsive UI:** Utility-first design with Tailwind CSS.
- [x] **Simulated Backend:** In-memory data management (`data.js`).
- [x] **Multi-language:** English & Kannada localization engine.

### 🏗️ Phase 2: System Hardening (Upcoming)
- [ ] **Live API Integration:** Swap `data.js` for a **Node.js/Express** REST API.
- [ ] **Persistent Storage:** Implement **PostgreSQL** or **MongoDB** for data durability.
- [ ] **Auth 2.0:** Replace mock login with **Firebase Auth** or **JWT** for real security.
- [ ] **Image Uploads:** Cloudinary integration for reporting Lost & Found items.

### 🚀 Phase 3: Smart Features (Future)
- [ ] **Real-time Notifications:** Socket.io integration for instant event alerts.
- [ ] **Admin Dashboard:** Full GUI for campus authorities to manage faculty and club data.
- [ ] **PWA Support:** Offline access and "Add to Home Screen" functionality for mobile users.

---

## 📊 Current Progress
![Progress](https://geps.dev/progress/45?dangerColor=3b82f6&warningColor=3b82f6&successColor=3b82f6)

---

## 🛠️ Getting Started

1. **Clone the repo:** `git clone https://github.com/your-username/vvce-connect.git`
2. **Build the project:** `node build.js`
3. **Run:** Open `index.html` via Live Server or any static hosting tool.

<p align="center">Built with 💙 for the VVCE Community</p>
