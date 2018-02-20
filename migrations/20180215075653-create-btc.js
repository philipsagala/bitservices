'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('btcs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      symbol: {
        type: Sequelize.STRING
      },
      source: {
        type: Sequelize.STRING
      },
      price_usd: {
        type: Sequelize.DECIMAL
      },
      price_btc: {
        type: Sequelize.DECIMAL
      },
      day_volume_usd: {
        type: Sequelize.DECIMAL
      },
      market_cap_usd: {
        type: Sequelize.DECIMAL
      },
      available_supply: {
        type: Sequelize.DECIMAL
      },
      total_supply: {
        type: Sequelize.DECIMAL
      },
      max_supply: {
        type: Sequelize.DECIMAL
      },
      percent_change_hour: {
        type: Sequelize.DECIMAL
      },
      percent_change_day: {
        type: Sequelize.DECIMAL
      },
      percent_change_week: {
        type: Sequelize.DECIMAL
      },
      last_updated: {
        type: Sequelize.DATE
      },
      last_updated_timestamp: {
        type: Sequelize.STRING
      },
      price_idr: {
        type: Sequelize.DECIMAL
      },
      day_volume_idr: {
        type: Sequelize.DECIMAL
      },
      market_cap_idr: {
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('btcs');
  }
};