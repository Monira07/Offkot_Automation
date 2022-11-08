const {By, Key, Builder, until} = require("selenium-webdriver");
const assert = require("assert");
var should = require("chai").should();
async function store_location_test(driver){
    try{
        console.log("-----Store Location-----");
        driver.manage().setTimeouts({implicit:18000});
        //Click on Store Location Option
        await driver.findElement(By.xpath("/html/body/div/div/div/div[1]/div/div/aside/div/div/div/ul[5]/li/a/span")).click();
        console.log("1. Click on Store Location Option");
        //click on add button
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[1]/div[1]/div[2]/div[2]/button")).click();
        console.log("3. Click on add button");
        //Enter Location Name
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div[1]/div/div/div[3]/input")).sendKeys("Netrokona");
        console.log("4. Enter Location Name");
        //Click on Save button
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div[1]/div/div/div[4]/div/button")).click();
        console.log("5. Enter Location Name");

        //assert
        //let todoText = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[1]/div[3]/div[1]/div[1]/div/div[1]")).getText();

        let todoText = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[1]/div[3]/div[1]/div[1]/div/div[1]")).getText().then(function(value){
            return value;
        });
        console.log("6. Last Payment mathod name:", todoText);

        //check two string using node assertion
        //assert.strictEqual(todoText, "Netrokona");

        //check two string using should assertion
        todoText.should.equal("Netrokona");

        console.log("7. Check category added succesfully or not");

        //assert for last update
        //let lastUpdate = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[1]/div[3]/div[2]/div[1]/div/div[2]")).getText();

        let lastUpdate = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[1]/div[3]/div[2]/div[1]/div/div[2]")).getText().then(function(value){
            return value;
        });
        console.log("8. Last Update:", lastUpdate);

        //check two string using node assertion
        //assert.strictEqual(lastUpdate, "Last updated : 10/26/2022");

        //check two string using should assertion
        lastUpdate.should.equal("Last updated : 10/26/2022");
        console.log("9. Check store location added or update succesfully or not");

        //Click on search option and search Faridpur"
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[1]/div[1]/div[2]/div[1]/input")).sendKeys("Faridpur",Key.ENTER);
        console.log("2. Click on search option and search Faridpur");

        //Click on edit option
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[1]/div[3]/div[1]/div[2]/div[2]/button")).click();
        console.log("10. Click on edit option");
        //Clear the data from input field
        let remove = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div[1]/div/div/div[3]/input"));
        remove.clear();
        console.log("11. Clear the data from input field");
        //Enter value in the edit form
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div[1]/div/div/div[3]/input")).sendKeys("New Faridpur", Key.ENTER);
        console.log("12. Enter value in the edit form");
        //Click on update button
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div[1]/div/div/div[4]/div/button")).click();
        console.log("13. Click on update button");
    }
    catch (error) {
        console.log("14. Error", error);
    }
};
module.exports = {store_location_test};