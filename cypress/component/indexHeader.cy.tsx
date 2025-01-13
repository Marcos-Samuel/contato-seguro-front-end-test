import React from 'react';
import Header from '../../src/components/Header/index';
import { mount } from 'cypress/react18';

describe('<Header />', () => {
  it('deve renderizar o título correto', () => {
    mount(<Header title="Livros" />);
    cy.get('h1').should('have.text', 'Livros');
  });

  it('deve renderizar o título para "Autores"', () => {
    mount(<Header title="Autores" />);
    cy.get('h1').should('have.text', 'Autores');
  });
});

describe('<Header />', () => {
  it('deve exibir o ícone de livro quando o título for "Livros"', () => {
    mount(<Header title="Livros" />);
    cy.get('[data-testid="book-icon"]').should('be.visible');
    cy.get('[data-testid="author-icon"]').should('not.exist');
  });

  it('deve exibir o ícone de autor quando o título for "Autores"', () => {
    mount(<Header title="Autores" />);
    cy.get('[data-testid="author-icon"]').should('be.visible');
    cy.get('[data-testid="book-icon"]').should('not.exist');
  });
});
