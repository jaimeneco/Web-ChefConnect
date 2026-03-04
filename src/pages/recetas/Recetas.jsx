import { useState } from "react";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import './Recetas.css'
import { NavLink } from "react-router-dom";

const RECETAS = [
    {
        id: 1,
        categoria: "Sabores del mundo",
        imagen: "/imgs/arroz-curry.jpg",
        titulo: "Arroz con Curry",
        info: "Todo un clásico de la comida india, receta sencilla pero deliciosa, ¡querrás comerlo a diario!"
    },
    {
        id: 2,
        categoria: "Carnes",
        imagen: "/imgs/gyozas-carne.jpg",
        titulo: "Gyozas de cerdo",
        info: "¡Aprenderás al fin cómo preparar este delicioso plato japonés, te enseñamos todos sus secretos..."
    },
    {
        id: 3,
        categoria: "Pescados",
        imagen: "/imgs/salmon.png",
        titulo: "Salmón con espinacas",
        info: "¡Por fin vas a disfrutar de comer pescado! Una receta sencilla con un sabor increíble..."
    },
    {
        id: 4,
        categoria: "Veggie",
        imagen: "/imgs/ensalada-meditbote.jpg",
        titulo: "Ensalada mediterránea",
        info: "¡Los clásicos siempre cumplen! Nuevos consejos para llevarla al siguiente nivel..."
    },
];

export const RecetasPage = () => {
    const [filtro, setFiltro] = useState("Todas");

    const recetasFiltradas = filtro === "Todas"
        ? RECETAS
        : RECETAS.filter(r => r.categoria === filtro);

    return (
        <>
            <Header onFilter={setFiltro} filtroActivo={filtro} />
            <main className="Main-recetas">
                <p className="Recetas-title">
                    {filtro === "Todas" ? "Descubre nuestras recetas :" : `${filtro} :`}
                </p>
                <div className="Card-group">
                    {recetasFiltradas.map((receta) => (
                        <NavLink to="/receta" className="Link-receta" key={receta.id}>
                            <div className="Card">
                                <h3 className="Card-category">{receta.categoria.toUpperCase()}</h3>
                                <img src={receta.imagen} alt={receta.titulo} className="Card-image" />
                                <h2 className="Card-title">{receta.titulo}</h2>
                                <p className="Card-info">{receta.info}</p>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
};