type Props  ={
    isCartModalOpen:boolean
}

const CartModal:React.FC<Props> = ({isCartModalOpen}) => {
    return (
        <section className={`cart-modal w-screen  lg:px-20 ${isCartModalOpen? "relative" : "hidden"}`}>
            <div className="cart-box h-96 lg:h-40 w-full lg:w-72 bg-white shadow-xl  rounded-xl px-5 py-3 mb-1 mt-1 absolute right-10">
                <h1 className='font-bold'>Cart</h1>
                <hr />
                <div className="cart-items flex h-full w-full items-center justify-center">
                    <p className='font-bold text-Dark-grayish-blue'>Your cart is empty</p>

                </div>

            </div>

        </section>
    )
}

export default CartModal