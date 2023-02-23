const express = require("express");
const connectToDatabase = require("./src/database/connect");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
connectToDatabase();
require("./routes/express");
