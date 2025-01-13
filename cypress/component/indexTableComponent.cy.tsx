import React from 'react';
import TableComponent from '../../src/components/TableComponent/index';
import { useMountWithProviders } from '../support/hooks';

describe('TableComponent', () => {
  it('deve renderizar corretamente os livros', () => {
    useMountWithProviders(<TableComponent isBook="Book" />);
    cy.contains('Nenhum livro encontrado que tal adicionar um?').should(
      'be.visible'
    );
  });

  it('deve renderizar corretamente os autores', () => {
    useMountWithProviders(<TableComponent isBook="Author" />);
    cy.contains('Nenhum autor encontrado que tal adicionar um?').should(
      'be.visible'
    );
  });
});
