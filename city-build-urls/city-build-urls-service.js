const db = require('../models/index.js');

const cityBuildUrlsService = {

    // doesn't work
    doForceMigration() {
        db.city_urls.sync({ force: true })
    },
    
    createCityUrl(city) {
        db.city_urls.findOrCreate({ where: { 
            city_name: city.cityName,
            territory_name: city.territoryName,
            city_url: city.cityUrl,
            city_country: city.countryName
        } })
    },

    createCityUrls(cities) {
        db.city_urls.bulkCreate(
            cities
        )
    }

    // Find all cities in a state

    // Find all cities in a region (Pacific Northwest, West Coast, Midwest, etc)

    // Find specific city, might return multiple if same name of city across multiple states

    // Find specific city in specific state


    //createCityUrls(data);

}

module.exports = cityBuildUrlsService;