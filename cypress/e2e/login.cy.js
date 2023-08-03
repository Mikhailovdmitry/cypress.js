
describe('проверка авторизации', function () {
    
    it('правильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         })
         it('проверка кнопки забыли пароль', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#forgotEmailButton').click();
            cy.get('#mailForgot').type('svinkapeppa@mail.ru');
            cy.get('#restoreEmailButton').click();
            cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible')
             })
             it('правильный логин и неправильный пароль', function () {
                cy.visit('https://login.qa.studio/');
                cy.get('#mail').type('german@dolnikov.ru');
                cy.get('#pass').type('hahahabred123');
                cy.get('#loginButton').click();
                cy.wait(1000)
                cy.contains('Такого логина или пароля нет').should('be.visible');
                cy.get('#exitMessageButton > .exitIcon').should('be.visible');
                 })
                 it('неправильный логин и правильный пароль', function () {
                    cy.visit('https://login.qa.studio/');
                    cy.get('#mail').type('germanitata@dolnikov.ru');
                    cy.get('#pass').type('iLoveqastudio1');
                    cy.get('#loginButton').click();
                    cy.contains('Такого логина или пароля нет').should('be.visible');
                    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
                     })
                     it('проверка ошибки валидации', function () {
                        cy.visit('https://login.qa.studio/');
                        cy.get('#mail').type('germanitatadolnikov.ru');
                        cy.get('#pass').type('iLoveqastudio1');
                        cy.get('#loginButton').click();
                        cy.contains('Нужно исправить проблему валидации').should('be.visible');
                        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
                         })
                         it('проверка на приведение к строчным буквам', function () {
                            cy.visit('https://login.qa.studio/');
                            cy.get('#mail').type('GerMan@dolnikov.ru');
                            cy.get('#pass').type('iLoveqastudio1');
                            cy.get('#loginButton').click();
                            cy.contains('Авторизация прошла успешно').should('be.visible');
                            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
                             })
})
