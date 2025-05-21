import React from "react";
import "./DropdownMenu.css";

function DropdownMenu() {
    return (
        <nav className="Navbar">
            <ul className="Navbar-list">
                <li className="Navbar-item">
                    RECETAS
                    <ul className="Dropdown">
                        <li className="Dropdown-item">Sabores del mundo</li>
                        <li className="Dropdown-item">Carnes</li>
                        <li className="Dropdown-item">Pescados</li>
                        <li className="Dropdown-item">Veggie</li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}

export default DropdownMenu;
