import React, {useState} from "react";
import Hero from "../Hero";
import Diseños from "./Diseños";
import Espacios from "./Espacios";
import LimpiezaObra from "./LimpiezaObra";
import Proyectos from "./Proyectos";

const Home = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <div>
            <Hero setMenuVisible={setMenuVisible} menuVisible={menuVisible} />
            <LimpiezaObra />
            <Diseños />
            <Proyectos />
            <Espacios />
        </div>
    );
};

export default Home;
