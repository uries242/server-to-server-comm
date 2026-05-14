const express = require("express");
const app = express();
// const axios = require("axios");
const apiClient = require("./api/apiClient");
require('dotenv').config();
const PORT = process.env.PORT;