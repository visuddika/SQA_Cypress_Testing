describe('Image Converter Functionality', () => {
  Cypress.on('uncaught:exception', () => false);
  const testImage = 'cypress/fixtures/test-image.png';

  beforeEach(() => {
    cy.visit('https://www.pixelssuite.com/convert-to-jpg', { failOnStatusCode: false });
  });

  it('16. Verify Select files button is visible on Converter', () => {
    cy.get('input[type="file"]', { timeout: 15000 }).should('exist');
  });
  it('17. Verify supported formats text is visible', () => {
    cy.contains('Supported', { timeout: 15000 }).should('be.visible');
  });
  it('18. Verify image upload in Image Converter', () => {
    cy.get('input[type="file"]').selectFile(testImage, { force: true });
    cy.contains('Clear', { timeout: 20000 }).should('be.visible');
  });
  it('19. Verify Convert section appears after upload', () => {
    cy.get('input[type="file"]').selectFile(testImage, { force: true });
    cy.contains('Convert', { timeout: 20000 }).should('be.visible');
  });
  it('20. Verify Preview section appears after upload', () => {
    cy.get('input[type="file"]').selectFile(testImage, { force: true });
    cy.contains('Preview', { timeout: 20000 }).should('be.visible');
  });
  it('21. Verify Format dropdown is visible', () => {
    cy.get('input[type="file"]').selectFile(testImage, { force: true });
    cy.contains('Format', { timeout: 20000 }).should('be.visible');
  });
  it('22. Verify Download button appears in Converter', () => {
    cy.get('input[type="file"]').selectFile(testImage, { force: true });
    cy.contains('Download', { timeout: 20000 }).should('be.visible');
  });
  it('23. Verify Download button is interactable', () => {
    cy.get('input[type="file"]').selectFile(testImage, { force: true });
    cy.contains('Download', { timeout: 20000 }).should('not.be.disabled');
  });
  it('24. Verify Clear button works in Converter', () => {
    cy.get('input[type="file"]').selectFile(testImage, { force: true });
    cy.contains('Clear', { timeout: 20000 }).click({ force: true });
    cy.get('input[type="file"]', { timeout: 15000 }).should('exist');
  });
  it('25. Verify page returns to initial state after Clear', () => {
    cy.get('input[type="file"]').selectFile(testImage, { force: true });
    cy.contains('Clear', { timeout: 20000 }).click({ force: true });
    cy.contains('Select files', { timeout: 15000 }).should('be.visible');
  });
});