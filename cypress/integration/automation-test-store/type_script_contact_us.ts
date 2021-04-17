import sqlServer from "cypress-sql-server";

describe("Test Contact Us form via Automation Test Store", () => {

    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get(".info_links_footer > :nth-child(5) > a").click();
        cy.get("#ContactUsFrm_first_name").type("First Name");
        cy.get("#ContactUsFrm_email").type("Email@gmail.com");
        cy.get("#ContactUsFrm_email").should('have.attr', 'name', 'email')
        cy.get("#ContactUsFrm_enquiry").type("Comment");
        cy.get(".col-md-6 > .btn").click();
        cy.get('.mb40 > :nth-child(3)')
            .should('have.text', 'Your enquiry has been successfully sent to the store owner!');
    });
});
