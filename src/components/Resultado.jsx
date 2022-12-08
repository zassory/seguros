import { useCotizador } from "../hooks/useCotizador";

export const Resultado = () => {

  const { resultado } = useCotizador();

  if(resultado === 0) return null;

  return (
    <div>{ resultado }</div>
  )
}
