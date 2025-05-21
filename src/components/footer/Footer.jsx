import { NavLink } from "react-router-dom";
import './Footer.css'

export const Footer = () => {
    return ( 
        <>
        <footer className="Footer">
                <div className="Footer-content">
                    <NavLink to="/">
                        <img src="/imgs/img-logoB.png" alt="Logotipo" title='Ir a Home' className="Footer-logoImage" loading='lazy' />
                    </NavLink>
                    <p className='Footer-text'>© {new Date().getFullYear()} - CHEF CONNECT - Todos los derechos reservados</p>
                </div>
            </footer>
        </>
    );
}