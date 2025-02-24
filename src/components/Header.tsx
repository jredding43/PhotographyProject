import React from "react";

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title = "Photography" }) => {
  // 14 Sample images 
  const images = Array.from({ length: 14 }, (_, i) => `https://picsum.photos/200/300?random=${i}`);

  // Rotation angles for a playful tilted effect
  const rotationAngles = ["-10deg", "5deg", "-5deg", "10deg", "-10deg", "5deg", "-5deg"];

  // Split into 7 left and 7 right images
  const leftImages = images.slice(0, 7);
  const rightImages = images.slice(7, 14);

  return (
    <header className="w-full bg-blue-100 text-black py-6  shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex flex-wrap md:flex-nowrap items-center justify-between px-4">

        {/* Left Photo Frames (7) */}
        <div className="flex-1 flex flex-wrap justify-end gap-2 md:flex-nowrap mr-5">
          {leftImages.map((src, index) => (
            <div
              key={index}
              className="w-12 h-12 md:w-16 md:h-16 bg-white shadow-lg rounded-lg overflow-hidden transform"
              style={{ rotate: rotationAngles[index % rotationAngles.length] }}
            >
              <img src={src} alt="Photo Frame" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Title in the Center  */}
        <div className="w-full md:w-auto text-center py-2">
          <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
        </div>

        {/* Right Photo Frames (7) */}
        <div className="flex-1 flex flex-wrap justify-start gap-2 md:flex-nowrap ml-5">
          {rightImages.map((src, index) => (
            <div
              key={index}
              className="w-12 h-12 md:w-16 md:h-16 bg-white shadow-lg rounded-lg overflow-hidden transform"
              style={{ rotate: rotationAngles[index % rotationAngles.length] }}
            >
              <img src={src} alt="Photo Frame" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

      </div>
    </header>
  );
};

export default Header;
