require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
const rateLimit = require("express-rate-limit");
const contactRoutes = require("./routes/contact");

const app = express();
app.use(helmet());
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);

// Basic rate limiting to prevent spam
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 20,
  message: { error: "Too many requests, please try again later." },
});
app.use(limiter);

app.use("/api", contactRoutes);

const PORT = process.env.PORT || 4000;

async function start() {
  if (!process.env.MONGODB_URI) {
    console.error("MONGODB_URI not configured in environment");
    process.exit(1);
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      maxPoolSize: 10,
    });
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
  } catch (err) {
    console.error("Failed to start server", err);
    process.exit(1);
  }
}

start();
