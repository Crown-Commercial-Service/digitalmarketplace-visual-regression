module.exports = function (casper, scenario) {
  casper.then(function () {
    casper.click(scenario.clickSelector);
  });
};
