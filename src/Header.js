import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav id="menu">
                <Link to="/" className="logo">
                    <img src="/img/logo.png" alt="logo" />
                </Link>
                <ul className="navigation">
                    <li className="Accueil"><Link to="/">Accueil</Link></li>
                    <li className="Profil"><Link to="/Profil">Profil</Link></li>
                    <li className="Cv"><Link to="/Cv">CV</Link></li>
                    <li className="Projets"><Link to="/Projets">Projets</Link></li>
                    <li className="Contact"><Link to="/Contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;