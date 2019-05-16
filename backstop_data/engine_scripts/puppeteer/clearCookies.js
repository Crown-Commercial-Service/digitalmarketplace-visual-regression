module.exports = async (page, scenario) => {
  console.log("CLEARING COOKIES");

  const cookies = await page.cookies(scenario.url);

  await Promise.all(
    cookies.map(async (cookie) => { page.deleteCookie(cookie) })
  );
};
