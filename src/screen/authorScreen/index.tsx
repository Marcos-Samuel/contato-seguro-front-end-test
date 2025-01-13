import React, { useState } from 'react';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import { Main, ContentModal } from './styles';
import TableComponent from '../../components/TableComponent';
import Modal from '../../components/Modal';
import FormAuthor from '../../components/Forms/FormAuthor';
import { TooltipMessage } from '../../components/Tooltip';
import Footer from '../../components/Footer';

const AuthorScreen: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Header title="Autores" />
      <NavBar />
      <Main>
        <ContentModal>
          <TooltipMessage
            message={
              <>
                {' '}
                Para cadastrar um livro, primeiro você deve cadastrar um autor!
                Click em &gt; Cadastrar Autor
              </>
            }
          />
          <Modal
            title={'Cadastrar Autor'}
            open={modalOpen}
            setOpen={setModalOpen}
          >
            <FormAuthor setOpen={setModalOpen} />
          </Modal>
        </ContentModal>

        <TableComponent isBook={'Author'} />
      </Main>
      <Footer />
    </>
  );
};

export default AuthorScreen;
