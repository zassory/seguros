import { CotizadorProvider } from './context/CotizadorProvider';
import { AppSeguro } from "./components";

export const App = () => {
  
  return (
    <CotizadorProvider
      value={{
        
      }}
    >
      <AppSeguro />
    </CotizadorProvider>
  )
}
