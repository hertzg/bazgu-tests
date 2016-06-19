module.exports = {
  '@tags': ['welcome'],
  'Welcome Page' : function (browser) {

    browser
      .url('http://bazgu:7100/')
      .pause(1000)
    
    browser.expect
      .element('.WelcomePage_Page-frame')
      .to.be.visible

    browser.expect
      .element('.WelcomePage_Page-logo')
      .to.be.visible.and.be.an('img')

    browser.expect
      .element('.WelcomePage_UsernameItem-input')
      .to.be.visible.and.be.an('input').and.be.enabled

    browser.expect
      .element('.WelcomePage_PasswordItem-input')
      .to.be.visible.and.be.an('input').and.be.enabled

    browser.expect
      .element('.WelcomePage_StaySignedInItem-button')
      .to.be.visible.and.be.a('button').and.be.enabled


    browser.expect
      .element('.WelcomePage_Page-signInButton')
      .to.be.visible.and.be.a('button').and.be.enabled

    browser.expect
      .element('.WelcomePage_Page-signUpButton')
      .to.be.visible.and.be.a('button').and.be.enabled

    browser.expect
    .element('.WelcomePage_Page-signInButton')
    .text.to.contain('Sign In')

    browser.expect
      .element('.WelcomePage_Page-signUpButton')
      .text.to.contain('Create an Account')

    browser.end()
  }
};
