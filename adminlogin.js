const {By, Key, Builder} = require("selenium-webdriver");
const { add_chatagory_test } = require("./addcategory");
const { edit_homepage_test } = require("./edithomepage");
const { brand_details_test } = require("./branddetails");
const { offer_details_test } = require("./offer-details");
const { payment_mathod_test } = require("./paymentmathod");
const { store_location_test } = require("./storelocation");
const { time } = require("./time_file");
//const { webdriver } = require("./web_driver");
//const { store_location_test } = require("./googel");
const assert = require("assert");

require("chromedriver");

async function admin_login_test(){
  try{
    console.log("-----Admin Login-----");
    let driver = await new Builder().forBrowser("chrome").build();
    //let driver = webdriver.driver;

      await driver.get("https://srv.offkoto.com/");
      //driver.manage().timeouts().implicitWait(3, TimeUnit.SECONDS);
      //driver.manage().setTimeouts({implicit:6000});
      driver.manage().setTimeouts({implicit:time.adminloginT});

      //validate error message show or not if click login button without fillup any field
      await driver.findElement(By.className("my-auto")).click();
      console.log("1.", await driver.findElement(By.xpath("/html/body/div/div/div/div/div[3]")).isDisplayed());

      if(await driver.findElement(By.xpath("/html/body/div/div/div/div/div[3]")).isDisplayed())
      {
        console.log("2. Show error masage");
      }
      else{
        console.log("2. Don't Show error masage");
      }
      //Enter gmail
      await driver.findElement(By.xpath("/html/body/div/div/div/div/div[2]/div[1]/input")).sendKeys("admin@offkoto.com");
      console.log("3. Enter email successfully for login");

      //Enter password
      await driver.findElement(By.xpath("/html/body/div/div/div/div/div[2]/div[2]/input")).sendKeys("password");
      console.log("4. Enter password successfully for login");

      //click on Login button
      //await driver.findElement(By.className("my-auto")).click();
      await driver.findElement(By.xpath("/html/body/div/div/div/div/div[3]/button/div/div/div")).click();
      console.log("5. Login Successfully");
      
      driver.manage().window().maximize();
      console.log("6. Maximize the windo Successfully");
      //googletest();

      //logo is displayed or not 
      console.log("7. logo is displayed", await driver.findElement(By.xpath("/html/body/div/div/div/div[1]/div/nav/div/div/div[1]/a/img")).isDisplayed());
      
      //call other function
      add_chatagory_test(driver);
      //brand_details_test(driver);
      //edit_homepage_test(driver);
      //offer_details_test(driver);
      //payment_mathod_test(driver);
      //store_location_test(driver);
  }
  catch (error){
    console.log("Error", error)
  }     
}; 
admin_login_test();