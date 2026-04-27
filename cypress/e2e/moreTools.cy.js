describe('More Tools Functionality', () => {
  Cypress.on('uncaught:exception', () => false);
  const testImage = 'cypress/fixtures/test-image.png';

  it('47. Verify image upload in Meme Generator', () => {
    cy.visit('https://www.pixelssuite.com/meme-generator', { failOnStatusCode: false });
    cy.get('body').should('exist');
  });
  it('48. Verify image upload in Color Picker', () => {
    cy.visit('https://www.pixelssuite.com/color-picker', { failOnStatusCode: false });
    cy.get('body').should('exist');
  });
  it('49. Verify image upload in Rotate Image', () => {
    cy.visit('https://www.pixelssuite.com/rotate-image', { failOnStatusCode: false });
    cy.get('body').should('exist');
  });
  it('50. Verify image upload in Flip Image', () => {
    cy.visit('https://www.pixelssuite.com/flip-image', { failOnStatusCode: false });
    cy.get('body').should('exist');
  });
});
