
describe('suite for finding locators on landing page', () => {

    beforeEach(() => {
        cy.visit('/');
      })
      
    it('page theme dropdown', () => {

        cy.get('button.select-button').should("have.length", 1);
    })

    it('layout dropdown', () => {

        cy.get('a[title="Layout"]').should("have.length", 1);   
    })

    it('auth dropdown', () => {

        cy.get('a[title="Auth"]').should("have.length", 1);   
    })

    it('search button', () => {

        cy.get('button.start-search').should("have.length", 1);   
    })
})


describe('suite for forms on the form layouts page', () => {
   
    beforeEach(() => {
        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();
      })

    describe('suite for inline form locators', () => {
    
        it('inline form locators', () => {

            cy.log('title of inline form');
            cy.contains('Inline form').should("have.length", 1);
            cy.log('first input field');
            cy.get('[placeholder="Jane Doe"]').should("have.length", 1);
            //либо второй вариант
            cy.get('form>input:nth-child(1)').should("have.length", 1);
            cy.log('email input field');
            cy.get('form>input[placeholder="Email"]').should("have.length", 1);
            //либо второй вариант
            cy.get('form>input:nth-child(2)').should("have.length", 1);
            cy.log('checkbox remember me');
            cy.contains('nb-card', 'Inline form').find('nb-checkbox').should("have.length", 1);;
            cy.log('submit button');
            cy.contains('nb-card','Inline form').find('[type="submit"]').should("have.length", 1);
        })
    })

    describe('suite for using the grid form locators', () => {

        it('using the grid form locators', () => {

            cy.log('title of using the grid form');
            cy.contains('Using the Grid').should("have.length", 1);
            cy.log('email input field');
            cy.get('input#inputEmail1').should("have.length", 1);
            cy.log('password input field');
            cy.get('input#inputPassword2').should("have.length", 1);
            cy.log('option 1 radio button');
            cy.contains('span','Option 1').should("have.length", 1);
            cy.log('option 2 radio button');
            cy.contains('span','Option 2').should("have.length", 1);
            cy.log('option 3 radio button');
            cy.contains('span','Disabled Option').should("have.length", 1);
            cy.log('sign in button');
            cy.contains('[status="primary"]','Sign in').should("have.length", 1);
        })
    })

    describe('suite for form without labels locators', () => {

        it('form without labels locators', () => {

            cy.log('title of form without labels');
            cy.contains('Form without labels').should("have.length", 1);
            cy.log('recipents input field');
            cy.get('input[placeholder="Recipients"]').should("have.length", 1);
            cy.log('subject input field');
            cy.get('input[placeholder="Recipients"]').should("have.length", 1);
            cy.log('message text field');
            cy.get('textarea[placeholder="Message"]').should("have.length", 1);
            cy.log('send button');
            cy.contains('[status="success"]','Send').should("have.length", 1);
        })
    })

    describe('suite for block form locators', () => {

        it('block form locators', () => {

            cy.log('title of block form');
            cy.contains('Block form').should("have.length", 1);
            cy.log('first name input field');
            cy.get('input#inputFirstName').should("have.length", 1);
            cy.log('last name input field');
            cy.get('input#inputLastName').should("have.length", 1);
            cy.log('email input field');
            cy.get('input#inputEmail').should("have.length", 1);
            cy.log('website input field');
            cy.get('input#inputWebsite').should("have.length", 1);
            cy.log('submit button');
            cy.contains('nb-card','Block form').find('[type="submit"]').should("have.length", 1);
        })
    })
});