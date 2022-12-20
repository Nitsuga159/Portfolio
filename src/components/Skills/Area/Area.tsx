import { Box, Typography, Paper } from "@mui/material";
import './Area.css'

type Props = {
  title: string,
  entries: {name: string, icon: string}[]
};

export default function Area({ title, entries }: Props) {
  return (
    <Box className='area-container'>
      <Typography className='area-title' variant='h2' fontWeight='bolder'>{title}</Typography>
      <Box className='area-entries'>
        {
          entries.map((ele, i) => (
            <Paper elevation={4} className='area-item-container' key={i}>
              <Typography className='area-name' >{ele.name}</Typography>
              <img className='area-icon' src={ele.icon} alt={ele.name} draggable={false} />
            </Paper>
          ))
        }
      </Box>
    </Box>
  );
}