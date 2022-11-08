const {By, Key, Builder, until} = require("selenium-webdriver");
const assert = require("assert");
var should = require("chai").should();
async function payment_mathod_test(driver){
    try{
        console.log("-----Payment Mathod-----");
        driver.manage().setTimeouts({implicit:5000});
        //Click on payment mathod
        await driver.findElement(By.xpath("/html/body/div/div/div/div[1]/div/div/aside/div/div/div/ul[4]/li/a/span")).click();
        console.log("1. Click on Payment Mathod Option");
        //click on add button
        //for(let i=0; i<2; i++){
            //Click on add button
            await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[1]/div[1]/div[2]/div[2]/button")).click();
            console.log("3. Click on add button");
            //Enter payment mathod name 
            await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div[1]/div/div/div[3]/input")).sendKeys("cash");
            console.log("4. Enter payment mathod name");
            //Click on save button
            await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div[1]/div/div/div[4]/div/button")).click();
            console.log("5. Click on save button");

            //assert
            //let todoText = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[1]/div[3]/div[1]/div[1]/div/div[1]")).getText();

            let todoText = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[1]/div[3]/div[1]/div[1]/div/div[1]")).getText().then(function(value){
                return value;
            });
            console.log("6. Last Payment mathod name:", todoText);

            //check two string using node assertion
            //assert.strictEqual(todoText, "cash");

            //check two string using should assertion
            todoText.should.equal("cash");

            console.log("7. Check category added succesfully or not");

            //assert for last update
            //let lastUpdate = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[1]/div[3]/div[1]/div[1]/div/div[2]")).getText();

            let lastUpdate = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[1]/div[3]/div[1]/div[1]/div/div[2]")).getText().then(function(value){
                return value;
            });
            console.log("8. Last Update:", lastUpdate);

            //check two string using node assertion
            //assert.strictEqual(lastUpdate, "Last updated : 10/26/2022");

            //check two string using should assertion
            lastUpdate.should.equal("Last updated : 10/26/2022");
            console.log("9. Check offer details added or update succesfully or not");

             //Click on search option Bank Asia
            await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[1]/div[1]/div[2]/div[1]/input")).sendKeys("Bank Asia",Key.ENTER);
            console.log("2. Click on search option and search Bank Asia");

            //Click on edit option
            await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[1]/div[3]/div[1]/div[2]/div[2]/button")).click();
            console.log("10. Click on edit option");
            //Clear the data from input field
            let remove = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div[1]/div/div/div[3]/input"));
            remove.clear();
            console.log("11. Clear the data from input field");
            //Enter value in the edit form
            await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div[1]/div/div/div[3]/input")).sendKeys("New Bank Asia", Key.ENTER);
            console.log("12. Enter value in the edit form");
            //Click on update button
            await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div[1]/div/div/div[4]/div/button")).click();
            console.log("13. Click on update button");
    }
    catch (error) {
        console.log("14. Error", error);
    }
};
module.exports = {payment_mathod_test};