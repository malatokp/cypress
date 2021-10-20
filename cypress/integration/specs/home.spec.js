import homePage from "../page-objects/home-page";

describe('Home tests', () => {
    it('Open the home page and verify the url and the title', () => {
        //open the home page
        homePage.open();

        //assert the url
        cy.url().should("include", "automationbro")

        //assert the title
        cy.title().should("eq", "Practice E-Commerce Site – Automation Bro")
    });

    it('click the Get started button and asserts the url', () => {
        //click the button
        homePage.getStartedButton.click();

        //assert the url
        cy.url().should('include', '#get-started');
    });

    it('get the text of the heading and assert the value', () => {
        //get the text
        homePage.headingText.should($heading => {
            expect($heading.text()).to.eq('Think different. Make different.');
        })

        //assert the value
        // cy
        //     .get('h1.elementor-heading-title')
        //     .should("have.text", "Think different. Make different.")
        //     .and("have.class", "elementor-size-default");
    });

    it('very the text of the first menu link item', () => {
        homePage.primaryMenu.find('li').first().should('have.text', 'Home');
    })

    it('very the length and the text of all the menu link items ',  () => {
        const menuLinksText = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account"
        ];

        homePage.menuItemListsElement.should("have.length", 6)
        homePage.menuItemListsElement.each((item, index, list) => {
            //expect(list).to.have.length(6);
            //cy.wrap(item).should("contain.text", menuLinksText[index])
            // cy.wrap(item).invoke('text').then((text) => {
            //     console.log(text)
            // });
            expect(Cypress.$(item).text()).to.eq(menuLinksText[index])
            //console.log('***', Cypress.$(item).text())
        })
    });
})