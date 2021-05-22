'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'provider');
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'users',
      'provider',
      {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      }
    );
  }
};
