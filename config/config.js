require("dotenv").config();

module.exports = {
  server: {
    port: process.env.PORT || 4001,
    host: process.env.HOST || "localhost",
    apiUrl: process.env.API_URL,
    clientUrl: process.env.CLIENT_URL,
  },

  database: {
    uri: process.env.DB_URI,
  },
};
