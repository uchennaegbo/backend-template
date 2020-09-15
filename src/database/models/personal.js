'use strict';
module.exports = (sequelize, DataTypes) => {
  const Personal = sequelize.define(
    'Personal',
    {
      staffId: DataTypes.INTEGER,
      relationship: DataTypes.STRING,
      howLong: DataTypes.STRING,
      conduct: DataTypes.STRING,
      reliability: DataTypes.STRING,
      leadershipQualities: DataTypes.STRING,
      socialTraits: DataTypes.STRING,
      occupation: DataTypes.TEXT,
      honesty: DataTypes.TEXT,
      recommendations: DataTypes.TEXT,
      comments: DataTypes.TEXT,
      signature: DataTypes.TEXT,
      date: DataTypes.DATE,
    },
    {}
  );
  Personal.associate = function (models) {
    // associations can be defined here
    const { Referee } = models;
    Personal.belongsTo(Staff, {
      foreign: 'staffId',
    });
  };
  return Personal;
};
