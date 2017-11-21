//well, this could be made more generic couldn't it?
module.exports = function(casper, scenario) {
  //just submit the empty form
  casper.thenEvaluate(function() {
    document.querySelector('form:nth-child(2)').submit(); //logout now first form on page.
  });
};
