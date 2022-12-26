import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {
  AccountCircle as AccountCircleIcon,
  Home as HomeIcon,
  Code as CodeIcon,
  Folder as FolderIcon,
  ContactMail as ContactMailIcon
} from '@mui/icons-material';
import { LIGHT_BLACK } from '../helpers/colors';
import './ListOfNavBar.css';

type Props = {
  setMain: (value: React.SetStateAction<string>) => void,
  main: string
}

export default function ListOfNavBar({ setMain, main }: Props){

  const listItems = [
    {
      text: 'Inicio', icon: <HomeIcon sx={{fill: 'white' }} />, value: 'home'
    },
    {
      text: 'Sobre mí', icon: <AccountCircleIcon sx={{fill: 'white' }} />, value: 'whoiam'
    },
    {
      text: 'Habilidades', icon: <CodeIcon sx={{fill: 'white' }} />, value: 'skills'
    },
    {
      text: 'Proyectos', icon: <FolderIcon sx={{fill: 'white' }} />, value: 'projects'
    },
    {
      text: 'Contáctame', icon: <ContactMailIcon sx={{fill: 'white' }} />, value: 'contact'
    }
  ];

  const handleSetMain = (value: string):void => {setMain(value)};

  return(
    <>
        <List sx={{height: '100%', bgcolor: LIGHT_BLACK, p:0}}>
          {
            listItems.map((ele, i) => (
              <ListItemButton 
                onClick={() => handleSetMain(ele.value)} 
                key={i}
                className={`list-item ${ele.value === main ? 'list-item-active' : ''}`.trim()}
              >
                <ListItemIcon>{ele.icon}</ListItemIcon>
                <ListItemText sx={{color: 'white'}} primary={ele.text} />
              </ListItemButton>
            ))
          }
        </List>
      </>
  )};