import { useContext, createContext, useState } from "react";

export const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const cartVacio = () => {
        setCart([])
    }

    const isInCart = (item) => {
        return cart.find(producto => producto.id === item.id)
    }

    const addCart = (item) => {
        if (isInCart(item)) {
            (cart.find(elemento => elemento.id === item.id)).cantidad += item.cantidad
        } else {
            setCart([...cart, item])
            alert("Producto agregado al carrito")
        }
    }

    const totalCompra = () => {
        return cart.reduce((acum,valor) => (acum + (valor.cantidad * valor.precio)), 0)
    }

    const cancelItem = (id) => {
        setCart(cart.filter((item) => item.id !== id))
    }

    const iconCartWidget = () => {
        return cart.reduce((acum,prod) => acum = (acum + prod.cantidad), 0)
    }

    return(
        <CartContext.Provider value={{cart, addCart, cartVacio, totalCompra, cancelItem, iconCartWidget}}>
            {children}
        </CartContext.Provider>
    ) 
}

