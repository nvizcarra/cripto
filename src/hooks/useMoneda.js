// El Fragment lo agrego cuando creo la constante Seleccionar, ya que ahí lo voy a utilizar
// El useState lo necesito para el custom hook
import React, { Fragment, useState } from 'react';

// Este código es el state y las operaciones que podamos realizar
const useMoneda = (label, stateInicial, opciones) => {
    // State para el custom hook
    const [state, actualizarState] = useState('');

        // Este código es la función que se mostrará en pantalla
        const Seleccionar = () => (
            <Fragment>
                {/* Con este Fragment lo que quiero hacer es retornar el select y el label */}
                <label>{label}</label>
                <select>
                    <option value="">-- Seleccione su moneda --</option>
                    {opciones.map(opcion => (
                        <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
                    ))}
                </select>
            </Fragment>
        );

        // Returnar state, interfaz y función que modifica el state
        return [state, Seleccionar, actualizarState ];
}

export default useMoneda;

