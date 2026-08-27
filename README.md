# Shelly Portfolio

A full-stack portfolio website built to showcase artwork in a responsive, modern gallery.

The project uses a React/Vite frontend hosted on GitHub Pages, an Express backend hosted on Render, and Cloudinary for artwork storage and delivery.

## Live Website

https://phillbost.github.io/shelly-portfolio/

## Backend

https://shelly-portfolio.onrender.com

---

## Features

- Responsive artwork gallery
- Artwork dynamically loaded from Cloudinary
- Artwork titles and hover effects
- Full-screen artwork preview
- Responsive navigation
- Production and development environments
- REST API for retrieving artwork
- Cloudinary image delivery
- Separate frontend and backend deployments

---

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- `@cloudinary/react`
- `@cloudinary/url-gen`

### Backend

- Node.js
- Express
- CORS
- dotenv
- Cloudinary API

### Deployment

- GitHub Pages — frontend
- Render — backend
- Cloudinary — image storage and delivery

---

# Project Structure

```text
shelly-portfolio/
│
├── public/
│   └── ...
│
├── src/
│   ├── components/
│   ├── ...
│   └── main.jsx
│
├── server/
│   ├── routes/
│   │   └── art.js
│   ├── index.js
│   ├── package.json
│   └── .env
│
├── .env.development
├── .env.production
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
