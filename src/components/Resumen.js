import React, {Fragment} from 'react'

const Resumen = ({data}) => {
    //destructuring
    const { brand, year, plan } = data;

    if(brand === '' || year === '' || plan === '')
    return null; 

    return ( 
        <Fragment>
            <h3>Resumen de cotización</h3>
            <ul>
                <li>Marca: </li>
                <li>Plan: </li>
                <li>Año del vehiculo: </li>
            </ul>
        </Fragment>
        
     );
}
 
export default Resumen;