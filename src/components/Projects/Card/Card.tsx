import { useState, Dispatch, SetStateAction } from 'react';
import { Box, Typography } from '@mui/material';
import './Card.css';

type CardType = {
  title: string,
  imgURL: string,
  href: string,
  description: string
}

export default function Card({ title, imgURL, href, description }: CardType) {
  const [contentActive, setContentActive]:
        [contentActive: boolean, setContentActive: Dispatch<SetStateAction<boolean>>] = useState(false);

  return (
    <Box onMouseLeave={() => setContentActive(false)} onMouseOver={() => setContentActive(true)} className='card-container'>
      <a href={href} target='_blank' rel='noopener'>
        <img className='card-image' src={imgURL} alt={title} />
      
        <Box className={`card-content ${contentActive ? 'card-content-active' : ''}`.trim()}>
          <Typography className='card-title' fontWeight='bolder' variant='h4'>{title}</Typography>
          <Typography className='card-description' >{description}</Typography>
        </Box>
      </a>
    </Box>
    
  );
}