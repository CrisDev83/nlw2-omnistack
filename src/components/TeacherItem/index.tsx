import React from 'react';

import whatsIcon from '../../assets/imagens/icons/whatsapp.svg'

import './styles.css'


function TeacherItem(){
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars.githubusercontent.com/u/2254731?v=4" alt="Diego Fernandes" />
                        <div>
                            <strong>Diego Fernandes</strong>
                            <span>Química</span>
                        </div>
                    </header>
                    <p>
                        Entusiasta das melhores tecnologias de química avançada.
                        <br /> <br />
                        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já participaram de uma das minhas explosões.
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 80,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
                    </footer>
        </article>
    );
}

export default TeacherItem;