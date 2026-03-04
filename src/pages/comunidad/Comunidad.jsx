import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import './Comunidad.css'

export const ComunidadPage = () => {
    return (
        <>
            <Header />
            <main className="Main-comunidad">
                <p className="Comunidad-title">Nuestra comunidad :</p>
                <section className="Profile-cardsContainer">
                    <div className="Profile-card">
                        <img src="/imgs/img-perfiles/img1.png" alt="Perfil 1" className="Profile-image" />
                        <h3>Lucía Gómez</h3>
                        <p>🍝 Estilo favorito: Cocina Italiana</p>
                        <p>🏅 Desafíos conseguidos: 12</p>
                        <p>🫂 Amigos </p>
                        <button className="Profile-button">Ver perfil</button>
                    </div>
                    <div className="Profile-card">
                        <img src="/imgs/img-perfiles/img0.png" alt="Perfil 2" className="Profile-image" />
                        <h3>Martín Pérez</h3>
                        <p>🌶️ Estilo favorito: Cocina Mexicana</p>
                        <p>🏅 Desafíos conseguidos: 9</p>
                        <button className="Profile-button">+ Solicitar amistad</button>
                    </div>
                    <div className="Profile-card">
                        <img src="/imgs/img-perfiles/img3.png" alt="Perfil 3" className="Profile-image" />
                        <h3>Sofía Hernández</h3>
                        <p>🥗 Estilo favorito: Veggie & saludable</p>
                        <p>🏅 Desafíos conseguidos: 15</p>
                        <button className="Profile-button">+ Solicitar amistad</button>
                    </div>
                    <div className="Profile-card">
                        <img src="/imgs/img-perfiles/img4.png" alt="Perfil 4" className="Profile-image" />
                        <h3>Diego López</h3>
                        <p>🍣 Estilo favorito: Cocina Asiática</p>
                        <p>🏅 Desafíos conseguidos: 7</p>
                        <p>🫂 Amigos</p>
                        <button className="Profile-button">Ver perfil</button>
                    </div>
                    <div className="Profile-card">
                        <img src="/imgs/img-perfiles/img5.png" alt="Perfil 5" className="Profile-image" />
                        <h3>Ana Ruiz</h3>
                        <p>🍰 Estilo favorito: Repostería</p>
                        <p>🏅 Desafíos conseguidos: 18</p>
                        <button className="Profile-button">+ Solicitar amistad</button>
                    </div>
                    <div className="Profile-card">
                        <img src="/imgs/img-perfiles/img5.png" alt="Perfil 1" className="Profile-image" />
                        <h3>Malena Jimenez</h3>
                        <p>🍝 Estilo favorito: Cocina Italiana</p>
                        <p>🏅 Desafíos conseguidos: 10</p>
                        <button className="Profile-button">+ Solicitar amistad</button>
                    </div>
                    <div className="Profile-card">
                        <img src="/imgs/img-perfiles/img6.png" alt="Perfil 1" className="Profile-image" />
                        <h3>María García</h3>
                        <p>🍝 Estilo favorito: Veggie</p>
                        <p>🏅 Desafíos conseguidos: 29</p>
                        <button className="Profile-button">+ Solicitar amistad</button>
                    </div>
                    <div className="Profile-card">
                        <img src="/imgs/img-perfiles/img7.png" alt="Perfil 1" className="Profile-image" />
                        <h3>Rémy Gallard</h3>
                        <p>🍝 Estilo favorito: Cocina Francesa</p>
                        <p>🏅 Desafíos conseguidos: 6</p>
                        <p>🫂 Amigos</p>
                        <button className="Profile-button">Ver perfil</button>
                    </div>
                    <div className="Profile-card">
                        <img src="/imgs/img-perfiles/img8.png" alt="Perfil 1" className="Profile-image" />
                        <h3>Loris Bitt</h3>
                        <p>🍝 Estilo favorito: Cocina Española</p>
                        <p>🏅 Desafíos conseguidos: 12</p>
                        <button className="Profile-button">Solicitar amistad</button>
                    </div>
                    <div className="Profile-card">
                        <img src="/imgs/img-perfiles/img9.png" alt="Perfil 1" className="Profile-image" />
                        <h3>Natalia Duero</h3>
                        <p>🍝 Estilo favorito: Dulces y repostería</p>
                        <p>🏅 Desafíos conseguidos: 12</p>
                        <button className="Profile-button">Solicitar amistad</button>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}