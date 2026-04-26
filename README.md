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


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
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
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
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
```
