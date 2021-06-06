import React from 'react';

const Cotizacion = ({resultado}) => {
    if(Object.keys(resultado).lenght === 0) return null;

    console.log(resultado);

    return ( 
        <div>
            <p>El precio es: <span>{resultado.PRICE}</span></p>
            <p>Precio más alto del día: <span>{resultado.HIGHDAY}</span></p>
            <p>Precio más bajo del día: <span>{resultado.LOWDAY}</span></p>
            <p>Varación últimas 24 hs<span>{resultado.CHANGEPCT24HOUR}</span></p>
            <p>Última Actualización<span>{resultado.LASTUPDATE}</span></p>
        </div>
     );
    
}

export default Cotizacion;