const db = require('../models/index.js');

const cityBuildUrlsService = {

    createCityUrl(city) {
        db.city_urls.findOrCreate({ where: { 
            city_name: city.cityName,
            territory_name: city.territoryName,
            city_url: city.cityUrl,
            city_country:city. cityCountry
         } })
    },

    createCityUrls(cities) {
        for (let i = 0; i < cities.length; i++) {
            this.createCityUrl(cities[i]);
        }
    }
}

module.exports = cityBuildUrlsService;