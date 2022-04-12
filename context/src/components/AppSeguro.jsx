import React, { useContext } from 'react';
import  CotizadorContext  from '../context/CotizadorProvider';

const AppSeguro = () => {
    const {hola} = useContext(CotizadorContext)
    console.log(hola);

    return (
        <>
         hi
        </>
    );
};

export default AppSeguro;