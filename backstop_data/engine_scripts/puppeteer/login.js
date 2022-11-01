module.exports = async (page, scenario) => {
  if (scenario.user === undefined) return;

  var user = require('./user')(scenario);

  console.log('LOGGED IN AS ' + user.email);

  if (user.email === undefined || user.password === undefined) {
    console.warn('Email or password undefined for "' + scenario.user + '" - bailing from login.');
    return;
  } else if (page.url() === scenario.url) {
    console.log('On correct URL - no login required.');
    return;
  }

  await page.waitForSelector('input[name="email_address"]')
  await page.type('input[name="email_address"]', user.email);

  await page.click('input[name="password"]');

  await page.waitForSelector('input[name="password"]')
  await page.type('input[name="password"]', user.password);

  await Promise.all([
    page.waitForNavigation(),
    page.click('main .govuk-button'), //should redirect you to desired page
  ]);

  return;
};
