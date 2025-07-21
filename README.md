# My website nicolas-metivier.fr

![Deno](https://img.shields.io/badge/Deno-v2.4.1+-green?logo=deno)
![Fresh](https://img.shields.io/badge/Built%20with-Fresh-blue?logo=deno)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v3-blue?logo=tailwindcss)
![Lucide Icons](https://img.shields.io/badge/Lucide%20Icons-v0.525+-purple?logo=lucide)

![Status](https://img.shields.io/badge/Status-Active-brightgreen)
![Last Commit](https://img.shields.io/github/last-commit/MNLaugh/nicolas-metivier-site)
![Repo Size](https://img.shields.io/github/repo-size/MNLaugh/nicolas-metivier-site)
![License](https://img.shields.io/badge/License-Proprietary-red)
![Languages](https://img.shields.io/badge/i18n-FR%20%7C%20EN-blue)

This is the source code for my personal website, built with [Fresh](https://fresh.deno.dev/) and [Deno](https://deno.land/). It showcases my projects, music, contact information,and includes a dynamic icon browser powered by [Lucide Icons](https://lucide.dev/), and [Tailwind CSS](https://tailwindcss.com/) for the styling system.

![Screenshot of nicolas-metivier.fr](./screenshot/Deno-Logger.png)

## 🚀 Features

- Fully responsive design
- Tailwind CSS for rapid UI development
- Smooth animations using custom utilities
- Project showcase with detailed pages
- Music section with artwork
- Contact page (without form, email and social links only)
- Dynamic icon viewer (powered by Lucide Icons)
- Color palette preview for Tailwind configuration
- Modular and component-based architecture
- Section registry system for dynamic section loading
- Project cards with dynamic routing
- Copy-to-clipboard functionality
- Multilingual support (currently French and English)

## 📦 Stack

- **Fresh (Deno Framework)**
- **Preact (JSX components)**
- **Tailwind CSS**
- **Lucide Icons**
- Deployed on a self-hosted Docker-based infrastructure

## 🛠️ Local Development

### Prerequisites

- [Deno](https://deno.land)
- [Fresh](https://fresh.deno.dev) CLI

## 🌐 Project Structure

- `components/` – UI components
- `data/` – Static data (icons, projects, pages, etc.)
- `islands/` – Client-side components
- `routes/` – Site pages
- `static/` – Static images and CSS
- `utils/` – Utility functions
- `types.ts` – Global types
- `deno.json` – Deno + Fresh configuration

### Start the development server

```bash
deno task start
```

Then visit `http://localhost:8000` in your browser.

## 🤝 Acknowledgments

- **[Lucide](https://github.com/lucide-icons/lucide)** for the icon set and metadata used in the icon browser
- **[Fresh](https://fresh.deno.dev/)** for the server-side rendering and routing framework
- **[Tailwind CSS](https://tailwindcss.com/)** for the styling system

## 📄 License

All rights reserved © 2025 [nicolas-metivier.fr](https://nicolas-metivier.fr)  
Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
