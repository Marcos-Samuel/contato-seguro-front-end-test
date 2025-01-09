import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import TableComponent from '../../components/TableComponent';
import { Container } from './styles';


const Home: React.FC = () => {
  return (
    <>
      <Header title='Livros' />
      <NavBar />
      <Container>
        <TableComponent isBook={'Book'} />
      </Container>
      
    </>
    
  );
}

export default Home;