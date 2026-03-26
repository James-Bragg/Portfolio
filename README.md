# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS to showcase my projects and skills as a software developer.

## Live Demo

Visit the live site: [https://james-bragg.github.io/Portfolio](https://james-bragg.github.io/Portfolio)

## Technologies

- **React** - Frontend framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **GitHub Pages** - Hosting

## Installation

1. Clone the repository:
```bash
git clone https://github.com/James-Bragg/Portfolio.git
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

## Development

Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Build

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Deployment

Deploy to GitHub Pages:
```bash
npm run deploy
```

This command will:
1. Build the project (`npm run build`)
2. Deploy the `dist` folder to the `gh-pages` branch

## Project Structure

```
Portfolio-Site/
├── src/
│   ├── App.tsx           # Main app component with routing
│   ├── Navbar.tsx        # Navigation bar
│   ├── Home.tsx          # Home page
│   ├── About.tsx         # About page
│   ├── Projects.tsx      # Projects showcase
│   ├── Contact.tsx       # Contact page
│   └── main.tsx          # App entry point
├── public/               # Static assets
└── package.json          # Dependencies and scripts
```

## Author

**James Bragg**

- GitHub: [@James-Bragg](https://github.com/James-Bragg)
- Portfolio: [https://james-bragg.github.io/Portfolio](https://james-bragg.github.io/Portfolio)
