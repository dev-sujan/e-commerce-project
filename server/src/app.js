const express = require("express");
const morgan = require("morgan");
const createError = require("http-errors");
const xssClean = require("xss-clean");
const rateLimit = require("express-rate-limit");
const { userRouter } = require("./routers/userRouter");

const app = express();

const rateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5,
  message: "Too many request from this IP. Plsease try again later",
});

// middlewares
app.use(rateLimiter)
app.use(xssClean());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users',userRouter)

// Server Health
app.get("/health", (req, res) => {
  res.status(200).json({
    message: "ok",
  });
});

// Server test
app.get("/test", (req, res) => {
  res.status(200).json({
    message: "API testing is working fien",
  });
});

// client error handleing
app.use((req, res, next) => {
  next(createError(404, "invalid route"));
});

// server error handleing -> all the errors
app.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    success: false,
    message: err.message,
  });
});

module.exports = app;
