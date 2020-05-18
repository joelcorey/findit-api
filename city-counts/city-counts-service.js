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

}

module.exports = cityCountsService;