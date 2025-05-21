import { NavLink } from "react-router-dom";
import './Header.css'
import DropDownMenu from "../dropDownMenu/DropDownMenu";

export const Header = () => {
    return (
        <>
            <header className="Header">
                <nav className="Header-nav">
                    <div>
                        <NavLink to="/">
                            <img src="/imgs/img-logoB.png" alt="Logotipo" title='Ir a Work' className="Header-logoImage" loading='lazy' />
                        </NavLink>
                    </div>
                    <ul className="Header-navList">
                        <li className="Header-navLink">
                            <NavLink className="Header-navLink" to="/home" title='Ir a Home'>HOME</NavLink>
                        </li>
                        <li className="Header-navLink">
                            <NavLink to="/recetas" className="Header-navLink"><DropDownMenu /></NavLink>
                        </li>
                        <li className="Header-navLink">
                            <NavLink className="Header-navLink" to="/comunidad" title='Ir a Comunidad'>COMUNIDAD</NavLink>
                        </li>
                        {/* <li className="Header-navLink">
                            <NavLink className="Header-navLink" to="/desafios" title='Ir Desafios'>DESAFÍOS</NavLink>
                        </li> */}
                        <li className="Header-navLink">
                            <NavLink className="Header-navLink" to='https://www.instagram.com/' title='Ir a Instagram'><img src="/imgs/img-instagram.png" alt="Ir a Instagram" /></NavLink>
                        </li>
                        <li className="Header-navLink">
                            <NavLink className="Header-navLink" to='https://www.youtube.com/' title='Ir a Youtube'><img src="/imgs/img-youtube.png" alt="Ir a Instagram" /></NavLink>
                        </li>
                        
                    </ul>
                </nav>
            </header>
        </>
    );
}