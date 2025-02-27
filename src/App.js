import logo from './logo.svg';
import './App.css';
import Header from './pages/Header';
import Nav from './pages/Nav';
import Content from './pages/Content';
import { Container, Grid2 } from '@mui/material';

function App() {
  return (
      // <Container fixed>  
      //   <Header/>
      //   <Grid2 container>
      //     <Grid2 size={3}><Nav/></Grid2>
      //     <Grid2 size={9}><Content/></Grid2>
      //   </Grid2>

      // </Container>

      <Container fixed>
        <Grid2 container>
          <Grid2 size={3}><Header/></Grid2>
          <Grid2 size={9}><Nav/></Grid2>
        </Grid2>
      </Container>
      /*
          Grid와 Container 안의 레이아웃을 핸들링해주고 반응형으로 배치시켜야 하는 경우 매우 유용한다.
          fixed는 해당 사이즈보다 브라우저 크기가 작아지면
          xl -> lg -> md -> sm -> xs 순으로 줄어들게 된다.

          xl(Extra large) : 1200px이상
          lg(large) : 992px이상
          md(medium) : 768px이상
          sm(small) : 576px이상
          xs(Extar small) : 576px미만
      */
  );
}

export default App;
