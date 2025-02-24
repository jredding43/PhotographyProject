const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export const fetchImages = async (category: string) => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/images?category=${category}`);
        const data = await response.json();

        return data.length ? data : [];
    } catch (error) {
        console.error("Error fetching images:", error);
        return [];
    }
};
