describe('DB', () => {
    it('test', () => {
        // cy.sqlServer('select * from Persons').then(function (result) {
        //     console.log(result);
        // });
        cy.sqlServer('select * from Persons where PersonID = 954').then((result) => {
            console.log(result)
        })
    })
})