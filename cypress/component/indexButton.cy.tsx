import React from 'react';
import Button from '../../src/components/Button';
import { mount } from 'cypress/react18';

describe('<Button />', () => {
  it('renderiza o botão com o texto correto', () => {
    mount(<Button>Click Me</Button>);
    cy.get('button').should('have.text', 'Click Me');
  });

  it('renderiza com a variante primária', () => {
    mount(<Button variant="primary">Click Me</Button>);
    cy.get('button').should(
      'have.css',
      'background-color',
      'rgb(139, 102, 255)'
    );
  });

  it('deve desabilitar o botão quando a prop disabled for true', () => {
    mount(<Button disabled>Click Me</Button>);
    cy.get('button').should('be.disabled');
  });

  it('deve disparar a função onClick quando clicado', () => {
    const handleClick = cy.stub().as('handleClick');
    mount(<Button onClick={handleClick}>Click Me</Button>);
    cy.get('button').click();
    cy.get('@handleClick').should('have.been.calledOnce');
  });
});
