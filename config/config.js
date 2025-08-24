require("dotenv").config();
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

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

  cloudinary
};
