import React from 'react';
import styled from '@emotion/styled';
// Luego de crear el hook en useMoneda, lo importo acá
import useMoneda from '../hooks/useMoneda';

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;

    &:hover {
        background-color: #326ac0;
        cursor: pointer;
    }
`;

const Formulario = () => {

    const MONEDAS = [
        {codigo: 'ARS', nombre: 'Peso Argentino'},
        {codigo: 'USD', nombre: 'Dólar USA'},
        {codigo: 'MXN', nombre: 'Peso Mexicano'},
        {codigo: 'EUR', nombre: 'Euro'},
        {codigo: 'GBP', nombre: 'Libra Esterlina'},
        {codigo: 'COP', nombre: 'Peso Colombiano'}
        // Una vez creado nuestro arreglo de monedas, se lo podemos pasar a nuestro custom hook
    ]

    // Utilizar useMoneda
    // SelectMonedas equivale a select, el parámetro del state useMoneda. Lo puedo poner el nombre que yo necesite, no tiene que ser obligatoriamente igual
    // Es Array destructuring y estamos estipulando el orden en el que se retornan
    const [moneda, SelectMonedas, actualizarState] = useMoneda('Elige tu moneda', '', MONEDAS);

    return (

        <form>
            {/* Utilizo SelectMonedas como componente */}
            <SelectMonedas/>
            
            <Boton
                type="submit"
                value="Calcular"
            />
        </form>
    );
}

export default Formulario;