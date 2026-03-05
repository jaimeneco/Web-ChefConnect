import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { NavLink } from "react-router-dom";
import { USUARIOS } from "../../data/usuarios.data";
import './Comunidad.css'

export const ComunidadPage = () => {
    return (
        <>
            <Header />
            <main className="Main-comunidad">
                <p className="Comunidad-title">Nuestra comunidad :</p>
                <section className="Profile-cardsContainer">
                    {USUARIOS.map((usuario) => (
                        <div className="Profile-card" key={usuario.id}>
                            <img src={usuario.avatar} alt={usuario.nombre} className="Profile-image" />
                            <h3>{usuario.nombre}</h3>
                            <p>🍽️ {usuario.estiloFavorito}</p>
                            <p>🏅 Desafíos conseguidos: {usuario.desafiosConseguidos}</p>
                            <div className="Profile-buttons">
                                <NavLink to={`/perfil/${usuario.slug}`}>
                                    <button className="Profile-button">Ver perfil</button>
                                </NavLink>
                                {usuario.esamigo
                                    ? <button className="Profile-button Profile-button--amigo">🫂 Amigos</button>
                                    : <button className="Profile-button Profile-button--solicitar">+ Solicitar amistad</button>
                                }
                            </div>
                        </div>
                    ))}
                </section>
            </main>
            <Footer />
        </>
    );
}