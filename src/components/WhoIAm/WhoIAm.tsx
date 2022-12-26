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
            Mi nombre es Agustín Romero, actualmente tengo 20 años y soy de Buenos Aires, Argentina. Hace más de un año que me especializo en un área de la programación, que es el Desarrollo Web. Para ello le dediqué todo un año a aprender los fundamentos de esta disciplina, de tal forma que hoy en día pueda ser capaz de desarrollar un proyecto totalmente desde cero.
          </Typography>
          <Typography className='who-i-am-description'>
            Para ello comencé comprendiendo conceptos indispensables relacionados con la lógica de programación, sumado a iniciar con un lenguaje, que fue 'C' en su momento. Una vez que tuve una base solida de programación, seguí aprendiendo HTML y CSS, creando proyectos para experimentar con la estructura y diseño de una página. Finalmente, desarrollé mis conocimientos en JavaScript no solo con la idea de darle funcionabilidad a lo hecho con HTML y CSS, sino como un lenguaje de programación independiente.
          </Typography>
          <Typography className='who-i-am-description'>
            Al tener un nivel avanzado de JavaScript pude expandirme y desempeñarme perfectamente con una librería, que cuyo propósito es la creación de interfaces de usuarios: 'React' y, posteriormente, transicionar al backend con NodeJS complementándolo con 'Express'. Por último, en mi etapa final de aprendizaje en un bootcamp, aprendí a cómo conectar el Backend con la base de datos a través de una ORM, la cual fue 'Sequelize', y utilizando softwares como MySQL ó Postgresql.
          </Typography>
          <Typography className='who-i-am-description'>
            Como proyecto individual, para poner en practica todos mis conocimientos realicé una página sobre la serie animada 'Pokemon', donde se muestran información de cada 'Pokemon' de una poke-api y también pokemons creados por los mismos usuarios de la página. Complementando frontend, backend y database.
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
            Amo tanto a los perros como a los gatos 🐶🐱 y mis series favoritas son 'Breaking Bad' y su gran spin off 'Better Call Saul' 📽️ 🍿 !!
          </Typography>
        </Paper>
      </Box>
      <Box className='who-i-am-sub-containers' >
        <img
          alt='perfil-image'
          className="perfil-image"
          src={require('../../images/perfil-image.jpg')}
        />
      </Box>
    </Box>
  );
}