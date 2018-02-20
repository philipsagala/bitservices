'use strict';
module.exports = (sequelize, DataTypes) => {
  var currency = sequelize.define('currency', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rate: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  currency.associate = function(models) {
    // associations can be defined here
  };
  return currency;
};
