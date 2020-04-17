import React, { useState }from 'react';
import styled from '@emotion/styled';
import { getDifferenceYear, calculateBrand, getPlan } from '../helper';

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

    const Error = styled.div`
    background-color:red;
    color:white;
    padding:1rem;
    margin-bottom:2rem;
    width:100%;
    text-align:center;
    `;

const Formulario = ({saveSummary}) => {

    //State del formulario
    const [ data, saveData ]= useState({
        brand:'',
        year:'',
        plan:''
    })

    //State para manejar errores
    const [error, saveError]= useState(false)

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
    //Funcion para cotizar 
    const quoteInsurance = e =>{
        e.preventDefault();

        //validando que los campos no este vacios
        if(brand.trim() === "" || year.trim() === "" || plan.trim() === ""){
            saveError(true);
            return;
        }

        saveError(false);

        //Definiendo una base
        let result = 2000;

        //Obtener la diferencia de años
        const difference = getDifferenceYear(year);

        //Por cada año se resta el 3% de la base
        result -= ((difference * 3) * result) /100
        
        //Aumento segun la marca
        result = calculateBrand(brand) * result;
        
        //incremento segun el plan
        const increasePlan = getPlan(plan);
        result = parseFloat( increasePlan * result).toFixed(2);

        
        saveSummary({
            quotation:result,
            data
        })
    }

    
    return ( 
        <form
        onSubmit={quoteInsurance}
        >
            {error 
            ?<Error>Todos los campos son obligatorios</Error>
            :null }
            
            <Block>
                <Label>Marca</Label>
                <Select
                    name="brand"
                    value={brand}
                    onChange={getDataForm}
                >
                    <option value="">-- Seleccione --</option>
                        <option value="americano">Americano</option>
                        <option value="eropeo">Europeo</option>
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
                value="basico"
                checked={ plan==="basico" }
                onChange={getDataForm}
                />Basico 

                <InputRadio
                type="radio"
                name="plan"
                value="completo"
                checked={ plan==="completo" }
                onChange={getDataForm}
                />Completo
            </Block>

            <Button type="submit"> Cotizar </Button>
        </form>
     );
}
 
export default Formulario;