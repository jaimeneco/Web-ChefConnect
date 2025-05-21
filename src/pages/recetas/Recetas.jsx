import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import './Recetas.css'
import { NavLink } from "react-router-dom";

export const RecetasPage = () => {
    return (
        <>
            <Header />
            <main className="Main-recetas">
                <p className="Recetas-title">Descubre nuestras recetas :</p>
                <div className="Card-group">
                    <NavLink to="/receta" className="Link-receta">
                        <div className="Card">
                            <h3 className="Card-category">SABORES DEL MUNDO</h3>
                            <img src="/imgs/arroz-curry.jpg" alt="Postre" className="Card-image" />
                            <h2 className="Card-title">Arroz con Curry</h2>
                            <p className="Card-info">Todo un clásico de la comida india, receta sencilla pero deliciosa, ¡querrás comerlo a
                                diario!</p>
                        </div>
                    </NavLink>
                    <NavLink to="/receta" className="Link-receta">
                        <div className="Card">
                            <h3 className="Card-category">CARNES</h3>
                            <img src="/imgs/gyozas-carne.jpg" alt="Entrante" className="Card-image" />
                            <h2 className="Card-title">Gyozas de cerdo</h2>
                            <p className="Card-info">¡Aprenderás al fin cómo preparar este delicioso plato japonés, te enseñamos todos sus
                                secretos...</p>
                        </div>
                    </NavLink>
                    <NavLink to="/receta" className="Link-receta">
                        <div className="Card">
                            <h3 className="Card-category">PESCADOS</h3>
                            <img src="/imgs/salmon.png" alt="Plato Principal" className="Card-image" />
                            <h2 className="Card-title">Salmón con espinacas</h2>
                            <p className="Card-info">¡Por fin vas a disfrutar de comer pescado! Una receta sencilla con un sabor increible...
                            </p>
                        </div>
                    </NavLink>
                    <NavLink to="/receta" className="Link-receta">
                        <div className="Card">
                            <h3 className="Card-category">VEGGIE</h3>
                            <img src="/imgs/ensalada-meditbote.jpg" alt="Bebida" className="Card-image" />
                            <h2 className="Card-title">Ensalada mediterránea</h2>
                            <p className="Card-info">¡Los clásicos siempre cumplen! Nuevos consejos para llevarla al siguiente nivel...</p>
                        </div>
                    </NavLink>
                </div>
            </main>
            <Footer />
        </>
    );
}