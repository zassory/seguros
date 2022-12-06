import { useContext } from "react";
import CotizadorContext from "../context/CotizadorProvider";

export const useCotizador = () => {
  
    return useContext(CotizadorContext);
}
