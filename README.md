# Fathima Rumaiza — Portfolio (MERN Stack)

A full-stack portfolio website built with **MongoDB, Express.js, React.js, and Node.js**.

## Project Structure

```
portfolio/
├── client/          ← React frontend
│   ├── public/
│   └── src/
│       ├── App.jsx  ← Main component (all sections)
│       └── index.js
├── server/          ← Express + MongoDB backend
│   ├── models/
│   │   └── Contact.js
│   ├── routes/
│   │   ├── contact.js
│   │   └── portfolio.js
│   └── index.js
└── package.json     ← Root scripts
```

## Setup & Run

### 1. Install dependencies

```bash
# From the portfolio/ root
npm run install-all
```

### 2. Configure environment

```bash
cd server
cp .env.example .env
# Edit .env and set your MONGO_URI
```

### 3. Start development

```bash
# From the portfolio/ root — starts both server (port 5000) and client (port 3000)
npm run dev
```

Visit **http://localhost:3000** in your browser.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/portfolio` | Returns all portfolio data (JSON) |
| POST | `/api/contact` | Save a contact form message to MongoDB |
| GET | `/api/contact` | Retrieve all contact messages (admin) |

## Customisation

- Update personal data in `server/routes/portfolio.js` and `client/src/App.jsx` (the `PORTFOLIO` constant)
- Add your MongoDB Atlas URI to `server/.env` for cloud deployment
- Deploy frontend to Vercel / Netlify, backend to Railway / Render

## Tech Stack

- **MongoDB** — stores contact form submissions
- **Express.js** — REST API server
- **React.js** — interactive UI with hooks
- **Node.js** — backend runtime
