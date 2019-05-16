module.exports = async (page, scenario, vp) => {
  await require('./clearCookies')(page, scenario);
};
