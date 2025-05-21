import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';
import './SingleReceta.css'
import { CompoReceta } from "../../components/receta/CompoReceta";


export const RecetaPage = () => {
    return (
        <>
        <Header />
        <CompoReceta
            title="Arroz al curry"
            images={["/imgs/arroz-curry.jpg", "/imgs/arroz-curry2.png", "/imgs/arroz-curry3.png"]}
            description="El arroz al curry es una receta clásica de la cocina asiática que ha conquistado paladares en todo el mundo gracias a su combinación única de aromas, texturas y sabores intensos. Este plato, de origen indio pero con múltiples versiones en países como Tailandia, Japón o Sri Lanka, se caracteriza por su base de arroz cocido acompañado de una mezcla de especias donde el protagonista es el curry. 
            El curry, una mezcla de especias como cúrcuma, comino, cilantro, jengibre y pimienta, aporta un sabor profundo, ligeramente picante y muy fragante que transforma un arroz sencillo en una experiencia culinaria rica y reconfortante. Dependiendo de la región y los ingredientes disponibles, el arroz al curry puede incluir también verduras salteadas, trozos de pollo, mariscos o tofu, lo que lo convierte en un plato muy versátil y adaptable a todo tipo de dietas.
            En esta versión sencilla y deliciosa, te enseñamos cómo preparar un arroz al curry básico, ideal como plato principal o como acompañamiento. Perfecto para una comida rápida entre semana o para sorprender a tus invitados con un toque exótico y lleno de color."
            ingredients={[
                "1 taza de arroz",
                "2 tazas de agua",
                "1 cucharada de curry en polvo",
                "1 diente de ajo",
                "1/2 cebolla",
                "Sal y pimienta al gusto",
                "Aceite de oliva"
            ]}
            dificultad= "Principiante"
            time="15 minutos de preparación + 20 minutos de cocción"
        />
        <Footer />
        </>
    );
};
