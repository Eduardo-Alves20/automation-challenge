describe('API Trello', () => {
  it('Validar status e exibir nome da lista', () => {
    cy.request({
      method: 'GET',
      url: 'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a'
    }).then((response) => {
      expect(response.status).to.eq(200);

      cy.log(response.body.data.list.name);

      expect(response.body.data.list.name)
        .to.not.be.empty;
    });
  });
});
