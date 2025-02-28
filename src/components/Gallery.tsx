import { useState, useEffect } from "react";
import { fetchImages } from "./fetchImages"; // Ensure fetchImages.tsx is correctly imported

export default function Gallery() {
  const categories = ["Website", "Wedding", "Seasonal"]; // Ensure this matches backend categories
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [images, setImages] = useState<{ id: string; url: string }[]>([]);
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [startIndex, setStartIndex] = useState(0);
  const thumbnailsPerPage = 7; // Number of thumbnails per page

  useEffect(() => {
    const loadImages = async () => {
        setLoading(true);
        setError("");
        setImages([]);

        try {
            const fetchedImages = await fetchImages(selectedCategory);
            console.log("Fetched Images in Gallery.tsx:", fetchedImages); // Debugging log

            if (fetchedImages.length > 0) {
                setImages(fetchedImages);
                setCurrentImage(fetchedImages[0].url); // Set first image
            } else {
                setError("No images found.");
                setCurrentImage(null);
            }
        } catch (err) {
            console.error("Error fetching images:", err);
            setError("Failed to load images. Please try again.");
            setImages([]);
            setCurrentImage(null);
        } finally {
            setLoading(false);
        }
    };

    loadImages();
}, [selectedCategory]);



  // Handlers for thumbnail navigation
  const handleNextThumbnails = () => {
    if (startIndex + thumbnailsPerPage < images.length) {
      setStartIndex(startIndex + thumbnailsPerPage);
    }
  };

  const handlePrevThumbnails = () => {
    if (startIndex - thumbnailsPerPage >= 0) {
      setStartIndex(startIndex - thumbnailsPerPage);
    }
  };

  return (
    <div className="bg-blue-100 px-4 pb-12">
      {/* Floating Category Selection */}
      <div className="flex justify-left mt-8">
        <div className="px-6 py-3 flex space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-5 py-2 text-lg font-medium transition-all rounded-md ${
                selectedCategory === category
                  ? "bg-blue-300 text-black shadow-lg"
                  : "bg-blue-100 text-gray-800 hover:bg-blue-300"
              }`}
              onClick={() => {
                setSelectedCategory(category);
                setStartIndex(0); // Reset pagination when switching category
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Main Image Display */}
      <div className="max-w-screen-lg mx-auto mt-8 flex flex-col items-center">
        {loading ? (
          <p className="text-gray-500 text-center">Loading images...</p>
        ) : error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : currentImage ? (
          <div className="relative w-full max-w-2xl h-120 flex items-center justify-center">
            <img
              src={currentImage}
              alt="Main Display"
              className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
            />
          </div>
        ) : (
          <p className="text-gray-500 text-center">No images available.</p>
        )}

        {/* Thumbnail Navigation */}
        {images.length > thumbnailsPerPage && (
          <div className="mt-4 flex items-center space-x-2">
            {/* Left Arrow */}
            <button
              onClick={handlePrevThumbnails}
              className={`px-4 py-2 text-gray-800 rounded-md ${
                startIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-100"
              }`}
              disabled={startIndex === 0}
            >
              ⇐
            </button>

           {/* Thumbnails */}
            <div className="flex space-x-2">
                {images.length > 0 ? (
                    images.slice(startIndex, startIndex + thumbnailsPerPage).map((image) => (
                        <img
                            key={image.id}
                            src={image.url ? image.url : "https://via.placeholder.com/150"} // Ensure fallback if URL is missing
                            alt="Thumbnail"
                            className={`w-20 h-20 object-cover rounded-md cursor-pointer transition-all ${
                                image.url === currentImage
                                    ? "border-4 border-blue-500"
                                    : "border-2 border-blue-300 hover:border-blue-500"
                            }`}
                            onClick={() => setCurrentImage(image.url)}
                        />
                    ))
                ) : (
                    <p className="text-gray-500 text-center">No images available.</p>
                )}
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleNextThumbnails}
              className={`px-4 py-2 text-gray-800 rounded-md ${
                startIndex + thumbnailsPerPage >= images.length ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-100"
              }`}
              disabled={startIndex + thumbnailsPerPage >= images.length}
            >
              ⇒
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
