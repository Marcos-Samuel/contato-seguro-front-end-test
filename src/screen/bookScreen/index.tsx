import { useState } from 'react';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import NavBar from '../../components/NavBar';
import TableComponent from '../../components/TableComponent';
import { Main, ContentModal } from './styles';
import FormBook from '../../components/Forms/FormBook';
import { TooltipMessage } from '../../components/Tooltip';
import { useAuthorContext } from '../../contexts/AuthorContext';
import Footer from '../../components/Footer';

const BookScreen: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { authors } = useAuthorContext();
  const disabled = authors.length === 0;
  return (
    <>
      <Header title="Livros" />
      <NavBar />
      <Main>
        <ContentModal>
          <TooltipMessage
            message={
              <>
                Antes de cadastrar um livro você deve cadastrar um autor! <br />
                Clique em Autores &gt; Cadastrar Autor
              </>
            }
          />
          <Modal
            title={'Cadastrar livro'}
            open={modalOpen}
            setOpen={setModalOpen}
            disabled={disabled}
          >
            <FormBook setOpen={setModalOpen} />
          </Modal>
        </ContentModal>
        <TableComponent isBook={'Book'} />
      </Main>
      <Footer />
    </>
  );
};

export default BookScreen;
