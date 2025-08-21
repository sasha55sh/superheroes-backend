const mongoose = require("mongoose");
const config = require("../../config/config");

class DBContext {
  async connect() {
    await mongoose.connect(config.database.uri);
    console.log("Connected to MongoDB");
  }
}

module.exports = new DBContext();
