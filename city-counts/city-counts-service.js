const db = require('../models/index.js');

const cityCountsService = {

    deleteJobUrls() {
        db.city_counts.destroy({ 
            truncate: true,
            cascade: false,
            restartIdentity: true 
        })
    },

    createJobUrls(counts) {
        db.city_counts.bulkCreate(
            counts
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

}

module.exports = cityCountsService;