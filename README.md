# Movie Project

A React-based movie application built with Vite that allows users to browse and search for movies using the TMDB API.

## Features

- Browse popular movies
- Search for movies
- Responsive design
- Modern React with hooks

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Environment Variables

Create a `.env` file in the root directory with your TMDB API key:

```env
VITE_REACT_APP_API_KEY=your_tmdb_api_key_here
```

Get your API key from: https://www.themoviedb.org/settings/api

## Deployment on Vercel

This project is configured for deployment on Vercel. Follow these steps:

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Add your environment variable:
     - Name: `VITE_REACT_APP_API_KEY`
     - Value: Your TMDB API key
   - Click "Deploy"

3. **Automatic Deployments**
   - Vercel will automatically deploy on every push to your main branch
   - Preview deployments are created for pull requests

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── services/      # API services
├── contexts/      # React contexts
├── css/          # Stylesheets
└── assets/       # Static assets
```

## Technologies Used

- React 19
- Vite
- React Router DOM
- TMDB API
