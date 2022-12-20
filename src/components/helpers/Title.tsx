import * as React from 'react';
import Typography from '@mui/material/Typography';
import './Title.css';

interface TitleProps {
  children?: React.ReactNode,
  class?: string
}

export default function Title(props: TitleProps) {
  return (
    <Typography className={props.class ? props.class : ''} variant="h2" fontWeight='bold' color={'white'} gutterBottom>
      {props.children}
    </Typography>
  );
}