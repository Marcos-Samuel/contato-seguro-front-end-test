import React, { useState } from 'react';
import {
  Body,
  Conteiner,
  ContentModal,
  Table,
  TableAction,
  TableDescriptions,
  TableRow,
} from './styles';
import AlertDialogComponent from '../AlertDialog';
import { useAuthorContext } from '../../contexts/AuthorContext';
import { useBookContext } from '../../contexts/BookContext';
import Modal from '../Modal';
import Typography from '../Typography';
import useSort from '../../hooks/useSort';
import TableHeaders from './TableHeader';
import { Book } from '../../models/interface/api/book.interface';

interface TableComponentProps {
  isBook: 'Book' | 'Author';
}

const headers = {
  Book: [
    { key: 'name', label: 'Nome' },
    { key: 'author', label: 'Autor' },
    { key: 'pages', label: 'Número de Páginas' },
    { key: '', label: '' },
  ],
  Author: [
    { key: 'name', label: 'Nome' },
    { key: 'email', label: 'E-mail' },
    { key: '', label: '' },
  ],
};

const messageBook = 'Você tem certeza que gostaria de deletar esse livro?';
const messageAuthor =
  'Todos os livros vinculados a esse Autor serão deletados juntos! Você tem certeza que gostaria de deletar esse Autor?';

const TableComponent: React.FC<TableComponentProps> = ({ isBook }) => {
  const [currentModalId, setCurrentModalId] = useState<string | null>(null);
  const message = isBook === 'Book' ? messageBook : messageAuthor;
  const { authors, deleteAuthor, getBooksByAuthor } = useAuthorContext();
  const { books, deleteBook } = useBookContext();

  const { handleSort, sortedData } = useSort(
    isBook === 'Book' ? books : (authors as Book[]),
    'name'
  );

  const handleDelete = isBook === 'Book' ? deleteBook : deleteAuthor;

  const handleOpenModal = (id: string) => {
    setCurrentModalId(id);
  };

  const handleCloseModal = () => {
    setCurrentModalId(null);
  };

  const renderTableRow = (item: any) => {
    if (isBook === 'Book') {
      const authorName =
        authors.find((author) => author.id === item.author_id)?.name || '-';

      return (
        <>
          <TableDescriptions onClick={() => handleOpenModal(item.id)}>
            <Typography cursor="pointer" variant="strong" align="center">
              {item.name}
            </Typography>
          </TableDescriptions>
          <TableDescriptions>{authorName}</TableDescriptions>
          <TableDescriptions>{item.pages || '-'}</TableDescriptions>
          <TableDescriptions>
            <TableAction>
              <AlertDialogComponent
                message={message}
                onClick={handleDelete}
                id={item.id}
              />
            </TableAction>
          </TableDescriptions>
          <Modal
            open={currentModalId === item.id}
            setOpen={handleCloseModal}
            title="Livro"
            hidden
          >
            <ContentModal>
              <Typography variant="h3">{item.name}</Typography>
              <Typography variant="p">{''}</Typography>
              <Typography variant="h3">{`Autor: ${authorName}`}</Typography>
              <Typography variant="p">{`Total de páginas: ${item.pages}`}</Typography>
            </ContentModal>
          </Modal>
        </>
      );
    }

    return (
      <>
        <TableDescriptions onClick={() => handleOpenModal(item.id)}>
          <Typography cursor="pointer" variant="strong" align="center">
            {item.name}
          </Typography>
        </TableDescriptions>
        <TableDescriptions>{item.email || '-'}</TableDescriptions>
        <TableDescriptions>
          <TableAction>
            <AlertDialogComponent
              message={message}
              onClick={handleDelete}
              id={item.id}
            />
          </TableAction>
        </TableDescriptions>
        <Modal
          open={currentModalId === item.id}
          setOpen={handleCloseModal}
          title="Autor"
          hidden
        >
          <ContentModal>
            <Typography variant="h3">{item.name}</Typography>
            <Typography variant="p">{``}</Typography>
            <Typography variant="p">{`Total de livros: ${getBooksByAuthor(item.id).totalBooks}`}</Typography>
            <Typography variant="p">{`E-mail: ${item.email}`}</Typography>
          </ContentModal>
        </Modal>
      </>
    );
  };

  return (
    <Conteiner>
      <Table>
        <TableHeaders headers={headers[isBook]} onSort={handleSort} />

        <Body>
          {sortedData.length === 0 ? (
            <Typography>
              {`
              Nenhum ${isBook === 'Book' ? 'livro' : 'autor'} encontrado que tal adicionar um?`}
            </Typography>
          ) : (
            sortedData.map((item) => (
              <TableRow key={item.id}>{renderTableRow(item)}</TableRow>
            ))
          )}
        </Body>
      </Table>
    </Conteiner>
  );
};

export default TableComponent;
