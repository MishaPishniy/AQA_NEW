require('dotenv').config();

const config = {
  baseUrl: process.env.BASE_URL,

  credentials: {
    username: process.env.API_USERNAME,
    password: process.env.API_PASSWORD
  }
};

module.exports = config;