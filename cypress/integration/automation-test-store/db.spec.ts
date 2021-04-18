describe('DB', () => {
    it('test', () => {
        // cy.sqlServer('select * from Persons').then(function (result) {
        //     console.log(result);
        // });
        cy.sqlServer('select LastName from Persons where PersonID = 954').then((FirstName) => {
            expect(FirstName).to.equal("Eugene");
        });
        cy.sqlServer("select FirstName from Persons where PersonID = 954").then((LastName) => {
            expect(LastName).to.equal("Vakerin");
        });

        cy.sqlServer("select * from Persons where PersonID = 954").then((row) => {
            expect(row).to.include(954);
        });

        cy.sqlServer("select * from Persons").then((rows) => {
            console.log(rows);

        });


    })
})