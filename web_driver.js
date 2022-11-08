const webdriver = {
    driver: await new Builder().forBrowser("chrome").build()
}
module.exports = {webdriver};