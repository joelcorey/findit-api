const db = require('../models/index.js');

const cityBuildUrlsService = (data) => {

    const createCityUrl = (city) => {
        db.city_urls.findOrCreate({ where: { 
            city_name: city.cityName,
            territory_name: city.territoryName,
            city_url: city.cityUrl,
            city_country: city.countryName
         } })
    }

    const createCityUrls = (cities) => {
        for (let i = 0; i < cities.length; i++) {
            createCityUrl(cities[i]);
        }
    }

    createCityUrls(data);

}

module.exports = {
    cityBuildUrlsService,
};