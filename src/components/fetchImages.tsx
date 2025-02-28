const API_BASE_URL = "https://photographyproject.onrender.com";

export const fetchImages = async (category: string) => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/images?category=${category}`);
        if (!response.ok) throw new Error("Failed to fetch images");
        const data = await response.json();
        return data.length ? data : [];
    } catch (error) {
        console.error("Error fetching images:", error);
        return [];
    }
};
