// El Fragment lo agrego cuando creo la constante Seleccionar, ya que ahí lo voy a utilizar
// El useState lo necesito para el custom hook
import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const Select = styled.select`
    width: 100%;
    display:block;
    padding: 1rem;
    -webkit-appearance:none;
    border-radius: 10px;
    border:none;
    font-size: 1.2rem;
`;

// Este archivo js es copia de useMoneda.js. La diferencia es que las opciones las vamos a traer desde una API
const useCriptomoneda = (label, stateInicial, opciones) => {

    // console.log(opciones);
    // State para el custom hook
    const [state, actualizarState] = useState('');

        // Este código es la función que se mostrará en pantalla
        const SelectCripto = () => (
            <Fragment>
                {/* Con este Fragment lo que quiero hacer es retornar el select y el label */}
                <Label>{label}</Label>
                <Select
                    onChange={ e => actualizarState(e.target.value)}
                    value={state}
                >
                    <option value="">-- Seleccione su moneda --</option>
                    {opciones.map(opcion => (
                        <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>{opcion.CoinInfo.FullName}</option>
                    ))}
                </Select>
            </Fragment>
        );

        // Returnar state, interfaz y función que modifica el state
        return [state, SelectCripto, actualizarState ];
}

export default useCriptomoneda;

