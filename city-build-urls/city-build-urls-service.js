const db = require('../models/index.js');

const cityBuildUrlsService = {

    createCityUrl(cityUrl) {
        db.city_urls.findOrCreate({ where: { 
            city_name: cityName,
            territory_name: territoryName,
            city_url: cityUrl,
            city_country: cityCountry
         } })
    },

    createCityUrls(cityUrls) {
        for (let i = 0; i < cityUrls.length; i++) {
            this.createCityUrl(cityUrls[i]);
        }
    }
}

module.exports = cityBuildUrlsService;