class Home{
    getemail(){return cy.get("#userEmail")}
    getpass(){return cy.get("#userPassword")}
  
    getshopbutton(){return  cy.get("#login")}
}
export default Home;