const express = require("express");

require("dotenv").config();
const cors = require("cors");
const helmet = require("helmet")
const morgan = require("morgan");

const projectRouter = require("./routers/project-router");

const server = express();

server.use(cors());
server.use(helmet());
server.use(morgan("dev"));
server.use(express.json());


server.use("/api/projects", projectRouter)


module.exports = server;
