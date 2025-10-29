describe('TC15 - Place Order: Register before Checkout', () => {
  let testData;

  before(() => {
    cy.fixture('testData').then((data) => {
      testData = data;
    });
  });

  it('should place order after registration', () => {
    const uniqueEmail = `test_${Date.now()}@example.com`;

    cy.visit('/');
    cy.get('a[href="/login"]').click();

    cy.signup(testData.validUser.name, uniqueEmail);

    cy.get('#id_gender1').check();
    cy.fillSignupForm(testData.validUser);
    cy.get('[data-qa="create-account"]').click();
    cy.verifySuccessfulRegistration();

    cy.get('a[href="/products"]').click();
    cy.get('.features_items .col-sm-4').first().within(() => {
      cy.get('.add-to-cart').first().click();
    });

    cy.get('#cartModal').should('be.visible');
    cy.contains('View Cart').should('be.visible').click();

    cy.contains('Proceed To Checkout').click();

    cy.get('.address_firstname').should('contain', testData.validUser.firstName);
    cy.get('.address_lastname').should('contain', testData.validUser.lastName);
    cy.get('.address_address1').should('contain', testData.validUser.address);

    cy.get('textarea.form-control').type('Test order comment');
    cy.get('a.check_out').click();

    cy.get('[data-qa="name-on-card"]').type('Test User');
    cy.get('[data-qa="card-number"]').type('4242424242424242');
    cy.get('[data-qa="cvc"]').type('123');
    cy.get('[data-qa="expiry-month"]').type('12');
    cy.get('[data-qa="expiry-year"]').type('2025');
    cy.get('[data-qa="pay-button"]').click();

    cy.get('[data-qa="order-placed"]').should('contain', 'Order Placed!');
  });
});
