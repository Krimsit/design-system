describe('design-system', () => {
  it('button component sizes snapshot', () => {
    // 👇 navigate to target page
    cy.visit('https://example.cypress.io')

    // 📸 tell Chromatic to take a snapshot of the initial page state
    cy.takeSnapshot()

    // 👇 finish the test by opening the dropdown menu
    cy.get('.dropdown:first-of-type > .dropdown-toggle').click()

    // 📸 Chromatic automatically takes a snapshot here, at the end of the test
  })
})
