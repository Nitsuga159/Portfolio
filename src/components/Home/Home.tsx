import {Typography, Box } from '@mui/material';
import laptop from '../../images/laptop.svg';
import './Home.css';

export default function Home() {


  return (
    <>
      <Box className='home-container'>
        <Box className='welcome-container'>
          <Typography 
            variant="h1" 
            fontWeight='bold' 
            color={'white'} gutterBottom
            className='welcome welcome-part1'
          >
            <span className='welcome-span'>¡</span>Hola, 
          </Typography>
          <Typography
            variant="h1" 
            fontWeight='bold' 
            color={'white'} gutterBottom
            className='welcome welcome-part2'
          >
            bienvenido a mi portafolio<span  className='welcome-span'>!</span>
          </Typography>
        </Box>
        <img className='laptop-image' src={laptop} alt='laptop-ilustration' draggable={false} />
      </Box>
    </>
  );
}
