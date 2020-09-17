('use strict');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Personals', {
      id: {
        allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      candidateId: {
        type: Sequelize.UUID,
        references: {
          model: 'Candidates',
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
      honesty: {
        type: Sequelize.TEXT,
      },
      recommendations: {
        type: Sequelize.TEXT,
      },
      comments: {
        type: Sequelize.TEXT,
      },
      signature: {
        type: Sequelize.TEXT,
      },
      date: {
        type: Sequelize.DATE,
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
    return queryInterface.dropTable('Personals');
  },
};