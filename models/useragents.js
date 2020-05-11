'use strict';
module.exports = (sequelize, DataTypes) => {
  const useragents = sequelize.define('useragents', {
    useragent: DataTypes.STRING,
    lifecycle: DataTypes.INTEGER,
    error: DataTypes.TEXT
  }, {});
  useragents.associate = function(models) {
    // associations can be defined here
  };
  return useragents;
};