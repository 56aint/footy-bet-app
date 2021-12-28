/// <reference types="cypress" />
import { mount } from '@cypress/react';
import NavBar from '../../pages/_app';



describe('NavBar', () => {
  it('NavBar', () => {
    mount(<App>Home</App>)
    cy.get('[data-testid="navbar-links-item-id]').should('exist')
  });
})