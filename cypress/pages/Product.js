class Product{
getcart(){return cy.get(".card > .card-body > .w-10")}
getcheckout(){return cy.get(':nth-child(4) > .btn')}
getprice(){return cy.get('.items > .infoWrap > .prodTotal > p')}
gettotalprice(){return cy.get(':nth-child(2) > .value')}
getfinalcheck(){return cy.get('.subtotal > ul > :nth-child(3) > .btn')}
}
export default Product;