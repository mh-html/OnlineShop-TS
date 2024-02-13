import { useShoppingCart } from '../context/ShoppingCardContext';
import storeItem from '../data/items.json'
import { formatCurrency } from '../utils/formatCurrency';

interface ShoppingCartItemProps {
    id: number
    quantity: number
}

function ShoppingCartItem ({id, quantity} : ShoppingCartItemProps) {
    const {removeFromCart} = useShoppingCart()

    const item = storeItem.find(item => item.id === id)
    if(item == null) return null;

    return(     
        <div className='w-full bg-white rounded-md p-2 flex justify-between items-center'>
            <div className='flex items-center'>
                <img className='w-1/3' src={item.imgURL} alt={item.title} />
                <div className='ml-2'>
                    <p className='text-bold text-xl'>{item.title} {quantity > 1 && <span className='text-slate-400 text-sm'>x{quantity}</span>} </p> 
                    <p>{formatCurrency(item.price)}</p>
                </div>
            </div>
            <div>
                <span className='mr-2'>{formatCurrency(quantity * item.price)}</span>
                <button onClick={() => removeFromCart(id)} className='px-3 py-1 font-bold border-2 border-red-600 text-red-600 rounded-sm hover:text-white hover:bg-red-600'>x</button>
            </div>
        </div>
    )
}
export default ShoppingCartItem;