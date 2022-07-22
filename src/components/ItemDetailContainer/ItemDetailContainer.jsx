import { useEffect, useState } from "react"
import {useParams} from 'react-router-dom'
import { getFetch} from "../../helpers/getFetch"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [unicoProd, setunicoProd] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams();

    useEffect(()=>{
      getFetch()
      .then((resp)=>setunicoProd(resp.find((prod) => prod.id == (id))))
      .catch((err) => console.log(err))
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