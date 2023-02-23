import { useCallback, useState } from 'react';
import './Projects.css';
import Container from './Container/Container';

const fullStack = [
  {
    title: 'Campy',
    imgURL: require('../../images/campy.jpg'),
    href: 'https://campy-frontend.vercel.app/',
    description: 'Proyecto final (grupal) donde se realizó un aplicación web full-stack. Campy es un lugar donde los amantes del turismo argentino, enfocado en el camping, puedan encontrar y realizar su próximo viaje. Tiene muchas funcionalidades incorporades como un sistema de usuarios, API REST, pasarela de pagos con mercado pago, un mapa para ubicar los campings, un blog para que la comunidad pueda contar sus experiencias, filtros combinados y un montón más por mencionar. Lista de tecnologías utilizadas: Frontend: HTML, CSS, React, Typescript, Redux, MaterialUI, API de mercado pago y Auth0. Backend: NodeJS, Typescript, Express, JWT, Nodemailer, Sequelize y MySQL.'
  },
  {
    title: 'Poke-Api',
    imgURL: require('../../images/pokeapi.jpg'),
    href: 'https://pokeapi-beryl.vercel.app/',
    description: 'Este es el Proyecto Individual que tuve que realizar en mi etapa final de un bootcamp. En mi caso se me asignó la temática de la serie animada Pokemon y, en base a una API, consumir información sobre los pokemons y mostrárselas al usuario. Adicionalmente a eso, el usuario puede crear sus propios pokemons y que persistan en el tiempo, siendo vistos por terceros, ya que éstos son almacenados en una base de datos. De esa forma se integran las 3 secciones. Este proyecto también contiene peticiones HTTP con los 4 métodos más famosos: GET, POST, PUT, DELETE. Por último, realicé un pequeño sistema de usuarios registrados a través de Google, con el objetivo de poder proteger aquellos pokemons creado por usuarios. Lista de tecnologías utilizadas: Frontend: HTML, CSS, JavaScript, React y Redux. Backend: NodeJS, Express, Sequelize y Postgresql.'
  },
];

const react = [
  {
    title: 'Catálogo Cinema',
    imgURL: require('../../images/catalogo.jpg'),
    href: 'https://nitsuga159.github.io/catalogos',
    description: 'Catálogo de películas con un buscador donde se podrá buscar todos los productos audiovisuales que coincidan con el mismo. Se muestran carteles con el poster de la misma y una ruta de detalle donde se especifican datos de ese producto cinematográfico. Además, se puede añadir a favoritos cualquier film y verse en el apartado de favoritos, en el cual se puede filtrar por título.'
  },
  {
    title: 'Cifrado César',
    imgURL: require('../../images/cifrado-cesar.jpg'),
    href: 'https://codepen.io/Nitsuga159/full/vYdRvLM',
    description: 'La temática de este proyecto consiste en explicar y poner en práctica el cifrado César. Utilizando la lógica de JavaScript para implementar este cifrado y los estados de React para captar información y renderizarla en el DOM.'
  },
  {
    title: 'Editor Markdown',
    imgURL: require('../../images/markdown.jpg'),
    href: 'https://codepen.io/Nitsuga159/full/qBxQpPZ',
    description: 'En el proyecto se encuentra un apartado de editor y otro de renderizado. El HTML es renderizado acorde a lo que se escribe en el apartado de editor con la sintaxis Markdown.'
  },
  {
    title: 'App de Clima',
    imgURL: require('../../images/clima.jpg'),
    href: 'https://weatherappar.netlify.app/',
    description: 'Una aplicación donde se puede buscar una ubicación en el mundo y descubrir sus temperaturas y clima a través una API. A su vez, esta genera una "card" para ver el lugar, las temperaturas y el clima.'
  },
  {
    title: 'Calculadora',
    imgURL: require('../../images/calculadora.jpg'),
    href: 'https://codepen.io/Nitsuga159/full/oNEEQqP',
    description: 'Una calculadora funcional con sus operaciones basicas: sumar, restar, multiplicar, dividir, elevar y con capacidad de borrado completo y otro por digito.'
  },
  {
    title: 'Cronómetro',
    imgURL: require('../../images/cronometro.jpg'),
    href: 'https://codepen.io/Nitsuga159/full/NWyJqQm',
    description: 'Realización de un cronómetro con un estado dinámico, con la capacidad de reducir o sumir tiempo, teniendo un flujo de acción y descanso. Cuando se llega al final de tiempo suena una alarma para indicarlo.'
  },
  {
    title: 'Reproductor de Sonido',
    imgURL: require('../../images/reproductor-sonido.jpg'),
    href: 'https://codepen.io/Nitsuga159/full/vYdvMKN',
    description: 'Reproductor se donido creado a través de varios componentes, con la capacidad de encenderlo o apagarlo, ajustar el volumen y elegir entre dos conjuntos de sonidos. También se puede reproducir cada sonido presionando las teclas asignadas o clickeando en el mismo.'
  },
];

const js = [
  {
    title: 'Snake Game',
    imgURL: require('../../images/snake.jpg'),
    href: 'https://nitsuga159.github.io/Snake-Game/',
    description: 'El famoso juego de la snake recreado con HTML, CSS y JS. Toda la lógica de colisiones, aparición de la comida, incrementación de la snake y desplazamiento de la misma son realizados a través de JavaScript.'
  },
  {
    title: 'Ta te ti',
    imgURL: require('../../images/tateti.jpg'),
    href: 'https://tateti-ar.netlify.app/',
    description: 'Juego del ta-te-ti o tres en raya con capacidad de capturar todos los casos de triunfo en ambos jugadores. Si ningún jugador gana entonces se considera que hubo un empate y se tendrá que reiniciar el tablero para volver a jugar.'
  },
  {
    title: 'Frases aleatorias',
    imgURL: require('../../images/frases.jpg'),
    href: 'https://codepen.io/Nitsuga159/full/dydgBvx',
    description: 'Frases aleatorias de series de televisión famosas, las cuales se generan a través de un botón. Se permite a su vez subir la frase a la red social "Twitter".'
  },
];

const java = [
  {
    title: "Ajedrez",
    imgURL: require('../../images/screenshoot-chess.jpg'),
    href: 'https://github.com/Nitsuga159/Chess-Java',
    description: 'Ajedrez creado 100% en Java utilizando la POO (Programación Orientada a Objetos) implementando conceptos como el encapsulamiento, polimorfismo y sobrecarga de métodos. A su vez, realizando una interfaz gráfica con el paquete swing de Java, ya sea para crear una ventana, botón, ícono, añadir eventos, etc.'
  }
]

const htmlAndCss = [
  {
    title: 'Documentación Técnica',
    imgURL: require('../../images/documentacion.jpg'),
    href: 'https://codepen.io/Nitsuga159/full/poargLJ',
    description: 'Guía sobre cómo realizar un comprobador de palíndromos con JS, guiado paso a paso y con un Navbar con cada sección correspondiente. Estructura realizada con HTML y estilizado con CSS.'
  },
  {
    title: 'Landing Page',
    imgURL: require('../../images/minecraft.jpg'),
    href: 'https://codepen.io/Nitsuga159/full/rNJMdxw',
    description: 'Página de aterrizaje de producto, en este caso se simula la venta de una entrada para una cortometraje animado (con temática de un videojuego). Estructura realizada con HTML y estilizado con CSS.'
  },

  {
    title: 'Biografía James McGill',
    imgURL: require('../../images/bio-mcgill.jpg'),
    href: 'https://codepen.io/Nitsuga159/full/JjpGBxY',
    description: 'Biografía de Jimmy McGill, personaje de la serie de televisión "Breaking Bad". Estructura realizada con HTML y estilizado con CSS.'
  },
  {
    title: 'Form BreakingBad',
    imgURL: require('../../images/form-bb.jpg'),
    href: 'https://codepen.io/Nitsuga159/full/MWQeJZX',
    description: 'Simulación de un formulario con una temática relacionada con la serie Breaking Bad. Estructura realizada con HTML y estilizado con CSS.'
  },
];

type projects = "fullStack" | "react" | "htmlCssJavascript" | "java" | "htmlCss";

export default function Projects() {

  const [projectsActive, setProjectsActive] = useState({
    fullStack: false,
    react: false,
    htmlCssJavascript: false,
    htmlCss: false,
    java: false
  });

  const handleProjectsActive = useCallback((keyToActive: projects) => {
    setProjectsActive(prev => {
      let newObj = { ...prev };
      if (newObj[keyToActive]) {
        newObj[keyToActive] = false;
        return newObj
      }

      for (let key in newObj)
        newObj[key as projects] = false;

      newObj[keyToActive] = true;

      return newObj;
    });
  }, []);

  return (
    <div id="projects" className='projects-container' >
      <div className='projects-subcontainer'>
        <h3 className='projects-title' onClick={() => handleProjectsActive("fullStack")}>
          Frontend & Backend
        </h3>
        <Container active={projectsActive.fullStack} entries={fullStack} />
        <h3 className='projects-title' onClick={() => handleProjectsActive("react")}>
          React
        </h3>
        <Container active={projectsActive.react} entries={react} />
        <h3 className='projects-title' onClick={() => handleProjectsActive("htmlCssJavascript")}>
          HTML, CSS & JavaScript
        </h3>
        <Container active={projectsActive.java} entries={java} />
        <h3 className='projects-title' onClick={() => handleProjectsActive("java")}>
          Java
        </h3>
        <Container active={projectsActive.htmlCssJavascript} entries={js} />
        <h3 className='projects-title' onClick={() => handleProjectsActive("htmlCss")}>
          HTML & CSS
        </h3>
        <Container active={projectsActive.htmlCss} entries={htmlAndCss} />
      </div>
    </div>
  );
}