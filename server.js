const express = require("express");
const cors = require("cors");

const session = require("./api/utils/sessionConfig");

const server = express();

// Routers
const usersRouter = require("./api/routers/usersRouter");
const authRouter = require("./api/routers/authRouter");

// Middleware
const restricted = require("./api/middleware/restrictedMW");

server.use(express.json());
server.use(cors());

server.use(session.session(session.sessionConfig));

server.use("/api/users", restricted, usersRouter);
server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;
