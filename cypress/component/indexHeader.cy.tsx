import React from 'react';
import Header from '../../src/components/Header/index';
import { mount } from 'cypress/react18';
import { theme } from '../../src/styles/theme';
import { ThemeProvider } from 'styled-components';

describe('<Header />', () => {
  it('deve renderizar o título correto', () => {
    mount(
      <ThemeProvider theme={theme}>
        <Header title="Livros" />
      </ThemeProvider>
    );
    cy.get('h1').should('have.text', 'Livros');
  });

  it('deve renderizar o título para "Autores"', () => {
    mount(
      <ThemeProvider theme={theme}>
        <Header title="Autores" />
      </ThemeProvider>
    );
    cy.get('h1').should('have.text', 'Autores');
  });
});

describe('<Header />', () => {
  it('deve exibir o ícone de livro quando o título for "Livros"', () => {
    mount(
      <ThemeProvider theme={theme}>
        <Header title="Livros" />{' '}
      </ThemeProvider>
    );
    cy.get('[data-testid="book-icon"]').should('be.visible');
    cy.get('[data-testid="author-icon"]').should('not.exist');
  });

  it('deve exibir o ícone de autor quando o título for "Autores"', () => {
    mount(
      <ThemeProvider theme={theme}>
        <Header title="Autores" />
      </ThemeProvider>
    );
    cy.get('[data-testid="author-icon"]').should('be.visible');
    cy.get('[data-testid="book-icon"]').should('not.exist');
  });
});
