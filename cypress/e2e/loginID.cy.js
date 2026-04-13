describe('My tests', () => {

// Вход в систему с использованием тестовых учетных данных.
    beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.contains('Log in').click();
    cy.get('#mail').type(Cypress.env('email'));
    cy.get('#pass').type(Cypress.env('password'));
    cy.contains('Submit').click();
  });

// Проверка отображения приветствия с email пользователя после успешного входа в систему.
it('login test', () => {
    cy.contains('Добро пожаловать ' + Cypress.env('email'));
  });

  //Добавление к книге с отметкой в "избранную". 
it('Add book test favorite', function() {
cy.contains('Add new').click();
cy.get('#title').type('Test book');
cy.contains('Description').type('Test description');
cy.contains('Author').type('Test author');
cy.get('[name="fileCover"]').selectFile('cypress/fixtures/Book.jpg')
cy.get('[name="favorite"]').check();
cy.contains('Submit').click();
cy.contains('Test book');
});

// Добавление к книге без отметки "избранное". 
it('Add book test notfavorite', function() {
cy.contains('Add new').click();
cy.get('#title').type('Rasputin');
cy.contains('Description').type('Test description');
cy.contains('Author').type('Test author');
cy.get('[name="fileCover"]').selectFile('cypress/fixtures/rasputin.jpeg')
cy.contains('Submit').click();
cy.contains('Rasputin');
});

// Проверка входав раздел "избранное".
it('Add to favorite', function() {
  cy.contains('Добро пожаловать test@test.com');
  cy.contains('Favorite').click();
  cy.contains('Please add some book to favorit on home page');
});

it('test favorite', function() {
cy.contains('Add new').click();
cy.get('#title').type('Первая победа');
cy.contains('Description').type('Test description');
cy.contains('Author').type('Test author');
cy.get('[name="fileCover"]').selectFile('cypress/fixtures/win.jpeg')
cy.get('[name="favorite"]').check();
cy.contains('Submit').click();
cy.contains('Первая победа');
cy.contains('Favorite').click();
cy.contains('Первая победа');
});

});

