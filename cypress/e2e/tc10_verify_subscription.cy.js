describe('TC10 - Verify Subscription in home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should verify subscription in home page', () => {
    cy.scrollTo('bottom');
    cy.get('.single-widget h2').should('contain', 'Subscription');
    cy.get('#susbscribe_email').type('test@example.com');
    cy.get('#subscribe').click();
    cy.get('.alert-success').should('contain', 'You have been successfully subscribed!');
  });
});