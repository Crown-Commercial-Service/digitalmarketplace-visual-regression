var fs = require('fs');

module.exports = function (casper, scenario) {
  casper.echo('Clearing cookies.', 'INFO');
  casper.page.clearCookies();
};
