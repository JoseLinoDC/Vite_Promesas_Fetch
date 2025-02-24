import React from 'react';
import {useState} from 'react';

export const Contador = () => { 
    const [valor, setValor] = useState(0);
    const acumular = (numero)=>{
        setValor(valor + numero);
    };

    let valorACtualContador = 10;

    return ( 
        <div> 
            <h1>Aprender useState =)</h1>
            <h3>Contador test {valorACtualContador}</h3>
            <h2>
                Contador: <small>{valor}</small></h2> 
                <button onClick={()=>acumular(1)}>Sumar (+1)</button>
                &nbsp;
                <button onClick={()=>acumular(-1)}>Resta (-1)</button>
        </div> 
    ) 
};

export default Contador;