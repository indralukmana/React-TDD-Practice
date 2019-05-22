describe('Adding a restaurant', () => {
  it('displays the restaurant in the list', () => {
    const restaurantName = 'warung sate';
    cy.visit('http://localhost:1234');

    cy.get('[data-test="newRestaurantName"]')
      .should('not.exist');

    cy.get('[data-test="saveNewRestaurantButton"]')
      .should('not.exist');

    cy.get('[data-test="addRestaurantButton"]')
      .click();

    cy.get('[data-test="newRestaurantName"]')
      .type(restaurantName);

    cy.get('[data-test="saveNewRestaurantButton"]')
      .click();

    cy.get('[data-test="themeToggleButton"]')
      .click();

    cy.get('[data-test="newRestaurantName"]')
      .should('not.exist');

    cy.get('[data-test="saveNewRestaurantButton"]')
      .should('not.exist');

    cy.contains(restaurantName);
  });
});
