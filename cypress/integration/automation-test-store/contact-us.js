describe("Test Contact Us form via Automation Test Store", () => {
  it("Should be able to submit a successful submission via contact us form", () => {
    cy.visit("https://www.automationteststore.com/", { log: true });
    cy.get(".info_links_footer > :nth-child(5) > a", { log: false }).click();

    //cy.findElement("#ContactUsFrm_first_name", "First Name Input Field").type("First Name");
    // cy.findAndType(
    //   "#ContactUsFrm_first_name",
    //   "'First Name' input field",
    //   "First Name",
    // );

    cy.get("#ContactUsFrm_first_name", { log: false }).type("First Name").then((value)=>{
      cy.log(`${value}`);
    });
    cy.get("#ContactUsFrm_email", { log: false }).type("Email@gmail.com");
    cy.get("#ContactUsFrm_enquiry", { log: false }).type("Comment");
    cy.get(".col-md-6 > .btn", { log: false }).click();
  });
});
