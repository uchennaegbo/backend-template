('use strict');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('performanceStandards', {
      id: {
        allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
        type: Sequelize.UUID,
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
    return queryInterface.dropTable('performanceStandards');
  },
};
