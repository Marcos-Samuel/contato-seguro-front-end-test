import React from 'react';
import { Body, LinkExternal, Table, TableAction, TableDescriptions, TableHead, TableRow, THeader } from './styles';

interface TableComponentProps {
  isBook: 'Book'| 'Author';
}

const bookHeaders = [
  { key: "id", label: "ID" },
  { key: "name", label: "Nome" },
  { key: "author", label: "Autor" },
  { key: "pages", label: "Número de Páginas" },
  {key: '', label: ''}
];
const authorHeaders = [
  { key: "id", label: "ID" },
  { key: "name", label: "Nome" },
  { key: "email", label: "E-mail" },
];

const TableComponent: React.FC<TableComponentProps> = ({ isBook }) => {
  
  const headerMapping = isBook ? bookHeaders : authorHeaders;
  
    return (
      <Table>
          <THeader>
            <TableRow>
            {headerMapping.map((header =>  
              <TableHead>{header.label}</TableHead>
            ))}
            </TableRow>
          </THeader>
    
              <Body >
                <TableRow>
                  <TableDescriptions>
                    <LinkExternal href={''} >
                        O Cartão
                    </LinkExternal>
                    </TableDescriptions>
               
                  <TableDescriptions>Marcos Samuel</TableDescriptions>
                  <TableDescriptions>
                    200
                  </TableDescriptions>
    
                  <TableDescriptions>
                    <TableAction>
{/* 
                      <AlertDelete
                        title={director.name}
                        action={() => handleDelete(director.id)}
                      /> */}
                    </TableAction>
                  </TableDescriptions>
                </TableRow>
              </Body>
        </Table>
      );
    };
export default TableComponent;