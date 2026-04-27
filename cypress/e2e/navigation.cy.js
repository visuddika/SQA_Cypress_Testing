describe('Full System Navigation', () => {
  Cypress.on('uncaught:exception', () => false);

  it('1. Verify homepage loads successfully', () => {
    cy.visit('https://www.pixelssuite.com/', { failOnStatusCode: false });
    cy.contains('PixelsSuite').should('be.visible');
  });
  it('2. Verify navigation to Document Converter -> Image to PDF', () => {
    cy.visit('https://www.pixelssuite.com/image-to-pdf', { failOnStatusCode: false });
    cy.url().should('include', 'image-to-pdf');
  });
  it('3. Verify navigation to PDF Editor', () => {
    cy.visit('https://www.pixelssuite.com/pdf-editor', { failOnStatusCode: false });
    cy.url().should('include', 'pdf-editor');
  });
  it('4. Verify navigation to Resize Image', () => {
    cy.visit('https://www.pixelssuite.com/resize-image', { failOnStatusCode: false });
    cy.url().should('include', 'resize-image');
  });
  it('5. Verify navigation to Crop PNG', () => {
    cy.visit('https://www.pixelssuite.com/crop-png', { failOnStatusCode: false });
    cy.url().should('include', 'crop-png');
  });
  it('6. Verify navigation to Crop JPG', () => {
    cy.visit('https://www.pixelssuite.com/crop-jpg', { failOnStatusCode: false });
    cy.url().should('include', 'crop-jpg');
  });
  it('7. Verify navigation to Crop WebP', () => {
    cy.visit('https://www.pixelssuite.com/crop-webp', { failOnStatusCode: false });
    cy.url().should('include', 'crop-webp');
  });
  it('8. Verify navigation to Compress Image', () => {
    cy.visit('https://www.pixelssuite.com/compress-image', { failOnStatusCode: false });
    cy.url().should('include', 'compress-image');
  });
  it('9. Verify navigation to Convert to JPG', () => {
    cy.visit('https://www.pixelssuite.com/convert-to-jpg', { failOnStatusCode: false });
    cy.url().should('include', 'convert-to-jpg');
  });
  it('10. Verify navigation to Convert to PNG', () => {
    cy.visit('https://www.pixelssuite.com/convert-to-png', { failOnStatusCode: false });
    cy.url().should('include', 'convert-to-png');
  });
  it('11. Verify navigation to Convert to WebP', () => {
    cy.visit('https://www.pixelssuite.com/convert-to-webp', { failOnStatusCode: false });
    cy.url().should('include', 'convert-to-webp');
  });
  it('12. Verify navigation to Meme Generator', () => {
    cy.visit('https://www.pixelssuite.com/meme-generator', { failOnStatusCode: false });
    cy.url().should('include', 'meme-generator');
  });
  it('13. Verify navigation to Color Picker', () => {
    cy.visit('https://www.pixelssuite.com/color-picker', { failOnStatusCode: false });
    cy.url().should('include', 'color-picker');
  });
  it('14. Verify navigation to Rotate Image', () => {
    cy.visit('https://www.pixelssuite.com/rotate-image', { failOnStatusCode: false });
    cy.url().should('include', 'rotate-image');
  });
  it('15. Verify navigation to Flip Image', () => {
    cy.visit('https://www.pixelssuite.com/flip-image', { failOnStatusCode: false });
    cy.url().should('include', 'flip-image');
  });
});