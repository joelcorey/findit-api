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

   

    // Find all cities in a state

    // Find all cities in a region (Pacific Northwest, West Coast, Midwest, etc)

    // Find specific city, might return multiple if same name of city across multiple states

    // Find specific city in specific state

}

module.exports = cityBuildUrlsService;

/*
get count of cities where territory_name unique, this will inform front end of how many cities are left 
and other useful data

WORKING:
SELECT territory_name, city_country, COUNT(*) AS total FROM city_urls GROUP BY territory_name, city_country ORDER BY territory_name;
*/