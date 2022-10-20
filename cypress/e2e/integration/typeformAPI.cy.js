const API_URL = Cypress.env('API_BASE_URL')
const authorization = `Bearer ${Cypress.env('TYPEFORM_ACESS_TOKEN')}`

it('Usuario Autorizado', () => {
    cy.request({
        method: 'GET',
        url: `${API_URL}me`,
        headers: { authorization }
    }).should(({ status, body }) => {
        const { alias, email, language } = body
        expect(status).to.eq(200)
        expect(alias).to.eq(Cypress.env('userAlias'))
        expect(email).to.eq(Cypress.env('username'))
        expect(language).to.eq(Cypress.env('language'))
    })
})