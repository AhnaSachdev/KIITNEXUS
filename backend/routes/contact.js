const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

function validatePayload(payload) {
  const errors = [];
  if (!payload.name || String(payload.name).trim().length === 0)
    errors.push("name");
  if (!payload.email || !/^\S+@\S+\.\S+$/.test(payload.email))
    errors.push("email");
  if (!payload.subject || String(payload.subject).trim().length === 0)
    errors.push("subject");
  if (!payload.message || String(payload.message).trim().length < 10)
    errors.push("message");
  return errors;
}

router.post("/contact", async (req, res) => {
  try {
    const errors = validatePayload(req.body);
    if (errors.length)
      return res
        .status(400)
        .json({ error: "validation_failed", details: errors });

    const ip =
      req.ip || req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    const ua = req.get("User-Agent");

    const doc = new Message({
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message,
      ip,
      userAgent: ua,
    });

    await doc.save();

    // TODO: add email notification here (e.g., SendGrid) if desired

    return res.json({ ok: true, id: doc._id });
  } catch (err) {
    console.error("Contact route error", err);
    return res.status(500).json({ error: "server_error" });
  }
});

module.exports = router;
