const express = require("express");

require("dotenv").config();
const cors = require("cors");
const helmet = require("helmet")
const morgan = require("morgan");

const server = express();

server.use(cors());
server.use(helmet());
server.use(morgan("dev"));
server.use(express.json());

const projectRouter = require("./routers/project-router");
const taskRouter = require("./routers/task-router");

server.use("/api/projects", projectRouter)
server.use("/api/tasks", taskRouter)


module.exports = server;
