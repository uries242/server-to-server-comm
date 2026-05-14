const express = require("express");
const app = express();
const axios = require("axios");
require("dotenv").config();
const PORT = process.env.PORT;

app.get("/test", (req, res) => {
  res.send("Good Test!");
});

app.get("/api/fun-fact", async (req, res) => {
  try {
    const funFactApiResponse = await axios.get("https://uselessfacts.jsph.pl/api/v2/facts/random");
    res.json(funFactApiResponse.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch fun fact!" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
