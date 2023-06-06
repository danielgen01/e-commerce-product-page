const ImageCarousel = () => {
  return (
    <section
      className="Image-carousel-slider mt-0 w-screen lg:w-auto min-h-[400px] flex flex-col justify-center "
      
    >
         <div className="product-image lg:max-h-[600px] w-screen lg:w-auto flex lg:justify-center">
        <img
          src="public/assets/images/image-product-1.jpg"
          alt="product.image"
          className="h-full  object-cover rounded-2xl"
        />
      </div>


      <div className="arrows flex justify-between px-5 lg:hidden relative -mt-52 mb-52">
        <button className="bg-white px-5 py-4 rounded-full">
          <img src="public\assets\images\icon-previous.svg" alt="" />
        </button>
        <button className="bg-white px-5 py-4 rounded-full">
          <img src="public\assets\images\icon-next.svg" alt="" />
        </button>
      </div>

     
    </section>
  )
}

export default ImageCarousel
