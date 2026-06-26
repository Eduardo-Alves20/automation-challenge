describe('API Trello', () => {

  it('Validar retorno', () => {

    cy.request(
      'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a'
    )
    .then((response) => {

      expect(response.status).to.eq(200);

      cy.log(response.body.data.list.name);

    });

  });

});
