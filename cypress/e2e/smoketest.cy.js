describe('Test suite - conjunto de pruebas', () => {
    
  it('Validar página de inicio', () => {

    cy.visit('http://zero.webappsecurity.com')
    cy.get(".active > img").should('be.visible')
    cy.get('#online_banking_features > :nth-child(1) > h4').contains("Online Banking")
  })

  it('Prueba E2E - transferencia de fondos', () => {
    cy.visit('http://zero.webappsecurity.com')
    cy.get('#signin_button').should('be.visible').click()
    cy.get('#user_login').should('be.visible').type('username')
    cy.get('#user_password').should('be.visible').type('password')
    cy.get('.btn').should('be.visible').click()

    cy.get('#transfer_funds_tab > a').click()

    //desplegar el valor de la lista y seleccionar el valor deseado
    cy.get('#tf_fromAccountId').select('1').should('be.visible')
    cy.get('#tf_toAccountId').select('5').should('be.visible')
    cy.get('#tf_amount').type('300').should('be.visible')
    cy.get('#tf_description').type('Transferencias de test por $300').should('be.visible')
    cy.get('#btn_submit').should('be.visible').click()
    cy.get('#btn_submit').click().should('be.visible')
    cy.get('.alert').contains('You successfully submitted your transaction.').should('be.visible')

  })

})