describe("base test", () => {
  it("searches for jaguar", () => {
    cy.visit("/")
    cy.get(".SearchInput").type("jaguar")
    cy.get(".HitCount")
      .should("have.html", "1 result")
      .should("contain", "1 result")
  })
})
