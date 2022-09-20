// Lines 2 through 6 are our boilerplate lines of code, we need them for our tests to work
const {Builder, Capabilities} = require('selenium-webdriver')

const { By } = require('selenium-webdriver')

require('chromedriver')

const {addMovie, crossMovie, deleteMovie} = require('../functions/addMovies')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

// First we're going to navigate to Google.com
beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/automation-lab/movieList/index.html')
})

// And after our test has completed, we want to close our browser
afterAll(async () => {
    await driver.quit()
})

// And a movie to the list
test('Add a movie', async () => {
    await addMovie(driver)
    await driver.sleep(1000)
})

test('Cross off movie title', async () => {
    await crossMovie(driver)
    await driver.sleep(1000)
})

test('Delete movie title', async () => {
    await deleteMovie(driver)
    await driver.sleep(1000)
})





// This test will require you to change some values in order to get your tests up and running
// You'll want to change each of the commented out pieces below
// test('I can search Google', async () => {

//     // For this line you'll need to put the name of the search bar which you can find by inspecting that element in Chrome
//     let searchBar = await driver.findElement(By.name('q'))
    
//     // This time you'll just finish this string with something you want to search on Google, make sure you leave that \n !
//     await searchBar.sendKeys('thisiscolossal\n')

//     // This line will pause our automation so you can see your search!
//     await driver.sleep(2000)

//     // We now want our automation to get the search bar again since we're on a new page
//     searchBar = await driver.findElement(By.name('q'))

//     // We'll use this line to clear out our old input.
//     await driver.findElement(By.name('q')).clear()

//     // Let's do another search!
//     await driver.findElement(By.name('q')).sendKeys('really cute animal images\n')

//     await driver.sleep(2000) 
// })