import React, {useState} from 'react';
import styled from '@emotion/styled';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';

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
    //State RESUMEN
    const [summary, saveSummary]= useState({
      quotation:0,
      data: {
        brand:'',
        year:'',
        plan:''
      }
    });

    //Destructuring
    const { quotation, data } = summary;

    return (
        <Container>
          <Header title="Cotizador de automoviles"/>

          <ContainerForm>
          <Formulario
          saveSummary = { saveSummary }
          />
          <Resumen
          data = { data }
          />

          <Resultado
          quotation = {quotation}
          />
          </ContainerForm>

        </Container>
        
    );
}

export default App;
