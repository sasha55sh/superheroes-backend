require("dotenv").config();
require("express-async-errors");
const express = require("express");
const cors = require("cors");
const router = require("./routes/routes");
const dbContext = require("./generic/database/dbContext");
const config = require("./config/config");
const logger = require("./logger");

process.on("unhandledRejection", (reason, promise) => {
  logger.error(`Unhandled Rejection at: ${promise}, reason: ${reason}`);
  logger.on("finish", () => process.exit(1));
});

process.on("uncaughtException", (error) => {
  logger.error(`Uncaught Exception: ${error.message}`);
  logger.error(error.stack);
  logger.on("finish", () => process.exit(1));
});

const app = express();

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);
app.use(express.json());
app.use("/", router);

const start = async () => {
  try {
    await dbContext.connect();
    app.listen(config.server.port, () => {
      console.log(`Server is running on port ${config.server.port}`);
    });
  } catch (e) {
    logger.error(`Startup error: ${e.message}`);
    logger.on("finish", () => process.exit(1));
    console.log(e);
  }
};

start();
