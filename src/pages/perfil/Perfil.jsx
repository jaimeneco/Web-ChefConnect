import { useParams } from "react-router-dom";
import { useState } from "react";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { USUARIOS } from "../../data/usuarios.data";
import { RECETAS } from "../../data/recetas.data";
import { NavLink } from "react-router-dom";
import './Perfil.css'

export const PerfilPage = () => {
    const { slug } = useParams();
    const usuario = USUARIOS.find(u => u.slug === slug);
    const [solicitudEnviada, setSolicitudEnviada] = useState(false);

    const recetasDelUsuario = usuario
        ? RECETAS.filter(r => usuario.recientes.some(rec => rec.titulo === r.titulo))
        : [];

    if (!usuario) {
        return (
            <>
                <Header />
                <main className="Main-perfil Perfil-notFound">
                    <h1>Usuario no encontrado 😔</h1>
                    <p>Este perfil no existe o ha sido eliminado.</p>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <main className="Main-perfil">

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
                        {usuario.esamigo
                            ? <button className="Perfil-btn Perfil-btn--amigo">✓ Sois amigos</button>
                            : <button
                                className={`Perfil-btn ${solicitudEnviada ? 'Perfil-btn--enviada' : ''}`}
                                onClick={() => setSolicitudEnviada(true)}
                                disabled={solicitudEnviada}
                              >
                                {solicitudEnviada ? '✓ Solicitud enviada' : '+ Solicitar amistad'}
                              </button>
                        }
                    </div>
                </section>

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

                <section className="Perfil-recetas">
                    <h2 className="Perfil-sectionTitle">Recetas publicadas</h2>
                    <div className="Perfil-recetasGrid">
                        {recetasDelUsuario.length > 0
                            ? recetasDelUsuario.map((receta) => (
                                <NavLink to={`/receta/${receta.slug}`} key={receta.id} style={{ textDecoration: 'none' }}>
                                    <div className="Perfil-recetaCard">
                                        <img src={receta.imagen} alt={receta.titulo} className="Perfil-recetaImg" />
                                        <div className="Perfil-recetaInfo">
                                            <span className="Perfil-recetaCategoria">{receta.categoria}</span>
                                            <h3 className="Perfil-recetaTitulo">{receta.titulo}</h3>
                                        </div>
                                    </div>
                                </NavLink>
                            ))
                            : <p className="Perfil-sinRecetas">Este usuario aún no tiene recetas publicadas en la web.</p>
                        }
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
};