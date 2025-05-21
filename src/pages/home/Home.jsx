import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import './Home.css'
import { Link, NavLink } from "react-router-dom";

export const HomePage = () => {
    return (
        <>
            <Header />
            <main className="Main-home">
                <div className="Home-text">
                    <p className="Home-title">CHEF CONNECT</p>
                    <p className="Home-info">¿Estás preparado para unirte a la comunidad en línea de los amantes de la cocina? Descubre nuevas recetas, comparte con la comunidad tus avances, únete a nuevos desafíos semanales y explora todas nuestras actividades. En CHEF CONNECT queremos que disfrutes de la cocina, que te lo pases bien y que conozcas a personas que tienen tus mismas inquietudes.</p> 
                    <Link to="/recetas">
                    <button className="Home-btn">¡Empieza ya a cocinar!</button>
                    </Link>
                </div>
            </main>

            <Footer />
        </>

    );
}