describe('Support Form Tests', () => {
it('open the suport form  page and fills in the form', () => {
    cy.visit('http://practice.automationbro.com/support-form/');

    //text input
    cy.get('#evf-680-field_lVizlNhYus-1').type("Automation bro")
    cy.get('#evf-680-field_XYnMdkQDKM-3').type("test.auto@mail.com")
    cy.get('#evf-680-field_xJivsqAS2c-2').type("Unable to access app")

    //dropdown
    cy.get('#evf-680-field_82kaAPhrnW-6')
        .select("Technical Team");

    //checkbox
    cy.get('#evf-680-field_sOAJfxP1Lf-7 input')
        .check([
            "Integration Issue",
            "Hardware Issue"
        ]);

    //date-picker
    cy.get('#evf-680-field_s1KysSbUW6-8')
        .click();
    cy.get('.dayContainer span:nth-child(15)')
        .click();

    //text area
    cy.get('#evf-680-field_YalaPcQ0DO-4')
        .type("Your app bla bla");

    //button
    cy.get('#evf-submit-680')
        .click();

    //verify success message
    cy.get('.everest-forms-notice').should('contain.text', 'Thanks for contacting us! We will be in touch with you shortly.')
});
})