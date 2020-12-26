describe('Attend to', () => {
  it('GMarket', () => {
    const G_MARKET_ID = Cypress.env('G_MARKET_ID');
    const G_MARKET_PASSWORD = Cypress.env('G_MARKET_PASSWORD');

    cy.visit(
      'https://signinssl.gmarket.co.kr/login/login?url=http://promotion.gmarket.co.kr/Event/pluszone.asp'
    );
    // Get an input, type into it and verify that the value has been updated
    cy.get('#id')
      .type(G_MARKET_ID)
      .should('have.value', G_MARKET_ID);
    cy.get('#pwd')
      .type(G_MARKET_PASSWORD)
      .should('have.value', G_MARKET_PASSWORD);
    cy.get('button[title="login"]')
      .first()
      .click();
    cy.get('iframe#AttendRulletFrame').then(function($iframe) {
      const $body = $iframe.contents().find('body');
      const $win = $iframe[0].contentWindow;
      // Handling alert
      cy.stub($win, 'alert').as('windowAlert');

      cy.wrap($body)
        .find('a.button_start')
        .click();
    });
    cy.get('div.attendance_benefit li a').then(function($buttons) {
      cy.wrap($buttons[0]).click();
      cy.wrap($buttons[1]).click();
      cy.wrap($buttons[2]).click();
    });
  })
})
