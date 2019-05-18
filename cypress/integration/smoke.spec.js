import { isTag } from 'postcss-selector-parser';

describe('Smoke Test', () => {
  it('Test welcom message', () => {
    cy.visit('http://localhost:1234').contains('Hello TDD!');
  });
});
