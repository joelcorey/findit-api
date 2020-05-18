'use strict';
module.exports = (sequelize, DataTypes) => {
  const city_counts = sequelize.define('city_counts', {
    territory_name: DataTypes.STRING,
    city_country: DataTypes.STRING,
    total: DataTypes.INTEGER
  }, {});
  city_counts.associate = function(models) {
    // associations can be defined here
  };
  return city_counts;
};