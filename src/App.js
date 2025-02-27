import logo from './logo.svg';
import './App.css';
import Header from './pages/Header';
import Nav from './pages/Nav';
import Content from './pages/Content';
import { Container, Grid2 } from '@mui/material';

function App() {
  return (
      <Container fixed>  
        <Header/>
        <Grid2 container>
          <Grid2 size={3}><Nav/></Grid2>
          <Grid2 size={9}><Content/></Grid2>
        </Grid2>
      </Container>
  );
}

export default App;
