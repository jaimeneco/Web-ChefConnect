import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import './Perfil.css'

const usuario = {
    nombre: "Lucía Gómez",
    alias: "@lucia.cocina",
    avatar: "/imgs/img-perfiles/img1.png",
    ubicacion: "Madrid, España",
    miembro: "Marzo 2023",
    bio: "Apasionada de la cocina italiana y mediterránea. Me encanta experimentar con especias y compartir mis descubrimientos con la comunidad. 🍝",
    estiloFavorito: "Cocina Italiana",
    desafiosConseguidos: 12,
    recetasPublicadas: 8,
    amigos: 34,
    insignias: [
        { emoji: "🏆", label: "Top Chef" },
        { emoji: "🔥", label: "Racha 7 días" },
        { emoji: "🌍", label: "Sabores del mundo" },
        { emoji: "⭐", label: "Receta destacada" },
    ],
    recientes: [
        { titulo: "Pasta alla Norma", categoria: "Sabores del mundo", imagen: "/imgs/arroz-curry.jpg" },
        { titulo: "Gyozas de cerdo", categoria: "Carnes", imagen: "/imgs/gyozas-carne.jpg" },
        { titulo: "Salmón con espinacas", categoria: "Pescados", imagen: "/imgs/salmon.png" },
    ],
    actividad: [
        { texto: "Publicó una nueva receta: Pasta alla Norma", tiempo: "Hace 2 días" },
        { texto: "Completó el desafío semanal: Cocina sin gluten", tiempo: "Hace 5 días" },
        { texto: "Se hizo amiga de Rémy Gallard", tiempo: "Hace 1 semana" },
        { texto: "Consiguió la insignia ⭐ Receta destacada", tiempo: "Hace 2 semanas" },
    ]
};

export const PerfilPage = () => {
    return (
        <>
            <Header />
            <main className="Main-perfil">

                {/* HERO DEL PERFIL */}
                <section className="Perfil-hero">
                    <div className="Perfil-avatarWrapper">
                        <img src={usuario.avatar} alt={usuario.nombre} className="Perfil-avatar" />
                    </div>
                    <div className="Perfil-heroInfo">
                        <h1 className="Perfil-nombre">{usuario.nombre}</h1>
                        <p className="Perfil-alias">{usuario.alias}</p>
                        <p className="Perfil-bio">{usuario.bio}</p>
                        <div className="Perfil-meta">
                            <span>📍 {usuario.ubicacion}</span>
                            <span>📅 Miembro desde {usuario.miembro}</span>
                            <span>🍽️ {usuario.estiloFavorito}</span>
                        </div>
                        <button className="Perfil-btn">+ Solicitar amistad</button>
                    </div>
                </section>

                {/* ESTADÍSTICAS */}
                <section className="Perfil-stats">
                    <div className="Perfil-stat">
                        <span className="Perfil-statNumber">{usuario.desafiosConseguidos}</span>
                        <span className="Perfil-statLabel">Desafíos</span>
                    </div>
                    <div className="Perfil-stat">
                        <span className="Perfil-statNumber">{usuario.recetasPublicadas}</span>
                        <span className="Perfil-statLabel">Recetas</span>
                    </div>
                    <div className="Perfil-stat">
                        <span className="Perfil-statNumber">{usuario.amigos}</span>
                        <span className="Perfil-statLabel">Amigos</span>
                    </div>
                </section>

                <div className="Perfil-grid">

                    {/* INSIGNIAS */}
                    <section className="Perfil-section">
                        <h2 className="Perfil-sectionTitle">Insignias conseguidas</h2>
                        <div className="Perfil-insignias">
                            {usuario.insignias.map((insignia, i) => (
                                <div key={i} className="Perfil-insignia">
                                    <span className="Perfil-insigniaEmoji">{insignia.emoji}</span>
                                    <span className="Perfil-insigniaLabel">{insignia.label}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ACTIVIDAD RECIENTE */}
                    <section className="Perfil-section">
                        <h2 className="Perfil-sectionTitle">Actividad reciente</h2>
                        <ul className="Perfil-actividad">
                            {usuario.actividad.map((item, i) => (
                                <li key={i} className="Perfil-actividadItem">
                                    <span className="Perfil-actividadDot" />
                                    <div>
                                        <p className="Perfil-actividadTexto">{item.texto}</p>
                                        <p className="Perfil-actividadTiempo">{item.tiempo}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>

                </div>

                {/* RECETAS PUBLICADAS */}
                <section className="Perfil-recetas">
                    <h2 className="Perfil-sectionTitle">Recetas publicadas</h2>
                    <div className="Perfil-recetasGrid">
                        {usuario.recientes.map((receta, i) => (
                            <div key={i} className="Perfil-recetaCard">
                                <img src={receta.imagen} alt={receta.titulo} className="Perfil-recetaImg" />
                                <div className="Perfil-recetaInfo">
                                    <span className="Perfil-recetaCategoria">{receta.categoria}</span>
                                    <h3 className="Perfil-recetaTitulo">{receta.titulo}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
};