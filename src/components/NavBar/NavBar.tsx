import { useState } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItems from './ListOfNavBar';
import Home from '../Home/Home';
import Skills from "../Skills/Skills"
import WhoIAm from '../WhoIAm/WhoIAm';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import { GitHub as GitHubIcon, LinkedIn as LinkedInIcon } from '@mui/icons-material';
import { BLACK, GRAY, LIGHT_GRAY, STRONG_BLACK } from '../helpers/colors';
import './NavBar.css';

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop: string) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop: string) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = useState(window.innerWidth > 600);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [main, setMain] = useState('home');

  return (
    <ThemeProvider theme={mdTheme}>
      <Box component="div" sx={{ display: 'flex', width: '100%' }}>
        <AppBar position="fixed" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
              bgcolor: GRAY
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
              className='by-nitsuga'
            >
              By Nitsuga
            </Typography>
            <a className='link' href='https://www.linkedin.com/in/agust%C3%ADn-romero-33919b24b/' target='_blank' rel='noreferrer'>
              <LinkedInIcon fontSize='large' />
            </a>
            <a className='link' href='https://github.com/Nitsuga159?tab=repositories' target='_blank' rel='noreferrer'>
              <GitHubIcon fontSize='large' />
            </a>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open} >
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              bgcolor: LIGHT_GRAY,
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon sx={{ fill: 'white' }} />
            </IconButton>
          </Toolbar>
          <Divider sx={{ bgcolor: STRONG_BLACK }} />
          <ListItems setMain={setMain} main={main} />
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: BLACK,
            height: '100vh',
            overflowY: 'auto',
            width: '100%',
          }}
        >
          <Toolbar />
          {
            main === 'home'
              ? <Home />
              : main === 'whoiam'
                ? <WhoIAm />
                : main === 'skills'
                  ? <Skills />
                  : main === 'projects'
                    ? <Projects />
                    : main === 'contact'
                      ? <Contact />
                      : <></>
          }
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
