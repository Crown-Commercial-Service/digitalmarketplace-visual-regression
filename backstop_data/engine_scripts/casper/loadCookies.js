var fs = require('fs');

module.exports = function (casper, scenario) {
  var cookies = [];
  var cookiePath = "cookies.json"; //should be config thing
  var user = require('./user')(casper, scenario);

  if (user.email === undefined || user.password === undefined) {
    casper.echo('Clearing cookies.', 'INFO');
    casper.page.clearCookies(); // If we don't want a user, clear cookies that might have persisted from a previous session.
    return;
  }

  return; // Cookies not working for supplier account?

  // READ COOKIES FROM FILE IF EXISTS
  if (fs.exists(cookiePath)) {
    var cookiesObj = JSON.parse(fs.read(cookiePath));
    if (cookiesObj[user.email] !== undefined) {
      cookies = cookiesObj[user.email];
      casper.echo(cookies);
      casper.echo('We have cookies on file for "' + user.email + '" so will try to use those', 'INFO');
    } else {
      cookies = []
    }
  }
  
  casper.page.cookies = cookies;
  //casper.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36');
};
