//well, this could be made more generic couldn't it?
module.exports = function(casper, scenario) {
  //just submit the empty form
  casper.thenEvaluate(function() {
    document.querySelector('main form').submit(); // ignore forms in header and footer
  });
};
