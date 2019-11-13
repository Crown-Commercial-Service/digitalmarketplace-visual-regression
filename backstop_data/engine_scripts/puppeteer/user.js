var process = require('process');

module.exports = function (scenario) {
  if (scenario.user === 'supplier') {
    var email = process.env.DM_SUPPLIER_USER_EMAIL;
    var password = process.env.DM_SUPPLIER_USER_PASSWORD;
  } else if (scenario.user === 'buyer') {
    var email = process.env.DM_BUYER_USER_EMAIL;
    var password = process.env.DM_BUYER_USER_PASSWORD;
  } else if (scenario.user === 'admin-support') {
    var email = process.env.DM_ADMIN_USER_EMAIL;
    var password = process.env.DM_ADMIN_USER_PASSWORD;
  } else if (scenario.user === 'admin-category') {
    var email = process.env.DM_ADMIN_CCS_CATEGORY_USER_EMAIL;
    var password = process.env.DM_ADMIN_CCS_CATEGORY_USER_PASSWORD;
  } else if (scenario.user === 'admin-sourcing') {
    var email = process.env.DM_ADMIN_CCS_SOURCING_USER_EMAIL;
    var password = process.env.DM_ADMIN_CCS_SOURCING_USER_PASSWORD;
  } else if (scenario.user === 'admin-data-controller') {
    var email = process.env.DM_ADMIN_CCS_DATA_CONTROLLER_USER_EMAIL;
    var password = process.env.DM_ADMIN_CCS_DATA_CONTROLLER_USER_PASSWORD;
  } else if (scenario.user === 'admin-framework-manager') {
    var email = process.env.DM_ADMIN_FRAMEWORK_MANAGER_USER_EMAIL;
    var password = process.env.DM_ADMIN_FRAMEWORK_MANAGER_USER_PASSWORD;
  } else if (scenario.user === 'admin-manager') {
    var email = process.env.DM_ADMIN_MANAGER_USER_EMAIL;
    var password = process.env.DM_ADMIN_MANAGER_USER_PASSWORD;
  } else {
    console.debug('No user required for this scenario.');
  }

  return {
    'email': email,
    'password': password,
  }
}
