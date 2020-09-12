'use strict';
module.exports = (sequelize, DataTypes) => {
  const performanceStandard = sequelize.define(
    'performanceStandard',
    {
      jobPerformance: DataTypes.TEXT,
      conduct: DataTypes.TEXT,
      reliability: DataTypes.TEXT,
      relWithColleagues: DataTypes.TEXT,
    },
    {}
  );
  performanceStandard.associate = function (models) {
    // associations can be defined here
    const { Experienced } = models;
    performanceStandard.belongsTo(Experienced, {
      foreign: 'performanceStandardId',
    });
  };
  return performanceStandard;
};
