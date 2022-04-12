//1 Importara createContext
import { createContext } from 'react';

//2 crear la variable ==> CotizadorContext
const CotizadorContext = createContext();

//3 se crea la funcion  CotizadorProvider y se agrega Chlidren
const CotizadorProvider = ({ children }) => {
    return (
        //4 se colocan las etiquetas CotizadorContext.Provider y Chlidren
        <CotizadorContext.Provider value={{}}>
            {children}
        </CotizadorContext.Provider>
    )
}
//5 exporta funcion CotizadorProvider
export {
    CotizadorProvider
}
//6 exporta variable de createContext()
export default CotizadorContext


//7 se exporta import { CotizadorProvider } from './context/CotizadorProvider';

//8 se envuenve todos los componentes q debe de estar disponible el context 
{/* <CotizadorProvider>
        <AppSeguro />
      </CotizadorProvider> */}

