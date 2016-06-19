module.exports = {
  '@tags': ['welcome-page', 'signup'],
  'Welcome Page - Signup' : function (browser) {

    browser
      .url('http://bazgu:7100/')
      .click('.WelcomePage_Page-signUpButton')
      .pause(1000)

    browser.expect
      .element('.WelcomePage_Page-frame').to
      .not.be.present

    browser.expect
      .element('.SignUpPage_Page-frame').to
      .be.visible

    browser.expect
      .element('.BackButton').to
      .be.visible
      .be.enabled
      .be.a('button')

    browser.expect
      .element('.SignUpPage_UsernameItem-input').to
      .be.visible
      .be.enabled
      .be.an('input').have.attribute('type').which.equals('text')

    browser.expect
      .element('.SignUpPage_PasswordItem-input').to
      .be.visible
      .be.enabled
      .be.an('input').have.attribute('type').which.equals('password')

    browser.expect
      .element('.SignUpPage_RepeatPasswordItem-input').to
      .be.visible
      .be.enabled
      .be.an('input').have.attribute('type').which.equals('password')

    browser.expect
      .element('.SignUpPage_CaptchaItem-image').to
      .be.visible
      .be.a('div')

    browser.expect
      .element('.SignUpPage_CaptchaItem-input').to
      .be.visible
      .be.enabled
      .be.an('input').have.attribute('type').which.equals('text')

    browser.end()
  }
}
