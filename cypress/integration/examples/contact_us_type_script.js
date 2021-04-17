describe("Test Contact Us form via WebdriverUni", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        //cy.visit("http://www.webdriveruniversity.com/");
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        //cy.xpath("//h1[contains(text(),'CONTACT US')]").click();
        cy.xpath("//input[@name='first_name']").type("Eugene");
        cy.xpath("//input[@name='last_name']").type("Vakerin");
        cy.xpath("//input[@name='email']").type("test@test.ua");
        cy.xpath("//textarea[@name='message']").type("message");
        cy.xpath("//input[@value='SUBMIT']").click();
    });

    it("Should NOT be able to submit a successful submission via contact us form as all fields are required", () => {

    });
});