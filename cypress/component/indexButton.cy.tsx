import React from 'react';
import Button from '../../src/components/Button';
import { mount } from 'cypress/react18';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../src/styles/theme';

describe('<Button />', () => {
  it('renderiza o botão com o texto correto', () => {
    mount(
      <ThemeProvider theme={theme}>
        <Button>Click Me</Button>{' '}
      </ThemeProvider>
    );
    cy.get('button').should('have.text', 'Click Me');
  });

  it('renderiza com a variante primária', () => {
    mount(
      <ThemeProvider theme={theme}>
        <Button variant="primary">Click Me</Button>
      </ThemeProvider>
    );
    cy.get('button').should(
      'have.css',
      'background-color',
      'rgb(139, 102, 255)'
    );
  });

  it('deve desabilitar o botão quando a prop disabled for true', () => {
    mount(
      <ThemeProvider theme={theme}>
        <Button disabled>Click Me</Button>{' '}
      </ThemeProvider>
    );
    cy.get('button').should('be.disabled');
  });

  it('deve disparar a função onClick quando clicado', () => {
    const handleClick = cy.stub().as('handleClick');
    mount(
      <ThemeProvider theme={theme}>
        <Button onClick={handleClick}>Click Me</Button>{' '}
      </ThemeProvider>
    );
    cy.get('button').click();
    cy.get('@handleClick').should('have.been.calledOnce');
  });
});
