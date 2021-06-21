module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);
  await require('./login')(page, scenario);
  await require('./submitFormHelper')(page, scenario);
  await require('./clickAndHoverHelper')(page, scenario);

  // Wait for fonts to load and scroll to the top of the page before taking a screenshot
  await page.evaluateHandle('document.fonts.ready');
  await page.evaluate(() => window.scrollTo(0, 0))

  // add more ready handlers here...
};
