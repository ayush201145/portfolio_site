# Ayush Kumar — Portfolio

Dark & modern developer portfolio built with React.

## 🚀 Getting Started

### Prerequisites
- Node.js v16+ installed

### Install & Run

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm start
```

The app will open at **http://localhost:3000**

### Build for Production

```bash
npm run build
```

Output goes to `/build` — ready to deploy on Netlify, Vercel, or GitHub Pages.

---

## 📁 Project Structure

```
ayush-portfolio/
├── public/
│   └── index.html              # HTML shell + Google Fonts
├── src/
│   ├── App.jsx                 # Root component
│   ├── index.js                # React entry point
│   │
│   ├── components/
│   │   ├── Background.jsx      # Grid, grain, glow effects
│   │   ├── Navbar.jsx          # Sticky nav with scroll effect
│   │   ├── Navbar.css
│   │   ├── Hero.jsx            # Hero section with typewriter
│   │   ├── Hero.css
│   │   ├── About.jsx           # Bio + skill chips
│   │   ├── About.css
│   │   ├── Projects.jsx        # 8 project cards
│   │   ├── Projects.css
│   │   ├── Blog.jsx            # Blog coming-soon section
│   │   ├── Blog.css
│   │   ├── Contact.jsx         # Email + social links
│   │   ├── Contact.css
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   └── SectionLabel.jsx    # Reusable section header
│   │
│   ├── data/
│   │   ├── skills.js           # Skill categories & items
│   │   ├── projects.js         # Project list with metadata
│   │   └── blog.js             # Blog post stubs
│   │
│   ├── hooks/
│   │   ├── useInView.js        # Scroll-triggered visibility
│   │   └── useTypewriter.js    # Typewriter text effect
│   │
│   └── styles/
│       └── global.css          # CSS variables, resets, utilities
│
├── package.json
└── README.md
```

## ✏️ Customization

| What to change | Where |
|---|---|
| Projects | `src/data/projects.js` |
| Skills | `src/data/skills.js` |
| Blog posts | `src/data/blog.js` |
| Email / socials | `src/components/Contact.jsx` |
| Colors / fonts | `src/styles/global.css` → `:root` variables |
| Your name & bio | `src/components/Hero.jsx` + `src/components/About.jsx` |
"# portfolio" 
"# portfolio" 















