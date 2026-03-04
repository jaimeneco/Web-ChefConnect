import React, { useState } from "react";
import "./DropDownMenu.css";

function DropDownMenu({ onFilter }) {
    const [open, setOpen] = useState(false);

    const categorias = ["Todas", "Sabores del mundo", "Carnes", "Pescados", "Veggie"];

    const handleSelect = (categoria) => {
        onFilter(categoria);
        setOpen(false);
    };

    return (
        <nav className="Navbar" onClick={(e) => e.preventDefault()}>
            <ul className="Navbar-list">
                <li className="Navbar-item" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
                    <span className="Navbar-label">
                        RECETAS
                        <svg className={`Navbar-arrow ${open ? 'open' : ''}`} width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                    {open && (
                        <ul className="Dropdown">
                            {categorias.map((cat) => (
                                <li key={cat} className="Dropdown-item" onClick={() => handleSelect(cat)}>
                                    {cat}
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    );
}

export default DropDownMenu;
