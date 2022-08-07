import React from 'react';

import logoImg from '../../assets/imagens/logo.svg';
import landingImg from '../../assets/imagens/landing.svg';
import studyIcon from '../../assets/imagens/icons/study.svg';
import giveClassesIcon from '../../assets/imagens/icons/give-classes.svg';
import purpleHeart from '../../assets/imagens/icons/purple-heart.svg';

import './styles.css';

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                   <img src={logoImg} alt="Logo Proffy" /> 
                   <h2>sua plataforma de estudos online.</h2>
                </div>
                <img 
                   src={landingImg} 
                   alt="Imagem principal da landing page" 
                   className="hero-image" 
                />
                <div className="buttons-container">
                    <a href="/" className="study">
                        <img src={studyIcon} alt="Estudar" />Estudar
                    </a>
                    <a href="/" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar Aulas" />Dar Aulas
                    </a>
                </div>
                
                <span className="total-connections">
                    Total de 200 conexões já realizadas <img src={purpleHeart} alt="Coração roxo"></img>
                </span>
            </div>
        </div>
    )
}

export default Landing;

