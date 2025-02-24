import { useEffect, useState } from "react";

interface ImageHolderTopProps {
  images: string[];
  interval?: number;
}

const ImageHolderTop: React.FC<ImageHolderTopProps> = ({ images, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsSliding(true);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsSliding(false);
      }, 2000); // Animation duration

    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-50 h-80 bg-gray-300 rounded-md shadow-md overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="Sliding Image"
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ${
            index === currentIndex
              ? "translate-x-0"
              : index === (currentIndex + 1) % images.length
              ? "translate-x-full"
              : "-translate-x-full hidden"
          } ${isSliding ? "-translate-x-full" : "translate-x-0"}`}
        />
      ))}
    </div>
  );
};

export default ImageHolderTop;
