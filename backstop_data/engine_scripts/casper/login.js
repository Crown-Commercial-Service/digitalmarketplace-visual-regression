module.exports = function (casper, scenario) {
  if (scenario.user === undefined) return;

  var user = require('./user')(casper, scenario);
  var cookiePath = "cookies.json";

  console.log(user.email);

  if (user.email === undefined || user.password === undefined) {
    casper.echo('Email or password undefined for "' + scenario.user + '" - bailing from login.', 'WARN');
    return;
  } else if (casper.getCurrentUrl() === scenario.url) {
    casper.echo('On correct URL - no login required.');
    return;
  }

  casper.waitForSelector('input[name="email_address"]', function () {
    this.sendKeys('input[name="email_address"]', user.email);
  });

  casper.then(function () {
    casper.mouseEvent('click', 'input[name="password"]');
  });

  casper.then(function () {
    casper.waitForSelector('input[name="password"]', function () {
      this.sendKeys('input[name="password"]', user.password);
      this.mouseEvent('click', '.button-save'); //should redirect you to desired page
    });
  });

  return; // Cookies not working correctly

  casper.then(function () {
    casper.echo('Saving new cookie(s) for "' + user.email + '"', 'INFO');
    var cookiesObj = {};
    if (fs.exists(cookiePath)) {
      cookiesObj = JSON.parse(fs.read(cookiePath));
    }
    cookiesObj[user.email] = casper.page.cookies;
    var cookies = JSON.stringify(cookiesObj, null, 2);
    fs.write(cookiePath, cookies, 'w');
  });
};
