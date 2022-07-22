import { Link } from 'react-router-dom';

export const Item = ({prod}) => {
    return(
        <div className='mb-3 col-5 mx-5'>
            <div className="card text-center">
                <div className="card-header">
                    {prod.nombre}
                </div>
                <div className="card-body">
                    {<img src={prod.imagen} alt="Prendas" widht={150}/>}
                </div>
                <div className="card-footer">
                    $ {prod.precio}
                    
                </div>                                      
                <div>
                    <Link to={`/detalle/${prod.id}`}>
                        <button className='mb-2 btn btn-outline-primary'>Más informacion</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}