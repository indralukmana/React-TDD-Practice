describe('Adding a restaurant', () => {
  it('displays the restaurant in the list', () => {
    const restaurantName = 'warung sate';
    cy.visit('http://localhost:1234');

    cy.get('[data-test="addRestaurantButton"]')
      .click();

    cy.get('[data-test="newRestaurant]')
      .type(restaurantName);

    cy.get('[data-test="saveNewRestaurant"]')
      .click();

    cy.contains(restaurantName);
  });
});
