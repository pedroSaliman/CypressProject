/// <reference types="cypress" />

import Home from "../pages/Home";
import Product from "../pages/Product";
import Checkout from "../pages/Checkout";

describe("Test suite",()=>{

    before(function(){
        cy.fixture('ex').then(function(datadriven){
    this.datadriven=datadriven
            cy.log(datadriven)
            cy.visit("https://rahulshettyacademy.com/client");



               })
    })
    it("Login",function(){
        var sum=0;
        const home=new Home();
        const product=new Product();
        const check=new Checkout();

        // cy.get('.btn1').should("be.visible").click()
        // cy.get('#firstName').should("be.empty").type("yasmin")
        // cy.get('#lastName').should("be.empty").type("ahmed")
        // cy.get('#userEmail').should("be.empty").type("yasminmohmd@gmail.com")
        // cy.get('#userMobile').should("be.empty").type("1122334455")
        // cy.get('.custom-select').select("Student")
        // cy.get(':nth-child(3) > .mt-3').click()
        // cy.get('#userPassword').should("be.empty").type("2221997Mn$")
        // cy.get('#confirmPassword').should("be.empty").type("2221997Mn$")
        // cy.get('.col-md-1').click()
        // cy.get('#login').should("be.visible").click()
        // cy.get('.btn').should("be.visible").click()








      home.getemail().should("be.empty").type(this.datadriven.email)
        home.getpass().should("be.empty").type(this.datadriven.pass)
        home.getshopbutton().should("be.visible").click()
        
        
            
                product.getcart().click({multiple:true})
                product.getcheckout().should("be.visible").click()
                product.getprice().each(($el,index,$list)=>{
                    let txt=$el.text();
                    let result=txt.split(" ");
                    result=result[1].trim();
                    sum=sum+Number(result);
                    
                    
                 

                }).then(function(){
                    cy.log(sum)
                })
                product.gettotalprice().then(function(ele){
                  const message=ele.text();
                  let sp=message.replace("$","")  
                  cy.log(sp)
                 expect(Number(sp)).to.eq(sum)
                    
                })
                product.getfinalcheck().should("be.visible").click()
                cy.wait(5000)
                check.getindia().type(this.datadriven.country,{delay:100})
                check.getclick().click()
                check.getzip().type(this.datadriven.cardnumber)
                check.getcopon().should("be.visible").should("be.empty").type(this.datadriven.copon)
                
                check.getcoponclick().click()
                check.getsubmit().click({force:true})   
                cy.wait(2000) 
                check.getdownload().click()         
              
        
    })
})