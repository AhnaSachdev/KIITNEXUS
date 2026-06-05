const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 200 },
    email: { type: String, required: true, trim: true, maxlength: 200 },
    subject: { type: String, required: true, trim: true, maxlength: 300 },
    message: { type: String, required: true, trim: true, maxlength: 5000 },
    ip: { type: String },
    userAgent: { type: String },
  },
  { timestamps: true },
);

module.exports =
  mongoose.models.Message || mongoose.model("Message", MessageSchema);
