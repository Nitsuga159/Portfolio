import NavBar from './components/NavBar/NavBar';
import { Download as DownloadIcon } from '@mui/icons-material';
import './App.css';



function App() {
  return (
    <div className="App">
      <NavBar />
      <a 
        download='CV-AgustinRomero'
        href='CV-AgustinRomero.pdf'
        className='download-cv'
      >
        <DownloadIcon /> CV
      </a>
    </div>
  );
}

export default App;
