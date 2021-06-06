// useEffect para la API
import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
// Luego de crear el hook en useMoneda, lo importo acá
import Error from './Error';
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';
import axios from 'axios';

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

const Formulario = ({guardarMoneda, guardarCriptomoneda}) => {

    // state del listado de criptomonedas
    const [ listacripto, guardarCriptomonedas ] = useState([]);
    const [ error, guardarError ] = useState(false);

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
    const [moneda, SelectMonedas] = useMoneda('Elige tu moneda', '', MONEDAS);

    // Utilizar useCriptomoneda
    const [criptomoneda, SelectCripto] = useCriptomoneda('Elige tu Criptomoneda', '', listacripto);

    // Ejecutar llamada a la API
    useEffect(() => {
        const consultarAPI = async() => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

            // Con axios la sintaxis es más sencilla que con fetch
            const resultado = await axios.get(url);

            guardarCriptomonedas(resultado.data.Data);
        }
        consultarAPI();
    }, []); {/* Le pasamos dependencias vacías para que se ejecute una sola vez */}

    // Cuando el usuario hace submit
    const cotizarMoneda = e => {
        e.preventDefault();

        // Validar si ambos campos están llenos
        if(moneda === '' || criptomoneda === '') {
            guardarError(true);
            return;
        }

        // Pasar datos al componente principal
        guardarError(false);
        guardarMoneda(moneda);
        guardarCriptomoneda(criptomoneda);
    }

    return (

        <form
            onSubmit={cotizarMoneda}
        >
            {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}
            {/* Utilizo SelectMonedas como componente */}
            <SelectMonedas />
            
            <SelectCripto />

            <Boton
                type="submit"
                value="Calcular"
            />
        </form>
    );
}

export default Formulario;