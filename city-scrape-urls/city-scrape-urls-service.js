const db = require('../models/index.js');

const cityScrapeUrlsService = {

    getAllCities() {
        const cities = db.city_urls.findAll({
            attributes: [
                'city_name',
                'territory_name', 
                'city_url', 
                'city_country'
            ]
        });
        return cities;
    },

    // Find all cities in a state
    // SELECT city_name, territory_name, city_url, city_country FROM city_urls WHERE territory_name='Alabama' ORDER BY city_name
    getCitiesInState(stateName) {
        const cities = db.city_urls.findAll({
            attributes: [
                'city_name',
                'territory_name',
                'city_url',
                'city_country'
            ],
            where: {
                'territory_name': stateName
            }
        });
        return cities;
    }

    // Find all cities in a region (Pacific Northwest, West Coast, Midwest, etc)

    // Find specific city, might return multiple if same name of city across multiple states

    // Find specific city in specific state


}

module.exports = cityScrapeUrlsService;