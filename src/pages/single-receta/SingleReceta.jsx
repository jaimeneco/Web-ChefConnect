import { useParams } from "react-router-dom";
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';
import { RECETAS } from "../../data/recetas.data";
import './SingleReceta.css'

export const RecetaPage = () => {
    const { slug } = useParams();
    const receta = RECETAS.find(r => r.slug === slug);

    // Si no encuentra la receta
    if (!receta) {
        return (
            <>
                <Header />
                <main className="Receta-info Receta-notFound">
                    <h1>Receta no encontrada 😔</h1>
                    <p>La receta que buscas no existe o ha sido eliminada.</p>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <main className="Receta-info">
                <h1 className="Receta-title">{receta.titulo}</h1>

                <div className="Receta-images">
                    {receta.images.map((img, index) => (
                        <img key={index} src={img} alt={`${receta.titulo} ${index + 1}`} />
                    ))}
                </div>

                <p className="Receta-description">{receta.description}</p>

                <div className="Receta-details">
                    <div className="Receta-ingredients">
                        <h2>Ingredientes</h2>
                        <ul>
                            {receta.ingredients.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="Receta-dificultad">
                        <h2>Dificultad del plato</h2>
                        <p>{receta.dificultad}</p>
                    </div>

                    <div className="Receta-time">
                        <h2>Tiempo de preparación</h2>
                        <p>{receta.time}</p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};