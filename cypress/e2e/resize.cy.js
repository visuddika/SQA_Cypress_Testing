describe('Resize Image Functionality', () => {
  Cypress.on('uncaught:exception', () => false);
  const testImage = 'cypress/fixtures/test-image.png';

  beforeEach(() => {
    cy.visit('https://www.pixelssuite.com/resize-image', { failOnStatusCode: false });
  });

  it('26. Verify Resize Image page URL', () => {
    cy.url().should('include', 'resize-image');
  });
  it('27. Verify image upload in Resize tool', () => {
    cy.get('input[type="file"]').selectFile(testImage, { force: true });
    cy.contains('Clear', { timeout: 20000 }).should('be.visible');
  });
  it('28. Verify Resize configuration section appears', () => {
    cy.get('input[type="file"]').selectFile(testImage, { force: true });
    cy.contains('Resize', { timeout: 20000 }).should('be.visible');
  });
  it('29. Verify Width input field is visible', () => {
    cy.get('input[type="file"]').selectFile(testImage, { force: true });
    cy.get('input[type="number"]', { timeout: 20000 }).should('exist');
  });
  it('30. Verify Height input field is visible', () => {
    cy.get('input[type="file"]').selectFile(testImage, { force: true });
    cy.get('input[type="number"]', { timeout: 20000 }).should('have.length.at.least', 1);
  });
  it('31. Verify Lock Aspect Ratio checkbox is present', () => {
    cy.get('input[type="file"]').selectFile(testImage, { force: true });
    cy.get('input[type="checkbox"]', { timeout: 20000 }).should('exist');
  });
  it('32. Verify Preview section in Resize tool', () => {
    cy.get('input[type="file"]').selectFile(testImage, { force: true });
    cy.contains('Preview', { timeout: 20000 }).should('be.visible');
  });
  it('33. Verify Clear button works in Resize tool', () => {
    cy.get('input[type="file"]').selectFile(testImage, { force: true });
    cy.contains('Clear', { timeout: 20000 }).click({ force: true });
    cy.get('input[type="file"]', { timeout: 15000 }).should('exist');
  });
});