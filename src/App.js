import React from 'react';
import styled from '@emotion/styled'
import Header from './components/Header'
import Formulario from './components/Formulario'

  //Estilos css, usando la libreria EMOTION STYLED
  const Container = styled.div`
  max-width:600px;
  margin: 0 auto;
  `;

  const ContainerForm = styled.div`
  background-color:#FFF;
  padding:3rem;
  `;


function App() {
    return (
        <Container>
          <Header title="Cotizador de automoviles"/>

          <ContainerForm>
          <Formulario/>
          </ContainerForm>

        </Container>
        
    );
}

export default App;
