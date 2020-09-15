'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Work', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      refId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Staffs',
          key: 'id',
        },
      },
      dateJoined: {
        type: Sequelize.DATE,
      },
      dateLeft: {
        type: Sequelize.DATE,
      },
      reasons: {
        type: Sequelize.STRING,
      },
      otherComments: {
        type: Sequelize.TEXT,
      },
      finalSalary: {
        type: Sequelize.INTEGER,
      },
      otherAllowances: {
        type: Sequelize.INTEGER,
      },
      lastPositionHeld: {
        type: Sequelize.STRING,
      },
      performanceStandardId: {
        type: Sequelize.INTEGER,
        foreignKey: {
          model: 'perfomanceStandards',
          key: 'id',
        },
        allowNull: false,
      },
      reEmploy: {
        type: Sequelize.TEXT,
      },
      designation: {
        type: Sequelize.TEXT,
      },
      honesty: {
        type: Sequelize.TEXT,
      },
      recommendations: {
        type: Sequelize.TEXT,
      },
      generalComments: {
        type: Sequelize.TEXT,
      },
      signature: {
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
    return queryInterface.dropTable('Work');
  },
};
