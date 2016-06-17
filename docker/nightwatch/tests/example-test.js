module.exports = {
  'Nightwatch.js Test' : function (browser) {
    console.log('Nightwatch test started');

    browser
      .url('http://www.google.com')
      .assert.title('Google')
      .end();
  }
};
