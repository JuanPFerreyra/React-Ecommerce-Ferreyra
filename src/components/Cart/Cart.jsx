import { useCartContext } from "../Context/CartContext";

const Cart = () => {
    const {cart, cartVacio, totalCompra, cancelItem}  = useCartContext()

    return (
        <div>
            <ul>
                {cart.map(item => 
                <li key={item.id} className="row">
                    <div className="col-2">
                        <img src={item.imagen} alt="Prendas" widht={150} height={300}/>
                    </div>
                    <div className="col-3 my-4">
                        <div className="d-flex">
                            <h4>{item.nombre}</h4>
                            <div className="h-25 mx-3"><button key={item.id} onClick={()=>cancelItem(item.id)} className="btn btn-danger">X</button></div>
                        </div>
                        
                        <p>Precio: $ {item.precio}</p>
                        <p>Cantidad: {item.cantidad}</p>
                        <p>Subtotal: $ {item.precio * item.cantidad}</p>
                    </div>
                    
                </li>)}
            </ul>
            <h5>Total a pagar: $ {totalCompra()}</h5>
            <button onClick={cartVacio} className="btn btn-outline-danger">VACIAR CARRITO</button>
        </div>
    )
}

export default Cart;