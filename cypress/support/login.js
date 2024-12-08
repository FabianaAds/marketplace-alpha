/// <reference types="cypress" />
 
function login() {
    cy.visit('/') 
    cy.get('.disclaimer-container > [data-cy="btn-"]').click({force:true})
    cy.get('.ButtonClose > .svgIcon').then($button => {
        // Verifica se o botão está visível
        if ($button.is(':visible')) {
          cy.wrap($button).click();  // Clica no botão se estiver visível
        } else {
          cy.log('Botão não visível, ignorando...');  // Loga uma mensagem caso o botão não esteja visível
        }
      });
    cy.get('.btn.userPrincipalText').first().click()
    cy.get('.title')
      .should('have.text', 'Acessar minha contaMeu carrinhoProdutos indisponíveis');
    cy.get('#login').should('be.visible').click()
      .type(Cypress.env('credenciais_validas').email, { log: false });
    cy.get('#password').should('be.visible').click()
      .type(Cypress.env('credenciais_validas').password, { log: false });
    cy.get('[data-cy="btn-"]').first().click({force:true}).wait(3000);
    //cy.get('.username', { timeout: 10000 }).should('be.visible').click();
    //cy.get('[data-cy="btn-my-account"]', { timeout: 10000 }).should('be.visible');
    //cy.get('.central-title').should('have.text', 'Minha conta');
    //cy.get('.disclaimer-container > [data-cy="btn-"]').should('be.visible').click({force:true})
    
  
}

export { login }

