const {By, Key, Builder, until} = require("selenium-webdriver");
const assert = require("assert");
var should = require("chai").should();
async function edit_homepage_test(driver){
    try{
        console.log("-----Edit Home Page-----");
        driver.manage().setTimeouts({implicit:18000});

        //click on edit home page menu
        await driver.findElement(By.xpath("/html/body/div/div/div/div[1]/div/div/aside/div/div/div/ul[8]/li/a/span")).click();
        console.log("1. Click on edit homepage option");

        //Click on edit home page section
        //await driver.findElement(By.className("cursor-pointer")).click();
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div[1]/div[1]")).click();
        console.log("2. Click on edit home page section");
        //Click on Add button
        await driver.findElement(By.className("my-auto")).click();
        console.log("3. Click on Add button");

        //check the save button is disable or not
        console.log("4. ", await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div/div/div/div[3]/div[6]/button")).isEnabled());
        var savebutton = Boolean(await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div/div/div/div[3]/div[6]/button")).isEnabled());
        console.log("5. Save button is enable", savebutton);
        if(await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div/div/div/div[3]/div[6]/button")).isEnabled())
        {
            console.log("6. Save button is enable");
        }
        else{
            console.log("6. Save button is disable");
        }

        //select position type
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div/div/div/div[3]/div[1]/div[1]/div/select")).click();
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div/div/div/div[3]/div[1]/div[1]/div/select/option[8]")).click();
        console.log("7. Select position");

        //select section type
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div/div/div/div[3]/div[1]/div[2]/div/select")).click();
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div/div/div/div[3]/div[1]/div[2]/div/select/option[3]")).click();
        console.log("8. Select section");

        //Enter Header Name 
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div/div/div/div[3]/div[2]/div[1]/input")).sendKeys("Hotel");
        console.log("9. Enter header name");

        //Enter Section Name 
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div/div/div/div[3]/div[2]/div[2]/input")).sendKeys("Hotel এ Off koto?");
        console.log("10. Enter section name");

        //Enter Search Text
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div/div/div/div[3]/div[2]/div[3]/input")).sendKeys("Hotel, Resort");
        console.log("11. Enter search text");

        //Select Offers
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div/div/div/div[3]/div[2]/div[4]/input")).sendKeys("10%", Key.ENTER);
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div/div/div/div[3]/div[2]/div[5]/ul/li[3]/div")).click();
        console.log("12. Select offers");

        //Enter Html id
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div/div/div/div[3]/div[4]/input")).sendKeys("Hotel");
        console.log("13. Enter Html id");

        //Select Design Type 
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div/div/div/div[3]/div[5]/div/div[1]/label/input")).click();
        console.log("14. Select design type");

        //check the save button is disable or not
        console.log("15.", await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div/div/div/div[3]/div[6]/button")).isEnabled());
        var savebutton = Boolean(await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div/div/div/div[3]/div[6]/button")).isEnabled());
        console.log("16. Save button is enable", savebutton);
        if(await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div/div/div/div[3]/div[6]/button")).isEnabled())
        {
            console.log("17. Save button is enable");
        }
        else{
            console.log("18. Save button is disable");
        }
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div/div/div/div[3]/div[6]/button/div/div/div")).click();


        /*//cast driver object to JavaScriptExecutor
        JavaScriptExecutor jse = (JavaScriptExecutor) driver;

        //set the dropdown vaue t0 say 'Monday' using javascript
        jse.executeScript("arguments[0].value='Monday'", dropdownElement);
        let element = driver.wait(until.elementLocated(By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div/div/div/div[3]/div[1]/div[2]/div/select")));
        element.click();*/
    }
    catch (error) {
        console.log("Error", error);
    }
    
};
module.exports = {edit_homepage_test};
    