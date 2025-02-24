import ImageHolderTop from "./ImageHolderTop";
import ImageHolderBottom from "./ImageHolderBottom";

const imagesTop = Array.from({ length: 50 }, (_, i) => `https://picsum.photos/200/300?random=${i}`);
const imagesBottom = Array.from({ length: 50 }, (_, i) => `https://picsum.photos/200/300?random=${i + 100}`);

const HomeContent = () => {
  return (
    <div className="grid grid-rows-2 gap-4 w-full h-full  bg-white">
      {/* Top Section - 8 Image Holders with Sliding Effect */}
      <div className="bg-blue-100 p-3 shadow ">
        <h2 className="text-lg font-semibold mb-2 text-center"> </h2>
        <div className="flex justify-center gap-4 flex-wrap">
          {Array.from({ length: 8 }).map((_, index) => (
            <ImageHolderTop key={index} images={imagesTop.slice(index * 5, index * 5 + 5)} />
          ))}
        </div>
      </div>

      {/* Bottom Section - 8 Image Holders with Sliding Effect */}
      <div className="bg-blue-100 p-4 shadow">
        <h2 className="text-lg font-semibold mb-2 text-center"> </h2>
        <div className="flex justify-center gap-4 flex-wrap">
          {Array.from({ length: 8 }).map((_, index) => (
            <ImageHolderBottom key={index} images={imagesBottom.slice(index * 5, index * 5 + 5)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
