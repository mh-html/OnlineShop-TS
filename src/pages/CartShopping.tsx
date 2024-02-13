import ShoppingCartItem from "../components/ShoppingCartItem";
import { useShoppingCart } from "../context/ShoppingCardContext";
import storeItem from '../data/items.json'
import { formatCurrency } from "../utils/formatCurrency";

function CartShopping () {
    const { cartItem } = useShoppingCart()

    return (
        <div className="container mx-auto">
            <h3 className="my-2 text-slate-100">Cart Shopping</h3>
            <div className="w-[700px] flex flex-col justify-center items-center gap-3">
                {cartItem.map(item => <ShoppingCartItem key={item.id} {...item} />)}
            </div>
            <p className="mt-2 text-xl font-bold">Total: {formatCurrency(cartItem.reduce((total, item) => {
                const currItem = storeItem.find(i => i.id === item.id)
                return total + (currItem?.price || 0) * item.quantity
            }, 0))}</p>
        </div>
    )

}
export default CartShopping;
