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

    /*
    Working raw SQL statement for getting count of cities in each state:
        SELECT territory_name, city_country, COUNT(*) AS total 
        FROM city_urls 
        GROUP BY territory_name, city_country 
        ORDER BY territory_name;

    Working SQL translated in to Sequelize ORM talk:
    */
    getCityUrlsCounts() {
        db.city_urls.findAll(
            {
                attributes: 
                [
                    'territory_name', 
                    'city_country',
                    [sequelize.fn('COUNT', sequelize.col('*'))]
                ],
                group:
                [
                    'territory_name',
                    'city_country'
                ],
                order:
                [
                    'territory_name'
                ]
            }
        )
    }

    // DONE: Find all cities in a state
    // TO FRONT END: Find all cities in a region (Pacific Northwest, West Coast, Midwest, etc)
    // TO FRONT END: Find specific city, might return multiple if same name of city across multiple states
    // TO FRONT END: Find specific city in specific state
}

module.exports = cityBuildUrlsService;