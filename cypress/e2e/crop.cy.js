describe('Crop Image Functionality', () => {
  Cypress.on('uncaught:exception', () => false);
  const testImage = 'cypress/fixtures/test-image.png';

  beforeEach(() => {
    cy.visit('https://www.pixelssuite.com/crop-png', { failOnStatusCode: false });
  });

  it('34. Verify Crop PNG page URL', () => {
    cy.url().should('include', 'crop-png');
  });
  it('35. Verify image upload in Crop tool', () => {
    cy.get('input[type="file"]').selectFile(testImage, { force: true });
    cy.contains('Clear', { timeout: 20000 }).should('be.visible');
  });
  it('36. Verify Crop configuration section appears', () => {
    cy.get('input[type="file"]').selectFile(testImage, { force: true });
    cy.contains('Crop', { timeout: 20000 }).should('be.visible');
  });
  it('37. Verify Original size text is visible', () => {
    cy.get('input[type="file"]').selectFile(testImage, { force: true });
    cy.contains('Original', { timeout: 20000 }).should('be.visible');
  });
  it('38. Verify X coordinate input exists', () => {
    cy.get('input[type="file"]').selectFile(testImage, { force: true });
    cy.contains('X', { timeout: 20000 }).should('be.visible');
  });
  it('39. Verify Y coordinate input exists', () => {
    cy.get('input[type="file"]').selectFile(testImage, { force: true });
    cy.contains('Y', { timeout: 20000 }).should('be.visible');
  });
  it('40. Verify Clear button works in Crop tool', () => {
    cy.get('input[type="file"]').selectFile(testImage, { force: true });
    cy.contains('Clear', { timeout: 20000 }).click({ force: true });
    cy.get('input[type="file"]', { timeout: 15000 }).should('exist');
  });
});