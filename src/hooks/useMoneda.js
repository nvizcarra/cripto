// El Fragment lo agrego cuando creo la constante Seleccionar, ya que ahí lo voy a utilizar
// El useState lo necesito para el custom hook
import React, { Fragment, useState } from 'react';

// Este código es el state y las operaciones que podamos realizar
const useMoneda = () => {
// State para el custom hook
const [state, actualizarState] = useState('');

    // Este código es la función que se mostrará en pantalla
    const Seleccionar = () => (
        <Fragment>
            {/* Con este Fragment lo que quiero hacer es retornar el select y el label */}
            <label>Moneda</label>
            <select>
                <option  value="MXN">Peso Mexicano</option>
            </select>
        </Fragment>
    );

    // Returnar state, interfaz y función que modifica el state
    return [state, Seleccionar, actualizarState ];
}

export default useMoneda;

