import React from 'react';

function Profil () {

    return (
        
        <div>

            <div>
            <h1>A propos de moi</h1>
            <img src="/img/photo-cv.png" alt="Ma photo" width="200" height="300" class="profile-image"></img>
                <div className="profile-cv">
                    <p><b>Age :</b> 19 ans</p>
                    <p><b>Villes :</b> Nantes / Vannes</p>
                    <p><b>Etudes :</b> BUT Informatique</p>
                    
            </div>

            <div class="competencesInfo">
                <h2>Mes compétences Informatiques</h2>
                <div class="grille-competences">
                    <div class="competence">
                        <div class="jauge">
                            <h3>Compétence 1</h3>
                            <div class="valeur-jauge" style="width : 80%" ></div>
                        </div>
                    </div>
                    <div class="competence">
                        <div class="jauge">
                            <h3>Compétence 2</h3>
                            <div class="valeur-jauge" style="width : 80%" ></div>
                        </div>
                    </div>
                    <div class="competence">
                        <div class="jauge">
                            <h3>Compétence 3</h3>
                            <div class="valeur-jauge" style="width : 80%" ></div>
                        </div>
                    </div>
                    <div class="competence">
                        <div class="jauge">
                            <h3>Compétence 4</h3>
                            <div class="valeur-jauge" style="width : 80%" ></div>
                        </div>
                    </div>
                    <div class="competence">
                        <div class="jauge">
                            <h3>Compétence 5</h3>
                            <div class="valeur-jauge" style="width : 80%" ></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="competencesNonInfo">
                <h2>Mes compétences Non-Informatiques</h2>
                <div class="grille">
                    <div class="competence">
                        <div class="jauge">
                            <h3>Compétence 1</h3>
                            <div class="valeur-jauge" style="width : 80%" ></div>
                        </div>
                    </div>
                    <div class="competence">
                        <div class="jauge">
                            <h3>Compétence 2</h3>
                            <div class="valeur-jauge" style="width : 80%" ></div>
                        </div>
                    </div>
                    <div class="competence">
                        <div class="jauge">
                            <h3>Compétence 3</h3>
                            <div class="valeur-jauge" style="width : 80%" ></div>
                        </div>
                    </div>
                    <div class="competence">
                        <div class="jauge">
                            <h3>Compétence 4</h3>
                            <div class="valeur-jauge" style="width : 80%" ></div>
                        </div>
                    </div>
                    <div class="competence">
                        <div class="jauge">
                            <h3>Compétence 5</h3>
                            <div class="valeur-jauge" style="width : 80%" ></div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

    </div>
    )
}

export default Profil;