# <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Laptop.png" alt="Laptop" width="40" /> VVCE Connect

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Syne&weight=700&size=35&pause=1000&color=3B82F6&center=true&vCenter=true&width=500&lines=Welcome+to+VVCE+Connect;The+Modern+Campus+Portal;Built+with+Vanilla+JS;Fast.+Responsive.+Clean." alt="Typing SVG" />
</p>

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-architecture">Architecture</a> •
  <a href="#-roadmap">Roadmap</a>
</p>

---

## ✨ Overview
**VVCE Connect** is a premium Single Page Application (SPA) designed for the **Vidyavardhaka College of Engineering**. It’s built to be fast, omitting heavy frameworks in favor of high-performance Vanilla JS.

> [!IMPORTANT]
> This project currently utilizes a **Simulated Backend** for instant portability and zero-config deployment.

---

## 🚀 Key Features

| Feature | Description | Status |
| :--- | :--- | :---: |
| **Campus Navigation** | Interactive faculty cabin & department lookup. | ✅ |
| **Event Management** | Real-time tracking of hackathons and fests. | 📅 |
| **Lost & Found** | Digital registry for reported campus items. | 🔍 |
| **Club Hub** | Centralized directory for student organizations. | 🤝 |
| **Bi-lingual** | Seamless switching between English & Kannada. | 🌍 |

---

## 🛠️ Tech Stack

<p align="left">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
</p>

---

## 🏗️ Technical Architecture

### 1. Frontend Engine
The app uses a custom-built **Vanilla JS Router**. No React, no Vue—just pure speed.
```mermaid
graph LR
  A[index.html] --> B{app.js Router}
  B --> C[Home View]
  B --> D[Faculty Directory]
  B --> E[Event Registry]
  style B fill:#3B82F6,stroke:#fff,stroke-width:2px,color:#fff


 for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
## 🛤️ Architecture Roadmap

```mermaid
graph TD
    subgraph "Current State (v1.0)"
    A[Frontend UI] --> B(js/data.js)
    B --> C{Simulated CRUD}
    end

    subgraph "Planned Migration (v2.0)"
    D[Frontend UI] --> E[Fetch API]
    E --> F[Express Server]
    F --> G[(PostgreSQL DB)]
    end

    style B fill:#f9f,stroke:#333,stroke-width:2px
    style G fill:#3b82f6,stroke:#fff,stroke-width:2px,color:#fff

