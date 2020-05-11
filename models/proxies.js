'use strict';
module.exports = (sequelize, DataTypes) => {
  const proxies = sequelize.define('proxies', {
    proxy: DataTypes.STRING,
    port: DataTypes.STRING,
    lifecycle: DataTypes.INTEGER
  }, {});
  proxies.associate = function(models) {
    // associations can be defined here
  };
  return proxies;
};