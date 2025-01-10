import React, { useState } from 'react';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import { Container, ContentModal } from './styles';
import TableComponent from '../../components/TableComponent';
import Modal from '../../components/Modal';
import FormAuthor from '../../components/Forms/FormAuthor';

const AuthorScreen: React.FC = () => {

const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
    <Header title='Autores' />
    <NavBar />
        <Container>
         <ContentModal>
                  <Modal
                      title={'Adicionar Autor'}
                      open={modalOpen}
                      setOpen={setModalOpen}>
                      <FormAuthor setOpen={setModalOpen}/>
                  </Modal>
         </ContentModal>
        
        <TableComponent isBook={'Author'} />
    </Container>
  </>
)
}

export default AuthorScreen;