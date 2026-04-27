describe('Compress Image Functionality', () => {
  Cypress.on('uncaught:exception', () => false);
  const testImage = 'cypress/fixtures/test-image.png';

  beforeEach(() => {
    cy.visit('https://www.pixelssuite.com/compress-image', { failOnStatusCode: false });
  });

  it('41. Verify Compress Image page URL', () => {
    cy.url().should('include', 'compress-image');
  });
  it('42. Verify image upload in Compress tool', () => {
    cy.get('input[type="file"]').selectFile(testImage, { force: true });
    cy.contains('Clear', { timeout: 20000 }).should('be.visible');
  });
  it('43. Verify Compress section appears', () => {
    cy.get('input[type="file"]').selectFile(testImage, { force: true });
    cy.contains('Compress', { timeout: 20000 }).should('be.visible');
  });
  it('44. Verify Quality slider exists', () => {
    cy.get('input[type="file"]').selectFile(testImage, { force: true });
    cy.get('input[type="range"]', { timeout: 20000 }).should('exist');
  });
  it('45. Verify Compressed Preview section appears', () => {
    cy.get('input[type="file"]').selectFile(testImage, { force: true });
    cy.contains('Preview', { timeout: 20000 }).should('be.visible');
  });
  it('46. Verify Clear button works in Compress tool', () => {
    cy.get('input[type="file"]').selectFile(testImage, { force: true });
    cy.contains('Clear', { timeout: 20000 }).click({ force: true });
    cy.get('input[type="file"]', { timeout: 15000 }).should('exist');
  });
});