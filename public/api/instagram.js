export default async function handler(req, res) {
  // Allow only GET requests
  if (req.method !== "GET") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const userId = process.env.INSTAGRAM_USER_ID;
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

    if (!userId || !accessToken) {
      return res.status(500).json({
        error: "Instagram environment variables are missing",
      });
    }

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

      console.error("Instagram API error:", errorData);

      return res.status(response.status).json({
        error: "Instagram API request failed",
        details: errorData,
      });
    }

    const data = await response.json();

    return res.status(200).json(data);
  } catch (error) {
    console.error("Instagram server error:", error);

    return res.status(500).json({
      error: "Failed to fetch Instagram posts",
    });
  }
}