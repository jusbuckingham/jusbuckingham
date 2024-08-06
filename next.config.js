// Load environment variables from .env file
require('dotenv').config();

module.exports = {
  reactStrictMode: true,
  env: {
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS,
  },
};
