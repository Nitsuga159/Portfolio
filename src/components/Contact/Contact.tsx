import { Box, TextField, Button, Typography } from "@mui/material"
import './Contact.css';

export default function Contact() {
  return (
    <>
      <Typography 
        variant='h3' 
        className='title-form'
      >Contáctame
      </Typography>
      <Typography 
        className='description-form'
      >
        ¡Contáctame para algún proyecto que tengas y hagámoslo realidad! 🚀🚀
      </Typography>
      <form 
        action='https://formsubmit.co/dd6d334afd9b703b8f21fbabe1b178d0' 
        method='POST'
        className='form-contact' 
      >
        <TextField 
          type='text'
          label='Nombre y Apellido'
          required
          fullWidth
          name='Nombre'
          variant="standard"
          inputProps={{
            style: {color: 'white'}
          }}
          className='input-container'
        />
        <TextField 
          type='email'
          label='Correo'
          name='Correo'
          required
          fullWidth
          variant="standard"
          inputProps={{
            style: {color: 'white'}
          }}
          className='input-container'
        />
        <TextField 
          type='text'
          label='Asunto'
          name='Asunto'
          required
          fullWidth
          variant="standard"
          inputProps={{
            style: {color: 'white'}
          }}
          className='input-container'
        />
        <Typography variant='h5' sx={{color: 'white', mt: 3}} className='form-propuesta'>Propuesta: </Typography>
        <textarea
          placeholder='Escriba aquí...'
          rows={6}
          name='Propuesta'
          className='textarea'
          required
        ></textarea>
        <input 
          type="hidden" 
          name='_next' 
          value={process.env.REACT_APP_HOST || 'http://localhost:3000'} 
        />
        <input 
          type="hidden" 
          name='_captcha'
          value='false'
        />
        {/* <input type="hidden" name='' /> */}
        <Button
          type='submit'
          variant='contained'
          className='submit-button'
        >
          Enviar
        </Button>
      </form>
    </>
  )
}