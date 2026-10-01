import React, { useEffect } from 'react';
import { pageTitle } from '../helper';
import Cta from '../components/Cta';
import PageHeading from '../components/PageHeading';
import Div from '../components/Div';
import SectionHeading from '../components/SectionHeading';
import Spacing from '../components/Spacing';
//import Team from '../components/Team';
import MultidisciplinaryTeamComponent from '../components/TeamCharts';

export default function TeamPage() {
  pageTitle('Notre équipe');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeading
        title="Notre équipe"
        bgSrc="images/team-hero-bg.webp"
        pageLinkText="Team"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Une diversité..."
          subtitle="Notre équipe"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <MultidisciplinaryTeamComponent />
        <Spacing lg="70" md="50" />
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="4 sous-équipes pour réaliser ce projet"
                subtitle="Nos sous-équipes"
              />
              <Spacing lg="90" md="45" />
            </Div>
          </Div>
        </Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-6 ">
              <img className='rounded-4 shadow' src="images/IT.webp" alt="IT Team"/>
            </Div>
            <Div className="col-lg-6">
              <h2>IT 💻</h2>
              <p className='mb-4 text-justify'>L'équipe IT est chargée du développement logiciel et du contrôle du rover. Leurs objectifs principaux sont : <br /> <br />
                <ul>
                    <li>Implémenter le système de contrôle du rover en utilisant ROS (Robot Operating System)</li>
                    <li>Développer l'interface utilisateur pour le contrôle à distance</li>
                    <li>Assurer la communication sans fil entre le rover et la station de contrôle</li>
                    <li>Intégrer et traiter les données des capteurs pour la navigation et la prise de décision</li>
                </ul>
              </p>
            </Div>
            <Spacing lg="90" md="45" />
            <Div className="col-lg-6 d-block d-lg-none d-xl-none">
              <img className='rounded-4 shadow' src="images/Mechanical.webp" alt="Mechanical Team" />
            </Div>
            <Div className="col-lg-6">
              <h2>Mécanique ⚙️</h2>
              <p className='mb-4 text-justify'>L'équipe d'ingénierie mécanique est responsable de la conception et de la fabrication des composants physiques du rover. Leurs objectifs principaux sont : <br /> <br />
                <ul>
                    <li>Concevoir la structure et le châssis du rover</li>
                    <li>Développer le système de mobilité, y compris la suspension et les roues</li>
                    <li>Assurer la stabilité et la manœuvrabilité du rover sur des terrains accidentés</li>
                    <li>Créer des simulations pour tester et optimiser la performance mécanique</li>
                </ul>
              </p>
            </Div>
            <Div className="col-lg-6 d-none d-lg-block d-xl-block">
              <img className='rounded-4 shadow' src="images/Mechanical.webp" alt="Mechanical Team" />
            </Div>
            <Spacing lg="90" md="45" />
            <Div className="col-lg-6">
              <img className='rounded-4 shadow' src="images/Electronical.webp" alt="Electronic Team" />
            </Div>
            <Div className="col-lg-6">
              <h2>Electronique ⚡</h2>
              <p className='mb-4 text-justify'>L'équipe d'ingénierie électrique se concentre sur les systèmes électriques essentiels au fonctionnement du rover. Leurs objectifs incluent : <br /> <br />
                <ul>
                    <li>Concevoir et mettre en œuvre le système d'alimentation du rover</li>
                    <li>Développer les circuits de contrôle pour les moteurs et les servomoteurs</li>
                    <li>Intégrer les capteurs et autres composants électroniques</li>
                    <li>Assurer une gestion efficace de l'énergie et prévenir la surchauffe</li>
                </ul>
              </p>
            </Div>
            <Spacing lg="90" md="45" />
            {/*<Div className="col-lg-6 d-block d-lg-none d-xl-none">
              <img className='rounded-4 shadow' src="images/Project Management.webp" alt="Project Management" />
            </Div>
            <Div className="col-lg-6">
              <h2>Project Management 🎗️</h2>
              <p className='mb-4 text-justify'>L'équipe d'ingénierie électrique se concentre sur les systèmes électriques essentiels au fonctionnement du rover. Leurs objectifs incluent : <br /> <br />
                <ul>
                    <li>Concevoir et mettre en œuvre le système d'alimentation du rover</li>
                    <li>Développer les circuits de contrôle pour les moteurs et les servomoteurs</li>
                    <li>Intégrer les capteurs et autres composants électroniques</li>
                    <li>Assurer une gestion efficace de l'énergie et prévenir la surchauffe</li>
                </ul>
              </p>
            </Div>*/}
            <Div className="col-lg-6 d-none d-lg-block d-xl-block">
              <img className='rounded-4 shadow' src="images/Project Management.webp" alt="Project Management" />
            </Div>
          </Div>
        </Div>
        <Spacing lg="90" md="45" />
        <Div className="container" id="sponsor">
        <Cta
          title="Vous pouvez soutenir<br /> notre projet en faisant un simple geste !"
          btnText="Soutenir le projet"
          btnLink="/donation"
          bgSrc="/images/cta_bg.png"
        />
      </Div>
      </Div>
    </>
  );
}
