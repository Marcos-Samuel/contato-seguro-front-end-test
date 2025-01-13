import React from 'react';
import Footer from '../../src/components/Footer';
import { useMountWithProviders } from '../support/hooks';

describe('<Footer />', () => {
  it('renderiza o logo corretamente', () => {
    useMountWithProviders(<Footer />);
    cy.contains('Biblioteca');
  });

  it('renderiza os links de navegação corretamente', () => {
    useMountWithProviders(<Footer />);
    cy.get('a[href="/"]').should('contain.text', 'Livros');
    cy.get('a[href="/authors"]').should('contain.text', 'Autores');
  });

  it('deve exibir o copyright corretamente', () => {
    useMountWithProviders(<Footer />);
    cy.get('footer').should(
      'contain.text',
      '© 2025 My Website. All rights reserved.'
    );
  });

  it('deve aplicar o estilo ativo no link correto', () => {
    useMountWithProviders(<Footer />);
    cy.get('a[href="/"]').click();
    cy.get('a[href="/"]').should('have.class', 'active');
    cy.get('a[href="/authors"]').should('not.have.class', 'active');
  });
});
