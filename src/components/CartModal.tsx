type Props = {
    isCartModalOpen: boolean
    cartItems: []
}

type CartItem = {
    name: string,
    price: any,
    imageSrc: string,
    qty:number
  }

const CartModal: React.FC<Props> = ({ isCartModalOpen, cartItems }) => {
    return (
        <section className={`cart-modal lg:px-20 ${isCartModalOpen ? "relative" : "hidden"}`}>
            <div className="cart-box h-96 lg:h-40 w-[777px] lg:w-72 bg-white shadow-xl  rounded-xl px-1 py-3 mb-1 mt-1 absolute right-10">
                <h1 className='font-bold'>Cart</h1>
                <hr />
                <div className="cart-items flex h-full w-full items-center justify-center">
                    {cartItems.length > 0 ? (
                        cartItems.map((cartItem:CartItem) => (
                            <section className="grid w-full grid-cols-3 px-2">
                                <div className="thumb flex">
                                <img src={cartItem.imageSrc} alt="product-thumb" className="h-20 rounded-lg" />
                                </div>
                                <div className="details flex justify-center">
                                    <h1 className="text-sm text-Dark-grayish-blue font-bold ">{cartItem.name}</h1>
                                </div>

                                <div className="delete flex justify-end">
                                    <button><img src="/assets/images/icon-delete.svg" alt=""  className="h-6"/></button>
                                </div>
                                    
                                </section>
                        ))
                    ) : (
                        <p className="font-bold text-Dark-grayish-blue">Your cart is empty</p>
                    )}

                </div>

            </div>

        </section>
    )
}

export default CartModal