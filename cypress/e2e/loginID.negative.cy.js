describe("negative login tests", () => {

  // Вход в систему с использованием тестовых учетных данных.
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.contains("Log in").click();
  });

  // Не вводим никакие данные.
    it("NotEmail NotPassword", () => {
      cy.contains("Submit").click();
      cy.url().should('eq', 'http://localhost:3000/');
    });

    // Не вводим пароль
    it("NotEmail NotPassword", () => {
      cy.contains("Submit").click();
      cy.get('#mail').type(Cypress.env('email'));
      cy.url().should('eq', 'http://localhost:3000/');
    });

    it("NotEmail NotPassword", () => {
      cy.contains("Submit").click();
      cy.get('#mail').type(Cypress.env('email'));
      cy.get('#pass').type('wrongpassword');
      cy.contains("Submit").click();
      cy.contains('Неправильая почта или пароль');
    
    });
});


