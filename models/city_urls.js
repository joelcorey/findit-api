'use strict';
module.exports = (sequelize, DataTypes) => {
  const city_urls = sequelize.define('city_urls', {
    city_name: DataTypes.STRING,
    territory_name: DataTypes.STRING,
    city_url: DataTypes.STRING,
    city_country: DataTypes.STRING
  }, {});
  city_urls.associate = function(models) {
    // associations can be defined here
  };
  return city_urls;
};