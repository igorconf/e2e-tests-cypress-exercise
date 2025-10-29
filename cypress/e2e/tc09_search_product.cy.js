describe('TC09 - Search Product', () => {
  let testData;

  before(() => {
    cy.fixture('testData').then((data) => {
      testData = data;
    });
  });

  beforeEach(() => {
    cy.visit('/');
    cy.get('a[href="/products"]').click();
  });

  it('should search for product successfully', () => {
    cy.get('#search_product').type(testData.products.first.name);
    cy.get('#submit_search').click();
    cy.get('.features_items').should('be.visible');
    cy.get('.productinfo p').should('contain', testData.products.first.name);
  });
});