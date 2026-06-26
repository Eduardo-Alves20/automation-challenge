describe('Carrinho', () => {

  it('Adicionar produto', () => {

    cy.visit('https://www.automationexercise.com');

    cy.contains('Products').click();

    cy.contains('Add to cart')
      .first()
      .click();

    cy.contains('View Cart')
      .click();

    cy.url().should('include', 'view_cart');
  });

});
