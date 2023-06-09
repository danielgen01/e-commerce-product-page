import { useState } from "react"

type CartItem = {
  name: string,
  price: any,
  imageSrc: string,
  qty:number
}

type Props = {
  cartItems: CartItem[]
  setCartItems: any
}

const Caption: React.FC<Props> = ({ cartItems, setCartItems }) => {

  const [quantity, setQuantity] = useState<number>(0);

  const incrementQuantity = () => {
    if (quantity >= 0) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity != 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };



  function addToCart() {
    let priceNumber: any = document.getElementById("product-price")?.innerHTML
    let productName:any = document.getElementById("product-name")?.innerHTML
    let existingItem = cartItems.find(item => item.name)


    const newItem: CartItem = {
      name:productName,
      price: priceNumber,
      imageSrc: "public/assets/images/icon-cart.svg",
      qty:quantity
    }

    if(quantity > 0 && !existingItem) {
    setCartItems((prevCartItems:any) => [...prevCartItems, newItem])
    }

    if(existingItem) { 
      existingItem.qty = existingItem.qty += quantity
    }


    console.log(cartItems)
  }

  return (
    <figcaption className="px-10 py-5 flex flex-col gap-4 caption lg:gap-7">
      <h1 className="text-Orange/80 font-bold tracking-wider text-lg lg:text-xl">
        Sneaker Company
      </h1>
      <h2 className="font-bold text-4xl leading-10 text-left lg:text-5xl" id="product-name">
        Fall Limited Edtion Sneakers
      </h2>
      <p className="text-Dark-grayish-blue font-medium text-md lg:text-2xl">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="price">
        <div className="price-and-discount flex flex-row  items-center gap-5">
          <h3 className="font-bold text-3xl" id="product-price">$125.00</h3>
          <span className="bg-Pale-orange px-3 py-1 rounded-md text-Orange font-bold">
            50%
          </span>
          <s className="ml-auto text-Grayish-blue font-bold  text-xl">$250.00</s>
        </div>


      </div>

      <section className="quantity-box-and-addtocart-btn grid grid-cols-1 lg:grid-cols-4 gap-5">
        <div className="quantity-box bg-Light-grayish-blue w-full h-14 rounded-lg col-span-1">
          <div className="quantity-box-content px-4 flex justify-between h-full w-full items-center">
            <button onClick={decrementQuantity} className="h-full">
              <img src="public\assets\images\icon-minus.svg" alt="minus" />
            </button>
            <p className="quantity-number font-bold text-xl">{quantity}</p>
            <button onClick={incrementQuantity} className="h-full">
              <img src="public\assets\images\icon-plus.svg" alt="plus" />
            </button>
          </div>
        </div>

        <div className="addtocart h-16 w-full col-span-2">
          <button className="add-to-cart-button bg-Orange w-full rounded-xl flex justify-center items-center gap-4 text-white font-bold hover:opacity-75 duration-150 h-full text-lg" onClick={addToCart}>
            <img src="public/assets/images/icon-cart.svg" alt="cart-icon" />
            Add to cart
          </button>
        </div>
      </section>

    </figcaption>
  )
}

export default Caption
