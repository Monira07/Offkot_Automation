const {By, Key, Builder} = require("selenium-webdriver");
require("chromedriver");
const webdriver = {
    driver: await new Builder().forBrowser("chrome").build()
}
module.exports = {webdriver};