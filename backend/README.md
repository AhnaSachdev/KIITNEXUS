# KIIT Nexus Backend (Contact API)

This small Express backend stores contact form messages into MongoDB.

Setup

1. Copy `.env.example` to `.env` and set `MONGODB_URI`.
2. Install dependencies:

```bash
cd backend
npm install
```

3. Run in development:

```bash
npm run dev
```

API

POST /api/contact

Body (JSON): { name, email, subject, message }

Response: { ok: true, id }

Notes

- Add an email webhook/notification inside `routes/contact.js` if desired.
- Keep `MONGODB_URI` secret. Use environment variables in production.
