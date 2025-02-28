import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv/config";

import "dotenv/config";

const app = express(); 
app.use(cors());

app.get("/api/images", async (req, res) => {
    const category = req.query.category;
    const folderId = process.env[`GOOGLE_FOLDER_${category.toUpperCase()}`];

    console.log(`Received request for category: ${category}`);
    console.log(`Resolved Folder ID: ${folderId}`);

    if (!folderId) {
        console.error("Invalid category or missing Folder ID");
        return res.status(400).json({ error: "Invalid category" });
    }

    try {
        console.log("Fetching from Google Drive API...");
        const response = await fetch(
            `https://www.googleapis.com/drive/v3/files?q='${folderId}' in parents&key=${process.env.GOOGLE_API_KEY}&fields=files(id,name,mimeType)`
        );
        
        const data = await response.json();
        console.log("Google API Response:", JSON.stringify(data, null, 2));

        if (!data.files) {
            console.error("Google API Error: No files returned");
            return res.status(500).json({ error: "Failed to fetch images" });
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
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
