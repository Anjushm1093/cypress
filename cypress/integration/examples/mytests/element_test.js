
describe('launch my app',()=> {

    it('app testing',()=> 
    {
        cy.visit('https://www.localz.com')
        cy.contains('Platform')
        cy.contains('Platform').click()
        cy.url().should('include','/platform')

    })
})
