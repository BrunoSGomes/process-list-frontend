describe('Process List page tests', () => {
  it('Should list all process successfully', () => {
    cy.intercept('**process-list**', {
      fixture: 'process-list.json'
    }).as('processList')
    cy.visit('')
    cy.wait('@processList')
    cy.get('.mdc-data-table__content').children().should('have.length', 2)
  })

  it('Should open process history successfully', () => {
    cy.intercept('**process-list**', {
      fixture: 'process-list.json'
    }).as('processList')
    cy.visit('')
    cy.wait('@processList')

    cy.intercept('**get-process-history/**', {
      fixture: 'process-history.json'
    }).as('getProcessHistory')
    cy.contains('Ouvidoria')
      .parent()
      .find('button[aria-label="Abrir processo"]')
      .click()
      .wait('@getProcessHistory')
    cy.contains('Histórico do processo:')
  })
})
