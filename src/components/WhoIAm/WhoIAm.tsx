import { Box, Paper, Typography } from "@mui/material";
import './WhoIAm.css';


export default function WhoIAm() {

  return (
    <Box className='who-i-am-container'>
      <Box className='who-i-am-sub-containers'>
        <Paper className='who-i-am-description-container'>
          <Typography 
            variant='h2' 
            fontWeight='bolder'
            className='who-i-am-title'
          >¿Quién Soy?
          </Typography>
          <Typography className='who-i-am-description'>
            Mi nombre es Agustín Romero, actualmente tengo 20 años y soy de Buenos Aires, Argentina. Hace más de un año que me especializo en un área de la programación, que es el Desarrollo Web. Para ello le dediqué todo un año a aprender los fundamentos de ésta disciplina, de tal forma que hoy en día pueda ser capaz de desarrollar un proyecto totalmente desde cero.
          </Typography>
          <Typography className='who-i-am-description'>
            Para ello empecé comprendiendo conceptos indispensables relacionados con la lógica de programación, sumado a programar en un lenguaje, que fue 'C' en su momento. Una vez que tuve una base solida de programación, seguí aprendiendo HTML y CSS, creando proyectos para experimentar con la estructura y diseño de una página. Finalmente, desarrollé mis conocimientos en JavaScript no solo como una complementación para darle funcionabilidad a lo hecho con el HTML y CSS, sino como un lenguaje completo aparte.
          </Typography>
          <Typography className='who-i-am-description'>
            Al tener un nivel avanzado de JavaScript pude expandirme y desempeñar de buena manera con la librería para la creación de interfaces de usuarios: 'React' y, posteriormente, pasarme al backend con NodeJS complementado con la librería 'Express'. Además
          </Typography>
          <Typography className='who-i-am-description'>
            Al tener un nivel avanzado de JavaScript pude expandirme y desempeñar de buena manera con la librería para la creación de interfaces de usuarios: 'React' y, posteriormente, transicionar al backend con NodeJS complementado con la librería 'Express'. Por último, en mi etapa final de aprendizaje de un bootcamp, aprendí conectar el Backend con la base de datos a través de una ORM: 'Sequelize' y utilizando software como MySQL o Postgresql.
          </Typography>
          <Typography className='who-i-am-description'>
            Como proyecto individual para poner en practica todos estos conocimientos realicé una página sobre la serie animada 'Pokemon', donde se muestran información de cada 'Pokemon' de una poke-api y también pokemons creados por los mismos usuarios de la página. Complementando frontend, backend y database.
          </Typography>
          <Typography 
            variant='h2' 
            fontWeight='bolder'
            className='who-i-am-title'
          >Hobbies y Gustos variados
          </Typography>
          <Typography className='who-i-am-description'>
            Además del Desarrollo Web, me interesan otras áreas de la programación, como el Machine Learning o el desarrollo de videojuegos. Es por eso que también estoy muy dispuesto a aprender otros lenguajes como Python o C++ y los paradigmas que éstos manejan. A su vez, disfruto ver series o películas en mis tiempos libres, también ver contenido variado en las redes sociales sobre distintos temas en podcast o conversar y pasar el tiempo con mis amigos.
          </Typography>
          <Typography className='who-i-am-description'>
            Amo a los perros y gatos 🐶🐱. Y mis series favoritas son 'Breaking Bad' y su spin off 'Better Call Saul' !!
          </Typography>
        </Paper>
      </Box>
      <Box className='who-i-am-sub-containers' >
        <img
          alt='perfil-image'
          className="perfil-image"
          src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d4ad40103067131.5f450dd53ccd1.png' 
        />
      </Box>
    </Box>
  );
}