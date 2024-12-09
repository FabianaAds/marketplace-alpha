Cypress.Commands.add('AdicionarProdutosTenda', () => {
    cy.get('#searchbarComponent')
      .click()
      .type('Leite Longa Vida Semidesnatado com Tampa Italac 1L', { delay: 50 }); // Atraso para simular digitação
    cy.get('.input-group > div > .btn')
      .click({ force: true })
      .should('be.visible').wait(2000); // Verifica se o botão está visível antes de clicar
      cy.contains('Adicionar').click({force:true}).wait(2000);

  });
  Cypress.Commands.add('AdicionarProdutosSeller', () => {
    cy.get('.DepartamentMenuComponent')
      .trigger('mouseover');  // Simula o hover sobre o elemento
    cy.contains('Marketplace').click({ force: true });
  
    cy.get('.title-subcategory')
      .contains('Produtos Seller')
      .should('be.visible') // Espera que o item 'Produtos Seller' esteja visível
      .click().wait(2000);
      cy.get(':nth-child(1) > .showcase-card-content > .menu-actions-icons > .ButtonBuyComponent > [data-cy="btn-"]').click({force:true});
  
    //cy.get(':nth-child(1) > .showcase-card-content > .menu-actions-icons > .ButtonBuyComponent > [data-cy="btn-"]')
    //  .click()
     // .should('be.visible');  // Verifica se o botão de compra está visível
  });

  Cypress.Commands.add('Finalizarcompra', () => {
    // Clica no botão do carrinho para abrir o modal
    cy.get('.cartblock-bottom > [data-cy="btn-"]')
      .scrollIntoView()
      .click({ force: true }).wait(1000);
      cy.get('.modal-ads-footer > [data-cy="btn-"]').click({force:true})


// Verifica se o modal está presente e visível, e fecha se necessário
   //cy.get('.modal-ads-footer > [data-cy="btn-"]').then(($button) => {
    //  if ($button.is(':visible')) {
      //  cy.wrap($button).click();  // Clica no botão se ele estiver visível
   // }
//});
      cy.get('.resume-buttons > .btn').scrollIntoView().click({force:true});
      
      
      //cy.get('.subtitle-address-option') //escolhendo o endereço
      //.click({force:true})
      //.wait(500); // Escolher entrega
    
      //cy.get('.disclaimer-container > .disclaimer').should('be.visible');
     // cy.get(':nth-child(2) > .content-header-package-separation > p').click()
     // cy.get('[data-cy="btn-"]').click({force:true})

      cy.get('.resume-buttons > .btn').click({force:true});
      cy.contains('Boleto bancário').click({force:true});
      cy.get('.btn-buy').scrollIntoView().click({force:true}).wait(2000);
      cy.get('#modal-checkout-tenda-variation > .modal-dialog > .modal-content > .svgIcon').click({force:true});
      cy.contains('Cartão Tenda').click({force:true});
      cy.get('#number').type('4000000000000010');
      cy.get('#month > .react-select__control > .react-select__value-container')
        .click()
        .type('03{enter}');  // Digita e pressiona Enter para selecionar

      cy.get('#year > .react-select__control > .react-select__value-container')
        .click()
        .type('2025{enter}');  // Digita e pressiona Enter para selecionar

      cy.get('#name').type(' Fabiana Silva');
      cy.get('#cpf').type('968.245.160-40');
      cy.get('#installments > .react-select__control > .react-select__value-container')
        .click()  // Clica no campo de input para abrir a lista de opções
        .type('1x sem juros', { delay: 100 })  // Digita com um pequeno delay para simular a digitação

// Aguarda o carregamento das opções e garante que o resultado está disponível
      cy.get('.react-select__menu').should('be.visible');  // Espera até que o menu de opções seja visível

// Seleciona a opção que contém o texto desejado
      cy.get('.react-select__menu')
        .contains('1x sem juros')  // Garantindo que o texto da opção esteja correto
        .click();  // Clica na opção

      //cy.get('#installments > .react-select__control > .react-select__value-container').click().type('1x sem juros,{enter}')
      //cy.contains('1x sem juros R$54,69').click({force:true});
      cy.get('.CreditCardComponent > [data-cy="btn-"]').click();

  });
  
