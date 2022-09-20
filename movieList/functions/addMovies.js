const {By} = require('selenium-webdriver');

const addMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('City of Children')
    await driver.sleep(1000)

    await driver.findElement(By.xpath('//button')).click()
    await driver.sleep(1000)

    const movie = await driver.findElement(By.xpath('//li'))

    const displayed = movie.isDisplayed();

    expect(displayed).toBeTruthy()
}

const crossMovie = async (driver) => { 
    await driver.findElement(By.xpath('//span')).click()
    await driver.sleep(1000)

    const message = await driver.findElement(By.xpath('//*[@id="message"]'))

    const displayed = message.isDisplayed();

    expect(displayed).toBeTruthy()
}

const deleteMovie = async (driver) => { 
    let x = await driver.findElement(By.xpath('//button[text() = "x"]')).click()
    console.log(x)
    await driver.sleep(1000)

    const message = await driver.findElement(By.xpath('//*[@id="message"]'))

    const displayed = message.isDisplayed();

    expect(displayed).toBeTruthy()
}

module.exports = {
    addMovie,
    crossMovie,
    deleteMovie
}