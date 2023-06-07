import { SetStateAction, useState } from "react";

const ImageCarousel = () => {
  const images = [
    "/public/assets/images/image-product-1.jpg",
    "/public/assets/images/image-product-2.jpg",
    "/public/assets/images/image-product-3.jpg",
    "/public/assets/images/image-product-4.jpg"
  ];

  const [activeImage, setActiveImage] = useState(images[0]);

  const handleThumbnailClick = (image: SetStateAction<string>) => {
    setActiveImage(image);
  };

  const handlePreviousImage = () => {
    const currentIndex = images.indexOf(activeImage);
    const previousIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setActiveImage(images[previousIndex]);
  };

  const handleNextImage = () => {
    const currentIndex = images.indexOf(activeImage);
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setActiveImage(images[nextIndex]);
  };

  return (
    <section className="Image-carousel-slider mt-0 w-screen lg:w-auto min-h-[400px] flex flex-col justify-center items-center gap-5">
      <div className="product-image lg:max-h-[600px] w-screen lg:w-auto flex lg:justify-center">
        <img
          src={activeImage}
          alt="product.image"
          className="h-full object-cover rounded-2xl"
        />
      </div>

      <div className="arrows flex justify-between px-5 lg:hidden relative -mt-52 mb-52 w-screen">
        <button className="bg-white px-5 py-4 rounded-full" onClick={handlePreviousImage}>
          <img src="public/assets/images/icon-previous.svg" alt="Previous" />
        </button>
        <button className="bg-white px-5 py-4 rounded-full" onClick={handleNextImage}>
          <img src="public/assets/images/icon-next.svg" alt="Next" />
        </button>
      </div>

      <section className="next-picture-thumbnails hidden lg:grid grid-cols-4 gap-12 w-auto">
        {images.map((image, index) => (
          <img
            key={index}
            src={`/public/assets/images/image-product-${index + 1}-thumbnail.jpg`}
            alt={`thumb-${index + 1}`}
            className={`w-24 rounded-lg hover:opacity-70 cursor-pointer ${activeImage === image ? "opacity-70" : ""}`}
            onClick={() => handleThumbnailClick(image)}
          />
        ))}
      </section>
    </section>
  );
};

export default ImageCarousel;
