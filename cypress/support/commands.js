Cypress.Commands.add('LoginSuccess', () =>{
    cy.visit('/login') 
    cy.get('[]')
      .type(Cypress.env('credenciais_validas1').email, { log: false });
    cy.get('[]')
      .type(Cypress.env('credenciais_validas1').password, { log: false });
    cy.get('["]').click();
    cy.get('[]').should('be.visible').click();
    
  });
