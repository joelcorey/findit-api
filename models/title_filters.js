'use strict';
module.exports = (sequelize, DataTypes) => {
  const title_filters = sequelize.define('title_filters', {
    filter: DataTypes.STRING,
    lifecycle: DataTypes.INTEGER,
    error: DataTypes.TEXT
  }, {});
  title_filters.associate = function(models) {
    // associations can be defined here
  };
  return title_filters;
};