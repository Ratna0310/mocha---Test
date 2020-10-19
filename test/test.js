const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');
require('chromedriver');

describe('WikiTest', () => {
    const driver = new Builder().forBrowser('chrome').build();

    it('should go to Wikipedia and login', async () => {
        await driver.get('https://en.wikipedia.org');
        await driver.findElement(By.id("pt-login")).click();
        await driver.findElement(By.id("wpName1")).sendKeys("This is my first code.");
        await driver.findElement(By.id("wpPassword1")).sendKeys("HelloWorld!");
        await driver.findElement(By.id("wpLoginAttempt")).click();
        //const title = await driver.getTitle();

        //expect(title).to.equal('https://en.wikipedia.org');
    });

    //after(async () => driver.quit());
});