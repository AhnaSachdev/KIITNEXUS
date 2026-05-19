Contact section integration notes

Frontend

- The updated contact UI is in `src/components/Contact.tsx`.
- It sends POST requests to `process.env.NEXT_PUBLIC_CONTACT_API_URL` or `/api/contact` by default.
- To point to the new Express backend, set `NEXT_PUBLIC_CONTACT_API_URL` to your backend endpoint, e.g. `https://api.example.com/api/contact`.

Backend

- Lightweight Express app is in `backend/`.
- Start backend with:

```bash
cd backend
cp .env.example .env # update MONGODB_URI
npm install
npm run dev
```

- The backend exposes POST `/api/contact` which stores messages in MongoDB.

Deployment tips

- Run the backend separately (Heroku, Fly, Vercel Serverless, or any node host).
- If deploying backend and Next.js on same domain, you can keep `NEXT_PUBLIC_CONTACT_API_URL` as `/api/contact` and proxy to backend or mount backend behind the same domain.

Security & next steps

- Add email notifications (SendGrid/SES) in `backend/routes/contact.js` if desired.
- Add spam protection (recaptcha or hcaptcha) for production.
- Lock down CORS to your front-end origin in `backend/server.js`.
