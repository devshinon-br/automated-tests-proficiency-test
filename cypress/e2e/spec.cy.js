describe("Teste funcional e de integração: calculadora de soma", function() {
    it("Deve conseguir acessar a tela inicial", function() {
        cy.request("http://localhost:3000");
    });

    it("Deve somar dois numeros corretamente", function() {
        cy.visit("http://localhost:3000");
        cy.get("#numero1").type("2");
        cy.get("#numero2").type("3");
        cy.get("#calcular").click();
        cy.get("#resultado").should("have.value", "5");
    });
});
