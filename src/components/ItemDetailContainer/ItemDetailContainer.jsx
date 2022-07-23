import { getFirestore, doc, getDoc,  } from "firebase/firestore"
import { useEffect, useState } from "react"
import {useParams} from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [unicoProd, setunicoProd] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams();
    
    useEffect(()=>{
        const db = getFirestore()
        const queryItem = doc(db, 'productos', id)

        getDoc(queryItem)
        .then((resp)=> setunicoProd({id: resp.id, ...resp.data()}))
        .catch((err) =>console.log(err))
        .finally(()=>setLoading(false))
    }, [id])

    return (
        <>
            { loading ?
                <h2> Cargando informacion del producto...</h2>
            : 
                <ItemDetail unicoProd={unicoProd}/>
            }
        </>
    )
}

export default ItemDetailContainer;