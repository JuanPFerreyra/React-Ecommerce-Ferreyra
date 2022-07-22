import { useState } from "react";

function ItemCount({stock, onAdd}) {
  const[inicial, setCount] = useState(1)
  
   function restar(){
    if (inicial > 1) {
      setCount(inicial - 1)
    } 
  }

  function sumar(){
    if (inicial < stock) {
      setCount(inicial + 1)
    } 
  }

  const comprar = () => {
    onAdd(inicial)
  }

  return (
    <>
      <div className="text-center my-4">
        <p>Quiero encargar <h4>{inicial}</h4> de este artículo</p>
        <button onClick={restar} className="btn btn-outline-danger"> - </button>
        <button onClick={sumar} className="btn btn-outline-success"> + </button>
        <div className="my-2">
          <button onClick={comprar} className="btn btn-outline-primary"> Comprar </button>
        </div>
      </div>
    </>
  )
}

export default ItemCount;