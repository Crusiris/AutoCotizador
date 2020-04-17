import React from 'react';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

//Componente de estilo con emotion
  const Msj = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top:2rem;
  padding:1rem;
  text-align:center;
  `;

  const ResultQuotation = styled.div`
  text-align:center;
  padding: .5rem;
  border: 1px solid #26C6DA;
  background-color:rgb(127, 224, 237);
  margin-top:1rem;
  position: relative;
  `;

  const QuotationTex = styled.p `
  color:#00838F;
  padding:1rem;
  text-transform:uppercase;
  font-weight:bold;
  margin:0;

  `;

const Resultado = ({quotation}) => {
    return ( 
        (quotation === 0) 
        ? <Msj>Elige marca, año y tipo de seguro</Msj>
        :(
            <ResultQuotation>
                <TransitionGroup component="p" className="result">
                    <CSSTransition classNames="result" key={quotation} timeout={{ enter:500, exit:500 }}>
                    <QuotationTex>El total a pagar es: ${quotation}</QuotationTex>
                    </CSSTransition>
                </TransitionGroup>
                 
           
            </ResultQuotation>
        )
    );
}
 
export default Resultado;