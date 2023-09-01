import Header from "./componentes/Header";
import "./App.css";
import "./sass/app.scss";
import Home from "./componentes/Home/Home";
import {Route, Routes} from "react-router-dom";
import Footer from "./componentes/Footer";
import Trabajos from "./componentes/Trabajos/Trabajos";
import SobreNosotros from "./componentes/SobreNosotros/SobreNosotros";
import Contacto from "./componentes/Contacto/Contacto";
import Diseños from "./componentes/Home/Diseños";
import Espacios from "./componentes/Home/Espacios";
import LimpiezaObra from "./componentes/Home/LimpiezaObra";
import Proyectos from "./componentes/Home/Proyectos";

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="trabajos" element={<Trabajos />} />
                <Route path="sobrenosotros" element={<SobreNosotros />} />
                <Route path="contacto" element={<Contacto />} />
                <Route path="diseños" element={<Diseños />} />
                <Route path="espacios" element={<Espacios />} />
                <Route path="limpiezaobra" element={<LimpiezaObra />} />
                <Route path="proyectos" element={<Proyectos />} />
            </Routes>
            <Footer />

            {/* <MenuMobile 
                  menuVisible={menuVisible}
                  setMenuVisible={setMenuVisible}
                /> */}
        </div>
    );
}

export default App;

{
    /* <MenuMobile
  menuVisible={menuVisible}
  setMenuVisible={setMenuVisible}
/>
<Header />
<Main 
  setMenuVisible={setMenuVisible}
/>
<LimpiezaObra />
<Espacios/>
<Diseños/>
<Proyectos />
<Footer /> */
}
