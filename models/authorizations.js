'use strict';
module.exports = (sequelize, DataTypes) => {
  const Authorizations = sequelize.define('Authorizations', {
    user_id: DataTypes.STRING,
    token: DataTypes.STRING
  }, {});
  Authorizations.associate = function(models) {
    // associations can be defined here
  };
  return Authorizations;
};