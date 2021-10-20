class HomePage{
    get getStartedButton(){
        return cy.get('#get-started');
    }

    get headingText(){
        return cy.get('h1.elementor-heading-title')
    }

    get primaryMenu(){
        return cy.get(' #primary-menu');
    }

    get menuItemListsElement(){
        return cy.get('#primary-menu [id*=menu-item]');
    }

    open(){
        cy.visit('http://practice.automationbro.com/support-form/');
    }
}

export default new HomePage();