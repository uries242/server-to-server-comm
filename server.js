const express = require("express");
const app = express();
const axios = require("axios");
require('dotenv').config();
const PORT = process.env.PORT;



app.get("/test", (req, res) => {
  res.send("Good Test!");
});

app.get("/api/fun-fact", (req, res) => {
  res.send("Response");
});




app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
   