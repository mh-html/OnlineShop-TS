import { useShoppingCart } from "../context/ShoppingCardContext"
import { formatCurrency } from "../utils/formatCurrency"

interface CardItemType {
    id: number
    title: string
    price: number
    imgURL: string
}

const CardItem = ({id, title, price, imgURL} : CardItemType) => {
    const {getItemQuantity, increaseCartQuantity ,decreaseCartQuantity , removeFromCart} = useShoppingCart()
    const quantity = getItemQuantity(id);

    return (
    <div className="w-full bg-white rounded-sm overflow-hidden shadow-md">
        <div className="w-full h-[200px] overflow-hidden">
            <img className="size-full object-cover" src={imgURL} alt={title} />
        </div>
        <div className="p-3">
            <div className="flex justify-between items-start">
                <p>{title}</p>
                <p>{formatCurrency(price)}</p>
            </div>
            <div className="w-full my-2">
                {quantity === 0 ? (
                    <button className="w-full bg-blue-500 text-white rounded-sm py-2 cursor-pointer" onClick={() => increaseCartQuantity(id)}>+ Add To Card</button>
                ) : (
                    <div className="text-center">
                        <div className="w-full my-1 text-xl">
                            <button className="w-12 bg-blue-500 text-white rounded-sm py-2 cursor-pointer" onClick={() => increaseCartQuantity(id)}>+</button>
                            <span className="mx-4">{quantity}</span>
                            <button className="w-12 bg-blue-500 text-white rounded-sm py-2 cursor-pointer" onClick={() => decreaseCartQuantity(id)}>-</button>
                        </div>
                        <button className="bg-red-500 text-white rounded-sm p-1 cursor-pointer" onClick={() => removeFromCart(id)}>Remove</button>
                    </div>
                )}
            </div>
        </div>
    </div>
    )
}

export default CardItem;