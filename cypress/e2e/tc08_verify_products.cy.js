describe('TC08 - Verify Products and Product Detail', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('a[href="/products"]').click();
  });

  it('should display product list and verify detail page', () => {
    cy.get('.features_items').should('be.visible');
    cy.get('.features_items .col-sm-4').should('have.length.at.least', 1);
    
    cy.get('.choose a').first().click();
    
    cy.url().should('include', '/product_details/');
    cy.get('.product-information').should('be.visible');
    cy.get('.product-information h2').should('be.visible');
    cy.get('.product-information p').should('be.visible');
    cy.get('.product-information span span').should('be.visible');
  });
});