Cypress.Commands.add("findElement", (locator, nameOfElement) => {
    cy.log(nameOfElement);
    return cy.get(locator, {log: false});
});

Cypress.Commands.add("findAndType", (locator, nameOfElement, value) => {
    cy.log(`Type to ${nameOfElement}`);
    cy.get(locator).type(value);
});