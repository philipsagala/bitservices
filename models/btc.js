'use strict';
module.exports = (sequelize, DataTypes) => {
  var btc = sequelize.define('btc', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    symbol: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    source: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price_usd: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    price_btc: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    day_volume_usd: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    market_cap_usd: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    available_supply: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    total_supply: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    max_supply: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    percent_change_hour: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    percent_change_day: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    percent_change_week: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    last_updated_timestamp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price_idr: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    day_volume_idr: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    market_cap_idr: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  }, {});
  btc.associate = function(models) {
    // associations can be defined here
  };
  return btc;
};