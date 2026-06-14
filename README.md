# DSA Tracker Express

An Express + EJS + MongoDB rebuild of `https://dsa-tracker-navy.vercel.app/`.

## Stack

- Node.js
- Express
- EJS
- MongoDB with Mongoose

## Features

- Dashboard with all 12 DSA topics
- 100 seeded questions matching the original structure
- Topic detail pages with per-question completion toggles
- Overall and per-topic progress bars
- Completion screen with restart flow
- MongoDB-backed progress persistence using a browser cookie key

## Setup

1. Install dependencies:

```bash
npm install
```

2. Copy `.env.example` to `.env` and set your MongoDB connection string:

```env
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/dsa-tracker
```

3. Start MongoDB locally, or use MongoDB Atlas.

4. Run the app:

```bash
npm run dev
```

5. Open `http://localhost:3000`

## Notes

- Progress is stored per browser using the `dsaTrackerUser` cookie.
- If you want authentication or multi-user accounts next, we can layer that on cleanly.

## Deploy On Render

1. Push this project to GitHub.
2. Create a new Render `Web Service` from the repo.
3. Render can use [render.yaml](/c:/DSA-TRACKER/render.yaml), or you can set these manually:

```text
Build Command: npm install
Start Command: npm start
```

4. Add environment variable:

```text
MONGODB_URI=<your mongodb atlas connection string>
```

5. Deploy and open:

```text
https://<your-service>.onrender.com
```

6. Optional health check path:

```text
/healthz
```
