describe("JSON Object Examples", () => {
	it("Json Object Examples", () => {
		const exampleObject = { key1: "Time", key2: "Jons" }; // Simple Object
		const exampleArrayOfValues = ["Sophie", "Rose", "Howard"]; // Array
		const exampleArrayOfObjects = [
			{
				name: "Luke",
			},
			{
				name: "Eugene",
			},
			{
				name: "Marta",
			},
		];
		const users = {
			firstName: "Joe",
			lastName: "Blogs1",
			age: 30,
			students: [
				{
					firstName: "Jim",
					lastName: "Blogs2",
				},
				{
					firstName: "Sarah",
					lastName: "Parker",
				},
			],
		}; // Complex Object + Array

		//Simple object
		cy.log(exampleObject["key1"]);
		cy.log(exampleObject["key2"]);
		cy.log(exampleObject.key2);

		//Array
		cy.log(exampleArrayOfValues[0]);
		cy.log(exampleArrayOfValues[1]);

		//Complex object + Array
		cy.log(users.lastName);
		cy.log(users.students[0].lastName);

		exampleArrayOfObjects.forEach((obj) => {
			Object.entries(obj).forEach(([key, value]) => {
				cy.log(value);
			});
		});

		exampleArrayOfObjects.forEach((prop) => {
			console.log(prop.name);
		});
	});
});
