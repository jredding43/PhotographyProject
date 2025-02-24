import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import fetch from "node-fetch";

dotenv.config();

const app = express();
app.use(cors()); // Allow frontend requests
const PORT = process.env.PORT || 5000;

const categoryFolders = {
  Website: process.env.GOOGLE_FOLDER_WEBSITE,
  Wedding: process.env.GOOGLE_FOLDER_WEDDING,
  Seasonal: process.env.GOOGLE_FOLDER_SEASONAL,
};

app.get("/api/images", async (req, res) => {
  const category = req.query.category;
  const FOLDER_ID = categoryFolders[category];
  const API_KEY = process.env.GOOGLE_API_KEY;

  if (!API_KEY || !FOLDER_ID) {
    return res.status(400).json({ error: "Missing API key or Folder ID" });
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}' in parents&key=${API_KEY}&fields=files(id,name,mimeType)`
    );
    const data = await response.json();

    if (!data.files || data.files.length === 0) {
      return res.status(404).json({ error: "No images found" });
    }

    const images = data.files
      .filter((file) => file.mimeType.startsWith("image/"))
      .map((file) => ({
        id: file.id,
        url: `https://lh3.googleusercontent.com/d/${file.id}=s800`,
      }));

    res.json(images);
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).json({ error: "Failed to fetch images" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
