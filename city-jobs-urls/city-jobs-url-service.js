const db = require('../models/index.js');

const cityBuildJobsService = {

    deleteJobUrls() {
        db.job_urls.destroy({ 
            truncate: true,
            cascade: false,
            restartIdentity: true 
        })
    },

    createJobUrls(jobs) {
        db.job_urls.bulkCreate(
            jobs
        )
    }

}

module.exports = cityBuildJobsService;