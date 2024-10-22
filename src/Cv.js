import React from 'react';

function Cv() {
    
    return (
        <div>
            <div id="cv">

                <div class="debut-cv">
                    <img src="/img/photo-cv.png" alt="Ma photo" width="200" height="300" class="profile-image"></img>
                    <div className="profile-cv">
                        <h1>Lucas Gelgon - 19 ans</h1>
                        <h2>Etudiant en 3ème année de BUT Informatique</h2>
                </div>

                </div>

                <div class="grille-cv">

                    <div class="experiences-pro">
                        <h2>Expériences professionnelles</h2>

                        <h3>Stage à U IRIS</h3>
                        <h4>Février 2024 - Mars 2024</h4>
                        <p>
                        Dans le cadre de mon année de BUT2, j’ai réalisé un stage chez U
                        IRIS au sein due la ligne Data. <br />
                        J’ai développé un outil d’automatisation du rafraîchissement
                        d’univers.
                        </p>

                        <h3>Employé polyvalent chez McDondald's</h3>
                        <h4>Juillet 2023</h4>
                        <p>
                        J'étais responsable de l'approvisionnement, de la cuisine, de
                        l'organisation et de la propreté au sein du restaurant.
                        </p>

                        <h3>Stage à Polytech Nantes</h3>
                        <h4>Février 2019</h4>
                        <p>
                        Au cours de mon année de troisième, j'ai effectué un stage à
                        l'école d'ingénieurs Polytech. <br /> Cela m'a permis de découvrir le
                        fonctionnement de l'école, le travail des enseignants et des
                        chercheurs en informatique.
                        </p>

                    </div>

                    <div class="profil"> 
                        <h2>Profil</h2>

                        Ville : Vannes/Nantes <br />
                        Téléphone : (+33) 06 48 72 87 82 <br />
                        Mail : gelgonlucas@gmail.com <br />
                        Linkedin : https://www.linkedin.com/in/lucas-gelgon-08b256257/ <br />
                        Permis B <br />
                    </div>

                    <div class="parcours-scolaire">
                        <h2>Parcours Scolaire</h2>

                        <h3>IUT de Vannes - VANNES</h3>
                        <h4>2022 - Aujourd'hui</h4>
                        <p>
                        Etudiant en BUT Informatique.
                        </p>

                        <h3>Faculty of Information Technology - BRNO</h3>
                        <h4>Septembre 2023 - Février 2024</h4>
                        <p>
                        Semestre à Brno, en République Tchèque.
                        </p>

                        <h3>Lycée la Colinière - NANTES</h3>
                        <h4>2019 - 2022</h4>
                        <p>
                        Diplômé du baccalauréat spécialités mathématiques et
                        informatique avec mention Bien.
                        </p>


                    </div>

                    <div class="competences-cv">
                        <h2>Compétences</h2>

                        <ul>
                            <li> <b>Développement :</b> Java, Python, Kotlin </li>
                            <li> <b>Développement Web :</b> Html, Css, JavaScript, React, Node, Vue</li>
                            <li> <b>Base de données : </b> SQL, MongoDB, Cypher, Excel, BigQuery</li>
                            <li> <b>Environnement et outils de travail :</b> Git, Docker, Google Cloud, Maven </li>
                            <li> <b>Intelligence Artificielle :</b> Prolog, Pytorch </li>
                        </ul>

                    </div>

                    <div class="centres-interets">
                        <h2>Projets et centres d'intérêts</h2>
                        
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                    </div>

                    <div class="langues">
                        <h2>Langues</h2>

                        <li>Anglais - B2</li>
                        <li>Allemand - A2</li>
                    </div>
                </div>
            </div>

            <div class="boutonDownload">
                <a href="/img/cv-lucas-gelgon.pdf" download="cv-lucas-gelgon.pdf">Téléchargez mon CV ici</a>
            </div>

        </div>
    );
}

export default Cv;