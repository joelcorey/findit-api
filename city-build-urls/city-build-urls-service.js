const db = require('../models/index.js');

const cityBuildUrlsService = {

    deleteCityUrls() {
        db.city_urls.destroy({ 
            truncate: true,
            cascade: false,
            restartIdentity: true 
        })
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
    },

    // DONE: Find all cities in a state

    // TO FRONT END: Find all cities in a region (Pacific Northwest, West Coast, Midwest, etc)

    // TO FRONT END: Find specific city, might return multiple if same name of city across multiple states

    // TO FRONT END: Find specific city in specific state

}

module.exports = cityBuildUrlsService;