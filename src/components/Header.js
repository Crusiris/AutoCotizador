import React from 'react'
import styled from '@emotion/styled'

  //Estilos css, usando la libreria EMOTION STYLED
    const ContainerHeader = styled.header `
    background-color:#26C6DA;
    padding:10px;
    font-weight:bold;
    color:#FFFFFF;
    margin-top:1em;
    `;

    const TextoHeader = styled.h1`
    font-size:2rem;
    margin:0;
    font-family: 'Slabo 27px', serif;
    text-align:center;
    `;

const Header = ({title}) => {

    return(
        <ContainerHeader>
            <TextoHeader>{title}</TextoHeader>
        </ContainerHeader>
    )
        
}
   
 
export default Header;