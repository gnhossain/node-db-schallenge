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

module.exports = server;
