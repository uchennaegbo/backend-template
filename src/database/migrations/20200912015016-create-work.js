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
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      coy: {
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
        type: Sequelize.STRING,
      },
      otherAllowances: {
        type: Sequelize.STRING,
      },
      lastPositionHeld: {
        type: Sequelize.STRING,
      },
      jobPerformance: {
        type: Sequelize.TEXT,
      },
      conduct: {
        type: Sequelize.TEXT,
      },
      reliability: {
        type: Sequelize.TEXT,
      },
      relWithColleagues: {
        type: Sequelize.TEXT,
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
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      date: {
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Works');
  },
};
