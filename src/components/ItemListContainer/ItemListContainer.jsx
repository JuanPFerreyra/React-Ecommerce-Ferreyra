import { useEffect, useState } from "react"
import {useParams} from 'react-router-dom'
import { getFetch } from "../../helpers/getFetch"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({titulo, subTitulo}) => {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const {categoryId} = useParams();

  useEffect(()=>{

    if (categoryId) {
      getFetch()
      .then((resp)=>setProductos(resp.filter(prod => prod.categoria === categoryId)))
      .catch((err) => console.log(err))
      .finally(()=>setLoading(false))
    }else{
      getFetch()
      .then((resp)=>{setProductos(resp)})
      .catch((err) => console.log(err))
      .finally(()=>setLoading(false))
    }
    
  }, [categoryId])

  return (
    <>
      <h1>{titulo}</h1>
      <p>{subTitulo}</p>

      { loading ?
        <h2>Cargando productos...</h2>
      : 
        <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
          <ItemList productos={productos}/>
        </div>
      }
      
    </>
  )
}

export default ItemListContainer;