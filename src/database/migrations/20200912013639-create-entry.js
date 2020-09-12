'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Entries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      refId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Referees',
          key: 'id',
        },
        allowNull: false,
      },
      relationship: {
        type: Sequelize.STRING,
      },
      howLong: {
        type: Sequelize.STRING,
      },
      conduct: {
        type: Sequelize.STRING,
      },
      reliability: {
        type: Sequelize.STRING,
      },
      leadershipQualities: {
        type: Sequelize.STRING,
      },
      socialTraits: {
        type: Sequelize.STRING,
      },
      occupation: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Entries');
  },
};
