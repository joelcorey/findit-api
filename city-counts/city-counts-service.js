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

}

module.exports = cityCountsService;