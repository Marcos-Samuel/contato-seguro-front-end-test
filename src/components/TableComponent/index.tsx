import React from 'react';
import { Body, Conteiner, Table, TableAction, TableDescriptions, TableHead, TableRow, THeader } from './styles';
import AlertDialogComponent from '../AlertDialog';
import { useAuthorContext } from '../../contexts/AuthorContext';
import { useBookContext } from '../../contexts/BookContext';

interface TableComponentProps {
  isBook: 'Book' | 'Author';
}

const headers = {
  Book: [
    { key: "name", label: "Nome" },
    { key: "author", label: "Autor" },
    { key: "pages", label: "Número de Páginas" },
    { key: '', label: '' },
  ],
  Author: [
    { key: "name", label: "Nome" },
    { key: "email", label: "E-mail" },
    { key: '', label: '' },
  ],
};

const TableComponent: React.FC<TableComponentProps> = ({ isBook }) => {
  const messageBook = 'Você tem certeza que gostaria de deletar esse livro?';
  const messageAuthor = 'Todos os livros vinculados a esse Autor serão deletados juntos! Você tem certeza que gostaria de deletar esse Autor?';

  const message = isBook === 'Book' ? messageBook : messageAuthor;

  const { authors } = useAuthorContext();
  const { books } = useBookContext();

  const renderTableRow = (item: any) => {
    if (isBook === 'Book') {
      const authorName = authors.find(author => author.id === item.author_id)?.name || '-';
      return (
        <>
          <TableDescriptions>{item.name}</TableDescriptions>
          <TableDescriptions>{authorName}</TableDescriptions>
          <TableDescriptions>{item.pages || '-' }</TableDescriptions>
          <TableDescriptions>
            <TableAction>
              <AlertDialogComponent message={message} />
            </TableAction>
          </TableDescriptions>
        </>
      );
    }

    return (
      <>
        <TableDescriptions>{item.name}</TableDescriptions>
        <TableDescriptions>{item.email || '-'}</TableDescriptions>
        <TableDescriptions>
          <TableAction>
            <AlertDialogComponent message={message} />
          </TableAction>
        </TableDescriptions>
      </>
    );
  };

  const data = isBook === 'Book' ? books : authors;

  return (
    <Conteiner>
      <Table>
        <THeader>
          <TableRow>
            {headers[isBook].map((header) => (
              <TableHead key={header.key}>{header.label}</TableHead>
            ))}
          </TableRow>
        </THeader>

        <Body>
          {data.map((item) => (
            <TableRow key={item.id}>
              {renderTableRow(item)}
            </TableRow>
          ))}
        </Body>
      </Table>
    </Conteiner>
  );
};

export default TableComponent;
