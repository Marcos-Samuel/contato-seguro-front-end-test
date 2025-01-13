import React from 'react';
import NavBar from '../../src/components/NavBar/index';
import { useMountWithProviders } from '../support/hooks';

describe('<NavBar />', () => {
  it('deve renderizar os links corretamente', () => {
    useMountWithProviders(<NavBar />);
    cy.get('a[href="/"]').should('contain.text', 'Livros');
    cy.get('a[href="/authors"]').should('contain.text', 'Autores');
  });

  it('deve abrir o dropdown quando o botão "Menu" for clicado', () => {
    useMountWithProviders(<NavBar />);

    cy.get('button').contains('Menu').click();

    cy.get('ul').should('be.visible');
    cy.get('a[href="/"]').should('contain.text', 'Livros');
    cy.get('a[href="/authors"]').should('contain.text', 'Autores');
  });

  it('deve ocultar o dropdown quando clicado novamente', () => {
    useMountWithProviders(<NavBar />);

    cy.get('.dropdown-menu').should('not.exist');

    cy.get('button').contains('Menu').click();

    cy.get('.dropdown-menu').should('exist').and('be.visible');

    cy.get('button').click({ force: true });

    cy.get('.dropdown-menu').should('not.exist');
  });

  it('deve aplicar o estilo ativo no link correto', () => {
    useMountWithProviders(<NavBar />);

    cy.get('a[href="/"]').click({ force: true });
    cy.get('a[href="/"]').should('have.class', 'active');

    cy.get('a[href="/authors"]').should('not.have.class', 'active');
  });
});
