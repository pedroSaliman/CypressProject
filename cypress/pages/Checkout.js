class Checkout{

getindia(){return cy.get('.form-group > .input')}
getclick(){return cy.get(':nth-child(3) > .ng-star-inserted')}
getzip(){return cy.get(':nth-child(2) > :nth-child(2) > .input')}
getcopon(){return cy.get(':nth-child(4) > :nth-child(1) > .input')}
getcoponclick(){return cy.get(':nth-child(2) > .btn')}
getsubmit(){return cy.get('.btnn')}
getdownload(){return cy.get(".btn-primary")}




}
export default Checkout;