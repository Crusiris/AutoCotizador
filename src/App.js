import React, {useState} from 'react';
import styled from '@emotion/styled';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

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

    //State spinner
    const [loading, setLoading] = useState(false);

    //Destructuring
    const { quotation, data } = summary;

    return (
        <Container>
          <Header title="Cotizador de automoviles"/>

          <ContainerForm>
          <Formulario
          saveSummary = { saveSummary }
          setLoading = { setLoading }
          />

          { loading ? <Spinner/> : null}

          
          <Resumen
          data = { data }
          />

          {!loading ? <Resultado quotation={quotation}/> : null}
          
          </ContainerForm>

        </Container>
        
    );
}

export default App;
