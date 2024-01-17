describe('Context API Demo', () => {
    it('should toggle theme on button click', () => {
      cy.visit('/');
      cy.contains('Toggle Theme').click();
      cy.contains('Current Theme: dark');
    });
  });
  