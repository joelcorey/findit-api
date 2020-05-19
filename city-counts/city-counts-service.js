const db = require('../models/index.js');

const cityCountsService = {

    deleteCounts() {
        db.city_counts.destroy({ 
            truncate: true,
            cascade: false,
            restartIdentity: true 
        })
    },

    createCounts(counts) {
        db.city_counts.bulkCreate(
            counts
        )
    },

    getCounts() {
        const counts = db.city_counts.findAll({
            attributesd: [
                'territory_name',
                'city_country',
                'total'
            ]
        });
        return counts;
    }

}

module.exports = cityCountsService;

// const cities = db.city_urls.findAll({
//     attributes: [
//         'city_name',
//         'territory_name', 
//         'city_url', 
//         'city_country'
//     ]
// });
// return cities;
// },