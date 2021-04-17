// type definitions for Cypress object "cy"
/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

declare namespace Cypress {
    interface Chainable {
        findAndType(locator: string, nameOfElement: string, value: string): Chainable<Element>

        sqlServer(value: string): Chainable<Object>

        sqlServerPro(value: string): Chainable<Object>
    }
}
