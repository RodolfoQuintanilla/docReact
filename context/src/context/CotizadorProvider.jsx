//1 Crear context
import { createContext } from "react";

//2 Crear Context
const CotizadorContext = createContext();

//3Crear Provider ==> es  donde sale la fuente de los datos
const CotizadorProvider = ({ children }) => {
    react(
        //Se utiliza .Provider
        <CotizadorProvider.Provider>
            {children}
        </CotizadorProvider.Provider>
    );
};

//4 Se exporta el provider
export {
    CotizadorProvider
}
//5 se exporta ==> CotizadorContext
export default CotizadorContext



//6 se exporta App.jsx
//import {CotizadorProvider} from './context/CotizadorProvider'


//7 se rodea la app para q esten los datos disponibles 
{/* 
<CotizadorProvider>
   <AppSeguro/>
   <uno/>
   <dos/>
   <....../>
</CotizadorProvider>
 */}