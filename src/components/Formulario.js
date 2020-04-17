import React, { useState }from 'react'
import styled from '@emotion/styled'

    //Estilos css, usando la libreria EMOTION STYLED.
    const Block = styled.div`
    display:flex;
    margin-bottom:1rem;
    align-items:center;
    `;
    //label
    const Label = styled.label`
    flex: 0 0 100px;
    `;
    //select
    const Select = styled.select`
    display:block;
    width:100%;
    padding:1rem;
    border:1px solid #e1e1e1;
    -webkit-appearance:none;
    `;
    //input radio
    const InputRadio = styled.input`
    margin:0 1rem;
    `;
    //boton
    const Button = styled.button`
    background-color:#00838F;
    font-size:16px;
    width:100%;
    padding:1rem;
    color: #000;
    text-transform:uppercase;
    font-weight:bold;
    border:none;
    transition:background-color .3s ease;
    margin-top:2rem;

    &:hover{
        background-color:#26C6DA;
        cursor:pointer;
    }
    `

const Formulario = () => {

    //State del formulario
    const [ data, saveData ]= useState({
        brand:'',
        year:'',
        plan:''
    })
    //Extrayendo los valores del state con destructuring
    const { brand, year, plan }= data;

    //leyendo los datos del formulario y agregarlos al state
    const getDataForm = e =>{
        saveData({
            //Se hace una copia de lo que esta en el state[DATA] y se obtenienen los nuevos datos
            ...data,
            [e.target.name]:e.target.value
        })
    }

    
    return ( 
        <form
        
        >
            <Block>
                <Label>Marca</Label>
                <Select
                    name="brand"
                    value={brand}
                    onChange={getDataForm}
                >
                    <option value="">-- Seleccione --</option>
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asiatico</option>
                </Select>     
            </Block>
            <Block>
                <Label>Año</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={getDataForm}
                >
                    <option value="">-- Seleccione --</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                </Select>     
            </Block>
            <Block>
                <Label>Plan</Label>
                <InputRadio
                type="radio"
                name="plan"
                value="basic"
                checked={ plan==="basic" }
                onChange={getDataForm}
                />Basico 

                <InputRadio
                type="radio"
                name="plan"
                value="full"
                checked={ plan==="full" }
                onChange={getDataForm}
                />Completo
            </Block>

            <Button type="button"> Cotizar </Button>
        </form>
     );
}
 
export default Formulario;