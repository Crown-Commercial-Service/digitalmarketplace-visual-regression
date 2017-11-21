module.exports = function(casper, scenario, vp) {
  require('./login')(casper, scenario);
  if (scenario.submitForm)
    require('./submitFormHelper')(casper, scenario);
  if (scenario.clickSelector !== undefined)
    require('./clickSelector')(casper, scenario);

  casper.then(function () {
    casper.echo('SCENARIO END> ' + scenario.label + ', ' + vp.label);
  });
};
