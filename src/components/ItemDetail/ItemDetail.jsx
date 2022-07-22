import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';
import { useCartContext } from "../Context/CartContext";

const ItemDetail = ({unicoProd}) => {
    const {addCart} = useCartContext()
    const [button, setButton] = useState("button")

    const onAdd = (count) => {
        setButton("button2")
        addCart({...unicoProd, cantidad:count})
    }

    return(
        <>
            <h2 className="text-center">Producto seleccionado</h2>
            <div className="text-center">
                Producto: {unicoProd.nombre}
                <div>
                    {<img src={unicoProd.imagen} alt="Prendas" widht={150} height={300}/>}
                </div>
                <div>Categoria: {unicoProd.categoria}</div>
                <div>Precio: $ {unicoProd.precio}</div>
            </div>
            <div>
                {   button === "button" ?
                    <ItemCount stock={5} onAdd={onAdd}/>
                : 
                    <div className="text-center my-4">
                        <div className="my-3">
                            <Link to="/">
                                <button className="btn btn-outline-primary">Continuar comprando o ver otros productos</button>
                            </Link>
                        </div>
                        <div className="my-3">
                            <Link to="/cart">
                                <button className="btn btn-outline-primary">Finalizar compra </button>
                            </Link>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default ItemDetail;