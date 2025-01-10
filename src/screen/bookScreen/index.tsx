import { useState } from 'react';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import NavBar from '../../components/NavBar';
import TableComponent from '../../components/TableComponent';
import { Container, ContentModal } from './styles';
import FormBook from '../../components/Forms/FormBook';

const BookScreen: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Header title='Livros' />
      <NavBar />
          <Container>
          <ContentModal>
                  <Modal
                      title={'Cadastrar livro'}
                      open={modalOpen}
                      setOpen={setModalOpen}>
                      <FormBook setOpen={setModalOpen}/>
                  </Modal>
         </ContentModal>
        <TableComponent isBook={'Book'} />
      </Container>
    </>
  );
}

export default BookScreen;