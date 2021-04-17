describe("Test Contact Us form via Automation Test Store", () => {

    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get(".info_links_footer > :nth-child(5) > a").click();

        //cy.findElement("#ContactUsFrm_first_name", "First Name Input Field").type("First Name");
        // cy.findAndType(
        //     "#ContactUsFrm_first_name",
        //     "'First Name' input field",
        //     "Eugene",
        // );

        cy.get("#ContactUsFrm_first_name").type("First Name");
        cy.get("#ContactUsFrm_email").type("Email@gmail.com");
        cy.get("#ContactUsFrm_enquiry").type("Comment");
        cy.get(".col-md-6 > .btn").click();
    });
});
