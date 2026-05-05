const { Builder, By } = require("selenium-webdriver");

(async function testApp() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    // ✅ FIXED URL (Vite frontend)
    await driver.get("http://localhost:5173");

    // Find inputs
    let title = await driver.findElement(By.css("input[placeholder='Title']"));
    let year = await driver.findElement(By.css("input[placeholder='Year']"));

    // Type values
    await title.sendKeys("Inception");
    await year.sendKeys("2010");

    // Click Add button
    await driver.findElement(By.css("button")).click();

    console.log("✅ Test Passed: Movie added");

    await driver.sleep(3000); // just to see result
  } finally {
    await driver.quit();
  }
})();