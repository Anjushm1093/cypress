
describe('launch my app',()=> {

    it('app testing',()=> 
    {
        cy.visit('https://www.localz.com')
    
        
        cy.get('#hs_cos_wrapper_site_search').invoke('attr', 'style', 'visibility: visible').within (()=> {
            
            cy.get('.hs-search-field__input').type('Platform')
            
            //.should('have.value', 'Platform device')
            
           // cy.get('.hs-search-field__input').click({ waitForAnimations: false })

        })

    })
})    