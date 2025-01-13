import React from 'react';
import Typography from '../../src/components/Typography/index';
import { useMountWithProviders } from '../support/hooks';

describe('Typography Component', () => {
  it('deve renderizar com a variante h1', () => {
    useMountWithProviders(
      <Typography variant="h1" size="32px" weight="bold">
        Título
      </Typography>
    );

    cy.get('h1').should('be.visible').contains('Título');
    cy.get('h1').should('have.css', 'font-size', '32px');
    cy.get('h1').should('have.css', 'font-weight', '700');
  });

  it('deve renderizar com a cor primária', () => {
    useMountWithProviders(
      <Typography color="primary" size="16px">
        Texto Primário
      </Typography>
    );

    cy.get('p').should('have.css', 'color').and('eq', 'rgb(139, 102, 255)');
  });

  it('deve renderizar com o tamanho e peso personalizados', () => {
    useMountWithProviders(
      <Typography size="20px" weight="500">
        Texto Personalizado
      </Typography>
    );

    cy.get('p').should('have.css', 'font-size', '20px');
    cy.get('p').should('have.css', 'font-weight', '500');
  });

  it('deve renderizar com alinhamento à esquerda', () => {
    useMountWithProviders(
      <Typography align="left">Texto Alinhado à Esquerda</Typography>
    );

    cy.get('p').should('have.css', 'text-align', 'left');
  });

  it('deve renderizar com o cursor pointer', () => {
    useMountWithProviders(
      <Typography cursor="pointer">Texto com Cursor Pointer</Typography>
    );

    cy.get('p').should('have.css', 'cursor', 'pointer');
  });

  it('deve aceitar um data-testid e ser visível', () => {
    useMountWithProviders(
      <Typography data-testid="typography-test" size="18px">
        Texto com Test ID
      </Typography>
    );

    cy.get('[data-testid="typography-test"]')
      .should('be.visible')
      .contains('Texto com Test ID');
  });

  it('deve renderizar o texto com a variante p (padrão)', () => {
    useMountWithProviders(<Typography>Texto Padrão</Typography>);

    cy.get('p').should('be.visible').contains('Texto Padrão');
  });
});
