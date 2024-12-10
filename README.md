# To-Do App in Next.js

## Overview
This is a to-do list application built with Next.js and TypeScript. It includes both server-side rendering (SSR) and static site generation (SSG) pages. The app uses Tailwind CSS for styling and provides an API for task management.

## Features
- SSR and SSG for different pages.
- API routes for task CRUD operations.
- Multilingual support (English and French) with i18n.
- Optimized images with `next/image`.
- Middleware for authentication (prepared for future use).
- Ready for deployment on Vercel.

## Prerequisites
- Node.js v16+

## Setup and Run
1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd todo-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. The app will be available at `http://localhost:3000`.

## Deployment
This project is ready to deploy on [Vercel](https://vercel.com/). Simply connect the repository to Vercel and deploy.

## API Endpoints
### `GET /api/todos`
Retrieve all tasks.

### `POST /api/todos`
Add a new task. Example body:
```json
{
  "title": "New Task"
}
```

### `DELETE /api/todos`
Delete a task by ID.

## Notes
- Modify the translations in the `src/i18n/` folder for additional languages.
- Customize the Tailwind CSS styles in `tailwind.config.js`.
