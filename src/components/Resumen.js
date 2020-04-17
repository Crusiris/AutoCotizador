import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { capitalize } from '../helper';

const ContainerSummary = styled.div`
    padding:1rem;
    text-align:center;
    background-color:#00838F;
    color:#FFF;
    margin-top:1rem;
`;

const Resumen = ({data}) => {
    //destructuring
    const { brand, year, plan } = data;

    if(brand === '' || year === '' || plan === '')
    return null; 

    return ( 
        <ContainerSummary>
            <h3>Resumen de cotización</h3>
            <ul>
                <li>Marca: {capitalize(brand)}</li>
                <li>Plan: {capitalize(plan)}</li>
                <li>Año del vehiculo: {year}</li>
            </ul>
        </ContainerSummary>
        
     );
}

Resumen.propTypes={
    data: PropTypes.object.isRequired
}
export default Resumen;