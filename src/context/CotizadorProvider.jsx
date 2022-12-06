import { useState , createContext } from "react";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {

    const [datos,setDatos] = useState({
        marca: '',
        year: '',
        plan: '',
    });
    const [error,setError] = useState('');

    const handleChangeDatos = e => {
         setDatos({
             ...datos,
             [e.target.name]: e.target.value
         });
    }

    const cotizarSeguro = () => {
        console.log('Cotizando');
    }
    

    return (
        <CotizadorContext.Provider
            value={{
                datos,
                handleChangeDatos,
                error,
                setError,
                cotizarSeguro
            }}
        >
            { children }
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}
export default CotizadorContext;