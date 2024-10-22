import React from 'react';
import {Link} from 'react-router-dom';

function Projets() {

    return (

        <div className="portfolio">

            <h1>Voici mon portfolio !</h1> <br />

            <Link to="/PageCluedo" className="lien-cluedo">
                <img src="/img/logo-cluedo.png" alt="Logo Cluedo" />
                <h2>Cluedo</h2>
            </Link>

            <Link to="/PagePiqueNique" className="lien-piquenique">
                <img src="/img/logo-piquenique.png" alt="Logo Pique-Nique" />
                <h2>Pique-Nique</h2>
            </Link>

            <Link to="/PageTaskflow" className="lien-taskflow">
                <img src="/img/logo-taskflow.png" alt="Logo TaskFlow" />
                <h2>TaskFlow</h2>
            </Link>

        </div>

    )
}

export default Projets;