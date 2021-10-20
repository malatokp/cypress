describe('Intercept DEMO', () => {
    it('Initial Validation ', () => {
        cy.visit('https://example.cypress.io/todo')
        cy.get('.todo-list li')
            .should('have.length', 2)
            .and('contain', 'Pay electric bill')
            .and('contain', 'Walk the dog');
    });

    it('Mocked API ', () => {

    });
})