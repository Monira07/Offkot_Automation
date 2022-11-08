const {By, Key, Builder} = require("selenium-webdriver");
const assert = require("assert");
const { brand_details_test } = require("./branddetails");
const { time } = require("./time_file");
var should = require("chai").should();

require("chromedriver");

async function add_chatagory_test(driver){
    try{
        //let time = 15000;
        console.log("-----Add Category-----");
        let staytime = time.addchaTime;
        //driver.manage().setTimeouts({implicit:time.addchaTime});
        driver.manage().setTimeouts({implicit:staytime});
    
        //click on chatagory menu
        await driver.findElement(By.xpath("/html/body/div/div/div/div[1]/div/div/aside/div/div/div/ul[2]/li/a/span")).click();
        console.log("1. Click on category option");
        /*for (let i = 0; i < 2; i++){
            console.log("i =", i);
            if(i == 1){*/
                //console.log("if done");          ///html/body/div/div/div/div[2]/div/div[2]/div[1]/div/div/div[1]/div[2]/button/svg
                //await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div[1]/div/div/div[1]/div[2]/button/svg/path")).click();
                //let crossbut = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div[1]/div/div/div[1]/div[2]/button/svg/path"));
                //console.log(crossbut.click());
            /*}
            else{
                console.log("Don't click on cross button");
            }*/
            //click on add chatagory button
            await driver.findElement(By.className("font-medium px-2")).click();
            console.log("2. Click on add category button");

            //enter category as input
            await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div[1]/div/div/div[3]/input")).sendKeys("Automation testing2");
            console.log("3. Enter category name successfully");

            //save nwe category or click on save button
            await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div[1]/div/div/div[4]/div/button")).click();
            console.log("4. To add a new category click on save button");
            //click on cress button
            await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div[1]/div/div/div[1]/div[2]/button")).click();
            console.log("5. Click on cross button");
        //}

        //assert
        //let todoText = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[1]/div[3]/div[1]/div[1]/div/div[1]")).getText();

        let todoText = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[1]/div[3]/div[1]/div[1]/div/div[1]")).getText().then(function(value){
            return value;
        });
        console.log("6. Last category:", todoText);

        //check two string using node assertion
        //assert.strictEqual(todoText, "Automation testing1");

        //check two string using should assertion
        todoText.should.equal("Automation testing2");
        console.log("7. Check category added succesfully or not");

        //Click on cross button
        //await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div[1]/div/div/div[1]/div[2]/button/svg")).click();

        //brand_details_test(driver);
        //assert
        //let lastUpdate = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[1]/div[3]/div[1]/div[1]/div/div[1]")).getText();

        let lastUpdate = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[1]/div[3]/div[1]/div[1]/div/div[2]")).getText().then(function(value){
            return value;
        });
        console.log("8. Last Update:", lastUpdate);

        //check two string using node assertion
        //assert.strictEqual(lastUpdate, "Last updated : 10/13/2022");

        //check two string using should assertion
        lastUpdate.should.equal("Last updated : 11/3/2022");
        console.log("9. Check category added or update succesfully or not");

        //Search chatagory
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[1]/div[1]/div[2]/div[1]/input")).sendKeys("Food", Key.ENTER);
        console.log("10. Search category succesfully");

        //Click on edit option
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[1]/div[3]/div/div[2]/div[2]/button")).click();
        console.log("11. Click on edit option");
        //Clear the data from input field
        //await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div[1]/div/div/div[3]/input")).clear();
        let remove = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div[1]/div/div/div[3]/input"));
        remove.clear()//.Click().click().sendKeys(Keys.BACK_SPACE).perform();
        console.log("12. Clear the data from input field");
        //Enter value in the edit form
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div[1]/div/div/div[3]/input")).sendKeys("Foodss", Key.ENTER);
        console.log("13. Enter value in the edit form");
        //Click on update button
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div[1]/div/div/div[4]/div/button")).click();
        console.log("14. Click on update button");  
    }
    catch (error) {
        console.log("15. Error", error);
    }
};
module.exports = {add_chatagory_test};