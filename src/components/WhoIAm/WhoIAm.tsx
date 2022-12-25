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
            holaaaa
          </Typography>
        </Paper>
      </Box>
      <Box className='who-i-am-sub-containers' >
        <img
          className="perfil-image"
          src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d4ad40103067131.5f450dd53ccd1.png' 
        />
      </Box>
    </Box>
  );
}