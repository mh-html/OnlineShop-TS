import { ReactNode, createContext, useContext, useState } from "react";

type ShoppingCartProviderProps = {
    children: ReactNode
}
type ShoppingCartContext = {
    getItemQuantity : (id:number) => number
    increaseCartQuantity : (id:number) => void
    decreaseCartQuantity : (id:number) => void
    removeFromCart : (id:number) => void
    cartQuantity: number 
    cartItem : cartItem[]
}
type cartItem = {
    id: number
    quantity: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider ({children} : ShoppingCartProviderProps) {
    const [cartItem, setCartItem] = useState<cartItem[]>([])

    const cartQuantity = cartItem.reduce((quantity, item) => item.quantity + quantity , 0)
    

    function getItemQuantity (id:number){
        return cartItem.find(item => item.id === id)?.quantity || 0
    }
    function increaseCartQuantity (id:number){
        setCartItem(currItem =>{
            if(currItem.find(item => item.id === id) == null){
                return [...currItem , {id, quantity: 1}]
            }else{
                return currItem.map(item => {
                    if(item.id === id ){
                        return {...item, quantity: item.quantity + 1}
                    }else{
                        return item
                    }
                })
            }
        })
    }
    function decreaseCartQuantity (id:number){
        setCartItem(currItem =>{
            if(currItem.find(item => item.id === id)?.quantity === 1){
                return currItem.filter(item => item.id !== id)
            }else{
                return currItem.map(item => {
                    if(item.id === id ){
                        return {...item, quantity: item.quantity - 1}
                    }else{
                        return item
                    }
                })
            }
        })
    }
    function removeFromCart (id:number) {
        setCartItem(cartItem => {
            return cartItem.filter(item => item.id !== id)
        })
    }

    return(
        <ShoppingCartContext.Provider value={{
            getItemQuantity,
            increaseCartQuantity,
            decreaseCartQuantity,
            removeFromCart,
            cartItem, cartQuantity,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}