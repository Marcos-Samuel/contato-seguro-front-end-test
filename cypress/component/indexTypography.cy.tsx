import React from 'react';
import Typography from '../../src/components/Typography/index';
import { mount } from 'cypress/react18';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../src/styles/theme';

describe('Typography Component', () => {
  it('deve renderizar com a variante h1', () => {
    mount(
      <ThemeProvider theme={theme}>
        <Typography variant="h1" size="32px" weight="bold">
          Título
        </Typography>
      </ThemeProvider>
    );

    cy.get('h1').should('be.visible').contains('Título');
    cy.get('h1').should('have.css', 'font-size', '32px');
    cy.get('h1').should('have.css', 'font-weight', '700');
  });

  it('deve renderizar com a cor primária', () => {
    mount(
      <ThemeProvider theme={theme}>
        <Typography color="primary" size="16px">
          Texto Primário
        </Typography>{' '}
      </ThemeProvider>
    );

    cy.get('p').should('have.css', 'color').and('eq', 'rgb(139, 102, 255)');
  });

  it('deve renderizar com o tamanho e peso personalizados', () => {
    mount(
      <ThemeProvider theme={theme}>
        <Typography size="20px" weight="500">
          Texto Personalizado
        </Typography>{' '}
      </ThemeProvider>
    );

    cy.get('p').should('have.css', 'font-size', '20px');
    cy.get('p').should('have.css', 'font-weight', '500');
  });

  it('deve renderizar com alinhamento à esquerda', () => {
    mount(
      <ThemeProvider theme={theme}>
        <Typography align="left">Texto Alinhado à Esquerda</Typography>{' '}
      </ThemeProvider>
    );

    cy.get('p').should('have.css', 'text-align', 'left');
  });

  it('deve renderizar com o cursor pointer', () => {
    mount(
      <ThemeProvider theme={theme}>
        <Typography cursor="pointer">Texto com Cursor Pointer</Typography>{' '}
      </ThemeProvider>
    );

    cy.get('p').should('have.css', 'cursor', 'pointer');
  });

  it('deve aceitar um data-testid e ser visível', () => {
    mount(
      <ThemeProvider theme={theme}>
        <Typography data-testid="typography-test" size="18px">
          Texto com Test ID
        </Typography>{' '}
      </ThemeProvider>
    );

    cy.get('[data-testid="typography-test"]')
      .should('be.visible')
      .contains('Texto com Test ID');
  });

  it('deve renderizar o texto com a variante p (padrão)', () => {
    mount(
      <ThemeProvider theme={theme}>
        <Typography>Texto Padrão</Typography>{' '}
      </ThemeProvider>
    );

    cy.get('p').should('be.visible').contains('Texto Padrão');
  });
});
