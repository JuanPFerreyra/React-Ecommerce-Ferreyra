import { useEffect, useState } from "react"
import {useParams} from 'react-router-dom'
import ItemList from "../ItemList/ItemList"
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore"

const ItemListContainer = ({titulo, subTitulo}) => {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const {categoryId} = useParams();

  useEffect(()=>{
    const db = getFirestore()
    const queryCollection = collection (db, 'productos')
    const queryCollectionFilter = categoryId ? query (queryCollection, where('categoria','==', categoryId)) : queryCollection
         
    getDocs(queryCollectionFilter)
    .then(resp => setProductos(resp.docs.map(item => ({id: item.id, ...item.data()}))))
    .catch((err)=>console.log(err))
    .finally(()=>setLoading(false))
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