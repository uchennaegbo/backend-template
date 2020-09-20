'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Works', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      candidateId: {
        type: Sequelize.UUID,
        references: {
          model: 'Candidates',
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
        type: Sequelize.UUID,
        references: {
          model: 'performanceStandards',
          key: 'id',
        },
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
    return queryInterface.dropTable('Works');
  },
};
