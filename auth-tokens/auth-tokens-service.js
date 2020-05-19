const db = require('../models/index.js');

const authTokensService = {

    deleteAuths() {
        db.authorizations.destroy({ 
            truncate: true,
            cascade: false,
            restartIdentity: true 
        })
    },

    createAuth(auth) {
        db.authorizations.create(
            auth
        )
    },

    getAuth(userId) {
        const auth = db.authorizations.findAll({
            attributes: [
                'user_id',
                'token',
                'expired'
            ],
            where: {
                user_id: userId,
                expired: false
            }
        });
        return auth;
    }

}

module.exports = authTokensService;