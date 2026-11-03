import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registro from "./pages/Registro";
import Dashboard from "./pages/Dashboard";
import RutaProtegida from "./components/RutaProtegida";
import RegistrarObra from "./pages/RegistrarObras";
import DetalleObra from "./pages/DetalleObra";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/registrar-obra"
                    element={
                         <RutaProtegida>
                             <RegistrarObra />
                        </RutaProtegida>
                    }
                />

                <Route
                    path="/"
                    element={<Registro />}
                />

                <Route
                    path="/dashboard"
                    element={
                        <RutaProtegida>
                            <Dashboard />
                        </RutaProtegida>
                    }
                />
                <Route
                    path="/obra/:id"
                    element={
                        <RutaProtegida>
                            <DetalleObra />
                         </RutaProtegida>
  }
/>

            </Routes>
        </BrowserRouter>
    );
}

export default App;