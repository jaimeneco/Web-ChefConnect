import { NavLink } from "react-router-dom";
import { useState } from "react";
import './Header.css'
import DropDownMenu from "../dropDownMenu/DropDownMenu";

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="Header">
            <nav className="Header-nav">
                <NavLink to="/">
                    <img src="/imgs/logoWhite.png" alt="Logotipo" title='Ir a Home' className="Header-logoImage" loading='lazy' />
                </NavLink>

                {/* Hamburger — solo visible en móvil */}
                <button className="Header-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`Header-navList ${menuOpen ? 'open' : ''}`}>
                    <li>
                        <NavLink className="Header-navLink" to="/home" title='Ir a Home' onClick={() => setMenuOpen(false)}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/recetas" className="Header-navLink" onClick={() => setMenuOpen(false)}><DropDownMenu /></NavLink>
                    </li>
                    <li>
                        <NavLink className="Header-navLink" to="/comunidad" title='Ir a Comunidad' onClick={() => setMenuOpen(false)}>Comunidad</NavLink>
                    </li>
                    <li>
                        <NavLink className="Header-navLink" to='https://www.instagram.com/' title='Ir a Instagram' target="_blank">
                            <img src="/imgs/img-instagram.png" alt="Instagram" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="Header-navLink" to='https://www.youtube.com/' title='Ir a Youtube' target="_blank">
                            <img src="/imgs/img-youtube.png" alt="Youtube" />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}