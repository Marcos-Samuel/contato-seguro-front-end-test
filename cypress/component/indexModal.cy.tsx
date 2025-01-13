import React from 'react';
import Modal from '../../src/components/Modal';
import { mount } from 'cypress/react18';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../src/styles/theme';

describe('Modal Component', () => {
  it('deve exibir o modal quando a prop open for verdadeira', () => {
    mount(
      <ThemeProvider theme={theme}>
        <Modal
          open={true}
          setOpen={cy.stub().as('setOpen')}
          title="Modal Title"
        >
          <div>Conteúdo do modal</div>
        </Modal>
      </ThemeProvider>
    );

    cy.get('div').contains('Modal Title').should('be.visible');
    cy.get('div').contains('Conteúdo do modal').should('be.visible');
  });

  it('deve fechar o modal quando o botão de fechar for clicado', () => {
    const setOpenSpy = cy.stub();
    mount(
      <ThemeProvider theme={theme}>
        <Modal open={true} setOpen={setOpenSpy} title="Modal Title">
          <div>Conteúdo do modal</div>
        </Modal>
      </ThemeProvider>
    );

    cy.get('div').contains('Modal Title').should('be.visible');

    cy.get('button[aria-label="Close"]').click();
    cy.wrap(setOpenSpy).should('have.been.calledWith', false);
  });

  it('deve fechar o modal quando o botão de disparo for clicado', () => {
    const setOpenSpy = cy.stub();
    mount(
      <ThemeProvider theme={theme}>
        <Modal open={true} setOpen={setOpenSpy} title="Modal Title">
          <div>Conteúdo do modal</div>
        </Modal>
      </ThemeProvider>
    );

    cy.get('button').contains('Modal Title').click({ force: true });

    cy.wrap(setOpenSpy).should('have.been.calledWith', false);
  });

  it('deve desabilitar o botão de disparo quando a prop disabled for verdadeira', () => {
    mount(
      <ThemeProvider theme={theme}>
        <Modal
          open={true}
          setOpen={cy.stub().as('setOpen')}
          title="Modal Title"
          disabled
        >
          <div>Conteúdo do modal</div>
        </Modal>
      </ThemeProvider>
    );

    cy.get('button').contains('Modal Title').should('be.disabled');
  });
});
