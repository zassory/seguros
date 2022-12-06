import { useCotizador } from "../hooks/useCotizador";

export const Error = () => {

  const { error } = useCotizador();

  return (
    <div className="border text-center border-red-400 bg-red-100 text-red-700">
        <p>{ error }</p>
    </div>
  )
}
