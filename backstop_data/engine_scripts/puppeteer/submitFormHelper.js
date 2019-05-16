module.exports = async (page, scenario) => {
  if (scenario.submitForm) {
    await Promise.all([
      page.waitForNavigation(),
      // just submit the empty form
      page.$eval(
        'main form', // ignore forms in header and footer
        form => form.submit(),
      ),
    ]);
  }
};
