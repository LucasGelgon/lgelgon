import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import './App.css';
import Cv from './Cv';
import Profil from './Profil';
import Projets from './Projets';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Container class="page-accueil">
        <Header />

        <main>
        <Routes>
          <Route path="/" element={
            <div>

              <Container class="contenu-accueil">
              <div className="profil">
                <img src="/img/photo-cv.png" alt="Ma photo" width="200" height="300" class="profile-image"></img>
                <div className="profile-text">
                  <h1>Lucas Gelgon</h1>
                  <h2>Etudiant en 3ème année de BUT Informatique</h2>
                </div>
              </div>

              <div className="description">
                <h2>Bienvenue sur mon site web !</h2>
                <p>
                  Bonjour, je suis Lucas Gelgon, un passionné d'informatique de 19 ans, actuellement en 3ème année de BUT Informatique. Mon objectif est de devenir un développeur polyvalent et innovant dans le monde du numérique.
                </p>
                <p>Sur ce site, vous découvrirez :</p>
                <ul>
                  <li><strong>Mon CV :</strong> Un aperçu détaillé de mon parcours académique, mes compétences techniques et mes expériences professionnelles.</li>
                  <li><strong>Mes projets :</strong> Une vitrine de mes réalisations, démontrant ma capacité à appliquer mes connaissances dans des projets concrets.</li>
                  <li><strong>Mes profils en ligne :</strong> Des liens vers mes comptes GitHub et LinkedIn, pour explorer mon code et mon réseau professionnel.</li>
                </ul>
                <p>
                  Je suis constamment à la recherche de nouveaux défis et d'opportunités pour enrichir mes compétences. N'hésitez pas à explorer mon site et à me contacter pour toute collaboration ou opportunité de stage !
                </p>
                <p>Merci pour votre visite et bonne exploration !</p>
              </div>
              </Container>

            </div>
          } />
          <Route path="/Profil" element={<Profil />}/>
          <Route path="/Cv" element={<Cv />}/>
          <Route path="/Projets" element={<Projets />}/>
          <Route path="/Contact" element={<Contact />}/>
        </Routes>
        </main>

        <Footer />
      </Container>
    </Router>
  );
}

export default App;