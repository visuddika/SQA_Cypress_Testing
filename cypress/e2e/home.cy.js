describe('Home Page Navigation', () => {
  Cypress.on('uncaught:exception', () => false);

  it('51. Verify home navigation from Resize page', () => {
    cy.visit('https://www.pixelssuite.com/resize-image', { failOnStatusCode: false });
    cy.contains('PixelsSuite').click();
    cy.url().should('eq', 'https://www.pixelssuite.com/');
  });
  it('52. Verify home navigation from Compress page', () => {
    cy.visit('https://www.pixelssuite.com/compress-image', { failOnStatusCode: false });
    cy.contains('PixelsSuite').click();
    cy.url().should('eq', 'https://www.pixelssuite.com/');
  });
  it('53. Verify home navigation from Crop page', () => {
    cy.visit('https://www.pixelssuite.com/crop-png', { failOnStatusCode: false });
    cy.contains('PixelsSuite').click();
    cy.url().should('eq', 'https://www.pixelssuite.com/');
  });
  it('54. Verify home navigation from Home page', () => {
    cy.visit('https://www.pixelssuite.com/', { failOnStatusCode: false });
    cy.contains('PixelsSuite').click();
    cy.url().should('eq', 'https://www.pixelssuite.com/');
  });
});
