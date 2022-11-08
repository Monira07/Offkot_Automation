const {By, Key, Builder, until} = require("selenium-webdriver");
const assert = require("assert");
var should = require("chai").should();
async function brand_details_test(driver){
    try{
        console.log("-----Brand Details-----");
        driver.manage().setTimeouts({implicit:15000});
        await driver.findElement(By.xpath("/html/body/div/div/div/div[1]/div/div/aside/div/div/div/ul[3]/li/a")).click();

        //Click on Add brand button
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[1]/div[1]/div[2]/div[2]/button")).click();
        console.log("1. Click on add button");
        //UPLOAD LOGO
        let logo = await driver.findElement(By.id("image"));
        await logo.sendKeys("/home/sayburgh-pc-8/Downloads/rokomari.png");
        //await driver.findElement(By.id("image")).sendKeys("/home/sayburgh-pc-8/Downloads/rokomari.png");
        console.log("2. Uload logo");
        //SELECT CATEGORY
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div[1]/div/div/div[3]/div[2]/div/select")).click();
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div[1]/div/div/div[3]/div[2]/div/select/option[2]")).click();
        console.log("3. Select chatagory");
        //Enter brand name
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div[1]/div/div/div[4]/div[1]/input")).sendKeys("Miniso");
        console.log("4. Enter brand");
        //Enter contact number
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div[1]/div/div/div[4]/div[2]/input")).sendKeys("01799602748");
        console.log("5. Enter contact number");
        //Enter website link
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div[1]/div/div/div[5]/div[1]/input")).sendKeys("www.");
        console.log("6. Enter website link");
        //Description
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div[1]/div/div/div[6]/textarea")).sendKeys("Description: Just for test");
        console.log("7. Enter description");
        //Location
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div[1]/div/div/div[7]/div/select")).click();
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div[1]/div/div/div[7]/div/select/option[2]")).click();
        console.log("8. Enter location");
        //click on save button
        //await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div[1]/div/div/div[8]/div")).click();
        console.log("9. Click on save button");

        //assert
        let todoText = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]")).getText().then(function(value)
        {
            return value;
        });
        console.log("10. Last category:", todoText);

        //check two string using node assertion
        //assert.strictEqual(todoText, "Miniso");

        //check two string using should assertion
        todoText.should.equal("Miniso");

        console.log("11. check offer added succesfully or not");

        //assert for last update
        //let lastUpdate = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[1]/div[3]/div[1]/div[1]/div[2]/div[2]")).getText();

        let lastUpdate = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[1]/div[3]/div[1]/div[1]/div[2]/div[2]")).getText().then(function(value){
            return value;
        });
        console.log("12. Last Update:", lastUpdate);

        //check two string using node assertion
        //assert.strictEqual(lastUpdate, "Last updated : 10/24/2022");

        //check two string using should assertion
        lastUpdate.should.equal("Last updated : 10/24/2022");
        console.log("13. Check brand added or update succesfully or not");

        //search
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[1]/div[1]/div[2]/div[1]/input")).sendKeys("RR", Key.ENTER);
        console.log("14. Search successfully");

        //Click on edit option
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[1]/div[3]/div/div[2]/div[2]/button")).click();
        console.log("15. Click on edit option");
        //Clear the data from input field
        let remove = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div[1]/div/div/div[4]/div[1]/input"));
        remove.clear();
        console.log("16. Clear the data from input field");
        //Enter value in the edit form
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div[1]/div/div/div[4]/div[1]/input")).sendKeys("New RR", Key.ENTER);
        console.log("17. Enter value in the edit form");
        //Click on update button
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div[1]/div/div/div[8]/div/button")).click();
        console.log("18. Click on update button");
    }

    catch (error) {
        console.log("19. Error", error);
    }
};
module.exports = {brand_details_test};