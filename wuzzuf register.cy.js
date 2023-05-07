
    describe('register functionality with a valid data', function () {

       it(' enter a valid data  ', function () {
            cy.visit('https://wuzzuf.net/register')
            cy.get('#firstname').type('mohamed')                                                 
            cy.get('#lastname').type('ghazal')                                                
            cy.get('#email').type('mohamed.ghazal'+ Math.floor(Date.now() * Math.random())+'@yahoo.com')                      
            cy.get('.css-1xmsobw').type('mooghazal')
            cy.get('.css-1a96k50').type('quality software engineer,  software testing{enter}')
            cy.get('.css-6lejne').trigger('click');
            cy.url().should('eq','https://wuzzuf.net/setup/career-interests?sut=reg&login=1')
       })
       it(' enter a valid data and click on eye icon  ', function () {
        cy.visit('https://wuzzuf.net/register')
        cy.get('#firstname').type('mohamed')                                                 
        cy.get('#lastname').type('ghazal')                                                
        cy.get('#email').type('mohamed.ghazal'+ Math.floor(Date.now() * Math.random())+'@yahoo.com')                      
        cy.get('.css-1xmsobw').type('mooghazal')
        cy.get('.css-190t3pl').click()
        cy.get('.css-1xmsobw').should('have.value','mooghazal')
      })
       it(' enter email adress contains numbers(not used  before)  ', function () {
           cy.visit('https://wuzzuf.net/register')
           cy.get('#firstname').type('mohamed')                                                 
           cy.get('#lastname').type('ghazal')                                                
           cy.get('#email').type( Math.floor(Date.now() * Math.random())+'@yahoo.com')               
           cy.get('.css-1xmsobw').type('mooghazal')
           cy.get('.css-1a96k50').type('quality software engineer,  software testing{enter}')
           cy.get('.css-6lejne').trigger('click');
           cy.url().should('eq','https://wuzzuf.net/setup/career-interests?sut=reg&login=1')
       })
       it(' password field accept special chracters   ', function () {
            cy.visit('https://wuzzuf.net/register')
            cy.get('#firstname').type('mohamed')                                                 
            cy.get('#lastname').type('ghazal')                                                
            cy.get('#email').type('mohamed.ghazal'+ Math.floor(Date.now() * Math.random())+'@yahoo.com')                      
            cy.get('.css-1xmsobw').type('@#$%^&*(')
            cy.get('.css-1a96k50').type('quality software engineer,  software testing{enter}')
            cy.get('.css-6lejne').trigger('click');
            cy.url().should('eq','https://wuzzuf.net/setup/career-interests?sut=reg&login=1')
    })
       it(' password field accept chracters &numbers 8 or more than    ', function () {
            cy.visit('https://wuzzuf.net/register')
            cy.get('#firstname').type('mohamed')                                                 
            cy.get('#lastname').type('ghazal')                                                
            cy.get('#email').type('mohamed.ghazal'+ Math.floor(Date.now() * Math.random())+'@yahoo.com')                      
            cy.get('.css-1xmsobw').type('1234%$#@')
            cy.get('.css-1a96k50').type('quality software engineer,  software testing{enter}')
            cy.get('.css-6lejne').trigger('click');
            cy.url().should('eq','https://wuzzuf.net/setup/career-interests?sut=reg&login=1')
       })
       it(' password field accept more than 8 special chracters   ', function () {
            cy.visit('https://wuzzuf.net/register')
            cy.get('#firstname').type('mohamed')                                                 
            cy.get('#lastname').type('ghazal')                                                
            cy.get('#email').type('mohamed.ghazal'+ Math.floor(Date.now() * Math.random())+'@yahoo.com')                      
            cy.get('.css-1xmsobw').type('@#$%^&*(@#$')
            cy.get('.css-1a96k50').type('quality software engineer,  software testing{enter}')
            cy.get('.css-6lejne').trigger('click');
            cy.url().should('eq','https://wuzzuf.net/setup/career-interests?sut=reg&login=1')
    })
       it(' choose more than two jobs  ', function () {
           cy.visit('https://wuzzuf.net/register')
           cy.get('#firstname').type('mohamed')                                                 
           cy.get('#lastname').type('ghazal')                                                
           cy.get('#email').type('mohamed.ghazal'+ Math.floor(Date.now() * Math.random())+'@yahoo.com')                      
           cy.get('.css-1xmsobw').type('mooghazal')
           cy.get('.css-1a96k50').type('quality software engineer,software testing,accointing,retail, real state {enter}')
           cy.get('.css-6lejne').trigger('click');
           cy.url().should('eq','https://wuzzuf.net/setup/career-interests?sut=reg&login=1')
          })
        it(' enter a valid data using uppercase  ', function () {
            cy.visit('https://wuzzuf.net/register')
            cy.get('#firstname').type('MOHAMED')                                                 
            cy.get('#lastname').type('GHAZAL')                                                
            cy.get('#email').type('MOHAMED.GHAZAL'+ Math.floor(Date.now() * Math.random())+'@yahoo.com')                      
            cy.get('.css-1xmsobw').type('MOOGHAZAL')
            cy.get('.css-1a96k50').type('SOFTWARE QUALITY ENGINEER,SOFTWARE TESTING{enter}')
            cy.get('.css-6lejne').trigger('click');
            cy.url().should('eq','https://wuzzuf.net/setup/career-interests?sut=reg&login=1')
          })
        it(' enter a valid data using uppercase &lowercase ', function () {
            cy.visit('https://wuzzuf.net/register')
            cy.get('#firstname').type('MoHaMeD')                                                 
            cy.get('#lastname').type('GaZaL')                                                
            cy.get('#email').type('MOHAMED.ghazal'+ Math.floor(Date.now() * Math.random())+'@yahoo.com')                      
            cy.get('.css-1xmsobw').type('MOOGHazal')
            cy.get('.css-1a96k50').type('SOFTWARE QUALITY ENGINEER,software testing{enter}')
            cy.get('.css-6lejne').trigger('click');
            cy.url().should('eq','https://wuzzuf.net/setup/career-interests?sut=reg&login=1')
          })
})
describe('register functionality with invalid data(first name field)', function () {

        it(' leave first name field empty ', function () {
            cy.visit('https://wuzzuf.net/register')                                                 
            cy.get('#lastname').type('ghazal')                                                
            cy.get('#email').type('mohamed.ghazal'+ Math.floor(Date.now() * Math.random())+'@yahoo.com')                      
            cy.get('.css-1xmsobw').type('mooghazal')
            cy.get('.css-1a96k50').type('quality software engineer,  software testing{enter}')
            cy.get('.css-6lejne').trigger('click');
            cy.get('.css-y0dsrb').should('be.visible')
        })
            
        it('first name field have special chracters ', function () {
            cy.visit('https://wuzzuf.net/register')       
            cy.get('#firstname').type('//@#$%')                                            
            cy.get('#lastname').type('ghazal')                                                
            cy.get('.css-y0dsrb').should('be.visible')
        })
            
         it('first name field have number ', function () {
            cy.visit('https://wuzzuf.net/register')       
            cy.get('#firstname').type('12345678')                                            
            cy.get('#lastname').type('ghazal')                                                
            cy.get('.css-y0dsrb').should('be.visible')
         })
         it(' first name field have number&special characters ', function () {
            cy.visit('https://wuzzuf.net/register')       
            cy.get('#firstname').type('1234$#@')                                            
            cy.get('#lastname').type('ghazal')                                                
            cy.get('.css-y0dsrb').should('be.visible')
})
        it('first name field have one character ', function () {
           cy.visit('https://wuzzuf.net/register')       
           cy.get('#firstname').type('12345678')                                            
           cy.get('#lastname').type('g')                                                
           cy.get('.css-y0dsrb').should('be.visible')
        }) 
        it('first name field have one number ', function () {
           cy.visit('https://wuzzuf.net/register')       
           cy.get('#firstname').type('12345678')                                            
           cy.get('#lastname').type('1')                                                
           cy.get('.css-y0dsrb').should('be.visible')
        })
    })
 describe('register functionality with invalid data(last name field)', function () {

         it(' leave last name field empty ', function () {
            cy.visit('https://wuzzuf.net/register')   
            cy.get('#firstname').type('mohamed')                                                                                            
            cy.get('#email').type('mohamed.ghazal'+ Math.floor(Date.now() * Math.random())+'@yahoo.com')                      
            cy.get('.css-1xmsobw').type('mooghazal')
            cy.get('.css-1a96k50').type('quality software engineer,  software testing{enter}')
            cy.get('.css-6lejne').trigger('click');
            cy.get('.css-y0dsrb').should('be.visible')
            })
        it(' last name field have special characters ', function () {
            cy.visit('https://wuzzuf.net/register')
            cy.get('#firstname').type('mohamed')                                                 
            cy.get('#lastname').type('@#$%')                                                
            cy.get('#email').type('mohamed.ghazal'+ Math.floor(Date.now() * Math.random())+'@yahoo.com')     
            cy.get('.css-y0dsrb').should('be.visible')                 
                
            })
        it('last name field have numbers ', function () {
            cy.visit('https://wuzzuf.net/register')
            cy.get('#firstname').type('mohamed')                                                 
            cy.get('#lastname').type('123456')                                                
            cy.get('#email').type('mohamed.ghazal'+ Math.floor(Date.now() * Math.random())+'@yahoo.com')     
            cy.get('.css-y0dsrb').should('be.visible')                 
            })
       it('last name field have numbers&special characters ', function () {
           cy.visit('https://wuzzuf.net/register')
           cy.get('#firstname').type('mohamed')                                                 
           cy.get('#lastname').type('123$#%')                                                
           cy.get('#email').type('mohamed.ghazal'+ Math.floor(Date.now() * Math.random())+'@yahoo.com')        
           cy.get('.css-y0dsrb').should('be.visible')             
             })
       it(' last name field have one characters ', function () {
            cy.visit('https://wuzzuf.net/register')
            cy.get('#firstname').type('mohamed')                                                 
            cy.get('#lastname').type('a')                                                
            cy.get('#email').type('mohamed.ghazal'+ Math.floor(Date.now() * Math.random())+'@yahoo.com')     
            cy.get('.css-y0dsrb').should('be.visible') 
})
       it(' last name field have one number ', function () {
            cy.visit('https://wuzzuf.net/register')
            cy.get('#firstname').type('mohamed')                                                 
            cy.get('#lastname').type('1')                                                
            cy.get('#email').type('mohamed.ghazal'+ Math.floor(Date.now() * Math.random())+'@yahoo.com')     
            cy.get('.css-y0dsrb').should('be.visible') 
 })
 })
describe('register functionality with invalid data(email field)', function () {

       it(' leave mail field empty  ', function () {
           cy.visit('https://wuzzuf.net/register')
           cy.get('#firstname').type('mohamed')                                                 
           cy.get('#lastname').type('ghazal')                                                                      
           cy.get('.css-1xmsobw').type('mooghazal')
           cy.get('.css-1a96k50').type('quality software engineer,  software testing{enter}')
           cy.get('.css-6lejne').click();
           cy.get('.css-6lejne').trigger('click');
           cy.get('.css-y0dsrb').should('be.visible')
    })
        it(' use email that already used before   ', function () {
           cy.visit('https://wuzzuf.net/register')
           cy.get('#firstname').type('mohamed')                                                 
           cy.get('#lastname').type('ghazal')     
           cy.get('#email').type('ghazal.mohamed@yahoo.com')                                                                 
           cy.get('.css-1xmsobw').type('mooghazal')
           cy.get('.css-y0dsrb').should('be.visible')
})
     it(' enter a wrong format in email field ex@ex   ', function () {
           cy.visit('https://wuzzuf.net/register')
           cy.get('#firstname').type('mohamed')                                                 
           cy.get('#lastname').type('ghazal')     
           cy.get('#email').type('ghazal.mohamed@yahoo.')                                                                 
           cy.get('.css-1xmsobw').type('mooghazal')
           cy.get('.css-y0dsrb').should('be.visible')
})
        it(' enter a wrong format in email field ex.com   ', function () {
           cy.visit('https://wuzzuf.net/register')
           cy.get('#firstname').type('mohamed')                                                 
           cy.get('#lastname').type('ghazal')     
           cy.get('#email').type('ghazal.mohamed.com')                                                                 
           cy.get('.css-1xmsobw').type('mooghazal')
           cy.get('.css-y0dsrb').should('be.visible')
})
        it(' enter a wrong format in email field @ex.com   ', function () {
           cy.visit('https://wuzzuf.net/register')
           cy.get('#firstname').type('mohamed')                                                 
           cy.get('#lastname').type('ghazal')     
           cy.get('#email').type('@yahoo.com')                                                                 
           cy.get('.css-1xmsobw').type('mooghazal')
           cy.get('.css-y0dsrb').should('be.visible')
})
        it(' enter a wrong format in email field without @   ', function () {
           cy.visit('https://wuzzuf.net/register')
           cy.get('#firstname').type('mohamed')                                                 
           cy.get('#lastname').type('ghazaal.mohamed yahoo.com')     
           cy.get('#email').type('@yahoo.com')                                                                 
           cy.get('.css-1xmsobw').type('mooghazal')
           cy.get('.css-y0dsrb').should('be.visible')
})

})
        it(' enter email adress contains numbers(used before)  ', function () {
          cy.visit('https://wuzzuf.net/register')
          cy.get('#firstname').type('mohamed')                                                 
          cy.get('#lastname').type('ghazal')                                                
          cy.get('#email').type('1234@yahoo.com')                   
          cy.get('.css-1xmsobw').type('mooghazal')
          cy.get('.css-y0dsrb').should('be.visible')
})
        it(' enter email adress contains special characters  ', function () {
         cy.visit('https://wuzzuf.net/register')
         cy.get('#firstname').type('mohamed')                                                 
         cy.get('#lastname').type('ghazal')                                                
         cy.get('#email').type('/#$%^@yahoo.com')                   
         cy.get('.css-1xmsobw').type('mooghazal')
         cy.get('.css-y0dsrb').should('be.visible')
})
describe('register functionality with invalid data(password field)', function () {

    it(' leave password field empty ', function () {
         cy.visit('https://wuzzuf.net/register')
         cy.get('#firstname').type('mohamed')                                                 
         cy.get('#lastname').type('ghazal')                                                
         cy.get('#email').type('mohamed.ghazal'+ Math.floor(Date.now() * Math.random())+'@yahoo.com')                      
         cy.get('.css-1a96k50').type('quality software engineer,  software testing{enter}')
         cy.get('.css-6lejne').trigger('click');
         cy.get('.css-y0dsrb').should('be.visible')
    })
    it(' password field have less than 8 numbers  ', function () {
      cy.visit('https://wuzzuf.net/register')
      cy.get('#firstname').type('mohamed')                                                 
      cy.get('#lastname').type('ghazal')                                                
      cy.get('#email').type('mohamed.ghazal'+ Math.floor(Date.now() * Math.random())+'@yahoo.com')  
      cy.get('.css-1xmsobw').type('123456')                    
      cy.get('.css-1a96k50').type('quality software engineer,  software testing{enter}')
      cy.get('.css-6lejne').trigger('click');
      cy.get('.css-y0dsrb').should('be.visible')
  })
    it(' password field have special characters less than 8   ', function () {
      cy.visit('https://wuzzuf.net/register')
      cy.get('#firstname').type('mohamed')                                                 
      cy.get('#lastname').type('ghazal')                                                
      cy.get('#email').type('mohamed.ghazal'+ Math.floor(Date.now() * Math.random())+'@yahoo.com')   
      cy.get('.css-1xmsobw').type('@#$%^&')                   
      cy.get('.css-1a96k50').type('quality software engineer,  software testing{enter}')
      cy.get('.css-6lejne').trigger('click');
      cy.get('.css-y0dsrb').should('be.visible')
})
    it(' password field have characters less than 8   ', function () {
      cy.visit('https://wuzzuf.net/register')
      cy.get('#firstname').type('mohamed')                                                 
      cy.get('#lastname').type('ghazal')                                                
      cy.get('#email').type('mohamed.ghazal'+ Math.floor(Date.now() * Math.random())+'@yahoo.com')     
      cy.get('.css-1xmsobw').type('abchfhw')                 
      cy.get('.css-1a96k50').type('quality software engineer,  software testing{enter}')
      cy.get('.css-6lejne').trigger('click');
      cy.get('.css-y0dsrb').should('be.visible')
  })
    it(' password field have characters&number less than 8   ', function () {
      cy.visit('https://wuzzuf.net/register')
      cy.get('#firstname').type('mohamed')                                                 
      cy.get('#lastname').type('ghazal')                                                
      cy.get('#email').type('mohamed.ghazal'+ Math.floor(Date.now() * Math.random())+'@yahoo.com') 
      cy.get('.css-1xmsobw').type('asb@#$')                     
      cy.get('.css-1a96k50').type('quality software engineer,  software testing{enter}')
      cy.get('.css-6lejne').trigger('click');
      cy.get('.css-y0dsrb').should('be.visible')
    })
})
describe('register functionality with invalid data(what job tittle are ....)', function () {

    it(' leave this field empty  ', function () {
        cy.visit('https://wuzzuf.net/register')
        cy.get('#firstname').type('mohamed')                                                 
        cy.get('#lastname').type('ghazal')                                                
        cy.get('#email').type('mohamed.ghazal'+ Math.floor(Date.now() * Math.random())+'@yahoo.com')                      
        cy.get('.css-1xmsobw').type('mooghazal')
        cy.get('.css-6lejne').trigger('click');
        cy.get('.css-y0dsrb').should('be.visible')
     
  })
    it(' choose one job only  ', function () {
        cy.visit('https://wuzzuf.net/register')
        cy.get('#firstname').type('mohamed')                                                 
        cy.get('#lastname').type('ghazal')                                                
        cy.get('#email').type('mohamed.ghazal'+ Math.floor(Date.now() * Math.random())+'@yahoo.com')                      
        cy.get('.css-1xmsobw').type('mooghazal')
        cy.get('.css-1a96k50').type('quality software engineer')
        cy.get('.css-6lejne').trigger('click');
       cy.get('.css-y0dsrb').should('be.visible')
    })
})  