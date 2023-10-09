import { Routes, Route } from "react-router-dom"
import InicioSesion from "./pages/inicioSesion";
import Dashboard from "./pages/Dashboard";


function App() {
    return (
      <>
        <Routes>
          <Route path="/login" element={<InicioSesion />} />
          <Route path="" element={<Dashboard/>}/>
        </Routes>
      </>
    );
}

export default App;
