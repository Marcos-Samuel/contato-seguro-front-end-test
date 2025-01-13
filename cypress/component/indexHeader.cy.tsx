import React from 'react';
import Header from '../../src/components/Header/index';
import { useMountWithProviders } from '../support/hooks';

describe('<Header />', () => {
  it('deve renderizar o título correto', () => {
    useMountWithProviders(<Header title="Livros" />);
    cy.get('h1').should('have.text', 'Livros');
  });

  it('deve renderizar o título para "Autores"', () => {
    useMountWithProviders(<Header title="Autores" />);
    cy.get('h1').should('have.text', 'Autores');
  });
});

describe('<Header />', () => {
  it('deve exibir o ícone de livro quando o título for "Livros"', () => {
    useMountWithProviders(<Header title="Livros" />);
    cy.get('[data-testid="book-icon"]').should('be.visible');
    cy.get('[data-testid="author-icon"]').should('not.exist');
  });

  it('deve exibir o ícone de autor quando o título for "Autores"', () => {
    useMountWithProviders(<Header title="Autores" />);
    cy.get('[data-testid="author-icon"]').should('be.visible');
    cy.get('[data-testid="book-icon"]').should('not.exist');
  });
});
