const {By, Key, Builder, until} = require("selenium-webdriver");
const assert = require("assert");
var should = require("chai").should();
async function offer_details_test(driver){
    try{
        console.log("-----Offer Details-----");
        driver.manage().setTimeouts({implicit:3000});
        
        //Click on offer details option
        await driver.findElement(By.xpath("/html/body/div/div/div/div[1]/div/div/aside/div/div/div/ul[7]/li/a/span")).click();
        console.log("1. Click on offer details option");
        
        //Click on add button
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[1]/div[1]/div[2]/div[2]/button")).click();
        console.log("2. Click on Offer add button");
        //Select Brand
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[2]/div/div/div[3]/div/div[2]/div[1]/div/div/div[1]/input")).sendKeys("R",Key.ENTER);
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[2]/div/div/div[3]/div/div[2]/div[1]/div/div/div[2]/ul/li[1]/div")).click();
        console.log("3. Select brand");

        //Offer Category
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[2]/div/div/div[3]/div/div[2]/div[1]/div/div/div[1]/input")).click();
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[2]/div/div/div[3]/div/div[2]/div[2]/div/select/option[3]")).click();
        console.log("4. Select category successfully");

        //UPLOAD LOGO
        let logo = await driver.findElement(By.id("image"));
        await logo.sendKeys("/home/sayburgh-pc-8/Downloads/rokomari.png");
        console.log("5. Upload logo successfully");
        //Enter Offer Name
        await driver.findElement (By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[2]/div/div/div[3]/div/div[5]/div[1]/input")).sendKeys("Buy two get one");
        console.log("6. Enter offer name successfully");
        //Enter Offer Sub Title
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[2]/div/div/div[3]/div/div[6]/div[1]/textarea")).sendKeys("test");
        console.log("7. Enter offer sub title successfully");

        //Enter Offer Description
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[2]/div/div/div[3]/div/div[6]/div[2]/textarea")).sendKeys("Description");
        console.log("8. Enter Description successfully");
        //Select Offer Starting Time
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[2]/div/div/div[3]/div/div[10]/div[1]/input")).sendKeys("04:30PM");
        console.log("9. Select Offer Starting Time successfully");
        //Select Offer Ending Time
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[2]/div/div/div[3]/div/div[10]/div[2]/input")).sendKeys("05:30PM");
        console.log("10. Select Offer Ending Time successfully");

        //Select Payment Method
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[2]/div/div/div[3]/div/div[13]/div/div/select")).click();
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[2]/div/div/div[3]/div/div[13]/div/div/select/option[7]")).click();
        console.log("11. Select payment method susseccfully");
        //Enter Source Location
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[2]/div/div/div[3]/div/div[25]/div/input")).sendKeys("Gulshan-1");
        console.log("12. Enter Source Location successfully");
        //click on save button
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[2]/div/div/div[3]/div/div[26]/button/div/div/div")).click();
        console.log("13. Click on save button");
        
        //assert
        let todoText = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[1]/div[3]/div[1]/div[1]/div/div[1]")).getText().then(function(value)
        {
            return value;
        });
        console.log("14. Last category:", todoText);

        //check two string using node assertion
        //assert.strictEqual(todoText, "Buy two get one");

        //check two string using should assertion
        todoText.should.equal("Buy two get one");
        console.log("15. Check offer added succesfully or not");

        //assert for last update
        //let lastUpdate = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[1]/div[3]/div[1]/div[1]/div/div[2]")).getText();

        let lastUpdate = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[1]/div[3]/div[1]/div[1]/div/div[2]")).getText().then(function(value){
            return value;
        });
        console.log("16. Last Update:", lastUpdate);

        //check two string using node assertion
        //assert.strictEqual(lastUpdate, "Last updated : 10/26/2022");

        //check two string using should assertion
        lastUpdate.should.equal("Last updated : 10/26/2022");
        console.log("17. Check offer details added or update succesfully or not");

        //await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div[1]/div/div/div[4]/div/button")).click();

        //Click on search option search
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[1]/div[1]/div[2]/div[1]/input")).sendKeys("Buy one get one",Key.ENTER);
        console.log("18. Click on offer search option and search'bye one get one'");

        //Click on edit option
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[1]/div[3]/div[1]/div[2]/div[3]/button")).click();
        console.log("10. Click on edit option");
        //Clear the data from input field
        let remove = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[2]/div/div/div[3]/div/div[5]/div[1]/input"));
        remove.clear();
        console.log("16. Clear the data from input field");
        //Enter value in the edit form
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[2]/div/div/div[3]/div/div[5]/div[1]/input")).sendKeys("New Buy one get one", Key.ENTER);
        console.log("11. Enter value in the edit form");
        //Click on update button
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[2]/div/div/div[3]/div/div[26]/button")).click();
        console.log("12. Click on update button");
    }
    catch (error){
        console.log("15. Error", error);
    }

};
module.exports = {offer_details_test};