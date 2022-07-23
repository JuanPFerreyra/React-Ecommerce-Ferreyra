import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react"
import { useCartContext } from "../Context/CartContext"

const Formulario = () => {
    const {cart, cartVacio, totalCompra}  = useCartContext()
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')

    function agregarOrdenCompra (e) {
        e.preventDefault()
        let pedido = {}

        pedido.comprador = {nombre, email, telefono}
        pedido.total = totalCompra()

        pedido.productos = cart.map(cartItem =>{
            const id = cartItem.id
            const nombre = cartItem.nombre
            const precio = cartItem.precio

            return (id, nombre, precio)
            
        })

        
       const db = getFirestore()
       const orderCollection = collection(db, 'orders')
       addDoc(orderCollection, pedido)
       .then(resp => alert("Tu compra se ha realizado con exito. Tu orden de compra es: " + `${resp.id}`))
       .catch(err => console.log('ERROR EN PEDIDO: ', err))
        .finally(cartVacio)
    }

    return(
        <>
            <div className="my-3 border border-secondary text-center">
                <h4>Completa tus datos para terminar con tu compra:</h4>
                <form className="my-3" onSubmit={agregarOrdenCompra}>
                        <div><label>Nombre: </label></div>
                        <input type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)}></input>
                    
                        <div><label>Email: </label></div>
                        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                    
                        <div><label>Telefono: </label></div>
                        <input type="tel" value={telefono} onChange={(e)=>setTelefono(e.target.value)}></input>
                </form>
            </div>
            <button onClick={agregarOrdenCompra} className="btn btn-outline-success text-center">FINALIZAR COMPRA</button>
            
        </>
    )
}

export default Formulario;