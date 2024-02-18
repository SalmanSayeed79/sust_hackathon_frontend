import React , {createContext, useState, useContext} from 'react'
import useLocalStorage from './useLocalStorage'

const CartContext=createContext()
const CartUpdateContext=createContext()
const CartEmptyContext=createContext()
const RemoveCartItemContext=createContext()

export function useCart(){
    return useContext(CartContext)
}
export function useCartUpdate(){
    return useContext(CartUpdateContext)
}
export function useCartEmpty(){
    return useContext(CartEmptyContext)
}
export function RemoveCartItem(){
    return useContext(RemoveCartItemContext)
}

export default function CartContextProvider({children}){
    const [cart,setCart]=useLocalStorage("bebsha-cart",[])

    const addToCart=(data)=>{
        setCart(prev=>[...prev,data])
    }
    const emptyCart=()=>{
        setCart([])
    }
    function removeCartItem(item){
        
        let newCart=[]
        cart.forEach(a=>{
            if(a!=item) {newCart.push(a)}
        })
        setCart(newCart)
        
    }
    return(
        <CartContext.Provider value={cart}>
            <CartUpdateContext.Provider value={addToCart}>
                <CartEmptyContext.Provider value={emptyCart}>
                    <RemoveCartItemContext.Provider value={removeCartItem}>
                        {children}
                    </RemoveCartItemContext.Provider>
                </CartEmptyContext.Provider>
            </CartUpdateContext.Provider>
        </CartContext.Provider>
    )
}