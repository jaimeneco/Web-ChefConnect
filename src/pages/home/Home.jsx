import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";

export const HomePage = () => {
    return (
        <>
            <Header />
            <main className="Main-home">
                <p>Hola qué onda</p>
            </main>

            <Footer />
        </>

    );
}