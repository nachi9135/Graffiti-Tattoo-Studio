const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

app.get("/api/instagram", async (req, res) => {
  try {
    const userId = process.env.INSTAGRAM_USER_ID;
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

    const fields = [
      "id",
      "media_type",
      "media_url",
      "thumbnail_url",
      "permalink",
      "caption",
      "timestamp",
    ].join(",");

    const url =
      `https://graph.instagram.com/${userId}/media` +
      `?fields=${fields}` +
      `&access_token=${accessToken}`;

    const response = await fetch(url);

    if (!response.ok) {
      const errorData = await response.text();

      return res.status(response.status).json({
        error: "Instagram API request failed",
        details: errorData,
      });
    }

    const data = await response.json();

    res.json(data);

  } catch (error) {
    console.error("Instagram API error:", error);

    res.status(500).json({
      error: "Failed to fetch Instagram posts",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Instagram server running on http://localhost:${PORT}`);
});