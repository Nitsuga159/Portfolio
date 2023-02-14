import { useRef, useState } from 'react';
import me from '../../images/me.png';
import './AboutMe.css';

export default function AboutMe({ scrollAboutMe }: { scrollAboutMe: boolean }) {

  return (
    <div id="about-me" className="about-me-container">
      <div className="description-container">
        <h3 className="description-title">¿Quién soy?</h3>
        <p className="description">
          Qué tal 👋 soy Agustín Romero, programador Full Stack.
        </p>
        <p className="description">
          Llevo aproximadamente 2 años desarrollando y poniendo a prueba mis conocimientos en la programación, empezando por el lenguaje C, con el cuál empecé aprendiendo los conceptos básicos de la programación. Posteriormente, seguí aprendiendo más sobre otros lenguajes como Java y JavaScript.
        </p>
        <p className="description">
          Decidí especializarme en JavaScript, esto debido a que quería enfocarme en el desarrollo tanto Backend como Frontend con este lenguaje. Y una vez que obtuve una base solida con HTML, CSS y JavaScript continué realizando proyectos Frontend para mejorar mis habilidades y así, más adelante, desempeñarme en el Framework React para crear diseño UX/UI, junto a una complementación tipada de JavaScript: Typescript.
        </p>
        <p className="description">
          Para el lado del Backend realicé proyectos con NodeJS junto al Framework Express, utilizando bases de datos relacionales como PostgreSQL o MySQL, realizando esta comunicación entre back-database con la ORM Sequelize.
        </p>
        <p className="description">
          Actualmente me encuentro buscando mi próxima oportunidad IT, en la cual pueda explotar estos conocimientos y a la vez adquirir otros nuevos. Ya que hoy en día también estoy explorando otras posibilidades además de las que tengo experiencia. Como por ejemplo el desarrollo con Angular, NestJS o Java 💻
        </p>
      </div>
      <div className="perfil-me-container">
        <img
          src={me}
          alt="me"
          className={
            `perfil-me ${scrollAboutMe
              ? "active-perfil-me"
              : ""
            }`} />
      </div>
    </div>
  );
}