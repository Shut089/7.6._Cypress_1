it('login test', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Log in').click();
    cy.get('#mail').type('test@test.com');
    cy.get('#pass').type('test');
    cy.contains('Submit').click();
    //cy.get('button.btn-success').click();
    cy.contains('Добро пожаловать test@test.com');
    //cy.get('#responsive-navbar-nav div.ml-auto').should('contain', 'Добро пожаловать test@test.com');
  })