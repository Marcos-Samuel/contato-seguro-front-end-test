import React from 'react';
import Button from '../../src/components/Button';
import { useMountWithProviders } from '../support/hooks';

describe('<Button />', () => {
  it('renderiza o botão com o texto correto', () => {
    useMountWithProviders(<Button>Click Me</Button>);
    cy.get('button').should('have.text', 'Click Me');
  });

  it('renderiza com a variante primária', () => {
    useMountWithProviders(<Button variant="primary">Click Me</Button>);
    cy.get('button').should(
      'have.css',
      'background-color',
      'rgb(139, 102, 255)'
    );
  });

  it('deve desabilitar o botão quando a prop disabled for true', () => {
    useMountWithProviders(<Button disabled>Click Me</Button>);
    cy.get('button').should('be.disabled');
  });

  it('deve disparar a função onClick quando clicado', () => {
    const handleClick = cy.stub().as('handleClick');
    useMountWithProviders(<Button onClick={handleClick}>Click Me</Button>);
    cy.get('button').click();
    cy.get('@handleClick').should('have.been.calledOnce');
  });
});
