const {By} = require('selenium-webdriver');

const addMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('City of Lost Children')
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

    const checked = await driver.findElement(By.xpath('//span[contains(@class, "checked")]'));

    const displayed = checked.isDisplayed();

    expect(displayed).toBeTruthy()
}

const deleteMovie = async (driver) => { 
    let x = await driver.findElement(By.xpath('//button[text() = "x"]')).click()
    console.log(x)
    await driver.sleep(1000)

    const findMovie = await driver.findElement(By.xpath('//ul[contains(text)]'));

    const displayed = findMovie.isDisplayed();

    expect(displayed).toBeTruthy()
}

module.exports = {
    addMovie,
    crossMovie,
    deleteMovie
}