describe('login functionality with a valid data', function () {

    it(' enter a valid data  ', function () {
        cy.visit('https://wuzzuf.net/login?ref=g_menu');
        cy.get('.css-1n6f2sr').type('ghazal.mohamed@yahoo.com')
        cy.get('.css-1xmsobw').type('mooo6080')
        cy.get('.css-14ghl4e').click()
        cy.url().should('eq','https://wuzzuf.net/setup/career-interests')
    })
    it(' check eye icon show password or not  ', function () {
      cy.visit('https://wuzzuf.net/login?ref=g_menu');
      cy.get('.css-1n6f2sr').type('ghazal.mohamed@yahoo.com')
      cy.get('.css-1xmsobw').type('mooo6080')
      cy.get('.css-190t3pl').click()
      cy.get('.css-1xmsobw').should('have.value','mooo6080')
    })
    it(' searching for job  ', function () {
        cy.visit('https://wuzzuf.net/login?ref=g_menu');
        cy.get('.css-1n6f2sr').type('ghazal.mohamed@yahoo.com')
        cy.get('.css-1xmsobw').type('mooo6080')
        cy.get('.css-14ghl4e').click()
        cy.get('.css-1kpx665 > .css-6ckm6t > .css-1ipgfhx').click()
        cy.get('.css-sg52ec').type('software manual tester{enter}')
        cy.url().should('eq','https://wuzzuf.net/search/jobs/?q=software%20manual%20tester')
    })
    it(' check if fileds accepts uppercase or not ', function () {
        cy.visit('https://wuzzuf.net/login?ref=g_menu');
        cy.get('.css-1n6f2sr').type('GHAZALMOHAMEDESSAM@yahoo.com')
        cy.get('.css-1xmsobw').type('MOOHAMEDESSAM')                  
        cy.get('.css-14ghl4e').click()
        cy.url().should('eq','https://wuzzuf.net/setup/career-interests')
    })
    it(' check if fileds accepts mix betwwen upperscase&lowercase or not ', function () {
        cy.visit('https://wuzzuf.net/login?ref=g_menu');
        cy.get('.css-1n6f2sr').type('HElloGhazal@yahoo.com ')
        cy.get('.css-1xmsobw').type('ghazalGHAZAL')               
        cy.get('.css-14ghl4e').click()
        cy.url().should('eq','https://wuzzuf.net/setup/career-interests')
})
}) 
describe('login functionality with invalid data in mail field', function () {
    it(' leave mail field empty', function () {
        cy.visit('https://wuzzuf.net/login?ref=g_menu');
        cy.get('.css-1xmsobw').type('mooo6080')
        cy.get('.css-14ghl4e').click()
        cy.get('.css-y0dsrb').should('be.visible')
    })
    it(' mail with wrong format ex@ex', function () {
      cy.visit('https://wuzzuf.net/login?ref=g_menu');
      cy.get('.css-1n6f2sr').type('mohamed@yahoo.com')
      cy.get('.css-1xmsobw').type('mooo6080')
      cy.get('.css-14ghl4e').click()
      cy.get('.css-1549ajr > div').should('be.visible')
  })
    it(' mail with wrong format ex.com', function () {
      cy.visit('https://wuzzuf.net/login?ref=g_menu');
      cy.get('.css-1n6f2sr').type('ghazal.mohamed.com')
      cy.get('.css-1xmsobw').type('mooo6080')
      cy.get('.css-14ghl4e').click()
      cy.get('.css-y0dsrb').should('be.visible')
})
    it(' mail with wrong format @yahoo.com', function () {
      cy.visit('https://wuzzuf.net/login?ref=g_menu');
      cy.get('.css-1n6f2sr').type('yahoo.com')
      cy.get('.css-1xmsobw').type('mooo6080')
      cy.get('.css-14ghl4e').click()
      cy.get('.css-y0dsrb').should('be.visible')
})
    it(' mail with wrong format ex ex.com', function () {
      cy.visit('https://wuzzuf.net/login?ref=g_menu');
      cy.get('.css-1n6f2sr').type('ghazal.mohamedyahoo.com')
      cy.get('.css-1xmsobw').type('mooo6080')
      cy.get('.css-14ghl4e').click()
      cy.get('.css-y0dsrb').should('be.visible')
})
    it(' mail field have special character', function () {
     cy.visit('https://wuzzuf.net/login?ref=g_menu');
     cy.get('.css-1n6f2sr').type('ghazal&mohamedyahoo.com')
     cy.get('.css-1xmsobw').type('mooo6080')
     cy.get('.css-14ghl4e').click()
    })
  })
  describe('login functionality with invalid data in password field', function () {
    it(' leave password field empty', function () {
        cy.visit('https://wuzzuf.net/login?ref=g_menu');
        cy.get('.css-1n6f2sr').type('ghazal.mohamed@yahoo.com')
        cy.get('.css-14ghl4e').click()
        cy.get('.css-y0dsrb').should('be.visible')
    })
    it(' password field less than 8 num', function () {
        cy.visit('https://wuzzuf.net/login?ref=g_menu');
        cy.get('.css-1n6f2sr').type('ghazal.mohamed@yahoo.com')
        cy.get('.css-1xmsobw').type('1234567')
        cy.get('.css-14ghl4e').click()
        cy.get('.css-1549ajr > div').should('be.visible')
  })
    it(' password field less than 8 charachters', function () {
       cy.visit('https://wuzzuf.net/login?ref=g_menu');
       cy.get('.css-1n6f2sr').type('ghazal.mohamed@yahoo.com')
       cy.get('.css-1xmsobw').type('mohamed')
       cy.get('.css-14ghl4e').click()
       cy.get('.css-1549ajr > div').should('be.visible')
  })
    it(' chechk if password field accept special characters or not', function () {
       cy.visit('https://wuzzuf.net/login?ref=g_menu');
       cy.get('.css-1n6f2sr').type('ghazal.mohamed@yahoo.com')
       cy.get('.css-1xmsobw').type('!@#$%^&*(')
       cy.get('.css-14ghl4e').click()
       cy.get('.css-1549ajr > div').should('be.visible')
  })
    it('enter password contains special characters less than 8 ', function () {
      cy.visit('https://wuzzuf.net/login?ref=g_menu');
      cy.get('.css-1n6f2sr').type('ghazal.mohamed@yahoo.com')
      cy.get('.css-1xmsobw').type('!@#$%^(')
      cy.get('.css-14ghl4e').click()
      cy.get('.css-1549ajr > div').should('be.visible')
  }) 
    it(' chechk forget pass button', function () {
      cy.visit('https://wuzzuf.net/login?ref=g_menu');
      cy.get('.css-1n6f2sr').type('ghazal.mohamed@yahoo.com')
      cy.get('.css-1fvbhwn').click()
      cy.url().should('eq','https://wuzzuf.net/forgot-password')
})
  it(' chechk reset pass button', function () {
      cy.visit('https://wuzzuf.net/login?ref=g_menu');
      cy.get('.css-1n6f2sr').type('ghazal.mohamed@yahoo.com')
      cy.get('.css-1fvbhwn').click()
      cy.get('.css-1n6f2sr').type('ghazal.mohamed@yahoo.com')
      cy.get('.css-1kqwv1a').click()
      cy.url().should('eq','https://wuzzuf.net/forgot-password')
})
})
