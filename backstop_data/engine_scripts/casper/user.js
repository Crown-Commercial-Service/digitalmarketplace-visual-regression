var system = require('system');

module.exports = function (casper, scenario) {
  if (scenario.user === 'supplier') {
    var email = system.env.DM_PRODUCTION_SUPPLIER_USER_EMAIL;
    var password = system.env.DM_PRODUCTION_SUPPLIER_USER_PASSWORD;
  } else if (scenario.user === 'buyer') {
    var email = system.env.DM_PRODUCTION_BUYER_USER_EMAIL;
    var password = system.env.DM_PRODUCTION_BUYER_USER_PASSWORD;
  } else if (scenario.user === 'admin') {
    var email = system.env.DM_PRODUCTION_ADMIN_USER_EMAIL;
    var password = system.env.DM_PRODUCTION_ADMIN_USER_PASSWORD;
  } else if (scenario.user === 'category') {
    var email = system.env.DM_PRODUCTION_ADMIN_CCS_CATEGORY_USER_EMAIL;
    var password = system.env.DM_PRODUCTION_ADMIN_CCS_CATEGORY_USER_PASSWORD;
  } else if (scenario.user === 'sourcing') {
    var email = system.env.DM_PRODUCTION_ADMIN_CCS_SOURCING_USER_EMAIL;
    var password = system.env.DM_PRODUCTION_ADMIN_CCS_SOURCING_USER_PASSWORD;
  } else {
    casper.echo('No user required for this scenario.', 'DEBUG');
  }

  return {
    'email': email,
    'password': password,
  }
}
