describe('TC06 - Contact Us Form', () => {
  let testData;

  before(() => {
    cy.fixture('testData').then((data) => {
      testData = data;
    });
  });

  beforeEach(() => {
    cy.visit('/');
    cy.get('a[href="/contact_us"]').click();
  });

  it('should submit contact form successfully', () => {
    cy.get('[data-qa="name"]').type(testData.validUser.name);
    cy.get('[data-qa="email"]').type(testData.validUser.email);
    cy.get('[data-qa="subject"]').type('Test Subject');
    cy.get('[data-qa="message"]').type('This is a test message');
    cy.get('[data-qa="submit-button"]').click();
    cy.get('.status').should('contain', 'Success! Your details have been submitted successfully.');
  });
});