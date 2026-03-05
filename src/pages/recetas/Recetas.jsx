import { useState, useEffect } from "react";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { NavLink, useSearchParams } from "react-router-dom";
import { RECETAS } from "../../data/recetas.data";
import './Recetas.css'

export const RecetasPage = () => {
    const [searchParams] = useSearchParams();
    const [filtro, setFiltro] = useState("Todas");

    useEffect(() => {
        const categoriaURL = searchParams.get("categoria");
        setFiltro(categoriaURL || "Todas");
    }, [searchParams]);

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
                        <NavLink to={`/receta/${receta.slug}`} className="Link-receta" key={receta.id}>
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