const ImageCarousel = () => {
  return (
    <div
      className="Image-carousel-slider mt-0 w-screen min-h-[400px] bg-cover flex flex-col justify-center "
      style={{ backgroundImage: "url(/assets/images/image-product-1.jpg)" }}
    >
      <div className="arrows flex justify-between px-5">
        <button className="bg-white px-5 py-4 rounded-full">
          <img src="public\assets\images\icon-previous.svg" alt="" />
        </button>
        <button className="bg-white px-5 py-4 rounded-full">
          <img src="public\assets\images\icon-next.svg" alt="" />
        </button>
      </div>
    </div>
  )
}

export default ImageCarousel
