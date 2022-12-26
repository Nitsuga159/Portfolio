import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Box, Typography } from '@mui/material';
import { 
  KeyboardArrowUp as KeyboardArrowUpIcon,
  Link as LinkIcon
} from '@mui/icons-material';
import './Card.css';

type CardType = {
  title: string,
  imgURL: string,
  href: string,
  description: string
}

export default function Card({ title, imgURL, href, description }: CardType) {
  const [isMobile, setIsMobile]: 
        [isMobile: boolean, setIsMobile: Dispatch<SetStateAction<boolean>>] = useState(false);
  const [contentActive, setContentActive]:
        [contentActive: boolean, setContentActive: Dispatch<SetStateAction<boolean>>] = useState(false);

  const handleWindowSize = (e: any) => {
    if(e.target.innerWidth <= 600) setIsMobile(true);
    else setIsMobile(false)
  };

  const handleClick = () => contentActive ? setContentActive(false) : setContentActive(true)

  useEffect(() => {
    if(window.innerWidth <= 600) setIsMobile(true);
    else setIsMobile(false)

    window.addEventListener('resize', handleWindowSize)

    return () => window.removeEventListener('resize', handleWindowSize);
  }, []);

  return (
    <Box 
      onMouseLeave={!isMobile ? () => setContentActive(false) : undefined} 
      onMouseOver={!isMobile ? () => setContentActive(true) : undefined} 
      className='card-container'
    >
      <a onClick={isMobile ? (e) => e.preventDefault() : undefined} href={href} target='_blank' rel='noopener'>
        <img className='card-image' src={imgURL} alt={title} /> 
        <Box className={`card-content ${contentActive ? 'card-content-active' : ''}`.trim()}>
          <Typography className='card-title' fontWeight='bolder' variant='h4'>{title}</Typography>
          <Typography className='card-description' >
            {description}
            {isMobile && 
            <LinkIcon 
              sx={{verticalAlign: 'middle', marginLeft: '10px', fill: '#cca5e6'}} 
              onClick={() => window.open(href, '_blank')} 
            />
          }
          </Typography>
        </Box>
        {isMobile && 
          <KeyboardArrowUpIcon 
            className='arrow-up' 
            sx={{fill: 'white', zIndex: 99}} 
            onClick={handleClick}
          />
        }
      </a>
    </Box>
    
  );
}